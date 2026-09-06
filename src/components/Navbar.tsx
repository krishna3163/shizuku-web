import React from 'react';
import { Smartphone, Github, Sparkles, Terminal, Download, ShieldCheck, Layers, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  authorizedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, authorizedCount }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#fcfaf6]/95 backdrop-blur-md border-b-2 border-[#1d1b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo & Mascot */}
        <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-[#ffd000] border-2 border-[#1d1b16] shadow-brutal-sm flex items-center justify-center overflow-hidden transform hover:-rotate-6 transition-transform">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <path d="M50 15 C50 15 25 45 25 65 C25 78 36 86 50 86 C64 86 75 78 75 65 C75 45 50 15 50 15 Z" fill="#ffffff" stroke="#1d1b16" strokeWidth="6" strokeLinejoin="round"/>
              <circle cx="42" cy="62" r="4" fill="#1d1b16"/>
              <circle cx="58" cy="62" r="4" fill="#1d1b16"/>
              <path d="M47 70 Q50 74 53 70" stroke="#1d1b16" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-[#1d1b16]">Shizuku</span>
              <span className="bg-[#fff3b0] text-[#1d1b16] text-[11px] font-mono font-bold px-2 py-0.5 rounded border border-[#1d1b16]">v13.5.4</span>
            </div>
            <span className="text-xs text-[#666053] font-medium hidden sm:block">Privileged Android API Framework</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-[#1d1b16]">
          <a href="#setup" className="hover:text-[#f5a623] transition-colors flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-[#f5a623]" />
            Setup Wizard
          </a>
          <a href="#apps" className="hover:text-[#f5a623] transition-colors flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#f5a623]" />
            Apps Ecosystem
            <span className="bg-[#ffd000] text-[#1d1b16] text-[10px] font-mono px-1.5 py-0.2 rounded-full border border-[#1d1b16]">
              {authorizedCount}
            </span>
          </a>
          <a href="#security" className="hover:text-[#f5a623] transition-colors flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#f5a623]" />
            Why Not Root?
          </a>
          <a href="#readme" className="hover:text-[#f5a623] transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#f5a623]" />
            Docs & README
          </a>
          <button 
            onClick={onOpenTerminal}
            className="hover:text-[#f5a623] transition-colors flex items-center gap-1.5 text-[#1d1b16] font-mono text-xs bg-[#f4f0e6] px-2.5 py-1 rounded border border-[#1d1b16] shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            adb_shell
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Service Status Pill */}
          <div className="hidden sm:flex items-center gap-2 bg-[#ffffff] border-2 border-[#1d1b16] px-3 py-1 rounded-full shadow-brutal-sm text-xs font-mono font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse"></span>
            <span>Binder: ACTIVE</span>
          </div>

          {/* GitHub Stars */}
          <a 
            href="https://github.com/RikkaApps/Shizuku" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-[#ffffff] border-2 border-[#1d1b16] px-3 py-1.5 rounded-lg shadow-brutal-sm hover:shadow-brutal transition-all font-mono text-xs font-bold"
          >
            <Github className="w-4 h-4" />
            <span>18.4k</span>
          </a>

          {/* Download Button */}
          <a 
            href="https://github.com/RikkaApps/Shizuku/releases" 
            target="_blank" 
            rel="noreferrer"
            className="posthog-btn-yellow px-4 py-2 rounded-lg text-xs md:text-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Get APK</span>
          </a>
        </div>

      </div>
    </header>
  );
};
