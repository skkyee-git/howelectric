import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { JourneySelector } from "@/components/home/JourneySelector";
import { ROICalculatorTeaser } from "@/components/home/ROICalculatorTeaser";
import { WhyHowElectric } from "@/components/home/WhyHowElectric";
import { Testimonials } from "@/components/home/Testimonials";
import { CMSTeaser } from "@/components/home/CMSTeaser";
import { CTASection } from "@/components/home/CTASection";
import { Newsletter } from "@/components/home/Newsletter";

export const metadata: Metadata = {
  title: "India's First EV Charging Infrastructure Platform",
  description:
    "Consulting, installation, charge-point management software, and professional training — everything you need to build EV charging networks across India.",
  keywords: [
    "EV charging India",
    "electric vehicle infrastructure",
    "EV charger installation",
    "charging management software",
    "EV consulting",
    "HowElectric",
  ],
  openGraph: {
    title: "India's First EV Charging Infrastructure Platform",
    description:
      "Consulting, installation, CMS software, and training for EV charging infrastructure across India.",
    url: "/",
  },
  twitter: {
    title: "India's First EV Charging Infrastructure Platform",
    description:
      "Consulting, installation, CMS software, and training for EV charging infrastructure across India.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <JourneySelector />
      <ROICalculatorTeaser />
      <WhyHowElectric />
      <CMSTeaser />
      <Testimonials />
      <CTASection />
      <Newsletter />
    </>
  );
}
