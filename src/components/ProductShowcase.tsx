import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: "4L Resin Kit",
    description: "Clear Casting Resin With Hardener",
    price: "£42.48",
    image: "/9.png"
  },
  {
    id: 2,
    name: "1L Resin Kit",
    description: "UV Resistant, 35 Minute Work Time",
    price: "£16.98",
    image: "/10.png"
  }
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 px-8 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Shop the Formulas</h2>
          <p className="text-zinc-400 max-w-lg mx-auto">Every project has a perfect match. Find yours among our signature blends.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.article 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <motion.div 
                animate={{ y: index % 2 === 0 ? [0, -8, 0] : [0, 8, 0] }}
                transition={{ duration: 4.5 + index, repeat: Infinity, ease: "easeInOut" }}
                className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative border-[10px] border-primary shadow-lg"
              >
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={product.image} 
                  alt={`${product.name} - ${product.description}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <button className="bg-primary text-white w-full py-3 rounded-full font-bold">
                    Quick Shop
                  </button>
                </div>
              </motion.div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                  <p className="text-sm text-zinc-400">{product.description}</p>
                </div>
                <span className="text-lg font-bold text-tertiary-fixed">{product.price}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
