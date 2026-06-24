import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  getPenaltyStats,
  resetLocalPenaltyStats,
  isSupabaseEnabled,
  AnimalStat,
} from '@/lib/penaltyStats';

const FLIP_EMOJIS = ['🦄', '🐔', '🐦‍🔥', '🐣'];

const Stats = () => {
  const [stats, setStats] = useState<AnimalStat[]>([]);
  const [loading, setLoading] = useState(true);

  const loadStats = () => {
    setLoading(true);
    getPenaltyStats()
      .then(setStats)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadStats();
  }, []);

  const total = stats.reduce((sum, s) => sum + s.count, 0);
  const max = stats.reduce((m, s) => Math.max(m, s.count), 0);

  const handleReset = () => {
    if (window.confirm('이 기기의 벌칙 통계를 초기화할까요? 되돌릴 수 없습니다.')) {
      resetLocalPenaltyStats();
      loadStats();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full py-4 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← 게임으로 돌아가기
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <span className="text-sm font-semibold text-foreground">🐾 Speedy Paws Race</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 py-12 px-6">
        <div className="max-w-2xl mx-auto space-y-8">

          {/* Title */}
          <section className="text-center space-y-3">
            <div className="text-6xl">📊</div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">벌칙 당첨 통계</h1>
            <p className="text-muted-foreground leading-relaxed">
              어떤 동물이 벌칙에 가장 많이 당첨됐는지 확인하세요.<br />
              {isSupabaseEnabled
                ? '전 세계 모든 플레이어의 결과가 합산됩니다.'
                : '경주가 끝날 때마다 이 기기에 자동으로 기록됩니다.'}
            </p>
            <span className="inline-block text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
              {isSupabaseEnabled ? '🌐 전체 사용자 합산 통계' : '💾 이 기기 기록'}
            </span>
          </section>

          {loading ? (
            <section className="bg-card rounded-2xl p-10 border border-border text-center text-muted-foreground">
              불러오는 중…
            </section>
          ) : stats.length === 0 ? (
            /* Empty state */
            <section className="bg-card rounded-2xl p-10 border border-border text-center space-y-4">
              <div className="text-5xl">🏁</div>
              <p className="text-foreground/80">
                아직 기록이 없어요.<br />
                경주를 진행하면 벌칙 통계가 쌓입니다!
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                🏃 경주 시작하기
              </Link>
            </section>
          ) : (
            <>
              {/* Summary */}
              <section className="grid grid-cols-2 gap-3">
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <div className="text-2xl font-bold text-foreground">{total}</div>
                  <div className="text-xs text-muted-foreground">총 당첨 횟수</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <div className="text-2xl font-bold text-foreground">{stats.length}</div>
                  <div className="text-xs text-muted-foreground">등장한 캐릭터</div>
                </div>
              </section>

              {/* Bar chart */}
              <section className="bg-card rounded-2xl p-6 border border-border space-y-4">
                <h2 className="font-semibold text-foreground text-sm">캐릭터별 벌칙 당첨 횟수</h2>
                <div className="space-y-3">
                  {stats.map((s, index) => (
                    <div key={s.emoji} className="flex items-center gap-3">
                      {/* Label */}
                      <div className="w-20 shrink-0 flex items-center gap-1.5 text-sm">
                        <span
                          className="text-xl"
                          style={
                            FLIP_EMOJIS.includes(s.emoji)
                              ? { display: 'inline-block', transform: 'scaleX(-1)' }
                              : undefined
                          }
                        >
                          {s.emoji}
                        </span>
                        <span className="text-muted-foreground truncate">{s.name}</span>
                      </div>
                      {/* Bar */}
                      <div className="flex-1 flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                          <div
                            className={`h-full rounded-full flex items-center justify-end pr-2 transition-all ${
                              index === 0 ? 'bg-destructive' : 'bg-primary'
                            }`}
                            style={{ width: `${Math.max((s.count / max) * 100, 8)}%` }}
                          >
                            <span className="text-xs font-bold text-white">{s.count}</span>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground w-8 shrink-0">{s.count}회</span>
                      </div>
                    </div>
                  ))}
                </div>
                {stats.length > 0 && (
                  <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                    👑 가장 많이 당첨된 캐릭터: <strong className="text-destructive">{stats[0].emoji} {stats[0].name}</strong> ({stats[0].count}회)
                  </p>
                )}
              </section>

              {/* Reset (로컬 모드일 때만) */}
              {!isSupabaseEnabled && (
                <div className="flex justify-center">
                  <Button variant="outline" onClick={handleReset} className="rounded-xl">
                    🗑️ 통계 초기화
                  </Button>
                </div>
              )}
            </>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stats;
