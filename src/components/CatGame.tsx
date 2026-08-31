import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Animal } from '@/types/game';
import { recordPenalties } from '@/lib/penaltyStats';
import { cn } from '@/lib/utils';

const FLIP_EMOJIS = ['🦄', '🐔', '🐦‍🔥', '🐣'];
function flipStyle(emoji: string) {
  return FLIP_EMOJIS.includes(emoji)
    ? { display: 'inline-block', transform: 'scaleX(-1)' as const }
    : undefined;
}

export interface CatPlayer {
  id: number;
  animal: Animal;
}

interface CatGameProps {
  players: CatPlayer[];
  onHome: () => void;
}

// 몇 번째 쓰다듬을 때 냥펀치가 나올지 랜덤으로 숨겨서 정함
function randomThreshold(playerCount: number): number {
  const min = Math.max(2, playerCount); // 최소 한 바퀴 정도는 안전
  const max = playerCount * 3 + 3;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function CatGame({ players, onHome }: CatGameProps) {
  const [turn, setTurn] = useState(0);
  const [pets, setPets] = useState(0);
  const [threshold, setThreshold] = useState(() => randomThreshold(players.length));
  const [status, setStatus] = useState<'playing' | 'done'>('playing');
  const [loser, setLoser] = useState<CatPlayer | null>(null);
  const [reacting, setReacting] = useState(false);

  const current = players[turn];

  // 냥펀치가 가까워질수록 고양이 표정이 점점 사나워짐 (긴장감)
  const ratio = pets / threshold;
  const catFace =
    status === 'done' ? '🙀' : ratio < 0.5 ? '😺' : ratio < 0.85 ? '😼' : '😾';

  const handlePet = () => {
    if (status !== 'playing') return;
    const next = pets + 1;
    if (next >= threshold) {
      // 냥펀치! 현재 플레이어 벌칙 당첨
      setStatus('done');
      setLoser(current);
      recordPenalties([{ emoji: current.animal.emoji, name: current.animal.name }]);
    } else {
      setPets(next);
      setTurn((turn + 1) % players.length);
      setReacting(true);
      setTimeout(() => setReacting(false), 220);
    }
  };

  const handleRestart = () => {
    setTurn(0);
    setPets(0);
    setThreshold(randomThreshold(players.length));
    setStatus('playing');
    setLoser(null);
    setReacting(false);
  };

  return (
    <div
      className={cn(
        'min-h-screen p-4 flex flex-col items-center',
        status === 'done'
          ? 'bg-gradient-to-b from-red-100 to-orange-200'
          : 'bg-gradient-to-b from-amber-50 to-orange-100'
      )}
    >
      {/* Header */}
      <div className="text-center mt-4 mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground">🐱 고양이 만지기 🐱</h1>
        <p className="text-muted-foreground mt-1">
          번갈아 쓰다듬다가 냥펀치를 맞으면 벌칙!
        </p>
      </div>

      {status === 'playing' ? (
        <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-6">
          {/* 현재 차례 */}
          <div className="flex items-center gap-2 bg-card px-5 py-3 rounded-2xl shadow-soft">
            <span className="text-sm text-muted-foreground">지금은</span>
            <span className="text-3xl" style={flipStyle(current.animal.emoji)}>
              {current.animal.emoji}
            </span>
            <span className="font-bold text-lg text-foreground">
              플레이어 {current.id} 차례
            </span>
          </div>

          {/* 고양이 */}
          <button
            onClick={handlePet}
            className="focus:outline-none"
            aria-label="고양이 쓰다듬기"
          >
            <span
              className={cn(
                'block text-[7rem] md:text-[9rem] leading-none select-none transition-transform',
                reacting ? 'scale-90 rotate-6' : 'hover:scale-105'
              )}
            >
              {catFace}
            </span>
          </button>

          <div className="text-center space-y-1">
            <p className="text-sm text-muted-foreground">
              쓰다듬은 횟수: <strong className="text-foreground">{pets}</strong>
            </p>
            <p className="text-xs text-muted-foreground">
              고양이가 점점 예민해지고 있어요…
            </p>
          </div>

          <Button
            onClick={handlePet}
            size="lg"
            className="text-xl px-10 py-6 rounded-2xl shadow-button bg-orange-500 hover:bg-orange-600 text-white"
          >
            🖐️ 쓰다듬기
          </Button>
        </div>
      ) : (
        <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-6">
          {/* 냥펀치 결과 */}
          <div className="relative text-center">
            <span className="block text-[7rem] md:text-[9rem] leading-none animate-pulse">🙀</span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">💥</span>
          </div>

          <h2 className="text-3xl font-bold text-destructive">냥펀치! 💥</h2>

          {loser && (
            <div className="text-center p-6 rounded-2xl border-2 border-destructive/30 bg-gradient-to-br from-destructive/20 to-destructive/5 animate-pulse">
              <div className="text-5xl mb-2">
                <span style={flipStyle(loser.animal.emoji)}>{loser.animal.emoji}</span>
              </div>
              <div className="font-bold text-destructive text-lg flex items-center justify-center gap-1">
                💣 플레이어 {loser.id} 벌칙 당첨!
              </div>
              <div className="text-muted-foreground text-sm mt-1">{loser.animal.name}</div>
            </div>
          )}

          <div className="flex gap-3">
            <Button
              onClick={handleRestart}
              size="lg"
              className="text-lg px-8 py-4 rounded-2xl shadow-button"
            >
              🔄 다시 하기
            </Button>
            <Button
              onClick={onHome}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 rounded-2xl"
            >
              🏠 첫화면으로
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
