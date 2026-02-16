"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DURATION, EASE, STAGGER } from "@/lib/animations";

// ── Pillar data ─────────────────────────────────────────────────────

interface PriceTier {
  name: string;
  price: string;
  highlight?: boolean;
}

interface PillarSection {
  pillar: string;
  accent: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  tiers: PriceTier[];
  linkLabel: string;
  linkHref: string;
}

const PILLARS: PillarSection[] = [
  {
    pillar: "CMS Platform",
    accent: "gold",
    borderColor: "border-l-gold",
    badgeBg: "bg-gold/10",
    badgeText: "text-gold",
    tiers: [
      { name: "Starter", price: "\u20B9500/mo" },
      { name: "Business", price: "\u20B91,500/mo", highlight: true },
      { name: "Enterprise", price: "Custom" },
    ],
    linkLabel: "See CMS Pricing",
    linkHref: "/cms/pricing",
  },
  {
    pillar: "Consulting",
    accent: "orange",
    borderColor: "border-l-orange",
    badgeBg: "bg-orange/10",
    badgeText: "text-orange",
    tiers: [
      { name: "Self-Serve", price: "Free" },
      { name: "Managed", price: "\u20B925K\u20132L", highlight: true },
      { name: "Enterprise", price: "\u20B95L+" },
    ],
    linkLabel: "View Consulting Tiers",
    linkHref: "/consulting",
  },
  {
    pillar: "Services",
    accent: "purple",
    borderColor: "border-l-purple",
    badgeBg: "bg-purple/10",
    badgeText: "text-purple",
    tiers: [
      { name: "Installation", price: "\u20B910K\u201350K" },
      { name: "AMC Basic", price: "\u20B98K/yr", highlight: true },
      { name: "AMC Premium", price: "\u20B925K/yr" },
    ],
    linkLabel: "View AMC Plans",
    linkHref: "/services/amc",
  },
  {
    pillar: "Academy",
    accent: "green",
    borderColor: "border-l-green",
    badgeBg: "bg-green/10",
    badgeText: "text-green",
    tiers: [
      { name: "Installer Track", price: "\u20B915,000" },
      { name: "Operator Track", price: "\u20B920,000", highlight: true },
      { name: "Consultant Track", price: "\u20B935,000" },
    ],
    linkLabel: "View Tracks",
    linkHref: "/academy",
  },
  {
    pillar: "Marketplace",
    accent: "teal",
    borderColor: "border-l-teal",
    badgeBg: "bg-teal/10",
    badgeText: "text-teal",
    tiers: [
      { name: "Products", price: "\u20B938,000 \u2013 \u20B928,00,000" },
    ],
    linkLabel: "Browse Marketplace",
    linkHref: "/marketplace",
  },
];

// ── Stagger variants ────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.out,
    },
  },
};

// ── Component ───────────────────────────────────────────────────────

export function PillarPricingCards() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="mb-14 text-center">
          <Badge
            variant="secondary"
            className="mb-4 bg-electric-blue/10 text-electric-blue"
          >
            All Pillars
          </Badge>
          <h2 className="font-display">Pricing across the platform</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Quick-glance pricing for each pillar. Click through for full details
            and plan comparisons.
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.pillar}
              variants={cardVariants}
              className={`rounded-2xl border border-border/50 bg-white shadow-card transition-shadow hover:shadow-card-hover border-l-4 ${pillar.borderColor}`}
            >
              <div className="p-6">
                {/* Pillar name badge */}
                <Badge
                  variant="secondary"
                  className={`mb-4 ${pillar.badgeBg} ${pillar.badgeText}`}
                >
                  {pillar.pillar}
                </Badge>

                {/* Price tiers */}
                <div className="space-y-3">
                  {pillar.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                        tier.highlight
                          ? "bg-light-gray"
                          : "bg-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Check className="size-4 text-green" />
                        <span className="text-sm font-medium text-foreground">
                          {tier.name}
                        </span>
                      </div>
                      <span
                        className={`text-sm font-semibold ${
                          tier.highlight ? "text-navy" : "text-muted-foreground"
                        }`}
                      >
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Link to detailed page */}
                <div className="mt-6">
                  <Button asChild variant="ghost" className="group w-full">
                    <Link href={pillar.linkHref}>
                      {pillar.linkLabel}
                      <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
