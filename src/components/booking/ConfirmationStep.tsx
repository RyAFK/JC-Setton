import { Button } from '@/components/ui/Button';
import { IconCheck } from '@/components/ui/icons';
import { practice } from '@/content/practice';

type Props = {
  reference: string;
  summary: {
    typeName: string;
    date: string;
    time: string;
    name: string;
  };
};

export function ConfirmationStep({ reference, summary }: Props) {
  const formattedDate = new Date(`${summary.date}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div role="status">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-practice-teal-light text-practice-teal">
        <IconCheck width={28} height={28} />
      </span>
      <h2 className="mt-5 font-display text-h2 text-ink-900">
        Your Appointment Request Has Been Received
      </h2>
      <p className="mt-3 max-w-prose text-body text-ink-700">
        Thank you, {summary.name}. Our team will review your request and confirm the appointment
        by email or telephone.
      </p>

      <dl className="mt-6 max-w-sm space-y-2 rounded-xl2 border border-black/10 bg-practice-cream p-5 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="font-semibold text-ink-900">Appointment</dt>
          <dd className="text-right text-ink-700">{summary.typeName}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="font-semibold text-ink-900">Requested date</dt>
          <dd className="text-right text-ink-700">{formattedDate}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="font-semibold text-ink-900">Requested time</dt>
          <dd className="text-right text-ink-700">{summary.time}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="font-semibold text-ink-900">Reference</dt>
          <dd className="text-right text-ink-700">{reference}</dd>
        </div>
      </dl>

      <p className="mt-6 max-w-prose text-sm text-ink-700">
        This is a request, not yet a confirmed appointment — we’ll be in touch shortly to confirm
        the time. If your symptoms are urgent or your vision has changed suddenly, please contact
        the practice directly on{' '}
        <a href={practice.phone.href} className="font-semibold text-practice-teal-dark underline">
          {practice.phone.display}
        </a>
        .
      </p>

      <div className="mt-8">
        <Button href="/">Return to homepage</Button>
      </div>
    </div>
  );
}
