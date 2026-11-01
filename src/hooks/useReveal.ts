import { useLayoutEffect, useRef } from 'react';

/**
 * Scroll-reveal: the element is prepared for a fade-in, and `.revealed`
 * is added when it enters the viewport (or immediately if it is already
 * visible / motion is reduced). Fail-safe: content is never left hidden.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--reveal-delay', `${delayMs}ms`);

    const alreadyVisible = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window) || alreadyVisible()) {
      el.classList.add('revealed');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('revealed');
            io.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  return ref;
}
