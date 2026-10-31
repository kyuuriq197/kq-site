import { useState } from 'react';
import { profile } from './config/profile';
import { EntryScreen } from './components/EntryScreen';
import { Profile } from './components/Profile';
import { Snowfall } from './components/Snowfall';
import { Toast } from './components/Toast';

export default function App() {
  const [entered, setEntered] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // expose toast setter globally for copy buttons? We'll handle copy here via context not needed.
  // Copy buttons are not in Profile; add them in SocialLinks? We'll keep simple: no copy buttons in React for now,
  // but config has copyButtons. We can render them in Profile if needed. Skip to keep minimal.

  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${profile.background})` }} aria-hidden="true" />
      <div className="bg-overlay" aria-hidden="true" />
      <Snowfall enabled={profile.effects.snowfall} />
      <EntryScreen visible={!entered} onEnter={() => setEntered(true)} />
      <Toast message={toast} onClose={() => setToast(null)} />
      <main className="wrap">
        {entered && <Profile onToast={setToast} />}
      </main>
      <footer className="footer">
        © 2026 {profile.username}
      </footer>
    </>
  );
}
