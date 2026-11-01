export function BottomNav() {
  return (
    <md-navigation-bar className="bottom-nav">
      <md-navigation-tab href="#top" label="Home">
        <span slot="icon" className="material-symbols-outlined" aria-hidden="true">home</span>
      </md-navigation-tab>
      <md-navigation-tab href="#projects" label="Projects">
        <span slot="icon" className="material-symbols-outlined" aria-hidden="true">folder</span>
      </md-navigation-tab>
      <md-navigation-tab href="#about" label="About">
        <span slot="icon" className="material-symbols-outlined" aria-hidden="true">info</span>
      </md-navigation-tab>
    </md-navigation-bar>
  );
}