import React from 'react';
import { PRICING_TIERS } from '../data/pricing';
import { Check, ShieldCheck, ArrowRight, Zap, Award, Clock, FileText, ExternalLink } from 'lucide-react';
import { LIVE_INTAKE_URL } from '../types';

interface PricingSectionProps {
  onSelectTier: (tierTitle: string, price: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  return (
    <section className="py-24 bg-[#070707] border-t border-[#1C1C1C]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-3">
            Fixed-Scope Commercial Engagements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] tracking-tight font-sans">
            Commercial Service Tiers
          </h2>
          <p className="text-[#A3A3A3] text-base sm:text-lg mt-3 leading-relaxed">
            Transparent, milestone-driven investment schedules designed for institutional procurement, G-Cloud alignment, and rapid enterprise sign-off.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#141414] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/15 lg:-translate-y-2'
                    : 'bg-[#101010] border border-[#262626] hover:border-[#383838]'
                }`}
                id={`pricing-tier-${tier.id}`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-[#070707] text-[11px] font-bold uppercase tracking-wider shadow-md">
                    {tier.badge || 'Most Comprehensive'}
                  </div>
                )}

                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                      {tier.tierNumber}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#8C8C8C]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tier.timeframe}</span>
                    </div>
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2 leading-snug">
                    {tier.title}
                  </h3>

                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-[#F5F5F5] text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#E5C158] to-[#D4AF37]">
                      {tier.priceRange}
                    </span>
                  </div>

                  <p className="text-xs text-[#A3A3A3] leading-relaxed mb-6 pb-5 border-b border-[#222222]">
                    {tier.serviceScope}
                  </p>

                  {/* Ideal For */}
                  <div className="mb-6 p-3 rounded-xl bg-[#181818] border border-[#222222] text-xs">
                    <div className="text-[10px] font-mono text-[#D4AF37] uppercase font-semibold mb-1">
                      Ideal For:
                    </div>
                    <div className="text-[#CCCCCC]">{tier.idealFor}</div>
                  </div>

                  {/* Deliverables List */}
                  <div className="mb-6">
                    <div className="text-xs font-mono text-[#F5F5F5] uppercase tracking-wider font-semibold mb-3">
                      Key Engineering Deliverables:
                    </div>
                    <div className="space-y-2.5">
                      {tier.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#E0E0E0]">
                          <div className="w-4 h-4 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/20">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Statutory Artifacts */}
                  <div className="mb-8">
                    <div className="text-xs font-mono text-[#8C8C8C] uppercase tracking-wider font-semibold mb-2">
                      Statutory Artifacts Cleared:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.statutoryArtifacts.map((art, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#181818] text-[10px] font-mono text-[#A3A3A3] border border-[#262626] flex items-center gap-1"
                        >
                          <FileText className="w-2.5 h-2.5 text-[#D4AF37]" />
                          <span>{art}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scope Tier Action & SOW proposal */}
                <div className="space-y-2">
                  <a
                    href={LIVE_INTAKE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5C158] hover:to-[#C69E2E] text-[#070707] shadow-lg shadow-[#D4AF37]/20'
                        : 'bg-[#181818] hover:bg-[#D4AF37] text-[#F5F5F5] hover:text-[#070707] border border-[#2E2E2E] hover:border-[#D4AF37]'
                    }`}
                  >
                    <span>Request SOW Proposal ({tier.tierNumber})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onSelectTier(tier.title, tier.priceRange)}
                    className="w-full py-2 text-[11px] font-mono text-[#8C8C8C] hover:text-[#D4AF37] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Or configure in Custom Intake</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Enterprise Retainer Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121212] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-[#181818] text-[#D4AF37] border border-[#262626] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F5F5F5]">Bespoke Government &amp; Multi-Tenant Sovereign Enclaves</h4>
              <p className="text-xs text-[#8C8C8C] mt-0.5">Need a custom tender response, Crown Commercial G-Cloud Statement of Work, or Caldicott Guardian audit?</p>
            </div>
          </div>

          <a
            href={LIVE_INTAKE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#070707] font-bold text-xs transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
          >
            <span>Request SOW Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
