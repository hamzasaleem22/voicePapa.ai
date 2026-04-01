import React, { useState, useEffect } from 'react';
import { Play, Pause, FileText } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const barberTranscript = [
  { speaker: "AI", text: "Hello! Thank you for calling Barbar. I'm here to help with your appointment today." },
  { speaker: "Customer", text: "Hi, I need a haircut for tomorrow." },
  { speaker: "AI", text: "I can certainly help with that. What phone number can we reach you at? USA numbers only, without the country code." },
  { speaker: "Customer", text: "555-0199." },
  { speaker: "AI", text: "Just to confirm, your number is: 5 5 5 — 0 1 9 9. Is that correct?" },
  { speaker: "Customer", text: "Yes, that's right." },
  { speaker: "AI", text: "Thank you. Let me check our availability for tomorrow. We have slots at 2 PM and 4 PM Pakistan Standard Time. Which works best for you?" },
  { speaker: "Customer", text: "2 PM is great. My name is John." },
  { speaker: "AI", text: "Perfect — let me confirm everything. John, appointment for tomorrow at 2 PM Pakistan Standard Time. Your contact number is 555-0199. Does everything look correct?" },
  { speaker: "Customer", text: "Yes, perfect." },
  { speaker: "AI", text: "Wonderful! Your appointment is all confirmed, John. We've sent a confirmation to your number. We look forward to seeing you at Barbar. Have a great day!" }
];

const towTruckTranscript = [
  { speaker: "AI", text: "Thank you for calling RoadReady, this is Alex. Are you in a safe location right now?" },
  { speaker: "Customer", text: "Yeah, I'm pulled over on the shoulder of I-95, but cars are flying by." },
  { speaker: "AI", text: "I'm with you. Take a breath — I need just a few details so I can send help right now. What is your name?" },
  { speaker: "Customer", text: "It's Michael." },
  { speaker: "AI", text: "Okay Michael, what is the best callback number for you? Are you calling from the United States?" },
  { speaker: "Customer", text: "Yes, it's 305-555-8214." },
  { speaker: "AI", text: "Let me confirm — that's 3... 0... 5... 5... 5... 5... 8... 2... 1... 4. Is that correct?" },
  { speaker: "Customer", text: "Yes, that's it." },
  { speaker: "AI", text: "Your full number is +1 3055558214 — is that correct?" },
  { speaker: "Customer", text: "Yes." },
  { speaker: "AI", text: "Can you briefly describe what happened?" },
  { speaker: "Customer", text: "My tire blew out and I don't have a spare." },
  { speaker: "AI", text: "I just sent you a text with a link. Please tap it right now and allow your location — it only takes 2 seconds and helps your driver find you much faster. Did you get the text and tap the link?" },
  { speaker: "Customer", text: "Got it, I just tapped it." },
  { speaker: "AI", text: "Perfect, Michael. I have your request in the system — flat tire, and I can see this is urgent. Our nearest available driver has been notified and you will receive another text shortly with a live tracking link so you can watch them drive to you. Is there anything else before I let you go?" },
  { speaker: "Customer", text: "No, that's all. Thank you." },
  { speaker: "AI", text: "Stay safe, Michael. Help is on the way. Goodbye!" }
];

const hotelReviewTranscript = [
  { speaker: "AI", text: "Hi John, this is a quick call from Grand Stay Hostel about your recent stay. It will only take a moment — is that okay?" },
  { speaker: "Customer", text: "Yeah, sure, I have a minute." },
  { speaker: "AI", text: "Great! How was the food quality and the service of our staff during your stay?" },
  { speaker: "Customer", text: "It was actually really good. The food was excellent and the staff was super friendly." },
  { speaker: "AI", text: "That is wonderful to hear, John! Thank you so much. I will send you a text message with a link to leave us a review on our website. We would really appreciate it." },
  { speaker: "Customer", text: "Okay, sounds good. I'll look out for it." },
  { speaker: "AI", text: "The message has been sent. Thank you and have a great day, John. Goodbye!" },
  { speaker: "Customer", text: "Thanks, bye." }
];

