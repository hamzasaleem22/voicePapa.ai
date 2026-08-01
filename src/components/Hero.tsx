import React from 'react';
import { Play } from 'lucide-react';

export const Hero = ({ onOpenPricing, onOpenDemo }: { onOpenPricing: () => void; onOpenDemo: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-[58%]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-cyan)]/30 text-[var(--color-cyan)] text-sm mb-6 animate-pulse-glow">
            <span>⚡</span> Now with Sub-300ms Response Time
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl leading-tight mb-6">
            Conversations That Convert.<br />
            At Infinite Scale.<br />
            <span className="text-gradient-cyan">Meet voicePapa.ai.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 max-w-xl">
            Handle inbound calls, book appointments, transfer to the right team — all without a single human receptionist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[var(--color-cyan)] text-black font-bold rounded-lg hover:bg-[#00D5DD] transition-colors animate-pulse-glow"
            >
              Watch Demo Videos
            </button>
            <button 
              onClick={onOpenPricing}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              View Pricing
            </button>
          </div>
          
          {/* 5D Animated Audio Wave below buttons */}
          <div className="flex items-center gap-3 mb-12 h-8">
            <span className="text-sm text-[#00F5FF] font-medium tracking-wider uppercase">Live Agent Active</span>
            <div className="flex items-center gap-[3px] h-full">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1 bg-gradient-to-t from-[#8B5CF6] to-[#00F5FF] rounded-full"
                  style={{
                    height: '100%',
                    animation: `soundwave ${0.4 + Math.random() * 0.6}s ease-in-out infinite alternate`,
                    animationDelay: `${Math.random() * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Pulsing Arrow */}
          <div className="flex items-center gap-2 text-[#00F5FF] font-bold animate-bounce">
            <span>Watch Demo Video Below</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-[var(--color-text-secondary)] mt-12">
            <div className="flex items-center gap-2"><span>🔒</span> HIPAA Compliant</div>
            <div className="flex items-center gap-2"><span>✅</span> SOC2 Certified</div>
            <div className="flex items-center gap-2"><span>🌍</span> 20+ Languages</div>
          </div>
        </div>
        
        <div className="w-full lg:w-[42%] relative">
          <div className="absolute inset-0 bg-[var(--color-violet)]/20 blur-[100px] rounded-full"></div>
          
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Waveform */}
            <div className="flex items-center gap-2 h-32">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="w-4 bg-[var(--color-cyan)] rounded-full"
                  style={{
                    height: `${Math.max(20, Math.random() * 100)}%`,
                    animation: `waveform ${1 + Math.random()}s ease-in-out infinite alternate`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-10 left-0 glass-card px-4 py-2 rounded-lg text-sm animate-[float_4s_ease-in-out_infinite]">
              10,000+ Calls / Day
            </div>
            <div className="absolute bottom-20 right-0 glass-card px-4 py-2 rounded-lg text-sm animate-[float_5s_ease-in-out_infinite_reverse]">
              99.9% Uptime
            </div>
            <div className="absolute top-1/2 -right-4 glass-card px-4 py-2 rounded-lg text-sm animate-[float_6s_ease-in-out_infinite]">
              ~280ms Latency
            </div>
            <div className="absolute bottom-10 left-10 glass-card px-4 py-2 rounded-lg text-sm animate-[float_4.5s_ease-in-out_infinite_reverse]">
              3x More Bookings
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes waveform {
          0% { height: 20%; }
          100% { height: 100%; }
        }
        @keyframes soundwave {
          0% { height: 15%; opacity: 0.4; filter: hue-rotate(0deg); }
          100% { height: 100%; opacity: 1; filter: hue-rotate(45deg); box-shadow: 0 0 10px #00F5FF; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};
