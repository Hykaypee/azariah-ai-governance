import { PricingTier } from '../types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'tier-1-governance-readiness',
    tierNumber: 'TIER 01',
    title: 'AI Governance & Safety Assessment',
    priceRange: '£5,000 - £8,500',
    timeframe: '2 - 3 Weeks Fixed Sprint',
    badge: 'Rapid Readiness',
    isPopular: false,
    idealFor: 'Enterprises and growth companies deploying LLMs, internal copilots, or third-party AI needing rapid risk tiering, acceptable use policies, and audit baselines.',
    serviceScope: 'Complete shadow AI discovery, ISO 42001 / NIST AI RMF gap analysis, prompt injection threat review, and a prioritized 60-day technical remediation roadmap.',
    deliverables: [
      'Comprehensive Shadow AI & Tenancy Discovery',
      'ISO 42001 & NIST AI RMF Gap Assessment Matrix',
      'Corporate AI Acceptable Use Policy Suite',
      'AI System Risk Classification & Impact Register',
      'Prompt Injection & Data Boundary Threat Report',
      'Executive Discovery & 60-Day Remediation Roadmap'
    ],
    statutoryArtifacts: [
      'AI Risk Management Register (ISO 42001)',
      'Corporate AI Acceptable Use Policy',
      'Executive Risk & Remediation Briefing'
    ]
  },
  {
    id: 'tier-2-grc-audit-sprint',
    tierNumber: 'TIER 02',
    title: 'GRC Audit-Readiness & Security Sprint',
    priceRange: '£10,000 - £20,000',
    timeframe: '3 - 4 Weeks Fixed Sprint',
    badge: 'Most Comprehensive',
    isPopular: true,
    idealFor: 'Mid-market enterprises preparing for third-party security audits (ISO 27001, SOC 2), enterprise procurement clearance, or automated data processing under UK GDPR.',
    serviceScope: 'End-to-end security posture audit, RBAC access control hardening, automated workflow DPIAs, centralized evidence vault architecture, and vendor review clearance.',
    deliverables: [
      'Cloud Tenancy Security Baseline & RBAC Hardening',
      'ISO 27001 Gap Matrix & Statement of Applicability',
      'Specialized DPIAs for Automated Pipelines & LLMs',
      'In-Flight Prompt-as-Code Data Redaction Architecture',
      'Centralized Enterprise Vendor Evidence Vault',
      'Target Operating Model (TOM) for Compliance & Security',
      'Board-Level Audit Readiness Sign-Off'
    ],
    statutoryArtifacts: [
      'ISO 27001 Statement of Applicability',
      'Automated Workflow DPIA Documentation',
      'Enterprise Vendor Security Evidence Vault'
    ]
  },
  {
    id: 'tier-3-fractional-governance',
    tierNumber: 'TIER 03',
    title: 'Fractional AI Governance & Advisory',
    priceRange: '£3,500 - £6,500 / month',
    timeframe: 'Quarterly / Annual Retainer (Min. 3 Months)',
    badge: 'Ongoing Oversight',
    isPopular: false,
    idealFor: 'Enterprises and scale-ups requiring continuous technical authority, recurring regulatory alignment, vendor risk evaluation, and ongoing compliance monitoring.',
    serviceScope: 'Dedicated fractional AI Governance Officer leadership, continuous AI asset cataloging, recurring audit certifications, and priority security escalation support.',
    deliverables: [
      'Fractional Chief AI Governance Officer Advisory Seat',
      'Continuous AI Asset & Model Risk Register Maintenance',
      'Quarterly ISO 42001 & ISO 27001 Recertification Reviews',
      'Pre-Procurement Review of New AI Tools & SaaS Tenancies',
      'Ongoing Vendor Security Questionnaire Clearance Support',
      'Monthly Executive Risk & Compliance Dashboard',
      'Priority Escalation for Prompt Security & Data Incidents'
    ],
    statutoryArtifacts: [
      'Continuous Compliance Register',
      'Quarterly Governance Audit Certificate',
      'Executive Risk Board Reports'
    ]
  }
];
