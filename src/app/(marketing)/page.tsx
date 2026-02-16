import { HeroSection } from "@/components/home/HeroSection";
import { JourneySelector } from "@/components/home/JourneySelector";
import { ROICalculatorTeaser } from "@/components/home/ROICalculatorTeaser";
import { WhyHowElectric } from "@/components/home/WhyHowElectric";
import { Testimonials } from "@/components/home/Testimonials";
import { CMSTeaser } from "@/components/home/CMSTeaser";
import { CTASection } from "@/components/home/CTASection";
import { Newsletter } from "@/components/home/Newsletter";

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
