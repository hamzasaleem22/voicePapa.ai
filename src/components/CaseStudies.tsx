import React from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Star, TrendingUp, Clock, DollarSign } from 'lucide-react';

const cases = [
  {
    client: "Bright Smile Dental",
    industry: "Healthcare",
    icon: "🏥",
    problem: "Overwhelmed front desk — 40% of calls went to voicemail",
    results: [
      { label: "Call Answer Rate", value: "100%", icon: Star },
      { label: "More Bookings", value: "67%", icon: TrendingUp },
      { label: "Saved/Month", value: "$12K", icon: DollarSign }
    ],
    quote: "Our front desk now handles zero phones — the AI does it all.",
    author: "Dr. Sarah M., Practice Owner",
    color: "border-t-[#00F5FF]"
  },
  {
    client: "PrimeKey Realty Group",
    industry: "Real Estate",
    icon: "🏠",
    problem: "Leads calling after hours — lost to competitors instantly",
    results: [
      { label: "Missed Leads", value: "-94%", icon: Star },
      { label: "More Viewings", value: "3x", icon: TrendingUp },
      { label: "Coverage", value: "24/7", icon: Clock }
    ],
    quote: "We closed 4 extra deals last month from after-hours AI calls alone.",
    author: "James T., Broker",
    color: "border-t-[#8B5CF6]"
  },
  {
    client: "QuickFix Plumbing Co.",
    industry: "Home Services",
    icon: "🔧",
    problem: "Missed calls during jobs — revenue walking out the door",
    results: [
      { label: "Missed Calls", value: "Zero", icon: Star },
      { label: "More Jobs", value: "2.1x", icon: TrendingUp },
      { label: "Review Score", value: "4.9", icon: Star }
    ],
    quote: "It pays for itself 10x over every single month.",
    author: "Mike D., Owner",
    color: "border-t-[#00F5FF]"
  }
];

export const CaseStudies = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="case-studies">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Results. Real Businesses.</h2>
        <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
          See how voicePapa.ai is transforming operations across different industries.
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-3 gap-8">
        {cases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`glass-card p-8 border-t-4 ${item.color} flex flex-col`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-xl">{item.client}</h3>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-[#9CA3AF] uppercase tracking-wider">{item.industry}</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-white/50 uppercase mb-2">Problem</h4>
              <p className="text-[#9CA3AF]">{item.problem}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {item.results.map((res, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-[#00F5FF] font-bold text-lg">{res.value}</div>
                  <div className="text-[10px] text-[#9CA3AF] uppercase">{res.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/5 italic text-[#9CA3AF] relative">
              <span className="absolute -top-4 left-0 text-4xl text-[#00F5FF]/20 font-serif">"</span>
              <p className="mb-4 leading-relaxed">{item.quote}</p>
              <div className="flex items-center gap-3 not-italic">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#8B5CF6]"></div>
                <span className="text-xs font-bold text-white/70">{item.author}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
