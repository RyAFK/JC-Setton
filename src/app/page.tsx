import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { IntroCopy } from '@/components/home/IntroCopy';
import { AppointmentTypesSection } from '@/components/home/AppointmentTypesSection';
import { EyeExamDetail } from '@/components/home/EyeExamDetail';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials';
import { TeamSection } from '@/components/home/TeamSection';
import { ChildrenAndSpecialistSection } from '@/components/home/ChildrenAndSpecialistSection';
import { BrandsSection } from '@/components/home/BrandsSection';
import { LocationSection } from '@/components/home/LocationSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <IntroCopy />
      <AppointmentTypesSection />
      <EyeExamDetail />
      <WhyChooseUs />
      <Testimonials />
      <TeamSection />
      <ChildrenAndSpecialistSection />
      <BrandsSection />
      <LocationSection />
      <FinalCta />
    </>
  );
}
