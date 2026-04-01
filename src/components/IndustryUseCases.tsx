import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Home, 
  Utensils, 
  Scale, 
  Wrench, 
  ShoppingCart,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Stethoscope,
    headline: 'HIPAA-Compliant AI for Medical Practices',
    bullets: [
      'Book & confirm patient appointments automatically',
      'Answer FAQs about hours, insurance, directions',
      'Route urgent calls to on-call staff immediately'
    ],
    cta: 'See Healthcare Demo →',
    flow: {
      steps: [
        { label: 'Patient Calls', color: 'bg-white/10' },
        { label: 'AI Triage', color: 'bg-[#00F5FF]/20' },
        { label: 'Booked / Routed', color: 'bg-[#8B5CF6]/20' }
      ]
    }
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Home,
    headline: 'Never Lose a Hot Lead Again',
    bullets: [
      'Qualify inbound buyer/seller leads 24/7',
      'Schedule property viewings automatically',
      'Follow up with cold leads via outbound calls'
    ],
    cta: 'See Real Estate Demo →',
    flow: {
      steps: [
        { label: 'Lead Calls', color: 'bg-white/10' },
        { label: 'AI Qualification', color: 'bg-[#00F5FF]/20' },
        { label: 'Viewing Scheduled', color: 'bg-[#8B5CF6]/20' }
      ]
    }
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    icon: Utensils,
    headline: 'Handle 100% of Reservation Calls',
    bullets: [
      'Take reservations and update your booking system',
      'Answer menu, hours, and location questions',
      'Send confirmation and reminder calls automatically'
    ],
    cta: 'See Restaurant Demo →',
    flow: {
      steps: [
        { label: 'Hungry Caller', color: 'bg-white/10' },
        { label: 'AI Reservation', color: 'bg-[#00F5FF]/20' },
        { label: 'Table Confirmed', color: 'bg-[#8B5CF6]/20' }
      ]
    }
  },
  {
    id: 'law-firms',
    name: 'Law Firms',
    icon: Scale,
    headline: 'Professional Intake. Zero Missed Consultations.',
    bullets: [
      'Screen and qualify potential clients',
      'Book consultation appointments',
      'Capture contact info and case details'
    ],
    cta: 'See Legal Demo →',
    flow: {
      steps: [
        { label: 'Potential Client', color: 'bg-white/10' },
        { label: 'AI Intake', color: 'bg-[#00F5FF]/20' },
        { label: 'Consult Booked', color: 'bg-[#8B5CF6]/20' }
      ]
    }
  },
  {
    id: 'home-services',
    name: 'Home Services',
    icon: Wrench,
    headline: "Book More Jobs While You're On The Job",
    bullets: [
      'Answer service inquiry calls instantly',
      'Schedule and dispatch appointments',
      'Send automated follow-up and review requests'
    ],
    cta: 'See Service Demo →',
    flow: {
      steps: [
        { label: 'Service Request', color: 'bg-white/10' },
        { label: 'AI Dispatch', color: 'bg-[#00F5FF]/20' },
        { label: 'Technician Sent', color: 'bg-[#8B5CF6]/20' }
      ]
    }
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    icon: ShoppingCart,
    headline: 'Scale Customer Support Without Hiring',
    bullets: [
      'Handle order status and tracking questions',
      'Process returns and exchange requests',
      'Escalate complex issues to human agents'
    ],
    cta: 'See E-Commerce Demo →',
    flow: {
      steps: [
        { label: 'Customer Inquiry', color: 'bg-white/10' },
        { label: 'AI Support', color: 'bg-[#00F5FF]/20' },
        { label: 'Issue Resolved', color: 'bg-[#8B5CF6]/20' }
      ]
    }
  }
];

export const IndustryUseCases = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeIndustry = industries.find(ind => ind.id === activeTab)!;

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="industries">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Built For Your Industry</h2>
        <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
          Select your industry to see how voicePapa.ai works for you.
        </p>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-12 hide-scrollbar gap-4 md:justify-center">
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => setActiveTab(ind.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all whitespace-nowrap ${
              activeTab === ind.id
                ? 'bg-[#00F5FF]/10 border-[#00F5FF] text-[#00F5FF]'
                : 'bg-white/5 border-white/10 text-[#9CA3AF] hover:border-white/20'
            }`}
          >
            <ind.icon size={18} />
            <span className="font-bold">{ind.name}</span>
          </button>
        ))}
      </div>

      <div className="glass-card p-8 md:p-12 min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">{activeIndustry.headline}</h3>
              <ul className="space-y-4 mb-8">
                {activeIndustry.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#9CA3AF]">
                    <CheckCircle2 className="text-[#00F5FF] shrink-0 mt-1" size={20} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#00F5FF] font-bold hover:gap-4 transition-all">
                {activeIndustry.cta} <ArrowRight size={20} />
              </button>
            </div>

            <div className="relative">
              <div className="bg-black/40 rounded-2xl p-8 border border-white/10">
                <div className="flex flex-col gap-8 items-center">
                  {activeIndustry.flow.steps.map((step, i) => (
                    <React.Fragment key={i}>
                      <div className={`w-full max-w-[240px] p-4 rounded-xl border border-white/10 text-center font-bold ${step.color}`}>
                        {step.label}
                      </div>
                      {i < activeIndustry.flow.steps.length - 1 && (
                        <div className="h-8 w-px bg-gradient-to-b from-[#00F5FF] to-[#8B5CF6]"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00F5FF]/10 blur-2xl rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#8B5CF6]/10 blur-2xl rounded-full"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
