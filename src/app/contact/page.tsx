import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { LocationSection } from '@/components/home/LocationSection';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact J.C. Setton Opticians',
  description:
    'Contact J.C. Setton Opticians in West Wickham — address, phone number, opening hours and directions.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        intro="Have a question before booking, or need to change an existing appointment? Our team is happy to help."
      />
      <LocationSection />
      <Section className="text-center">
        <SectionHeading title="Ready to book?" align="center" />
        <Button href="/book">Book Your Eye Test</Button>
      </Section>
    </>
  );
}
