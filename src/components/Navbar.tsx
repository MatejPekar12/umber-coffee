'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-white border-b border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-playfair text-2xl font-bold tracking-[0.2em] text-stone-900">
            UMBER
          </a>

          <div className="hidden md:flex items-center gap-9 text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-stone-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#order"
              className="text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              Order Now
            </a>
          </div>

          <button
            className="md:hidden text-stone-800"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-16 px-8 flex flex-col gap-8"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-playfair text-3xl text-stone-800 border-b border-stone-100 pb-6"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setMobileOpen(false)}
              className="mt-auto mb-10 self-start text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-3 bg-stone-900 text-white"
            >
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
