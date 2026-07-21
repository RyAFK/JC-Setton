import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IconCheck } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: "Children's Eye Care in West Wickham",
  description:
    "Calm, age-appropriate children's eye examinations at J.C. Setton Opticians, West Wickham. NHS-funded eye tests are available for eligible children.",
  alternates: { canonical: '/childrens-eye-care' },
};

const signs = [
  'Complains of headaches or tired eyes.',
  'Sits unusually close to screens.',
  'Avoids reading or drawing.',
  'Frequently rubs or closes one eye.',
  'Is struggling with concentration or schoolwork.',
  'Has never had an eye examination.',
];

export default function ChildrensEyeCarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Children's eye care"
        title="Is Your Child Due an Eye Test?"
        intro="Children do not need to be able to read or name letters to have their vision checked. We use age-appropriate pictures, shapes and techniques to make the examination comfortable and engaging."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading title="Book an appointment if your child:" />
            <ul className="space-y-3">
              {signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <IconCheck width={20} height={20} className="mt-0.5 shrink-0 text-practice-blue" />
                  <span className="text-[15px] text-ink-700">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              title="NHS-funded eye care for children"
              intro="NHS-funded eye tests are available for eligible children. If glasses are needed, an NHS optical voucher may contribute towards the cost — ask our team for current details."
            />
            <Button href="/book?type=childrens">Book a Children’s Eye Test</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
