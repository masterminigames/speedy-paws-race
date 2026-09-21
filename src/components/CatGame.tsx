import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// 고양이 이미지 (public 폴더). 파일이 없으면 이모지로 자동 대체됩니다.
const CAT_IMG = {
  idle: '/cat-idle.png', // 평상시
  pet: '/cat-pet.png', // 만졌을 때 (안 걸림)
  run: '/cat-run.png', // 걸려서 튀는 모습
};

// 누를 때마다 랜덤으로 바뀌는 고양이 대사
const CAT_LINES = [
  '만져봐라 냥~',
  '간지럽다냥 ㅎㅎ',
  '기분 좋다냥',
  '한 번 더 해보라냥',
  '화낸다냥…?',
  '슬슬 위험하다냥',
  '조심하라냥 😾',
  '계속 해도 되냥?',
  '이러다 튄다냥!',
  '거기 말고 여기다냥',
];

interface CatGameProps {
  playerCount: number;
  onHome: () => void;
}

type Status = 'playing' | 'bolting' | 'done';

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomLine(prev?: string): string {
  let line = CAT_LINES[randomInt(0, CAT_LINES.length - 1)];
  if (CAT_LINES.length > 1) {
    while (line === prev) line = CAT_LINES[randomInt(0, CAT_LINES.length - 1)];
  }
  return line;
}

// 몇 번째 쓰다듬을 때 튈지 랜덤으로 숨김 (인원수에 비례해 길이 조절)
function randomThreshold(playerCount: number): number {
  return randomInt(2, Math.max(4, playerCount * 2));
}

function triggerHaptics() {
  try {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([0, 90, 50, 90, 50, 120, 40, 300]);
    }
  } catch {
    /* 무시 */
  }
}

function playScream() {
  try {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const now = ctx.currentTime;
    const dur = 1.5;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.55, now + 0.03);
    master.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    master.connect(ctx.destination);

    [0, 18].forEach((detune) => {
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.detune.value = detune;
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(1700, now + 0.2);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.55);
      osc.frequency.exponentialRampToValueAtTime(1900, now + 0.95);
      osc.frequency.exponentialRampToValueAtTime(700, now + dur);
      osc.connect(master);
      osc.start(now);
      osc.stop(now + dur);
    });

    setTimeout(() => ctx.close().catch(() => {}), 2000);
  } catch {
    /* 무시 */
  }
}

