"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Fuel,
  Wrench,
  BadgeCheck,
  Leaf,
  Package,
  Car,
  Bus,
  Truck,
  Landmark,
  GraduationCap,
  BarChart3,
  Building2,
  Route,
  Plug,
  CalendarRange,
  Users,
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

const BENEFITS = [
  {
    icon: Fuel,
    title: "40-60% Lower Fuel Costs",
    description:
      "Electricity costs a fraction of diesel or petrol. Fleet operators see dramatic savings from day one of electrification.",
  },
  {
    icon: Wrench,
    title: "Reduced Maintenance Expenses",
    description:
      "EVs have fewer moving parts. No oil changes, fewer brake replacements, and lower overall maintenance spend.",
  },
  {
    icon: BadgeCheck,
    title: "Government Subsidies & Incentives",
    description:
      "Take advantage of FAME-II subsidies, state-level incentives, GST benefits, and green energy credits.",
  },
  {
    icon: Leaf,
    title: "ESG Compliance & Green Credentials",
    description:
      "Meet corporate sustainability targets, reduce carbon footprint, and strengthen your ESG reporting with verified data.",
  },
];

const FLEET_TYPES = [
  { icon: Package, label: "Last-Mile Delivery" },
  { icon: Car, label: "Ride-Hailing & Taxis" },
  { icon: Bus, label: "Corporate Shuttle Services" },
  { icon: Truck, label: "Logistics & Trucking" },
  { icon: Landmark, label: "Government Fleet" },
  { icon: GraduationCap, label: "School & Employee Transport" },
];

const DELIVERABLES = [
  {
    icon: BarChart3,
    title: "Fleet TCO Analysis",
    description:
      "Comprehensive total cost of ownership comparison between your ICE fleet and the EV alternative over 5-7 years.",
  },
  {
    icon: Building2,
    title: "Depot Charging Design",
    description:
      "Optimal charger layout for your depots — including load management, phased deployment, and power upgrade plans.",
  },
  {
    icon: Route,
    title: "Route-Based Charging Strategy",
    description:
      "Analysis of your routes to identify en-route charging needs, opportunity charging locations, and range requirements.",
  },
  {
    icon: Plug,
    title: "Vehicle-Charger Matching",
    description:
      "Recommend the right EV models and charger types based on your duty cycles, payload, and range needs.",
  },
  {
    icon: CalendarRange,
    title: "Phased Transition Roadmap",
    description:
      "A realistic, budget-friendly timeline to transition your fleet from ICE to electric in manageable phases.",
  },
  {
    icon: Users,
    title: "Driver Training Program",
    description:
      "Structured training covering EV operation, range management, charging protocols, and emergency procedures.",
  },
];

/* ─── Page ─── */

export default function FleetConsultingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              Fleet Solutions
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Electrify your fleet{" "}
            <span className="text-orange">with confidence</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Plan your fleet electrification journey — from depot design to TCO
            optimization.
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
                <Truck className="size-4" />
                Plan Your Fleet Electrification
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

      {/* ── Why Electrify Your Fleet ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Why Electrify"
            title="Why electrify your fleet"
            subtitle="Fleet electrification isn't just good for the environment — it's a smart business decision with measurable financial benefits."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
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

      {/* ── Fleet Types We Serve ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Fleet Types"
            title="Fleet types we serve"
            subtitle="From last-mile delivery vans to intercity logistics trucks, we have the expertise to electrify any fleet."
          />

          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET_TYPES.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <motion.div
                  className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-orange/10 text-orange">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-semibold text-foreground">{label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── What We Deliver ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What We Deliver"
            title="What we deliver"
            subtitle="A comprehensive fleet electrification package covering every aspect of your transition from ICE to electric."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map(({ icon: Icon, title, description }) => (
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
          headline="Plan Your Fleet Electrification"
          description="Our fleet consultants will analyze your operations, build a business case, and design a phased transition plan — so you electrify with confidence."
          primaryLabel="Plan Your Fleet Electrification"
          primaryHref="/consulting/book"
          secondaryLabel="Explore All Services"
          secondaryHref="/consulting"
          variant="dark"
        />
      </div>
    </>
  );
}
