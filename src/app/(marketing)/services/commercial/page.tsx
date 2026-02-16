"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Gauge,
  LayoutGrid,
  ParkingCircle,
  CreditCard,
  Monitor,
  Users,
  ShoppingBag,
  Hotel,
  HeartPulse,
  Briefcase,
  Home,
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

const INCLUDED = [
  {
    icon: Gauge,
    title: "Load Assessment & Power Audit",
    description:
      "Comprehensive electrical audit of your premises to determine available capacity, required upgrades, and optimal charger placement.",
  },
  {
    icon: LayoutGrid,
    title: "Multi-Charger Deployment Planning",
    description:
      "Strategic layout design for multiple chargers — maximizing coverage while minimizing infrastructure costs.",
  },
  {
    icon: ParkingCircle,
    title: "Signage & Parking Bay Marking",
    description:
      "Professional EV parking signage, bay markings, and wayfinding to guide drivers to your charging stations.",
  },
  {
    icon: CreditCard,
    title: "Payment System Integration",
    description:
      "UPI, card, and RFID payment integration so you can monetize your charging infrastructure from day one.",
  },
  {
    icon: Monitor,
    title: "CMS Platform Setup",
    description:
      "Full charging management system deployment — real-time monitoring, analytics, remote management, and reporting.",
  },
  {
    icon: Users,
    title: "Employee/Visitor Access Management",
    description:
      "Configure user roles, access controls, and pricing tiers for employees, visitors, and tenants.",
  },
];

const PROCESS = [
  {
    step: 1,
    title: "Consultation",
    description:
      "Understand your business needs, expected utilization, and commercial objectives for EV charging.",
  },
  {
    step: 2,
    title: "Design & Engineering",
    description:
      "Detailed site design, electrical engineering, charger selection, and infrastructure planning.",
  },
  {
    step: 3,
    title: "Installation",
    description:
      "Professional installation by certified teams with minimal disruption to your business operations.",
  },
  {
    step: 4,
    title: "CMS Integration",
    description:
      "Connect chargers to the management platform, configure pricing, access controls, and reporting.",
  },
  {
    step: 5,
    title: "Go-Live",
    description:
      "Final testing, staff training, and launch. Your commercial charging station is operational.",
  },
];

const WHO_ITS_FOR = [
  { icon: Building2, label: "Office Complexes" },
  { icon: ShoppingBag, label: "Shopping Malls & Retail" },
  { icon: Hotel, label: "Hotels & Hospitality" },
  { icon: HeartPulse, label: "Hospitals & Healthcare" },
  { icon: Briefcase, label: "Co-Working Spaces" },
  { icon: Home, label: "Residential Societies" },
];

/* ─── Page ─── */

export default function CommercialInstallationPage() {
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
              Commercial
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            EV charging{" "}
            <span className="text-purple">for your business</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Deploy charging infrastructure at offices, malls, hotels, and retail
            locations. Attract EV drivers, future-proof your property, and
            generate new revenue.
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
                <Building2 className="size-4" />
                Get a Commercial Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/cms">
                See CMS Platform
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
            title="End-to-end commercial installation"
            subtitle="From power audit to CMS deployment — everything you need to launch EV charging at your commercial property."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map(({ icon: Icon, title, description }) => (
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

      {/* ── Process ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="From consultation to go-live"
            subtitle="A structured, professional process that minimizes disruption and maximizes results for your business."
          />

          <div className="mx-auto max-w-3xl">
            {PROCESS.map(({ step, title, description }, index) => (
              <ScrollReveal key={step} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Connector line */}
                  {index < PROCESS.length - 1 && (
                    <div className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-purple/20" />
                  )}

                  {/* Step number */}
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-purple text-lg font-bold text-white">
                    {step}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-muted-foreground">{description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Who It's For"
            title="Built for every commercial property"
            subtitle="We design and deploy EV charging solutions tailored to your property type, footfall, and business objectives."
          />

          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_ITS_FOR.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <motion.div
                  className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-purple/10 text-purple">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-semibold text-foreground">{label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Get a Commercial Quote"
          description="Our team will assess your property, design the optimal charging layout, and deliver a detailed proposal — typically within 5 business days."
          primaryLabel="Get a Commercial Quote"
          primaryHref="/services/request"
          secondaryLabel="See CMS Platform"
          secondaryHref="/cms"
          variant="dark"
        />
      </div>
    </>
  );
}
