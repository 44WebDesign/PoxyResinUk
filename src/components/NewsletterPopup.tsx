import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Sparkles } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const isDismissed = localStorage.getItem('poxy_newsletter_dismissed_v5');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // 2 second delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('poxy_newsletter_dismissed_v5', 'true');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, send to API
    console.log('Subscribing:', email);
    handleDismiss();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full flex flex-col md:flex-row relative"
          >
            <button 
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 hover:bg-zinc-100 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Visual Side */}
            <div className="w-full md:w-1/2 relative bg-[#b40065] overflow-hidden min-h-[200px]">
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="bg-[#b40065] p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-white" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">Limited Offer</span>
                  </div>
                  <h4 className="text-3xl font-black text-white leading-none">10% OFF</h4>
                  <p className="text-sm text-white font-medium mt-1">Your first resin kit</p>
                </div>
              </div>
              <img 
                src="/10.png"
                alt="Colorful resin" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/20 z-10" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold tracking-tight mb-2">Join the Studio</h2>
              <p className="text-zinc-600 mb-8 text-sm">
                Get weekly inspiration, advanced techniques, and a discount on your first pour.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input
                    type="email"
                    required
                    placeholder="artist@studio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all scale-100 active:scale-95"
                >
                  Claim My Discount
                </button>
              </form>
              
              <p className="mt-4 text-[10px] text-zinc-400 text-center uppercase tracking-widest">
                No spam. Only high-gloss inspiration.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
