import type { Project } from '../config/profile';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <a
      className="pcard"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="preview">
        <img src={project.preview} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="body">
        <div className="tags">
          <span className="tag language">{project.language}</span>
          <span className="tag category">{project.category}</span>
        </div>
        <h3 className="t1">{project.name}</h3>
        <p className="desc">{project.description}</p>
        <div className="foot">
          <span className="index">PROJECT / {String(index + 1).padStart(2, '0')}</span>
          <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
        </div>
      </div>
    </a>
  );
}
