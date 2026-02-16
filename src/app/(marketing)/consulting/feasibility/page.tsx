"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Map,
  Building2,
  IndianRupee,
  ShieldAlert,
  ThumbsUp,
  FileText,
  CheckCircle2,
  ArrowRight,
  Zap,
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
    icon: BarChart3,
    title: "Market Demand Analysis",
    description:
      "Deep-dive into local EV adoption trends, charging behavior, and unmet demand to validate the market opportunity.",
  },
  {
    icon: Map,
    title: "Competition Mapping",
    description:
      "Comprehensive mapping of existing charging networks, pricing strategies, and white-space identification.",
  },
  {
    icon: Building2,
    title: "Infrastructure Assessment",
    description:
      "Evaluate power availability, grid capacity, and civil infrastructure readiness at your target locations.",
  },
  {
    icon: IndianRupee,
    title: "Financial Viability Check",
    description:
      "Revenue modeling, cost projections, and payback analysis to validate the business case.",
  },
  {
    icon: ShieldAlert,
    title: "Risk Assessment",
    description:
      "Identify regulatory, technical, and market risks with mitigation strategies for each.",
  },
  {
    icon: ThumbsUp,
    title: "Go/No-Go Recommendation",
    description:
      "A clear, data-backed verdict with a weighted scoring model so you can decide with confidence.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We understand your goals, budget, target locations, and timeline to scope the study.",
  },
  {
    step: 2,
    title: "Data Collection",
    description:
      "Our team gathers market data, site information, regulatory details, and competitor intelligence.",
  },
  {
    step: 3,
    title: "Analysis",
    description:
      "Rigorous analysis using proprietary models to assess viability across all dimensions.",
  },
  {
    step: 4,
    title: "Report Delivery",
    description:
      "You receive a comprehensive DPR with actionable recommendations and a clear Go/No-Go verdict.",
  },
];

const DELIVERABLES = [
  "30-50 page Detailed Project Report (DPR)",
  "Market demand heatmap",
  "Competition analysis",
  "Financial projections (3-5 year)",
  "Infrastructure requirements",
  "Go/No-Go recommendation with scoring",
];

/* ─── Page ─── */

export default function FeasibilityPage() {
  return (
    <>
      {/* ── Mini Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Subtle background accent */}
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              Feasibility Study
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Is your EV charging business{" "}
            <span className="text-orange">viable?</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Before you invest lakhs, get a data-backed feasibility report that
            covers market demand, competition, infrastructure, financials, and
            risks — so you make the right call.
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
                <Zap className="size-4" />
                Get Your Feasibility Study
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consulting">
                Explore All Services
                <ArrowRight className="size-4" />
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
            title="Everything you need to make an informed decision"
            subtitle="Our feasibility study covers six critical dimensions to give you a 360-degree view of your EV charging opportunity."
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
            title="From discovery to decision in 4 steps"
            subtitle="A structured, transparent process so you know exactly what to expect at every stage."
          />

          <div className="relative mx-auto max-w-4xl">
            {/* Connector line */}
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
            subtitle="A comprehensive package designed to support your investment decision."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-orange/20 bg-white p-8 shadow-card md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-orange/10">
                  <FileText className="size-5 text-orange" />
                </div>
                <h3 className="text-xl font-semibold">
                  Feasibility Study Package
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
          headline="Ready to validate your EV charging opportunity?"
          description="Book a free discovery call with our experts. We'll scope your project, outline the study, and give you a clear timeline — no commitment required."
          primaryLabel="Get Your Feasibility Study"
          primaryHref="/consulting/book"
          secondaryLabel="Explore All Services"
          secondaryHref="/consulting"
          variant="dark"
        />
      </div>
    </>
  );
}
