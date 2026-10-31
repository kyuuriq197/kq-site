export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
  enabled: boolean;
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
  copyButtons: { discord?: string; telegram?: string };
  music: { enabled: boolean; source: string; title: string };
  views: { enabled: boolean; mode: 'local' | 'backend'; backendUrl?: string };
}

export const profile: ProfileConfig = {
  username: 'kyuuriq',
  handle: '@kyuuriq',
  bio: 'мой маленький уголок в интернете',
  uid: 'kyuuriq',
  status: { enabled: true, type: 'online', text: 'online' },
  avatar: '/avatar.png',
  background: '/bg.png',
  theme: { accent: 'rgb(161, 62, 207)', socialColor: 'rgb(158, 158, 255)' },
  effects: { snowfall: true, animations: true, glow: true, parallax: true },
  socialLinks: [
    { id: 'github', platform: 'github', label: 'GitHub', url: 'https://github.com/kyuuriq197/', enabled: true },
    { id: 'telegram', platform: 'telegram', label: 'Telegram', url: 'https://t.me/kyuuriq', enabled: true },
    { id: 'steam', platform: 'steam', label: 'Steam', url: 'https://steamcommunity.com/id/kyuuriq', enabled: true },
    { id: 'music', platform: 'music', label: 'TG исполнителя', url: 'https://t.me/deadonsky', enabled: true },
    { id: 'youtube', platform: 'youtube', label: 'YouTube', url: '', enabled: false },
    { id: 'tiktok', platform: 'tiktok', label: 'TikTok', url: '', enabled: false }
  ],
  copyButtons: { discord: 'kyuuriq.', telegram: 'kyuuriq' },
  music: { enabled: true, source: '/music.mp3', title: 'celujte monitory — keijo' },
  views: { enabled: true, mode: 'local' }
};
