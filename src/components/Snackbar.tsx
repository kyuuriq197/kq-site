import { useEffect, useRef, useState } from 'react';

interface SnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
  /** auto-hide delay */
  timeoutMs?: number;
}

/** Material 3 snackbar (inverse surface, fixed to the bottom). */
export function Snackbar({ open, onClose, message, timeoutMs = 2500 }: SnackbarProps) {
  const [render, setRender] = useState(open);
  const [visible, setVisible] = useState(false);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (open) {
      setRender(true);
      const raf = requestAnimationFrame(() => setVisible(true));
      const timer = window.setTimeout(() => closeRef.current(), timeoutMs);
      return () => { cancelAnimationFrame(raf); window.clearTimeout(timer); };
    }
    setVisible(false);
    const t = window.setTimeout(() => setRender(false), 300);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!render) return null;

  return (
    <div className={`snackbar${visible ? ' in' : ''}`} role="status">
      <span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
      {message}
    </div>
  );
}
