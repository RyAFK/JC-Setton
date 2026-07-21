import { Section, SectionHeading } from '@/components/ui/Section';
import { IconEye } from '@/components/ui/icons';
import { Button } from '@/components/ui/Button';

export function TeamSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Meet the team"
            title="Optometrists Who Take the Time to Listen"
            intro="Our optometrists and dispensing opticians get to know you as a patient, not just a prescription — so recommendations reflect your eyes, your lifestyle and what matters to you."
          />
          <Button href="/about">Meet the team</Button>
        </div>
        <div
          className="flex aspect-[4/3] items-center justify-center rounded-xl2 bg-practice-blue-tint"
          role="img"
          aria-label="Illustration representing the Setton Opticians optometry team"
        >
          <IconEye width={64} height={64} className="text-practice-blue" />
        </div>
      </div>
    </Section>
  );
}
