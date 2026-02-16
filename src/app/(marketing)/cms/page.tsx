import { CMSHero } from "@/components/cms/CMSHero";
import { DifferentiatorsStrip } from "@/components/cms/DifferentiatorsStrip";
import { CMSFeatureGrid } from "@/components/cms/CMSFeatureGrid";
import { CMSDashboardPreview } from "@/components/cms/CMSDashboardPreview";
import { CMSPricingPreview } from "@/components/cms/CMSPricingPreview";
import { CMSCrossPillar } from "@/components/cms/CMSCrossPillar";
import { CTABanner } from "@/components/shared/CTABanner";

export default function CMSPage() {
  return (
    <>
      <CMSHero />
      <DifferentiatorsStrip />
      <CMSFeatureGrid />
      <CMSDashboardPreview />
      <CMSPricingPreview />
      <CMSCrossPillar />
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Ready to manage your charging network?"
          description="Start with a free trial. No credit card required. Full access to all features for 14 days."
          primaryLabel="Start Free Trial"
          primaryHref="/cms/demo"
          secondaryLabel="Book a Demo"
          secondaryHref="/consulting/book"
          variant="dark"
        />
      </div>
    </>
  );
}
