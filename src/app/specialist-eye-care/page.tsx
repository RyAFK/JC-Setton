import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { practice } from '@/content/practice';

export const metadata: Metadata = {
  title: 'Specialist Eye Care in West Wickham',
  description:
    'Specialist contact lens fitting for complex prescriptions and keratoconus, plus urgent eye concerns, at J.C. Setton Opticians.',
  alternates: { canonical: '/specialist-eye-care' },
};

export default function SpecialistEyeCarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialist eye care"
        title="Specialist Contact Lenses"
        intro="Personalised fitting for complex prescriptions, keratoconus and therapeutic lens requirements."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="A dedicated specialist contact lens clinic"
              intro="Alongside everyday soft and gas-permeable lenses, our specialist clinic supports patients with more complex fitting needs, including keratoconus and therapeutic lenses."
            />
            <Button href="/book?type=contact-lens">Arrange a Contact-Lens Consultation</Button>
          </div>
          <div>
            <SectionHeading
              title="Urgent Eye Concerns"
              intro="Sudden symptoms, discomfort or changes in vision are best assessed over the phone first so we can advise on the most appropriate next step."
            />
            <a
              href={practice.phone.href}
              className="font-semibold text-practice-teal-dark underline underline-offset-4"
            >
              Get Help With an Eye Concern — call {practice.phone.display}
            </a>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Also available"
          title="Coloured Overlay Assessments"
          intro="Coloured overlay assessments are available to help identify visual stress sometimes associated with reading difficulties. Ask our team for more information at your appointment."
        />
      </Section>
    </>
  );
}
