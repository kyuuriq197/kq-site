import { useEffect, useState } from 'react';

interface EntryScreenProps {
  onDone: () => void;
}

export function EntryScreen({ onDone }: EntryScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(onDone, 300);
    }, 900);
    return () => window.clearTimeout(t);
  }, [onDone]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'grid',
        placeItems: 'center',
        background: 'var(--md-sys-color-background)',
        transition: 'opacity 300ms ease',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <md-circular-progress indeterminate />
        <span style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: 14, fontWeight: 500 }}>
          Loading portfolio
        </span>
      </div>
    </div>
  );
}