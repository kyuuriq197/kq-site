export type RouteId = 'home' | 'projects' | 'about';

export const ROUTES: RouteId[] = ['home', 'projects', 'about'];

export const ROUTE_TITLES: Record<RouteId, string> = {
  home: 'kyuuriq · portfolio',
  projects: 'Projects · kyuuriq',
  about: 'About · kyuuriq',
};

export function parseHash(hash: string): RouteId {
  const path = hash.replace(/^#\/?/, '').split('?')[0].split('/')[0].toLowerCase();
  return (ROUTES as string[]).includes(path) ? (path as RouteId) : 'home';
}

export function hashFor(route: RouteId): string {
  return `#/${route}`;
}

/** Minimal hash router: direct URLs, browser back/forward, no full reloads. */
export function setHash(route: RouteId) {
  const target = hashFor(route);
  if (window.location.hash !== target) {
    window.location.hash = target;
  }
}
