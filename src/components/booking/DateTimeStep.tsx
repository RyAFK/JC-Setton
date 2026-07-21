'use client';

import { useMemo } from 'react';
import { getSlotsForDate } from '@/lib/mockAvailability';
import { Button } from '@/components/ui/Button';

type Props = {
  date: string;
  time: string | null;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onBack: () => void;
  onContinue: () => void;
};

function toMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

function toMaxDate() {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  return d.toISOString().slice(0, 10);
}

export function DateTimeStep({ date, time, onDateChange, onTimeChange, onBack, onContinue }: Props) {
  const minDate = useMemo(toMinDate, []);
  const maxDate = useMemo(toMaxDate, []);
  const slots = date ? getSlotsForDate(date) : [];
  const closedDay = date.length > 0 && slots.length === 0;

  return (
    <div>
      <h2 className="font-display text-h3 text-ink-900">Choose a date and time</h2>
      <p className="mt-2 text-[15px] text-ink-700">
        Available times shown are illustrative — our team will confirm your exact slot by email or
        phone.
      </p>

      <div className="mt-6 max-w-xs">
        <label htmlFor="appointment-date" className="block text-sm font-semibold text-ink-900">
          Preferred date
        </label>
        <input
          id="appointment-date"
          type="date"
          required
          min={minDate}
          max={maxDate}
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="mt-2 min-h-[48px] w-full rounded-md border-2 border-black/15 px-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-focus"
        />
      </div>

      {closedDay && (
        <p role="status" className="mt-4 text-sm font-medium text-ink-900">
          We’re closed on Sundays — please choose another date, or{' '}
          <a href="tel:+442087771106" className="underline">
            call the practice
          </a>
          .
        </p>
      )}

      {slots.length > 0 && (
        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-ink-900">Available times</legend>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {slots.map((slot) => (
              <button
                key={slot}
                type="button"
                aria-pressed={time === slot}
                onClick={() => onTimeChange(slot)}
                className={`min-h-[44px] rounded-md border-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-focus ${
                  time === slot
                    ? 'border-practice-blue bg-practice-blue text-white'
                    : 'border-black/15 text-ink-900 hover:border-practice-blue'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <div className="mt-8 flex gap-3">
        <Button variant="secondary" onClick={onBack} type="button">
          Back
        </Button>
        <Button onClick={onContinue} type="button" disabled={!date || !time}>
          Continue
        </Button>
      </div>
    </div>
  );
}