const dentalTranscript = [
  { speaker: "AI", text: "Thank you for calling Bright Smile Dental. How can we help you today? We offer general consultations, specialized treatments, and routine cleanings." },
  { speaker: "Customer", text: "Hi, I've been having some severe tooth pain and I think I need a treatment." },
  { speaker: "AI", text: "I'm so sorry to hear you're in pain. I will transfer you to our treatment specialist right now so they can help you. Please hold for just a moment." },
  { speaker: "AI Expert", text: "Hello, this is the dental treatment specialist. I understand you're experiencing some tooth pain. Could you tell me where the pain is located?" },
  { speaker: "Customer", text: "It's on the lower left side, and it started about two days ago." },
  { speaker: "AI Expert", text: "Thank you for sharing that. Let's get you in for an X-ray and evaluation immediately. Are you available tomorrow morning at 9 AM?" },
  { speaker: "Customer", text: "Yes, 9 AM works perfectly." },
  { speaker: "AI Expert", text: "Great, you're all set for 9 AM tomorrow. We look forward to helping you feel better soon!" }
];

export const AudioDemo = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [transcriptIndex, setTranscriptIndex] = useState(-1);
  const [showTranscript, setShowTranscript] = useState<number | null>(null);
  const [startFromIndex, setStartFromIndex] = useState<number>(0);
  
  const demos = [
    { title: "Barber Receptionist", tag: "Barbershop", icon: "✂️", duration: "1:15", transcript: barberTranscript },
    { title: "Tow Truck Dispatch", tag: "Roadside", icon: "🛻", duration: "1:42", transcript: towTruckTranscript },
    { title: "Hotel/Restaurant Reviewers", tag: "Hospitality", icon: "⭐", duration: "1:05", transcript: hotelReviewTranscript },
    { title: "Dental Triage & Transfer", tag: "Dental", icon: "🦷", duration: "1:30", transcript: dentalTranscript }
  ];

  useEffect(() => {
    let timeoutId: number;
    
    const speakNextLine = (index: number) => {
      if (playingId === null) return;
      
      const currentTranscript = demos[playingId].transcript;
      if (!currentTranscript || index >= currentTranscript.length) {
        setPlayingId(null);
        return;
      }
      
      setTranscriptIndex(index);
      
      const line = currentTranscript[index];
      const utterance = new SpeechSynthesisUtterance(line.text);
      
      // Try to find different voices for AI and Customer
      let voices = window.speechSynthesis.getVoices();
      
      const setVoiceAndSpeak = () => {
        voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          if (line.speaker === 'AI') {
            // Try to find a female voice for AI
            utterance.voice = voices.find(v => v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Google US English')) || voices[0];
            utterance.pitch = 1.1;
            utterance.rate = 1.0;
          } else if (line.speaker === 'AI Expert') {
            // Try to find a different, more authoritative voice for the Expert
            utterance.voice = voices.find(v => v.name.includes('UK') || v.name.includes('Daniel') || v.name.includes('Google UK English Male')) || voices[0];
            utterance.pitch = 0.85;
            utterance.rate = 0.95;
          } else {
            // Try to find a male voice for Customer
            utterance.voice = voices.find(v => v.name.includes('Male') || v.name.includes('Alex') || v.name.includes('Google UK English Male')) || voices[0];
            utterance.pitch = 0.9;
            utterance.rate = 0.95;
          }
        }
        
        utterance.onend = () => {
          // Add a small pause between speakers
          timeoutId = window.setTimeout(() => {
            if (playingId !== null) {
              speakNextLine(index + 1);
            }
          }, 500);
        };
        
        window.speechSynthesis.speak(utterance);
      };

      if (voices.length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          setVoiceAndSpeak();
          window.speechSynthesis.onvoiceschanged = null;
        };
      } else {
        setVoiceAndSpeak();
      }
    };

    if (playingId !== null && demos[playingId].transcript) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Need a slight delay to ensure voices are loaded in some browsers
      timeoutId = window.setTimeout(() => {
        speakNextLine(startFromIndex);
      }, 100);
    } else {
      window.speechSynthesis.cancel();
      setTranscriptIndex(-1);
    }
    
    return () => {
      window.clearTimeout(timeoutId);
      window.speechSynthesis.cancel();
    };
  }, [playingId, startFromIndex]);

  const togglePlay = (index: number) => {
    if (playingId === index) {
      setPlayingId(null);
    } else {
      setStartFromIndex(0);
      setPlayingId(index);
      if (demos[index].transcript) {
        setShowTranscript(index);
        setTranscriptIndex(0);
      }
    }
  };

  const handleSeek = (demoIndex: number, lineIndex: number) => {
    setStartFromIndex(lineIndex);
    setTranscriptIndex(lineIndex);
    if (playingId !== demoIndex) {
      setPlayingId(demoIndex);
      if (demos[demoIndex].transcript) {
        setShowTranscript(demoIndex);
      }
    }
  };

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6" id="demo">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Hear It For Yourself</h2>
        <p className="text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto">
          Real AI voice calls — not actors, not scripts. Just our agent in action.
        </p>
      </div>
      
      <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {demos.map((demo, i) => (
          <div key={i} className="glass-card p-6 border-t-2 border-t-[#00F5FF] flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{demo.icon}</span>
                <h3 className="font-bold">{demo.title}</h3>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-white/10 text-[#9CA3AF] whitespace-nowrap">{demo.tag}</span>
            </div>
            
            <div className="bg-black/50 rounded-xl p-4 mb-4 flex-1">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => togglePlay(i)}
                  className="w-10 h-10 shrink-0 rounded-full bg-[#00F5FF] text-black flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {playingId === i ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current ml-1" />}
                </button>
                <div className="flex-1 overflow-hidden">
                  {/* Fake waveform for visual */}
                  <div className="h-6 flex items-center gap-1 opacity-50">
                    {Array.from({length: 15}).map((_, j) => (
                      <div 
                        key={j} 
                        className={`flex-1 bg-[#00F5FF] rounded-full transition-all duration-100 ${playingId === i ? 'animate-waveform' : ''}`}
                        style={{ 
                          height: playingId === i ? '100%' : '20%',
                          animationDelay: `${j * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max={demo.transcript ? demo.transcript.length - 1 : 100}
                    value={playingId === i ? Math.max(0, transcriptIndex) : 0}
                    onChange={(e) => {
                      if (demo.transcript) {
                        handleSeek(i, parseInt(e.target.value));
                      }
                    }}
                    className="w-full mt-2 h-1 bg-white/20 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#00F5FF] [&::-webkit-slider-thumb]:rounded-full" 
                  />
                </div>
              </div>
              {/* <audio src="" /> // replace with real .mp3 */}
            </div>
            
            <div className="flex justify-between items-center text-sm text-[#9CA3AF]">
              {demo.transcript ? (
                <button 
                  onClick={() => setShowTranscript(showTranscript === i ? null : i)}
                  className="flex items-center gap-1 hover:text-[#00F5FF] transition-colors"
                >
                  <FileText size={14} /> {showTranscript === i ? 'Hide Script' : 'View Script'}
                </button>
              ) : (
                <div></div>
              )}
              <div>Duration: {demo.duration}</div>
            </div>

            {/* Transcript Area */}
            {demo.transcript && showTranscript === i && (
              <div className="mt-4 pt-4 border-t border-white/10 text-sm h-48 overflow-y-auto hide-scrollbar flex flex-col gap-3">
                {demo.transcript.map((line, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3 rounded-lg transition-all duration-500 ${
                      idx <= transcriptIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'
                    } ${
                      line.speaker === 'AI' 
                        ? 'bg-[#00F5FF]/10 border border-[#00F5FF]/20 ml-4' 
                        : line.speaker === 'AI Expert'
                        ? 'bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 ml-4'
                        : 'bg-white/5 border border-white/10 mr-4'
                    }`}
                  >
                    <span className={`font-bold text-xs mb-1 block ${
                      line.speaker === 'AI' 
                        ? 'text-[#00F5FF]' 
                        : line.speaker === 'AI Expert'
                        ? 'text-[#8B5CF6]'
                        : 'text-white/70'
                    }`}>
                      {line.speaker}
                    </span>
                    <p className="text-white/90 leading-relaxed">{line.text}</p>
                  </div>
                ))}
                {transcriptIndex === -1 && (
                  <div className="text-center text-white/40 italic mt-4">Press play to start the live script demo</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
