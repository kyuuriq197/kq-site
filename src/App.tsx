import { useEffect, useMemo, useState } from 'react';
import { profile } from './config/profile';
import { TopBar } from './components/TopBar';
import { ProjectCard } from './components/ProjectCard';
import { QuickSettings } from './components/QuickSettings';
import { BottomNav } from './components/BottomNav';
import { EntryScreen } from './components/EntryScreen';
import { NavRail } from './components/NavRail';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [fabShrunk, setFabShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => setFabShrunk(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
    setSnackbarOpen(true);
  };

  const filters = useMemo(() => {
    const langs = Array.from(new Set(profile.projects.map((p) => p.language)));
    return ['All', ...langs];
  }, []);

  const visibleProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return profile.projects.filter((p) => {
      if (filter !== 'All' && p.language !== filter) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  return (
    <>
      {loading && <EntryScreen onDone={() => setLoading(false)} />}

      <TopBar theme={theme} onToggleTheme={toggleTheme} />
      <BottomNav />
      <div className="app-layout">
        <NavRail />
        <main className="wrap" id="top">
        <section className="hero fade-up" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-text">
              <p className="eyebrow">Personal portfolio</p>
              <h1 id="hero-title" className="hero-title">{profile.username}</h1>
              <p className="hero-sub">
                A personal space for software, experiments and digital projects.
              </p>
              <div className="hero-actions">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <md-filled-button>
                    <md-icon slot="icon" aria-hidden="true">code</md-icon>
                    GitHub profile
                  </md-filled-button>
                </a>
                <a href="#projects" style={{ textDecoration: 'none' }}>
                  <md-filled-tonal-button>
                    <md-icon slot="icon" aria-hidden="true">folder_open</md-icon>
                    View projects
                  </md-filled-tonal-button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="section-head">
            <h2 id="projects-title" className="section-title">Projects</h2>
            <span className="section-sub">{visibleProjects.length} repositories</span>
          </div>
          <md-outlined-text-field
            type="search"
            label="Search projects"
            value={query}
            onInput={(e: any) => setQuery(e.target.value)}
          />
          <div style={{ height: 12 }} />
          <QuickSettings filters={filters} active={filter} onChange={setFilter} />
          <div className="projects-grid">
            {visibleProjects.length === 0 ? (
              <md-outlined-card style={{ gridColumn: '1 / -1' }}>
                <div style={{ padding: 32, textAlign: 'center', color: 'var(--md-sys-color-on-surface-variant)' }}>
                  <md-icon style={{ fontSize: 48, marginBottom: 8 }}>search_off</md-icon>
                  <p style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>No projects found</p>
                  <p style={{ margin: '4px 0 0', fontSize: 14 }}>Try a different search or filter.</p>
                </div>
              </md-outlined-card>
            ) : (
              visibleProjects.map((p, i) => {
                const originalIndex = profile.projects.indexOf(p);
                return (
                  <div key={p.url} className={`fade-up stagger-${Math.min(i + 1, 3)}`}>
                    <ProjectCard project={p} index={originalIndex} />
                  </div>
                );
              })
            )}
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="section-head">
            <h2 id="about-title" className="section-title">About</h2>
            <span className="section-sub">Links &amp; info</span>
          </div>
          <div className="settings-panel">
            <div className="settings-row">
              <span className="material-symbols-outlined" aria-hidden="true">palette</span>
              <div className="settings-row-text">
                <p className="settings-row-title">Dark theme</p>
                <p className="settings-row-sub">Material You dynamic color</p>
              </div>
              <md-switch
                selected={theme === 'dark'}
                onClick={toggleTheme}
                aria-label="palette Toggle dark theme"
              />
            </div>
            <a className="settings-row" href={profile.github} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined" aria-hidden="true">code</span>
              <div className="settings-row-text">
                <p className="settings-row-title">GitHub profile</p>
                <p className="settings-row-sub">{profile.github}</p>
              </div>
              <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
            </a>
            <div className="settings-row">
              <span className="material-symbols-outlined" aria-hidden="true">info</span>
              <div className="settings-row-text">
                <p className="settings-row-title">About</p>
                <p className="settings-row-sub">Material Web portfolio interface</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <md-filled-button onClick={() => setDialogOpen(true)}>
              <md-icon slot="icon" aria-hidden="true">info</md-icon>
              View details
            </md-filled-button>
          </div>
          <md-dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <div slot="headline">About this portfolio</div>
            <div slot="content">
              A personal space for software, experiments and digital projects. Built with React, Vite and Material Web components.
            </div>
            <div slot="actions">
              <md-text-button onClick={() => setDialogOpen(false)}>Close</md-text-button>
            </div>
          </md-dialog>
        </section>

        <footer className="footer">
          <span>© 2026 {profile.username}</span>
          <span>Material Web interface</span>
          <span>Built with React + Vite</span>
        </footer>
      </main>
      </div>

      <md-fab
        label={fabShrunk ? '' : 'GitHub'}
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 70, transition: 'all 300ms cubic-bezier(0.2,0,0,1)' }}
        onClick={() => window.open(profile.github, '_blank')}
      >
        <md-icon slot="icon" aria-hidden="true">code</md-icon>
      </md-fab>

      <md-snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        timeoutMs={2000}
      >
        Theme updated
      </md-snackbar>
    </>
  );
}