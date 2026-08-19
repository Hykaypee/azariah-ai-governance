import React, { useState, useMemo } from 'react';
import { ShieldCheck, Play, RotateCcw, Zap, Terminal, Sparkles, CheckCircle2, Lock } from 'lucide-react';

export const InteractiveNERDemo: React.FC = () => {
  const samplePrompts = [
    {
      title: 'NHS Clinical Triage Note',
      text: 'Patient Johnathon Davies (NHS No: 485 772 9012, DOB: 14/04/1982) presents with severe acute asthma. Known anaphylactic penicillin allergy. Prescribed Salbutamol 5mg nebulised.',
    },
    {
      title: 'UK Gov Tax & Benefit Query',
      text: 'Citizen Margaret Smith (NINO: QQ 12 34 56 A, Sort Code: 20-45-88, Account: 84920144) is appealing universal credit determination ref UC-994821.',
    },
    {
      title: 'Regulated Corporate Whistleblower',
      text: 'Confidential report regarding CFO Sarah Jenkins (Email: sarah.jenkins@enterprise-plc.co.uk, Mobile: +44 7700 900451) authorizing unauthorized off-book trades.',
    }
  ];

  const [inputText, setInputText] = useState(samplePrompts[0].text);
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastLatency, setLastLatency] = useState<number>(37);

  // In-flight scrubbing simulation
  const redactedResult = useMemo(() => {
    let output = inputText;
    let detectionsCount = 0;

    // NHS Number (3-3-4 pattern)
    output = output.replace(/\b\d{3}\s?\d{3}\s?\d{4}\b/g, () => {
      detectionsCount++;
      return '[REDACTED_NHS_NUMBER_CALDICOTT_P1]';
    });

    // UK NINO regex
    output = output.replace(/\b[A-CEGHJ-PR-TW-Z]{2}\s?\d{2}\s?\d{2}\s?\d{2}\s?[A-D]\b/gi, () => {
      detectionsCount++;
      return '[REDACTED_UK_NINO_GOV_ART9]';
    });

    // Sort Code
    output = output.replace(/\b\d{2}-\d{2}-\d{2}\b/g, () => {
      detectionsCount++;
      return '[REDACTED_SORT_CODE]';
    });

    // Bank Account 8-digit
    output = output.replace(/\bAccount:\s*\d{8}\b/gi, () => {
      detectionsCount++;
      return 'Account: [REDACTED_FIN_ACCOUNT]';
    });

    // Email
    output = output.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, () => {
      detectionsCount++;
      return '[REDACTED_CORPORATE_PII_EMAIL]';
    });

    // UK Phone
    output = output.replace(/\+44\s?7\d{3}\s?\d{6}/g, () => {
      detectionsCount++;
      return '[REDACTED_UK_TELEPHONE]';
    });

    // DOB
    output = output.replace(/\b\d{2}\/\d{2}\/\d{4}\b/g, () => {
      detectionsCount++;
      return '[REDACTED_DOB]';
    });

    return {
      text: output,
      count: detectionsCount,
    };
  }, [inputText]);

  const handleSimulateInference = () => {
    setIsProcessing(true);
    const mockLatency = Math.floor(Math.random() * 12) + 32; // 32ms - 44ms
    setTimeout(() => {
      setLastLatency(mockLatency);
      setIsProcessing(false);
    }, 180);
  };

  return (
    <section className="py-20 bg-[#070707] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Interactive Telemetry Sandbox</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F5F5] tracking-tight font-sans">
              Test In-Flight NER &amp; Caldicott Guardrails
            </h2>
            <p className="text-[#A3A3A3] text-sm sm:text-base mt-2">
              Experience our sub-50ms token stream sanitisation engine. Live interception of UK NINOs, NHS identifiers, and Special Category PII before model inference.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputText(p.text);
                  handleSimulateInference();
                }}
                className="px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] border border-[#262626] text-xs font-medium text-[#D4AF37] transition-colors"
              >
                Sample {idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Input Raw Payload (6 Cols) */}
          <div className="lg:col-span-6 bg-[#121212] border border-[#262626] rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#222222] mb-3 text-xs font-mono">
                <span className="text-[#8C8C8C] flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>INCOMING RAW CITIZEN / CLINICAL STREAM</span>
                </span>
                <span className="text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  Unsanitised Ingress
                </span>
              </div>

              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={6}
                className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl p-3.5 font-mono text-xs text-[#E5E5E5] focus:outline-none focus:border-[#D4AF37] resize-none leading-relaxed"
                placeholder="Enter prompt containing NHS numbers, NINOs, bank details, or names..."
                id="ner-input-textarea"
              />
            </div>

            <div className="flex items-center justify-between pt-4 mt-2">
              <span className="text-[11px] font-mono text-[#8C8C8C]">
                Length: {inputText.length} chars • UTF-8 Stream
              </span>
              <button
                onClick={handleSimulateInference}
                disabled={isProcessing}
                className="px-4 py-2 rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] text-[#F5F5F5] border border-[#333] text-xs font-mono font-semibold flex items-center gap-2 transition-all"
                id="run-ner-sanitiser-btn"
              >
                <RotateCcw className={`w-3.5 h-3.5 text-[#D4AF37] ${isProcessing ? 'animate-spin' : ''}`} />
                <span>{isProcessing ? 'Intercepting Stream...' : 'Re-run Interceptor'}</span>
              </button>
            </div>
          </div>

          {/* Right: Sanitised Stream & Telemetry (6 Cols) */}
          <div className="lg:col-span-6 bg-[#121212] border border-[#262626] rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#222222] mb-3 text-xs font-mono">
                <span className="text-[#8C8C8C] flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SOVEREIGN IN-FLIGHT REDACTED BUFFER</span>
                </span>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Sub-50ms Zero-Leak
                </span>
              </div>

              <div className="bg-[#0A0A0A] border border-[#262626] rounded-xl p-3.5 font-mono text-xs text-emerald-300 min-h-[148px] max-h-[148px] overflow-y-auto leading-relaxed whitespace-pre-wrap">
                {redactedResult.text}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 mt-2 border-t border-[#222222] text-xs font-mono">
              <div className="p-2 rounded-lg bg-[#181818] border border-[#262626]">
                <div className="text-[9px] text-[#8C8C8C] uppercase">Latency</div>
                <div className="text-emerald-400 font-bold mt-0.5">{lastLatency}ms P95</div>
              </div>
              <div className="p-2 rounded-lg bg-[#181818] border border-[#262626]">
                <div className="text-[9px] text-[#8C8C8C] uppercase">Entities Scrubbed</div>
                <div className="text-[#D4AF37] font-bold mt-0.5">{redactedResult.count} Detected</div>
              </div>
              <div className="p-2 rounded-lg bg-[#181818] border border-[#262626]">
                <div className="text-[9px] text-[#8C8C8C] uppercase">GDPR Art. 9</div>
                <div className="text-emerald-400 font-bold mt-0.5">100% Cleared</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
