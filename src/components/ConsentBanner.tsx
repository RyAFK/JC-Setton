'use client';

import { useEffect, useState } from 'react';
import { getConsent, setConsent } from '@/lib/analytics';

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="consent-copy"
      className="fixed inset-x-0 bottom-[76px] z-50 border-t border-black/10 bg-ink-900 text-white shadow-card lg:bottom-0"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p id="consent-copy" className="text-sm text-white/85">
          We use cookies to understand how visitors use this site and improve it. No clinical or
          personal appointment details are collected. You can change your choice at any time.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => {
              setConsent('declined');
              setVisible(false);
            }}
            className="min-h-[44px] rounded-full border border-white/30 px-4 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-focus"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => {
              setConsent('accepted');
              setVisible(false);
            }}
            className="min-h-[44px] rounded-full bg-practice-accent px-4 text-sm font-semibold text-ink-900 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
