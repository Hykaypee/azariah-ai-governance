export const LIVE_INTAKE_URL = 'https://forms.gle/fhPyXVs3pKKkVtt58';

export type RiskTier = 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4';

export interface ARSFactors {
  dataSensitivity: number; // 1 to 4
  autonomyLevel: number;   // 1 to 4
  impactRadius: number;    // 1 to 4
}

export interface RiskEvaluation {
  score: number;
  tier: RiskTier;
  tierLabel: string;
  badgeColor: string;
  bgGradient: string;
  statutorySummary: string;
  deliverables: {
    id: string;
    name: string;
    reference: string;
    mandatory: boolean;
    description: string;
  }[];
  technicalSafeguards: {
    title: string;
    spec: string;
    category: 'Ingress' | 'Inference' | 'Egress' | 'Governance';
  }[];
  regulatoryReferences: string[];
  recommendedModelApproach: string;
}

export interface TechnicalCapability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  enclaveSpec: string;
  coreMetrics: { label: string; value: string }[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  features: string[];
}

export interface CaseStudy {
  id: string;
  sector: 'Central Government' | 'Regulated Enterprise' | 'NHS & Healthcare';
  sectorBadge: string;
  title: string;
  clientContext: string;
  problemStatement: string;
  engineeredSolution: string;
  architectureHighlights: string[];
  metrics: {
    label: string;
    value: string;
    delta: string;
  }[];
  statutoryCleared: string[];
  techEnclave: string;
  quoteOrTakeaway: string;
}

export interface PricingTier {
  id: string;
  tierNumber: string;
  title: string;
  priceRange: string;
  timeframe: string;
  badge?: string;
  isPopular?: boolean;
  idealFor: string;
  deliverables: string[];
  statutoryArtifacts: string[];
  serviceScope: string;
}

export interface IntakeFormData {
  fullName: string;
  corporateEmail: string;
  organization: string;
  sector: string;
  primaryService: string;
  targetEnclave: string;
  projectBudget: string;
  urgencyTimeline: string;
  arsPayload?: any;
  message: string;
}
