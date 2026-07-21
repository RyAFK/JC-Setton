import { appointmentTypes } from '@/content/practice';
import { AppointmentTypeCard } from '@/components/AppointmentTypeCard';
import { practice } from '@/content/practice';

type Props = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function AppointmentTypeStep({ selectedId, onSelect }: Props) {
  return (
    <div>
      <h2 className="font-display text-h3 text-ink-900">What kind of appointment do you need?</h2>
      <p className="mt-2 text-[15px] text-ink-700">
        Select an option below. You can review the details before confirming anything.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {appointmentTypes.map((type) => (
          <AppointmentTypeCard
            key={type.id}
            type={type}
            as="button"
            selected={selectedId === type.id}
            onSelect={() => onSelect(type.id)}
          />
        ))}
      </div>

      <p className="mt-6 text-[15px] text-ink-700">
        Not sure what to book?{' '}
        <a href={practice.phone.href} className="font-semibold text-practice-blue-dark underline">
          Call our team on {practice.phone.display}
        </a>
        .
      </p>
    </div>
  );
}
