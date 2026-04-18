import { Palette } from 'lucide-react';
import { motion } from 'motion/react';

export default function Process() {
  return (
    <section id="process" className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full aspect-[4/5] bg-surface-container-high asymmetric-border-xl overflow-hidden z-10 relative"
            >
              <video 
                className="w-full h-full object-cover" 
                src="https://58webdesign.co.uk/artwork/poxyresin/epoxy.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
              />
            </motion.div>
            <div className="absolute -bottom-12 -right-12 bg-white p-8 rounded-xl shadow-xl max-w-xs z-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Palette size={20} className="text-primary" />
                </div>
                <span className="font-bold text-sm">Artist Highlight</span>
              </div>
              <p className="italic text-sm text-zinc-600">"PoxyResin changed how I work. The flow is incredibly intuitive, allowing me to focus on the color, not the bubbles."</p>
              <p className="mt-4 text-xs font-bold">— Elena Rossi, Fluid Artist</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold tracking-tight leading-tight mb-8">
              Crafted for <span className="text-primary">Creator</span> Confidence.
            </h2>
            <div className="space-y-12">
              {[
                { num: "01", title: "Measurements", text: "Measure out equal amounts of A & B in a clean container." },
                { num: "02", title: "Mix", text: "Slowly stir for 3-5 minutes until liquid becomes clear." },
                { num: "03", title: "Personal Touch", text: "Add any colours or powder additives." },
                { num: "04", title: "Create", text: "Pour into desired mould or surface." }
              ].map((step, index) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="text-3xl font-black text-zinc-200">{step.num}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-zinc-600">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
