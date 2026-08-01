import React from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle, 
  Cloud, 
  Database, 
  FileText,
  ArrowRight
} from 'lucide-react';

const securityBadges = [
  { icon: ShieldCheck, title: "HIPAA Compliant", desc: "Built for healthcare data privacy." },
  { icon: Lock, title: "SOC2 Type II", desc: "Enterprise-grade security standards." },
  { icon: CheckCircle, title: "GDPR Ready", desc: "Compliant with EU data regulations." },
  { icon: Database, title: "256-bit Encryption", desc: "Data encrypted in transit and at rest." },
  { icon: Cloud, title: "99.9% Uptime SLA", desc: "Reliable infrastructure you can trust." },
  { icon: FileText, title: "Zero Data Retention", desc: "Optional mode for sensitive industries." }
];

export const TrustSecurity = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="security">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Enterprise-Grade Security. Built In.</h2>
        <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
          Your calls and data are protected at every layer.
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          {securityBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center hover:border-[#00F5FF]/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] flex items-center justify-center mb-4 border border-[#00F5FF]/20">
                <badge.icon size={24} />
              </div>
              <h3 className="font-bold text-sm mb-2">{badge.title}</h3>
              <p className="text-[10px] text-[#9CA3AF] leading-relaxed">{badge.desc}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">Built for Regulated Industries</h3>
          <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
            VoicePapa.ai is built for regulated industries. Every call is encrypted in transit and at rest. 
            We never sell your data. You own every recording and transcript. 
            Our infrastructure runs on enterprise-grade cloud with geo-redundancy.
          </p>
          <div className="space-y-4">
            <button className="flex items-center gap-2 text-[#00F5FF] font-bold hover:gap-4 transition-all">
              Trust Center <ArrowRight size={20} />
            </button>
            <button className="flex items-center gap-2 text-[#00F5FF] font-bold hover:gap-4 transition-all">
              Download Security Whitepaper <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
