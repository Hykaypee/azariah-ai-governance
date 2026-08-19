import React, { useState } from 'react';
import { TECHNICAL_CAPABILITIES } from '../data/capabilities';
import { Database, Workflow, ShieldAlert, LayoutDashboard, Check, Terminal, Cpu, ArrowRight } from 'lucide-react';

interface CapabilitiesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({ onSelectService }) => {
  const [selectedCapId, setSelectedCapId] = useState<string>(TECHNICAL_CAPABILITIES[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'grounded-rag':
        return Database;
      case 'automated-pipelines':
        return Workflow;
      case 'ner-guardrails':
        return ShieldAlert;
      case 'governance-portals':
        return LayoutDashboard;
      default:
        return Cpu;
    }
  };

  const activeCapability = TECHNICAL_CAPABILITIES.find((c) => c.id === selectedCapId) || TECHNICAL_CAPABILITIES[0];
  const ActiveIcon = getIcon(activeCapability.id);

  return (
    <section className="py-20 bg-[#070707] relative" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-1.5 font-bold">
              ENGINEERED CAPABILITIES // 4 PILLARS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              Sovereign Systems &amp; Backend Pipelines
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#A3A3A3] bg-[#121212] px-3 py-1.5 rounded border border-[#262626]">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse"></div>
            <span>UK Sovereign Enclave Architecture</span>
          </div>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {TECHNICAL_CAPABILITIES.map((cap) => {
            const Icon = getIcon(cap.id);
            const isSelected = selectedCapId === cap.id;

            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCapId(cap.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181818] border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                    : 'bg-[#121212] border border-[#262626] hover:border-[#D4AF37]/40 hover:bg-[#161616]'
                }`}
                id={`capability-card-${cap.id}`}
              >
                <div>
                  {/* Indicator Dot & Number */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-6 h-6 bg-[#D4AF37]/10 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    </div>
                    <span className="font-mono text-[10px] text-[#A3A3A3] uppercase">
                      {cap.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#F5F5F5] mb-1.5 leading-snug">
                    {cap.title}
                  </h3>

                  <p className="text-[#A3A3A3] text-xs leading-relaxed mb-4 line-clamp-3">
                    {cap.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#D4AF37]">
                  <span>{isSelected ? 'ACTIVE BLUEPRINT' : 'INSPECT SPECS'}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Inspection Console */}
        <div className="bg-[#121212] border border-[#262626] rounded-xl p-5 sm:p-7 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Blueprint Details (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center">
                  <ActiveIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold">
                    Pillar {activeCapability.number} • Technical Specification
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                    {activeCapability.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                {activeCapability.description}
              </p>

              {/* Enclave Spec Callout */}
              <div className="p-3 rounded bg-[#070707] border border-[#262626] flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs text-[#CCCCCC]">
                  <strong className="text-[#F5F5F5] font-mono text-[11px]">Enclave Spec: </strong>
                  {activeCapability.enclaveSpec}
                </div>
              </div>

              {/* Core Deliverables */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-[#CCCCCC] uppercase tracking-wider font-semibold">
                  Production Engineering Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCapability.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#E0E0E0]">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectService(activeCapability.title)}
                  className="bg-[#D4AF37] text-black px-4 py-2 rounded-sm font-bold text-[10px] uppercase tracking-wider hover:bg-[#E5C158] shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Scope This Capability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Code Snippet & Metrics (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2">
                {activeCapability.coreMetrics.map((metric, i) => (
                  <div key={i} className="p-3 rounded bg-[#181818] border border-[#262626]">
                    <div className="text-[9px] font-mono text-[#8C8C8C] uppercase">{metric.label}</div>
                    <div className="text-base font-bold font-mono text-[#D4AF37] mt-0.5">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Code Snippet Box */}
              {activeCapability.codeSnippet && (
                <div className="rounded-lg bg-[#070707] border border-[#262626] overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#181818] border-b border-[#262626] text-xs font-mono text-[#A3A3A3]">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-[#D4AF37]" />
                      <span className="text-[10px] text-[#F5F5F5] font-semibold">{activeCapability.codeSnippet.filename}</span>
                    </div>
                    <span className="text-[9px] uppercase text-[#D4AF37] font-bold">
                      {activeCapability.codeSnippet.language}
                    </span>
                  </div>
                  <pre className="p-3.5 text-[10px] font-mono text-[#D1D5DB] overflow-x-auto leading-relaxed max-h-56">
                    <code>{activeCapability.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5">
                {activeCapability.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#070707] text-[#A3A3A3] border border-[#262626]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
