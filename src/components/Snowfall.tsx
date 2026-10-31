import { useMemo } from 'react';

interface SnowfallProps {
  enabled: boolean;
}

export function Snowfall({ enabled }: SnowfallProps) {
  const flakes = useMemo(() => {
    if (!enabled) return [];
    const count = window.matchMedia('(max-width: 640px)').matches ? 24 : 44;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: -Math.random() * 12,
      size: 10 + Math.random() * 14,
      opacity: 0.35 + Math.random() * 0.45
    }));
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="snow" aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="flake"
          style={{
            left: f.left + 'vw',
            animationDuration: f.duration + 's',
            animationDelay: f.delay + 's',
            fontSize: f.size + 'px',
            opacity: f.opacity
          }}
        >
          ❅
        </span>
      ))}
    </div>
  );
}
