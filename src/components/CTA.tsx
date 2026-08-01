import React from 'react';

export const CTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-cyan)_0%,_transparent_40%),radial-gradient(circle_at_bottom,_var(--color-violet)_0%,_transparent_50%)] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-extrabold mb-6 md:mb-8 text-white drop-shadow-[0_0_20px_rgba(0,245,255,0.3)]">
          Your AI Receptionist Is Ready.
        </h2>
        <p className="text-lg md:text-2xl text-[#9CA3AF] mb-8 md:mb-12 max-w-2xl mx-auto">
          Start your free 7-day trial. No credit card. No commitment. Cancel anytime.
        </p>
        
        <form className="flex flex-col sm:flex-row justify-center gap-4 mb-8 max-w-2xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your work email" 
            className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] transition-all"
            required
          />
          <button type="submit" className="px-8 py-4 rounded-full bg-[#00F5FF] text-black font-bold hover:bg-[#00F5FF]/90 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(0,245,255,0.4)]">
            Start Free Trial
          </button>
        </form>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#9CA3AF] font-medium mb-12">
          <span className="flex items-center gap-2">✓ Live in under 2 hours</span>
          <span className="flex items-center gap-2">✓ Cancel anytime</span>
          <span className="flex items-center gap-2">✓ Human support included</span>
        </div>
        
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-lg font-bold">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Or call us: +92 335 9519916 | +1 209 762 0044 | +92 303 5070436 | +92 311 0278856
        </div>
      </div>
    </section>
  );
};
