"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Wifi,
  CreditCard,
  Zap,
  ShieldAlert,
  Monitor,
  Ticket,
  Wrench,
  ClipboardCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const KEY_STATS = [
  { value: "4-hour", label: "Average Response", icon: Clock },
  { value: "150+", label: "Cities Covered", icon: MapPin },
  { value: "95%", label: "First-Visit Fix Rate", icon: CheckCircle2 },
  { value: "24/7/365", label: "Availability", icon: Phone },
];

const ISSUES_HANDLED = [
  {
    icon: AlertTriangle,
    title: "Hardware Failures",
    description:
      "Component malfunctions, power module failures, display issues, and physical damage to charger units.",
  },
  {
    icon: Wifi,
    title: "Connectivity Issues",
    description:
      "Network dropouts, SIM card failures, OCPP communication errors, and backend connectivity problems.",
  },
  {
    icon: CreditCard,
    title: "Payment System Errors",
    description:
      "RFID reader faults, UPI/QR code failures, payment gateway timeouts, and transaction reconciliation issues.",
  },
  {
    icon: Zap,
    title: "Electrical Faults",
    description:
      "Tripped MCBs, earthing failures, voltage fluctuations, and power supply issues affecting charging output.",
  },
  {
    icon: ShieldAlert,
    title: "Vandalism Damage",
    description:
      "Physical damage from vandalism, cable theft, screen damage, and weather-related damage to outdoor units.",
  },
  {
    icon: Monitor,
    title: "Software Crashes",
    description:
      "Firmware crashes, boot loops, frozen displays, and application-level errors requiring on-site intervention.",
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    icon: Phone,
    title: "Call or WhatsApp Our Helpline",
    description:
      "Reach us 24/7 via phone or WhatsApp. Describe the issue and share your charger ID or location.",
  },
  {
    step: 2,
    icon: Ticket,
    title: "Ticket Created & Technician Dispatched",
    description:
      "We create a priority ticket, diagnose remotely if possible, and dispatch the nearest certified technician.",
  },
  {
    step: 3,
    icon: Wrench,
    title: "On-Site Diagnosis & Repair",
    description:
      "Our technician arrives with common spare parts, diagnoses the root cause, and performs the repair on-site.",
  },
  {
    step: 4,
    icon: ClipboardCheck,
    title: "Testing & Sign-Off",
    description:
      "Full functional testing, charging session verification, and sign-off with a detailed service report.",
  },
];

const METRO_CITIES = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad",
];

/* ─── Page ─── */

export default function EmergencyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-purple/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-purple/10 text-purple border-purple/20">
              Emergency Support
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            24/7 emergency{" "}
            <span className="text-purple">charger repair</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Charger down? Our nationwide network of certified technicians
            responds within hours, not days. Get your chargers back online fast.
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
                <AlertTriangle className="size-4" />
                Report an Issue
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services/amc">
                Get an AMC Plan Instead
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Key Stats Bar ── */}
      <section className="border-y border-border bg-light-gray py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerGrid className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {KEY_STATS.map(({ value, label, icon: Icon }) => (
              <StaggerItem key={label}>
                <motion.div
                  className="text-center"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 16 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl bg-purple/10 text-purple">
                    <Icon className="size-6" />
                  </div>
                  <p className="text-2xl font-bold text-foreground md:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What We Handle"
            title="Any issue, any charger, any time"
            subtitle="Our technicians are trained to handle the full spectrum of EV charger failures, from hardware to software."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ISSUES_HANDLED.map(({ icon: Icon, title, description }) => (
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

      {/* ── How It Works ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="From call to resolution in 4 steps"
            subtitle="A streamlined process designed to minimize your charger downtime."
          />

          <div className="relative mx-auto max-w-4xl">
            {/* Connector line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-purple/40 via-purple/20 to-transparent md:left-8 lg:block" />

            <div className="space-y-12">
              {PROCESS_STEPS.map(
                ({ step, icon: Icon, title, description }, idx) => (
                  <ScrollReveal key={step} delay={idx * 0.1}>
                    <div className="flex gap-6 md:gap-8">
                      <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-purple text-lg font-bold text-white shadow-lg shadow-purple/20 md:size-16 md:text-xl">
                        {step}
                      </div>
                      <div className="pt-1 md:pt-3">
                        <div className="mb-2 flex items-center gap-2">
                          <Icon className="size-5 text-purple" />
                          <h3 className="text-xl font-semibold md:text-2xl">
                            {title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage Map ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Coverage"
            title="We cover 150+ cities across India"
            subtitle="Our growing network of certified technicians ensures rapid response wherever your chargers are deployed."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-purple/20 bg-gradient-to-br from-purple/5 to-transparent p-8 shadow-card md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-purple/10">
                  <MapPin className="size-5 text-purple" />
                </div>
                <h3 className="text-xl font-semibold">
                  Major Metro Coverage
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {METRO_CITIES.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm border border-border"
                  >
                    <MapPin className="size-4 shrink-0 text-purple" />
                    <span className="text-sm font-medium text-foreground">
                      {city}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-purple/10 px-6 py-4">
                <CheckCircle2 className="size-5 text-purple" />
                <p className="font-medium text-foreground">
                  ...and <span className="text-purple font-bold">140+</span>{" "}
                  more cities across India
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Charger down? We'll get it back online."
          description="Report your issue now and our team will have a certified technician on their way within hours. Available 24/7, 365 days a year."
          primaryLabel="Report an Issue"
          primaryHref="/services/request"
          secondaryLabel="Get an AMC Plan Instead"
          secondaryHref="/services/amc"
          variant="dark"
        />
      </div>
    </>
  );
}
