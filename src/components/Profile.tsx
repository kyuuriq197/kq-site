import { profile } from '../config/profile';

interface ProfileProps {
  onOpen: (title: string, desc: string, url: string) => void;
}

export function Profile({ onOpen }: ProfileProps) {
  return (
    <div className="projects-grid">
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
          <div className="project-card-inner">
            <div className="project-num">0{i + 1}</div>
            <h2 className="project-title">{p.name}</h2>
            <p className="project-desc">{p.description}</p>
            <div className="project-meta">
              <span className="project-lang">{p.language}</span>
              <span>{p.category}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
