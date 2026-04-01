import React, { useState } from 'react';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'Growth',
    requestType: 'Consultation',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ 
            name: '', 
            email: '', 
            phone: '', 
            package: 'Growth',
            requestType: 'Consultation',
            message: ''
          });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-[#0A0A0F] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,245,255,0.1)]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-[#9CA3AF] hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-[#00F5FF]/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#00F5FF]" />
                  </motion.div>
                  <h2 className="text-3xl font-syne font-bold mb-4">Request Received!</h2>
                  <p className="text-[#9CA3AF]">We've sent the details to our team. We'll be in touch at hamzasaleem15793@gmail.com shortly.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-syne font-bold mb-2">Book Your <span className="text-gradient-cyan">AI Demo</span></h2>
                    <p className="text-[#9CA3AF]">Experience the future of business communication.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">Full Name</label>
                      <input 
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00F5FF]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">Gmail Address</label>
                      <input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@gmail.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00F5FF]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">Phone Number (with Country Code)</label>
                      <input 
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 234 567 8900"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00F5FF]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">Select Your Package</label>
                      <select 
                        value={formData.package}
                        onChange={(e) => setFormData({...formData, package: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00F5FF]/50 transition-colors appearance-none"
                      >
                        <option value="Starter" className="bg-[#0A0A0F]">Starter Plan ($97/mo)</option>
                        <option value="Growth" className="bg-[#0A0A0F]">Growth Plan ($297/mo)</option>
                        <option value="Enterprise" className="bg-[#0A0A0F]">Enterprise Plan (Custom)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">Request Type</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['Consultation', 'Meeting', 'Booking'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({...formData, requestType: type})}
                            className={`py-2 px-1 rounded-xl text-xs font-bold transition-all border ${
                              formData.requestType === type 
                                ? 'bg-[#00F5FF] text-black border-[#00F5FF]' 
                                : 'bg-white/5 text-[#9CA3AF] border-white/10 hover:border-white/20'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">Message / Requirements</label>
                      <textarea 
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your needs..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00F5FF]/50 transition-colors resize-none"
                      />
                    </div>

                    <button 
                      disabled={status === 'loading'}
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#00F5FF] text-black font-bold flex items-center justify-center gap-2 hover:bg-[#00D5DD] transition-all disabled:opacity-50 mt-4"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <>
                          Submit Request <Send size={18} />
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                    )}
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
