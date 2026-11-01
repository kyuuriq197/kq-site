export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  category: string;
  preview: string;
  /** real, derived flag: first three repositories */
  featured?: boolean;
}

export interface FocusArea {
  key: string;
  label: string;
  icon: string;
  blurb: string;
}

export interface StackEntry {
  label: string;
  value: string;
}

export interface ProfileConfig {
  username: string;
  tagline: string;
  description: string;
  github: string;
  version: string;
  focusAreas: FocusArea[];
  stack: StackEntry[];
  projects: Project[];
}

export const profile: ProfileConfig = {
  username: 'kyuuriq',
  tagline: 'Personal portfolio',
  description:
    'A personal space for software, experiments and digital projects — systems tools, embedded firmware and research.',
  github: 'https://github.com/kyuuriq197',
  version: '0.0.0',
  focusAreas: [
    {
      key: 'systems',
      label: 'Systems & kernels',
      icon: 'memory',
      blurb: 'ARM64 kernel experiments and low-level tooling in kqkernel_arm64.',
    },
    {
      key: 'embedded',
      label: 'Embedded firmware',
      icon: 'developer_board',
      blurb: 'ESP32-WROOM-32 firmware in kyuuriq-esp32: GPIO, Wi-Fi and web device control.',
    },
    {
      key: 'cli',
      label: 'CLI tools',
      icon: 'terminal',
      blurb: 'Rust command-line utilities, like the kyuuriqstats tool.',
    },
    {
      key: 'research',
      label: 'Research & analysis',
      icon: 'travel_explore',
      blurb: 'Firmware research: IPSW analysis for iPhone14,5 / iOS 27.2.',
    },
    {
      key: 'linux',
      label: 'Linux rice',
      icon: 'tune',
      blurb: 'Desktop configuration snapshots in my-rice-.',
    },
  ],
  stack: [
    { label: 'Framework', value: 'React 19' },
    { label: 'Build tool', value: 'Vite 8' },
    { label: 'Language', value: 'TypeScript 7' },
    { label: 'UI toolkit', value: '@material/web 2.5.0' },
    { label: 'Icons', value: 'Material Symbols' },
    { label: 'Routing', value: 'Hash router' },
  ],
  projects: [
    {
      name: 'kyuuriqstats',
      description: 'Rust CLI for collecting and reporting system statistics.',
      url: 'https://github.com/kyuuriq197/kyuuriqstats',
      language: 'Rust',
      category: 'CLI',
      preview: './previews/kyuuriqstats.svg',
      featured: true,
    },
    {
      name: 'kyuuriq-esp32',
      description:
        'Custom firmware for ESP32-WROOM-32. Experimental firmware for learning ESP32 development, GPIO control, Wi-Fi and web-based device management.',
      url: 'https://github.com/kyuuriq197/kyuuriq-esp32',
      language: 'C++',
      category: 'Embedded',
      preview: './previews/kyuuriq-esp32.svg',
      featured: true,
    },
    {
      name: 'kqkernel_arm64',
      description: 'ARM64 kernel experiments.',
      url: 'https://github.com/kyuuriq197/kqkernel_arm64',
      language: 'Rust',
      category: 'Systems',
      preview: './previews/kqkernel_arm64.svg',
      featured: true,
    },
    {
      name: 'iphone14-5-ios-27-2-ipsw-analysis',
      description: 'IPSW analysis and research for iPhone14,5 / iOS 27.2.',
      url: 'https://github.com/kyuuriq197/iphone14-5-ios-27-2-ipsw-analysis',
      language: 'Python',
      category: 'Research',
      preview: './previews/ipsw-analysis.svg',
    },
    {
      name: 'my-rice-',
      description: 'Linux desktop configuration and dotfiles (rice).',
      url: 'https://github.com/kyuuriq197/my-rice-',
      language: 'Config',
      category: 'Linux',
      preview: './previews/my-rice.svg',
    },
  ],
};
