'use client';

import { Button } from '@/components/ui/Button';
import { HeroVisual } from '@/components/HeroVisual';
import { IconCheck } from '@/components/ui/icons';
import { practice } from '@/content/practice';
import { trackEvent } from '@/lib/analytics';

const reassurance = [
  'Independent practice',
  'Advanced retinal imaging',
  'Children’s eye care',
  'Specialist contact lenses',
];

export function Hero() {
  return (
    <section className="bg-practice-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-practice-gold">
            Independent Opticians in West Wickham
          </p>
          <h1 className="font-display text-h1 text-ink-900">
            Eye Care That Is Thorough, Personal and Never Rushed
          </h1>
          <p className="mt-5 max-w-prose text-body text-ink-700">
            From routine eye tests and advanced retinal imaging to children’s vision and
            specialist contact lenses, receive expert care tailored to your eyes, lifestyle and
            concerns.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/book"
              fullWidthMobile
              onClick={() => trackEvent('hero_booking_cta_click')}
            >
              Book Your Eye Test
            </Button>
            <Button
              href={practice.phone.href}
              variant="secondary"
              fullWidthMobile
              onClick={() => trackEvent('telephone_link_click', { location: 'hero' })}
            >
              Call {practice.phone.display}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-700">
            {reassurance.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <IconCheck width={16} height={16} className="shrink-0 text-practice-teal" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
