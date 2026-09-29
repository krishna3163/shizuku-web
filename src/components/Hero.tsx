import React, { useState } from 'react';
import { Download, Sparkles, Wifi, ShieldAlert, CheckCircle2, Copy, Check, Terminal, ExternalLink, ArrowRight } from 'lucide-react';

interface HeroProps {
  onScrollToSetup: () => void;
  onOpenTerminal: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSetup, onOpenTerminal, onCopyText }) => {
  const [copied, setCopied] = useState(false);
  const adbCommand = 'adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh';

  const handleCopy = () => {
    onCopyText(adbCommand, 'ADB Launch Command');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b-2 border-[#1d1b16]">
      
      {/* Retro Dotted / Grid Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#1d1b16_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: PostHog Style Punchy Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffd000] border-2 border-[#1d1b16] px-3.5 py-1 rounded-full shadow-brutal-sm text-xs font-mono font-bold tracking-tight">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PRIVILEGED ANDROID API ENGINE</span>
            </div>

            {/* Main Headline with PostHog Yellow Highlighter */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[#1d1b16]">
              Superpowers for Android apps,{' '}
              <span className="relative inline-block">
                <span className="posthog-highlight">without full Root.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#666053] font-medium leading-relaxed max-w-2xl">
              Shizuku acts as a secure native bridge, letting normal user-space apps execute high-privilege system APIs directly via ADB binder. No bootloader unlock required on Android 11+. Keep SafetyNet & banking apps 100% untouched.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/RikkaApps/Shizuku/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="posthog-btn-yellow px-6 py-3.5 rounded-xl text-base flex items-center gap-2.5"
              >
                <Download className="w-5 h-5" />
                <span>Download Shizuku v13.5.4</span>
              </a>

              <button
                onClick={onScrollToSetup}
                className="posthog-btn-white px-5 py-3.5 rounded-xl text-base flex items-center gap-2"
              >
                <Wifi className="w-5 h-5 text-[#f5a623]" />
                <span>Wireless Pairing Wizard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTerminal}
                className="font-mono text-xs font-bold text-[#1d1b16] bg-[#f4f0e6] hover:bg-[#eae4d5] border-2 border-[#1d1b16] shadow-brutal-sm px-4 py-3.5 rounded-xl flex items-center gap-2 transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                <Terminal className="w-4 h-4" />
                <span>Try In-Browser Shell</span>
              </button>
            </div>

            {/* Ecosystem Quick Links (F-Droid, Obtainium, Telegram Chat) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono font-bold">
              <span className="text-[#666053]">Feeds & Chat:</span>
              <a
                href="https://krishna3163.github.io/best_shizuku_apps_for_android_no_root/fdroid/repo"
                target="_blank"
                rel="noreferrer"
                className="bg-[#ffffff] hover:bg-[#fff9db] text-[#1d1b16] border border-[#1d1b16] px-2.5 py-1 rounded shadow-brutal-sm flex items-center gap-1.5 transition-all"
              >
                <span>📦 F-Droid Repo</span>
              </a>
              <a
                href="https://krishna3163.github.io/best_shizuku_apps_for_android_no_root/obtainium.json"
                target="_blank"
                rel="noreferrer"
                className="bg-[#ffffff] hover:bg-[#fff9db] text-[#1d1b16] border border-[#1d1b16] px-2.5 py-1 rounded shadow-brutal-sm flex items-center gap-1.5 transition-all"
              >
                <span>📥 Obtainium Feed</span>
              </a>
              <a
                href="https://t.me/kk3163019"
                target="_blank"
                rel="noreferrer"
                className="bg-[#2CA5E0] hover:bg-[#208bc2] text-white border border-[#1d1b16] px-2.5 py-1 rounded shadow-brutal-sm flex items-center gap-1.5 transition-all"
              >
                <span>✈️ Telegram Chat</span>
              </a>
              <a
                href="https://github.com/krishna3163/best_shizuku_apps_for_android_no_root/discussions"
                target="_blank"
                rel="noreferrer"
                className="bg-[#ffffff] hover:bg-[#fff9db] text-[#1d1b16] border border-[#1d1b16] px-2.5 py-1 rounded shadow-brutal-sm flex items-center gap-1.5 transition-all"
              >
                <span>💬 Discussions</span>
              </a>
            </div>

            {/* Quick 1-Click ADB Terminal Snippet */}
            <div className="pt-4">
              <div className="text-xs font-mono font-bold text-[#666053] mb-1.5 flex items-center justify-between">
                <span>START SERVICE VIA USB ADB (ONE-LINER):</span>
                <span className="text-[#38a169] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> No Root Required
                </span>
              </div>
              <div className="bg-[#1d1b16] text-[#ffffff] p-3 rounded-xl border-2 border-[#1d1b16] shadow-brutal flex items-center justify-between gap-3 font-mono text-xs overflow-x-auto">
                <span className="text-[#ffd000] select-all truncate">
                  $ {adbCommand}
                </span>
                <button
                  onClick={handleCopy}
                  className="bg-[#ffffff] text-[#1d1b16] hover:bg-[#ffd000] p-1.5 rounded-md border border-[#1d1b16] transition-colors flex-shrink-0"
                  title="Copy ADB Command"
                >
                  {copied ? <Check className="w-4 h-4 text-[#38a169]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: PostHog Retro Interactive Device Card */}
          <div className="lg:col-span-5">
            <div className="posthog-box p-6 rounded-2xl relative bg-[#ffffff]">
              
              {/* Window Header Dots */}
              <div className="flex items-center justify-between border-b-2 border-[#1d1b16] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f87171] border border-[#1d1b16]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffd000] border border-[#1d1b16]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#4ade80] border border-[#1d1b16]"></div>
                  <span className="ml-2 font-mono text-xs font-bold text-[#666053]">shizuku_manager.daemon</span>
                </div>
                <span className="bg-[#a3e635] text-[#1d1b16] border border-[#1d1b16] font-mono font-black text-[10px] px-2 py-0.5 rounded">
                  ONLINE
                </span>
              </div>

              {/* Status Indicator Big Box */}
              <div className="bg-[#fff9db] border-2 border-[#1d1b16] p-4 rounded-xl mb-5 shadow-brutal-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ffd000] border-2 border-[#1d1b16] shadow-brutal-sm flex items-center justify-center font-black text-xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#1d1b16]">Shizuku is Running</h3>
                    <p className="text-xs font-mono text-[#666053]">Privileged Service v13.5.4 (Build 1058)</p>
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5 font-mono text-xs">
                <div className="p-3 bg-[#fcfaf6] border border-[#1d1b16] rounded-lg">
                  <span className="text-[#9e9789] block text-[10px] font-bold uppercase">Active Mode</span>
                  <span className="font-extrabold text-[#1d1b16]">Wireless Debug</span>
                </div>
                <div className="p-3 bg-[#fcfaf6] border border-[#1d1b16] rounded-lg">
                  <span className="text-[#9e9789] block text-[10px] font-bold uppercase">Port</span>
                  <span className="font-extrabold text-[#1d1b16] text-[#38a169]">42135 (TCP)</span>
                </div>
                <div className="p-3 bg-[#fcfaf6] border border-[#1d1b16] rounded-lg">
                  <span className="text-[#9e9789] block text-[10px] font-bold uppercase">SELinux Context</span>
                  <span className="font-extrabold text-[#1d1b16]">u:r:shizuku:s0</span>
                </div>
                <div className="p-3 bg-[#fcfaf6] border border-[#1d1b16] rounded-lg">
                  <span className="text-[#9e9789] block text-[10px] font-bold uppercase">Authorized Apps</span>
                  <span className="font-extrabold text-[#f5a623]">7 Apps Linked</span>
                </div>
              </div>

              {/* Safety & Battery Badges */}
              <div className="space-y-2 border-t-2 border-[#1d1b16] pt-4 text-xs font-medium text-[#1d1b16]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38a169] flex-shrink-0" />
                  <span>Google Pay, Knox & Banking apps stay certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38a169] flex-shrink-0" />
                  <span>Zero background wakelocks (Direct Binder IPC)</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
