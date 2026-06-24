// 동물별 벌칙 당첨 횟수 통계.
// Supabase가 설정돼 있으면 전체 사용자 합산 통계를 사용하고,
// 없으면 브라우저(localStorage) 기반 개인 통계로 자동 폴백합니다.

import { supabase, isSupabaseEnabled } from './supabase';

const STORAGE_KEY = 'speedy-paws-penalty-stats';

export interface AnimalStat {
  emoji: string;
  name: string;
  count: number;
}

export { isSupabaseEnabled };

/* ---------------- 로컬(localStorage) 구현 ---------------- */

type StatMap = Record<string, AnimalStat>;

function readLocalMap(): StatMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StatMap) : {};
  } catch {
    return {};
  }
}

function recordLocal(animals: { emoji: string; name: string }[]): void {
  try {
    const map = readLocalMap();
    for (const a of animals) {
      const existing = map[a.emoji];
      map[a.emoji] = { emoji: a.emoji, name: a.name, count: (existing?.count ?? 0) + 1 };
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // 무시
  }
}

function getLocal(): AnimalStat[] {
  return Object.values(readLocalMap()).sort((a, b) => b.count - a.count);
}

/* ---------------- 공개 API (async) ---------------- */

/** 한 경주의 벌칙 당첨 동물들을 기록(각 1회 +) */
export async function recordPenalties(animals: { emoji: string; name: string }[]): Promise<void> {
  if (animals.length === 0) return;

  if (isSupabaseEnabled && supabase) {
    try {
      await Promise.all(
        animals.map((a) =>
          supabase.rpc('increment_penalty', { p_emoji: a.emoji, p_name: a.name })
        )
      );
      return;
    } catch {
      // 서버 실패 시 로컬에라도 기록
    }
  }
  recordLocal(animals);
}

/** 당첨 횟수 내림차순 통계 반환 */
export async function getPenaltyStats(): Promise<AnimalStat[]> {
  if (isSupabaseEnabled && supabase) {
    try {
      const { data, error } = await supabase
        .from('penalty_stats')
        .select('emoji, name, count')
        .order('count', { ascending: false });
      if (error) throw error;
      return (data ?? []).map((r) => ({
        emoji: r.emoji as string,
        name: r.name as string,
        count: Number(r.count),
      }));
    } catch {
      // 폴백
    }
  }
  return getLocal();
}

/** 로컬 통계 초기화 (전체 합산 모드에서는 본인 기기 기록만 영향 없음 — 서버는 그대로) */
export function resetLocalPenaltyStats(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // 무시
  }
}
