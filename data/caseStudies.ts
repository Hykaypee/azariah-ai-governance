import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'central-gov-tax-advisory',
    sector: 'Central Government',
    sectorBadge: 'UK Central Government',
    title: 'Citizen Tax Advisory & Automated Statutory Triage Engine',
    clientContext: 'Major UK ministerial department handling high-volume citizen statutory inquiries and cross-tier tax classification requests.',
    problemStatement: 'Manual citizen casework backlog had grown to 6 weeks. Standard commercial LLM solutions posed unacceptable data residency risks under UK GDPR and failed Cabinet Office Central Digital & Data Office (CDDO) ATRS Tier-2 transparency mandates.',
    engineeredSolution: 'Engineered a sovereign, air-gapped RAG pipeline hosted inside an Azure UK South enclave. Implemented sub-50ms in-flight NER redacting National Insurance numbers and banking credentials, paired with a deterministic 0.88 cosine gating threshold for statutory guidance retrieval.',
    architectureHighlights: [
      'Azure UK South Sovereign Enclave with Zero Data Retention (ZDR)',
      'Sub-50ms Presidio-based NINO and PII In-Flight Sanitisation Engine',
      'Deterministic 0.88 Cosine Gated pgvector Knowledge Base over UK Tax Legislation',
      'Automated CDDO ATRS Tier-2 Algorithmic Transparency Record submission generator'
    ],
    metrics: [
      { label: 'Casework Triage Backlog', value: '< 3s', delta: 'Down from 6 Weeks' },
      { label: 'PII Entities Scrubbed', value: '140,000+', delta: 'Zero Leaks' },
      { label: 'Statutory Citation Accuracy', value: '99.94%', delta: '100% Deterministic' },
      { label: 'Public Casework Capacity', value: '+420%', delta: 'Zero Headcount Incr.' }
    ],
    statutoryCleared: [
      'UK Cabinet Office ATRS Tier-2 Registry',
      'UK GDPR Article 9 Special Category Clearance',
      'Crown Commercial Service Cyber Essentials Plus Enclave',
      'Algorithmic Impact Assessment (AIA v3.1) Cleared'
    ],
    techEnclave: 'Azure UK South (UK Sovereign VPC) • FastApi • pgvector • Presidio • Cohere Rerank',
    quoteOrTakeaway: '“Azariah Consult replaced a 6-week citizen wait time with instantaneous, verified statutory guidance without ever exposing a single National Insurance number to third-party model weights.”'
  },
  {
    id: 'regulated-enterprise-tom',
    sector: 'Regulated Enterprise',
    sectorBadge: 'Tier-1 Financial & Legal Enterprise',
    title: 'Automated AI Assurance Gateway & Target Operating Model (TOM)',
    clientContext: 'Pan-European FTSE-100 regulated institution operating 70+ generative AI initiatives across underwriting, contract review, and fraud analytics.',
    problemStatement: 'AI adoption was stalled due to fragmented shadow-AI tooling, uncontrolled model governance, and lack of alignment with ISO/IEC 42001 (AI Management System) and EU AI Act / UK Responsible AI frameworks, creating 9-month project approval bottlenecks.',
    engineeredSolution: 'Designed and deployed an enterprise-wide Responsible AI Target Operating Model (TOM) coupled with a programmatic AI Assurance Gateway. Every internal developer pipeline was routed through an automated ARS risk calculator, prompt sanitiser, and model telemetry dashboard.',
    architectureHighlights: [
      'Programmatic API Gateway with integrated ARS 4-Tier Automated Classifier',
      'ISO/IEC 42001 Clause 4-10 Governance Artifact Generator',
      'Automated Third-Party Risk Management (TPRM) dynamic scorecarding',
      'Real-time model drift and hallucination circuit-breaker telemetry monitors'
    ],
    metrics: [
      { label: 'Governance Review Cycles', value: '48 Hours', delta: 'Down from 270 Days' },
      { label: 'Active Enterprise Use Cases', value: '74 Cleared', delta: '100% Compliant' },
      { label: 'Audited Model Endpoints', value: '100%', delta: 'Unified Telemetry' },
      { label: 'Compliance Cost Savings', value: '£1.4M', delta: 'Annualized Run Rate' }
    ],
    statutoryCleared: [
      'ISO/IEC 42001 (AIMS) Certification Readiness',
      'FCA Operational Resilience & Model Risk Guidance',
      'UK Corporate Governance Code AI Oversight Annex',
      'Automated Algorithmic Transparency Register'
    ],
    techEnclave: 'AWS London (eu-west-2) • Redis BullMQ • Rust Guardrails • React Governance Portal',
    quoteOrTakeaway: '“The automated assurance gateway reduced our AI governance cycle from 9 months to 48 hours while maintaining flawless ISO 42001 auditability across all 74 production endpoints.”'
  },
  {
    id: 'nhs-clinical-discharge',
    sector: 'NHS & Healthcare',
    sectorBadge: 'NHS Digital & Healthcare Trusts',
    title: 'Clinical Discharge Summarisation & EHR Automation Copilot',
    clientContext: 'Major NHS Foundation Trust experiencing extreme junior doctor burnout during electronic patient record (EHR) discharge synthesis.',
    problemStatement: 'Clinicians were spending 2.5 hours per shift manually consolidating multi-ward pathology labs, medication histories, and consultant notes. Off-the-shelf LLMs risked patient safety and violated NHS Digital DCB0129 Clinical Safety and Caldicott Guardian principles.',
    engineeredSolution: 'Engineered a clinical-grade summarisation engine inside an NHS England HSCN/N3-peered sovereign cloud enclave. Built a deterministic Allergy & Critical Drug NER lock (preventing omission of critical contraindications) and a mandatory Human-in-the-Loop (HITL) consultant sign-off interface.',
    architectureHighlights: [
      'NHS DCB0129 Clinical Risk Management Plan & Hazard Log approved by Clinical Safety Officer (CSO)',
      '100% Deterministic Allergy & Critical Medication NER Lock System',
      'Caldicott Guardian Principle 1-8 sanitisation pipeline with NHS Number masking',
      'HL7 FHIR v4 bidirectional connector with Epic / Cerner EHR integration'
    ],
    metrics: [
      { label: 'Clinician Drafting Time Saved', value: '55%', delta: '1.4 Hrs/Doctor/Shift' },
      { label: 'Allergy Omission Risk', value: '0.00%', delta: '100% Deterministic Lock' },
      { label: 'Discharge Letter Turnaround', value: '8 Mins', delta: 'Down from 45 Mins' },
      { label: 'Clinical Safety Sign-off', value: '100%', delta: 'CSO DCB0129 Approved' }
    ],
    statutoryCleared: [
      'NHS Digital DCB0129 (Clinical Risk Management)',
      'NHS Caldicott Guardian Principles 1-8',
      'Information Governance (IG) Toolkit High Score',
      'MHRA Software as a Medical Device (SaMD) Boundary'
    ],
    techEnclave: 'GCP London (europe-west2) • HL7/FHIR • Python • Presidio Medical NER • Med-PaLM/Gemini Enclave',
    quoteOrTakeaway: '“With the DCB0129 Hazard Log signed and 100% Allergy NER locks active, our clinical staff reclaimed over 80 minutes per shift without ever compromising patient safety.”'
  }
];
