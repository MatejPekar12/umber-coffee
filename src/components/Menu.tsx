'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const menuItems = [
  {
    category: 'Espresso',
    name: 'Double Ristretto',
    description: 'Concentrated, syrupy, with notes of dark chocolate and dried cherry. Our house blend, pulled short for intensity.',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=85',
    alt: 'Espresso shot in a white cup',
  },
  {
    category: 'Pour Over',
    name: 'Single Origin V60',
    description: 'Bright and floral. An Ethiopian Yirgacheffe poured to order over 4 minutes—clarity in every note.',
    price: '$6.00',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85',
    alt: 'Pour over coffee being prepared',
  },
  {
    category: 'Cold Brew',
    name: '24-Hour Immersion',
    description: 'Steeped overnight in cold water, silky and low-acid. Smooth with hints of milk chocolate and walnut.',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=85',
    alt: 'Cold brew coffee over ice',
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
  };
}

export function Menu() {
  return (
    <section id="menu" className="bg-white py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4 font-medium">What We Brew</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              The Menu
            </h2>
          </div>
          <a
            href="#full-menu"
            className="self-start md:self-auto inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-stone-400 hover:text-stone-900 transition-colors duration-200"
          >
            View Full Menu <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              {...fadeUp(i * 0.12)}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 mb-7">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <p className="text-[10px] tracking-[0.28em] uppercase text-stone-400 font-medium mb-2">
                  {item.category}
                </p>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-playfair text-xl font-bold text-stone-900">
                    {item.name}
                  </h3>
                  <span className="font-playfair text-xl text-stone-900 font-bold ml-4 shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-stone-500 text-sm leading-[1.75] mb-6 flex-1">
                  {item.description}
                </p>
                <button className="self-start text-[11px] tracking-[0.22em] uppercase font-semibold text-stone-900 border-b border-stone-900 pb-0.5 hover:opacity-50 transition-opacity duration-200">
                  Order This
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
