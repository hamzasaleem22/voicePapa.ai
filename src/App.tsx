import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Navbar } from './components/Navigation';
import { Hero } from './components/Hero';
import { DemoModal } from './components/DemoModal';
import { Marquee } from './components/Marquee';
import { AudioDemo } from './components/AudioDemo';
import { TestCall } from './components/TestCall';
import { Services } from './components/Services';
import { Comparison } from './components/Comparison';
import { HowItWorks } from './components/HowItWorks';
import { ROICalculator } from './components/ROICalculator';
import { Metrics } from './components/Metrics';
import { Integrations } from './components/Integrations';
import { VideoSection } from './components/VideoSection';
import { IndustryUseCases } from './components/IndustryUseCases';
import { CaseStudies } from './components/CaseStudies';
import { TrustSecurity } from './components/TrustSecurity';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number((currentScrollY / scrollHeight).toFixed(4)) * 100);
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  return progress;
}

export default function App() {
  const scrollProgress = useScrollProgress();
  const [showPricing, setShowPricing] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0F0F0] font-dm relative">
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <div id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
        <Navbar 
          onOpenPricing={() => setShowPricing(true)} 
          onOpenDemo={() => setShowDemoModal(true)} 
        />
        <Hero 
          onOpenPricing={() => setShowPricing(true)} 
          onOpenDemo={() => setShowDemoModal(true)} 
        />
        <Marquee />
        <AudioDemo />
        <TestCall />
        <Services />
        <IndustryUseCases />
        <Comparison />
        <HowItWorks />
        <ROICalculator />
        <Metrics />
        <CaseStudies />
        <Integrations />
        <VideoSection />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer onOpenDemo={() => setShowDemoModal(true)} />
      </div>

      <DemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />

      {showPricing && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm overflow-y-auto p-4 flex items-start justify-center pt-10 md:pt-20" onClick={() => setShowPricing(false)}>
          <div className="relative w-full max-w-7xl bg-[#0A0A0F] rounded-3xl border border-white/10 shadow-2xl mb-10" onClick={e => e.stopPropagation()}>
            <button className="absolute top-6 right-6 z-50 text-white/50 hover:text-white bg-white/5 rounded-full p-2 transition-colors" onClick={() => setShowPricing(false)}>
              <X size={24} />
            </button>
            <div className="overflow-y-auto hide-scrollbar rounded-3xl">
              <Pricing />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
