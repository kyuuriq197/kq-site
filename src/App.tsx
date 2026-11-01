import { useCallback, useEffect, useRef, useState } from 'react';
import type { RouteId } from './lib/router';
import { parseHash, ROUTES, ROUTE_TITLES } from './lib/router';
import { profile } from './config/profile';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';
import { EntryScreen } from './components/EntryScreen';
import { Snackbar } from './components/Snackbar';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';

type Theme = 'light' | 'dark';
export type { RouteId };

const EXIT_MS = 190; // page-out duration
const TRANSITION_CLASS_MS = 380; // theme crossfade window

function routeComponent(id: RouteId, theme: Theme, toggleTheme: () => void) {
  switch (id) {
    case 'projects':
      return <ProjectsPage />;
    case 'about':
      return <AboutPage theme={theme} onToggleTheme={toggleTheme} />;
    case 'home':
    default:
      return <HomePage />;
  }
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [route, setRoute] = useState<RouteId>(() => parseHash(window.location.hash));
  const [leavingRoute, setLeavingRoute] = useState<RouteId | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const routeRef = useRef(route);
  const reducedRef = useRef(false);

  routeRef.current = route;

  /* normalize unknown direct URLs to Home (no history entry) */
  useEffect(() => {
    const raw = window.location.hash.replace(/^#\/?/, '').split('?')[0].split('/')[0].toLowerCase();
    if (raw !== '' && !(ROUTES as string[]).includes(raw)) {
      window.history.replaceState(null, '', '#/home');
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => { reducedRef.current = mq.matches; };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  /* hash routing — direct URLs + browser back/forward, no reloads */
  useEffect(() => {
    const onHashChange = () => {
      const raw = window.location.hash.replace(/^#\/?/, '').split('?')[0].split('/')[0].toLowerCase();
      if (raw !== '' && !(ROUTES as string[]).includes(raw)) {
        window.history.replaceState(null, '', '#/home');
        const normalized = parseHash(window.location.hash);
        if (normalized === routeRef.current) return;
      }
      const next = parseHash(window.location.hash);
      const prev = routeRef.current;
      if (next === prev) return;
      if (reducedRef.current) {
        window.scrollTo(0, 0);
        setRoute(next);
        return;
      }
      setLeavingRoute(prev);
      setRoute(next);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  /* clear the exiting layer after its animation */
  useEffect(() => {
    if (!leavingRoute) return;
    const t = window.setTimeout(() => setLeavingRoute(null), EXIT_MS);
    return () => window.clearTimeout(t);
  }, [leavingRoute]);

  /* document title per page */
  useEffect(() => {
    document.title = ROUTE_TITLES[route];
  }, [route]);

  /* persist theme + animate the crossfade */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const applyThemeTransition = useCallback(() => {
    if (reducedRef.current) return;
    document.documentElement.classList.add('theme-switching');
    window.setTimeout(() => document.documentElement.classList.remove('theme-switching'), TRANSITION_CLASS_MS);
  }, []);

  const toggleTheme = useCallback(() => {
    applyThemeTransition();
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
    setSnackbarOpen(true);
  }, [applyThemeTransition]);

  const exit = leavingRoute;
  const isSameAsExit = exit && exit === route;

  return (
    <>
      <EntryScreen onDone={() => undefined} />

      <div className="app-shell">
        <TopBar route={route} theme={theme} onToggleTheme={toggleTheme} />

        <main className="app-main page-slot">
          {exit && !isSameAsExit ? (
            <div className="page page-exit" key={`exit-${exit}`} aria-hidden="true">
              {routeComponent(exit, theme, toggleTheme)}
            </div>
          ) : null}
          <div className="page" key={route}>
            {routeComponent(route, theme, toggleTheme)}
          </div>
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <span>© 2026 kyuuriq</span>
            <span className="mono">React 19 · Vite · @material/web</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/kyuuriq197</a>
          </div>
        </footer>

        <BottomNav route={route} />
      </div>

      <Snackbar open={snackbarOpen} onClose={() => setSnackbarOpen(false)} message={theme === 'dark' ? 'Dark theme on' : 'Light theme on'} />
    </>
  );
}
