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
    <section className="bg-practice-paper">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-practice-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-h1 text-ink-900">{title}</h1>
        {intro && <p className="mt-5 max-w-prose text-body text-ink-700">{intro}</p>}
      </div>
    </section>
  );
}
