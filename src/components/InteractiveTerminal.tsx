import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Play, CornerDownLeft, RotateCcw, Copy, Check } from 'lucide-react';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  cmd: string;
  output: string;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      cmd: 'shizuku-status',
      output: `[+] Shizuku Server v13.5.4 (Build 1058)
[+] Running via ADB binder daemon (PID 10482)
[+] SELinux Context: u:r:shizuku:s0 (Enforcing)
[+] Client Apps Connected: 7 apps granted
[+] Ping Latency: 0.12ms (Native Binder IPC)`
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const quickCommands = [
    { label: 'Check Status', cmd: 'shizuku-status' },
    { label: 'List Third-Party Apps', cmd: 'pm list packages -3' },
    { label: 'Debloat Facebook', cmd: 'pm disable-user --user 0 com.facebook.katana' },
    { label: 'Verify ADB Devices', cmd: 'adb devices -l' },
    { label: 'Dump Binder', cmd: 'dumpsys binder' }
  ];

  const handleRunCommand = (command: string) => {
    const trimmed = command.trim();
    if (!trimmed) return;

    let reply = '';
    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'shizuku-status') {
      reply = `[+] Shizuku Server v13.5.4 (Build 1058)
[+] Running via ADB binder daemon (PID 10482)
[+] SELinux Context: u:r:shizuku:s0 (Enforcing)
[+] Active Port: 42135 (TCP)
[+] Ping Latency: 0.12ms (Native Binder IPC)`;
    } else if (lower.includes('pm list packages')) {
      reply = `package:org.samolego.canta
package:io.github.muntashirakon.AppManager
package:com.aistra.hail
package:org.swiftapps.swiftbackup
package:com.drdisagree.colorblendr
package:com.termux
package:com.facebook.katana (State: disabled)
package:com.google.android.youtube`;
    } else if (lower.includes('pm disable-user') || lower.includes('pm uninstall')) {
      reply = `Package com.facebook.katana new state: disabled-user
Success: Application frozen via Shizuku Package Manager API.`;
    } else if (lower.includes('adb devices')) {
      reply = `List of devices attached
192.168.1.42:42135     device product:oriole model:Pixel_6 device:oriole transport_id:1`;
    } else if (lower.includes('dumpsys')) {
      reply = `moe.shizuku.privileged.api:
  ShizukuServiceConnection: active (ref_count: 7)
  Binder tokens registered: 7
  Permission check: android.permission.INTERACT_ACROSS_USERS -> GRANTED`;
    } else if (lower === 'help') {
      reply = `Available commands:
  shizuku-status                 - Query daemon status & SELinux context
  pm list packages -3            - List user-installed packages
  pm disable-user --user 0 <pkg> - Freeze app without root
  adb devices -l                 - View connected wireless endpoints
  dumpsys binder                 - Inspect Shizuku binder IPC
  clear                          - Clear console`;
    } else {
      reply = `sh: ${trimmed}: command executed through Shizuku ADB shell binder (exit code 0).`;
    }

    setHistory(prev => [...prev, { cmd: trimmed, output: reply }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1d1b16]/70 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Terminal Window Box */}
      <div className="w-full max-w-3xl bg-[#1d1b16] text-[#ffffff] rounded-2xl border-2 border-[#1d1b16] shadow-brutal-xl overflow-hidden flex flex-col h-[520px]">
        
        {/* Terminal Header */}
        <div className="bg-[#2a2721] px-4 py-3 border-b-2 border-[#1d1b16] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f87171] border border-[#1d1b16]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffd000] border border-[#1d1b16]"></div>
            <div className="w-3 h-3 rounded-full bg-[#4ade80] border border-[#1d1b16]"></div>
            <span className="ml-2 font-mono text-xs font-bold text-[#f4f0e6] flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#ffd000]" />
              shizuku_shell@android:~ (rish binder)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setHistory([])}
              className="p-1 hover:bg-[#3d382f] rounded text-[#9e9789] hover:text-[#ffffff] transition-colors"
              title="Clear terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-[#f87171] rounded text-[#9e9789] hover:text-[#1d1b16] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Chips */}
        <div className="bg-[#1f1d18] px-4 py-2 border-b border-[#3d382f] flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          <span className="text-[#9e9789] font-bold">Quick:</span>
          {quickCommands.map(item => (
            <button
              key={item.cmd}
              onClick={() => handleRunCommand(item.cmd)}
              className="bg-[#2a2721] hover:bg-[#ffd000] hover:text-[#1d1b16] px-2.5 py-0.5 rounded border border-[#3d382f] text-[#f4f0e6] whitespace-nowrap transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Output Screen */}
        <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4">
          <div className="text-[#9e9789]">
            Type <span className="text-[#ffd000]">help</span> to view available commands. Commands run directly against the simulated Shizuku binder API.
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#ffd000]">
                <span className="text-[#38a169]">shell@pixel6:/ $</span>
                <span className="font-bold">{item.cmd}</span>
              </div>
              <div className="text-[#e2ded6] whitespace-pre-wrap pl-4 border-l border-[#3d382f]">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleRunCommand(inputVal); }}
          className="bg-[#171511] p-3 border-t-2 border-[#1d1b16] flex items-center gap-3 font-mono text-xs"
        >
          <span className="text-[#38a169] font-bold flex-shrink-0">shell@pixel6:/ $</span>
          <input 
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-[#ffffff] focus:outline-none placeholder-[#666053]"
            autoFocus
          />
          <button 
            type="submit" 
            className="bg-[#ffd000] text-[#1d1b16] px-3 py-1.5 rounded font-bold hover:bg-[#ffdc33] transition-colors flex items-center gap-1"
          >
            <Play className="w-3 h-3" />
            <span>Exec</span>
          </button>
        </form>

      </div>
    </div>
  );
};
