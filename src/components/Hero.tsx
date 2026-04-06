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
        preload="auto"
        {...{ 'webkit-playsinline': 'true' }}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        className="absolute inset-0"
      >
        <source src="/coffee-beans.mp4.mp4" type="video/mp4" />
      </video>

      {/* Subtle white overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center px-4 pt-20 pb-12 md:px-6 md:pt-24 md:pb-16">
        <div className="backdrop-blur-sm bg-white/40 rounded-2xl px-4 py-4 md:px-10 md:py-8 flex flex-col items-center w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.35em] uppercase text-stone-600 mb-5 md:mb-7 font-medium"
          >
            Specialty Coffee &nbsp;·&nbsp; Since 2018
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            className="font-playfair text-3xl leading-[1.1] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold md:leading-[1.08] tracking-tight text-stone-900 mb-4 md:mb-7"
          >
            Coffee Worth<br />
            <span className="italic font-normal">Waking Up For</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: 'easeOut' }}
            className="text-sm md:text-lg text-stone-600 mb-8 md:mb-11 max-w-xs md:max-w-sm leading-relaxed"
          >
            Single-origin beans, expertly roasted and brewed to order.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          >
            <a
              href="#menu"
              className="w-full sm:w-auto text-center bg-stone-900 text-white px-6 py-2.5 md:px-9 md:py-3.5 text-[10px] md:text-[11px] font-semibold tracking-[0.22em] uppercase hover:bg-stone-700 transition-colors duration-200"
            >
              Explore Menu
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto text-center border border-stone-700 text-stone-800 px-6 py-2.5 md:px-9 md:py-3.5 text-[10px] md:text-[11px] font-semibold tracking-[0.22em] uppercase hover:bg-stone-900/10 transition-colors duration-200"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
