import { useMemo } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  swayAmount: number;
}

export function CherryBlossoms() {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: -10 + Math.random() * 160,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 10 + Math.random() * 14,
      opacity: 0.5 + Math.random() * 0.5,
      swayAmount: 20 + Math.random() * 40,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: petal.opacity,
            '--sway': `${petal.swayAmount}px`,
          } as React.CSSProperties}
        >
          <span style={{ fontSize: `${petal.size}px` }}>🌸</span>
        </div>
      ))}
    </div>
  );
}
