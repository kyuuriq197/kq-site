import { profile } from './config/profile';
import { Profile } from './components/Profile';

export default function App() {
  return (
    <div className="wrap">
      <header className="top">
        <div className="brand">KYUURIQ / DIGITAL WORKS</div>
        <nav className="nav">
          <a href="#top">[ HOME ]</a>
          <a href="#projects">[ PROJECTS ]</a>
          <a href="#about">[ INFO ]</a>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <div>
            <div className="eyebrow kicker">[ 01 — INTRODUCTION ]</div>
            <h1>kyuuriq<span style={{ color: '#777' }}>.</span></h1>
            <p className="intro">A personal space for software, experiments and digital projects.</p>
            <div className="dotline" aria-hidden="true">
              {Array.from({ length: 24 }).map((_, i) => <i key={i} />)}
            </div>
          </div>
          <div className="avatar" aria-label="Avatar">
            <img src={profile.avatar} alt={profile.username} />
          </div>
        </section>
        <section id="projects">
          <div className="section-head">
            <h2>SELECTED PROJECTS</h2>
            <span className="mono">[ 02 / WORK ]</span>
          </div>
          <Profile />
        </section>
        <div className="note">DESIGN NOTE: Editorial portfolio concept. Replace preview areas with real project screenshots.</div>
      </main>
      <footer className="footer" id="about">
        <span>KYUURIQ © 2026</span>
        <span>MONOCHROME / DOT MATRIX / EDITORIAL GRID</span>
        <span><i className="red-dot" />DESIGN CONCEPT 001</span>
      </footer>
    </div>
  );
}
