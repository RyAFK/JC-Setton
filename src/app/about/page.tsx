import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { testimonials } from '@/content/practice';

export const metadata: Metadata = {
  title: 'About J.C. Setton Opticians',
  description:
    'J.C. Setton Opticians is an independent, family-run practice in West Wickham offering personal, thorough eye care.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Settons"
        title="An Independent, Family-Run Practice"
        intro="As an independent optician, we have the flexibility to recommend what’s genuinely right for you — not a one-size-fits-all approach."
      />

      <Section>
        <SectionHeading
          title="Our approach"
          intro="Our optometrists and dispensing opticians take the time to understand your vision, eye health and everyday visual needs, and explain findings and recommendations in straightforward language."
        />
      </Section>

      <Section tone="muted" id="testimonials">
        <SectionHeading eyebrow="Patient experiences" title="What Our Patients Say" />
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.quote} className="rounded-xl2 bg-white p-6 shadow-card">
              <p className="text-[17px] leading-relaxed text-ink-900">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-ink-500">— {t.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </Section>
    </>
  );
}
