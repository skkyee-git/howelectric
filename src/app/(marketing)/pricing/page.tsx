import { PricingHero } from "@/components/pricing/PricingHero";
import { PillarPricingCards } from "@/components/pricing/PillarPricingCards";
import { BundleSavings } from "@/components/pricing/BundleSavings";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { CTABanner } from "@/components/shared/CTABanner";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PillarPricingCards />
      <BundleSavings />
      <PricingFAQ />
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Need a custom quote?"
          description="For enterprise deployments or custom requirements, our team will build a pricing package tailored to your needs."
          primaryLabel="Talk to Sales"
          primaryHref="/consulting/book"
          secondaryLabel="Try Free Tools"
          secondaryHref="/consulting/tools"
          variant="dark"
        />
      </div>
    </>
  );
}