export function CatGame({ playerCount, onHome }: CatGameProps) {
  const [pets, setPets] = useState(0);
  const [threshold, setThreshold] = useState(() => randomThreshold(playerCount));
  const [status, setStatus] = useState<Status>('playing');
  const [line, setLine] = useState(() => randomLine());
  const [reacting, setReacting] = useState(false);
  const [boltStyle, setBoltStyle] = useState<CSSProperties>({});
  const [useEmoji, setUseEmoji] = useState(false);
  const reactTimer = useRef<ReturnType<typeof setTimeout>>();

  // 튀는 애니메이션 (사방팔방)
  useEffect(() => {
    if (status !== 'bolting') return;
    const move = setInterval(() => {
      const x = (Math.random() * 2 - 1) * 38;
      const y = (Math.random() * 2 - 1) * 26;
      const r = (Math.random() * 2 - 1) * 45;
      const s = 0.85 + Math.random() * 0.5;
      setBoltStyle({ transform: `translate(${x}vw, ${y}vh) rotate(${r}deg) scale(${s})` });
    }, 100);
    const finish = setTimeout(() => {
      clearInterval(move);
      setBoltStyle({});
      setStatus('done');
    }, 1900);
    return () => {
      clearInterval(move);
      clearTimeout(finish);
    };
  }, [status]);

  useEffect(() => () => clearTimeout(reactTimer.current), []);

  const handlePet = () => {
    if (status !== 'playing') return;
    const next = pets + 1;
    if (next >= threshold) {
      // 걸림! (지금 만진 사람) 튀기 + 진동 + 괴성
      triggerHaptics();
      playScream();
      setStatus('bolting');
    } else {
      setPets(next);
      setLine((prev) => randomLine(prev));
      setReacting(true);
      clearTimeout(reactTimer.current);
      reactTimer.current = setTimeout(() => setReacting(false), 450);
    }
  };

  const handleRestart = () => {
    setPets(0);
    setThreshold(randomThreshold(playerCount));
    setStatus('playing');
    setLine(randomLine());
    setReacting(false);
    setBoltStyle({});
  };

  const catPhase: keyof typeof CAT_IMG =
    status === 'bolting' || status === 'done' ? 'run' : reacting ? 'pet' : 'idle';
  const catEmoji =
    status === 'bolting' || status === 'done' ? '🙀' : reacting ? '😸' : '😺';

  const catImg = useEmoji ? (
    <span className="block text-[7rem] md:text-[9rem] leading-none select-none">{catEmoji}</span>
  ) : (
    <img
      src={CAT_IMG[catPhase]}
      onError={() => setUseEmoji(true)}
      alt="고양이"
      draggable={false}
      className="w-52 h-52 md:w-64 md:h-64 object-contain select-none pointer-events-none"
    />
  );

  const caught = status === 'bolting' || status === 'done';

  return (
    <div
      className={cn(
        'relative min-h-screen p-4 flex flex-col items-center overflow-hidden transition-colors',
        caught ? 'cat-rainbow-flash' : 'bg-gradient-to-b from-amber-50 to-orange-100'
      )}
    >
      {/* Header */}
      <div className="text-center mt-4 mb-4 z-10">
        <h1
          className={cn(
            'text-2xl md:text-4xl font-bold',
            caught ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]' : 'text-foreground'
          )}
        >
          🐱 고만튀 🐱
        </h1>
      </div>

      {status === 'playing' && (
        <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-5 z-10">
          {/* 말풍선 대사 */}
          <div className="relative">
            <div className="bg-card px-5 py-3 rounded-2xl shadow-soft border border-border">
              <span className="font-bold text-lg text-foreground">{line}</span>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
          </div>

          {/* 고양이 (탭해서 쓰다듬기) */}
          <button
            onClick={handlePet}
            className="focus:outline-none active:scale-95 transition-transform"
            aria-label="고양이 쓰다듬기"
          >
            {catImg}
          </button>

          {/* 쓰다듬은 횟수 */}
          <div className="bg-card px-6 py-3 rounded-2xl shadow-soft text-center">
            <span className="text-sm text-muted-foreground">쓰다듬은 횟수 </span>
            <strong className="text-lg text-foreground">{pets}</strong>
            <p className="text-xs text-muted-foreground mt-0.5">고양이를 눌러서 쓰다듬어요 · 언제 튈지 몰라요!</p>
          </div>
        </div>
      )}

      {status === 'bolting' && (
        <div className="flex-1 w-full flex flex-col items-center justify-center z-10">
          <div style={{ transition: 'transform 0.09s linear', ...boltStyle }}>{catImg}</div>
          <p className="mt-8 text-3xl font-black text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] animate-pulse">
            고양이가 튀었다! 💨
          </p>
        </div>
      )}

      {status === 'done' && (
        <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-6 z-10">
          {catImg}
          <div className="text-center bg-white/90 backdrop-blur rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-5xl mb-2">💥</div>
            <h2 className="text-3xl font-black text-destructive">고만튀! 😱</h2>
            <p className="mt-2 text-lg font-bold text-foreground">지금 만진 사람 벌칙 당첨!</p>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleRestart} size="lg" className="text-lg px-8 py-4 rounded-2xl shadow-button">
              🔄 다시 하기
            </Button>
            <Button
              onClick={onHome}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 rounded-2xl bg-white/90"
            >
              🏠 첫화면으로
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
