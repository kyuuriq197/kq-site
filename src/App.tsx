import { useState } from 'react';
import { profile } from './config/profile';
import { Profile } from './components/Profile';

export default function App() {
  const [modal, setModal] = useState<{ title: string; desc: string; url: string } | null>(null);

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
    </>
  );
}
