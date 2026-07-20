import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { IconChild, IconLens } from '@/components/ui/icons';

export function ChildrenAndSpecialistSection() {
  return (
    <Section tone="muted">
      <SectionHeading title="Specialist Care, Close to Home" align="center" />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl2 bg-white p-8 shadow-card">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-practice-teal-light text-practice-teal">
            <IconChild />
          </span>
          <h3 className="mt-4 font-display text-h3">Is Your Child Due an Eye Test?</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
            Children do not need to be able to read or name letters to have their vision checked.
            We use age-appropriate pictures, shapes and techniques to make the examination
            comfortable and engaging.
          </p>
          <p className="mt-3 text-sm font-medium text-practice-teal-dark">
            NHS-funded eye tests are available for eligible children.
          </p>
          <div className="mt-5">
            <Button href="/book?type=childrens" variant="secondary">
              Book a Children’s Eye Test
            </Button>
          </div>
        </div>

        <div className="rounded-xl2 bg-white p-8 shadow-card">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-practice-teal-light text-practice-teal">
            <IconLens />
          </span>
          <h3 className="mt-4 font-display text-h3">Specialist Contact Lenses</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
            Personalised fitting for complex prescriptions, keratoconus and therapeutic lens
            requirements — supported by an in-house specialist contact lens clinic.
          </p>
          <div className="mt-5">
            <Button href="/book?type=contact-lens" variant="secondary">
              Arrange a Contact-Lens Consultation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
