import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// 고양이 이미지 (public 폴더). 파일이 없으면 이모지로 자동 대체됩니다.
const CAT_IMG = {
  idle: '/cat-idle.png', // 평상시
  pet: '/cat-pet.png', // 만졌을 때 (안 걸림)
  run: '/cat-run.png', // 걸려서 튀는 모습
};

interface CatGameProps {
  playerCount: number;
  onHome: () => void;
}

type Status = 'playing' | 'bolting' | 'done';

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 매 판: 두 바퀴(1~2N번째) 안에서 균등하게 걸림.
// 걸리는 사람(loserNum)은 각자 1/N로 동일 — 2N개 위치가 각 번호에 2개씩 배정되기 때문.
function pickRound(playerCount: number) {
  const triggerPet = randomInt(1, playerCount * 2); // 두 바퀴 안, 균등
  const loserNum = ((triggerPet - 1) % playerCount) + 1;
  return { loserNum, triggerPet };
}

// 모바일 진동
function triggerHaptics() {
  try {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([0, 90, 50, 90, 50, 120, 40, 300]);
    }
  } catch {
    /* 무시 */
  }
}

// 괴성(놀라는 소리) — Web Audio로 즉석 생성
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
  const [round, setRound] = useState(() => pickRound(playerCount));
  const [status, setStatus] = useState<Status>('playing');
  const [reacting, setReacting] = useState(false);
  const [boltStyle, setBoltStyle] = useState<CSSProperties>({});
  const [useEmoji, setUseEmoji] = useState(false);
  const reactTimer = useRef<ReturnType<typeof setTimeout>>();

  const currentNum = (pets % playerCount) + 1;

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
    const petNumber = pets + 1;
    if (petNumber === round.triggerPet) {
      // 걸림! (현재 차례 = round.loserNum) 튀기 + 진동 + 괴성 (클릭 제스처 안에서 실행)
      triggerHaptics();
      playScream();
      setStatus('bolting');
    } else {
      setPets(petNumber);
      setReacting(true);
      clearTimeout(reactTimer.current);
      reactTimer.current = setTimeout(() => setReacting(false), 450);
    }
  };

  const handleRestart = () => {
    setPets(0);
    setRound(pickRound(playerCount));
    setStatus('playing');
    setReacting(false);
    setBoltStyle({});
  };

  const catPhase: keyof typeof CAT_IMG =
    status === 'bolting' || status === 'done' ? 'run' : reacting ? 'pet' : 'idle';
  const catEmoji =
    status === 'bolting' || status === 'done' ? '🙀' : reacting ? '😸' : '😺';

  const catNode = useEmoji ? (
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

  return (
    <div
      className={cn(
        'relative min-h-screen p-4 flex flex-col items-center overflow-hidden',
        status === 'done'
          ? 'bg-gradient-to-b from-red-100 to-orange-200'
          : 'bg-gradient-to-b from-amber-50 to-orange-100'
      )}
    >
      {/* Header */}
      <div className="text-center mt-4 mb-6 z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground">🐱 고만튀 🐱</h1>
        <p className="text-muted-foreground mt-1">번갈아 쓰다듬다가 고양이가 튀면 벌칙!</p>
      </div>

      {status === 'playing' && (
        <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-6 z-10">
          {/* 현재 차례 */}
          <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-2xl shadow-soft">
            <span className="text-sm text-muted-foreground">지금은</span>
            <span className="font-bold text-xl text-primary">{currentNum}번</span>
            <span className="font-bold text-lg text-foreground">차례!</span>
          </div>

          {/* 고양이 */}
          <button
            onClick={handlePet}
            className="focus:outline-none active:scale-95 transition-transform"
            aria-label="고양이 쓰다듬기"
          >
            {catNode}
          </button>

          <div className="text-center space-y-1">
            <p className="text-sm text-muted-foreground">
              쓰다듬은 횟수: <strong className="text-foreground">{pets}</strong>
            </p>
            <p className="text-xs text-muted-foreground">언제 튈지 몰라요…</p>
          </div>

          <Button
            onClick={handlePet}
            size="lg"
            className="text-xl px-10 py-6 rounded-2xl shadow-button bg-orange-500 hover:bg-orange-600 text-white"
          >
            🖐️ 쓰다듬기
          </Button>
        </div>
      )}

      {status === 'bolting' && (
        <div className="flex-1 w-full flex flex-col items-center justify-center z-10">
          <div style={{ transition: 'transform 0.09s linear', ...boltStyle }}>{catNode}</div>
          <p className="mt-8 text-2xl font-bold text-destructive animate-pulse">고양이가 튀었다! 💨</p>
        </div>
      )}

      {status === 'done' && (
        <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center gap-6 z-10">
          {catNode}
          <h2 className="text-3xl font-bold text-destructive">고만튀! 😱</h2>

          <div className="text-center p-6 rounded-2xl border-2 border-destructive/30 bg-gradient-to-br from-destructive/20 to-destructive/5 animate-pulse">
            <div className="text-5xl mb-2">💣</div>
            <div className="font-bold text-destructive text-2xl">{round.loserNum}번 벌칙 당첨!</div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleRestart} size="lg" className="text-lg px-8 py-4 rounded-2xl shadow-button">
              🔄 다시 하기
            </Button>
            <Button onClick={onHome} size="lg" variant="outline" className="text-lg px-8 py-4 rounded-2xl">
              🏠 첫화면으로
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
