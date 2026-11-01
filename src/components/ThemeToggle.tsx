import { useId } from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const labelId = useId();

  return (
    <md-icon-button
      onClick={onToggle}
      aria-labelledby={labelId}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span id={labelId} style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)' }}>
        {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      </span>
      <span className="material-symbols-outlined theme-icon" aria-hidden="true">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </md-icon-button>
  );
}
