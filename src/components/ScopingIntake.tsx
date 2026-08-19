import React, { useState, useEffect } from 'react';
import { IntakeFormData, LIVE_INTAKE_URL } from '../types';
import { Send, CheckCircle2, Copy, Check, Mail, Building, ShieldAlert, Cpu, Sparkles, Terminal, FileText, ExternalLink } from 'lucide-react';

interface ScopingIntakeProps {
  prefilledService?: string;
  prefilledBudget?: string;
  transferredArsPayload?: any;
}

export const ScopingIntake: React.FC<ScopingIntakeProps> = ({
  prefilledService,
  prefilledBudget,
  transferredArsPayload
}) => {
  const [formData, setFormData] = useState<IntakeFormData>({
    fullName: '',
    corporateEmail: '',
    organization: '',
    sector: 'Central Government',
    primaryService: prefilledService || 'Grounded RAG & Vector Knowledge Systems',
    targetEnclave: 'UK Sovereign Cloud (Azure UK / AWS London)',
    projectBudget: prefilledBudget || '£15,000 – £30,000 (Target Operating Model & Full-Stack)',
    urgencyTimeline: 'Within 2–4 Weeks (Urgent Production / Clearance)',
    arsPayload: transferredArsPayload || null,
    message: ''
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, primaryService: prefilledService }));
    }
    if (prefilledBudget) {
      setFormData((prev) => ({ ...prev, projectBudget: prefilledBudget }));
    }
  }, [prefilledService, prefilledBudget]);

  useEffect(() => {
    if (transferredArsPayload) {
      setFormData((prev) => ({ ...prev, arsPayload: transferredArsPayload }));
    }
  }, [transferredArsPayload]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate formal Azariah Consult Reference ID
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const generatedRefId = `AZA-2026-${randomHex}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef(generatedRefId);

      // Create pre-composed mailto link to admin@tassignature.com
      const subject = encodeURIComponent(`[${generatedRefId}] Azariah Consult Scoping Intake — ${formData.organization || formData.fullName}`);
      const body = encodeURIComponent(
`AZARIAH CONSULT — SCOPING INTAKE PAYLOAD
Reference ID: ${generatedRefId}
Timestamp: ${new Date().toISOString()}

CLIENT INFORMATION:
-------------------
Full Name: ${formData.fullName}
Corporate Email: ${formData.corporateEmail}
Organization: ${formData.organization}
Sector: ${formData.sector}

TECHNICAL SCOPE:
----------------
Primary Service: ${formData.primaryService}
Target Enclave: ${formData.targetEnclave}
Estimated Budget: ${formData.projectBudget}
Timeline: ${formData.urgencyTimeline}

ARS AUDIT PAYLOAD:
------------------
${formData.arsPayload ? JSON.stringify(formData.arsPayload, null, 2) : 'No preliminary ARS attached'}

PROJECT MESSAGE / BRIEF:
------------------------
${formData.message || 'Standard statutory scoping discovery requested.'}

--------------------------------------------------
Azariah Consult | TAS Consult Ltd (TAS Signature Group)
`
      );

      // Prompt mailto
      window.location.href = `mailto:admin@tassignature.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleCopyRef = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] relative" id="intake">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#D4AF37]/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Structured Scoping Intake</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] tracking-tight font-sans">
            Initiate Technical Discovery &amp; Scope
          </h2>
          <p className="text-[#A3A3A3] text-base sm:text-lg mt-3 leading-relaxed">
            Submit your system architecture requirements, target sovereign enclave parameters, and regulatory deadlines. Our Senior Technical Systems Architects respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form (8 Cols) */}
          <div className="lg:col-span-8 bg-[#121212] border border-[#262626] rounded-2xl p-6 sm:p-10 shadow-2xl">
            {submittedRef ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                    Payload Dispatched to Practice Leadership
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5]">
                    Scoping Dossier Registered
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-md mx-auto mt-2">
                    Your assessment reference has been generated and pre-composed to <strong className="text-[#F5F5F5]">admin@tassignature.com</strong>.
                  </p>
                </div>

                {/* Reference ID Pill Box */}
                <div className="p-4 rounded-xl bg-[#181818] border border-[#2E2E2E] max-w-sm mx-auto flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-mono text-[#8C8C8C] uppercase text-left">Tracking Reference</div>
                    <div className="text-lg font-mono font-bold text-[#D4AF37] tracking-wider">{submittedRef}</div>
                  </div>
                  <button
                    onClick={handleCopyRef}
                    className="p-2 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-[#F5F5F5] border border-[#333] text-xs transition-colors flex items-center gap-1.5"
                  >
                    {copiedRef ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#D4AF37]" />}
                    <span className="font-mono text-[11px]">{copiedRef ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#181818] hover:bg-[#202020] border border-[#333] text-xs font-mono text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
                  >
                    Submit Another Scoping Payload
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Transferred ARS Alert Pill if present */}
                {formData.arsPayload && (
                  <div className="p-3.5 rounded-xl bg-[#181818] border border-[#D4AF37]/40 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <div className="text-xs text-[#E5E5E5]">
                        <strong className="text-[#D4AF37] font-mono">ARS Evaluation Attached: </strong>
                        Score {formData.arsPayload.mathematicalOutput.score} ({formData.arsPayload.mathematicalOutput.assignedTier})
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A0A0A] text-emerald-400 border border-emerald-500/30">
                      Payload Included
                    </span>
                  </div>
                )}

                {/* 2-Column Row: Full Name & Corporate Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#A3A3A3] uppercase mb-1.5 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Alistair Vance"
                      className="w-full bg-[#070707] border border-[#262626] rounded p-2.5 text-[11px] text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition-colors"
                      id="intake-full-name"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-[#A3A3A3] uppercase mb-1.5 font-bold">
                      Corporate / Gov Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.corporateEmail}
                      onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                      placeholder="e.g. alistair.vance@cabinetoffice.gov.uk"
                      className="w-full bg-[#070707] border border-[#262626] rounded p-2.5 text-[11px] text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition-colors"
                      id="intake-email"
                    />
                  </div>
                </div>

                {/* 2-Column Row: Organization & Sector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#A3A3A3] uppercase mb-1.5 font-bold">
                      Organization / Department *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. HM Treasury / NHS Foundation Trust"
                      className="w-full bg-[#070707] border border-[#262626] rounded p-2.5 text-[11px] text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition-colors"
                      id="intake-organization"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-[#A3A3A3] uppercase mb-1.5 font-bold">
                      Sector Classification *
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-[#070707] border border-[#262626] rounded p-2.5 text-[11px] text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition-colors cursor-pointer"
                      id="intake-sector"
                    >
                      <option value="UK Central Government">UK Central Government &amp; Executive Agency</option>
                      <option value="NHS Digital & Healthcare Trust">NHS Digital &amp; NHS Foundation Trust</option>
                      <option value="Regulated Financial Enterprise">Regulated Financial Enterprise (FCA / PRA)</option>
                      <option value="Legal & Corporate Enterprise">Legal &amp; Regulated Corporate Enterprise</option>
                      <option value="Defense & Critical Infrastructure">Defense &amp; Critical National Infrastructure</option>
                    </select>
                  </div>
                </div>

                {/* 2-Column Row: Primary Service & Target Enclave */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#A3A3A3] uppercase mb-1.5 font-bold">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.primaryService}
                      onChange={(e) => setFormData({ ...formData, primaryService: e.target.value })}
                      className="w-full bg-[#070707] border border-[#262626] rounded p-2.5 text-[11px] text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition-colors cursor-pointer"
                      id="intake-primary-service"
                    >
                      <option value="Grounded RAG & Vector Knowledge Systems">Grounded RAG &amp; Vector Systems</option>
                      <option value="Automated Data Pipelines & Process Orchestration">Automated Data Pipelines &amp; Orchestration</option>
                      <option value="Prompt-as-Code & Runtime NER Redaction">Prompt-as-Code &amp; Runtime NER Guardrails</option>
                      <option value="Custom Governance Portals & Dashboards">Custom Governance Portals &amp; Dashboards</option>
                      <option value="Rapid Assurance & Guardrail Gateway (Tier 1)">Rapid Assurance &amp; Guardrail Gateway (Tier 1)</option>
                      <option value="Target Operating Model & Full-Stack (Tier 2)">Target Operating Model &amp; Full-Stack AI (Tier 2)</option>
                      <option value="Retained Architecture & Fractional CAIO (Tier 3)">Retained Architecture &amp; Fractional CAIO (Tier 3)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-[#A3A3A3] uppercase mb-1.5 font-bold">
                      Target Sovereign Enclave *
                    </label>
                    <select
                      value={formData.targetEnclave}
                      onChange={(e) => setFormData({ ...formData, targetEnclave: e.target.value })}
                      className="w-full bg-[#070707] border border-[#262626] rounded p-2.5 text-[11px] text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition-colors cursor-pointer"
                      id="intake-target-enclave"
                    >
                      <option value="UK Sovereign Cloud (Azure UK / AWS London / GCP europe-west2)">UK Sovereign Cloud (Azure UK / AWS London / GCP)</option>
                      <option value="NHS HSCN / N3 Peered Enclave">NHS HSCN / N3 Peered Enclave</option>
                      <option value="Air-Gapped On-Premises Kubernetes Cluster">Air-Gapped On-Premises Kubernetes Cluster</option>
                      <option value="Private Dedicated SaaS Tenant (Zero Data Retention)">Private Dedicated SaaS Tenant (ZDR)</option>
                    </select>
                  </div>
                </div>

                {/* Message / System Scope */}
                <div>
                  <label className="block text-[10px] font-mono text-[#A3A3A3] uppercase mb-1.5 font-bold">
                    System Architecture Scope &amp; Statutory Constraints
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe existing model stack, data classification, statutory deadlines (e.g., ATRS Tier-2 submission date, DCB0129 audit), or integration endpoints..."
                    className="w-full bg-[#070707] border border-[#262626] rounded p-2.5 text-[11px] text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition-colors resize-none leading-relaxed"
                    id="intake-message"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-wider rounded shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:bg-[#E5C158] transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                    id="submit-scoping-form-btn"
                  >
                    <Send className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    <span>{isSubmitting ? 'GENERATING CRYPTOGRAPHIC DOSSIER REF...' : 'SUBMIT SCOPING INTAKE & GENERATE REF ID'}</span>
                  </button>
                  <div className="text-center mt-2.5 text-[10px] font-mono text-[#8C8C8C]">
                    Dispatches directly to Azariah Practice Leadership at <span className="text-[#D4AF37]">admin@tassignature.com</span>
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Practice Office & Governance (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Form Direct Action Card */}
            <div className="bg-[#141414] border border-[#D4AF37]/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-semibold mb-2 flex items-center justify-between">
                <span>Direct Digital Intake</span>
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              </div>
              
              <h4 className="text-base font-bold text-[#F5F5F5] mb-2">
                Live Google Intake Form
              </h4>
              <p className="text-xs text-[#A3A3A3] mb-4 leading-relaxed">
                Prefer to submit through our direct online questionnaire? Open the live portal to register project parameters and schedule discovery.
              </p>

              <a
                href={LIVE_INTAKE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5C158] hover:to-[#C69E2E] text-[#070707] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open Live Intake Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-[#121212] border border-[#262626] rounded-2xl p-6 shadow-xl">
              <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-semibold mb-3">
                Practice Headquarters
              </div>
              
              <h4 className="text-base font-bold text-[#F5F5F5] mb-1">
                Azariah Consult
              </h4>
              <p className="text-xs text-[#8C8C8C] mb-4">
                Specialized Division of TAS Consult Ltd (TAS Signature Group)
              </p>

              <div className="space-y-3 text-xs text-[#CCCCCC] pt-3 border-t border-[#222222]">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <a href="mailto:admin@tassignature.com" className="hover:text-[#D4AF37] font-mono text-[11px]">
                    admin@tassignature.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Building className="w-4 h-4 text-[#D4AF37]" />
                  <span>London, United Kingdom • Sovereign Practice</span>
                </div>
              </div>
            </div>

            {/* Procurement Accordion */}
            <div className="bg-[#121212] border border-[#262626] rounded-2xl p-6 shadow-xl space-y-3">
              <div className="text-xs font-mono text-[#F5F5F5] uppercase tracking-wider font-semibold">
                Procurement &amp; Statutory Compliance:
              </div>

              <div className="space-y-2 text-xs text-[#A3A3A3]">
                <div className="p-2.5 rounded-lg bg-[#181818] border border-[#222222]">
                  <strong className="text-[#F5F5F5] block font-mono text-[11px]">G-Cloud Supplier Alignment</strong>
                  <span>Pre-scoped statements of work for Crown Commercial Framework procurement.</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#181818] border border-[#222222]">
                  <strong className="text-[#F5F5F5] block font-mono text-[11px]">ISO/IEC 42001 &amp; Caldicott</strong>
                  <span>All architecture deliverables include auditor-ready evidence logs.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
