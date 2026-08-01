import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 5D Animated Audio Wave Logo */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Glowing background pulse */}
        <div className="absolute inset-0 bg-[#00F5FF] rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute inset-0 bg-[#8B5CF6] rounded-full blur-lg opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* 5D SVG Waveform */}
        <svg width="48" height="48" viewBox="0 0 48 48" className="relative z-10 overflow-visible">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#00F5FF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <filter id="waveGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <style>
            {`
              @keyframes wave-1 { 0%, 100% { height: 12px; y: 18px; } 50% { height: 36px; y: 6px; } }
              @keyframes wave-2 { 0%, 100% { height: 18px; y: 15px; } 50% { height: 42px; y: 3px; } }
              @keyframes wave-3 { 0%, 100% { height: 10px; y: 19px; } 50% { height: 30px; y: 9px; } }
              @keyframes wave-4 { 0%, 100% { height: 24px; y: 12px; } 50% { height: 46px; y: 1px; } }
              @keyframes wave-5 { 0%, 100% { height: 14px; y: 17px; } 50% { height: 38px; y: 5px; } }
              
              .w-bar-1 { animation: wave-1 1.1s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
              .w-bar-2 { animation: wave-2 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
              .w-bar-3 { animation: wave-4 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
              .w-bar-4 { animation: wave-3 0.9s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
              .w-bar-5 { animation: wave-5 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
              .w-bar-6 { animation: wave-2 1.0s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
              .w-bar-7 { animation: wave-1 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
            `}
          </style>
          
          <g filter="url(#waveGlow)" fill="url(#waveGrad)">
            <rect x="4" y="18" width="4" height="12" rx="2" className="w-bar-1" />
            <rect x="10" y="15" width="4" height="18" rx="2" className="w-bar-2" />
            <rect x="16" y="12" width="4" height="24" rx="2" className="w-bar-3" />
            <rect x="22" y="19" width="4" height="10" rx="2" className="w-bar-4" />
            <rect x="28" y="17" width="4" height="14" rx="2" className="w-bar-5" />
            <rect x="34" y="15" width="4" height="18" rx="2" className="w-bar-6" />
            <rect x="40" y="18" width="4" height="12" rx="2" className="w-bar-7" />
          </g>
        </svg>
      </div>
      
      {/* Typography */}
      <div className="font-syne font-extrabold tracking-tight flex items-baseline">
        <span className="text-2xl text-white">voicePapa</span>
        <span className="text-2xl text-[#00F5FF]">.ai</span>
      </div>
    </div>
  );
};
