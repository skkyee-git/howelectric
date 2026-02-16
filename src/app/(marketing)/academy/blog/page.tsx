"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Newspaper,
  Tag,
  TrendingUp,
  Cpu,
  Landmark,
  BarChart3,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const FEATURED_ARTICLE = {
  title:
    "The Complete Guide to Starting an EV Charging Business in India (2025)",
  readTime: "12 min read",
  author: "HowElectric Team",
  date: "Jan 2025",
  href: "/academy/blog",
};

const RECENT_ARTICLES = [
  {
    title: "AC vs DC Charging: Which is Right for Your Business?",
    readTime: "8 min",
    category: "Technology",
    icon: Cpu,
    href: "/academy/blog",
  },
  {
    title: "Understanding FAME II Subsidies for EV Charging",
    readTime: "6 min",
    category: "Regulatory",
    icon: Landmark,
    href: "/academy/blog",
  },
  {
    title: "Top 10 Locations for EV Charging Stations in India",
    readTime: "10 min",
    category: "Business",
    icon: BarChart3,
    href: "/academy/blog",
  },
  {
    title: "OCPP 2.0.1: What CPOs Need to Know",
    readTime: "7 min",
    category: "Technology",
    icon: Cpu,
    href: "/academy/blog",
  },
  {
    title: "How to Calculate ROI for EV Charging Stations",
    readTime: "9 min",
    category: "Business",
    icon: TrendingUp,
    href: "/academy/blog",
  },
  {
    title: "State-wise EV Charging Policies: A Complete Guide",
    readTime: "15 min",
    category: "Regulatory",
    icon: Landmark,
    href: "/academy/blog",
  },
];

const CATEGORIES = [
  { label: "All", active: true },
  { label: "Technology", active: false },
  { label: "Business", active: false },
  { label: "Regulatory", active: false },
  { label: "Market", active: false },
  { label: "How-To", active: false },
];

const CATEGORY_COLORS: Record<string, string> = {
  Technology: "bg-blue-100 text-blue-700",
  Business: "bg-amber-100 text-amber-700",
  Regulatory: "bg-purple-100 text-purple-700",
  Market: "bg-teal-100 text-teal-700",
  "How-To": "bg-pink-100 text-pink-700",
};

/* ─── Page ─── */

export default function AcademyBlogPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-green/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-green/10 text-green border-green/20">
              <Newspaper className="mr-1.5 size-3" />
              Blog
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Insights & news from the{" "}
            <span className="text-green">EV charging industry</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Stay ahead with expert analysis, market trends, and practical
            insights for EV charging professionals and entrepreneurs.
          </motion.p>
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Featured"
            title="Editor's pick"
            alignment="left"
          />

          <ScrollReveal>
            <Link href={FEATURED_ARTICLE.href} className="group block">
              <motion.div
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-shadow group-hover:shadow-card-hover"
                whileHover={{ y: -4 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
              >
                <div className="grid md:grid-cols-2">
                  {/* Placeholder gradient image */}
                  <div className="relative h-64 bg-gradient-to-br from-green/20 via-green/10 to-teal/20 md:h-auto md:min-h-[320px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Newspaper className="size-16 text-green/30" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <Badge className="mb-4 w-fit bg-green/10 text-green border-green/20">
                      Featured
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                      {FEATURED_ARTICLE.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-4" />
                        {FEATURED_ARTICLE.readTime}
                      </span>
                      <span>By {FEATURED_ARTICLE.author}</span>
                      <span>Published {FEATURED_ARTICLE.date}</span>
                    </div>
                    <div className="mt-6 flex items-center gap-2 font-semibold text-green">
                      Read Article
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Category Filters ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Articles"
            title="Recent articles"
            subtitle="Explore our latest insights across technology, business, and regulatory topics."
          />

          {/* Filter pills (visual only) */}
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {CATEGORIES.map(({ label, active }) => (
                <button
                  key={label}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-green text-white"
                      : "bg-light-gray text-muted-foreground hover:bg-green/10 hover:text-green"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Articles grid */}
          <StaggerGrid className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {RECENT_ARTICLES.map(
              ({ title, readTime, category, icon: Icon, href }) => (
                <StaggerItem key={title}>
                  <Link href={href} className="group block h-full">
                    <motion.div
                      className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-shadow group-hover:shadow-card-hover"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring" as const, stiffness: 300 }}
                    >
                      {/* Placeholder gradient image */}
                      <div className="relative h-48 bg-gradient-to-br from-green/15 via-teal/10 to-electric-blue/10">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="size-10 text-green/25" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col p-6">
                        <Badge
                          variant="secondary"
                          className={`mb-3 w-fit text-xs ${CATEGORY_COLORS[category] || "bg-green/10 text-green"}`}
                        >
                          <Tag className="mr-1 size-3" />
                          {category}
                        </Badge>
                        <h4 className="flex-1 text-lg font-semibold text-foreground leading-snug">
                          {title}
                        </h4>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock className="size-3.5" />
                            {readTime}
                          </span>
                          <span className="flex items-center gap-1 text-sm font-semibold text-green transition-colors">
                            Read Article
                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Subscribe to our newsletter"
          description="Get the latest EV charging insights, market trends, and industry news delivered straight to your inbox every week."
          primaryLabel="Subscribe to Newsletter"
          primaryHref="/academy/newsletter"
          secondaryLabel="Browse All Articles"
          secondaryHref="/academy/blog"
          variant="dark"
        />
      </div>
    </>
  );
}
