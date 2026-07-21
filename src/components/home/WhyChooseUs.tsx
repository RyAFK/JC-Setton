import { Section, SectionHeading } from '@/components/ui/Section';
import { IconEye, IconCheck, IconLens, IconScan } from '@/components/ui/icons';

const points = [
  {
    icon: IconEye,
    title: 'Thorough Examinations',
    body: 'Time is taken to understand your vision, eye health and everyday visual needs.',
  },
  {
    icon: IconCheck,
    title: 'Clear Explanations',
    body: 'Findings and recommendations are explained in straightforward language.',
  },
  {
    icon: IconLens,
    title: 'Independent Advice',
    body: 'Recommendations are based on your individual needs rather than a one-size-fits-all approach.',
  },
  {
    icon: IconScan,
    title: 'Specialist Services',
    body: 'Access children’s eye care, retinal imaging and specialist contact-lens support in one local practice.',
  },
];

export function WhyChooseUs() {
  return (
    <Section>
      <SectionHeading title="Why Choose J.C. Setton Opticians?" align="center" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-xl2 border border-black/5 bg-practice-paper p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-practice-blue shadow-card">
              <Icon width={22} height={22} />
            </span>
            <h3 className="mt-5 font-display text-h3 text-ink-900">{title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
