# ⚡ Shizuku Web — PostHog Style Privileged Android Portal

A modern, neo-brutalist web application & interactive companion for **[Shizuku](https://shizuku.rikka.app)** (the privileged Android API framework by Rikka).

Designed with **PostHog's iconic aesthetic**:
- Warm paper cream background (`#fcfaf6`)
- Retro high-contrast black ink borders (`#1d1b16`)
- Vibrant PostHog yellow/amber accents (`#ffd000`, `#f5a623`)
- Hard neo-brutalist drop shadows (`3px 3px 0px #1d1b16`)

---

## ✨ Features

- **⚡ Live Daemon Status Widget**: Real-time simulated status, SELinux context, active TCP port, and connected clients.
- **📱 3-Way Interactive Setup Wizard**:
  - **Android 11+ Wireless Debugging**: With a live interactive TLS Pairing Simulator (6-digit code & port handshake with confetti)!
  - **USB ADB**: One-liner terminal commands with 1-click copy.
  - **Rooted Devices**: Magisk, KernelSU, and APatch guide.
- **📦 Compatible Apps Ecosystem Directory**:
  - Searchable & filterable by categories (*Debloat*, *App Management*, *Theming*, *Backup*, *Automation*).
  - Includes *Canta*, *App Manager*, *Hail*, *Swift Backup*, *ColorBlendr*, *DarQ*, *Termux*, *Ice Box*.
  - Interactive "Authorize / Revoke" permissions toggle with live counter.
- **💻 In-Browser ADB Shell Terminal**:
  - Embedded retro terminal window to test commands like `shizuku-status`, `pm list packages -3`, `pm disable-user`, etc.
- **🛡️ Architecture & Security Matrix**:
  - Direct comparison: Shizuku vs Full Root vs Island/Work Profile (Banking apps, SafetyNet, Play Integrity, Battery).

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Production build
npm run build
```

---

## 📜 License
GPL-3.0 License — Built with inspiration from [Shizuku (RikkaApps)](https://github.com/RikkaApps/Shizuku) and [PostHog](https://posthog.com).
