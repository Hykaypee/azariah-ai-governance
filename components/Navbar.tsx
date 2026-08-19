import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Activity, ExternalLink } from 'lucide-react';
import { LIVE_INTAKE_URL } from '../types';

interface NavbarProps {
  onOpenDiscovery?: () => void;
  onSelectService?: (service: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiscovery }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLiveIntake = () => {
    window.open(LIVE_INTAKE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#070707]/95 backdrop-blur-md border-b border-[#262626] h-16'
          : 'bg-[#070707] border-b border-[#262626] h-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Brand Logo & Sleek Pill Tag */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 group" id="brand-logo-btn">
              <span className="font-bold tracking-tighter text-xl text-[#F5F5F5]">
                AZARIAH <span className="text-[#D4AF37]">CONSULT</span>
              </span>
            </a>

            {/* Division Pill Badge */}
            <div className="hidden lg:flex items-center px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
              Technical Systems Architecture &amp; Statutory Assurance
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-medium uppercase tracking-widest text-[#A3A3A3]">
            <button
              onClick={() => scrollToSection('frameworks')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
              id="nav-frameworks"
            >
              Frameworks
            </button>
            <button
              onClick={() => scrollToSection('capabilities')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
              id="nav-capabilities"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('risk-engine')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1.5"
              id="nav-risk-engine"
            >
              <span>Risk Calculator</span>
              <span className="px-1.5 py-0.2 text-[9px] bg-[#D4AF37]/20 text-[#E5C158] rounded border border-[#D4AF37]/30 font-mono">
                ARS
              </span>
            </button>
            <button
              onClick={() => scrollToSection('blueprints')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
              id="nav-blueprints"
            >
              Blueprints
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
              id="nav-pricing"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('intake')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
              id="nav-intake"
            >
              Intake
            </button>
          </nav>

          {/* Desktop Sleek Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('risk-engine')}
              className="bg-[#D4AF37] text-black px-4 py-2 rounded-sm font-bold text-[10px] uppercase tracking-wider hover:bg-[#E5C158] shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all flex items-center gap-1.5 cursor-pointer"
              id="nav-launch-engine-btn"
            >
              <Activity className="w-3 h-3 text-black" />
              <span>LAUNCH RISK ENGINE</span>
            </button>

            <a
              href={LIVE_INTAKE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#181818] border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-2 text-[10px] font-bold uppercase rounded-sm hover:bg-[#D4AF37]/10 transition-colors flex items-center gap-1.5 cursor-pointer"
              id="nav-discovery-btn"
            >
              <span>Discovery Call</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection('risk-engine')}
              className="px-2.5 py-1.5 bg-[#D4AF37] text-black text-[10px] font-bold uppercase rounded-sm"
              aria-label="Risk Engine"
            >
              ARS
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#121212] border border-[#262626] text-[#A3A3A3] hover:text-[#F5F5F5]"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070707] border-b border-[#262626] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-2 py-1 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
            Sovereign Navigation
          </div>
          <button
            onClick={() => scrollToSection('frameworks')}
            className="w-full text-left px-3 py-2 rounded text-xs text-[#F5F5F5] hover:bg-[#121212] transition-colors"
          >
            Statutory Frameworks &amp; Accreditations
          </button>
          <button
            onClick={() => scrollToSection('capabilities')}
            className="w-full text-left px-3 py-2 rounded text-xs text-[#F5F5F5] hover:bg-[#121212] transition-colors"
          >
            Technical Capabilities
          </button>
          <button
            onClick={() => scrollToSection('risk-engine')}
            className="w-full text-left px-3 py-2 rounded text-xs text-[#D4AF37] font-semibold hover:bg-[#121212] transition-colors flex items-center justify-between"
          >
            <span>ARS Risk Calculator</span>
            <span className="px-1.5 py-0.5 text-[9px] bg-[#D4AF37]/20 text-[#E5C158] rounded border border-[#D4AF37]/30">Active</span>
          </button>
          <button
            onClick={() => scrollToSection('blueprints')}
            className="w-full text-left px-3 py-2 rounded text-xs text-[#F5F5F5] hover:bg-[#121212] transition-colors"
          >
            Blueprints
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full text-left px-3 py-2 rounded text-xs text-[#F5F5F5] hover:bg-[#121212] transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('intake')}
            className="w-full text-left px-3 py-2 rounded text-xs text-[#F5F5F5] hover:bg-[#121212] transition-colors"
          >
            Scoping Intake
          </button>

          <div className="pt-3 border-t border-[#262626] flex flex-col gap-2">
            <a
              href={LIVE_INTAKE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 bg-[#D4AF37] text-black font-bold text-xs uppercase rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.2)] text-center block"
            >
              Book Technical Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

