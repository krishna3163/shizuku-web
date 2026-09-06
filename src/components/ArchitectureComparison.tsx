import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck, BatteryCharging, Zap, Lock } from 'lucide-react';

export const ArchitectureComparison: React.FC = () => {
  return (
    <section id="security" className="py-16 md:py-24 bg-[#f4f0e6] border-b-2 border-[#1d1b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider bg-[#ffd000] border-2 border-[#1d1b16] px-3 py-1 rounded-full shadow-brutal-sm mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECURITY FIRST ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1d1b16] tracking-tight">
            Why Shizuku Over Full Root?
          </h2>
          <p className="text-[#666053] font-medium mt-2 text-base">
            Full root gives apps the keys to the entire kingdom. Shizuku delivers surgical, system-level capabilities while keeping your device certified and secure.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="posthog-box rounded-2xl bg-[#ffffff] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1d1b16] bg-[#fff9db] font-mono text-xs">
                  <th className="p-4 sm:p-5 font-black text-[#1d1b16]">SECURITY & SYSTEM CAPABILITY</th>
                  <th className="p-4 sm:p-5 font-black text-[#1d1b16] bg-[#ffd000] border-l-2 border-r-2 border-[#1d1b16]">
                    ⚡ SHIZUKU (ADB PRIVILEGED)
                  </th>
                  <th className="p-4 sm:p-5 font-black text-[#666053]">TRADITIONAL ROOT (MAGISK / KSU)</th>
                  <th className="p-4 sm:p-5 font-black text-[#666053]">WORK PROFILE (ISLAND / SHELTER)</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium divide-y divide-[#1d1b16]">
                
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1d1b16]">
                    Banking & Payment Apps
                    <span className="block text-xs font-normal text-[#666053]">Google Pay, Banking apps, Knox integrity</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-[#fffdf0] border-l-2 border-r-2 border-[#1d1b16]">
                    <span className="flex items-center gap-2 text-[#166534] font-bold">
                      <Check className="w-4 h-4 text-[#16a34a]" />
                      100% Working (Untouched)
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#991b1b]">
                    <span className="flex items-center gap-2 font-bold">
                      <X className="w-4 h-4 text-[#dc2626]" />
                      Requires complex hide modules
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#166534]">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a]" />
                      Working
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1d1b16]">
                    Bootloader Status
                    <span className="block text-xs font-normal text-[#666053]">Unlocked bootloader requirement</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-[#fffdf0] border-l-2 border-r-2 border-[#1d1b16]">
                    <span className="flex items-center gap-2 text-[#166534] font-bold">
                      <Check className="w-4 h-4 text-[#16a34a]" />
                      Locked Bootloader Supported
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#991b1b]">
                    <span className="flex items-center gap-2 font-bold">
                      <X className="w-4 h-4 text-[#dc2626]" />
                      Must unlock bootloader
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#166534]">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#16a34a]" />
                      Locked
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1d1b16]">
                    System App Debloating & Freezing
                    <span className="block text-xs font-normal text-[#666053]">Uninstall carrier & vendor bloat</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-[#fffdf0] border-l-2 border-r-2 border-[#1d1b16]">
                    <span className="flex items-center gap-2 text-[#166534] font-bold">
                      <Check className="w-4 h-4 text-[#16a34a]" />
                      Full User-Space Freeze & Remove
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#166534]">
                    <span className="flex items-center gap-2 font-bold">
                      <Check className="w-4 h-4 text-[#16a34a]" />
                      Full Partition Modification
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#666053]">
                    <span className="flex items-center gap-2">
                      <X className="w-4 h-4 text-[#9e9789]" />
                      Profile only
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1d1b16]">
                    Permission Model
                    <span className="block text-xs font-normal text-[#666053]">Control over what each app can do</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-[#fffdf0] border-l-2 border-r-2 border-[#1d1b16]">
                    <span className="flex items-center gap-2 text-[#1d1b16] font-bold">
                      <Lock className="w-4 h-4 text-[#f5a623]" />
                      Granular Per-App Auth Dialog
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#666053]">
                    <span>All-or-nothing root shell</span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#666053]">
                    <span>Standard Android permissions</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#1d1b16]">
                    Battery Impact & Wakelocks
                    <span className="block text-xs font-normal text-[#666053]">Background process drain</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-[#fffdf0] border-l-2 border-r-2 border-[#1d1b16]">
                    <span className="flex items-center gap-2 text-[#166534] font-bold">
                      <BatteryCharging className="w-4 h-4 text-[#16a34a]" />
                      0% (Native Android Binder Bridge)
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#666053]">
                    <span>Depends on daemon & modules</span>
                  </td>
                  <td className="p-4 sm:p-5 text-[#666053]">
                    <span>Doubles system services memory</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
