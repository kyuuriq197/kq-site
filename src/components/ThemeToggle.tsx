interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const icon = isDark ? 'light_mode' : 'dark_mode';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  return (
    <md-icon-button onClick={onToggle} aria-label={`${icon} ${label}`}>
      <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
    </md-icon-button>
  );
}