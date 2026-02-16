"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  FileText,
  TrendingUp,
  IndianRupee,
  Settings,
  Megaphone,
  Milestone,
  Lock,
  Download,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const PLAN_SECTIONS = [
  {
    icon: FileText,
    title: "Executive Summary",
    description:
      "A concise overview of your EV charging business concept, value proposition, target market, and growth strategy.",
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description:
      "In-depth analysis of the Indian EV market, charging demand forecasts, competitive landscape, and target customer segments.",
  },
  {
    icon: IndianRupee,
    title: "Financial Projections (3-Year)",
    description:
      "Revenue models, cost structures, break-even analysis, and projected P&L for your first three years of operation.",
  },
  {
    icon: Settings,
    title: "Operations Plan",
    description:
      "Day-to-day operations framework, staffing requirements, maintenance schedules, and vendor management processes.",
  },
  {
    icon: Megaphone,
    title: "Marketing Strategy",
    description:
      "Customer acquisition playbook, pricing strategy, brand positioning, and digital marketing plan for your charging network.",
  },
  {
    icon: Milestone,
    title: "Milestone Timeline",
    description:
      "A phased roadmap with key milestones from site selection to launch, expansion targets, and performance benchmarks.",
  },
];

const TEMPLATE_SECTIONS = [
  { title: "Executive Summary", pages: "2-3 pages" },
  { title: "Market Analysis", pages: "4-5 pages" },
  { title: "Financial Projections", pages: "5-6 pages" },
  { title: "Operations Plan", pages: "3-4 pages" },
  { title: "Marketing Strategy", pages: "3-4 pages" },
];

/* ─── Page ─── */

export default function BusinessPlanPage() {
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
            EV Charging Business Plan{" "}
            <span className="text-orange">Generator</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Generate a starter business plan for your EV charging venture.
            Get a structured framework covering market analysis, financials,
            operations, and growth strategy.
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
              <Link href="/consulting/managed">
                <Zap className="size-4" />
                Get a Professional Business Plan
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consulting/tools">
                All Free Tools
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Business Plan Mockup ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Template Preview"
            title="Preview the business plan template"
            subtitle="A comprehensive, investor-ready framework tailored for the Indian EV charging market."
          />

          <ScrollReveal>
            <div className="relative mx-auto max-w-3xl">
              {/* Coming Soon overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-white/60 backdrop-blur-[2px]">
                <Badge className="bg-orange text-white text-base px-5 py-2 shadow-lg shadow-orange/25">
                  <Lock className="mr-2 size-4" />
                  Coming Soon
                </Badge>
              </div>

              <div className="rounded-2xl border border-border bg-white shadow-card">
                {/* Document header */}
                <div className="border-b border-border px-6 py-5 md:px-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-orange/10">
                        <FileText className="size-5 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          EV Charging Business Plan
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Auto-generated template &bull; 20&ndash;25 pages
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-orange/30 text-orange">
                      Draft
                    </Badge>
                  </div>
                </div>

                {/* Table of contents */}
                <div className="px-6 py-6 md:px-8">
                  <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Table of Contents
                  </p>
                  <div className="space-y-3">
                    {TEMPLATE_SECTIONS.map((section, idx) => (
                      <div
                        key={section.title}
                        className="flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:border-orange/30 hover:bg-orange/5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex size-7 items-center justify-center rounded-md bg-orange/10 text-xs font-bold text-orange">
                            {idx + 1}
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {section.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            {section.pages}
                          </span>
                          <ChevronRight className="size-4 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download area */}
                <div className="border-t border-border px-6 py-5 md:px-8">
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                    <p className="text-sm text-muted-foreground">
                      Generated plan will be available as PDF download
                    </p>
                    <Button
                      disabled
                      size="sm"
                      className="bg-orange text-white opacity-60"
                    >
                      <Download className="size-4" />
                      Download Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Plan Includes ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Plan Includes"
            title="What your business plan covers"
            subtitle="Six comprehensive sections designed to give you a strong foundation for your EV charging venture."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLAN_SECTIONS.map(({ icon: Icon, title, description }) => (
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

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Need a professional, investor-ready business plan?"
          description="Our consultants create detailed, customized business plans with real market data, validated financial models, and actionable strategies for your EV charging venture."
          primaryLabel="Get a Professional Business Plan"
          primaryHref="/consulting/managed"
          secondaryLabel="Explore All Tools"
          secondaryHref="/consulting/tools"
          variant="dark"
        />
      </div>
    </>
  );
}
