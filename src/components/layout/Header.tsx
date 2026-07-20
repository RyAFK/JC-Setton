'use client';

import Link from 'next/link';
import { useState } from 'react';
import { nav, practice } from '@/content/practice';
import { Button } from '@/components/ui/Button';
import { IconMenu, IconClose, IconPhone, IconPin } from '@/components/ui/icons';
import { trackEvent } from '@/lib/analytics';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 flex-col leading-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practice-gold rounded">
          <span className="font-display text-xl font-semibold text-practice-teal-dark sm:text-2xl">
            J.C. Setton
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-ink-500">
            Opticians · West Wickham
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 xl:block">
          <ul className="flex items-center gap-3 2xl:gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-ink-700 underline-offset-4 hover:text-practice-teal-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-gold rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a
            href={practice.phone.href}
            onClick={() => trackEvent('telephone_link_click', { location: 'header' })}
            aria-label={`Call us on ${practice.phone.display}`}
            title={practice.phone.display}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-ink-700 hover:bg-practice-teal-light hover:text-practice-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-gold"
          >
            <IconPhone width={20} height={20} />
          </a>
          <Button
            href="/book"
            className="whitespace-nowrap px-4 text-sm"
            onClick={() => trackEvent('header_booking_cta_click')}
          >
            Book Your Eye Test
          </Button>
        </div>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-ink-900 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-black/5 bg-white xl:hidden">
          <nav aria-label="Mobile primary">
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-black/5">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[52px] items-center px-4 text-base font-medium text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-practice-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-2 px-4 py-4 text-sm text-ink-700">
            <p className="flex items-center gap-2 font-medium">
              <IconPin width={18} height={18} className="shrink-0 text-practice-teal" />
              {practice.address.full}
            </p>
            <a
              href={practice.phone.href}
              onClick={() => trackEvent('telephone_link_click', { location: 'mobile_menu' })}
              className="flex items-center gap-2 font-semibold text-practice-teal-dark"
            >
              <IconPhone width={18} height={18} className="shrink-0" />
              {practice.phone.display}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
