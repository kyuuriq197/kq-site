import { useState, useEffect, useMemo } from 'react';
import { profile } from './config/profile';
import { Profile } from './components/Profile';

export default function App() {
  const [modal, setModal] = useState<{ title: string; desc: string; url: string } | null>(null);
  const [cmdk, setCmdk] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdk((v) => !v);
      }
      if (e.key === 'Escape') setCmdk(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const results = useMemo(() => {
    const q = query.toLowerCase();
    const items = [
      { label: 'Home', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCmdk(false); } },
      { label: 'Projects', action: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); setCmdk(false); } },
      ...profile.projects.map((p) => ({
        label: p.name,
        action: () => { setModal({ title: p.name, desc: p.description, url: p.url }); setCmdk(false); }
      }))
    ];
    return q ? items.filter((i) => i.label.toLowerCase().includes(q)) : items;
  }, [query]);

  return (
    <>
      <div className="bg-atmo" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />

      <nav className="nav" aria-label="Navigation">
        <a href="#home" className="active">Home</a>
        <a href="#projects">Projects</a>
      </nav>

      <main className="wrap" id="home">
        <section className="hero">
          <img className="hero-avatar" src={profile.avatar} alt={profile.username} />
          <h1 className="hero-name">{profile.username}</h1>
          <p className="hero-intro">developer portfolio — projects & experiments</p>
        </section>

        <section className="section" id="projects">
          <h2 className="section-title">Projects</h2>
          <Profile onOpen={(title, desc, url) => setModal({ title, desc, url })} />
        </section>
      </main>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)} aria-label="Close">×</button>
            <h2>{modal.title}</h2>
            <p>{modal.desc}</p>
            <a className="modal-link" href={modal.url} target="_blank" rel="noopener noreferrer">Open repository →</a>
          </div>
        </div>
      )}

      {cmdk && (
        <div className="cmdk-overlay" onClick={() => setCmdk(false)}>
          <div className="cmdk" onClick={(e) => e.stopPropagation()}>
            <input
              autoFocus
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="cmdk-list">
              {results.map((r, i) => (
                <div key={i} className="cmdk-item" onClick={r.action}>
                  {r.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
