import { LearnHero } from "@/components/learn/LearnHero";
import { ContentCategories } from "@/components/learn/ContentCategories";
import { FeaturedArticles } from "@/components/learn/FeaturedArticles";
import { NewsletterSignup } from "@/components/learn/NewsletterSignup";

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
