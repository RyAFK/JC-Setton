import { type AppointmentType } from '@/content/practice';
import { IconChevronRight } from '@/components/ui/icons';

type Props = {
  type: AppointmentType;
  as?: 'link' | 'button';
  href?: string;
  onSelect?: () => void;
  selected?: boolean;
};

export function AppointmentTypeCard({ type, as = 'link', href, onSelect, selected }: Props) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-h3 text-ink-900">{type.name}</h3>
        <IconChevronRight
          width={20}
          height={20}
          className="mt-1 shrink-0 text-practice-blue transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </div>
      <p className="mt-2 text-[15px] text-ink-700">{type.description}</p>

      {type.callInsteadOf && (
        <p className="mt-4 rounded-md bg-practice-accent-tint px-3 py-2 text-sm font-medium text-ink-900">
          Please call us instead of booking online for this concern.
        </p>
      )}
    </>
  );

  const baseClasses = `group block rounded-xl2 border-2 p-8 text-left shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-focus motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
    selected ? 'border-practice-blue bg-practice-blue-tint' : 'border-transparent bg-white hover:border-practice-blue/40'
  }`;

  if (as === 'button') {
    return (
      <button type="button" onClick={onSelect} className={`w-full ${baseClasses}`} aria-pressed={selected}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={baseClasses}>
      {content}
    </a>
  );
}
