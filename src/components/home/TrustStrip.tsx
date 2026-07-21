import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { IconEye, IconScan, IconLens, IconChild } from '@/components/ui/icons';

const items = [
  {
    icon: IconEye,
    title: 'Independent, Personal Care',
    body: 'Appointments designed around the patient rather than a rushed high-street experience.',
  },
  {
    icon: IconScan,
    title: 'Advanced Retinal Imaging',
    body: 'Modern technology to support a detailed assessment of eye health.',
  },
  {
    icon: IconLens,
    title: 'Specialist Contact Lenses',
    body: 'Personalised fitting for complex prescriptions and specialist requirements.',
  },
  {
    icon: IconChild,
    title: 'Children’s Eye Examinations',
    body: 'Age-appropriate examinations delivered in a calm and reassuring environment.',
  },
];

export function TrustStrip() {
  return (
    <Section className="py-16 sm:py-20">
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, body }, index) => (
          <li key={title}>
            <Reveal index={index} className="group flex flex-col items-start gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-practice-blue-tint text-practice-blue transition-transform duration-200 group-hover:scale-110">
                <Icon />
              </span>
              <h3 className="font-display text-h3 text-ink-900">{title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-700">{body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
