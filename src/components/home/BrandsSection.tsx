import { Section, SectionHeading } from '@/components/ui/Section';
import { brands } from '@/content/practice';

export function BrandsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Eyewear"
        title="Glasses and Sunglasses From Trusted Brands"
        intro="Alongside clinical care, our dispensing team helps you find frames that suit your face, prescription and budget."
        align="center"
      />

      {/* Real, accessible brand list for assistive tech — the scrolling row
          below is a visual/decorative duplicate and is hidden from it. */}
      <ul className="sr-only">
        {brands.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>

      <div className="group relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24"
        />

        <div
          aria-hidden="true"
          className="flex w-max animate-marquee gap-16 py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0 gap-16">
              {brands.map((brand) => (
                <span key={brand} className="whitespace-nowrap text-lg font-semibold text-ink-700">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-ink-500">
        Full range available in practice — call us to check current stock for a specific brand.
      </p>
    </Section>
  );
}
