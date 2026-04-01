import React from 'react';
import { Phone } from 'lucide-react';

export const TestCall = () => {
  const numbers = [
    "+1 201 508 0084",
    "+44 7401 110068",
    "+1 586 371 5435",
    "+61 8 5122 6864"
  ];

  return (
    <section className="py-20 bg-[#0A0A0F]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">Test Call Our AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {numbers.map((number, index) => (
            <a
              key={index}
              href={`tel:${number.replace(/\s/g, '')}`}
              className="glass-card p-8 flex items-center justify-center gap-4 hover:border-[#00F5FF] transition-all group border border-white/10 rounded-2xl bg-white/5"
            >
              <Phone className="text-[#00F5FF] group-hover:scale-110 transition-transform" size={32} />
              <span className="text-2xl md:text-4xl font-mono font-bold text-white tracking-wider">
                {number}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
