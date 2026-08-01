import React from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    tag: "Guide",
    title: "How AI Receptionists Are Replacing Traditional Front Desks in 2025",
    excerpt: "Discover how businesses are cutting receptionist costs by 80% while improving customer satisfaction scores.",
    readTime: "5 min read",
    date: "March 2025",
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    tag: "Case Study",
    title: "The True Cost of a Missed Business Call (It's More Than You Think)",
    excerpt: "A single missed call costs the average business $1,200 in lifetime customer value. Here's the math.",
    readTime: "4 min read",
    date: "February 2025",
    color: "bg-purple-500/20 text-purple-400"
  },
  {
    tag: "Comparison",
    title: "Inbound vs Outbound AI Calls — Which Does Your Business Need?",
    excerpt: "Not all AI calling is created equal. We break down which approach fits your growth stage.",
    readTime: "6 min read",
    date: "January 2025",
    color: "bg-cyan-500/20 text-cyan-400"
  }
];

export const BlogTeasers = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="blog">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">From The voicePapa Blog</h2>
        <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
          Insights, guides, and news from the world of AI voice agents.
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-16">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="h-48 bg-gradient-to-br from-[#0A0A0F] to-[#1a1a2e] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-cyan)_0%,_transparent_50%)]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-1 bg-[#00F5FF]/20 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="p-8">
              <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 ${post.color}`}>
                {post.tag}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#00F5FF] transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-[#9CA3AF] pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>
                <button className="text-[#00F5FF] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-4 rounded-full border border-white/10 hover:border-[#00F5FF]/50 transition-colors font-bold">
          View All Articles →
        </button>
      </div>
    </section>
  );
};
