import React from 'react';
import { Phone, Brain, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const HowItWorks = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  
  const steps = [
    { num: "01", title: "Connect Your Number", desc: "Forward your existing business number or get a new one. Works with any carrier or VoIP provider.", icon: <Phone size={32} /> },
    { num: "02", title: "Train Your AI Agent", desc: "Tell it your business info, services, tone, and FAQs. It learns your brand in minutes — no coding required.", icon: <Brain size={32} /> },
    { num: "03", title: "Go Live & Scale", desc: "Activate your agent and handle unlimited calls instantly. Monitor every call in your dashboard in real time.", icon: <Rocket size={32} /> }
  ];

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6" id="how-it-works">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center">Live in 3 Simple Steps</h2>
      
      <div ref={ref} className="relative">
        {/* Connecting Line Desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`glass-card p-8 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="absolute -top-6 -right-2 md:-top-10 md:-right-4 text-[80px] md:text-[120px] font-syne font-black text-white/5 select-none leading-none">
                {step.num}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#00F5FF]/10 text-[#00F5FF] flex items-center justify-center mb-6 border border-[#00F5FF]/20">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-[#9CA3AF] leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
