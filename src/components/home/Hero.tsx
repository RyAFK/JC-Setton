'use client';

import { Button } from '@/components/ui/Button';
import { LensChartGraphic } from '@/components/HeroVisual';
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
    <section className="relative isolate overflow-hidden bg-practice-cream">
      {/* Backdrop graphic — bleeds off the right edge on large screens only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 opacity-90 lg:block xl:-right-16 xl:h-[640px] xl:w-[640px]"
      >
        <LensChartGraphic className="h-full w-full" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-practice-cream via-practice-cream/75 to-transparent lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-28">
        <div className="max-w-xl">
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

        {/* Contained graphic — shown in place of the backdrop below the lg breakpoint */}
        <div className="mt-10 flex justify-center lg:hidden">
          <LensChartGraphic className="h-64 w-64 sm:h-72 sm:w-72" />
        </div>
      </div>
    </section>
  );
}
