"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarClock,
  KeyRound,
  BarChart3,
  Gauge,
  Route,
  Receipt,
  Package,
  Car,
  Bus,
  Truck,
  Building2,
  Train,
  ArrowRight,
  Zap,
  Plug,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FEATURES = [
  {
    icon: CalendarClock,
    title: "Smart Scheduling",
    description:
      "Automatically schedule charging during off-peak hours to minimize energy costs. Priority queuing based on departure times.",
  },
  {
    icon: KeyRound,
    title: "Driver PIN Access",
    description:
      "Unique PIN codes for each driver. Track who charged what, when, and where. Prevent unauthorized usage at your depot.",
  },
  {
    icon: BarChart3,
    title: "Per-vehicle Analytics",
    description:
      "Detailed charging data for every vehicle in your fleet. Energy consumption, charging patterns, and cost-per-km insights.",
  },
  {
    icon: Gauge,
    title: "Depot Load Management",
    description:
      "Intelligent load balancing prevents grid overload. Distribute power across chargers based on priority and available capacity.",
  },
  {
    icon: Route,
    title: "Route-based Charging",
    description:
      "Plan charging stops along routes. Ensure vehicles have enough charge for their next trip based on distance and load.",
  },
  {
    icon: Receipt,
    title: "Fleet Billing & Cost Allocation",
    description:
      "Allocate charging costs to departments, routes, or vehicles. Generate detailed cost reports for fleet accounting.",
  },
];

const FLEET_TYPES = [
  {
    icon: Package,
    title: "Last-mile Delivery",
    description: "E-commerce, food delivery, and courier fleets",
  },
  {
    icon: Car,
    title: "Ride-hailing",
    description: "EV taxi and ride-sharing operator fleets",
  },
  {
    icon: Bus,
    title: "Corporate Shuttles",
    description: "Employee transport and campus shuttle services",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Long-haul and regional logistics operators",
  },
  {
    icon: Building2,
    title: "Government Fleet",
    description: "Municipal vehicles and government transport",
  },
  {
    icon: Train,
    title: "Public Transport",
    description: "Electric bus depots and public transit authorities",
  },
];

export default function FleetPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-dark-gray py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-[300px] rounded-full bg-gold/5 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-gold/10 text-gold">
                For Fleet Operators
              </Badge>
            </motion.div>

            <motion.h1
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Manage depot charging for{" "}
              <span className="text-gold">your entire fleet</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Schedule overnight charging, manage driver access, optimize energy
              costs, and track per-vehicle charging data — all from a single
              fleet management dashboard.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy hover:bg-gold/90"
              >
                <Link href="/cms/demo">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/consulting/fleet">Fleet Consulting</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Fleet Needs CMS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Fleet Operations
              </p>
              <h2 className="mt-3">
                Why fleet operators need a CMS
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fleet charging is fundamentally different from public or
                residential charging. You need smart scheduling for overnight
                charging, granular driver access control, energy cost
                optimization, and per-vehicle tracking to keep your fleet
                running efficiently and profitably.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Schedule overnight charging during off-peak rates",
                  "Manage driver access and prevent unauthorized usage",
                  "Optimize energy costs with intelligent load balancing",
                  "Track per-vehicle charging data for cost allocation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <Zap className="size-3 text-gold" />
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.1}>
              <div className="rounded-3xl border border-border/50 bg-light-gray p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "30%", label: "Energy cost reduction" },
                    { value: "99.5%", label: "Fleet uptime achieved" },
                    { value: "Zero", label: "Unauthorized sessions" },
                    { value: "Real-time", label: "Vehicle tracking" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <p className="text-2xl font-bold text-gold">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Key Features"
            title="Purpose-built for fleet charging"
            subtitle="Advanced tools designed for the unique demands of commercial fleet operations."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="group h-full rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Fleet Types */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Fleet Types"
            title="For every fleet operation"
            subtitle="Whether you run 10 vehicles or 10,000 — HowElectric CMS scales with your fleet."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET_TYPES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-light-gray p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-sm">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Integration Callout */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-dark-gray p-8 md:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gold/15 blur-[80px]" />

              <div className="relative grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2">
                    <Plug className="size-5 text-gold" />
                    <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                      Integrations
                    </p>
                  </div>
                  <h2 className="mt-4 text-white">
                    Integrates with popular fleet management systems
                  </h2>
                  <p className="mt-4 text-lg text-white/70">
                    HowElectric CMS connects seamlessly with your existing fleet
                    management, telematics, and ERP systems through our open API
                    and pre-built integrations.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Fleet Telematics",
                    "ERP Systems",
                    "Route Planning",
                    "Fuel Card Systems",
                    "Driver Management",
                    "Energy Providers",
                  ].map((integration) => (
                    <div
                      key={integration}
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 backdrop-blur-sm"
                    >
                      <div className="size-2 rounded-full bg-gold" />
                      <p className="text-sm font-medium text-white/80">
                        {integration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recommended Plan */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Recommended Plans"
            title="Plans built for fleet scale"
            subtitle="Multi-depot operations need multi-site power. Choose the plan that fits your fleet."
          />

          <ScrollReveal>
            <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
              {/* Multi-Site */}
              <div className="rounded-2xl border-2 border-gold/30 bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Multi-Site</h3>
                  <Badge className="bg-gold/10 text-gold">Popular</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  For growing fleets
                </p>
                <p className="mt-4 text-2xl font-bold text-gold">₹7,999<span className="text-base font-normal text-muted-foreground">/mo</span></p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Multiple depot locations",
                    "Smart charging schedules",
                    "Driver PIN access",
                    "Per-vehicle analytics",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="size-3 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full bg-gold text-navy hover:bg-gold/90"
                >
                  <Link href="/cms/demo">
                    Start Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>

              {/* Enterprise */}
              <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  For large-scale operations
                </p>
                <p className="mt-4 text-2xl font-bold text-foreground">Custom<span className="text-base font-normal text-muted-foreground"> pricing</span></p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Unlimited depots & vehicles",
                    "Custom API integrations",
                    "Dedicated account manager",
                    "SLA-backed support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="size-3 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="mt-6 w-full"
                >
                  <Link href="/consulting/fleet">Talk to Sales</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Electrify your fleet operations"
            description="From last-mile delivery to public transport, HowElectric CMS powers fleet charging for India's leading operators. Get started today."
            primaryLabel="Start Free Trial"
            primaryHref="/cms/demo"
            secondaryLabel="Fleet Consulting"
            secondaryHref="/consulting/fleet"
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
}
