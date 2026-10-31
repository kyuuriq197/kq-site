import { profile } from '../config/profile';

import { useState } from 'react';

export function Profile() {
  const [layout, setLayout] = useState<'grid' | 'list' | 'masonry'>('grid');

  const cycle = () => {
    setLayout((l) => (l === 'grid' ? 'list' : l === 'list' ? 'masonry' : 'grid'));
  };
  return (
    <section className="portfolio">
      <header className="profile-header">
        <img className="avatar" src={profile.avatar} alt={profile.username} />
        <h1 className="name">{profile.username}</h1>
        <button className="layout-toggle" onClick={cycle} type="button">
          {layout === 'grid' ? 'Grid' : layout === 'list' ? 'List' : 'Masonry'}
        </button>
      </header>

      <div className={'projects-grid layout-' + layout}>
        {profile.projects.map((p, i) => (
          <a key={p.url} className={'project-card' + (i === 0 ? ' featured' : '')} href={p.url} target="_blank" rel="noopener noreferrer">
            <div className="project-meta">
              <span className="project-category">{p.category}</span>
              <span className="project-lang">{p.language}</span>
            </div>
            <h2 className="project-title">{p.name}</h2>
            <p className="project-desc">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
