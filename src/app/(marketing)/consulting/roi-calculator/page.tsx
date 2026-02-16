"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  X,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const PATH_CARDS = [
  {
    icon: Calculator,
    gradient: "from-orange/80 to-orange/40",
    title: "Free Calculator",
    description:
      "Quick estimates using industry benchmarks. Get instant results with our self-serve tool — no login required.",
    features: [
      "Instant results",
      "Industry-average benchmarks",
      "Basic revenue projection",
      "Payback period estimate",
    ],
    cta: "Try Free Calculator",
    href: "/consulting/tools/roi-calculator",
  },
  {
    icon: FileText,
    gradient: "from-navy to-electric-blue",
    title: "Custom ROI Analysis",
    description:
      "Detailed financial modeling by our consultants. Get a personalized report tailored to your specific location and business model.",
    features: [
      "Consultant-led analysis",
      "Location-specific data",
      "Multi-scenario modeling",
      "Investor-ready report",
    ],
    cta: "Get Custom Analysis",
    href: "/consulting/roi",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Revenue projections",
    free: "Industry averages",
    custom: "Location-specific data",
  },
  {
    feature: "Cost modeling",
    free: "Standard estimates",
    custom: "Vendor-quoted pricing",
  },
  {
    feature: "Payback analysis",
    free: "Single scenario",
    custom: "Multi-scenario (best/base/worst)",
  },
  {
    feature: "Subsidy calculations",
    free: "National-level overview",
    custom: "State + city-specific incentives",
  },
  {
    feature: "Sensitivity analysis",
    free: false,
    custom: "Included",
  },
  {
    feature: "Investor-ready report",
    free: false,
    custom: "PDF + Excel deliverable",
  },
];

/* ─── Page ─── */

export default function ROICalculatorPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              Free Tool
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            EV Charging{" "}
            <span className="text-orange">ROI Calculator</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Use our{" "}
            <Link
              href="/consulting/tools/roi-calculator"
              className="font-semibold text-orange underline underline-offset-4 hover:text-orange/80"
            >
              free ROI Calculator
            </Link>{" "}
            to estimate returns, or get a custom analysis from our experts.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: DURATION.slow, ease: EASE.out }}
          >
            <Button
              asChild
              size="lg"
              className="bg-orange px-6 font-semibold text-white hover:bg-orange/90"
            >
              <Link href="/consulting/tools/roi-calculator">
                <Calculator className="size-4" />
                Try Free Calculator
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consulting/roi">
                <BarChart3 className="size-4" />
                Get Custom Analysis
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Two Paths ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Choose Your Path"
            title="Two ways to calculate your ROI"
            subtitle="Whether you need a quick estimate or a detailed financial model, we have you covered."
          />

          <StaggerGrid className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {PATH_CARDS.map(
              ({ icon: Icon, gradient, title, description, features, cta, href }) => (
                <StaggerItem key={title}>
                  <motion.div
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 24 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: DURATION.normal, ease: EASE.out }}
                  >
                    {/* Header gradient */}
                    <div
                      className={`flex h-32 items-center justify-center bg-gradient-to-br ${gradient}`}
                    >
                      <div className="flex size-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                        <Icon className="size-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>

                      <ul className="mt-6 space-y-3">
                        {features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6">
                        <Button
                          asChild
                          className="w-full bg-orange font-semibold text-white hover:bg-orange/90"
                        >
                          <Link href={href}>
                            {cta}
                            <ArrowRight className="size-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Comparison"
            title="Free calculator vs custom analysis"
            subtitle="Understand the difference to pick the right option for your stage."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-white shadow-card">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b border-border bg-light-gray px-6 py-4 text-sm font-semibold">
                <div className="text-foreground">Feature</div>
                <div className="text-center text-foreground">Free Calculator</div>
                <div className="text-center text-foreground">Custom Analysis</div>
              </div>

              {/* Table rows */}
              {COMPARISON_ROWS.map(({ feature, free, custom }, idx) => (
                <div
                  key={feature}
                  className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${
                    idx < COMPARISON_ROWS.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <div className="font-medium text-foreground">{feature}</div>
                  <div className="text-center">
                    {free === false ? (
                      <X className="mx-auto size-4 text-muted-foreground/50" />
                    ) : (
                      <span className="text-muted-foreground">{free}</span>
                    )}
                  </div>
                  <div className="text-center">
                    <span className="font-medium text-orange">{custom}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Not sure which you need? Talk to us"
          description="Our team can help you decide between the free calculator and a custom analysis based on your project stage, budget, and goals."
          primaryLabel="Book a Consultation"
          primaryHref="/consulting/book"
          secondaryLabel="Try Free Calculator"
          secondaryHref="/consulting/tools/roi-calculator"
          variant="dark"
        />
      </div>
    </>
  );
}
