import React from 'react';

export const Marquee = () => {
  const logos = ["GoHighLevel", "HubSpot", "Salesforce", "Twilio", "Calendly", "Zapier", "Make", "n8n", "Google Calendar", "Stripe", "Pipedrive", "Zoho CRM"];
  
  return (
    <section className="py-12 border-y border-white/5 bg-[#111118]/50 overflow-hidden">
      <div className="text-center text-sm font-medium text-[#9CA3AF] mb-8">
        Trusted by 200+ businesses. Integrates with your stack.
      </div>
      <div className="relative w-full flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 px-8">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 text-xl font-syne font-bold text-white/30 hover:text-white/60 transition-colors">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
