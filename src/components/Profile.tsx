import { profile } from '../config/profile';

export function Profile() {
  return (
    <div className="grid">
      {profile.projects.map((p, i) => (
        <a
          key={p.url}
          className={'project' + (i === 0 ? ' large' : '')}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-top">
            <span className="mono">PROJECT / 00{i + 1}</span>
            <span className="mono">↗</span>
          </div>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          {i === 0 ? (
            <div className="preview"><span>PROJECT PREVIEW / REAL SCREENSHOT</span></div>
          ) : (
            <div className="small-preview">REAL PROJECT IMAGE</div>
          )}
          <div className="project-foot">
            <span>{p.language.toUpperCase()} / {p.category.toUpperCase()}</span>
            <span>GITHUB ↗</span>
          </div>
        </a>
      ))}
    </div>
  );
}
