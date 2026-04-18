import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem('poxy_cookies_accepted_v5');
    if (!isAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('poxy_cookies_accepted_v5', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[90]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            
            <div className="bg-primary/5 p-3 rounded-xl">
              <Cookie size={24} className="text-primary" />
            </div>

            <div className="flex-1">
              <h4 className="text-sm font-bold text-zinc-900 mb-1">We use cookies</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                By clicking "Accept", you agree to our use of cookies to enhance your experience and analyze site traffic.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-zinc-900 text-white rounded-lg text-xs font-bold hover:bg-zinc-800 transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
