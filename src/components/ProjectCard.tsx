import type { Project } from '../config/profile';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <md-outlined-card>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontFamily: 'Roboto Mono, monospace', fontSize: 11, letterSpacing: '0.08em', color: 'var(--md-sys-color-on-surface-variant)' }}>
            PROJECT / {String(index + 1).padStart(2, '0')}
          </span>
          <md-chip label={project.language} />
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 500, margin: 0, color: 'var(--md-sys-color-on-surface)' }}>
          {project.name}
        </h3>
        <img
          src={project.preview}
          alt={`${project.name} preview`}
          loading="lazy"
          style={{ width: '100%', aspectRatio: '5 / 3', objectFit: 'cover', borderRadius: 12, border: '1px solid var(--md-sys-color-outline-variant)' }}
        />
        <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--md-sys-color-on-surface-variant)', margin: 0, flexGrow: 1 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, paddingTop: 12, borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
          <span style={{ fontSize: 11, color: 'var(--md-sys-color-on-surface-variant)', fontFamily: 'Roboto Mono, monospace' }}>
            {project.category}
          </span>
          <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <md-text-button>Open on GitHub</md-text-button>
          </a>
        </div>
      </div>
    </md-outlined-card>
  );
}