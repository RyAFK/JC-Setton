'use client';

import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { testimonials } from '@/content/practice';
import { trackEvent } from '@/lib/analytics';

export function Testimonials() {
  return (
    <Section tone="muted" id="testimonials">
      <SectionHeading
        eyebrow="Patient experiences"
        title="What Our Patients Say"
        align="center"
      />
      <div className="grid gap-8 sm:grid-cols-3">
        {testimonials.map((t, index) => (
          <Reveal key={t.quote} index={index}>
            <blockquote className="flex h-full flex-col justify-between rounded-xl2 bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-[17px] leading-relaxed text-ink-900">“{t.quote}”</p>
              <footer className="mt-5 text-sm font-medium text-ink-500">
                — {t.attribution}
                {t.appointmentType && <span className="block">{t.appointmentType}</span>}
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href="/about#testimonials"
          onClick={() => trackEvent('testimonial_link_click')}
          className="font-semibold text-practice-blue-dark underline underline-offset-4"
        >
          Read more patient reviews
        </a>
      </div>
    </Section>
  );
}
