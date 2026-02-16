import { AboutHero } from "@/components/about/AboutHero";
import { MissionValues } from "@/components/about/MissionValues";
import { FivePillars } from "@/components/about/FivePillars";
import { TeamSection } from "@/components/about/TeamSection";
import { PartnerLogos } from "@/components/about/PartnerLogos";
import { CTABanner } from "@/components/shared/CTABanner";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionValues />
      <FivePillars />
      <TeamSection />
      <PartnerLogos />
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Join the EV charging revolution"
          description="Whether you're an entrepreneur, installer, or enterprise — HowElectric has the tools and expertise to power your journey."
          primaryLabel="Get Started"
          primaryHref="/get-started"
          secondaryLabel="Contact Us"
          secondaryHref="/consulting/book"
          variant="dark"
        />
      </div>
    </>
  );
}
