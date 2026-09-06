import React from 'react';
import { Heart, Github, ArrowUp, Sparkles, BookOpen, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1d1b16] text-[#fcfaf6] border-t-2 border-[#1d1b16] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#3d382f]">
          
          {/* Brand & Mascot */}
          <div className="md:col-span-2 space-y-4">
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
            <h4 className="font-bold text-[#ffd000] uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-[#e2ded6]">
              <li>
                <a href="https://shizuku.rikka.app/" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  Official Shizuku Site
                </a>
              </li>
              <li>
                <a href="https://github.com/RikkaApps/Shizuku" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://github.com/RikkaApps/Shizuku-API" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Developer API Specs
                </a>
              </li>
              <li>
                <a href="https://github.com/RikkaApps/Sui" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  Sui (Root Companion)
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Compatible Ecosystem */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold text-[#ffd000] uppercase tracking-wider">Top Apps</h4>
            <ul className="space-y-2 text-[#e2ded6]">
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
              <li>
                <a href="https://termux.dev/" target="_blank" rel="noreferrer" className="hover:text-[#ffd000] transition-colors">
                  Termux (rish binder)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9e9789] font-mono">
          <p className="flex items-center gap-1.5">
            Crafted for Android power-users with <Heart className="w-3.5 h-3.5 text-[#f87171] fill-[#f87171]" /> and PostHog design inspiration.
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
