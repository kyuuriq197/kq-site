import { useEffect } from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onClose, 1800);
    return () => clearTimeout(t);
  }, [message, onClose]);

  if (!message) return null;
  return <div className="toast show">{message}</div>;
}
