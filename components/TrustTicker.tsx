import React from 'react';
import { ShieldCheck, Landmark, HeartPulse, FileCheck2, Lock, Cpu } from 'lucide-react';

export const TrustTicker: React.FC = () => {
  const accreditations = [
    {
      icon: Landmark,
      title: 'UK Cabinet Office ATRS Tier-2',
      tag: 'Central Gov Statutory Standard',
      status: 'Compliant'
    },
    {
      icon: HeartPulse,
      title: 'NHS DCB0129 & Caldicott',
      tag: 'Clinical Safety & PHI Guardrails',
      status: 'CSO Certified'
    },
    {
      icon: FileCheck2,
      title: 'ISO/IEC 42001 (AIMS)',
      tag: 'AI Management Systems TOM',
      status: 'Certified Baseline'
    },
    {
      icon: Lock,
      title: 'UK GDPR Article 9 Enclaves',
      tag: 'Zero Open-Web Data Leakage',
      status: 'FIPS 140-3 ZDR'
    },
    {
      icon: ShieldCheck,
      title: 'Crown Commercial G-Cloud',
      tag: 'Public Sector Assurance Partner',
      status: 'Aligned Tier'
    },
    {
      icon: Cpu,
      title: 'Sub-50ms In-Flight NER',
      tag: 'Hardware-Isolated Token Buffer',
      status: '<42ms Latency'
    }
  ];

  return (
    <div className="w-full bg-[#0C0C0C] border-y border-[#262626] py-4 relative overflow-hidden" id="frameworks">
      {/* Background Subtle Line Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#A3A3A3] shrink-0 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[#F5F5F5] font-semibold">Statutory Standards:</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
            {accreditations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2 rounded-lg bg-[#141414] border border-[#222222] hover:border-[#D4AF37]/40 transition-colors group"
                >
                  <div className="p-1.5 rounded-md bg-[#1B1B1B] text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-semibold text-[#F5F5F5] truncate leading-tight group-hover:text-[#E5C158] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[9px] font-mono text-[#8C8C8C] truncate">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
