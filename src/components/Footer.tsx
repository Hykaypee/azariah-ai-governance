import React from 'react';
import { Shield, Lock, FileCheck, ExternalLink, ArrowUp, Mail } from 'lucide-react';
import { LIVE_INTAKE_URL } from '../types';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1C1C1C] text-[#8C8C8C] pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#1A1A1A]">
          
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#8C6D1F] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#070707] rounded-[5px] flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
              </div>
              <span className="font-brand font-bold text-base tracking-widest text-[#F5F5F5] uppercase">
                AZARIAH <span className="text-[#D4AF37]">CONSULT</span>
              </span>
            </div>

            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-sm">
              Elite Technical Systems Architecture, Backend Automation &amp; AI Statutory Assurance practice. We engineer sovereign RAG pipelines, runtime NER guardrails, and Target Operating Models for UK Central Government, NHS Digital, and Regulated Enterprise.
            </p>

            <div className="text-[11px] font-mono text-[#D4AF37]">
              Azariah Consult is a specialized trading division of TAS Consult Ltd (TAS Signature Group).
            </div>
          </div>

          {/* Col 3: Statutory Frameworks */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#F5F5F5] uppercase tracking-wider">
              Statutory Assurance
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li className="hover:text-[#D4AF37] transition-colors">Cabinet Office ATRS Tier-2</li>
              <li className="hover:text-[#D4AF37] transition-colors">NHS DCB0129 Clinical Safety</li>
              <li className="hover:text-[#D4AF37] transition-colors">Caldicott Guardian Principles 1–8</li>
              <li className="hover:text-[#D4AF37] transition-colors">ISO/IEC 42001 (AIMS) TOM</li>
              <li className="hover:text-[#D4AF37] transition-colors">UK GDPR Article 9 Enclaves</li>
              <li className="hover:text-[#D4AF37] transition-colors">Algorithmic Impact Assessments (AIA)</li>
            </ul>
          </div>

          {/* Col 4: Technical Systems */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#F5F5F5] uppercase tracking-wider">
              Engineered Capabilities
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li className="hover:text-[#D4AF37] transition-colors">Sovereign RAG &amp; Cosine Gating</li>
              <li className="hover:text-[#D4AF37] transition-colors">Sub-50ms In-Flight NER Microservices</li>
              <li className="hover:text-[#D4AF37] transition-colors">Redis / BullMQ Pipeline Orchestration</li>
              <li className="hover:text-[#D4AF37] transition-colors">Google Apps Script Enterprise Integrations</li>
              <li className="hover:text-[#D4AF37] transition-colors">Live LLM-Ops Telemetry Monitors</li>
              <li className="hover:text-[#D4AF37] transition-colors">Air-Gapped UK Cloud Enclaves</li>
            </ul>
          </div>

          {/* Col 5: Practice Directives */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#F5F5F5] uppercase tracking-wider">
              Practice Inquiries
            </h4>
            <div className="space-y-2.5 text-[11px]">
              <div className="flex items-center gap-1.5 text-[#F5F5F5]">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href="mailto:admin@tassignature.com" className="hover:text-[#D4AF37] font-mono">
                  admin@tassignature.com
                </a>
              </div>
              <p className="text-[#8C8C8C] text-[11px]">
                Procurement &amp; G-Cloud Statements of Work available on direct request.
              </p>
              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={LIVE_INTAKE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#D4AF37] hover:text-[#070707] border border-[#262626] text-[11px] font-mono text-[#D4AF37] flex items-center justify-between transition-colors"
                >
                  <span>Live Intake Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={scrollToTop}
                  className="px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] border border-[#262626] text-[11px] font-mono text-[#8C8C8C] hover:text-[#F5F5F5] flex items-center justify-between transition-colors"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Institutional Compliance Marks */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#666666]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 Azariah Consult • TAS Consult Ltd</span>
            <span>•</span>
            <span className="text-[#8C8C8C]">Crown Commercial Service G-Cloud Aligned</span>
            <span>•</span>
            <span className="text-[#8C8C8C]">FIPS 140-3 Zero Data Retention</span>
          </div>

          <div className="flex items-center gap-3 text-[#8C8C8C]">
            <span>UK Sovereign Enclave (London / UK South)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
