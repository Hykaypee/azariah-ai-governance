import React from 'react';
import { Shield, ArrowRight, Activity, Terminal, Lock, CheckCircle2, Server, Cpu, Database } from 'lucide-react';
import { LIVE_INTAKE_URL } from '../types';

interface HeroProps {
  onOpenDiscovery?: () => void;
  onLaunchCalculator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery, onLaunchCalculator }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070707]">
      {/* Background Architectural Mesh & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/3 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"></div>
      
      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Executive Security Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#262626] shadow-sm mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase">
              Enterprise AI Governance &amp; Audit-Ready Security
            </span>
            <span className="text-[#3A3A3A]">|</span>
            <span className="text-xs font-mono text-[#A3A3A3]">
              Azariah AI Consulting
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F5] font-sans leading-[1.1] mb-6">
            Enterprise AI Governance &amp; Security at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24]">
              Production Velocity.
            </span>
          </h1>

          {/* Sub-headline */}
