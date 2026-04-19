import { motion } from 'motion/react';

// Using Lucide equivalents for Material Symbols
import { Sun, Wind, Sparkles, ArrowRight } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Engineered for Perfection</h2>
            <p className="text-zinc-600 max-w-md">Crystal Clear Epoxy Resin – Deep pour, bubble-free formula for glass-like clarity. Ideal for art, tables, casting and flower preservation projects.</p>
          </div>
          <a className="text-primary font-bold flex items-center gap-2 group" href="#">
            View All Specs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group bg-white shadow-sm"
          >
            <div className="z-10">
              <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-4">Deep Pour Technology</span>
              <h3 className="text-5xl font-extrabold mb-4 tracking-tight">2 Part Epoxy Resin</h3>
              <p className="text-zinc-600 text-lg mb-8 max-w-sm">Easy 1:1 mix resin and hardener. Self-levelling, durable, and beginner-friendly for perfect results every time.</p>
              <a href="#products" className="inline-block px-6 py-3 rounded-full font-semibold bg-primary text-white hover:bg-primary/90 transition-colors">
                Learn More
              </a>
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 w-[35%] md:w-1/2 aspect-square opacity-100 transition-opacity rounded-xl overflow-hidden border-[8px] md:border-[10px] border-primary shadow-lg"
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://i.ibb.co/7x4rKGc8/7.png" 
                alt="Deep pour detail"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-tertiary-fixed rounded-xl p-8 relative overflow-hidden flex items-center shadow-sm"
          >
            <div className="w-1/2">
              <h3 className="text-4xl font-extrabold text-on-tertiary-fixed mb-2 tracking-tight">UV Resistant & Safe</h3>
              <p className="text-on-tertiary-fixed-variant text-lg">Non-toxic, low odour and crystal clear. Cures hard, glossy and yellowing-resistant for long-lasting professional results.</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <Sun size={120} className="text-on-tertiary-fixed/20 fill-current" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-surface-container-highest rounded-xl p-8 shadow-sm"
          >
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Wind className="text-primary" size={28} />
            </div>
            <h4 className="text-2xl font-extrabold mb-2 tracking-tight">Resin Craft Kit</h4>
            <p className="text-base text-zinc-600">All-in-one set for DIY resin art, perfect for gifts, home décor, jewellery and creative hobby projects.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-primary/10 rounded-xl p-8 shadow-sm"
          >
            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="text-primary" size={28} />
            </div>
            <h4 className="text-2xl font-extrabold mb-2 tracking-tight">Auto-Leveling</h4>
            <p className="text-base text-zinc-600">A glass-like finish with zero effort every single pour.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
