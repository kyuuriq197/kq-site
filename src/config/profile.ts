export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  category: string;
  preview: string;
}

export interface ProfileConfig {
  username: string;
  avatar: string;
  background: string;
  projects: Project[];
}

export const profile: ProfileConfig = {
  username: 'kyuuriq',
  avatar: '/avatar.jpg',
  background: '/bg.png',
  projects: [
    {
      name: 'kyuuriqstats',
      description: 'My CLI project (Rust).',
      url: 'https://github.com/kyuuriq197/kyuuriqstats',
      language: 'Rust',
      category: 'CLI',
      preview: '/previews/kyuuriqstats.svg'
    },
    {
      name: 'kyuuriq-esp32',
      description: 'Custom firmware for ESP32-WROOM-32. Experimental firmware for learning ESP32 development, GPIO control, Wi-Fi and web-based device management.',
      url: 'https://github.com/kyuuriq197/kyuuriq-esp32',
      language: 'C++',
      category: 'Embedded',
      preview: '/previews/kyuuriq-esp32.svg'
    },
    {
      name: 'kqkernel_arm64',
      description: 'ARM64 kernel experiments.',
      url: 'https://github.com/kyuuriq197/kqkernel_arm64',
      language: 'Rust',
      category: 'Systems',
      preview: '/previews/kqkernel_arm64.svg'
    },
    {
      name: 'iphone14-5-ios-27-2-ipsw-analysis',
      description: 'IPSW analysis and research for iPhone14,5 / iOS 27.2.',
      url: 'https://github.com/kyuuriq197/iphone14-5-ios-27-2-ipsw-analysis',
      language: 'Python',
      category: 'Research',
      preview: '/previews/ipsw-analysis.svg'
    },
    {
      name: 'my-rice-',
      description: 'My Linux rice / desktop configuration.',
      url: 'https://github.com/kyuuriq197/my-rice-',
      language: 'Config',
      category: 'Linux',
      preview: '/previews/my-rice.svg'
    }
  ]
};
