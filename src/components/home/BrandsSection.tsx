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
      <ul className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-lg font-semibold text-ink-700">
        {brands.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>
      <p className="mt-8 text-center text-sm text-ink-500">
        Full range available in practice — call us to check current stock for a specific brand.
      </p>
    </Section>
  );
}
