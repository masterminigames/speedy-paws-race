import { cn } from '@/lib/utils';

interface SwimmingAnimalProps {
  emoji: string;
  isSwimming: boolean;
  isFinished: boolean;
}

export function SwimmingAnimal({ emoji, isSwimming, isFinished }: SwimmingAnimalProps) {
  const hideLimbs = ['🐣', '🐦‍🔥'].includes(emoji);

  return (
    <div className="relative">
      <div
        className={cn(
          "relative flex flex-col items-center",
          isSwimming && !isFinished && "animate-swimming-bob"
        )}
      >
        {!hideLimbs && (
          <>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 text-xs origin-right"
              style={{
                animation: isSwimming && !isFinished ? 'swim-stroke 0.6s ease-in-out infinite' : 'none'
              }}
            >
              🫷
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 text-xs origin-left"
              style={{
                animation: isSwimming && !isFinished ? 'swim-stroke 0.6s ease-in-out infinite 0.3s' : 'none'
              }}
            >
              🫸
            </div>
          </>
        )}

        {/* Animal emoji */}
        <span
          className="text-2xl md:text-3xl relative z-10"
          style={
            ['🦄', '🐔', '🐦‍🔥', '🐣'].includes(emoji)
              ? { display: 'inline-block', transform: emoji === '🐦‍🔥' ? 'scale(-2, 2)' : 'scaleX(-1)' }
              : undefined
          }
        >{emoji}</span>
      </div>

      {/* Water splash when swimming - big and splashy */}
      {isSwimming && !isFinished && (
        <>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
            <div className="animate-splash-big text-[18px] opacity-80">💦</div>
            <div className="animate-splash-delay text-[15px] opacity-70">💦</div>
            <div className="animate-splash-big-delay text-[12px] opacity-50">💧</div>
          </div>
          <div className="absolute -left-8 -top-1 flex flex-col">
            <div className="animate-splash text-[14px] opacity-60">💦</div>
            <div className="animate-splash-delay-2 text-[11px] opacity-40">💧</div>
          </div>
        </>
      )}

      {/* Bubbles rising */}
      {isSwimming && !isFinished && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="animate-bubble text-[6px]">🫧</div>
          <div className="animate-bubble-delay text-[5px]">🫧</div>
        </div>
      )}

      {/* Sparkle effect when finished */}
      {isFinished && (
        <div className="absolute -top-2 -right-2 animate-pulse">
          <span className="text-sm">✨</span>
        </div>
      )}
    </div>
  );
}
