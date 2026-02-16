import { ConsultingHero } from "@/components/consulting/ConsultingHero";
import { TierCards } from "@/components/consulting/TierCards";
import { ProcessSteps } from "@/components/consulting/ProcessSteps";
import { FreeToolsGrid } from "@/components/consulting/FreeToolsGrid";
import { ConsultingStats } from "@/components/consulting/ConsultingStats";
import { UseCases } from "@/components/consulting/UseCases";
import { CrossPillarSection } from "@/components/consulting/CrossPillarSection";
import { CTABanner } from "@/components/shared/CTABanner";

export default function ConsultingPage() {
  return (
    <>
      <ConsultingHero />
      <TierCards />
      <ProcessSteps />
      <FreeToolsGrid />
      <ConsultingStats />
      <UseCases />
      <CrossPillarSection />
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Ready to plan your EV charging business?"
          description="Book a free 30-minute consultation with our EV infrastructure experts. No commitment, no hard sell — just actionable advice."
          primaryLabel="Book a Consultation"
          primaryHref="/consulting/book"
          secondaryLabel="Try Free Tools"
          secondaryHref="/consulting/tools"
          variant="dark"
        />
      </div>
    </>
  );
}
