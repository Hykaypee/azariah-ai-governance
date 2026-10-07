import { TechnicalCapability } from '../types';

export const TECHNICAL_CAPABILITIES: TechnicalCapability[] = [
  {
    id: "governance-portals",
    number: "01",
    title: "AI Governance & Safety Assessment",
    tagline: "Comprehensive baseline diagnostics aligned with ISO 42001 and NIST AI Risk Management Frameworks.",
    description: "We audit generative AI implementations, internal copilots, and third-party tools to classify organizational risks, stop data spillage, and establish audit-ready oversight.",
    techStack: ['ISO/IEC 42001', 'NIST AI RMF', 'UK GDPR', 'Model Risk Registers'],
    enclaveSpec: 'Audited Governance Architecture (Risk Tiering, Acceptable Use, Continuous DPIA)',
    coreMetrics: [
      { label: 'Framework Alignment', value: '100% Target' },
      { label: 'Shadow AI Detection', value: 'Complete' },
      { label: 'Assessment Turnaround', value: '2-3 Weeks' },
      { label: 'Audit Readiness', value: 'Verified' }
    ],
    features: [
      'Comprehensive Shadow AI and Tenancy Discovery',
      'ISO 42001 and NIST AI RMF Gap Diagnostics',
      'Corporate AI Acceptable Use Policy Suite',
      'Prioritized 60-Day Technical Remediation Roadmap'
    ],
    codeSnippet: {
      filename: 'iso42001_governance_eval.py',
      language: 'python',
      code: `# ISO/IEC 42001 & NIST AI RMF Risk Registry Validator
def evaluate_model_governance(model_id: str, risk_tier: str):
    controls = {
        "ISO_42001_A_6": "AI Impact & Risk Assessment Verified",
        "NIST_MEASURE_2": "Deterministic Output Grounding Enforced",
        "UK_GDPR_DPIA": "PII Ingestion Boundary Confirmed"
    }
    return {"status": "AUDIT_READY", "controls_passed": controls}`
    }
  },
  {
    id: "ner-guardrails",
    number: "02",
    title: "In-Flight Guardrails & Shadow AI Control",
    tagline: "Deterministic prompt-as-code filters and data boundary protection preventing model leaks.",
    description: "We engineer programmatic guardrails that intercept sensitive company data, source code, and customer records before they can reach public foundation models or training datasets.",
    techStack: ['Prompt-as-Code', 'PII Redaction', 'Deterministic Filters', 'Cloud Enclaves'],
    enclaveSpec: 'Zero Data Retention Enclave (In-Flight Scrubbing, Input Sanitization)',
    coreMetrics: [
      { label: 'Data Leakage Rate', value: '0.00%' },
      { label: 'Prompt Injection Defense', value: 'Deterministic' },
      { label: 'Filter Latency', value: '< 45ms' },
      { label: 'PII Scrubbing Precision', value: '99.9%' }
    ],
    features: [
      'Prompt-as-Code Policy Engine Integration',
      'Real-Time PII and Confidential Data Redaction',
      'Prompt Injection and Jailbreak Hardening',
      'Automated Third-Party SaaS Exposure Blocking'
    ],
    codeSnippet: {
      filename: 'guardrail_policy.json',
      language: 'json',
      code: `{
  "policy_name": "enterprise_data_boundary",
  "rules": {
    "redact_pii": true,
    "block_prompt_injection": true,
    "prevent_model_training_spill": true
  },
  "enforcement": "deterministic_drop"
}`
    }
  },
  {
    id: "grounded-rag",
    number: "03",
    title: "GRC Audit-Readiness & Security Sprints",
    tagline: "Rigorous compliance preparation, ISMS baselines, and vendor security questionnaire clearance.",
    description: "We prepare scaling organizations for formal third-party audits (ISO 27001, SOC 2) and build organized evidence vaults that clear enterprise vendor procurement reviews.",
    techStack: ['ISO 27001', 'SOC 2 Controls', 'UK GDPR DPIA', 'Vendor Risk'],
    enclaveSpec: 'Enterprise Security Baseline (Role-Based Access, MFA, AES-256 Storage)',
    coreMetrics: [
      { label: 'Audit Gap Closure', value: '100% Scoped' },
      { label: 'Evidence Indexing', value: 'Pre-Organized' },
      { label: 'Sprint Duration', value: '3-4 Weeks' },
      { label: 'Vendor Questionnaire Pass', value: 'Accelerated' }
    ],
    features: [
      'Full Cloud Tenancy Security Posture Audit',
      'ISO 27001 Gap Matrix and Statement of Applicability',
      'Specialized DPIAs for Automated Workflows',
      'Centralized Enterprise Evidence Vault'
    ],
    codeSnippet: {
      filename: 'audit_readiness_matrix.py',
      language: 'python',
      code: `# ISO 27001 & SOC 2 Continuous Evidence Verifier
def verify_audit_readiness(tenant_scope: dict):
    checks = [
        tenant_scope.get("mfa_enforced", False),
        tenant_scope.get("rbac_least_privilege", False),
        tenant_scope.get("evidence_vault_synced", False)
    ]
    return "CERTIFICATION_READY" if all(checks) else "GAP_IDENTIFIED"`
    }
  },
  {
    id: "automated-pipelines",
    number: "04",
    title: "Autonomous Intake & Operations Pipelines",
    tagline: "Zero-touch customer ingestion, automated scoring, and master CRM ledger infrastructure.",
    description: "We deploy custom business automation that captures high-value inquiries, validates corporate domains, updates backend ledgers, and routes qualified leads directly to your calendar.",
    techStack: ['Google Apps Script', 'Google Workspace', 'Webhooks & APIs', 'Gemini API'],
    enclaveSpec: 'Automated CRM Ledger Architecture (Zero-Touch Ingestion, Calendar Sync)',
    coreMetrics: [
      { label: 'Manual Admin Saved', value: '15+ hrs/wk' },
      { label: 'Lead Response Time', value: '< 60 sec' },
      { label: 'Data Accuracy', value: '100%' },
      { label: 'Operational Friction', value: 'Eliminated' }
    ],
    features: [
      'Automated Multi-Stage Intake Routing',
      'Corporate Domain Validation and Lead Tiering',
      'Instant Calendar Booking for High-Budget Leads',
      'Master Google Sheets and CRM Synchronization'
    ],
    codeSnippet: {
      filename: 'intake_router_pipeline.gs',
      language: 'javascript',
      code: `// Autonomous Client Ingestion & CRM Routing
function onAssessmentSubmitted(e) {
  const payload = e.namedValues;
  const budget = payload['Estimated Project Budget'][0];
  if (budget.includes('£5,000') || budget.includes('£10,000')) {
    logToMasterLedger(payload, 'PRIORITY_QUALIFIED');
    dispatchExecutiveCalendarInvite(payload['Corporate Work Email'][0]);
  }
}`
    }
  }
];
