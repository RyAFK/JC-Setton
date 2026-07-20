import { type HTMLAttributes } from 'react';

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: 'default' | 'muted' | 'teal';
  id?: string;
};

const tones = {
  default: 'bg-white',
  muted: 'bg-practice-cream',
  teal: 'bg-practice-teal text-white',
};

export function Section({ tone = 'default', className = '', children, ...props }: SectionProps) {
  return (
    <section className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`} {...props}>
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
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-10 sm:mb-12`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-practice-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-h2 text-ink-900">{title}</h2>
      {intro && <p className="mt-4 text-body text-ink-700 max-w-prose">{intro}</p>}
    </div>
  );
}
