import { type HTMLAttributes } from 'react';

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: 'default' | 'muted' | 'blue';
  id?: string;
};

const tones = {
  default: 'bg-white',
  muted: 'bg-practice-paper',
  blue: 'bg-practice-blue text-white',
};

export function Section({ tone = 'default', className = '', children, ...props }: SectionProps) {
  return (
    <section className={`${tones[tone]} py-20 sm:py-24 lg:py-32 ${className}`} {...props}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 sm:mb-16`}>
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-practice-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-h2 text-ink-900">{title}</h2>
      {intro && <p className="mt-5 text-body text-ink-700 max-w-prose">{intro}</p>}
    </div>
  );
}
