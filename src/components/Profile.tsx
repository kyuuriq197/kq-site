import { profile } from '../config/profile';
import { Avatar } from './Avatar';
import { Status } from './Status';
import { SocialLinks } from './SocialLinks';
import { MusicPlayer } from './MusicPlayer';
import { useState, useEffect } from 'react';

interface ProfileProps {
  onToast: (msg: string) => void;
}

export function Profile({ onToast }: ProfileProps) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (!profile.views.enabled) return;
    if (profile.views.mode === 'local') {
      const key = 'profile_views_' + profile.username;
      let v = parseInt(localStorage.getItem(key) || '0', 10);
      v += 1;
      localStorage.setItem(key, String(v));
      setViews(v);
    } else if (profile.views.backendUrl) {
      fetch(profile.views.backendUrl)
        .then((r) => r.json())
        .then((d) => setViews(d.views ?? 0))
        .catch(() => setViews(0));
    }
  }, []);

  return (
    <section className="card" aria-label="Профиль">
      <Avatar src={profile.avatar} alt="Аватар" fallback="/bg.png" />
      <Status enabled={profile.status.enabled} type={profile.status.type} text={profile.status.text} />
      <h1 className="name">{profile.username}</h1>
      <p className="handle">{profile.handle}</p>
      <p className="bio">{profile.bio}</p>
      <SocialLinks />
      {profile.projects && profile.projects.length > 0 && (
        <div className="projects">
          {profile.projects.map((p) => (
            <a key={p.url} className="project" href={p.url} target="_blank" rel="noopener noreferrer">
              {p.label}
            </a>
          ))}
        </div>
      )}
      <div className="copy-row">
        {profile.copyButtons.discord && (
          <button
            className="copy-btn"
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(profile.copyButtons.discord!).then(() =>
                onToast('Discord скопирован')
              ).catch(() => onToast('Не удалось скопировать'));
            }}
          >
            Discord: {profile.copyButtons.discord}
          </button>
        )}
        {profile.copyButtons.telegram && (
          <button
            className="copy-btn"
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(profile.copyButtons.telegram!).then(() =>
                onToast('Telegram скопирован')
              ).catch(() => onToast('Не удалось скопировать'));
            }}
          >
            TG: {profile.copyButtons.telegram}
          </button>
        )}
      </div>
      <MusicPlayer
        enabled={profile.music.enabled}
        src={profile.music.source}
        title={profile.music.title}
      />
      <div className="stats">
        <span>{profile.uid}</span>
        <span className="dot">·</span>
        <span>{views} просмотров</span>
      </div>
    </section>
  );
}
