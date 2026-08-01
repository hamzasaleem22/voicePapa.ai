import React, { useState, useEffect } from 'react';
import { Play, X, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export const VideoSection = () => {
  return (
    <section id="video" className="py-16 md:py-24 bg-[#111118]/50 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Admin Portal Video */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Admin Portal</h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto">Manage your AI agents and calls with ease.</p>
        </div>
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16">
          <iframe 
            src="https://www.loom.com/embed/1da7ba09fcaf4139b6f61e74f477f1ad?hide_owner=true&hide_share=true&hide_title=true&hide_vpl=true&hide_comments=true&hide_logo=true&hide_top_bar=true" 
            frameBorder="0" 
            allowFullScreen 
            className="w-full h-full"
            title="Admin Portal Demo"
          ></iframe>
        </div>

        {/* Product Demo Video */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">See voicePapa.ai In Action</h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto">Experience the future of AI dispatching with our product demo.</p>
        </div>
        
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe 
            src="https://www.loom.com/embed/7e31a576cc844ec0a6352bf26f5d9a79?sid=8b39d107-7591-4c6e-a34f-25c777421868&hide_owner=true&hide_share=true&hide_title=true&hide_vpl=true&hide_comments=true&hide_logo=true&hide_top_bar=true" 
            frameBorder="0" 
            allowFullScreen 
            className="w-full h-full"
            title="VoicePapa AI Demo"
          ></iframe>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">⚡ See live call handling</div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">📊 Watch dashboard tour</div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">🔧 Setup walkthrough</div>
        </div>
      </div>
    </section>
  );
};
