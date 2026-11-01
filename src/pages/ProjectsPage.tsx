import { useMemo, useState } from 'react';
import { profile } from '../config/profile';
import { ProjectCard } from '../components/ProjectCard';
import { FilterChips } from '../components/FilterChips';
import { SearchField } from '../components/SearchField';
import { useReveal } from '../hooks/useReveal';

export function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filters = useMemo(() => {
    const langs = Array.from(new Set(profile.projects.map((p) => p.language)));
    return ['All', ...langs];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return profile.projects.filter((p) => {
      if (filter !== 'All' && p.language !== filter) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.language.toLowerCase().includes(q)
      );
    });
  }, [query, filter]);

  const clear = () => {
    setQuery('');
    setFilter('All');
  };

  const emptyRef = useReveal<HTMLDivElement>(0);

  return (
    <section className="page" aria-label="Projects">
      <div className="section-head">
        <h1 className="h1">Projects</h1>
        <span className="section-count mono">
          {results.length} of {profile.projects.length} repositories
        </span>
      </div>

      <div className="toolbar">
        <SearchField
          value={query}
          onChange={setQuery}
          placeholder="Search projects"
        />
        <FilterChips filters={filters} active={filter} onChange={setFilter} />
      </div>

      <h2 className="visually-hidden">All repositories</h2>

      {results.length === 0 ? (
        <div className="state-card reveal" ref={emptyRef}>
          <span className="bubble" aria-hidden="true">
            <span className="material-symbols-outlined">search_off</span>
          </span>
          <h2 className="t1">No repositories match</h2>
          <p className="bd2 muted">Try a different keyword or clear the language filter.</p>
          <md-text-button onClick={clear}>
            <md-icon slot="icon" aria-hidden="true">restart_alt</md-icon>
            Clear filters
          </md-text-button>
        </div>
      ) : (
        <div className="projects-grid">
          {results.map((p) => (
            <ProjectCard
              key={p.url}
              project={p}
              index={profile.projects.indexOf(p)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
