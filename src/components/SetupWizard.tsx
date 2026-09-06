import React, { useState } from 'react';
import { Wifi, Usb, Zap, Copy, Check, ArrowRight, Shield, RefreshCw, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SetupWizardProps {
  onCopyText: (text: string, label: string) => void;
}

export const SetupWizard: React.FC<SetupWizardProps> = ({ onCopyText }) => {
  const [activeTab, setActiveTab] = useState<'wireless' | 'usb' | 'root'>('wireless');
  const [pairingCode, setPairingCode] = useState('739281');
  const [pairingPort, setPairingPort] = useState('37419');
  const [isPairing, setIsPairing] = useState(false);
  const [pairStatus, setPairStatus] = useState<'idle' | 'pairing' | 'paired'>('idle');

  const usbCommand = 'adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh';
  const rootCommand = 'su -c "/data/data/moe.shizuku.privileged.api/bin/shizuku_starter"';

  const handleSimulatePair = () => {
    setIsPairing(true);
    setPairStatus('pairing');
    setTimeout(() => {
      setIsPairing(false);
      setPairStatus('paired');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffd000', '#f5a623', '#1d1b16', '#ffffff']
      });
    }, 1800);
  };

  return (
    <section id="setup" className="py-16 md:py-24 bg-[#f4f0e6] border-b-2 border-[#1d1b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider bg-[#ffd000] border-2 border-[#1d1b16] px-3 py-1 rounded-full shadow-brutal-sm mb-3">
            ZERO BOOTLOADER UNLOCK
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1d1b16] tracking-tight">
            Choose Your Setup Method
          </h2>
          <p className="text-[#666053] font-medium mt-3 text-base">
            No matter if you're on a stock Galaxy, Pixel, OnePlus, or a custom rooted build, Shizuku gets running in under 2 minutes.
          </p>
        </div>

        {/* Tab Switcher (PostHog Retro Brutalist Tabs) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('wireless')}
            className={`px-5 py-3 rounded-xl border-2 border-[#1d1b16] font-bold text-sm flex items-center gap-2 transition-all ${
              activeTab === 'wireless'
                ? 'bg-[#ffd000] shadow-brutal translate-x-[-2px] translate-y-[-2px]'
                : 'bg-[#ffffff] hover:bg-[#fcfaf6] shadow-brutal-sm'
            }`}
          >
            <Wifi className="w-4 h-4 text-[#1d1b16]" />
            <span>Wireless Debugging (Android 11+)</span>
            <span className="bg-[#1d1b16] text-[#ffffff] text-[10px] font-mono px-1.5 py-0.2 rounded font-bold">
              RECOMMENDED
            </span>
          </button>

          <button
            onClick={() => setActiveTab('usb')}
            className={`px-5 py-3 rounded-xl border-2 border-[#1d1b16] font-bold text-sm flex items-center gap-2 transition-all ${
              activeTab === 'usb'
                ? 'bg-[#ffd000] shadow-brutal translate-x-[-2px] translate-y-[-2px]'
                : 'bg-[#ffffff] hover:bg-[#fcfaf6] shadow-brutal-sm'
            }`}
          >
            <Usb className="w-4 h-4 text-[#1d1b16]" />
            <span>Connect to Computer (USB ADB)</span>
          </button>

          <button
            onClick={() => setActiveTab('root')}
            className={`px-5 py-3 rounded-xl border-2 border-[#1d1b16] font-bold text-sm flex items-center gap-2 transition-all ${
              activeTab === 'root'
                ? 'bg-[#ffd000] shadow-brutal translate-x-[-2px] translate-y-[-2px]'
                : 'bg-[#ffffff] hover:bg-[#fcfaf6] shadow-brutal-sm'
            }`}
          >
            <Zap className="w-4 h-4 text-[#1d1b16]" />
            <span>Rooted Device (Magisk / KSU)</span>
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="max-w-4xl mx-auto">
          
          {/* TAB 1: Wireless Debugging */}
          {activeTab === 'wireless' && (
            <div className="posthog-box p-6 sm:p-8 rounded-2xl bg-[#ffffff]">
              
              <div className="flex items-center justify-between border-b-2 border-[#1d1b16] pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[#1d1b16] flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-[#f5a623]" />
                    Wireless Debugging Guide & Pair Simulator
                  </h3>
                  <p className="text-xs text-[#666053] font-medium mt-1">Requires Wi-Fi connection and Android 11 or newer.</p>
                </div>
                <span className="bg-[#fff3b0] text-[#1d1b16] font-mono text-xs font-bold px-2.5 py-1 rounded border border-[#1d1b16]">
                  No PC Required
                </span>
              </div>

              {/* Step By Step List */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#ffd000] border-2 border-[#1d1b16] flex items-center justify-center font-mono font-black text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1d1b16]">Enable Developer Options</h4>
                    <p className="text-xs text-[#666053]">Go to Settings &gt; About Phone &gt; Tap "Build Number" 7 times until unlocked.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#ffd000] border-2 border-[#1d1b16] flex items-center justify-center font-mono font-black text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1d1b16]">Enable Wireless Debugging & Tap "Pair device with pairing code"</h4>
                    <p className="text-xs text-[#666053]">In Developer Options, toggle on "Wireless Debugging", then tap "Pair device with pairing code" to see your 6-digit code and Port.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#ffd000] border-2 border-[#1d1b16] flex items-center justify-center font-mono font-black text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1d1b16]">Enter Code in Shizuku Notification</h4>
                    <p className="text-xs text-[#666053]">Open Shizuku, tap "Pairing". Pull down the notification shade and type your code.</p>
                  </div>
                </div>
              </div>

              {/* Interactive Pairing Simulator */}
              <div className="bg-[#fcfaf6] border-2 border-[#1d1b16] p-5 rounded-xl shadow-brutal-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#1d1b16]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1d1b16]">
                      Interactive Pairing Handshake Simulator
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#666053]">Test how ADB TLS pairing works</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div>
                    <label className="block font-mono text-[11px] font-bold text-[#1d1b16] mb-1">Pairing Code (6 Digits)</label>
                    <input 
                      type="text" 
                      value={pairingCode}
                      onChange={(e) => setPairingCode(e.target.value)}
                      className="w-full bg-[#ffffff] border-2 border-[#1d1b16] px-3 py-2 rounded-lg font-mono text-sm font-bold text-center tracking-widest focus:outline-none focus:border-[#f5a623]"
                      maxLength={6}
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold text-[#1d1b16] mb-1">TCP Port</label>
                    <input 
                      type="text" 
                      value={pairingPort}
                      onChange={(e) => setPairingPort(e.target.value)}
                      className="w-full bg-[#ffffff] border-2 border-[#1d1b16] px-3 py-2 rounded-lg font-mono text-sm font-bold text-center focus:outline-none focus:border-[#f5a623]"
                      maxLength={5}
                    />
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={handleSimulatePair}
                      disabled={isPairing}
                      className="w-full posthog-btn-yellow py-2.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isPairing ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Handshaking...</span>
                        </>
                      ) : (
                        <>
                          <Wifi className="w-4 h-4" />
                          <span>Simulate Pair</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {pairStatus === 'paired' && (
                  <div className="bg-[#ecfdf5] border-2 border-[#16a34a] p-3 rounded-lg flex items-center justify-between text-xs font-mono font-bold text-[#166534]">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a]" />
                      <span>SUCCESS: Authenticated via TLS! Shizuku Binder Daemon Started.</span>
                    </div>
                    <span className="text-[10px] bg-[#bbf7d0] px-2 py-0.5 rounded border border-[#16a34a]">
                      PID: 10482
                    </span>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: USB ADB */}
          {activeTab === 'usb' && (
            <div className="posthog-box p-6 sm:p-8 rounded-2xl bg-[#ffffff]">
              
              <div className="flex items-center justify-between border-b-2 border-[#1d1b16] pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[#1d1b16] flex items-center gap-2">
                    <Usb className="w-5 h-5 text-[#f5a623]" />
                    Connect via Computer (USB Cable)
                  </h3>
                  <p className="text-xs text-[#666053] font-medium mt-1">Works on any Android version from Android 6.0 to Android 15.</p>
                </div>
                <span className="bg-[#fff3b0] text-[#1d1b16] font-mono text-xs font-bold px-2.5 py-1 rounded border border-[#1d1b16]">
                  Universal Method
                </span>
              </div>

              <div className="space-y-4 mb-6 text-sm text-[#1d1b16]">
                <p>1. Connect your phone to your PC via USB cable.</p>
                <p>2. In Developer Options, enable <strong>USB Debugging</strong>.</p>
                <p>3. Run the following command in your terminal / PowerShell:</p>
              </div>

              {/* Command Codebox */}
              <div className="bg-[#1d1b16] text-[#ffffff] p-4 rounded-xl border-2 border-[#1d1b16] shadow-brutal flex items-center justify-between gap-4 font-mono text-xs">
                <span className="text-[#ffd000] select-all break-all">
                  {usbCommand}
                </span>
                <button
                  onClick={() => onCopyText(usbCommand, 'USB Start Script')}
                  className="bg-[#ffffff] text-[#1d1b16] hover:bg-[#ffd000] p-2 rounded-lg border border-[#1d1b16] flex-shrink-0 transition-colors font-bold text-xs flex items-center gap-1.5"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
              </div>

              <div className="mt-4 p-3 bg-[#fff9db] border border-[#1d1b16] rounded-lg text-xs font-medium text-[#1d1b16]">
                💡 <strong>Tip:</strong> After rebooting your phone, you only need to run this command once to restart the Shizuku background service.
              </div>

            </div>
          )}

          {/* TAB 3: Rooted Device */}
          {activeTab === 'root' && (
            <div className="posthog-box p-6 sm:p-8 rounded-2xl bg-[#ffffff]">
              
              <div className="flex items-center justify-between border-b-2 border-[#1d1b16] pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[#1d1b16] flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#f5a623]" />
                    Rooted Device (Magisk / KernelSU / APatch)
                  </h3>
                  <p className="text-xs text-[#666053] font-medium mt-1">Direct launch with Superuser privileges.</p>
                </div>
                <span className="bg-[#dcfce7] text-[#166534] font-mono text-xs font-bold px-2.5 py-1 rounded border border-[#16a34a]">
                  Instant 1-Click
                </span>
              </div>

              <p className="text-sm text-[#1d1b16] mb-4">
                If your phone is already rooted, simply open the Shizuku app and tap <strong>"Start (for rooted devices)"</strong>. Grant root access when prompted by Magisk or KernelSU.
              </p>

              <div className="bg-[#1d1b16] text-[#ffffff] p-4 rounded-xl border-2 border-[#1d1b16] shadow-brutal flex items-center justify-between gap-4 font-mono text-xs">
                <span className="text-[#ffd000] select-all break-all">
                  {rootCommand}
                </span>
                <button
                  onClick={() => onCopyText(rootCommand, 'Root Start Command')}
                  className="bg-[#ffffff] text-[#1d1b16] hover:bg-[#ffd000] p-2 rounded-lg border border-[#1d1b16] flex-shrink-0 transition-colors font-bold text-xs flex items-center gap-1.5"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
              </div>

              <div className="mt-4 p-3 bg-[#fff9db] border border-[#1d1b16] rounded-lg text-xs font-medium text-[#1d1b16]">
                🛡️ <strong>Why use Shizuku if you're already rooted?</strong> Granting full root to every app is dangerous. By giving Shizuku root, other apps only get scoped ADB privileges without risking your entire system.
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
