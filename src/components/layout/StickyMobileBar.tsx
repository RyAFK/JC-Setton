'use client';

import { practice } from '@/content/practice';
import { IconPhone } from '@/components/ui/icons';
import { trackEvent } from '@/lib/analytics';

export function StickyMobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-black/10 bg-white/97 backdrop-blur supports-[backdrop-filter]:bg-white/90 lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-stretch gap-2 px-3 py-2">
        <a
          href={practice.phone.href}
          onClick={() => trackEvent('telephone_link_click', { location: 'sticky_bar' })}
          className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border-2 border-practice-teal text-[15px] font-semibold text-practice-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-gold"
        >
          <IconPhone width={19} height={19} />
          Call Us
        </a>
        <a
          href="/book"
          onClick={() => trackEvent('sticky_mobile_booking_cta_click')}
          className="flex min-h-[48px] flex-[1.4] items-center justify-center rounded-full bg-practice-teal text-[15px] font-semibold text-white hover:bg-practice-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-gold"
        >
          Book an Eye Test
        </a>
      </div>
    </div>
  );
}
