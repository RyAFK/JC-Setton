import { Section, SectionHeading } from '@/components/ui/Section';
import { AppointmentTypeCard } from '@/components/AppointmentTypeCard';
import { appointmentTypes, practice } from '@/content/practice';

export function AppointmentTypesSection() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Most-booked appointments"
        title="Choose the Appointment That Fits Your Needs"
        intro="Select an appointment type to see what to expect, then book your preferred time online."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {appointmentTypes.map((type) => (
          <AppointmentTypeCard key={type.id} type={type} href={`/book?type=${type.id}`} />
        ))}
      </div>
      <p className="mt-8 text-[15px] text-ink-700">
        Not sure what to book?{' '}
        <a href={practice.phone.href} className="font-semibold text-practice-teal-dark underline">
          Call our team on {practice.phone.display}
        </a>
        .
      </p>
    </Section>
  );
}
