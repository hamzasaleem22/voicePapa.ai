import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How realistic does the AI voice sound?", a: "Our AI uses the latest neural text-to-speech voices that are virtually indistinguishable from a human. You can choose from 10+ voice personalities to match your brand." },
    { q: "Do I need to replace my current phone system?", a: "No. voicePapa.ai works with call forwarding from any existing number. No hardware changes needed." },
    { q: "What happens if the AI can't answer a question?", a: "The agent will gracefully transfer the call to a human, take a message, or schedule a callback — whatever you configure." },
    { q: "Is my data secure and private?", a: "Yes. All calls are encrypted. We are HIPAA and GDPR compliant. You own your data and recordings at all times." },
    { q: "How long does setup take?", a: "Most businesses are live within 1–2 hours. Our onboarding wizard guides you step by step." },
    { q: "Can the AI handle multiple calls at once?", a: "Yes — unlimited simultaneous calls with no degradation in quality or response time." },
    { q: "What languages does voicePapa.ai support?", a: "We currently support 20+ languages including English, Spanish, French, German, Arabic, Portuguese, and Mandarin." },
    { q: "Is there a free trial?", a: "Yes — all plans include a 7-day free trial with no credit card required." }
  ];

  return (
    <section className="py-16 md:py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card overflow-hidden">
            <button 
              className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-bold text-lg">{faq.q}</span>
              <Plus className={`transition-transform duration-300 text-[#00F5FF] shrink-0 ${openIndex === i ? 'rotate-45' : ''}`} />
            </button>
            <div 
              className={`px-6 text-[#9CA3AF] transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
