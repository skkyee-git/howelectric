import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";
import { InstallationProcess } from "@/components/services/InstallationProcess";
import { InstallerHighlight } from "@/components/services/InstallerHighlight";
import { AMCPlans } from "@/components/services/AMCPlans";
import { ServicesCrossPillar } from "@/components/services/ServicesCrossPillar";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "EV Charger Installation & Maintenance Services",
  description:
    "Professional EV charger installation, annual maintenance contracts, emergency repairs, and upgrades. Residential, commercial, fleet, and public charging.",
  keywords: ["EV charger installation", "EV maintenance", "AMC plans", "emergency repair", "charger upgrade", "residential charging", "commercial charging"],
  openGraph: {
    title: "EV Charger Installation & Maintenance Services",
    description: "Professional installation, AMC plans, emergency repairs, and upgrades for EV chargers across India.",
    url: "/services",
  },
  twitter: {
    title: "EV Charger Installation & Maintenance Services",
    description: "Professional installation, AMC plans, emergency repairs, and upgrades for EV chargers across India.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceOfferings />
      <InstallationProcess />
      <InstallerHighlight />
      <AMCPlans />
      <ServicesCrossPillar />
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Ready to get your chargers installed?"
          description="Request a site survey and get a detailed installation quote within 48 hours. No obligation."
          primaryLabel="Request Installation"
          primaryHref="/services/request"
          secondaryLabel="Find an Installer"
          secondaryHref="/services/installers"
          variant="dark"
        />
      </div>
    </>
  );
}
