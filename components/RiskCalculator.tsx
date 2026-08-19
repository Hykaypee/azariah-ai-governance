import React, { useState, useMemo } from 'react';
import { ARSFactors } from '../types';
import {
  calculateARS,
  DATA_SENSITIVITY_OPTIONS,
  AUTONOMY_LEVEL_OPTIONS,
  IMPACT_RADIUS_OPTIONS
} from '../utils/arsCalculator';
import {
  Sliders,
  FileDown,
  Copy,
  Check,
  Cpu,
  FileCheck,
  ArrowRight
} from 'lucide-react';

interface RiskCalculatorProps {
  onTransferToScoping: (arsPayload: any) => void;
}

export const RiskCalculator: React.FC<RiskCalculatorProps> = ({ onTransferToScoping }) => {
  const [factors, setFactors] = useState<ARSFactors>({
    dataSensitivity: 4,
    autonomyLevel: 3,
    impactRadius: 4
  });

  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const evaluation = useMemo(() => calculateARS(factors), [factors]);

  // Generate full JSON payload for audit export
  const fullJsonPayload = useMemo(() => {
    return {
      metadata: {
        engine: 'Azariah Consult Algorithmic Risk Scoring (ARS) Engine v3.2',
        assessmentDate: new Date().toISOString(),
        classification: 'OFFICIAL-SENSITIVE-COMMERCIAL',
        division: 'TAS Consult Ltd — AI Statutory Assurance Practice'
      },
      factors: {
        dataSensitivity: {
          level: factors.dataSensitivity,
          label: DATA_SENSITIVITY_OPTIONS.find((o) => o.value === factors.dataSensitivity)?.label
        },
        autonomyLevel: {
          level: factors.autonomyLevel,
          label: AUTONOMY_LEVEL_OPTIONS.find((o) => o.value === factors.autonomyLevel)?.label
        },
        impactRadius: {
          level: factors.impactRadius,
          label: IMPACT_RADIUS_OPTIONS.find((o) => o.value === factors.impactRadius)?.label
        }
      },
      mathematicalOutput: {
        formula: 'ARS = D × (A + I)',
        calculation: `${factors.dataSensitivity} × (${factors.autonomyLevel} + ${factors.impactRadius})`,
        score: evaluation.score,
        maxScore: 32,
        assignedTier: evaluation.tier,
        tierLabel: evaluation.tierLabel
      },
      statutoryMandate: {
        statutorySummary: evaluation.statutorySummary,
        regulatoryReferences: evaluation.regulatoryReferences,
        recommendedEnclave: evaluation.recommendedModelApproach,
        mandatoryDeliverables: evaluation.deliverables,
        technicalSafeguards: evaluation.technicalSafeguards
      }
    };
  }, [factors, evaluation]);

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(fullJsonPayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(fullJsonPayload, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AZARIAH_ARS_ASSESSMENT_TIER_${evaluation.tier.replace(' ', '_')}_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <section className="py-20 bg-[#070707] border-t border-[#262626] relative" id="risk-engine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-1.5 font-bold">
              ASSURANCE ALGORITHM // ARS MATRIX
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              4-Tier Algorithmic Risk Engine
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#A3A3A3] bg-[#121212] border border-[#262626] px-3 py-1.5 rounded">
            <span className="text-[#D4AF37] font-bold">FORMULA:</span>
            <span>ARS = Data (1-4) × [Autonomy (1-4) + Radius (1-4)]</span>
          </div>
        </div>

        {/* Sleek Interface ARS Container */}
        <div className="bg-[#121212] border-2 border-[#D4AF37]/20 rounded-xl p-5 sm:p-8 relative shadow-2xl">
          
          {/* Top Status Telemetry Badge */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#262626]">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37] font-mono font-bold text-sm">[04]</span>
              <span className="text-sm font-bold text-[#F5F5F5] uppercase tracking-wider">
                System Risk Factor Calibration
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#A3A3A3] font-mono uppercase">Engine V3.2 // ACTIVE</span>
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sliders Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Factor 1: Data Sensitivity */}
              <div>
                <div className="flex justify-between text-[11px] uppercase font-bold mb-1.5">
                  <label className="text-[#CCCCCC] flex items-center gap-1.5">
                    <span className="text-[#D4AF37] font-mono">[D]</span>
                    <span>Data Sensitivity</span>
                  </label>
                  <span className="text-[#D4AF37] font-mono">
                    {factors.dataSensitivity} - {DATA_SENSITIVITY_OPTIONS.find(o => o.value === factors.dataSensitivity)?.label.split(':')[1]?.trim()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={factors.dataSensitivity}
                  onChange={(e) => setFactors({ ...factors, dataSensitivity: parseInt(e.target.value) })}
                  className="w-full accent-[#D4AF37] h-1 bg-[#262626] rounded-full appearance-none cursor-pointer mb-2"
                />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2">
                  {DATA_SENSITIVITY_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFactors({ ...factors, dataSensitivity: opt.value })}
                      className={`text-left p-2 rounded border text-[10px] transition-all cursor-pointer ${
                        factors.dataSensitivity === opt.value
                          ? 'bg-[#181818] border-[#D4AF37] text-[#D4AF37] font-bold'
                          : 'bg-[#070707] border-[#262626] text-[#8C8C8C] hover:border-[#383838]'
                      }`}
                    >
                      <div className="truncate font-mono">L{opt.value}: {opt.label.split(':')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Factor 2: Autonomy Level */}
              <div className="pt-4 border-t border-[#1C1C1C]">
                <div className="flex justify-between text-[11px] uppercase font-bold mb-1.5">
                  <label className="text-[#CCCCCC] flex items-center gap-1.5">
                    <span className="text-[#D4AF37] font-mono">[A]</span>
                    <span>Autonomy Level</span>
                  </label>
                  <span className="text-[#D4AF37] font-mono">
                    {factors.autonomyLevel} - {AUTONOMY_LEVEL_OPTIONS.find(o => o.value === factors.autonomyLevel)?.label.split(':')[1]?.trim()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={factors.autonomyLevel}
                  onChange={(e) => setFactors({ ...factors, autonomyLevel: parseInt(e.target.value) })}
                  className="w-full accent-[#D4AF37] h-1 bg-[#262626] rounded-full appearance-none cursor-pointer mb-2"
                />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2">
                  {AUTONOMY_LEVEL_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFactors({ ...factors, autonomyLevel: opt.value })}
                      className={`text-left p-2 rounded border text-[10px] transition-all cursor-pointer ${
                        factors.autonomyLevel === opt.value
                          ? 'bg-[#181818] border-[#D4AF37] text-[#D4AF37] font-bold'
                          : 'bg-[#070707] border-[#262626] text-[#8C8C8C] hover:border-[#383838]'
                      }`}
                    >
                      <div className="truncate font-mono">L{opt.value}: {opt.label.split(':')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Factor 3: Impact Radius */}
              <div className="pt-4 border-t border-[#1C1C1C]">
                <div className="flex justify-between text-[11px] uppercase font-bold mb-1.5">
                  <label className="text-[#CCCCCC] flex items-center gap-1.5">
                    <span className="text-[#D4AF37] font-mono">[I]</span>
                    <span>Impact Radius</span>
                  </label>
                  <span className="text-[#D4AF37] font-mono">
                    {factors.impactRadius} - {IMPACT_RADIUS_OPTIONS.find(o => o.value === factors.impactRadius)?.label.split(':')[1]?.trim()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={factors.impactRadius}
                  onChange={(e) => setFactors({ ...factors, impactRadius: parseInt(e.target.value) })}
                  className="w-full accent-[#D4AF37] h-1 bg-[#262626] rounded-full appearance-none cursor-pointer mb-2"
                />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2">
                  {IMPACT_RADIUS_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFactors({ ...factors, impactRadius: opt.value })}
                      className={`text-left p-2 rounded border text-[10px] transition-all cursor-pointer ${
                        factors.impactRadius === opt.value
                          ? 'bg-[#181818] border-[#D4AF37] text-[#D4AF37] font-bold'
                          : 'bg-[#070707] border-[#262626] text-[#8C8C8C] hover:border-[#383838]'
                      }`}
                    >
                      <div className="truncate font-mono">L{opt.value}: {opt.label.split(':')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Output Meter Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              
              {/* Score Display Card */}
              <div className="bg-[#181818] border border-[#262626] rounded-lg p-5 flex flex-col items-center justify-center text-center">
                <div className="text-[10px] uppercase text-[#A3A3A3] mb-1 font-mono tracking-widest">
                  Algorithmic Score (ARS)
                </div>
                <div className="text-5xl sm:text-6xl font-black text-[#D4AF37] leading-none mb-2 font-mono">
                  {evaluation.score}
                </div>
                
                {/* Status Tier Badge */}
                <div className={`px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-2 ${
                  evaluation.tier === 'Tier 4'
                    ? 'bg-red-600/20 text-red-400 border border-red-500/50'
                    : evaluation.tier === 'Tier 3'
                    ? 'bg-[#D4AF37]/20 text-[#E5C158] border border-[#D4AF37]/50'
                    : evaluation.tier === 'Tier 2'
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/50'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                }`}>
                  {evaluation.tier}: {evaluation.tierLabel.split('(')[0]}
                </div>

                <div className="text-[11px] text-[#A3A3A3] mt-1 line-clamp-2">
                  {evaluation.statutorySummary}
                </div>
              </div>

              {/* Recommended Enclave */}
              <div className="p-3 bg-[#070707] border border-[#262626] rounded text-xs">
                <div className="text-[9px] font-mono text-[#D4AF37] uppercase font-bold mb-0.5">
                  Deployment Topology:
                </div>
                <div className="text-[#E0E0E0] text-[11px]">
                  {evaluation.recommendedModelApproach}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handleCopyJSON}
                  className="bg-[#070707] border border-[#262626] hover:border-[#D4AF37] text-[10px] font-bold py-2 rounded text-[#A3A3A3] hover:text-[#F5F5F5] uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#D4AF37]" />}
                  <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                </button>

                <button
                  onClick={handleDownloadJSON}
                  className="bg-[#070707] border border-[#262626] hover:border-[#D4AF37] text-[10px] font-bold py-2 rounded text-[#A3A3A3] hover:text-[#F5F5F5] uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {downloaded ? <Check className="w-3 h-3 text-emerald-400" /> : <FileDown className="w-3 h-3 text-[#D4AF37]" />}
                  <span>{downloaded ? 'Exported' : 'Export .JSON'}</span>
                </button>
              </div>

              <button
                onClick={() => onTransferToScoping(fullJsonPayload)}
                className="w-full bg-[#D4AF37] text-black font-bold py-2.5 text-[10px] rounded uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:bg-[#E5C158] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Transfer ARS Payload to Scoping Intake</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

          {/* Required Artifacts Bar (Bottom) */}
          <div className="mt-8 pt-5 border-t border-[#262626]">
            <h5 className="text-[10px] uppercase font-bold text-[#A3A3A3] mb-3 tracking-widest flex items-center justify-between">
              <span>Required Statutory Artifacts &amp; Deliverables</span>
              <span className="text-[#D4AF37] font-mono">{evaluation.deliverables.length} MANDATORY</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {evaluation.deliverables.slice(0, 3).map((deliv) => (
                <div
                  key={deliv.id}
                  className="bg-[#070707] p-2.5 border border-[#262626] rounded text-[10px] flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-[#E0E0E0] truncate font-medium">{deliv.name}</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#D4AF37] shrink-0">{deliv.reference}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

