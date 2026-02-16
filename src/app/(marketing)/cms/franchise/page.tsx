"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  MapPin,
  Handshake,
  Palette,
  BarChart3,
  SlidersHorizontal,
  ArrowRight,
  Zap,
  Settings,
  CheckCircle,
  Network,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Central Dashboard",
    description:
      "Franchisor view with real-time visibility across every franchise location. Network-wide analytics, health, and revenue at a glance.",
  },
  {
    icon: MapPin,
    title: "Individual Site Management",
    description:
      "Franchisee view with full local control. Each location manages its own operations while staying within brand guidelines.",
  },
  {
    icon: Handshake,
    title: "Revenue Sharing & Settlement",
    description:
      "Automated revenue splits between franchisor and franchisee. Transparent settlement reports and scheduled payouts.",
  },
  {
    icon: Palette,
    title: "Brand-consistent Driver Experience",
    description:
      "White-label driver app and payment flows that maintain your brand identity across every franchise location.",
  },
  {
    icon: BarChart3,
    title: "Franchise Performance Benchmarking",
    description:
      "Compare locations on utilization, revenue, uptime, and customer satisfaction. Identify top performers and improvement areas.",
  },
  {
    icon: SlidersHorizontal,
    title: "Standardized Pricing Controls",
    description:
      "Set pricing bands and policies at the network level. Franchisees operate within defined parameters for consistency.",
  },
];

const FRANCHISE_STEPS = [
  {
    step: 1,
    title: "Franchisor Sets Standards",
    description:
      "Define brand guidelines, pricing rules, SLAs, and operational standards from the central dashboard.",
    icon: Settings,
  },
  {
    step: 2,
    title: "Franchisee Operates Locally",
    description:
      "Each franchise location manages day-to-day operations with full autonomy within established parameters.",
    icon: MapPin,
  },
  {
    step: 3,
    title: "CMS Enforces Consistency",
    description:
      "The platform automatically ensures brand standards, pricing rules, and service quality across the entire network.",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Revenue Splits Automatically",
    description:
      "Earnings are calculated and distributed automatically based on pre-configured revenue sharing agreements.",
    icon: Handshake,
  },
];

export default function FranchisePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-dark-gray py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-[300px] rounded-full bg-gold/5 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-gold/10 text-gold">
                For Franchise
              </Badge>
            </motion.div>

            <motion.h1
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              One platform for your{" "}
              <span className="text-gold">entire franchise network</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Maintain brand consistency, centralized monitoring with local
              management, and automated revenue sharing between franchisor and
              franchisee — all on one unified platform.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy hover:bg-gold/90"
              >
                <Link href="/consulting/book">
                  Talk to Franchise Sales
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Franchise Needs CMS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Franchise Networks
              </p>
              <h2 className="mt-3">
                Why franchise networks need a CMS
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Franchise models thrive on consistency and trust. Without a
                centralized CMS, brand standards erode, revenue leaks through
                manual splits, and franchisees operate in silos. A unified
                platform ensures every location delivers the same quality
                experience while enabling local operational autonomy.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Maintain brand consistency across all locations",
                  "Centralized monitoring with local management",
                  "Automated revenue sharing between franchisor and franchisee",
                  "Performance benchmarking across the entire network",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <Zap className="size-3 text-gold" />
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.1}>
              <div className="rounded-3xl border border-border/50 bg-light-gray p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "100%", label: "Brand consistency" },
                    { value: "Auto", label: "Revenue settlement" },
                    { value: "Real-time", label: "Network visibility" },
                    { value: "Zero", label: "Manual reconciliation" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <p className="text-2xl font-bold text-gold">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Key Features"
            title="Built for franchise operations"
            subtitle="Tools designed to balance central control with local operational freedom."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="group h-full rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* How Franchise Model Works */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="The franchise model, simplified"
            subtitle="Four seamless steps from standards to settlement — all automated by HowElectric CMS."
          />

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 lg:block" />

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-12">
              {FRANCHISE_STEPS.map(({ step, title, description, icon: Icon }, index) => (
                <ScrollReveal
                  key={step}
                  variant={index % 2 === 0 ? "slideLeft" : "slideRight"}
                  delay={index * 0.1}
                >
                  <div className="group relative rounded-2xl border border-border/50 bg-light-gray p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                        <Icon className="size-6 text-gold" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gold">
                            Step {step}
                          </span>
                        </div>
                        <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Plan */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Recommended Plan"
            title="Enterprise with White-Label"
            subtitle="The only plan designed for franchise-scale operations with full branding control."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl">
              <div className="overflow-hidden rounded-3xl border-2 border-gold/30 bg-white shadow-lg">
                <div className="bg-gold/5 px-8 py-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <Badge className="mb-2 bg-gold/10 text-gold">
                        For Franchise
                      </Badge>
                      <h3 className="text-2xl font-bold">
                        Enterprise + White-Label
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gold">Custom</p>
                      <p className="text-sm text-muted-foreground">pricing</p>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-6">
                  <div className="space-y-3">
                    {[
                      "Unlimited franchise locations",
                      "Franchisor + franchisee dashboards",
                      "Automated revenue sharing & settlement",
                      "White-label driver app with your branding",
                      "Standardized pricing controls",
                      "Performance benchmarking across network",
                      "Dedicated account manager",
                      "Custom SLA-backed support",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                          <Zap className="size-3 text-gold" />
                        </div>
                        <p className="text-sm text-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 rounded-xl bg-light-gray p-4">
                    <Network className="size-5 text-gold" />
                    <p className="text-sm text-muted-foreground">
                      Includes <span className="font-semibold text-foreground">White-Label add-on</span> for
                      complete brand customization across the driver experience.
                    </p>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 w-full bg-gold text-navy hover:bg-gold/90"
                  >
                    <Link href="/consulting/book">
                      Talk to Franchise Sales
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Scale your franchise network with confidence"
            description="HowElectric CMS gives franchise networks the tools to maintain brand consistency, automate revenue sharing, and scale across India."
            primaryLabel="Talk to Franchise Sales"
            primaryHref="/consulting/book"
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
}
