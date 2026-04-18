import { motion } from 'motion/react';

const heroImage = '/6.png';
const pourImage = '/7.png';

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 z-10"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block px-4 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase mb-6"
          >
            Unleash the Flow
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8"
          >
            Where <span className="resin-gradient-text">Art</span> Meets Chemistry.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-zinc-600 max-w-xl mb-10 leading-relaxed"
          >
            Epoxy Resin Kit for Table Top | Deep Pour, No Bubble, UV Resistant, 35 Minute Work Time, Clear Casting Resin With Hardener Uk | Food Safe Craft Resin Art Kit For Adults
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#products" className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:shadow-lg transition-all scale-100 active:scale-95 inline-block text-center">
              Explore the Shop
            </a>
            <a href="#process" className="bg-white text-zinc-900 px-10 py-4 rounded-full font-bold border border-outline-variant/30 hover:bg-zinc-50 transition-all inline-block text-center">
              Watch the Process
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full aspect-square">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 -right-20 w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-20 border-[12px] border-primary"
            >
              <img 
                className="w-full h-full object-fill" 
                src={heroImage} 
                alt="Vibrant resin pour"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 left-4 w-2/3 aspect-square rounded-xl overflow-hidden border-[12px] border-surface z-30 shadow-xl"
            >
              <img 
                className="w-full h-full object-cover" 
                src={pourImage} 
                alt="Pouring resin"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0"></div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
