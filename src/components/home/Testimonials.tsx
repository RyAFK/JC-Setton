'use client';

import { Section, SectionHeading } from '@/components/ui/Section';
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
      <div className="grid gap-6 sm:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote
            key={t.quote}
            className="flex h-full flex-col justify-between rounded-xl2 bg-white p-6 shadow-card"
          >
            <p className="text-[17px] leading-relaxed text-ink-900">“{t.quote}”</p>
            <footer className="mt-4 text-sm font-medium text-ink-500">
              — {t.attribution}
              {t.appointmentType && <span className="block">{t.appointmentType}</span>}
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/about#testimonials"
          onClick={() => trackEvent('testimonial_link_click')}
          className="font-semibold text-practice-teal-dark underline underline-offset-4"
        >
          Read more patient reviews
        </a>
      </div>
    </Section>
  );
}
