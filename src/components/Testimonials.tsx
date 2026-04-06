'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';

const testimonials = [
  {
    name: 'Sofia Andersen',
    username: '@sofiaand',
    body: "Best pour-over I've had outside of Tokyo. The Ethiopian Yirgacheffe was absolutely floral and clean.",
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    name: 'James Whitfield',
    username: '@jwhitfield',
    body: "Umber's double ristretto is the reason I get out of bed. Thick, syrupy, perfect crema every time.",
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
  {
    name: 'Priya Nair',
    username: '@priyanair',
    body: "The cold brew is unlike anything I've tried. Low acid, silky smooth, and lasts me all afternoon.",
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Marco Ferretti',
    username: '@marcofer',
    body: 'A coffee shop that actually knows what single origin means. The Guatemala was a revelation.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Hana Kobayashi',
    username: '@hanakob',
    body: 'The space is minimal and warm, the music is perfect, and the V60 is brewed with such care.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Luca Bernardi',
    username: '@lucaber',
    body: 'I drove 45 minutes just for their house blend. Worth every mile. Will be back this weekend.',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Emma Svensson',
    username: '@emmasv',
    body: 'Umber sources directly from farms and you can taste the difference. Genuinely special coffee.',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    name: 'Rafael Ortiz',
    username: '@rafaort',
    body: "Never thought I'd be a coffee person but Umber converted me. The baristas actually explain the process.",
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
  {
    name: 'Ingrid Larsen',
    username: '@ingridl',
    body: "The seasonal menu is always surprising. Last month's natural process Colombia was mind-blowing.",
    img: 'https://randomuser.me/api/portraits/women/14.jpg',
  },
];

function TestimonialCard({
  img,
  name,
  username,
  body,
}: (typeof testimonials)[number]) {
  return (
    <Card className="w-64 border border-stone-100 shadow-none bg-white">
      <CardContent className="pt-5 pb-5 px-5">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-stone-100 text-stone-600 text-xs font-semibold">
              {name[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-stone-900 leading-tight">{name}</p>
            <p className="text-xs text-stone-400">{username}</p>
          </div>
        </div>
        <blockquote className="text-sm text-stone-600 leading-relaxed">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-14 md:mb-16">
        <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4 font-medium">
          What People Say
        </p>
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
          Regulars don't lie.
        </h2>
      </div>

      {/* 3D perspective container */}
      <div className="relative flex h-[28rem] md:h-[32rem] w-full flex-row items-center justify-center gap-3 overflow-hidden [perspective:600px]">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              'translateX(-80px) translateY(0px) translateZ(-80px) rotateX(18deg) rotateY(-8deg) rotateZ(18deg)',
          }}
        >
          {/* Column 1 — scrolls down */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:36s]">
            {testimonials.map((r) => (
              <TestimonialCard key={r.username} {...r} />
            ))}
          </Marquee>

          {/* Column 2 — scrolls up */}
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:32s]">
            {testimonials.map((r) => (
              <TestimonialCard key={r.username} {...r} />
            ))}
          </Marquee>

          {/* Column 3 — scrolls down, hidden on small screens */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:38s] hidden md:flex">
            {testimonials.map((r) => (
              <TestimonialCard key={r.username} {...r} />
            ))}
          </Marquee>
        </div>

        {/* Fade masks top and bottom */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
}
