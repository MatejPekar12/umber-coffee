import Image from 'next/image';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const IMAGE_SRC = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80';

export function ContainerScrollSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Mobile: flat image */}
      <div className="block md:hidden w-full px-4 py-10">
        <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-4 font-medium text-center">
          Our Origin
        </p>
        <h2 className="font-playfair text-3xl font-bold text-stone-900 leading-tight text-center mb-6">
          Every cup tells{' '}
          <em className="font-normal italic">the story of its farm.</em>
        </h2>
        <img
          src={IMAGE_SRC}
          alt="Barista preparing pour over coffee"
          className="w-full rounded-2xl object-cover h-64"
        />
      </div>

      {/* Desktop: 3D scroll card */}
      <div className="hidden md:block">
        <ContainerScroll
          titleComponent={
            <div className="mb-4 md:mb-8">
              <p className="text-[11px] tracking-[0.3em] uppercase text-stone-400 mb-5 font-medium">
                Our Origin
              </p>
              <h2 className="font-playfair text-4xl md:text-6xl font-bold text-stone-900 leading-tight">
                Every cup tells{' '}
                <br className="hidden md:block" />
                <em className="font-normal italic">the story of its farm.</em>
              </h2>
            </div>
          }
        >
          <Image
            src={IMAGE_SRC}
            alt="Barista preparing pour over coffee"
            width={1400}
            height={800}
            className="mx-auto rounded-2xl object-cover h-full w-full object-center"
            draggable={false}
            unoptimized
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
