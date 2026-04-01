import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Switching to voicePapa.ai was the best decision we made this year. Our booking rate went up 70% in the first month.",
      author: "Rachel K.",
      role: "MedSpa Owner",
      stars: "⭐⭐⭐⭐⭐"
    },
    {
      quote: "The AI handles our after-hours calls flawlessly. Clients don't even know they're not talking to a human.",
      author: "David L.",
      role: "Real Estate Investor",
      stars: "⭐⭐⭐⭐⭐"
    },
    {
      quote: "We went from 30% missed calls to zero. The ROI is insane.",
      author: "Carlos M.",
      role: "HVAC Company Owner",
      stars: "⭐⭐⭐⭐⭐"
    },
    {
      quote: "Set up in one afternoon. By evening it was handling calls. Unreal.",
      author: "Priya S.",
      role: "Clinic Manager",
      stars: "⭐⭐⭐⭐⭐"
    },
    {
      quote: "Our front desk staff now focus on in-person clients only. Productivity is through the roof.",
      author: "Tom W.",
      role: "Law Firm Partner",
      stars: "⭐⭐⭐⭐⭐"
    },
    {
      quote: "The outbound follow-up campaign booked us 22 appointments in the first week. Paid for itself day one.",
      author: "Amanda J.",
      role: "Marketing Agency",
      stars: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="py-24 bg-[#111118]/30 border-y border-white/5 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
      </div>
      
      <div className="relative w-full flex overflow-hidden group">
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-stretch gap-6 px-3">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="glass-card p-8 w-[300px] md:w-[400px] flex-shrink-0 flex flex-col">
              <div className="text-sm mb-6">{t.stars}</div>
              <p className="text-lg leading-relaxed mb-8 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#8B5CF6] p-[2px]">
                  <div className="w-full h-full bg-black rounded-full"></div>
                </div>
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-[#9CA3AF]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
