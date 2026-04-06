import { InfiniteSlider } from '@/components/ui/infinite-slider';

const brands = [
  'Intelligentsia',
  'Blue Bottle',
  'Stumptown',
  'Onyx',
  'Counter Culture',
  'Heart',
  'Verve',
  'Ritual',
];

export function BrandsStrip() {
  return (
    <section className="py-5 border-y border-stone-100 bg-white overflow-hidden">
      <InfiniteSlider speed={18} gap={56} speedOnHover={8}>
        {brands.map((brand) => (
          <span
            key={brand}
            className="flex items-center gap-14 text-[11px] font-medium tracking-[0.25em] uppercase text-stone-400 whitespace-nowrap select-none"
          >
            {brand}
            <span className="text-stone-200 text-base">·</span>
          </span>
        ))}
      </InfiniteSlider>
    </section>
  );
}
