import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Comparison = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const rows = [
    { feature: "Availability", ai: "✅ 24/7/365", human: "❌ Business hours" },
    { feature: "Cost per call", ai: "✅ ~$0.05–$0.10", human: "❌ $5–$25+" },
    { feature: "Setup Time", ai: "✅ Hours", human: "❌ Weeks/months" },
    { feature: "Simultaneous Calls", ai: "✅ Unlimited", human: "❌ One at a time" },
    { feature: "Response Latency", ai: "✅ ~280ms", human: "❌ Hold times" },
    { feature: "Languages Supported", ai: "✅ 20+", human: "❌ Usually 1–2" },
    { feature: "Consistency", ai: "✅ 100% every call", human: "❌ Varies by mood" },
    { feature: "Scalability", ai: "✅ Instant", human: "❌ Hire & train" },
    { feature: "HIPAA / Compliance", ai: "✅ Built-in", human: "❌ Requires training" }
  ];

  return (
    <section className="py-24 bg-[#111118]/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Switch to AI Voice Agents?</h2>
          <p className="text-xl text-[#9CA3AF]">Compare the real cost and performance of AI vs traditional call centers.</p>
        </div>
        
        <div ref={ref} className="glass-card overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-3 border-b border-white/10 bg-black/40">
              <div className="p-6 font-bold text-lg">Feature</div>
              <div className="p-6 font-bold text-lg text-[#00F5FF] bg-[#00F5FF]/5 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#00F5FF] shadow-[0_0_10px_rgba(0,245,255,0.8)]"></div>
                🤖 voicePapa.ai
                <span className="absolute top-2 right-2 text-[10px] bg-[#00F5FF]/20 text-[#00F5FF] px-2 py-1 rounded uppercase tracking-wider hidden sm:block">Recommended</span>
              </div>
              <div className="p-6 font-bold text-lg text-[#9CA3AF]">👤 Human Agent</div>
            </div>
            
            <div className="divide-y divide-white/5">
              {rows.map((row, i) => (
                <div 
                  key={i} 
                  className={`grid grid-cols-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="p-4 sm:p-6 text-[#9CA3AF] flex items-center">{row.feature}</div>
                  <div className="p-4 sm:p-6 font-medium text-white bg-[#00F5FF]/5">{row.ai}</div>
                  <div className="p-4 sm:p-6 text-[#9CA3AF]/60">{row.human}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl mb-6">Start saving today — setup in under 2 hours.</p>
          <button className="px-8 py-4 rounded-full bg-[#00F5FF] text-black font-bold hover:bg-[#00F5FF]/90 transition-colors">
            Build Your Agent Now
          </button>
        </div>
      </div>
    </section>
  );
};
