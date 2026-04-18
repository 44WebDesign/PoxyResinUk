import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Fluid Artist",
    content: "The clarity is completely unmatched. I've tried dozens of brands, but Poxy resin actually delivers that 'liquid glass' look without the micro-bubbles. It has transformed my workflow.",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Furniture Designer",
    content: "Perfect for my deep-pour river tables. The low-heat formula means I can pour up to 2 inches at once without worrying about cracking or yellowing. A game changer for my studio.",
    rating: 5,
    image: "https://picsum.photos/seed/david/100/100"
  },
  {
    id: 3,
    name: "Emma L.",
    role: "Jewelry Maker",
    content: "As a beginner, I was terrified of ruining my pieces. The 1:1 mix is so simple, and the self-leveling feature is pure magic. My coasters and pendants look professional every time.",
    rating: 5,
    image: "https://picsum.photos/seed/emma/100/100"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-4">Community Love</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Trusted by 50,000+ Creators</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            From professional studios to weekend hobbyists, see why artists choose PoxyResin for their most important projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-surface-container-low p-8 rounded-2xl shadow-sm border border-zinc-100 relative group"
            >
              <div className="absolute top-6 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={60} className="text-primary" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-zinc-700 mb-8 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-md"
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div>
                  <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating background elements for polish */}
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-tertiary-fixed/5 rounded-full blur-3xl z-0"></div>
      </div>
    </section>
  );
}
