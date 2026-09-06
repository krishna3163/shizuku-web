import React, { useState } from 'react';
import { Search, ExternalLink, Check, X, Shield, Lock, Unlock, Layers, Filter } from 'lucide-react';
import { ShizukuApp } from '../data/appsData';

interface AppsDirectoryProps {
  apps: ShizukuApp[];
  onToggleAuthorization: (id: string) => void;
}

export const AppsDirectory: React.FC<AppsDirectoryProps> = ({ apps, onToggleAuthorization }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Debloat', 'Management', 'Theming', 'Backup', 'Automation'];

  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.packageId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const authorizedCount = apps.filter(a => a.initialAuthorized).length;

  return (
    <section id="apps" className="py-16 md:py-24 bg-[#fcfaf6] border-b-2 border-[#1d1b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider bg-[#ffd000] border-2 border-[#1d1b16] px-3 py-1 rounded-full shadow-brutal-sm mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>THE SHIZUKU ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1d1b16] tracking-tight">
              Compatible Apps Directory
            </h2>
            <p className="text-[#666053] font-medium mt-2 text-base">
              Discover and manage apps that leverage Shizuku's privileged binder API without requiring full root.
            </p>
          </div>

          {/* Stat Pill */}
          <div className="bg-[#ffffff] border-2 border-[#1d1b16] px-4 py-2.5 rounded-xl shadow-brutal-sm flex items-center gap-3 font-mono text-xs font-bold">
            <span className="w-3 h-3 rounded-full bg-[#22c55e]"></span>
            <span>{authorizedCount} of {apps.length} APPS AUTHORIZED</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-[#666053] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input 
              type="text"
              placeholder="Search apps by name, description, package..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#ffffff] border-2 border-[#1d1b16] pl-10 pr-4 py-2.5 rounded-xl font-medium text-sm text-[#1d1b16] placeholder-[#9e9789] shadow-brutal-sm focus:outline-none focus:border-[#f5a623]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg border-2 border-[#1d1b16] font-mono text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#ffd000] shadow-brutal-sm translate-x-[-1px] translate-y-[-1px]'
                    : 'bg-[#ffffff] hover:bg-[#f4f0e6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <div 
              key={app.id} 
              className="posthog-box p-6 rounded-2xl flex flex-col justify-between bg-[#ffffff] relative group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-xl border-2 border-[#1d1b16] shadow-brutal-sm flex items-center justify-center font-black text-xl"
                      style={{ backgroundColor: app.iconBg }}
                    >
                      {app.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-[#1d1b16] flex items-center gap-1.5">
                        {app.name}
                      </h3>
                      <span className="text-xs font-mono text-[#666053]">by {app.developer}</span>
                    </div>
                  </div>

                  <span className="bg-[#fff3b0] text-[#1d1b16] font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-[#1d1b16]">
                    {app.category}
                  </span>
                </div>

                {/* Package ID Pill */}
                <div className="font-mono text-[11px] text-[#9e9789] bg-[#fcfaf6] px-2 py-1 rounded border border-[#1d1b16]/20 truncate mb-3 select-all">
                  {app.packageId}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#666053] font-medium leading-relaxed mb-4">
                  {app.description}
                </p>
              </div>

              {/* Card Footer: Permission Badge & Authorization Action */}
              <div className="border-t-2 border-[#1d1b16] pt-4 mt-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#1d1b16]">
                  <Shield className="w-3.5 h-3.5 text-[#f5a623]" />
                  <span className="font-bold">{app.privilegeLevel}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={app.githubOrWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 bg-[#ffffff] hover:bg-[#f4f0e6] border border-[#1d1b16] rounded-md transition-colors text-[#1d1b16]"
                    title="Visit Project"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onToggleAuthorization(app.id)}
                    className={`px-3 py-1.5 rounded-lg border-2 border-[#1d1b16] font-mono text-xs font-bold flex items-center gap-1.5 transition-all ${
                      app.initialAuthorized
                        ? 'bg-[#ecfdf5] text-[#166534] border-[#16a34a] hover:bg-[#fee2e2] hover:text-[#991b1b] hover:border-[#dc2626]'
                        : 'bg-[#ffffff] text-[#1d1b16] hover:bg-[#ffd000]'
                    }`}
                  >
                    {app.initialAuthorized ? (
                      <>
                        <Unlock className="w-3.5 h-3.5 text-[#16a34a]" />
                        <span>Granted</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5 text-[#9e9789]" />
                        <span>Authorize</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="text-center py-12 posthog-box rounded-2xl bg-[#ffffff] max-w-md mx-auto">
            <p className="font-bold text-base text-[#1d1b16]">No matching apps found</p>
            <p className="text-xs text-[#666053] mt-1 font-medium">Try searching for "Canta", "Hail", or change categories.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="posthog-btn-yellow mt-4 px-4 py-1.5 rounded-lg text-xs"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
