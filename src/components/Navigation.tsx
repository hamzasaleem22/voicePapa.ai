import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({ onOpenPricing, onOpenDemo }: { onOpenPricing: () => void; onOpenDemo: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0F]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9CA3AF]">
            <a href="#services" className="hover:text-[#F0F0F0] transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-[#F0F0F0] transition-colors">How It Works</a>
            <button onClick={onOpenPricing} className="hover:text-[#F0F0F0] transition-colors">Pricing</button>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={onOpenDemo}
              className="px-6 py-2.5 rounded-full border border-[#00F5FF] text-[#00F5FF] font-medium hover:bg-[#00F5FF]/10 transition-colors animate-pulse-glow"
            >
              Book a Demo
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0F]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-2xl font-syne pt-20">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <button onClick={() => { onOpenPricing(); setMobileMenuOpen(false); }}>Pricing</button>
          <button 
            onClick={() => { onOpenDemo(); setMobileMenuOpen(false); }}
            className="mt-4 px-8 py-3 rounded-full bg-[#00F5FF] text-black font-bold"
          >
            Book a Demo
          </button>
        </div>
      )}

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none">
        <button 
          onClick={onOpenDemo}
          className="w-full py-4 rounded-xl bg-[#00F5FF] text-black font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.3)] pointer-events-auto"
        >
          <span className="text-xl">🎙</span> Talk to Our AI — Free Demo
        </button>
      </div>
    </>
  );
};
