"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flag,
  Layers,
  MapPinned,
  Users,
  Cloud,
  Heart,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Badge } from "@/components/ui/badge";
import { DURATION, STAGGER } from "@/lib/animations";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const DIFFERENTIATORS = [
  {
    icon: Flag,
    title: "India-First",
    description:
      "Built for Indian regulations, payments, and infrastructure from day one. FAME-II, state subsidies, UPI, and GST compliance baked in.",
    gradient: "from-electric-blue to-teal",
  },
  {
    icon: Layers,
    title: "Full-Stack Platform",
    description:
      "Consulting + Installation + CMS + Academy -- all under one roof. No need to juggle multiple vendors.",
    gradient: "from-teal to-green",
  },
  {
    icon: MapPinned,
    title: "150+ Cities",
    description:
      "Nationwide installer network for pan-India coverage. Whether it's a metro city or a tier-3 town, we've got you covered.",
    gradient: "from-navy to-electric-blue",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "200+ projects delivered with 95% success rate. Our team brings deep domain expertise across the EV ecosystem.",
    gradient: "from-electric-blue to-navy",
  },
  {
    icon: Cloud,
    title: "Technology-Led",
    description:
      "Cloud CMS, OCPP 2.0.1, real-time analytics, and API-first architecture. Enterprise-grade tech for every scale.",
    gradient: "from-teal to-electric-blue",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "2,000+ certified professionals in our network. Academy graduates, installers, and operators forming India's largest EV community.",
    gradient: "from-green to-teal",
  },
];

const COMPARISON_ROWS = [
  {
    dimension: "Time to launch",
    howelectric: "4-6 weeks with end-to-end support",
    diy: "3-6 months with multiple vendor coordination",
  },
  {
    dimension: "Expert guidance",
    howelectric: "Dedicated consulting team with 200+ projects delivered",
    diy: "Self-research with no domain expertise",
  },
  {
    dimension: "Nationwide support",
    howelectric: "150+ cities with certified installer network",
    diy: "Limited to local contractors",
  },
  {
    dimension: "Technology platform",
    howelectric: "Cloud CMS with OCPP 2.0.1, analytics & mobile app",
    diy: "Manual operations or basic third-party tools",
  },
  {
    dimension: "Cost efficiency",
    howelectric: "Bundled pricing with vendor-negotiated rates",
    diy: "Higher costs due to fragmented procurement",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.2,
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function WhyUsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050d18] py-28 sm:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/3 top-0 size-[700px] rounded-full bg-electric-blue/10 blur-[150px]"
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-1/4 size-[400px] rounded-full bg-teal/8 blur-[120px]"
          animate={{ x: [0, -80, 40, 0], y: [0, 30, -50, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-electric-blue/20">
                <Flag className="size-3 text-electric-blue" />
              </span>
              Why Us
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
          >
            Why choose{" "}
            <span className="bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent">
              HowElectric?
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: DURATION.slow }}
          >
            India&apos;s only full-stack EV charging platform -- from consulting
            to installation, CMS to education.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── 6 Differentiators ────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Edge"
            title="What sets us apart"
            subtitle="Six reasons businesses and entrepreneurs choose HowElectric over the alternatives."
          />

          <motion.div
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {DIFFERENTIATORS.map(({ icon: Icon, title, description, gradient }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                className="group flex flex-col rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient}`}
                >
                  <Icon className="size-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeader
            badge="Comparison"
            title="HowElectric vs Doing It Yourself"
            subtitle="See the difference a dedicated EV infrastructure partner makes."
          />

          <ScrollReveal className="mt-14">
            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm sm:block">
              {/* Header row */}
              <div className="grid grid-cols-3 border-b border-border/50 bg-gray-50">
                <div className="p-5 text-sm font-semibold text-muted-foreground">
                  Dimension
                </div>
                <div className="border-l border-border/50 p-5 text-sm font-semibold text-electric-blue">
                  HowElectric
                </div>
                <div className="border-l border-border/50 p-5 text-sm font-semibold text-muted-foreground">
                  Doing It Yourself
                </div>
              </div>

              {/* Data rows */}
              {COMPARISON_ROWS.map(({ dimension, howelectric, diy }, idx) => (
                <div
                  key={dimension}
                  className={`grid grid-cols-3 ${
                    idx < COMPARISON_ROWS.length - 1
                      ? "border-b border-border/50"
                      : ""
                  }`}
                >
                  <div className="p-5 text-sm font-medium">{dimension}</div>
                  <div className="flex items-start gap-2 border-l border-border/50 bg-electric-blue/[0.02] p-5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-electric-blue" />
                    {howelectric}
                  </div>
                  <div className="flex items-start gap-2 border-l border-border/50 p-5 text-sm text-muted-foreground">
                    <XCircle className="mt-0.5 size-4 shrink-0 text-gray-400" />
                    {diy}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="flex flex-col gap-6 sm:hidden">
              {COMPARISON_ROWS.map(({ dimension, howelectric, diy }) => (
                <div
                  key={dimension}
                  className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm"
                >
                  <h4 className="text-sm font-semibold">{dimension}</h4>
                  <div className="mt-4 flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-electric-blue" />
                    <div>
                      <span className="font-medium text-electric-blue">
                        HowElectric:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {howelectric}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-start gap-2 text-sm">
                    <XCircle className="mt-0.5 size-4 shrink-0 text-gray-400" />
                    <div>
                      <span className="font-medium text-gray-500">DIY:</span>{" "}
                      <span className="text-muted-foreground">{diy}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <CTABanner
          headline="Ready to start your EV charging journey?"
          description="Let our team of experts guide you from planning to launch. Book a free consultation today."
          primaryLabel="Start Your Journey"
          primaryHref="/consulting"
          secondaryLabel="Talk to an Expert"
          secondaryHref="/contact"
          variant="dark"
        />
      </div>
    </>
  );
}
