import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { InteractiveNERDemo } from './components/InteractiveNERDemo';
import { RiskCalculator } from './components/RiskCalculator';
import { CaseStudyExplorer } from './components/CaseStudyExplorer';
import { PricingSection } from './components/PricingSection';
import { ScopingIntake } from './components/ScopingIntake';
import { TechnicalDiscoveryModal } from './components/TechnicalDiscoveryModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedBudget, setSelectedBudget] = useState<string | undefined>(undefined);
  const [transferredArs, setTransferredArs] = useState<any>(null);

  const handleLaunchCalculator = () => {
    const el = document.getElementById('risk-engine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const el = document.getElementById('intake');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (tierTitle: string, price: string) => {
    setSelectedService(tierTitle);
    setSelectedBudget(price);
    const el = document.getElementById('intake');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferArsToScoping = (arsPayload: any) => {
    setTransferredArs(arsPayload);
    const el = document.getElementById('intake');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F5F5] selection:bg-[#D4AF37] selection:text-[#070707] flex flex-col">
      {/* Institutional Top Navigation */}
      <Navbar onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenDiscovery={() => setIsDiscoveryOpen(true)}
          onLaunchCalculator={handleLaunchCalculator}
        />

        {/* Institutional Accreditation Trust Ticker */}
        <TrustTicker />

        {/* Core Technical Systems Architecture & Automation Capabilities (4 Pillars) */}
        <CapabilitiesGrid onSelectService={handleSelectService} />

        {/* Live In-Flight NER & Caldicott Guardrail Testing Sandbox */}
        <InteractiveNERDemo />

        {/* Interactive 4-Tier Algorithmic Risk Calculator (ARS Engine) */}
        <RiskCalculator onTransferToScoping={handleTransferArsToScoping} />

        {/* Sector Case Study Blueprints */}
        <CaseStudyExplorer onSelectService={handleSelectService} />

        {/* Commercial Service Tiers & Milestone Schedules */}
        <PricingSection onSelectTier={handleSelectTier} />

        {/* Structured Scoping Intake & Cryptographic Ref Generation */}
        <ScopingIntake
          prefilledService={selectedService}
          prefilledBudget={selectedBudget}
          transferredArsPayload={transferredArs}
        />
      </main>

      {/* Institutional Legal & Accreditation Footer */}
      <Footer />

      {/* Direct Discovery Booking Modal */}
      <TechnicalDiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
      />
    </div>
  );
}

