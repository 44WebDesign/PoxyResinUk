import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

function PinterestIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function AmazonIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.936 15.324c-.816.552-1.92.816-3.048.816-1.296 0-2.4-.336-3.144-.912-.768-.6-1.128-1.44-1.128-2.376 0-1.728 1.296-2.952 3.84-2.952.552 0 1.056.048 1.536.12v-.24c0-.84-.48-1.32-1.512-1.32-.888 0-1.824.336-2.496.84l-.576-1.104c.888-.672 2.136-1.056 3.456-1.056 2.136 0 3.36 1.104 3.36 3.144v3.48c0 .936.36 1.344.72 1.344.168 0 .336-.048.48-.12l.432 1.056c-.312.24-.768.384-1.248.384-.888 0-1.152-.6-1.152-1.104zm-3.024-1.416c.888 0 1.512-.216 1.848-.552.312-.312.48-.744.48-1.248v-.168c-.384-.048-.792-.072-1.248-.072-1.488 0-2.208.648-2.208 1.584 0 .648.432 1.056 1.128 1.056zm1.32 3.528c-2.544 1.512-6.192 2.256-9.192 2.256-1.224 0-2.424-.12-3.576-.336l-.312 1.152c1.248.24 2.568.384 3.888.384 3.312 0 7.32-.84 10.056-2.52l-.864-.936zm1.128-.84c.144.144.216.336.144.528-.144.408-.672.576-1.176.384-.504-.192-.816-.672-.672-1.08.072-.192.24-.312.432-.336.528-.072 1.08.288 1.272.504z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_40px_rgba(26,28,28,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-zinc-900">poxyresin</div>
        
        <div className="hidden md:flex items-center gap-8 text-sm tracking-tight font-medium">
          <a className="text-primary border-b-2 border-primary/30 pb-1 hover:text-primary transition-colors duration-300" href="#products">Shop</a>
          <a className="text-zinc-600 hover:text-primary transition-colors duration-300" href="#features">Features</a>
          <a className="text-zinc-600 hover:text-primary transition-colors duration-300" href="#process">Guides</a>
          <a className="text-zinc-600 hover:text-primary transition-colors duration-300" href="#testimonials">Reviews</a>
          <a className="text-zinc-600 hover:text-primary transition-colors duration-300" href="#signup">Contact</a>
        </div>

        <div className="flex items-center gap-6">
          <button aria-label="Visit our Facebook" className="scale-95 active:scale-90 transition-transform text-zinc-600 hover:text-primary">
            <Facebook size={20} />
          </button>
          <button aria-label="Visit our Instagram" className="scale-95 active:scale-90 transition-transform text-zinc-600 hover:text-primary">
            <Instagram size={20} />
          </button>
          <button aria-label="Visit our Pinterest" className="scale-95 active:scale-90 transition-transform text-zinc-600 hover:text-primary">
            <PinterestIcon size={20} />
          </button>
          <button aria-label="Shop on Amazon" className="scale-95 active:scale-90 transition-transform text-zinc-600 hover:text-primary">
            <AmazonIcon size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

