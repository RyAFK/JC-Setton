import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { brands } from '@/content/practice';

export const metadata: Metadata = {
  title: 'Glasses & Contact Lenses in West Wickham',
  description:
    'Designer glasses, sunglasses, sports eyewear and contact lens fitting at J.C. Setton Opticians, West Wickham.',
  alternates: { canonical: '/glasses-contact-lenses' },
};

export default function GlassesContactLensesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Eyewear"
        title="Glasses and Contact Lenses"
        intro="A considered range of frames and lenses, chosen with your prescription, face shape and lifestyle in mind."
      />

      <Section>
        <SectionHeading
          eyebrow="Designer eyewear"
          title="Glasses and Sunglasses From Trusted Brands"
          intro="Our dispensing team helps you find frames that suit your face, prescription and budget."
        />
        <ul className="flex flex-wrap gap-x-10 gap-y-4 text-lg font-semibold text-ink-700">
          {brands.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-500">
          Full range available in practice — call us to check current stock for a specific brand.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Sports"
          title="Sports Eyewear"
          intro="A selection of sports eyewear is available, with or without a prescription, for an active lifestyle."
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Contact lenses"
          title="Contact Lens Fitting"
          intro="For new wearers, existing wearers and specialist prescriptions — including our complex contact lens clinic for keratoconus and therapeutic requirements."
        />
        <Button href="/book?type=contact-lens">Arrange a Contact-Lens Consultation</Button>
      </Section>
    </>
  );
}
