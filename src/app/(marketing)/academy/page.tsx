import { AcademyHero } from "@/components/academy/AcademyHero";
import { TrackCards } from "@/components/academy/TrackCards";
import { CurriculumPreview } from "@/components/academy/CurriculumPreview";
import { GraduateSpotlight } from "@/components/academy/GraduateSpotlight";
import { AcademyStats } from "@/components/academy/AcademyStats";
import { AcademyCrossPillar } from "@/components/academy/AcademyCrossPillar";
import { CTABanner } from "@/components/shared/CTABanner";

export default function AcademyPage() {
  return (
    <>
      <AcademyHero />
      <TrackCards />
      <CurriculumPreview />
      <GraduateSpotlight />
      <AcademyStats />
      <AcademyCrossPillar />
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Ready to start your EV career?"
          description="Enroll in one of our certification tracks and join a growing network of certified EV professionals across India."
          primaryLabel="Explore Tracks"
          primaryHref="https://howacademy.in/courses/ev-infrastructure/"
          secondaryLabel="View Graduates"
          secondaryHref="/academy/graduates"
          variant="dark"
        />
      </div>
    </>
  );
}
