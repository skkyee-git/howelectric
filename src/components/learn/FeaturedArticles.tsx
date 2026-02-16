"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const FEATURED = [
  {
    title: "Complete Guide to Starting an EV Charging Business in India",
    excerpt:
      "Everything you need to know about launching a profitable EV charging venture — from permits to profitability.",
    category: "Guide",
    readTime: "15 min read",
    href: "/learn/guides/start-ev-charging-business",
    categoryColor: "bg-electric-blue/10 text-electric-blue",
  },
  {
    title: "How Rajesh Built a 10-Station Network in 6 Months",
    excerpt:
      "A real-world case study of scaling an EV charging network across Rajasthan with HowElectric.",
    category: "Case Study",
    readTime: "8 min read",
    href: "/learn/case-studies/rajesh-10-station-network",
    categoryColor: "bg-orange/10 text-orange",
  },
  {
    title: "2026 EV Charging Subsidies: State-by-State Breakdown",
    excerpt:
      "The complete guide to every subsidy, incentive, and policy supporting EV infrastructure in India.",
    category: "Blog",
    readTime: "12 min read",
    href: "/learn/blog/2026-ev-charging-subsidies",
    categoryColor: "bg-teal/10 text-teal",
  },
];

export function FeaturedArticles() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Editors&apos; Picks
          </p>
          <h2 className="mt-3">Featured Content</h2>
        </ScrollReveal>

        {/* Grid: 1 large card left + 2 stacked cards right on desktop */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* First card — large / spans full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: 0,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:row-span-2"
          >
            <Link
              href={FEATURED[0].href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Gradient top border */}
              <div className="h-1 w-full bg-gradient-to-r from-electric-blue to-teal" />

              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <Badge
                    variant="secondary"
                    className={FEATURED[0].categoryColor}
                  >
                    {FEATURED[0].category}
                  </Badge>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-electric-blue lg:text-2xl">
                    {FEATURED[0].title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {FEATURED[0].excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {FEATURED[0].readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-electric-blue opacity-0 transition-opacity group-hover:opacity-100">
                    Read More
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Second and third cards — stacked on the right */}
          {FEATURED.slice(1).map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: (i + 1) * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={article.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Gradient top border */}
                <div className="h-1 w-full bg-gradient-to-r from-electric-blue to-teal" />

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="secondary"
                      className={article.categoryColor}
                    >
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-electric-blue lg:text-lg">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-1 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric-blue opacity-0 transition-opacity group-hover:opacity-100">
                    Read More
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
