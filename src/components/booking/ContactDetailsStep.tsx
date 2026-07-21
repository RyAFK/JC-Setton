'use client';

import { type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

export type ContactDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

export type ContactErrors = Partial<Record<keyof ContactDetails, string>>;

type Props = {
  details: ContactDetails;
  errors: ContactErrors;
  onChange: (details: ContactDetails) => void;
  onBack: () => void;
  onSubmit: (e: FormEvent) => void;
  submitting: boolean;
};

export function ContactDetailsStep({ details, errors, onChange, onBack, onSubmit, submitting }: Props) {
  const field = (key: keyof ContactDetails, value: string) => onChange({ ...details, [key]: value });

  return (
    <form onSubmit={onSubmit} noValidate>
      <h2 className="font-display text-h3 text-ink-900">Your details</h2>
      <p className="mt-2 text-[15px] text-ink-700">
        We’ll use these details to confirm your appointment by email or phone.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FormField
          id="firstName"
          label="First name"
          autoComplete="given-name"
          value={details.firstName}
          error={errors.firstName}
          onChange={(v) => field('firstName', v)}
        />
        <FormField
          id="lastName"
          label="Last name"
          autoComplete="family-name"
          value={details.lastName}
          error={errors.lastName}
          onChange={(v) => field('lastName', v)}
        />
        <FormField
          id="email"
          label="Email address"
          type="email"
          autoComplete="email"
          value={details.email}
          error={errors.email}
          onChange={(v) => field('email', v)}
        />
        <FormField
          id="phone"
          label="Phone number"
          type="tel"
          autoComplete="tel"
          value={details.phone}
          error={errors.phone}
          onChange={(v) => field('phone', v)}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="notes" className="block text-sm font-semibold text-ink-900">
          Anything we should know? <span className="font-normal text-ink-500">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          value={details.notes}
          onChange={(e) => field('notes', e.target.value)}
          className="mt-2 w-full rounded-md border-2 border-black/15 p-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-focus"
        />
      </div>

      <p className="mt-4 text-sm text-ink-500">
        If your symptoms are urgent or your vision has changed suddenly, please call us on{' '}
        <a href="tel:+442087771106" className="font-semibold text-practice-blue-dark underline">
          020 8777 1106
        </a>{' '}
        instead of booking online.
      </p>

      <div className="mt-8 flex gap-3">
        <Button variant="secondary" type="button" onClick={onBack} disabled={submitting}>
          Back
        </Button>
        <Button type="submit" disabled={submitting} aria-busy={submitting}>
          {submitting ? 'Sending your request…' : 'Confirm booking request'}
        </Button>
      </div>
    </form>
  );
}

function FormField({
  id,
  label,
  value,
  error,
  onChange,
  type = 'text',
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink-900">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 min-h-[48px] w-full rounded-md border-2 px-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-focus ${
          error ? 'border-red-600' : 'border-black/15'
        }`}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
