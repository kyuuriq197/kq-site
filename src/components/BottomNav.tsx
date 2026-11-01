import type { RouteId } from '../lib/router';
import { setHash } from '../lib/router';

interface BottomNavProps {
  route: RouteId;
}

const ITEMS: { id: RouteId; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'projects', label: 'Projects', icon: 'folder_open' },
  { id: 'about', label: 'About', icon: 'person' },
];

/**
 * Floating Material 3 dock — the single navigation system on mobile.
 * Desktop uses the top app bar navigation instead.
 */
export function BottomNav({ route }: BottomNavProps) {
  const index = Math.max(0, ITEMS.findIndex((item) => item.id === route));

  return (
    <nav
      className="dock"
      aria-label="Main navigation"
      style={{ ['--dock-index' as string]: index }}
    >
      <span className="dock-indicator" aria-hidden="true" />
      {ITEMS.map((item) => {
        const active = route === item.id;
        return (
          <a
            key={item.id}
            className={`dock-item${active ? ' active' : ''}`}
            href={`#/${item.id}`}
            onClick={(event) => {
              event.preventDefault();
              setHash(item.id);
            }}
            aria-current={active ? 'page' : undefined}
          >
            <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
            <span className="dock-label">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
