import { useState } from 'react';
import { profile } from '../config/profile';
import { useReveal } from '../hooks/useReveal';

interface AboutPageProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

function AreaCard({ icon, label, blurb, delay }: { icon: string; label: string; blurb: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div className="area-card reveal" ref={ref}>
      <span className="icon-bubble" aria-hidden="true">
        <span className="material-symbols-outlined">{icon}</span>
      </span>
      <h3 className="t2">{label}</h3>
      <p className="bd2 muted">{blurb}</p>
    </div>
  );
}

export function AboutPage({ theme, onToggleTheme }: AboutPageProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const heroRef = useReveal<HTMLDivElement>(0);
  const github = profile.github.replace('https://', '');

  return (
    <section className="page" aria-label="About">
      <div className="about-hero reveal" ref={heroRef}>
        <span className="eyebrow">
          <span className="material-symbols-outlined" aria-hidden="true">person</span>
          About
        </span>
        <div className="prose">
          <h1 className="d3">Software, experiments and digital projects by kyuuriq.</h1>
          <p className="bd1 muted">{profile.description}</p>
          <p className="bd2 muted">
            The whole site is one coherent Material You / Material 3 Expressive system: pages, components,
            previews and motion are designed together.
          </p>
        </div>
      </div>

      <div className="about-cols">
        <div className="info-card reveal" style={{ ['--reveal-delay' as string]: '40ms' }}>
          <span className="icon-bubble" aria-hidden="true">
            <span className="material-symbols-outlined">code</span>
          </span>
          <h2 className="h3">GitHub</h2>
          <div className="items">
            <div className="item">
              <span className="k">Handle</span>
              <span className="v mono">kyuuriq197</span>
            </div>
            <div className="item">
              <span className="k">Public repositories</span>
              <span className="v mono">{profile.projects.length}</span>
            </div>
          </div>
          <a className="link-more" href={profile.github} target="_blank" rel="noopener noreferrer">
            {github}
            <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
          </a>
        </div>

        <div className="info-card reveal" style={{ ['--reveal-delay' as string]: '110ms' }}>
          <span className="icon-bubble violet" aria-hidden="true">
            <span className="material-symbols-outlined">stacks</span>
          </span>
          <h2 className="h3">Portfolio stack</h2>
          <div className="items">
            {profile.stack.map((s) => (
              <div className="item" key={s.label}>
                <span className="k">{s.label}</span>
                <span className="v mono">{s.value}</span>
              </div>
            ))}
            <div className="item">
              <span className="k">Version</span>
              <span className="v mono">v{profile.version}</span>
            </div>
          </div>
        </div>

        <div className="info-card reveal" style={{ ['--reveal-delay' as string]: '180ms' }}>
          <span className="icon-bubble green" aria-hidden="true">
            <span className="material-symbols-outlined">palette</span>
          </span>
          <h2 className="h3">Design system</h2>
          <div className="items">
            <div className="item"><span className="k">Theme</span><span className="v">Light / Dark</span></div>
            <div className="item"><span className="k">Color roles</span><span className="v">Material You</span></div>
            <div className="item"><span className="k">Components</span><span className="v">Material Web</span></div>
            <div className="item"><span className="k">Motion</span><span className="v">M3 tokens</span></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <h2 className="h2">Directions</h2>
          <span className="section-count mono">from real repositories</span>
        </div>
        <div className="matrix">
          {profile.focusAreas.map((area, i) => (
            <AreaCard key={area.key} icon={area.icon} label={area.label} blurb={area.blurb} delay={i * 60} />
          ))}
        </div>
      </div>

      <div className="list-card reveal" style={{ ['--reveal-delay' as string]: '60ms' }}>
        <div className="list-row">
          <span className="icon-bubble blue" aria-hidden="true">
            <span className="material-symbols-outlined">dark_mode</span>
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="t2" style={{ fontWeight: 600 }}>Dark theme</p>
            <p className="bd2 muted" style={{ marginBottom: 0 }}>Saved on this device.</p>
          </div>
          <md-switch
            selected={theme === 'dark'}
            onClick={onToggleTheme}
            aria-label="Toggle dark theme"
          />
        </div>

        <button className="list-row list-row-action" onClick={() => setDetailsOpen(true)}>
          <span className="icon-bubble violet" aria-hidden="true">
            <span className="material-symbols-outlined">info</span>
          </span>
          <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
            <p className="t2" style={{ fontWeight: 600, margin: 0 }}>About this site</p>
            <p className="bd2 muted" style={{ marginBottom: 0 }}>Design tokens, motion and components.</p>
          </div>
          <span className="reach material-symbols-outlined" aria-hidden="true">chevron_right</span>
        </button>

        <a className="list-row" href={profile.github} target="_blank" rel="noopener noreferrer">
          <span className="icon-bubble green" aria-hidden="true">
            <span className="material-symbols-outlined">code</span>
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="t2" style={{ fontWeight: 600, margin: 0 }}>GitHub profile</p>
            <p className="bd2 muted" style={{ marginBottom: 0 }}><span className="mono">{github}</span></p>
          </div>
          <span className="reach material-symbols-outlined" aria-hidden="true">open_in_new</span>
        </a>
      </div>

      <md-dialog open={detailsOpen} onClose={() => setDetailsOpen(false)}>
        <div slot="headline">About this site</div>
        <div slot="content">
          This portfolio is built with React 19, Vite and TypeScript. The interface uses Material Web
          (v2.5.0) components with Material You color roles, a hash router for direct page URLs, and
          Material Symbols icons matching the Pixel UI visual language.
        </div>
        <div slot="actions">
          <md-filled-button onClick={() => setDetailsOpen(false)}>Got it</md-filled-button>
        </div>
      </md-dialog>
    </section>
  );
}
