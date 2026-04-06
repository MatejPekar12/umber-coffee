'use client';
import { motion } from 'motion/react';

const stats = [
  { value: '47+', label: 'Origins' },
  { value: '6', label: 'Years Roasting' },
  { value: '12', label: 'Partner Farms' },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
  };
}

export function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Stats — single column on mobile, 3 cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 md:gap-12 mb-16 md:mb-32 border-b border-stone-100 pb-16 md:pb-28">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} {...fadeUp(i * 0.12)} className="flex flex-col items-start">
              <span className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-stone-900 leading-none tracking-tight">
                {stat.value}
              </span>
              <span className="mt-3 text-[11px] tracking-[0.22em] uppercase text-stone-400 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Brand text */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-end">
          <motion.div {...fadeUp(0)}>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-5 font-medium">Our Philosophy</p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
              Every cup tells<br />
              <span className="italic font-normal">the story of its farm.</span>
            </h2>
          </motion.div>
          <motion.div {...fadeUp(0.15)}>
            <p className="text-stone-500 text-base leading-[1.8] max-w-md mt-6 md:mt-0">
              At Umber, we believe great coffee begins long before the brew. We work
              directly with small-holder farms across Ethiopia, Colombia, and Guatemala,
              paying above fair-trade prices and investing in their communities. Each
              roast is crafted in small batches to highlight the unique terroir of every
              origin—so your morning cup carries a passport of flavour from seed to sip.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
