export interface ShizukuApp {
  id: string;
  name: string;
  developer: string;
  category: 'Debloat' | 'Management' | 'Theming' | 'Backup' | 'Automation' | 'System';
  description: string;
  privilegeLevel: 'ADB Shell' | 'AppOps' | 'Package Manager';
  githubOrWebsite: string;
  badge: string;
  initialAuthorized: boolean;
  packageId: string;
  iconBg: string;
}

export const APPS_DATA: ShizukuApp[] = [
  {
    id: 'canta',
    name: 'Canta',
    developer: 'samolego',
    category: 'Debloat',
    description: 'Uninstall any pre-installed system bloatware (Facebook, Knox, carrier apps) safely without bricking your device.',
    privilegeLevel: 'Package Manager',
    githubOrWebsite: 'https://github.com/samolego/Canta',
    badge: 'Open Source',
    initialAuthorized: true,
    packageId: 'org.samolego.canta',
    iconBg: '#ffe247'
  },
  {
    id: 'app-manager',
    name: 'App Manager',
    developer: 'MuntashirAkon',
    category: 'Management',
    description: 'The ultimate Android package inspector: view trackers, block activities, grant system permissions, and dump manifests.',
    privilegeLevel: 'ADB Shell',
    githubOrWebsite: 'https://github.com/MuntashirAkon/AppManager',
    badge: 'Security / F-Droid',
    initialAuthorized: true,
    packageId: 'io.github.muntashirakon.AppManager',
    iconBg: '#ffffff'
  },
  {
    id: 'hail',
    name: 'Hail',
    developer: 'aistra0',
    category: 'Management',
    description: 'Freeze and hide battery-draining apps when not in use. Zero background wakelocks, clean launcher.',
    privilegeLevel: 'Package Manager',
    githubOrWebsite: 'https://github.com/aistra0/Hail',
    badge: 'Zero Wakelock',
    initialAuthorized: true,
    packageId: 'com.aistra.hail',
    iconBg: '#ffd000'
  },
  {
    id: 'swift-backup',
    name: 'Swift Backup',
    developer: 'SwiftApps',
    category: 'Backup',
    description: 'Backup APKs, app data, call logs, and messages directly to Nextcloud, Google Drive, or local storage without root.',
    privilegeLevel: 'ADB Shell',
    githubOrWebsite: 'https://swiftapps.org/',
    badge: 'Popular Utility',
    initialAuthorized: false,
    packageId: 'org.swiftapps.swiftbackup',
    iconBg: '#ffffff'
  },
  {
    id: 'colorblendr',
    name: 'ColorBlendr',
    developer: 'Mahmud0808',
    category: 'Theming',
    description: 'Custom Material You Monet palette generator for all Android 12+ devices. Modify accent colors on the fly.',
    privilegeLevel: 'AppOps',
    githubOrWebsite: 'https://github.com/Mahmud0808/ColorBlendr',
    badge: 'Monet Engine',
    initialAuthorized: true,
    packageId: 'com.drdisagree.colorblendr',
    iconBg: '#ffe247'
  },
  {
    id: 'darq',
    name: 'DarQ',
    developer: 'KieronQuinn',
    category: 'Theming',
    description: 'Per-app force dark mode toggle without root. Inverts light UI in apps that lack native dark theme options.',
    privilegeLevel: 'AppOps',
    githubOrWebsite: 'https://github.com/KieronQuinn/DarQ',
    badge: 'Dark Mode Tool',
    initialAuthorized: false,
    packageId: 'com.kieronquinn.app.darq',
    iconBg: '#ffffff'
  },
  {
    id: 'termux',
    name: 'Termux (Shizuku Plugin)',
    developer: 'Termux Community',
    category: 'Automation',
    description: 'Execute elevated Linux and Android shell commands directly from your local terminal session with rish binder.',
    privilegeLevel: 'ADB Shell',
    githubOrWebsite: 'https://termux.dev/',
    badge: 'Developer Powerhouse',
    initialAuthorized: true,
    packageId: 'com.termux',
    iconBg: '#ffd000'
  },
  {
    id: 'icebox',
    name: 'Ice Box',
    developer: 'Catching Now',
    category: 'Management',
    description: 'Freeze apps into an icebox. Defrost with one tap from home screen shortcuts.',
    privilegeLevel: 'Package Manager',
    githubOrWebsite: 'https://catchingnow.com/icebox/',
    badge: 'Classics',
    initialAuthorized: false,
    packageId: 'com.catchingnow.icebox',
    iconBg: '#ffffff'
  }
];
