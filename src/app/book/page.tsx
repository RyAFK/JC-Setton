import type { Metadata } from 'next';
import { BookingFlow } from '@/components/booking/BookingFlow';

export const metadata: Metadata = {
  title: 'Book an Appointment in West Wickham',
  description:
    'Book an eye examination or specialist appointment with J.C. Setton Opticians in West Wickham in a few simple steps.',
  alternates: { canonical: '/book' },
};

export default function BookPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-practice-gold">
          Book online
        </p>
        <h1 className="mt-2 font-display text-h1 text-ink-900">
          Book an Appointment in West Wickham
        </h1>
        <p className="mt-4 max-w-prose text-body text-ink-700">
          Choose your appointment type and preferred time. Our team will confirm your booking by
          email or phone.
        </p>

        <div className="mt-10">
          <BookingFlow initialTypeId={searchParams.type ?? null} />
        </div>
      </div>
    </section>
  );
}
