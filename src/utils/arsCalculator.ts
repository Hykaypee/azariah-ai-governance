import { ARSFactors, RiskEvaluation, RiskTier } from '../types';

export const DATA_SENSITIVITY_OPTIONS = [
  { value: 1, label: 'Level 1: Public / Open Data', description: 'General public documentation, published policies, non-confidential marketing or website content.' },
  { value: 2, label: 'Level 2: Internal / Confidential SOPs', description: 'Internal operating procedures, non-PII corporate strategies, product specifications, staff manuals.' },
  { value: 3, label: 'Level 3: UK GDPR PII & Identifiers', description: 'Personally Identifiable Information, National Insurance Numbers (NINOs), addresses, corporate emails, salary brackets.' },
  { value: 4, label: 'Level 4: Special Category & Caldicott PHI', description: 'NHS patient records, biometric/genetic data, criminal records, trade union membership, vulnerable citizen cases.' },
];

export const AUTONOMY_LEVEL_OPTIONS = [
  { value: 1, label: 'Level 1: Passive Assistant / Read-Only', description: 'Information summarization, semantic search; strictly zero automated action or output transmission.' },
  { value: 2, label: 'Level 2: Human-in-the-Loop (Mandatory Sign-off)', description: 'Model drafts outputs, but a certified human operator must review and explicitly authorize every action.' },
  { value: 3, label: 'Level 3: Human-on-the-Loop (Exception Flagging)', description: 'Model acts autonomously on routine cases; human reviewer only alerted when confidence falls below threshold.' },
  { value: 4, label: 'Level 4: Full Autonomous Decisioning', description: 'Direct system-to-system execution, automated benefit triage, automated financial trades, or patient prioritization.' },
];

export const IMPACT_RADIUS_OPTIONS = [
  { value: 1, label: 'Level 1: Sandboxed / Internal Pilot (<25 users)', description: 'Restricted sandbox environment with trusted, vetted internal technical staff only.' },
  { value: 2, label: 'Level 2: Enterprise-Wide (100+ users)', description: 'Deployed across corporate departments or business units affecting broad operational workflows.' },
  { value: 3, label: 'Level 3: Public Citizen Facing', description: 'Accessible to external citizens, general consumers, or public service applicants.' },
  { value: 4, label: 'Level 4: Material Financial / Clinical / Statutory', description: 'Impacts patient outcomes, direct financial disbursements, statutory rights, or legal liabilities.' },
];

