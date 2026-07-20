const steps = ['Appointment', 'Date & time', 'Your details', 'Confirmation'];

export function ProgressIndicator({ currentStep }: { currentStep: number }) {
  return (
    <nav aria-label="Booking progress" className="mb-10">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm font-medium">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const state =
            stepNumber < currentStep ? 'done' : stepNumber === currentStep ? 'current' : 'upcoming';
          return (
            <li key={label} className="flex items-center gap-2">
              <span
                aria-current={state === 'current' ? 'step' : undefined}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  state === 'done'
                    ? 'bg-practice-teal text-white'
                    : state === 'current'
                      ? 'border-2 border-practice-teal text-practice-teal-dark'
                      : 'border border-black/15 text-ink-500'
                }`}
              >
                {state === 'done' ? '✓' : stepNumber}
              </span>
              <span className={state === 'upcoming' ? 'text-ink-500' : 'text-ink-900'}>{label}</span>
              {stepNumber < steps.length && (
                <span aria-hidden="true" className="mx-1 h-px w-6 bg-black/15 sm:w-10" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
