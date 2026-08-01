import React, { useState } from 'react';

export const ROICalculator = () => {
  const [volume, setVolume] = useState(500);
  const [duration, setDuration] = useState(4);
  const [cost, setCost] = useState(8);
  
  const currentCost = volume * duration * cost;
  const aiCost = volume * duration * 0.08; // $0.08 per min
  const monthlySavings = currentCost - aiCost;
  const annualSavings = monthlySavings * 12;

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <section className="py-16 md:py-24 bg-[#111118]/50 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Calculate Your Savings</h2>
          <p className="text-lg md:text-xl text-[#9CA3AF]">See how much you could save by switching to voicePapa.ai.</p>
        </div>
        
        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-medium text-[#9CA3AF]">Monthly Call Volume</label>
                  <span className="font-bold text-white">{volume.toLocaleString()}</span>
                </div>
                <input type="range" min="100" max="10000" step="100" value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
              </div>
              
              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-medium text-[#9CA3AF]">Avg Call Duration (min)</label>
                  <span className="font-bold text-white">{duration}</span>
                </div>
                <input type="range" min="1" max="15" step="1" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
              </div>
              
              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-medium text-[#9CA3AF]">Current Cost Per Call ($)</label>
                  <span className="font-bold text-white">${cost}</span>
                </div>
                <input type="range" min="1" max="30" step="1" value={cost} onChange={(e) => setCost(Number(e.target.value))} />
              </div>
            </div>
            
            <div className="bg-black/50 rounded-2xl p-8 border border-white/10 flex flex-col justify-center">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[#9CA3AF]">
                  <span>Current Monthly Cost:</span>
                  <span className="line-through">{formatCurrency(currentCost)}</span>
                </div>
                <div className="flex justify-between text-[#9CA3AF]">
                  <span>voicePapa.ai Cost:</span>
                  <span className="text-white">{formatCurrency(aiCost)}</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-medium">💰 Monthly Savings:</span>
                  <span className="text-3xl font-bold text-[#00F5FF]">{formatCurrency(monthlySavings)}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-medium">📅 Annual Savings:</span>
                  <span className="text-3xl font-bold text-[#8B5CF6]">{formatCurrency(annualSavings)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-4 rounded-full bg-[#00F5FF] text-black font-bold hover:bg-[#00F5FF]/90 transition-colors w-full sm:w-auto">
              Lock In These Savings — Start Free Today →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
