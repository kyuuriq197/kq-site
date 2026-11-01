import { useEffect, useRef, useState } from 'react';

interface EntryScreenProps {
  onDone: () => void;
}

/**
 * Splash screen shown only once, while the app is actually powering up.
 * Disappears as soon as it is ready — fonts loaded and window loaded —
 * with a short exit animation. No artificial delays, no stuck timers.
 */
export function EntryScreen({ onDone }: EntryScreenProps) {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    let cancelled = false;
    let hideTimer = 0;
    let goneTimer = 0;
    const shownAt = performance.now();

    const arm = () => {
      document.fonts.ready.then(() => {
        if (cancelled) return;
        const elapsed = performance.now() - shownAt;
        const wait = Math.max(0, 420 - elapsed); // keeps the fade-out smooth
        hideTimer = window.setTimeout(() => {
          if (cancelled) return;
          setLeaving(true);
          goneTimer = window.setTimeout(() => {
            if (cancelled) return;
            setGone(true);
            doneRef.current();
          }, 370);
        }, wait);
      });
    };

    if (document.readyState === 'complete') {
      arm();
    } else {
      window.addEventListener('load', arm, { once: true });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(hideTimer);
      window.clearTimeout(goneTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`splash${leaving ? ' down' : ''}`} aria-hidden="true">
      <div className="splash-inner">
        <div className="splash-mark">k</div>
        <div className="splash-name">kyuuriq</div>
        <div className="splash-track">
          <div className="fill" />
        </div>
      </div>
    </div>
  );
}
