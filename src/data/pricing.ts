import { PricingTier } from '../types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'tier-1-assurance',
    tierNumber: 'TIER 01',
    title: 'Rapid Assurance & Guardrail Gateway',
    priceRange: '£5,000 – £8,500',
    timeframe: '2 – 3 Weeks Rapid Sprint',
    badge: 'Fast-Track Assurance',
    isPopular: false,
    idealFor: 'Teams with an existing prototype or pilot LLM needing urgent statutory clearance before production deployment.',
    serviceScope: 'Comprehensive audit of 1x production model pipeline, full 4-Tier Algorithmic Risk Assessment (ARS), and drop-in in-flight NER sanitisation microservice.',
    deliverables: [
      '1x Complete Production Model & Data Pipeline Audit',
      'Algorithmic Risk Score (ARS) & Statutory Tiering Matrix',
      'Drop-in In-Flight NER Redaction Module (NINO, NHS No, PII)',
      'Cabinet Office ATRS Tier-2 / ISO 42001 Initial Gap Analysis',
      'Threat Model & Prompt Injection Vulnerability Report',
      'Executive Board Statutory Sign-Off Briefing'
    ],
    statutoryArtifacts: [
      'AIA v3.1 Impact Assessment',
      'NER Guardrail Spec v1.0',
      'TPRM Initial Scorecard'
    ]
  },
  {
    id: 'tier-2-tom-deployment',
    tierNumber: 'TIER 02',
    title: 'Target Operating Model & Full-Stack AI Deployment',
    priceRange: '£15,000 – £30,000',
    timeframe: '6 – 10 Weeks Milestone-Driven',
    badge: 'Most Comprehensive',
    isPopular: true,
    idealFor: 'Enterprise and public sector bodies building mission-critical RAG pipelines, automated workflows, and formal governance operating models.',
    serviceScope: 'End-to-end technical systems architecture, sovereign RAG pipeline engineering, CI/CD automated safety test benches, and complete Responsible AI TOM.',
    deliverables: [
      'Complete Responsible AI Target Operating Model (TOM)',
      'Bespoke Sovereign RAG Architecture with 0.88 Cosine Gating',
      'Automated Backend Orchestration (Python/BullMQ/PostgreSQL)',
      'Sub-50ms Runtime NER Sanitisation Microservice Deployment',
      'Automated CI/CD Safety & Hallucination Test Suite',
      'Full CDDO ATRS Tier-2 or NHS DCB0129 Hazard Log Documentation',
      'Custom React/TypeScript Executive Governance Portal & RBAC',
      'Comprehensive Staff & Technical Team Knowledge Transfer'
    ],
    statutoryArtifacts: [
      'ISO/IEC 42001 AIMS Master Blueprint',
      'NHS DCB0129 Hazard Log (if healthcare)',
      'CDDO ATRS Tier-2 Statutory Filing Package',
      'Data Protection Impact Assessment (DPIA) Addendum'
    ]
  },
  {
    id: 'tier-3-retained-caio',
    tierNumber: 'TIER 03',
    title: 'Retained Technical Architecture & Fractional CAIO',
    priceRange: '£3,500 – £6,500 / month',
    timeframe: 'Quarterly / Annual Retainer (Min. 3 Months)',
    badge: 'Ongoing Sovereign Oversight',
    isPopular: false,
    idealFor: 'Scale-ups, enterprise C-suites, and public bodies requiring continuous senior technical authority, model observability, and regulatory compliance.',
    serviceScope: 'Dedicated fractional Chief AI Officer (CAIO) leadership, ongoing LLM-Ops telemetry monitoring, vector database tuning, and quarterly recertifications.',
    deliverables: [
      'Fractional Chief AI Officer (CAIO) / Chief Systems Architect seat',
      '24/7 LLM-Ops Telemetry & Model Drift Telemetry Monitoring',
      'Continuous Vector DB Re-indexing & Cosine Gate Calibration',
      'Quarterly ISO 42001 & Statutory Compliance Recertification',
      'Ad-hoc Architectural Review for New Enterprise AI Use Cases',
      'Monthly Executive Risk & Sovereign Enclave Health Dashboard',
      'Priority Incident Response for Security / Jailbreak Anomalies'
    ],
    statutoryArtifacts: [
      'Continuous Compliance Register',
      'Quarterly Model Audit Certificate',
      'Executive Risk Board Reports'
    ]
  }
];
