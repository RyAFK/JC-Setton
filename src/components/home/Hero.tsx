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
      {/* Below xl: graphic sits as a faded watermark centred behind the text. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] sm:h-[440px] sm:w-[440px] xl:hidden"
      >
        <LensChartGraphic className="h-full w-full" />
      </div>

      {/* From xl: graphic bleeds off the right edge, with a scrim so the text keeps
          full contrast. This is the same breakpoint the header switches to its full
          desktop nav, so the hero and header never disagree about "desktop" vs "mobile". */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 opacity-90 xl:block"
      >
        <LensChartGraphic className="h-full w-full" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-practice-cream via-practice-cream/75 to-transparent xl:block"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 xl:py-28">
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
      </div>
    </section>
  );
}
