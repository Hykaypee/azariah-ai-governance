import React, { useState, useMemo } from 'react';
import { ARSFactors } from '../types';
import { generateAuditPdf } from '../utils/generateAuditReport';
import {
  calculateARS,
  DATA_SENSITIVITY_OPTIONS,
  AUTONOMY_LEVEL_OPTIONS,
  IMPACT_RADIUS_OPTIONS,
} from '../utils/arsCalculator';
import {
  Sliders,
  FileDown,
  Copy,
  Check,
  Cpu,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

interface RiskCalculatorProps {
  onTransferToScoping?: (arsPayload: any) => void;
}

export const RiskCalculator: React.FC<RiskCalculatorProps> = ({
  onTransferToScoping,
}) => {
  const [factors, setFactors] = useState<ARSFactors>({
    dataSensitivity: 4,
    autonomyLevel: 3,
    impactRadius: 3,
  });

  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const evaluation = useMemo(() => calculateARS(factors), [factors]);

  const fullJsonPayload = useMemo(() => {
    return {
      auditMetadata: {
        timestamp: new Date().toISOString(),
        engineVersion: '1.4.0-Enterprise',
        evaluationModel: 'ARS-Statutory-MultiFactor',
      },
      inputFactors: factors,
      evaluationResult: evaluation,
      statutoryEnforcement: {
        jurisdiction: 'United Kingdom / NHS Digital / CDDO ATRS Tier-2',
        mandatoryControls: evaluation.statutoryFlags,
      },
    };
  }, [factors, evaluation]);

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(fullJsonPayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(fullJsonPayload, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ARS-Statutory-Audit-${evaluation.tier.replace(/\s+/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  const handleExportPDF = () => {
    generateAuditPdf({
      auditId: `AC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      timestamp:
        new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
      dataSensitivityLevel: factors.dataSensitivity,
      dataSensitivityLabel: `Level ${factors.dataSensitivity}: Sovereign Processing`,
      autonomyLevel: factors.autonomyLevel,
      autonomyLabel: `Level ${factors.autonomyLevel}: Oversight Classification`,
      impactRadiusLevel: factors.impactRadius,
      impactRadiusLabel: `Level ${factors.impactRadius}: Statutory Blast Radius`,
      arsScore: evaluation.score,
      tierBadge: evaluation.tier,
      tierDescription: evaluation.remediationPlan,
      statutoryRequirements: evaluation.statutoryFlags,
      deploymentTopology:
        'Sovereign Air-Gapped UK Enclave (HSCN/PSN peered with Hardware-level TEE Enclaves)',
      recommendedActions: [
        'Execute sub-50ms hardware-isolated NER token redaction buffer before foundational LLM inference.',
        'Isolate enterprise vector DB to sovereign boundaries with deterministic schema validation gates.',
      ],
    });
  };

  return (
    <section
      className="py-20 bg-[#070707] border-t border-[#262626] relative"
      id="risk-engine"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#04AF37]/30 bg-[#04AF37]/10 text-[#04AF37] text-xs font-mono mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>ALGORITHMIC RISK SCORING (ARS) ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Deterministic Statutory Risk Calculator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a3a3a3]">
            Score enterprise autonomous systems under UK GDPR Article 9, NHS
            DCB0129, ATRS Tier-2, and ISO 42001.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* SLIDERS COLUMN */}
          <div className="lg:col-span-7 space-y-6 bg-[#0f0f0f] border border-[#262626] rounded-xl p-6">
            {/* Factor 1: Data Sensitivity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">
                  1. Data Sensitivity Index
                </label>
                <span className="text-xs font-mono text-[#04AF37] bg-[#04AF37]/10 px-2 py-0.5 rounded border border-[#04AF37]/30">
                  Level {factors.dataSensitivity} / 4
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={factors.dataSensitivity}
                onChange={(e) =>
                  setFactors({
                    ...factors,
                    dataSensitivity: Number(e.target.value),
                  })
                }
                className="w-full h-2 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#04AF37]"
              />
              <p className="text-xs text-[#a3a3a3] mt-2">
                {DATA_SENSITIVITY_OPTIONS[factors.dataSensitivity - 1]?.label ||
                  'Special category data, NHS PID, biometric identifiers, or cross-border restricted records.'}
              </p>
            </div>

            {/* Factor 2: Autonomy Level */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">
                  2. System Autonomy & Oversight
                </label>
                <span className="text-xs font-mono text-[#04AF37] bg-[#04AF37]/10 px-2 py-0.5 rounded border border-[#04AF37]/30">
                  Level {factors.autonomyLevel} / 4
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={factors.autonomyLevel}
                onChange={(e) =>
                  setFactors({
                    ...factors,
                    autonomyLevel: Number(e.target.value),
                  })
                }
                className="w-full h-2 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#04AF37]"
              />
              <p className="text-xs text-[#a3a3a3] mt-2">
                {AUTONOMY_LEVEL_OPTIONS[factors.autonomyLevel - 1]?.label ||
                  'Fully automated agent execution with zero deterministic human-in-the-loop validation.'}
              </p>
            </div>

            {/* Factor 3: Impact Radius */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">
                  3. Blast Radius / Societal Impact
                </label>
                <span className="text-xs font-mono text-[#04AF37] bg-[#04AF37]/10 px-2 py-0.5 rounded border border-[#04AF37]/30">
                  Level {factors.impactRadius} / 4
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={factors.impactRadius}
                onChange={(e) =>
                  setFactors({
                    ...factors,
                    impactRadius: Number(e.target.value),
                  })
                }
                className="w-full h-2 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#04AF37]"
              />
              <p className="text-xs text-[#a3a3a3] mt-2">
                {IMPACT_RADIUS_OPTIONS[factors.impactRadius - 1]?.label ||
                  'High clinical or legal exposure impacting public safety, statutory compliance, or financial assets.'}
              </p>
            </div>
          </div>

          {/* AUDIT SUMMARY COLUMN */}
          <div className="lg:col-span-5 bg-[#121212] border-2 border-[#04AF37]/30 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#262626] pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#737373] block">
                    STATUTORY ASSURANCE LEVEL
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {evaluation.tier}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-[#737373] block">
                    ARS SCORE
                  </span>
                  <span className="text-2xl font-black text-[#04AF37]">
                    {evaluation.score}
                    <span className="text-xs text-[#737373] font-normal">
                      {' '}
                      / 32
                    </span>
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-xs text-[#a3a3a3]">
                  <strong className="text-white">Remediation Plan: </strong>
                  {evaluation.remediationPlan}
                </div>

                <div>
                  <span className="text-[11px] font-bold text-white block mb-1.5 uppercase tracking-wide">
                    Mandatory Statutory Controls:
                  </span>
                  <ul className="space-y-1.5">
                    {evaluation.statutoryFlags.map((flag, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-[#d4d4d4] flex items-start gap-2"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-[#04AF37] shrink-0 mt-0.5" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ACTION BAR */}
            <div className="space-y-3 pt-4 border-t border-[#262626]">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyJSON}
                  className="flex-1 bg-[#070707] border border-[#262626] hover:border-[#04AF37] text-[10px] font-bold text-white px-3 py-2 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3 text-[#a3a3a3]" />
                  )}
                  <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadJSON}
                  className="flex-1 bg-[#070707] border border-[#262626] hover:border-[#04AF37] text-[10px] font-bold text-white px-3 py-2 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {downloaded ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <FileDown className="w-3 h-3 text-[#a3a3a3]" />
                  )}
                  <span>{downloaded ? 'Exported' : 'Export JSON'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleExportPDF}
                  className="flex-1 bg-[#070707] border border-[#04AF37]/50 hover:border-[#04AF37] text-[10px] font-bold text-[#04AF37] px-3 py-2 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#04AF37]" />
                  <span>Export PDF</span>
                </button>
              </div>

              {onTransferToScoping && (
                <button
                  type="button"
                  onClick={() => onTransferToScoping(fullJsonPayload)}
                  className="w-full bg-[#04AF37] hover:bg-[#038e2c] text-black font-bold py-2.5 text-[10px] rounded uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Transfer ARS Payload to Scoping Intake</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};