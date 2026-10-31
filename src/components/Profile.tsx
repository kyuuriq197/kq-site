import { useState } from 'react';
import { profile } from '../config/profile';

interface ProfileProps {
  onOpen: (title: string, desc: string, url: string) => void;
}

export function Profile({ onOpen }: ProfileProps) {
  const [layout, setLayout] = useState<'grid' | 'list' | 'masonry'>('grid');

  const cycle = () => {
    setLayout((l) => (l === 'grid' ? 'list' : l === 'list' ? 'masonry' : 'grid'));
  };

  return (
    <>
      <div className="profile-header" style={{ justifyContent: 'space-between', width: '100%', marginBottom: '24px' }}>
        <span />
        <button className="layout-toggle" onClick={cycle} type="button">
          {layout === 'grid' ? 'Grid' : layout === 'list' ? 'List' : 'Masonry'}
        </button>
      </div>
      <div className={'projects-grid layout-' + layout}>
        {profile.projects.map((p, i) => (
          <a
            key={p.url}
            className={'project-card' + (i === 0 ? ' featured' : '')}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              onOpen(p.name, p.description, p.url);
            }}
          >
            <div className="project-meta">
              <span className="project-category">{p.category}</span>
              <span className="project-lang">{p.language}</span>
            </div>
            <h2 className="project-title">{p.name}</h2>
            <p className="project-desc">{p.description}</p>
          </a>
        ))}
      </div>
    </>
  );
}
