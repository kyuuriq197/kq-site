import { profile } from '../config/profile';
import { useReveal } from '../hooks/useReveal';

function MiniCard({ name, lang, preview, url, delay }: { name: string; lang: string; preview: string; url: string; delay: number }) {
  const ref = useReveal<HTMLAnchorElement>(delay);
  return (
    <a className="mini-card reveal" ref={ref} href={url} target="_blank" rel="noopener noreferrer">
      <span className="preview">
        <img src={preview} alt="" loading="lazy" decoding="async" />
      </span>
      <span className="row">
        <span className="name">{name}</span>
        <span className="lang mono">{lang}</span>
      </span>
      <span className="go">
        Open on GitHub
        <span className="material-symbols-outlined" aria-hidden="true">arrow_outward</span>
      </span>
    </a>
  );
}

export function HomePage() {
  const featured = profile.projects.filter((p) => p.featured);
  const heroRef = useReveal<HTMLDivElement>(0);

  return (
    <>
      <section className="hero page" aria-label="Introduction">
        <div className="hero-grid">
          <div ref={heroRef} className="reveal">
            <span className="eyebrow">
              <span className="material-symbols-outlined" aria-hidden="true">bolt</span>
              {profile.tagline}
            </span>
            <h1 className="d1">{profile.username}</h1>
            <p className="hero-sub bd1">{profile.description}</p>
            <div className="hero-actions">
              <md-filled-button href={profile.github} target="_blank">
                <md-icon slot="icon" aria-hidden="true">code</md-icon>
                GitHub profile
              </md-filled-button>
              <md-filled-tonal-button href="#/projects">
                <md-icon slot="icon" aria-hidden="true">folder_open</md-icon>
                View projects
              </md-filled-tonal-button>
            </div>
          </div>
          <div className="hero-shapes" aria-hidden="true">
            <span className="shape shape-1" />
            <span className="shape shape-2" />
            <span className="shape shape-3" />
            <span className="shape shape-4" />
          </div>
        </div>
      </section>

      <section className="section" aria-label="Featured projects">
        <div className="section-head">
          <h2 className="h2">Featured projects</h2>
          <a className="link-more" href="#/projects">
            All projects
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </a>
        </div>
        <div className="featured-grid">
          {featured.map((p, i) => (
            <MiniCard key={p.url} name={p.name} lang={p.language} preview={p.preview} url={p.url} delay={i * 70} />
          ))}
        </div>
      </section>

      <section className="section" aria-label="Development focus">
        <div className="section-head">
          <h2 className="h2">Focus areas</h2>
        </div>
        <div className="focus-chips">
          {profile.focusAreas.map((area) => (
            <div key={area.key} className="focus-chip">
              <span className="material-symbols-outlined" aria-hidden="true">{area.icon}</span>
              {area.label}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
