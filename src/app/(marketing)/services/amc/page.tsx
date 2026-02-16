"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Wrench,
  Clock,
  CheckCircle2,
  ArrowRight,
  Zap,
  Cpu,
  ShieldCheck,
  Cable,
  CreditCard,
  Gauge,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const AMC_TIERS = [
  {
    name: "Basic",
    price: "5,000",
    period: "per charger / year",
    description:
      "Essential coverage for small deployments that need reliable upkeep.",
    features: [
      "Quarterly preventive maintenance",
      "Phone & email support (business hours)",
      "48-hour response time",
      "Annual electrical safety check",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "12,000",
    period: "per charger / year",
    description:
      "Comprehensive maintenance for growing networks that can't afford downtime.",
    features: [
      "Monthly preventive maintenance",
      "Priority phone support (12 hrs)",
      "24-hour response time",
      "Firmware updates",
      "Spare parts at cost",
      "Bi-annual safety audit",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "20,000",
    period: "per charger / year",
    description:
      "Maximum uptime guarantee for mission-critical charging infrastructure.",
    features: [
      "Monthly preventive maintenance",
      "24/7 dedicated support",
      "4-hour response time",
      "Free spare parts",
      "Firmware updates",
      "Quarterly performance reports",
      "Dedicated account manager",
      "99.5% uptime SLA",
    ],
    highlighted: false,
  },
];

const COVERAGE_ITEMS = [
  {
    icon: Wrench,
    title: "Hardware Inspection",
    description:
      "Thorough inspection of all physical components, connectors, and enclosures for wear and damage.",
  },
  {
    icon: Cpu,
    title: "Software & Firmware Updates",
    description:
      "Keep your chargers running the latest stable firmware with security patches and feature improvements.",
  },
  {
    icon: ShieldCheck,
    title: "Electrical Safety Checks",
    description:
      "Comprehensive electrical testing including earthing, insulation resistance, and RCD verification.",
  },
  {
    icon: Cable,
    title: "Connector & Cable Testing",
    description:
      "Inspect and test all charging cables, connectors, and locking mechanisms for safe, reliable operation.",
  },
  {
    icon: CreditCard,
    title: "Payment System Verification",
    description:
      "Validate RFID readers, UPI/QR modules, and payment gateway connectivity for seamless transactions.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Analyze charging efficiency, power output, and session data to optimize charger performance.",
  },
];

/* ─── Page ─── */

export default function AMCPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-purple/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-purple/10 text-purple border-purple/20">
              AMC Plans
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Keep your chargers running{" "}
            <span className="text-purple">24/7</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Annual maintenance contracts with guaranteed uptime SLAs, preventive
            maintenance, and priority support. Choose the plan that fits your
            scale.
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
              className="bg-purple px-6 font-semibold text-white hover:bg-purple/90"
            >
              <Link href="/services/request">
                <Shield className="size-4" />
                Get an AMC Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                All Services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── AMC Tiers ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Pricing Plans"
            title="Choose the AMC plan that fits your needs"
            subtitle="From basic coverage to enterprise-grade SLAs, we have a plan for every deployment size."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {AMC_TIERS.map((tier) => (
              <StaggerItem key={tier.name}>
                <motion.div
                  className={`group relative flex h-full flex-col rounded-2xl border p-8 shadow-card transition-shadow hover:shadow-card-hover ${
                    tier.highlighted
                      ? "border-purple bg-white ring-2 ring-purple/20"
                      : "border-border bg-white"
                  }`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-purple text-white border-0 shadow-lg shadow-purple/20">
                        <Star className="mr-1 size-3" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      &#8377;{tier.price}
                    </span>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {tier.period}
                    </span>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-purple" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className={
                      tier.highlighted
                        ? "bg-purple font-semibold text-white hover:bg-purple/90"
                        : "bg-navy font-semibold text-white hover:bg-navy/90"
                    }
                  >
                    <Link href="/services/request">Get a Quote</Link>
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── What AMC Covers ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What's Covered"
            title="Comprehensive maintenance that keeps you running"
            subtitle="Every AMC plan includes thorough inspections across all critical charger systems."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COVERAGE_ITEMS.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-purple/10 text-purple transition-colors group-hover:bg-purple group-hover:text-white">
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
          headline="Protect your investment with an AMC plan"
          description="Get a customized annual maintenance contract that keeps your chargers at peak performance. Request a quote and our team will respond within 24 hours."
          primaryLabel="Get an AMC Quote"
          primaryHref="/services/request"
          secondaryLabel="Explore All Services"
          secondaryHref="/services"
          variant="dark"
        />
      </div>
    </>
  );
}
