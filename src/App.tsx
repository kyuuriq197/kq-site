import { useState } from 'react';
import { profile } from './config/profile';
import { EntryScreen } from './components/EntryScreen';
import { Profile } from './components/Profile';
import { Snowfall } from './components/Snowfall';
import { Toast } from './components/Toast';

import { useEffect } from 'react';

export default function App() {
  const [entered, setEntered] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!profile.effects.parallax) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.documentElement.style.setProperty('--bx', x + 'px');
      document.documentElement.style.setProperty('--by', y + 'px');
      document.documentElement.style.setProperty('--cx', (-x * 0.5) + 'px');
      document.documentElement.style.setProperty('--cy', (-y * 0.5) + 'px');
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

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
