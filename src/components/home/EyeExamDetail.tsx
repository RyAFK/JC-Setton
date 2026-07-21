import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IconCheck } from '@/components/ui/icons';

const items = [
  'A review of your vision and prescription.',
  'Eye-pressure measurement.',
  'Retinal photography.',
  'Peripheral vision assessment.',
  'Checks for signs associated with glaucoma, cataracts and macular degeneration.',
  'Personal recommendations based on your work, lifestyle and visual needs.',
];

export function EyeExamDetail() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Your appointment"
            title="More Than a Sight Test"
            intro="Your appointment is designed to check both your vision and the health of your eyes. It may include:"
          />
        </div>
        <div>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck width={20} height={20} className="mt-0.5 shrink-0 text-practice-blue" />
                <span className="text-[15px] text-ink-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-500">
            The exact content of your examination depends on your individual needs and is not a
            guarantee of specific findings.
          </p>
          <div className="mt-8">
            <Button href="/book?type=routine">Book a Comprehensive Eye Examination</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
