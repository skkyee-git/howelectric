import type { Metadata } from "next";
import { LearnHero } from "@/components/learn/LearnHero";
import { ContentCategories } from "@/components/learn/ContentCategories";
import { FeaturedArticles } from "@/components/learn/FeaturedArticles";
import { NewsletterSignup } from "@/components/learn/NewsletterSignup";

export const metadata: Metadata = {
  title: "Learn About EV Charging Infrastructure",
  description:
    "Blogs, guides, case studies, webinars, and a glossary to deepen your knowledge of EV charging infrastructure in India and globally.",
  keywords: ["EV charging blog", "EV guides", "charging case studies", "EV webinars", "EV glossary", "learn EV charging"],
  openGraph: {
    title: "Learn About EV Charging Infrastructure",
    description: "Blogs, guides, case studies, webinars, and glossary for EV charging knowledge.",
    url: "/learn",
  },
  twitter: {
    title: "Learn About EV Charging Infrastructure",
    description: "Blogs, guides, case studies, webinars, and glossary for EV charging knowledge.",
  },
};

export default function LearnPage() {
  return (
    <>
      <LearnHero />
      <ContentCategories />
      <FeaturedArticles />
      <NewsletterSignup />
    </>
  );
}
