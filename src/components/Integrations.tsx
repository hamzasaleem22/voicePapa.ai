import React from 'react';

export const Integrations = () => {
  const logos = [
    "GoHighLevel", "HubSpot", "Salesforce", "Zoho CRM",
    "Google Calendar", "Calendly", "Stripe", "Twilio",
    "Zapier", "Make", "n8n", "Pipedrive",
    "Slack", "Notion", "Google Sheets", "REST API"
  ];

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Plugs Into Everything You Already Use</h2>
        <p className="text-lg md:text-xl text-[#9CA3AF]">Native integrations. No complex setup. Just connect and go.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {logos.map((logo, i) => (
          <div key={i} className="glass-card h-24 flex items-center justify-center grayscale hover:grayscale-0 hover:border-[#00F5FF]/30 transition-all duration-300 cursor-pointer">
            <span className="font-syne font-bold text-lg text-white/70">{logo}</span>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-[#9CA3AF] mb-6">Don't see your tool? We support any webhook-compatible platform.</p>
        <button className="text-[#00F5FF] font-bold hover:underline">View All Integrations →</button>
      </div>
    </section>
  );
};
