import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-[#EDEDED] pt-24 pb-20 px-6 sm:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#121212] border border-[#262626] px-4 py-1.5 text-xs tracking-wider uppercase text-zinc-400 mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          UK Sovereign Technical Systems & AI Assurance | TAS Consult Ltd
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#EDEDED] max-w-4xl leading-[1.15] mb-6">
          Enterprise AI Governance & Security at{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
            Production Velocity.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed mb-10">
          We do not just draft policies: we engineer deterministic RAG architectures,
          in-flight NER guardrails, automated data pipelines, and Target Operating Models
          satisfying CDDO ATRS, NHS DCB0129, and ISO 42001.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#intake"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold px-7 py-3.5 text-sm transition-colors shadow-lg shadow-amber-400/20"
          >
            Launch Risk Engine
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] text-zinc-300 border border-[#262626] px-7 py-3.5 text-sm transition-colors"
          >
            Review Assurance Tiers
          </a>
        </div>

        {/* Telemetry Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-[#1F1F1F]">
          <div className="flex flex-col items-center p-3 rounded-lg bg-[#111111] border border-[#1E1E1E]">
            <ShieldCheck className="h-5 w-5 text-amber-400 mb-1" />
            <span className="text-xs font-semibold text-zinc-200">ISO 42001</span>
            <span className="text-[11px] text-zinc-500">Statutory Assurance</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-[#111111] border border-[#1E1E1E]">
            <Activity className="h-5 w-5 text-amber-400 mb-1" />
            <span className="text-xs font-semibold text-zinc-200">NIST AI RMF</span>
            <span className="text-[11px] text-zinc-500">Risk Profiling</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-[#111111] border border-[#1E1E1E]">
            <Lock className="h-5 w-5 text-amber-400 mb-1" />
            <span className="text-xs font-semibold text-zinc-200">CDDO ATRS</span>
            <span className="text-[11px] text-zinc-500">Sovereign Data Boundary</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-[#111111] border border-[#1E1E1E]">
            <ShieldCheck className="h-5 w-5 text-amber-400 mb-1" />
            <span className="text-xs font-semibold text-zinc-200">NHS DCB0129</span>
            <span className="text-[11px] text-zinc-500">Clinical Safety TOM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
