import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { Landmark, Building2, HeartPulse, ShieldCheck, CheckCircle, Cpu, ArrowRight, Quote, TrendingUp } from 'lucide-react';

interface CaseStudyExplorerProps {
  onSelectService: (title: string) => void;
}

export const CaseStudyExplorer: React.FC<CaseStudyExplorerProps> = ({ onSelectService }) => {
  const [activeTabId, setActiveTabId] = useState<string>(CASE_STUDIES[0].id);

  const getTabIcon = (sector: string) => {
    switch (sector) {
      case 'Central Government':
        return Landmark;
      case 'Regulated Enterprise':
        return Building2;
      case 'NHS & Healthcare':
        return HeartPulse;
      default:
        return Landmark;
    }
  };

  const activeStudy = CASE_STUDIES.find((s) => s.id === activeTabId) || CASE_STUDIES[0];
  const ActiveIcon = getTabIcon(activeStudy.sector);

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C]" id="blueprints">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-3">
            Institutional Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] tracking-tight font-sans">
            Sector Case Study Blueprints
          </h2>
          <p className="text-[#A3A3A3] text-base sm:text-lg mt-3 leading-relaxed">
            Examine our production deployments across UK Central Government, FTSE-100 Regulated Enterprise, and NHS Digital healthcare enclaves.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 bg-[#121212] border border-[#262626] rounded-2xl mb-8">
          {CASE_STUDIES.map((study) => {
            const Icon = getTabIcon(study.sector);
            const isActive = activeTabId === study.id;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTabId(study.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex-1 min-w-[200px] justify-center ${
                  isActive
                    ? 'bg-[#1F1F1F] text-[#F5F5F5] border border-[#D4AF37]/50 shadow-md shadow-[#D4AF37]/10'
                    : 'text-[#8C8C8C] hover:text-[#E5E5E5] hover:bg-[#161616]'
                }`}
                id={`case-study-tab-${study.id}`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-[#666666]'}`} />
                <span className="truncate">{study.sectorBadge}</span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Case Study Content Card */}
        <div className="bg-[#121212] border border-[#262626] rounded-2xl p-6 lg:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Narrative Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-2 uppercase tracking-wider">
                  <ActiveIcon className="w-4 h-4" />
                  <span>{activeStudy.sector} Blueprint</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] leading-tight">
                  {activeStudy.title}
                </h3>
              </div>

              {/* Context & Problem */}
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#A3A3A3]">
                <div className="p-3.5 rounded-xl bg-[#181818] border border-[#222222]">
                  <strong className="text-[#F5F5F5] font-mono uppercase text-[11px] block mb-1">Client Profile &amp; Challenge:</strong>
                  <p>{activeStudy.problemStatement}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#181818] border border-[#222222]">
                  <strong className="text-[#D4AF37] font-mono uppercase text-[11px] block mb-1">Engineered Technical Solution:</strong>
                  <p className="text-[#CCCCCC]">{activeStudy.engineeredSolution}</p>
                </div>
              </div>

              {/* Architecture Highlights */}
              <div>
                <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-semibold mb-3">
                  Technical Architecture Highlights:
                </h4>
                <div className="space-y-2">
                  {activeStudy.architectureHighlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E5E5E5]">
                      <div className="w-4 h-4 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/20">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Clearance List */}
              <div>
                <h4 className="text-xs font-mono text-[#8C8C8C] uppercase tracking-wider font-semibold mb-2.5">
                  Statutory Accreditations Cleared:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.statutoryCleared.map((stat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#0F0F0F] text-xs font-mono text-[#E5C158] border border-[#D4AF37]/30 flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                      <span>{stat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Enclave Topology Footer */}
              <div className="pt-2 text-xs font-mono text-[#8C8C8C] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#D4AF37]" />
                <span>Enclave: <strong className="text-[#F5F5F5]">{activeStudy.techEnclave}</strong></span>
              </div>
            </div>

            {/* Right Metrics & Testimonial Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quantified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {activeStudy.metrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#181818] border border-[#262626] relative overflow-hidden">
                    <div className="text-[10px] font-mono text-[#8C8C8C] uppercase">{metric.label}</div>
                    <div className="text-2xl font-bold font-mono text-[#F5F5F5] mt-1">{metric.value}</div>
                    <div className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 mt-1 font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      <span>{metric.delta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Executive Takeaway Quote */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#181818] to-[#121212] border border-[#D4AF37]/30 relative shadow-lg">
                <Quote className="w-6 h-6 text-[#D4AF37]/40 mb-2" />
                <p className="text-xs sm:text-sm text-[#F5F5F5] italic leading-relaxed">
                  {activeStudy.quoteOrTakeaway}
                </p>
                <div className="mt-3 pt-3 border-t border-[#262626] text-[11px] font-mono text-[#D4AF37] uppercase">
                  Production Deployment Milestone — Cleared for Scale
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onSelectService(`${activeStudy.sector} Blueprint Architecture`)}
                className="w-full py-3 rounded-xl bg-[#1E1E1E] hover:bg-[#D4AF37] text-[#F5F5F5] hover:text-[#070707] border border-[#333] hover:border-[#D4AF37] text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <span>Request Similar Enclave Architecture Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
