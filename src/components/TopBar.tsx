import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface TopBarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function TopBar({ theme, onToggleTheme }: TopBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <md-top-app-bar className={scrolled ? 'scrolled' : ''}>
      <div slot="title" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontWeight: 500 }}>kyuuriq</span>
      </div>
      <nav slot="navigation" style={{ display: 'flex', gap: 4 }}>
        <a href="#top" style={{ textDecoration: 'none' }}><md-text-button>Home</md-text-button></a>
        <a href="#projects" style={{ textDecoration: 'none' }}><md-text-button>Projects</md-text-button></a>
        <a href="#about" style={{ textDecoration: 'none' }}><md-text-button>About</md-text-button></a>
      </nav>
      <div slot="actionItems">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </md-top-app-bar>
  );
}