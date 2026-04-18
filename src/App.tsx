/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ProductShowcase from './components/ProductShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import CookieNotice from './components/CookieNotice';
import heroImageImport from './assets/hero.png';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-red-500 p-2 text-white text-center text-xs flex flex-wrap items-center justify-center gap-4">
        <span>Public JPG: <img src="/1.jpg" className="inline-block h-6" alt="Test" /></span>
        <span>Public MP4: <video src="/epoxy.mp4" className="inline-block h-6" muted autoPlay loop /></span>
        <span>Local PNG (Import): <img src={heroImageImport} className="inline-block h-6" alt="Test" /></span>
        <a href="/hero.png" download className="underline font-bold">Download hero.png</a>
        <a href="/test.txt" download className="underline font-bold">Download test.txt</a>
      </div>
      <NewsletterPopup />
      <CookieNotice />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Testimonials />
        <ProductShowcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