export function calculateARS(factors: ARSFactors): RiskEvaluation {
  const { dataSensitivity, autonomyLevel, impactRadius } = factors;
  const score = dataSensitivity * (autonomyLevel + impactRadius);

  let tier: RiskTier = 'Tier 1';
  let tierLabel = 'Minimal Risk (Standard Assurance)';
  let badgeColor = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
  let bgGradient = 'from-emerald-500/10 via-transparent to-transparent';
  let statutorySummary = 'Low risk profile. Standard system documentation, token rate limiting, and basic internal audit logging are sufficient.';
  let regulatoryReferences = ['UK GDPR Baseline', 'Standard API Governance', 'Cyber Essentials'];
  let recommendedModelApproach = 'Commercial Cloud LLM with basic prompt templates and standard TLS encryption.';

  let deliverables = [
    { id: 'd1', name: 'Internal AI Usage Policy', reference: 'AUP-01', mandatory: true, description: 'Acceptable use guidelines for employees and developer teams.' },
    { id: 'd2', name: 'System Architecture Specification', reference: 'SAS-01', mandatory: true, description: 'Basic endpoint topology and data flow diagram.' },
    { id: 'd3', name: 'Third-Party Model Risk Checklist', reference: 'TPRM-Lite', mandatory: false, description: 'Verification that vendor does not train on customer inputs.' }
  ];

  let technicalSafeguards: {
    title: string;
    spec: string;
    category: 'Ingress' | 'Inference' | 'Egress' | 'Governance';
  }[] = [
    { title: 'API Authentication & Rate Limiting', spec: 'Bearer token validation with Redis token bucket rate limiter.', category: 'Ingress' },
    { title: 'Static Input Validation', spec: 'Max token length restrictions and basic regex input sanitization.', category: 'Ingress' },
    { title: 'Standard Error Masking', spec: 'Generic error payloads preventing internal stack trace disclosure.', category: 'Egress' }
  ];

  if (score >= 9 && score <= 16) {
    tier = 'Tier 2';
    tierLabel = 'Medium Risk (Managed Assurance)';
    badgeColor = 'bg-sky-500/10 text-sky-400 border-sky-500/30';
    bgGradient = 'from-sky-500/10 via-transparent to-transparent';
    statutorySummary = 'Moderate risk profile. Requires formal Data Protection Impact Assessment (DPIA), Algorithmic Transparency Record, and in-flight PII redaction.';
    regulatoryReferences = ['UK GDPR Article 35 (DPIA)', 'CDDO Algorithmic Transparency Standard (ATRS Tier-1)', 'ISO/IEC 42001 Clause 6'];
    recommendedModelApproach = 'Private Cloud Enclave (Azure UK / AWS London) with Zero Data Retention agreement.';

    deliverables = [
      { id: 'd1', name: 'Algorithmic Impact Assessment (AIA v3.1)', reference: 'CDDO-AIA-3.1', mandatory: true, description: 'Structured assessment of fairness, bias, and operational impact.' },
      { id: 'd2', name: 'Data Protection Impact Assessment (DPIA)', reference: 'ICO-DPIA-2018', mandatory: true, description: 'Formal ICO-compliant DPIA detailing PII lifecycle and retention.' },
      { id: 'd3', name: 'ATRS Tier-1 Transparency Register', reference: 'CDDO-ATRS-T1', mandatory: true, description: 'Publicly searchable record on central government transparency hub.' },
      { id: 'd4', name: 'Third-Party Risk Scorecard (TPRM)', reference: 'ISO-TPRM-42', mandatory: true, description: 'Comprehensive vendor model audit covering data storage & subprocessors.' }
    ];

    technicalSafeguards = [
      { title: 'In-Flight PII Regex & NER Sanitiser', spec: 'Sub-50ms microservice scrubbing emails, phone numbers, and postcodes.', category: 'Ingress' as const },
      { title: 'Cosine Gating (≥ 0.85 Threshold)', spec: 'Vector retrieval threshold preventing hallucinations on sparse queries.', category: 'Inference' as const },
      { title: 'Human-on-the-Loop Audit Log', spec: 'Asynchronous operator telemetry tracking low-confidence model outputs.', category: 'Governance' as const }
    ];
  } else if (score >= 17 && score <= 24) {
    tier = 'Tier 3';
    tierLabel = 'High Assurance (Regulated Statutory)';
    badgeColor = 'bg-[#D4AF37]/15 text-[#E5C158] border-[#D4AF37]/40';
    bgGradient = 'from-[#D4AF37]/15 via-transparent to-transparent';
    statutorySummary = 'High statutory risk. Mandatory CDDO ATRS Tier-2 submission, ISO/IEC 42001 Target Operating Model, and in-flight NER guardrails for UK NINOs & financial identifiers.';
    regulatoryReferences = ['UK Cabinet Office ATRS Tier-2 Mandatory', 'ISO/IEC 42001 AI Management System', 'UK GDPR Article 9 (Special Category)', 'FCA Consumer Duty / Model Risk Guidance'];
    recommendedModelApproach = 'Dedicated UK Sovereign VPC with Hardware Security Module (HSM) and cosine-gated deterministic RAG.';

    deliverables = [
      { id: 'd1', name: 'Cabinet Office ATRS Tier-2 Submission', reference: 'GOV-ATRS-T2', mandatory: true, description: 'Full architectural disclosure, training provenance, and human-in-the-loop audit pathways.' },
      { id: 'd2', name: 'ISO/IEC 42001 Target Operating Model (TOM)', reference: 'ISO42001-TOM', mandatory: true, description: 'Enterprise-wide AI governance policies, risk registers, and accountability RACI matrix.' },
      { id: 'd3', name: 'Mandatory HITL Sign-off Protocol', reference: 'HITL-SOP-V2', mandatory: true, description: 'Certified operator interface requiring explicit signature before payload release.' },
      { id: 'd4', name: 'Statutory Data Protection Addendum (Article 9)', reference: 'GDPR-ART9-ADD', mandatory: true, description: 'Legal and technical justification for processing high-sensitivity identifiers.' },
      { id: 'd5', name: 'Continuous LLM-Ops Telemetry & Drift Plan', reference: 'OPS-DRIFT-MON', mandatory: true, description: 'Automated circuit breakers triggered on embedding drift or safety violations.' }
    ];

    technicalSafeguards = [
      { title: 'Sub-50ms Presidio NINO & Financial Sanitiser', spec: 'In-flight memory-only NER buffer eliminating UK NINOs, bank sorts, and cards.', category: 'Ingress' as const },
      { title: 'Cosine Gating (≥ 0.88 Strict Cutoff)', spec: 'Strict mathematical cutoff with deterministic fallback routing on edge queries.', category: 'Inference' as const },
      { title: 'Cryptographic Query Citation Stamping', spec: 'SHA-256 cryptographic hash generated for every retrieved vector passage.', category: 'Egress' as const },
      { title: 'Real-Time Drift Circuit Breaker', spec: 'Automated kill-switch isolating model endpoint if divergence exceeds 5%.', category: 'Governance' as const }
    ];
  } else if (score >= 25) {
    tier = 'Tier 4';
    tierLabel = 'Critical Statutory (Sovereign & Clinical)';
    badgeColor = 'bg-rose-500/15 text-rose-400 border-rose-500/40';
    bgGradient = 'from-rose-500/15 via-transparent to-transparent';
    statutorySummary = 'Maximum criticality tier. Mandatory NHS Digital DCB0129 Clinical Safety Hazard Log signed by a registered Clinical Safety Officer (CSO), Sovereign Air-Gapped TEE, and 100% deterministic entity locks.';
    regulatoryReferences = ['NHS Digital DCB0129 / DCB0160', 'Caldicott Guardian Principles 1-8', 'UK Cabinet Office ATRS Tier-2', 'ISO/IEC 42001 Full AIMS Certification', 'MHRA Software as a Medical Device (SaMD)'];
    recommendedModelApproach = 'Sovereign Air-Gapped UK Enclave (Azure UK / GCP London HSCN peered) with Confidential Computing (TEE) and dual-key cryptographic authorization.';

    deliverables = [
      { id: 'd1', name: 'NHS DCB0129 Clinical Hazard Log & Safety Case', reference: 'NHS-DCB0129-CSO', mandatory: true, description: 'Formal clinical risk management report signed by a registered Clinical Safety Officer (CSO).' },
      { id: 'd2', name: 'Caldicott Guardian Assurance Dossier', reference: 'NHS-CALDICOTT-8', mandatory: true, description: 'Compliance audit against all 8 Caldicott Principles for patient identifiable data.' },
      { id: 'd3', name: 'Full ATRS Tier-2 Central Government Dossier', reference: 'CDDO-ATRS-T2-FULL', mandatory: true, description: 'Complete algorithmic transparency dossier filed with the Central Digital & Data Office.' },
      { id: 'd4', name: 'ISO/IEC 42001 Full Certification Evidence Locker', reference: 'ISO42001-AIMS-AUDIT', mandatory: true, description: 'Auditor-ready repository spanning clauses 4 through 10 and Annex A controls.' },
      { id: 'd5', name: 'Independent Red-Team & Adversarial Safety Audit', reference: 'REDTEAM-UK-SOC2', mandatory: true, description: 'Comprehensive third-party penetration test and prompt extraction evaluation.' }
    ];

    technicalSafeguards = [
      { title: 'Confidential Computing (TEE Hardware Isolation)', spec: 'AMD SEV-SNP / Intel SGX encrypted memory enclave preventing host memory inspection.', category: 'Ingress' as const },
      { title: '100% Deterministic Clinical & Allergy NER Lock', spec: 'Zero-hallucination hardcoded ontology lock preventing drug/allergy omission.', category: 'Inference' as const },
      { title: 'Dual-Key Statutory Sign-Off Microservice', spec: 'Requires cryptographically paired signatures from both Clinician and Information Governance Lead.', category: 'Governance' as const },
      { title: 'Air-Gapped Vector Knowledge Enclave', spec: 'Zero public internet egress with strict VPC service controls and TLS 1.3 mutual auth.', category: 'Egress' as const }
    ];
  }

  return {
    score,
    tier,
    tierLabel,
    badgeColor,
    bgGradient,
    statutorySummary,
    deliverables,
    technicalSafeguards,
    regulatoryReferences,
    recommendedModelApproach
  };
}
