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
    <figure className="w-56 shrink-0 rounded-2xl bg-white border border-stone-100 shadow-sm px-5 py-4">
      <div className="flex gap-0.5 mb-2.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-xs text-stone-600 leading-relaxed mb-3">
        &ldquo;{body}&rdquo;
      </blockquote>
      <figcaption className="text-[11px] font-semibold text-stone-400 tracking-wide">
        {flag} {name}
      </figcaption>
    </figure>
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

      {/* 3D perspective container with 4 vertical marquee columns */}
      <div className="relative flex h-[32rem] w-full flex-row items-center justify-center gap-3 overflow-hidden [perspective:500px]">
        <div
          className="flex flex-row items-start gap-3"
          style={{
            transform:
              'translateX(-60px) translateZ(-80px) rotateX(15deg) rotateY(-8deg) rotateZ(15deg)',
          }}
        >
          {/* Column 1 — down */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:28s]">
            {reviews.map((r) => <ReviewCard key={r.name + '1'} {...r} />)}
          </Marquee>

          {/* Column 2 — up */}
          <Marquee vertical reverse pauseOnHover repeat={3} className="[--duration:32s]">
            {reviews.map((r) => <ReviewCard key={r.name + '2'} {...r} />)}
          </Marquee>

          {/* Column 3 — down */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:26s]">
            {reviews.map((r) => <ReviewCard key={r.name + '3'} {...r} />)}
          </Marquee>

          {/* Column 4 — up, hidden on small screens */}
          <Marquee vertical reverse pauseOnHover repeat={3} className="[--duration:30s] hidden md:flex">
            {reviews.map((r) => <ReviewCard key={r.name + '4'} {...r} />)}
          </Marquee>
        </div>

        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#faf7f2] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#faf7f2] to-transparent" />
      </div>
    </section>
  );
}
