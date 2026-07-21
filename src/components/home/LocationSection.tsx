'use client';

import { Section, SectionHeading } from '@/components/ui/Section';
import { practice } from '@/content/practice';
import { IconPin, IconPhone, IconClock } from '@/components/ui/icons';
import { trackEvent } from '@/lib/analytics';

export function LocationSection() {
  return (
    <Section tone="muted">
      <SectionHeading eyebrow="Find us" title="Plan Your Visit" />
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex gap-4">
            <IconPin width={22} height={22} className="mt-0.5 shrink-0 text-practice-blue" />
            <div>
              <p className="font-semibold text-ink-900">{practice.name}</p>
              <address className="not-italic text-ink-700">
                {practice.address.line1}
                <br />
                {practice.address.town}
                <br />
                {practice.address.postcode}
              </address>
              <a
                href={practice.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('directions_click')}
                className="mt-2 inline-block font-semibold text-practice-blue-dark underline underline-offset-4"
              >
                Get directions
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <IconPhone width={22} height={22} className="mt-0.5 shrink-0 text-practice-blue" />
            <div>
              <a
                href={practice.phone.href}
                onClick={() => trackEvent('telephone_link_click', { location: 'plan_visit' })}
                className="font-semibold text-practice-blue-dark"
              >
                {practice.phone.display}
              </a>
              <p className="text-ink-700">Questions before booking? Call our team.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <IconClock width={22} height={22} className="mt-0.5 shrink-0 text-practice-blue" />
            <div>
              <p className="font-semibold text-ink-900">Opening hours</p>
              <ul className="text-ink-700">
                {practice.openingHours.map((row) => (
                  <li key={row.day} className="flex justify-between gap-6 sm:w-64">
                    <span>{row.day}</span>
                    <span>{row.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-1 text-xs text-ink-500">
                Hours may vary on bank holidays — please call to confirm.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl2 shadow-card">
          <iframe
            title={`Map showing ${practice.name} at ${practice.address.full}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(practice.mapEmbedQuery)}&output=embed`}
            className="h-full min-h-[280px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
