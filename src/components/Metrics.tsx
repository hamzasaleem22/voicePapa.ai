import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Metrics = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const stats = [
    { value: "10M+", label: "Calls Handled" },
    { value: "200+", label: "Businesses Served" },
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "~280ms", label: "Avg Response Time" },
    { value: "3.8×", label: "Average ROI Multiplier" }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#111118]">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-3xl md:text-5xl font-syne font-bold text-[#00F5FF] mb-2">{isVisible ? stat.value : '0'}</div>
              <div className="text-sm font-medium text-[#9CA3AF] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
