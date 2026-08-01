import React, { useState } from 'react';
import { ArrowRight, PhoneIncoming, PhoneOutgoing, UserCheck, CalendarDays, Share2, Link } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Services = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  
  const services = [
    { 
      icon: <PhoneIncoming className="w-10 h-10 text-[#00F5FF]" />, 
      title: "Inbound Call Handling", 
      desc: "Never miss a call. Our AI answers instantly, 24/7, with zero hold time and perfect brand tone." 
    },
    { 
      icon: <PhoneOutgoing className="w-10 h-10 text-[#8B5CF6]" />, 
      title: "Outbound Campaigns", 
      desc: "Automated follow-ups, reminders, and lead outreach at scale with human-like conversational flow." 
    },
    { 
      icon: <UserCheck className="w-10 h-10 text-[#00F5FF]" />, 
      title: "AI Receptionist", 
      desc: "A fully trained virtual receptionist that knows your business inside out, handling FAQs and routing." 
    },
    { 
      icon: <CalendarDays className="w-10 h-10 text-[#8B5CF6]" />, 
      title: "Smart Appointment Booking", 
      desc: "Syncs with your calendar in real time. Books, reschedules, and confirms without human intervention." 
    },
    { 
      icon: <Share2 className="w-10 h-10 text-[#00F5FF]" />, 
      title: "Intelligent Call Transfer", 
      desc: "Routes calls to the right human or department — only when a human touch is strictly necessary." 
    },
    { 
      icon: <Link className="w-10 h-10 text-[#8B5CF6]" />, 
      title: "Deep Integrations", 
      desc: "Connects to your CRM, calendar, and workflow tools natively for a seamless automated ecosystem." 
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0A0A0F] relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F5FF]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-syne font-extrabold mb-6 tracking-tight">
            Everything Your <span className="text-gradient-cyan">Front Desk Can't Do</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Our AI voice agents don't just answer phones — they manage your entire customer interaction workflow with sub-300ms latency.
          </p>
        </div>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              onClick={() => setClickedIndex(clickedIndex === i ? null : i)}
              className={`
                relative p-10 rounded-3xl border border-white/5 cursor-pointer transition-all duration-500 group
                ${clickedIndex === i ? 'bg-[#450a0a] border-[#00F5FF]/30 scale-[1.02]' : 'bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#00F5FF]/20 hover:-translate-y-2'}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/0 to-[#8B5CF6]/0 group-hover:from-[#00F5FF]/5 group-hover:to-[#8B5CF6]/5 rounded-3xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                <h3 className="text-2xl font-syne font-bold mb-4 group-hover:text-[#00F5FF] transition-colors">{s.title}</h3>
                <p className="text-[#9CA3AF] mb-8 leading-relaxed text-lg">{s.desc}</p>
                
                <div className={`flex items-center gap-2 text-sm font-bold text-[#00F5FF] transition-all duration-300 ${clickedIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                  {clickedIndex === i ? 'Active Selection' : 'Learn more'} <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

