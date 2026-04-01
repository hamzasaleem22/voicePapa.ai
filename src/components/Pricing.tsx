import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-12 md:py-16 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Simple, Transparent Pricing</h2>
        
        <div className="inline-flex items-center gap-4 p-1 rounded-full bg-white/5 border border-white/10">
          <button 
            className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${!isAnnual ? 'bg-[#00F5FF] text-black' : 'text-[#9CA3AF] hover:text-white'}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button 
            className={`px-6 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-2 ${isAnnual ? 'bg-[#00F5FF] text-black' : 'text-[#9CA3AF] hover:text-white'}`}
            onClick={() => setIsAnnual(true)}
          >
            Annual <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase">Save 20%</span>
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {/* Starter */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-2">STARTER</h3>
          <p className="text-[#9CA3AF] text-sm mb-6 h-10">Perfect for small businesses</p>
          <div className="text-5xl font-bold mb-2">${isAnnual ? '77' : '97'}<span className="text-lg text-[#9CA3AF] font-normal">/mo</span></div>
          <p className="text-[#00F5FF] text-sm mb-6 font-bold">+$299 setup fee</p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Up to 500 calls/month</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> 1 AI voice agent</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Inbound + basic outbound</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Google Calendar integration</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Email support</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> 7-day free trial</li>
          </ul>
          
          <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/5 transition-colors font-bold">
            Start Free Trial
          </button>
        </div>

        {/* Growth */}
        <div className="glass-card p-8 border-[#00F5FF]/50 shadow-[0_0_30px_rgba(0,245,255,0.1)] relative md:-translate-y-4 bg-[#111118]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00F5FF] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(0,245,255,0.5)]">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-2">GROWTH</h3>
          <p className="text-[#9CA3AF] text-sm mb-6 h-10">For growing teams needing full automation</p>
          <div className="text-5xl font-bold mb-2">${isAnnual ? '237' : '297'}<span className="text-lg text-[#9CA3AF] font-normal">/mo</span></div>
          <p className="text-[#00F5FF] text-sm mb-6 font-bold">+$399 setup fee</p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Up to 3,000 calls/month</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> 3 AI voice agents</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Inbound + outbound + booking</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> CRM integrations (HubSpot, GHL)</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Call transfer + routing</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Priority support + onboarding call</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Custom voice & personality</li>
          </ul>
          
          <button className="w-full py-4 rounded-xl bg-[#00F5FF] text-black font-bold hover:bg-[#00F5FF]/90 transition-colors">
            Get Started
          </button>
        </div>

        {/* Enterprise */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-2">ENTERPRISE</h3>
          <p className="text-[#9CA3AF] text-sm mb-6 h-10">For high-volume or multi-location businesses</p>
          <div className="text-5xl font-bold mb-2">Custom</div>
          <p className="text-[#00F5FF] text-sm mb-6 font-bold">+$699 setup fee</p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Unlimited calls</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Unlimited agents</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Custom integrations</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> HIPAA / SOC2 compliance docs</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> Dedicated account manager</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> SLA guarantee</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-[#00F5FF]" /> White-label option available</li>
          </ul>
          
          <button className="w-full py-4 rounded-xl bg-[#8B5CF6] text-white font-bold hover:bg-[#8B5CF6]/90 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};
