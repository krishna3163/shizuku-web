export const DEFAULT_README = `# ⚡ Shizuku Web — PostHog Style Privileged Android Portal

[![CI/CD Auto-Deploy](https://github.com/krishna3163/shizuku-web/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/krishna3163/shizuku-web/actions)
[![Live Production](https://img.shields.io/badge/Render-Live%20Production-success?style=flat&logo=render)](https://shizuku-web.onrender.com)
[![License](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](LICENSE)

A modern, neo-brutalist web application & interactive companion for **[Shizuku](https://shizuku.rikka.app)** (the privileged Android API framework by Rikka).

Designed with **PostHog's iconic aesthetic**:
- Warm paper cream background (\`#fcfaf6\`)
- Retro high-contrast black ink borders (\`#1d1b16\`)
- Vibrant PostHog yellow/amber accents (\`#ffd000\`, \`#f5a623\`)
- Hard neo-brutalist drop shadows (\`3px 3px 0px #1d1b16\`)

---

## 🌐 Live Production URL

- **Primary Web App**: **[https://shizuku-web.onrender.com](https://shizuku-web.onrender.com)**
- **GitHub Repository**: **[https://github.com/krishna3163/shizuku-web](https://github.com/krishna3163/shizuku-web)**

---

## ✨ Features & Architecture

| Feature | Description | Status |
| :--- | :--- | :--- |
| **⚡ Live Daemon Status** | Real-time simulated status, SELinux context, active TCP port, and connected clients. | ✅ Complete |
| **📱 3-Way Setup Wizard** | Wireless ADB (Android 11+ pairing handshake), USB ADB, and Rooted devices (Magisk/KernelSU). | ✅ Complete |
| **📦 Compatible Apps Ecosystem** | Searchable & filterable directory (App Ops, Hail, Canta, Swift Backup, etc.) with real-time toggle switches. | ✅ Complete |
| **💻 In-Browser ADB Shell** | Interactive retro terminal simulating ADB commands (\`pm list packages\`, \`shizuku status\`, etc.). | ✅ Complete |
| **🛡️ Security & Integrity Matrix** | Side-by-side technical comparison of Shizuku vs Full Root vs Work Profiles. | ✅ Complete |
| **📖 Auto-Synced Live README** | Embedded markdown reader dynamically synced with GitHub raw content + cache-busting. | ✅ Complete |
| **⚙️ CI/CD Workflow** | GitHub Actions workflow that verifies builds and syncs deployments on every commit. | ✅ Complete |

---

## 🔄 Auto-Update & CI/CD Workflow

This repository includes an automated GitHub Actions CI/CD workflow (\`.github/workflows/ci-cd.yml\`).

### How Auto-Update Works:
1. **GitHub Push & Edit Trigger**: Whenever \`README.md\` or source files are edited and pushed to \`main\` (or edited via GitHub Web UI), the GitHub Actions workflow automatically triggers.
2. **Automated Verification**: Runs \`npm ci\`, checks TypeScript compilation, and builds the production bundle.
3. **Live Sync to Website**:
   - The web app dynamically fetches the raw \`README.md\` directly from GitHub (\`raw.githubusercontent.com\`), ensuring immediate updates for visitors.
   - Render automatically rebuilds and deploys the production static site from the \`main\` branch.
   - You can also click **"Sync Now"** directly on the website to force a real-time re-fetch!

---

## 🚀 Local Development & Build

\`\`\`bash
# 1. Clone the repository
git clone https://github.com/krishna3163/shizuku-web.git
cd shizuku-web

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Production build
npm run build
\`\`\`

---

## 📜 Credits & License
- **Framework Inspiration**: [RikkaApps / Shizuku](https://github.com/RikkaApps/Shizuku)
- **Design Inspiration**: [PostHog](https://posthog.com)
- **License**: GPL-3.0 License
`;
