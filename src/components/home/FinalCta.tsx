'use client';

import { Button } from '@/components/ui/Button';
import { practice } from '@/content/practice';
import { trackEvent } from '@/lib/analytics';

export function FinalCta() {
  return (
    <section className="bg-practice-blue text-white">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <h2 className="font-display text-h2">Ready to Book Your Eye Test?</h2>
        <p className="mx-auto mt-5 max-w-prose text-white/85">
          Choose a time that suits you, or call the practice and our team will help find the
          right appointment.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            href="/book"
            variant="onDark"
            fullWidthMobile
            onClick={() => trackEvent('hero_booking_cta_click', { location: 'final_cta' })}
          >
            Book Your Eye Test
          </Button>
          <Button
            href={practice.phone.href}
            variant="ghost"
            fullWidthMobile
            className="border-2 border-white/60 text-white hover:bg-white/10"
            onClick={() => trackEvent('telephone_link_click', { location: 'final_cta' })}
          >
            Call {practice.phone.display}
          </Button>
        </div>
      </div>
    </section>
  );
}
