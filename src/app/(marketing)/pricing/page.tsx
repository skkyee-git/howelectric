import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PillarPricingCards } from "@/components/pricing/PillarPricingCards";
import { BundleSavings } from "@/components/pricing/BundleSavings";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Transparent pricing for EV charging consulting, installation services, CMS software, and academy training. Flexible plans from self-serve to enterprise.",
  keywords: ["EV charging pricing", "installation cost", "CMS pricing", "consulting fees", "EV training cost", "HowElectric plans"],
  openGraph: {
    title: "Pricing Plans",
    description: "Transparent pricing for consulting, installation, CMS, and academy services.",
    url: "/pricing",
  },
  twitter: {
    title: "Pricing Plans",
    description: "Transparent pricing for consulting, installation, CMS, and academy services.",
  },
};

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
