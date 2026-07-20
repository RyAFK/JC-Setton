import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IconCheck } from '@/components/ui/icons';
import { practice } from '@/content/practice';

export const metadata: Metadata = {
  title: 'Eye Tests in West Wickham',
  description:
    'Comprehensive eye examinations at J.C. Setton Opticians, West Wickham — vision, eye health and retinal imaging in one thorough appointment.',
  alternates: { canonical: '/eye-tests' },
};

const items = [
  'A review of your vision and prescription.',
  'Eye-pressure measurement.',
  'Retinal photography.',
  'Peripheral vision assessment.',
  'Checks for signs associated with glaucoma, cataracts and macular degeneration.',
  'Personal recommendations based on your work, lifestyle and visual needs.',
];

export default function EyeTestsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Eye tests"
        title="More Than a Sight Test"
        intro="Your appointment is designed to check both your vision and the health of your eyes — explained clearly, at your pace."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="What a routine eye examination may include" />
            <p className="text-[15px] text-ink-500">
              The exact content of your examination depends on your individual needs and is not a
              guarantee of specific findings.
            </p>
          </div>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck width={20} height={20} className="mt-0.5 shrink-0 text-practice-teal" />
                <span className="text-[15px] text-ink-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Advanced technology"
          title="Retinal Imaging"
          intro="Where clinically appropriate, digital retinal photography lets your optometrist examine and record the inside of your eye, supporting a more detailed assessment and comparison at future visits."
        />
      </Section>

      <Section tone="teal" className="text-center">
        <h2 className="font-display text-h2">Book a Comprehensive Eye Examination</h2>
        <p className="mx-auto mt-3 max-w-prose text-white/85">
          Choose a convenient time online, or call the practice on {practice.phone.display}.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="/book?type=routine" variant="onDark">
            Book Your Eye Test
          </Button>
        </div>
      </Section>
    </>
  );
}
