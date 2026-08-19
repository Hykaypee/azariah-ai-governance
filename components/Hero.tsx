import React from 'react';
import { Shield, ArrowRight, Activity, Terminal, Lock, CheckCircle2, Server, Cpu, Database, ExternalLink } from 'lucide-react';
import { LIVE_INTAKE_URL } from '../types';

interface HeroProps {
  onOpenDiscovery?: () => void;
  onLaunchCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery, onLaunchCalculator }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070707]">
      {/* Background Architectural Mesh & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/3 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"></div>
      
      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Executive Security Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#262626] shadow-sm mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase">
              UK Sovereign Technical Systems &amp; AI Assurance
            </span>
            <span className="text-[#3A3A3A]">|</span>
            <span className="text-xs font-mono text-[#A3A3A3]">
              TAS Consult Ltd
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F5] font-sans leading-[1.1] mb-6">
            Safe AI &amp; Sovereign Automations at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24]">
              Production Velocity.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-[#A3A3A3] font-normal leading-relaxed max-w-3xl mb-10">
            We do not just draft policies—we engineer deterministic RAG architectures, in-flight NER guardrails, automated data pipelines, and Target Operating Models (TOM) that satisfy{' '}
            <span className="text-[#F5F5F5] font-medium underline decoration-[#D4AF37]/50 underline-offset-4">CDDO ATRS</span>,{' '}
            <span className="text-[#F5F5F5] font-medium underline decoration-[#D4AF37]/50 underline-offset-4">NHS DCB0129</span>, and{' '}
            <span className="text-[#F5F5F5] font-medium underline decoration-[#D4AF37]/50 underline-offset-4">ISO 42001</span>.
          </p>

          {/* Primary Call-to-Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
            <button
              onClick={onLaunchCalculator}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5C158] hover:to-[#C69E2E] text-[#070707] font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 flex items-center justify-center gap-2.5 group cursor-pointer"
              id="hero-launch-calculator-btn"
            >
              <Activity className="w-4 h-4 text-[#070707] group-hover:rotate-12 transition-transform" />
              <span>Launch 4-Tier Risk Calculator</span>
              <ArrowRight className="w-4 h-4 text-[#070707] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={LIVE_INTAKE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#121212] hover:bg-[#181818] border border-[#262626] hover:border-[#D4AF37]/60 text-[#F5F5F5] font-semibold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-book-discovery-btn"
            >
              <Terminal className="w-4 h-4 text-[#D4AF37]" />
              <span>Book Technical Discovery Call</span>
            </a>
          </div>

          {/* Interactive Enclave Telemetry Live Bar */}
          <div className="w-full max-w-4xl p-4 rounded-2xl bg-[#121212]/90 border border-[#262626] backdrop-blur-md shadow-2xl text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-[#222222] text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="font-mono text-[#D4AF37] font-semibold uppercase tracking-wider">
                  Live Sovereign Enclave Gateway
                </span>
                <span className="text-[#666666] font-mono">[Region: UK South / London]</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-[#A3A3A3]">
                <span>Inference Latency: <strong className="text-emerald-400 font-bold">38ms P95</strong></span>
                <span className="hidden sm:inline">NER Redaction: <strong className="text-emerald-400 font-bold">100% Active</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded-lg bg-[#181818] border border-[#222222] flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#222222] text-[#D4AF37]">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8C8C8C] uppercase">Data Isolation</div>
                  <div className="text-xs font-bold text-[#F5F5F5]">FIPS 140-3 Zero Data Retention</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#181818] border border-[#222222] flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#222222] text-[#D4AF37]">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8C8C8C] uppercase">Retrieval Gate</div>
                  <div className="text-xs font-bold text-[#F5F5F5]">≥ 0.88 Cosine Threshold</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#181818] border border-[#222222] flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#222222] text-[#D4AF37]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8C8C8C] uppercase">In-Flight NER</div>
                  <div className="text-xs font-bold text-[#F5F5F5]">Sub-50ms NINO / PHI Scrub</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#181818] border border-[#222222] flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#222222] text-[#D4AF37]">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#8C8C8C] uppercase">Statutory Standard</div>
                  <div className="text-xs font-bold text-[#F5F5F5]">ATRS Tier-2 &amp; DCB0129</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
