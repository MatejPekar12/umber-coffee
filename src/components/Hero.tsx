'use client';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        className="absolute inset-0"
      >
        <source src="/coffee-beans.mp4.mp4" type="video/mp4" />
      </video>

      {/* Subtle white overlay so dark text stays readable */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center px-6 pt-24 pb-16">
        <div className="backdrop-blur-sm bg-white/40 rounded-2xl px-10 py-8 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-stone-600 mb-7 font-medium"
        >
          Specialty Coffee &nbsp;·&nbsp; Since 2018
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.08] tracking-tight text-stone-900 mb-7"
        >
          Coffee Worth<br />
          <span className="italic font-normal">Waking Up For</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: 'easeOut' }}
          className="text-base md:text-lg text-stone-600 mb-11 max-w-sm leading-relaxed"
        >
          Single-origin beans, expertly roasted<br className="hidden md:block" /> and brewed to order.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#menu"
            className="bg-stone-900 text-white px-9 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase hover:bg-stone-700 transition-colors duration-200"
          >
            Explore Menu
          </a>
          <a
            href="#about"
            className="border border-stone-700 text-stone-800 px-9 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase hover:bg-stone-900/10 transition-colors duration-200"
          >
            Our Story
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
