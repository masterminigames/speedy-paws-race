import { Player, GamePhase, GameMode } from '@/types/game';
import { RunningAnimal } from '@/components/RunningAnimal';
import { SwimmingAnimal } from '@/components/SwimmingAnimal';
import { cn } from '@/lib/utils';

interface RaceTrackProps {
  players: Player[];
  gamePhase: GamePhase;
  countdown: number;
  elapsedTime: number;
  onStartRace: () => void;
  penaltyRanks: number[];
  stoneEventEnabled?: boolean;
  stoneAppeared?: boolean;
  stoneTargetPlayerId?: number | null;
  gameMode?: GameMode;
  boatEventEnabled?: boolean;
  boatLanePlayerId?: number | null;
  boatConsumed?: boolean;
}

export function RaceTrack({ players, gamePhase, countdown, elapsedTime, penaltyRanks, stoneEventEnabled = false, stoneAppeared = false, stoneTargetPlayerId = null, gameMode = 'running', boatEventEnabled = false, boatLanePlayerId = null, boatConsumed = false }: RaceTrackProps) {
  const isSwimming = gameMode === 'swimming';
  const anyPlayerFallen = players.some(p => p.isFallen);
  const sortedByRank = [...players].sort((a, b) => {
    if (a.rank && b.rank) return a.rank - b.rank;
    if (a.rank) return -1;
    if (b.rank) return 1;
    return b.position - a.position;
  });

  return (
    <div className={cn(
      "min-h-screen p-4 flex flex-col",
      isSwimming
        ? "bg-gradient-to-b from-sky-100 to-blue-200"
        : "bg-gradient-to-b from-background to-track-bg"
    )}>

      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-1">
          {isSwimming ? '🏊 수영 경주 🏊' : '☕ 커피 달리기 경주 ☕'}
        </h1>
        <div className="text-lg text-muted-foreground">
          {gamePhase === 'racing' && (
            <span className="font-mono text-xl">⏱️ 경주 중...</span>
          )}
        </div>
      </div>

      {/* Ranking Board - Show during/after race */}
      {(gamePhase === 'racing' || gamePhase === 'finished') && (
        <div className="mb-4 bg-card rounded-xl p-3 shadow-soft">
          <h3 className="font-semibold text-sm text-card-foreground mb-2">📊 실시간 순위</h3>
          <div className="flex flex-wrap gap-2">
            {sortedByRank.map((player, index) => (
              <div
                key={player.id}
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-lg text-sm",
                  player.rank === 1 && "bg-gold/20 text-gold",
                  penaltyRanks.includes(player.rank || 0) && (isSwimming ? "bg-blue-600/20 text-blue-600 border-2 border-blue-600" : "bg-destructive/20 text-destructive border-2 border-destructive"),
                  !player.rank && "bg-muted",
                  player.rank && player.rank > 1 && !penaltyRanks.includes(player.rank) && "bg-muted"
                )}
              >
                <span className="font-bold">{player.rank || index + 1}.</span>
                <span style={['🦄', '🐔', '🐦‍🔥', '🐣'].includes(player.animal.emoji) ? { display: 'inline-block', transform: player.animal.emoji === '🐦‍🔥' ? 'scale(-2, 2)' : 'scaleX(-1)' } : undefined}>{player.animal.emoji}</span>
                {penaltyRanks.includes(player.rank || 0) && <span>💣</span>}
              </div>
            ))}
          </div>
          {gamePhase === 'finished' && (
            <p className={cn("text-xs mt-2", isSwimming ? "text-blue-600" : "text-destructive")}>
              💣 벌칙 대상: {penaltyRanks.join(', ')}등
            </p>
          )}
        </div>
      )}

      {/* Countdown Overlay */}
      {gamePhase === 'countdown' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="text-9xl font-bold text-white animate-pulse">
              {countdown}
            </div>
            <p className="text-2xl text-white mt-4">준비하세요!</p>
          </div>
        </div>
      )}

      {/* Race Track */}
      <div className={cn(
        "flex-1 rounded-2xl p-3 md:p-4 overflow-hidden",
        isSwimming
          ? "bg-blue-400 shadow-[0_8px_30px_hsl(200,60%,40%/0.3)]"
          : "bg-track shadow-track"
      )}>
        <div className="relative h-full flex flex-col gap-1">
          {/* Start/Finish Lines */}
          <div className={cn(
            "absolute left-8 md:left-16 top-0 bottom-0 w-1 z-10",
            isSwimming ? "bg-white/70" : "bg-white/50"
          )} />
          <div className={cn(
            "absolute right-8 md:right-16 top-0 bottom-0 w-2 z-10",
            isSwimming ? "bg-red-500" : "bg-finish"
          )}>
            {isSwimming ? (
              <div className="h-full w-full bg-[repeating-linear-gradient(0deg,red_0px,red_8px,white_8px,white_16px)]" />
            ) : (
              <div className="h-full w-full bg-[repeating-linear-gradient(0deg,white_0px,white_8px,black_8px,black_16px)]" />
            )}
          </div>

          {/* Lanes */}
          {players.map((player, index) => (
            <div
              key={player.id}
              className={cn(
                "flex-1 min-h-[40px] relative flex items-center rounded-lg",
                isSwimming
                  ? (index % 2 === 0 ? "bg-blue-300/60" : "bg-cyan-300/50")
                  : (index % 2 === 0 ? "bg-lane-even" : "bg-lane-odd")
              )}
            >
              {/* Lane rope (swimming) or lane number */}
              {isSwimming && index > 0 && (
                <div className="absolute left-10 md:left-20 right-10 md:right-20 -top-[2px] h-[3px] z-10 flex items-center">
                  <div className="w-full h-full bg-[repeating-linear-gradient(90deg,hsl(45,90%,50%)_0px,hsl(45,90%,50%)_6px,hsl(200,70%,45%)_6px,hsl(200,70%,45%)_12px)] rounded-full opacity-70" />
                </div>
              )}
              <div className={cn(
                "absolute left-1 md:left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold z-20",
                isSwimming ? "bg-white/90 text-blue-600" : "bg-white/80 text-track"
              )}>
                {index + 1}
              </div>

              {/* Track area */}
              <div className="absolute left-10 md:left-20 right-10 md:right-20 h-full flex items-center">
                {/* 배 부스터 (20% 지점) */}
                {boatEventEnabled && !boatConsumed && player.id === boatLanePlayerId && (
                  <div
                    className="absolute z-15 animate-bounce"
                    style={{ left: '20%', transform: 'translateX(-50%)' }}
                  >
                    <div className="text-3xl" style={{ transform: 'scaleX(-1)' }}>🚤</div>
                  </div>
                )}

                {/* 장애물 표시 (85% 지점) - 충돌 후에는 넘어진 레인에만 표시 */}
                {stoneEventEnabled && stoneAppeared && (!anyPlayerFallen || player.isFallen) && (
                  <div
                    className={cn("absolute z-15", isSwimming ? "animate-wave-sway" : "")}
                    style={{
                      left: '85%',
                      ...(!isSwimming && { transform: 'translateX(-50%)' }),
                    }}
                  >
                    <div className={cn(isSwimming ? "text-4xl" : "text-xl", !isSwimming && "animate-bounce")}>{isSwimming ? '🌊' : '🪨'}</div>
                  </div>
                )}

                {/* Runner */}
                <div
                  className="absolute"
                  style={{
                    left: `${player.position}%`,
                    transform: 'translateX(-50%)',
                    transition: 'left 0.05s linear',
                  }}
                >
                  {/* 넘어진 상태 체크 */}
                  {player.isFallen ? (
                    <div className="relative">
                      <div className={cn(
                        isSwimming ? "animate-slide-fall-left" : "animate-slide-fall-right"
                      )}>
                        {isSwimming ? (
                          <SwimmingAnimal emoji={player.animal.emoji} isSwimming={false} isFinished={false} />
                        ) : (
                          <RunningAnimal emoji={player.animal.emoji} isRunning={false} isFinished={false} />
                        )}
                      </div>
                      <div
                        className="absolute -top-8 animate-dizzy-appear"
                        style={{ left: `calc(50% + ${isSwimming ? '-70px' : '22px'})` }}
                      >
                        <div className="text-3xl animate-spin-slow">{isSwimming ? '🌀' : '💫'}</div>
                      </div>
                    </div>
                  ) : (
                    isSwimming ? (
                      <SwimmingAnimal
                        emoji={player.animal.emoji}
                        isSwimming={gamePhase === 'racing'}
                        isFinished={player.finished}
                      />
                    ) : (
                      <RunningAnimal
                        emoji={player.animal.emoji}
                        isRunning={gamePhase === 'racing'}
                        isFinished={player.finished}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Rank display */}
              {player.rank && (
                <div className="absolute right-1 md:right-2 z-20">
                  <div
                    className={cn(
                      "w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold",
                      player.rank === 1 && "bg-gold text-white",
                      player.rank === 2 && "bg-silver text-white",
                      player.rank === 3 && "bg-bronze text-white",
                      penaltyRanks.includes(player.rank) && (isSwimming ? "bg-blue-600 text-white animate-pulse" : "bg-destructive text-white animate-pulse"),
                      player.rank > 3 && !penaltyRanks.includes(player.rank) && "bg-muted text-muted-foreground"
                    )}
                  >
                    {player.rank}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
