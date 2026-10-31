export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
  enabled: boolean;
}

export interface Project {
  label: string;
  url: string;
}

export interface ProfileConfig {
  username: string;
  handle: string;
  bio: string;
  uid: string;
  status: { enabled: boolean; type: string; text: string };
  avatar: string;
  background: string;
  theme: { accent: string; socialColor: string };
  effects: { snowfall: boolean; animations: boolean; glow: boolean; parallax: boolean };
  socialLinks: SocialLink[];
  projects: Project[];
  copyButtons: { discord?: string; telegram?: string };
  music: { enabled: boolean; source: string; title: string };
  views: { enabled: boolean; mode: 'local' | 'backend'; backendUrl?: string };
}

export const profile: ProfileConfig = {
  username: 'kyuuriq',
  handle: '@kyuuriq',
  bio: 'code, music, and late nights',
  uid: '2,493,064',
  status: { enabled: true, type: 'online', text: 'online' },
  avatar: '/avatar.jpg',
  background: '/bg.png',
  theme: { accent: 'rgb(161, 62, 207)', socialColor: 'rgb(158, 158, 255)' },
  effects: { snowfall: true, animations: true, glow: true, parallax: true },
  socialLinks: [
    { id: 'github', platform: 'github', label: 'GitHub', url: 'https://github.com/kyuuriq197/', enabled: true },
    { id: 'telegram', platform: 'telegram', label: 'Telegram', url: 'https://t.me/kyuuriq', enabled: true },
    { id: 'steam', platform: 'steam', label: 'Steam', url: 'https://steamcommunity.com/id/kyuuriq', enabled: true },
    { id: 'discord', platform: 'music', label: 'Discord', url: 'https://discord.com/users/1555880277107023913', enabled: true },
    { id: 'youtube', platform: 'youtube', label: 'YouTube', url: '', enabled: false },
    { id: 'tiktok', platform: 'tiktok', label: 'TikTok', url: '', enabled: false }
  ],
  projects: [
    { label: 'kyuuriqstats', url: 'https://github.com/kyuuriq197/kyuuriqstats' }
  ],
  copyButtons: { telegram: 'kyuuriq' },
  music: { enabled: true, source: '/music.mp3', title: 'целуйте мониторы — keijo' },
  views: { enabled: true, mode: 'local' }
};
