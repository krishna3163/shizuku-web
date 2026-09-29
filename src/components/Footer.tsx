import React from 'react';
import { Github, ArrowUp, Sparkles, BookOpen, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1d1b16] text-[#fcfaf6] border-t-2 border-[#1d1b16] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#3d382f]">
          
          {/* Brand & Mascot */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#ffd000] border-2 border-[#fcfaf6] flex items-center justify-center font-black text-[#1d1b16]">
                ⚡
              </div>
              <span className="text-2xl font-black tracking-tight text-[#ffffff]">Shizuku</span>
            </div>
            <p className="text-sm text-[#9e9789] max-w-sm font-medium leading-relaxed">
              Open-source privileged API framework for Android developed by Rikka. Crafted with retro PostHog neo-brutalist white & yellow aesthetics.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#ffd000]">
              <Sparkles className="w-4 h-4" />
              <span>GPL-3.0 License &bull; 100% Free &amp; Open Source</span>
            </div>
          </div>

          {/* Links: Resources */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold text-[#ffd000] uppercase tracking-wider">Resources & Feeds</h4>
            <ul className="space-y-2 text-[#e2ded6]">
              <li>
                <a href="https://shizuku.rikka.app/" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  Official Shizuku Site
                </a>
              </li>
              <li>
                <a href="https://github.com/krishna3163/best_shizuku_apps_for_android_no_root" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  Shizuku Catalog Repo
                </a>
              </li>
              <li>
                <a href="https://krishna3163.github.io/best_shizuku_apps_for_android_no_root/fdroid/repo" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  📦 F-Droid Repo URL
                </a>
              </li>
              <li>
                <a href="https://krishna3163.github.io/best_shizuku_apps_for_android_no_root/obtainium.json" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  📥 Obtainium Feed JSON
                </a>
              </li>
              <li>
                <a href="https://github.com/RikkaApps/Shizuku-API" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Developer API Specs
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Compatible Ecosystem */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold text-[#ffd000] uppercase tracking-wider">Sister Projects</h4>
            <ul className="space-y-2 text-[#e2ded6]">
              <li>
                <a href="https://github.com/krishna3163/best-root-apps-for-android" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  ⚡ Best Root Apps Catalog
                </a>
              </li>
              <li>
                <a href="https://github.com/krishna3163/awesome-android-app-repositories" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  📚 Awesome Android Repos
                </a>
              </li>
              <li>
                <a href="https://github.com/samolego/Canta" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  Canta (Debloater)
                </a>
              </li>
              <li>
                <a href="https://github.com/MuntashirAkon/AppManager" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  App Manager
                </a>
              </li>
              <li>
                <a href="https://github.com/aistra0/Hail" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  Hail (App Freezer)
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Community & Maintainer */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold text-[#ffd000] uppercase tracking-wider">Connect & Chat</h4>
            <ul className="space-y-2 text-[#e2ded6]">
              <li>
                <a href="https://t.me/krishna0858bot" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <span>🤖 Bot: @krishna0858bot</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/kk3163019" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <span>✈️ Telegram: @kk3163019</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/krishna3163/best_shizuku_apps_for_android_no_root/discussions" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <span>💬 GitHub Discussions</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/krishna.0858/?hl=en" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <span>📸 Instagram: @krishna.0858</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/krishna0858/" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <span>💼 LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/krishna3163/best_shizuku_apps_for_android_no_root/wiki" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <span>📖 Project Wiki (EN/ZH/RU)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9e9789] font-mono">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Shizuku Web Companion • Privileged Android Tools
          </p>

          <button
            onClick={scrollToTop}
            className="bg-[#2a2721] hover:bg-[#ffd000] hover:text-[#1d1b16] border border-[#3d382f] px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors text-white font-bold"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
