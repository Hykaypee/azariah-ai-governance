import React, { useState } from 'react';
import { X, Calendar, Send, CheckCircle2, ShieldCheck, Mail, Building2, Terminal, ExternalLink } from 'lucide-react';
import { LIVE_INTAKE_URL } from '../types';

interface TechnicalDiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalDiscoveryModal: React.FC<TechnicalDiscoveryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [urgency, setUrgency] = useState('Critical statutory deadline (< 3 weeks)');
  const [focusArea, setFocusArea] = useState('Central Gov ATRS Tier-2 / NHS DCB0129');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const ref = `DISC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const subject = encodeURIComponent(`[${ref}] Technical Discovery Call Request — ${name} (${org})`);
    const body = encodeURIComponent(
`AZARIAH CONSULT — DISCOVERY CALL BOOKING
Reference ID: ${ref}
Full Name: ${name}
Corporate Email: ${email}
Organization: ${org}
Focus Area: ${focusArea}
Target Slot: ${preferredDate || 'Earliest available senior technical architect'}
Urgency: ${urgency}

Please dispatch Zoom / MS Teams Sovereign bridge link.`
    );

    setTimeout(() => {
      window.location.href = `mailto:admin@tassignature.com?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#121212] border border-[#262626] rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#181818] border border-[#262626] text-[#8C8C8C] hover:text-[#F5F5F5] hover:bg-[#222222] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F5F5]">Discovery Brief Dispatched</h3>
            <p className="text-xs text-[#A3A3A3] max-w-sm mx-auto">
              A Senior Systems Architect will confirm your session directly via email.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={LIVE_INTAKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#D4AF37] text-[#070707] font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <span>Open Live Intake Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 rounded-xl bg-[#181818] text-[#A3A3A3] hover:text-[#F5F5F5] font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Architect Briefing</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">
              Book Technical Discovery Call
            </h3>
            <p className="text-xs text-[#A3A3A3] mb-4">
              30-minute high-assurance scoping session with an Azariah Consult Principal Systems Architect.
            </p>

            {/* Direct Link Banner */}
            <div className="mb-5 p-3 rounded-xl bg-[#181818] border border-[#D4AF37]/30 flex items-center justify-between gap-3">
              <span className="text-xs text-[#CCCCCC]">Prefer our official intake portal?</span>
              <a
                href={LIVE_INTAKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5C158] text-[#070707] font-bold text-[11px] flex items-center gap-1 shrink-0"
              >
                <span>Live Intake Form</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-[#CCCCCC] uppercase mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Alistair Vance"
                  className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#CCCCCC] uppercase mb-1.5">
                  Corporate / Gov Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. name@organisation.gov.uk"
                  className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-[#CCCCCC] uppercase mb-1.5">
                    Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="e.g. NHS Trust"
                    className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#CCCCCC] uppercase mb-1.5">
                    Urgency
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option>Immediate / Critical (&lt; 2 wks)</option>
                    <option>Next 30 Days</option>
                    <option>Exploratory / Roadmap</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#CCCCCC] uppercase mb-1.5">
                  Assurance Target / Focus Area
                </label>
                <select
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option>Cabinet Office ATRS Tier-2 Clearance</option>
                  <option>NHS DCB0129 Clinical Hazard Log</option>
                  <option>ISO/IEC 42001 Target Operating Model (TOM)</option>
                  <option>Sovereign RAG &amp; In-Flight NER Microservices</option>
                  <option>Fractional Chief AI Officer (CAIO) Retainer</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5C158] hover:to-[#C69E2E] text-[#070707] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Discovery Call Booking</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
