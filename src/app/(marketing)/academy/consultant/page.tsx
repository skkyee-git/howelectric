"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  ArrowRight,
  MapPin,
  Calculator,
  Scale,
  Cpu,
  Building2,
  Globe,
  Clock,
  Monitor,
  Award,
  IndianRupee,
  FileSearch,
  Presentation,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const COURSE_DETAILS = [
  { icon: Clock, label: "Duration", value: "6 weeks (online)" },
  { icon: Monitor, label: "Format", value: "Live classes + case studies" },
  { icon: Award, label: "Certificate", value: "HowElectric Certified Consultant" },
  { icon: IndianRupee, label: "Fee", value: "\u20B925,000" },
];

const CURRICULUM = [
  {
    module: 1,
    title: "EV Market Landscape & Trends",
    icon: Globe,
    description:
      "Global and Indian EV adoption trends, market sizing, competitive landscape, and future projections.",
  },
  {
    module: 2,
    title: "Feasibility Analysis Methodology",
    icon: FileSearch,
    description:
      "Structured frameworks for evaluating EV charging opportunities, demand modeling, and risk assessment.",
  },
  {
    module: 3,
    title: "Site Assessment Frameworks",
    icon: MapPin,
    description:
      "Location scoring models, traffic analysis, power availability checks, and site comparison matrices.",
  },
  {
    module: 4,
    title: "Financial Modeling & ROI",
    icon: Calculator,
    description:
      "Build detailed financial models, calculate IRR/NPV, model scenarios, and present investor-ready projections.",
  },
  {
    module: 5,
    title: "Regulatory & Subsidy Landscape",
    icon: Scale,
    description:
      "Navigate FAME II, state EV policies, DISCOM procedures, and help clients access available subsidies.",
  },
  {
    module: 6,
    title: "Technology Selection",
    icon: Cpu,
    description:
      "Evaluate charger types, CMS platforms, connector standards, and make technology recommendations for clients.",
  },
  {
    module: 7,
    title: "Client Management & Reporting",
    icon: Presentation,
    description:
      "Structure engagements, deliver compelling reports, manage stakeholder expectations, and build trust.",
  },
  {
    module: 8,
    title: "Building a Consulting Practice",
    icon: Building2,
    description:
      "Position your consulting brand, price your services, find clients, and build a sustainable practice.",
  },
];

const WHO_ITS_FOR = [
  {
    title: "Management Consultants",
    description:
      "Add EV infrastructure advisory to your service portfolio and tap into a high-growth sector.",
  },
  {
    title: "Energy Sector Professionals",
    description:
      "Leverage your industry knowledge to advise clients on EV charging strategy and implementation.",
  },
  {
    title: "Real Estate Advisors",
    description:
      "Help property developers and managers plan EV-ready infrastructure for future-proof buildings.",
  },
  {
    title: "Finance Professionals",
    description:
      "Build expertise in EV charging financial modeling, ROI analysis, and investment evaluation.",
  },
];

/* ─── Page ─── */

export default function ConsultantTrackPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-green/5 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 size-[300px] rounded-full bg-green/3 blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 border-green/20 bg-green/10 text-green">
              Consultant Track
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Become an{" "}
            <span className="text-green">EV charging consultant</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Advise businesses on EV charging strategy, site selection, ROI
            analysis, and regulatory compliance.
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
              className="bg-green px-6 font-semibold text-white hover:bg-green/90"
            >
              <Link href="https://howacademy.in/courses/ev-infrastructure/" target="_blank" rel="noopener noreferrer">
                <Briefcase className="size-4" />
                Enroll Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/academy">
                View All Tracks
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Course Details Card ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Course Details"
            title="What to expect"
            subtitle="A 6-week deep-dive program with live classes and real-world case studies."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-green/20 bg-white p-8 shadow-card">
              <div className="grid gap-6 sm:grid-cols-2">
                {COURSE_DETAILS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-base font-semibold text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Curriculum"
            title="8 strategic modules"
            subtitle="From market analysis to building your practice — develop the expertise to advise on EV charging strategy."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CURRICULUM.map(({ module, title, icon: Icon, description }) => (
              <StaggerItem key={module}>
                <motion.div
                  className="group h-full rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                    <Icon className="size-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-green">
                    Module {module}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Who It's For"
            title="Is this track right for you?"
            subtitle="The Consultant Track is designed for professionals who want to advise on EV charging strategy."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_ITS_FOR.map(({ title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
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
          headline="Ready to advise on EV charging?"
          description="Enroll in the Consultant Track and build the expertise to guide businesses through the EV transition."
          primaryLabel="Enroll Now"
          primaryHref="https://howacademy.in/courses/ev-infrastructure/"
          secondaryLabel="View All Tracks"
          secondaryHref="/academy"
          variant="dark"
        />
      </div>
    </>
  );
}
