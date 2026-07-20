'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ProgressIndicator } from '@/components/booking/ProgressIndicator';
import { AppointmentTypeStep } from '@/components/booking/AppointmentTypeStep';
import { DateTimeStep } from '@/components/booking/DateTimeStep';
import { ContactDetailsStep, type ContactDetails, type ContactErrors } from '@/components/booking/ContactDetailsStep';
import { ConfirmationStep } from '@/components/booking/ConfirmationStep';
import { appointmentTypes } from '@/content/practice';
import { trackEvent } from '@/lib/analytics';

const emptyContact: ContactDetails = { firstName: '', lastName: '', email: '', phone: '', notes: '' };

function validate(details: ContactDetails): ContactErrors {
  const errors: ContactErrors = {};
  if (!details.firstName.trim()) errors.firstName = 'Enter your first name.';
  if (!details.lastName.trim()) errors.lastName = 'Enter your last name.';
  if (!details.email.trim()) {
    errors.email = 'Enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
    errors.email = 'Enter a valid email address, e.g. name@example.com.';
  }
  if (!details.phone.trim()) {
    errors.phone = 'Enter a phone number so we can confirm your appointment.';
  } else if (!/^[0-9()+\-\s]{7,}$/.test(details.phone)) {
    errors.phone = 'Enter a valid phone number.';
  }
  return errors;
}

export function BookingFlow({ initialTypeId }: { initialTypeId: string | null }) {
  const [step, setStep] = useState(1);
  const [typeId, setTypeId] = useState<string | null>(
    initialTypeId && appointmentTypes.some((t) => t.id === initialTypeId) ? initialTypeId : null
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState<string | null>(null);
  const [contact, setContact] = useState<ContactDetails>(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const startedTracking = useRef(false);
  const completed = useRef(false);

  useEffect(() => {
    if (!startedTracking.current) {
      startedTracking.current = true;
      trackEvent('booking_started');
    }
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      if (!completed.current && (step > 1 || typeId)) {
        trackEvent('booking_abandoned', { step });
      }
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, typeId]);

  const selectedType = appointmentTypes.find((t) => t.id === typeId) ?? null;

  function selectType(id: string) {
    setTypeId(id);
    trackEvent('appointment_type_selected', { type: id });
    setStep(2);
  }

  function goToContactStep() {
    if (time) trackEvent('booking_datetime_selected', { date, time });
    trackEvent('booking_contact_stage_reached');
    setStep(3);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(contact);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      trackEvent('booking_validation_error', { fields: Object.keys(validationErrors).join(',') });
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appointmentType: typeId,
          date,
          time,
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          phone: contact.phone,
          notes: contact.notes,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again or call us.');
      }
      completed.current = true;
      setReference(data.reference);
      trackEvent('booking_completed', { type: typeId ?? 'unknown' });
      setStep(4);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'We couldn’t send your request. Please try again, or call us on 020 8777 1106.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <ProgressIndicator currentStep={step} />

      {step === 1 && <AppointmentTypeStep selectedId={typeId} onSelect={selectType} />}

      {step === 2 && (
        <DateTimeStep
          date={date}
          time={time}
          onDateChange={(d) => {
            setDate(d);
            setTime(null);
          }}
          onTimeChange={setTime}
          onBack={() => setStep(1)}
          onContinue={goToContactStep}
        />
      )}

      {step === 3 && (
        <>
          {submitError && (
            <p role="alert" className="mb-5 rounded-md bg-red-50 p-4 text-sm font-medium text-red-800">
              {submitError} If this keeps happening, please call us on{' '}
              <a href="tel:+442087771106" className="underline">
                020 8777 1106
              </a>
              .
            </p>
          )}
          <ContactDetailsStep
            details={contact}
            errors={errors}
            onChange={setContact}
            onBack={() => setStep(2)}
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        </>
      )}

      {step === 4 && reference && selectedType && time && (
        <ConfirmationStep
          reference={reference}
          summary={{
            typeName: selectedType.name,
            date,
            time,
            name: contact.firstName,
          }}
        />
      )}
    </div>
  );
}
