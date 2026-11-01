export function NavRail() {
  return (
    <nav className="nav-rail" aria-label="Desktop navigation">
      <a href="#top">
        <span className="material-symbols-outlined" aria-hidden="true">home</span>
        <span>Home</span>
      </a>
      <a href="#projects">
        <span className="material-symbols-outlined" aria-hidden="true">folder</span>
        <span>Projects</span>
      </a>
      <a href="#about">
        <span className="material-symbols-outlined" aria-hidden="true">info</span>
        <span>About</span>
      </a>
    </nav>
  );
}