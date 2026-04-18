import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="signup" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-5 z-0"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-5xl font-extrabold mb-8">Ready to pour your masterpiece?</h2>
        <p className="text-xl text-zinc-600 mb-12">
          Join 50,000+ creators using poxyresin to bring their visions to life. Sign up for our newsletter for tips, tricks, and early access to drops.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            className="flex-1 rounded-full px-6 py-4 bg-white border-none focus:ring-2 focus:ring-primary shadow-sm" 
            placeholder="Enter your email" 
            type="email" 
          />
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all">
            Get Inspired
          </button>
        </div>
      </motion.div>
    </section>
  );
}
