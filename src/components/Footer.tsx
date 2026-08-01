import React from 'react';
import { Logo } from './Logo';

export const Footer = ({ onOpenDemo }: { onOpenDemo: () => void }) => {
  return (
    <footer className="bg-[#0A0A0F] border-t-2 border-t-[#00F5FF]/50 pt-16 md:pt-24 pb-12 text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div>
          <Logo className="mb-6" />
          <p className="mb-8 text-sm leading-relaxed">
            Answering calls so you don't have to.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00F5FF] hover:text-black transition-colors">𝕏</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00F5FF] hover:text-black transition-colors">in</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00F5FF] hover:text-black transition-colors">YT</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00F5FF] hover:text-black transition-colors">IG</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">Inbound Call Handling</a></li>
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">Outbound Campaigns</a></li>
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">AI Receptionist</a></li>
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">Appointment Booking</a></li>
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">Intelligent Call Transfer</a></li>
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">Integrations</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-[#00F5FF] transition-colors">Trust Center</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6">Contact</h4>
          <ul className="space-y-4 text-sm mb-8">
            <li><a href="mailto:hamzasaleem15793@gmail.com" className="hover:text-[#00F5FF] transition-colors">hamzasaleem15793@gmail.com</a></li>
          </ul>
          <h4 className="font-bold text-white mb-6">DM us on WhatsApp</h4>
          <ul className="space-y-4 text-sm mb-8">
            <li><a href="https://wa.me/923359519916" className="hover:text-[#00F5FF] transition-colors">+92 335 9519916</a></li>
            <li><a href="https://wa.me/12097620044" className="hover:text-[#00F5FF] transition-colors">+1 209 762 0044</a></li>
            <li><a href="https://wa.me/923035070436" className="hover:text-[#00F5FF] transition-colors">+92 303 5070436</a></li>
            <li><a href="https://wa.me/923110278856" className="hover:text-[#00F5FF] transition-colors">+92 311 0278856</a></li>
          </ul>
          <button onClick={onOpenDemo} className="px-6 py-3 rounded-full border border-[#00F5FF] text-[#00F5FF] font-bold hover:bg-[#00F5FF]/10 transition-colors w-full">
            Book a Demo
          </button>
        </div>
      </div>      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div>© 2025 voicePapa.ai. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Status Page</a>
        </div>
      </div>
    </footer>
  );
};
