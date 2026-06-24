// 동물별 벌칙 당첨 횟수를 브라우저(localStorage)에 누적 기록합니다.
// 서버 없이 동작하며, 같은 기기/브라우저에서만 집계됩니다.

const STORAGE_KEY = 'speedy-paws-penalty-stats';

export interface AnimalStat {
  emoji: string;
  name: string;
  count: number;
}

type StatMap = Record<string, AnimalStat>;

function readMap(): StatMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StatMap) : {};
  } catch {
    return {};
  }
}

/** 한 경주의 벌칙 당첨 동물들을 기록(각 1회 +) */
export function recordPenalties(animals: { emoji: string; name: string }[]): void {
  if (typeof window === 'undefined' || animals.length === 0) return;
  try {
    const map = readMap();
    for (const a of animals) {
      const existing = map[a.emoji];
      map[a.emoji] = {
        emoji: a.emoji,
        name: a.name,
        count: (existing?.count ?? 0) + 1,
      };
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // 저장 실패는 조용히 무시 (통계는 부가 기능)
  }
}

/** 당첨 횟수 내림차순으로 정렬된 통계 반환 */
export function getPenaltyStats(): AnimalStat[] {
  return Object.values(readMap()).sort((a, b) => b.count - a.count);
}

/** 전체 통계 초기화 */
export function resetPenaltyStats(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // 무시
  }
}
