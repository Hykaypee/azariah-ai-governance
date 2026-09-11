import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage?: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const packages = [
    {
      name: 'The Solomon Audit',
      tagline: 'Rapid Diagnostic & Regulatory Scoping',
      price: '£750 – £1,500',
      period: 'one-off engagement',
      featured: false,
      deliverables: [
        'Full baseline risk assessment & posture review',
        'Regulatory gap analysis (ISO 27001 / Cyber Essentials / AI)',
        'Statutory ARS remediation roadmap',
        'Executive board summary report'
      ],
      ctaText: 'Book Solomon Audit'
    },
    {
      name: 'Daniel Defence Framework',
      tagline: 'Core Governance & Documentation Build',
      price: '£2,500 – £5,000',
      period: 'project delivery',
      featured: true,
      deliverables: [
        'Complete ISO 27001 / AIMS documentation pack',
        'Data Protection Impact Assessments (DPIAs)',
        'Enterprise Risk Registers & Treatment Plans',
        'Vendor risk management pack & scoring sheets'
      ],
      ctaText: 'Deploy Daniel Defence'
    },
    {
      name: 'Dominion Compliance Sprint',
      tagline: 'End-to-End Certification & Assurance',
      price: '£5,000 – £12,000',
      period: 'full implementation',
      featured: false,
      deliverables: [
        'Full ISMS / AI governance rollout & technical alignment',
        'NHS DCB0129 Hazard Log & Safety Case engineering',
        'Sub-50ms token redaction & enclave guardrail spec',
        'External certification audit representation & support'
      ],
      ctaText: 'Commission Sprint'
    },
    {
      name: 'Zion Retainer',
      tagline: 'Continuous Oversight & Advisory',
      price: '£500 – £1,500',
      period: 'per month',
      featured: false,
      deliverables: [
        'Monthly risk register & posture updates',
        'Continuous compliance & third-party vendor reviews',
        'Algorithmic drift & statutory telemetry monitoring',
        'Dedicated advisory & executive leadership sessions'
      ],
      ctaText: 'Retain Governance'
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-[#1f1f1f] text-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] block mb-2">
            ENGAGEMENT TIERS & PRICE ANCHORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Predictable Governance Engagements. Zero Surprises.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a3a3a3]">
            From fixed-fee gap audits to comprehensive governance builds and ongoing assurance retainers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                pkg.featured
                  ? 'bg-[#121212] border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10'
                  : 'bg-[#0e0e0e] border border-[#262626] hover:border-[#3d3d3d]'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#050505] font-mono text-[10px] font-bold uppercase tracking-wider py-0.5 px-3 rounded-full">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-xs text-[#a3a3a3] mb-4 min-h-[32px]">{pkg.tagline}</p>
                
                <div className="mb-6 pb-6 border-b border-[#1f1f1f]">
                  <div className="text-2xl font-extrabold text-[#D4AF37]">{pkg.price}</div>
                  <div className="text-[11px] font-mono text-[#737373] mt-0.5">{pkg.period}</div>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-mono uppercase text-[#737373] tracking-wider block mb-2">
                    Scope of Work:
                  </span>
                  {pkg.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#d4d4d4]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPackage ? onSelectPackage(pkg.name) : (window.location.href = '#scoping')}
                className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.featured
                    ? 'bg-[#D4AF37] hover:bg-[#b8952b] text-[#050505]'
                    : 'bg-[#1a1a1a] hover:bg-[#262626] text-white border border-[#2d2d2d] hover:border-[#D4AF37]'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
