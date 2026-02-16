"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Wallet,
  Clock,
  SlidersHorizontal,
  BadgeIndianRupee,
  Target,
  FileSpreadsheet,
  CheckCircle2,
  Calculator,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const FEATURES = [
  {
    icon: TrendingUp,
    title: "Revenue Modeling",
    description:
      "Per-charger and per-site revenue projections based on utilization rates, pricing strategy, and local demand curves.",
  },
  {
    icon: Wallet,
    title: "Cost Breakdown",
    description:
      "Granular CAPEX and OPEX breakdown including equipment, installation, land, electricity, maintenance, and software.",
  },
  {
    icon: Clock,
    title: "Payback Period Calculation",
    description:
      "Clear payback timelines for best-case, base-case, and worst-case scenarios so you know what to expect.",
  },
  {
    icon: SlidersHorizontal,
    title: "Sensitivity Analysis",
    description:
      "Stress-test your model against key variables — utilization, tariff, footfall — to understand what moves the needle.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Subsidy & Incentive Mapping",
    description:
      "Identify all applicable central and state subsidies, tax benefits, and incentive programs you can leverage.",
  },
  {
    icon: Target,
    title: "Break-even Projections",
    description:
      "Monthly and annual break-even analysis with clear milestones to track your path to profitability.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Input Gathering",
    description:
      "We collect your site details, equipment preferences, pricing plans, and operational assumptions.",
  },
  {
    step: 2,
    title: "Financial Modeling",
    description:
      "Our analysts build a custom financial model tailored to your specific configuration and market.",
  },
  {
    step: 3,
    title: "Scenario Testing",
    description:
      "We run best, base, and worst-case scenarios with sensitivity analysis on key variables.",
  },
  {
    step: 4,
    title: "Report & Review",
    description:
      "You receive the full model (Excel + PDF) with a walkthrough call to review findings and next steps.",
  },
];

const DELIVERABLES = [
  "Custom financial model (Excel + PDF)",
  "Revenue projections (monthly/yearly)",
  "Cost waterfall analysis",
  "Payback period scenarios (best/base/worst)",
  "Subsidy eligibility report",
  "Investor-ready summary deck",
];

/* ─── Page ─── */

export default function ROIAnalysisPage() {
  return (
    <>
      {/* ── Mini Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-32 top-0 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              ROI Analysis
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Know your numbers{" "}
            <span className="text-orange">before you invest</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Stop guessing. Our ROI analysis gives you investor-grade financial
            projections — revenue, costs, payback, and break-even — customized
            to your exact setup and market.
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
              <Link href="/consulting/book">
                <TrendingUp className="size-4" />
                Get Your ROI Analysis
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consulting/tools/roi-calculator">
                <Calculator className="size-4" />
                Try Free ROI Calculator
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What's Included"
            title="The complete financial picture"
            subtitle="Our analysis covers every financial dimension — from revenue streams to subsidies — so you can make a confident investment decision."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Process / How it Works ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="From inputs to investor-ready numbers"
            subtitle="A rigorous, transparent process that turns your assumptions into bankable projections."
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-orange/40 via-orange/20 to-transparent md:left-8 lg:block" />

            <div className="space-y-12">
              {PROCESS_STEPS.map(({ step, title, description }, idx) => (
                <ScrollReveal key={step} delay={idx * 0.1}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-orange text-lg font-bold text-white shadow-lg shadow-orange/20 md:size-16 md:text-xl">
                      {step}
                    </div>
                    <div className="pt-1 md:pt-3">
                      <h3 className="text-xl font-semibold md:text-2xl">
                        {title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">{description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Deliverables"
            title="What you'll receive"
            subtitle="Everything you need to build confidence, secure funding, and move forward."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-orange/20 bg-white p-8 shadow-card md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-orange/10">
                  <FileSpreadsheet className="size-5 text-orange" />
                </div>
                <h3 className="text-xl font-semibold">
                  ROI Analysis Package
                </h3>
              </div>
              <ul className="space-y-4">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-orange" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Ready to see the numbers behind your EV charging investment?"
          description="Get a custom financial model built by our analysts. Clear revenue projections, cost breakdowns, and payback timelines — tailored to your setup."
          primaryLabel="Get Your ROI Analysis"
          primaryHref="/consulting/book"
          secondaryLabel="Try Free ROI Calculator"
          secondaryHref="/consulting/tools/roi-calculator"
          variant="dark"
        />
      </div>
    </>
  );
}
