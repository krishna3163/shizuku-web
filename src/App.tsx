import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SetupWizard } from './components/SetupWizard';
import { AppsDirectory } from './components/AppsDirectory';
import { ArchitectureComparison } from './components/ArchitectureComparison';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Footer } from './components/Footer';
import { APPS_DATA, ShizukuApp } from './data/appsData';
import { Check, Info, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export function App() {
  const [apps, setApps] = useState<ShizukuApp[]>(APPS_DATA);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ title: string; desc?: string } | null>(null);

  const showToast = (title: string, desc?: string) => {
    setToastMessage({ title, desc });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast('Copied to clipboard!', label);
  };

  const handleToggleAuthorization = (id: string) => {
    setApps(prev => prev.map(app => {
      if (app.id === id) {
        const nextState = !app.initialAuthorized;
        if (nextState) {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#ffd000', '#f5a623', '#22c55e']
          });
          showToast(`Granted Permission`, `${app.name} is now authorized to use Shizuku Binder API.`);
        } else {
          showToast(`Revoked Permission`, `${app.name} privileges revoked.`);
        }
        return { ...app, initialAuthorized: nextState };
      }
      return app;
    }));
  };

  const authorizedCount = apps.filter(a => a.initialAuthorized).length;

  return (
    <div className="min-h-screen bg-[#fcfaf6] text-[#1d1b16] flex flex-col font-sans selection:bg-[#ffd000]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="bg-[#1d1b16] text-[#ffffff] border-2 border-[#1d1b16] shadow-brutal p-4 rounded-xl flex items-start gap-3 max-w-sm">
            <div className="w-5 h-5 rounded-full bg-[#ffd000] text-[#1d1b16] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
              ✓
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-sm text-[#ffd000]">{toastMessage.title}</h5>
              {toastMessage.desc && <p className="text-xs text-[#e2ded6] mt-0.5">{toastMessage.desc}</p>}
            </div>
            <button 
              onClick={() => setToastMessage(null)}
              className="text-[#9e9789] hover:text-[#ffffff]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <Navbar 
        onOpenTerminal={() => setIsTerminalOpen(true)}
        authorizedCount={authorizedCount}
      />

      {/* Hero */}
      <Hero 
        onScrollToSetup={() => {
          document.getElementById('setup')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onCopyText={handleCopyText}
      />

      {/* Setup Wizard */}
      <SetupWizard onCopyText={handleCopyText} />

      {/* Compatible Apps Ecosystem */}
      <AppsDirectory 
        apps={apps}
        onToggleAuthorization={handleToggleAuthorization}
      />

      {/* Why Not Root Security Breakdown */}
      <ArchitectureComparison />

      {/* Footer */}
      <Footer />

      {/* In-Browser ADB Shell Modal */}
      <InteractiveTerminal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

    </div>
  );
}

export default App;
