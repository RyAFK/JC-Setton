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
          className="mt-1 shrink-0 text-practice-blue"
        />
      </div>
      <p className="mt-2 text-[15px] text-ink-700">{type.description}</p>

      <dl className="mt-4 space-y-1.5 text-sm text-ink-700">
        <div className="flex gap-2">
          <dt className="font-semibold text-ink-900">Price / eligibility:</dt>
          <dd>{type.priceOrEligibility}</dd>
        </div>
        {type.duration && (
          <div className="flex gap-2">
            <dt className="font-semibold text-ink-900">Duration:</dt>
            <dd>{type.duration}</dd>
          </div>
        )}
        {type.preparation && (
          <div className="flex gap-2">
            <dt className="font-semibold text-ink-900">Before you come:</dt>
            <dd>{type.preparation}</dd>
          </div>
        )}
      </dl>

      {type.callInsteadOf && (
        <p className="mt-4 rounded-md bg-practice-accent-tint px-3 py-2 text-sm font-medium text-ink-900">
          Please call us instead of booking online for this concern.
        </p>
      )}
    </>
  );

  const baseClasses = `block rounded-xl2 border-2 p-8 text-left shadow-card transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-focus ${
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
