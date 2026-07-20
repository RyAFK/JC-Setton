export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-practice-cream">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-practice-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-h1 text-ink-900">{title}</h1>
        {intro && <p className="mt-4 max-w-prose text-body text-ink-700">{intro}</p>}
      </div>
    </section>
  );
}
