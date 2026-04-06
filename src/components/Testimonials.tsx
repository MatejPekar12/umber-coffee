'use client';
import { Marquee } from '@/components/ui/3d-testimonials';

const reviews = [
  { body: "Best espresso I've had outside of Italy", name: 'Marco R.', flag: '🇮🇹' },
  { body: 'My morning ritual, every single day', name: 'Sarah K.', flag: '🇺🇸' },
  { body: 'The pour over is absolutely incredible', name: 'James L.', flag: '🇬🇧' },
  { body: 'Finally a coffee shop that takes quality seriously', name: 'Nina P.', flag: '🇩🇪' },
  { body: 'Cold brew changed my life', name: 'Alex T.', flag: '🇦🇺' },
  { body: 'Cozy atmosphere, perfect beans', name: 'Lucie M.', flag: '🇫🇷' },
  { body: 'Worth every penny, outstanding quality', name: 'David S.', flag: '🇨🇦' },
  { body: 'Best kept secret in the city', name: 'Yuki H.', flag: '🇯🇵' },
  { body: 'I drive 30 minutes just for their espresso', name: 'Sofia B.', flag: '🇪🇸' },
];

function ReviewCard({ body, name, flag }: (typeof reviews)[number]) {
  return (
    <div className="w-72 shrink-0 rounded-2xl bg-white shadow-sm border border-stone-100 px-6 py-5 mx-2">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-stone-700 text-sm leading-relaxed mb-4">
        &ldquo;{body}&rdquo;
      </p>
      <p className="text-xs font-semibold text-stone-500 tracking-wide">
        {flag} {name}
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-[#faf7f2] py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4 font-medium">
          Guest Reviews
        </p>
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
          What our guests say
        </h2>
      </div>

      {/* Horizontal marquee row 1 — left to right */}
      <Marquee pauseOnHover repeat={2} className="[--duration:30s] [--gap:0px] mb-4">
        {reviews.map((r) => (
          <ReviewCard key={r.name} {...r} />
        ))}
      </Marquee>

      {/* Horizontal marquee row 2 — right to left */}
      <Marquee pauseOnHover reverse repeat={2} className="[--duration:34s] [--gap:0px]">
        {reviews.map((r) => (
          <ReviewCard key={r.name} {...r} />
        ))}
      </Marquee>
    </section>
  );
}
