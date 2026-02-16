"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building,
  Landmark,
  BadgeIndianRupee,
  Shield,
  FileCheck2,
  Leaf,
  FileSignature,
  Scale,
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
    icon: Building,
    title: "DISCOM Approval Process",
    description:
      "End-to-end guidance on electricity distribution company approvals, load sanction, and metering for EV charging.",
  },
  {
    icon: Landmark,
    title: "State EV Policy Mapping",
    description:
      "Decode state-specific EV policies, incentive structures, and compliance requirements applicable to your location.",
  },
  {
    icon: BadgeIndianRupee,
    title: "FAME II / PM E-DRIVE Subsidy Guidance",
    description:
      "Navigate central subsidy schemes — eligibility criteria, documentation, application process, and disbursement tracking.",
  },
  {
    icon: Shield,
    title: "CEA & BIS Compliance",
    description:
      "Ensure your charging infrastructure meets Central Electricity Authority and Bureau of Indian Standards requirements.",
  },
  {
    icon: FileCheck2,
    title: "Land Use & Building Permissions",
    description:
      "Guidance on zoning, building permissions, fire NOCs, and structural approvals required for charging stations.",
  },
  {
    icon: Leaf,
    title: "Environmental Clearances",
    description:
      "Navigate environmental compliance requirements, including green building norms and pollution control board clearances.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Policy Review",
    description:
      "We audit all central, state, and local regulations applicable to your specific location and setup.",
  },
  {
    step: 2,
    title: "Documentation",
    description:
      "Our team prepares application-ready documentation for all required approvals and subsidies.",
  },
  {
    step: 3,
    title: "Application Support",
    description:
      "We guide you through the application process for each approval, subsidy, and compliance requirement.",
  },
  {
    step: 4,
    title: "Approval Follow-up",
    description:
      "Ongoing support to track application status, resolve queries, and ensure timely approvals.",
  },
];

const DELIVERABLES = [
  "State-specific regulatory checklist",
  "Application-ready documentation",
  "Subsidy eligibility assessment",
  "Compliance roadmap",
  "Government liaison support",
  "Post-approval compliance calendar",
];

/* ─── Page ─── */

export default function RegulatoryGuidancePage() {
  return (
    <>
      {/* ── Mini Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 -bottom-40 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              Regulatory Guidance
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Navigate EV charging regulations{" "}
            <span className="text-orange">with confidence</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            From DISCOM approvals to FAME II subsidies, India's EV regulatory
            landscape is complex and state-specific. Our experts handle the
            compliance maze so you can focus on building your business.
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
                <Scale className="size-4" />
                Get Regulatory Help
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
            title="Comprehensive regulatory coverage"
            subtitle="We handle every regulatory dimension — from power approvals to environmental clearances — across all applicable jurisdictions."
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
            title="From policy review to approved operations"
            subtitle="A structured approach that turns regulatory complexity into a clear, step-by-step compliance path."
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
            subtitle="A complete regulatory toolkit that keeps you compliant and on track."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-orange/20 bg-white p-8 shadow-card md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-orange/10">
                  <FileSignature className="size-5 text-orange" />
                </div>
                <h3 className="text-xl font-semibold">
                  Regulatory Guidance Package
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
          headline="Don't let regulations slow down your EV charging project"
          description="Our regulatory experts will map every approval you need, prepare your documentation, and support you through the entire process — so nothing falls through the cracks."
          primaryLabel="Get Regulatory Help"
          primaryHref="/consulting/book"
          secondaryLabel="Explore All Services"
          secondaryHref="/consulting"
          variant="dark"
        />
      </div>
    </>
  );
}
