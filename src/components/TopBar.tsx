import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { RouteId } from '../lib/router';
import { ThemeToggle } from './ThemeToggle';
import { profile } from '../config/profile';

interface TopBarProps {
  route: RouteId;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const NAV_ITEMS: { id: RouteId; href: string; label: string; icon: string }[] = [
  { id: 'home', href: '#/home', label: 'Home', icon: 'home' },
  { id: 'projects', href: '#/projects', label: 'Projects', icon: 'folder_open' },
  { id: 'about', href: '#/about', label: 'About', icon: 'person' },
];

export function TopBar({ route, theme, onToggleTheme }: TopBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const pill = indicatorRef.current;
    if (!nav || !pill) return;

    const position = () => {
      const active = nav.querySelector<HTMLElement>('.topnav-link.active');
      if (!active) {
        pill.style.width = '0px';
        pill.classList.remove('ready');
        return;
      }
      pill.style.transform = `translateX(${active.offsetLeft}px)`;
      pill.style.width = `${active.offsetWidth}px`;
      pill.classList.add('ready');
    };

    position();
    window.addEventListener('resize', position);
    return () => window.removeEventListener('resize', position);
  }, [route]);

  return (
    <header className={`appbar${scrolled ? ' scrolled' : ''}`}>
      <div className="appbar-inner">
        <a className="brand" href="#/home">
          <span className="brand-mark" aria-hidden="true">k</span>
          <span className="brand-name">kyuuriq</span>
          <span className="visually-hidden">— home</span>
        </a>

        <nav className="topnav" ref={navRef} aria-label="Main navigation">
          <span className="topnav-indicator" ref={indicatorRef} aria-hidden="true" />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`topnav-link${route === item.id ? ' active' : ''}`}
              aria-current={route === item.id ? 'page' : undefined}
            >
              <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="appbar-actions">
          <md-icon-button
            href={profile.github}
            target="_blank"
            aria-label="Open GitHub profile"
          >
            <span className="material-symbols-outlined" aria-hidden="true">code</span>
          </md-icon-button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
