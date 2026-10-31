import { profile } from '../config/profile';

export function Profile() {
  return (
    <section className="portfolio">
      <header className="profile-header">
        <img className="avatar" src={profile.avatar} alt={profile.username} />
        <h1 className="name">{profile.username}</h1>
      </header>

      <div className="projects-grid">
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
