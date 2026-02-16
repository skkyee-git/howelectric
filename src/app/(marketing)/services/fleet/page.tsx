"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Warehouse,
  Network,
  BarChart3,
  Clock,
  Plug,
  GraduationCap,
  MonitorSmartphone,
  ArrowRight,
  Truck,
  BatteryCharging,
  Scale,
  Cpu,
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
    icon: Network,
    title: "Depot Power Infrastructure Design",
    description:
      "Complete electrical infrastructure design for your depot — transformers, panels, distribution boards, and cabling architecture.",
  },
  {
    icon: Plug,
    title: "Multi-Bay Charger Deployment",
    description:
      "Installation of chargers across multiple bays with standardized connectors, cable management, and safety systems.",
  },
  {
    icon: BarChart3,
    title: "Load Management & Smart Scheduling",
    description:
      "Intelligent load balancing across all bays to optimize power usage and avoid demand charge penalties.",
  },
  {
    icon: Clock,
    title: "Overnight Charging Optimization",
    description:
      "Scheduling algorithms that prioritize overnight off-peak charging, maximizing cost savings for your fleet.",
  },
  {
    icon: MonitorSmartphone,
    title: "Fleet CMS Integration",
    description:
      "Connect your depot chargers to a centralized management system with fleet-wide visibility, analytics, and reporting.",
  },
  {
    icon: GraduationCap,
    title: "Driver Training & SOPs",
    description:
      "Structured training programs and standard operating procedures for drivers and depot staff on EV charging.",
  },
];

const PROCESS = [
  {
    step: 1,
    title: "Depot Assessment",
    description:
      "On-site evaluation of your depot — power capacity, parking layout, fleet size, and duty cycles.",
  },
  {
    step: 2,
    title: "Power Upgrade Design",
    description:
      "Electrical engineering design including transformer sizing, panel upgrades, and distribution architecture.",
  },
  {
    step: 3,
    title: "Phased Installation",
    description:
      "Chargers deployed in phases to minimize operational disruption while scaling capacity with your fleet.",
  },
  {
    step: 4,
    title: "CMS + Fleet Integration",
    description:
      "Connect chargers to your fleet management system for unified scheduling, tracking, and cost allocation.",
  },
  {
    step: 5,
    title: "Training & Go-Live",
    description:
      "Driver training, depot staff SOPs, and full system handover. Your depot is fully operational.",
  },
];

const KEY_SPECS = [
  {
    icon: Warehouse,
    title: "10 to 500+ Bays",
    description:
      "Scalable infrastructure designed to grow with your fleet — from a small depot to a multi-hundred-bay facility.",
  },
  {
    icon: BatteryCharging,
    title: "AC & DC Mixed Configurations",
    description:
      "Combine slower AC overnight charging with fast DC top-ups for vehicles needing quick turnarounds during the day.",
  },
  {
    icon: Scale,
    title: "Smart Load Balancing",
    description:
      "Dynamic power distribution across bays to avoid peak demand penalties and stay within your sanctioned load.",
  },
  {
    icon: Cpu,
    title: "Fleet Management Integration",
    description:
      "Seamless integration with existing fleet management, telematics, and route planning systems.",
  },
];

/* ─── Page ─── */

export default function FleetInstallationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-purple/5 blur-[100px]" />
        <div className="pointer-events-none absolute -right-60 bottom-0 size-[400px] rounded-full bg-purple/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-purple/10 text-purple border-purple/20">
              Fleet Depots
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Charging infrastructure{" "}
            <span className="text-purple">for fleet depots</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Multi-bay depot charging for delivery fleets, ride-hailing, corporate
            shuttles, and logistics. Designed for scale, optimized for cost.
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
                <Truck className="size-4" />
                Plan Your Depot
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consulting/fleet">
                Fleet Consulting
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
            title="Complete depot charging solution"
            subtitle="Everything you need to electrify your fleet depot — from power infrastructure to driver training."
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
            title="From assessment to go-live"
            subtitle="A phased approach to depot electrification that scales with your fleet and minimizes operational disruption."
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

      {/* ── Key Specs ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Key Specs"
            title="Built for fleet-scale operations"
            subtitle="Infrastructure designed to handle the unique demands of fleet depot charging — at any scale."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2">
            {KEY_SPECS.map(({ icon: Icon, title, description }) => (
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
                  <h3 className="text-xl font-semibold">{title}</h3>
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
          headline="Plan Your Depot"
          description="Our depot electrification team will assess your site, design the infrastructure, and build a phased deployment plan tailored to your fleet."
          primaryLabel="Plan Your Depot"
          primaryHref="/services/request"
          secondaryLabel="Fleet Consulting"
          secondaryHref="/consulting/fleet"
          variant="dark"
        />
      </div>
    </>
  );
}
