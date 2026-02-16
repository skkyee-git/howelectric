"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Zap,
  Footprints,
  ParkingCircle,
  Cable,
  Radar,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
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
    icon: MapPin,
    title: "Location Scoring Algorithm",
    description:
      "Proprietary scoring model that rates every potential site across 20+ parameters for objective comparison.",
  },
  {
    icon: Zap,
    title: "Power Infrastructure Audit",
    description:
      "Assess transformer capacity, voltage stability, and grid connectivity to ensure reliable charging operations.",
  },
  {
    icon: Footprints,
    title: "Traffic & Footfall Analysis",
    description:
      "Analyze vehicle traffic patterns, dwell times, and footfall data to project charger utilization rates.",
  },
  {
    icon: ParkingCircle,
    title: "Parking Layout Optimization",
    description:
      "Design optimal charger placement within existing parking layouts for maximum throughput and user experience.",
  },
  {
    icon: Cable,
    title: "Grid Connectivity Check",
    description:
      "Verify DISCOM connectivity options, sanctioned load availability, and estimate upgrade costs if needed.",
  },
  {
    icon: Radar,
    title: "Competitor Proximity Mapping",
    description:
      "Map all existing and planned charging stations within a radius to identify competitive pressure and gaps.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Site Shortlist",
    description:
      "We help you shortlist 3-5 candidate locations based on initial criteria like traffic, visibility, and accessibility.",
  },
  {
    step: 2,
    title: "Physical Survey",
    description:
      "Our field team visits each site to assess physical layout, power infrastructure, and ground conditions.",
  },
  {
    step: 3,
    title: "Technical Audit",
    description:
      "Detailed electrical and civil audit including load analysis, cabling routes, and installation feasibility.",
  },
  {
    step: 4,
    title: "Score & Recommend",
    description:
      "Each site receives a weighted score out of 100 with a clear ranking and final recommendation.",
  },
];

const DELIVERABLES = [
  "Site score card (out of 100)",
  "Power availability report",
  "Layout recommendations with diagrams",
  "Infrastructure cost estimate",
  "Competitor density map",
  "Final recommendation with rankings",
];

/* ─── Page ─── */

export default function SiteAssessmentPage() {
  return (
    <>
      {/* ── Mini Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              Site Assessment
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Find the perfect location for your{" "}
            <span className="text-orange">charging station</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Location is everything. Our site assessment combines physical
            surveys, power audits, and data-driven scoring to find the spot that
            maximizes utilization and returns.
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
                <MapPin className="size-4" />
                Book a Site Assessment
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
            title="A thorough, multi-dimensional site evaluation"
            subtitle="We analyze every factor that influences the success of a charging station — from grid capacity to competitor proximity."
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
            title="From shortlist to selection in 4 steps"
            subtitle="A systematic approach that removes guesswork from one of the most critical decisions in EV charging."
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
            subtitle="A data-rich package to confidently choose the best site for your charging station."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-orange/20 bg-white p-8 shadow-card md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-orange/10">
                  <ClipboardCheck className="size-5 text-orange" />
                </div>
                <h3 className="text-xl font-semibold">
                  Site Assessment Package
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
          headline="Ready to find your ideal charging location?"
          description="Our experts will survey your candidate sites, crunch the numbers, and deliver a clear recommendation — so you invest in the right spot."
          primaryLabel="Book a Site Assessment"
          primaryHref="/consulting/book"
          secondaryLabel="Explore All Services"
          secondaryHref="/consulting"
          variant="dark"
        />
      </div>
    </>
  );
}
