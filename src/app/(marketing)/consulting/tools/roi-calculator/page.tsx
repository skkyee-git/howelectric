"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  IndianRupee,
  BarChart3,
  Wrench,
  Building2,
  Gift,
  Gauge,
  ChevronLeft,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/CTABanner";
import { DURATION } from "@/lib/animations";

/* ─── Factors data ─── */
const FACTORS = [
  {
    icon: IndianRupee,
    title: "Energy Costs",
    description: "Commercial electricity rates, time-of-use pricing, and demand charges",
  },
  {
    icon: Gauge,
    title: "Utilization Rates",
    description: "Expected daily sessions based on location type and traffic patterns",
  },
  {
    icon: Building2,
    title: "Hardware Costs",
    description: "Charger unit pricing across AC and DC configurations",
  },
  {
    icon: Wrench,
    title: "Installation Costs",
    description: "Civil work, electrical upgrades, transformer requirements",
  },
  {
    icon: Gift,
    title: "Subsidies & Incentives",
    description: "Applicable central and state government financial support",
  },
  {
    icon: BarChart3,
    title: "Maintenance Costs",
    description: "Annual maintenance, software licenses, and insurance estimates",
  },
];

/* ─── Charger type options ─── */
const CHARGER_TYPES = ["AC 7kW", "AC 22kW", "DC 30kW", "DC 60kW"];
const LOCATION_TYPES = ["Highway", "Urban", "Mall", "Residential"];

/* ─── Result preview items ─── */
const RESULT_ITEMS = [
  { label: "Monthly Revenue", value: "₹1,24,500" },
  { label: "Monthly Costs", value: "₹68,200" },
  { label: "Payback Period", value: "2.4 Years" },
  { label: "5-Year ROI", value: "312%" },
];

export default function ROICalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#050d18] py-24 lg:py-32">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Aurora blobs */}
        <motion.div
          className="pointer-events-none absolute left-1/3 top-0 size-[500px] rounded-full bg-orange/10 blur-[140px]"
          animate={{ x: [0, 50, -25, 0], y: [0, -35, 25, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-1/4 size-[350px] rounded-full bg-electric-blue/8 blur-[110px]"
          animate={{ x: [0, -60, 30, 0], y: [0, 25, -40, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05, duration: DURATION.normal }}
            className="mb-8 flex justify-center"
          >
            <Link
              href="/consulting/tools"
              className="inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white/70"
            >
              <ChevronLeft className="size-4" />
              All Tools
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-orange/20">
                <Calculator className="size-3 text-orange" />
              </span>
              Free Tool
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            EV Charging{" "}
            <span className="bg-gradient-to-r from-orange via-[#FBBF24] to-orange bg-clip-text text-transparent">
              ROI Calculator
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Estimate your revenue, costs, and payback period for EV charging
            stations.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Calculator Mockup Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white shadow-card-hover">
              {/* Coming Soon overlay */}
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/60 backdrop-blur-[2px]">
                <div className="text-center">
                  <Badge className="border-0 bg-orange px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange/25">
                    Coming Soon
                  </Badge>
                  <p className="mt-3 text-sm text-muted-foreground">
                    This calculator is under development
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2">
                {/* Input side */}
                <div className="border-b border-border/50 p-8 lg:border-b-0 lg:border-r">
                  <h3 className="text-xl font-bold text-foreground">
                    Calculator Inputs
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Configure your setup parameters
                  </p>

                  <div className="mt-8 space-y-6">
                    {/* Number of chargers slider */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foreground">
                          Number of Chargers
                        </label>
                        <span className="text-sm font-semibold text-orange">
                          4
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-light-gray">
                        <div className="h-2 w-2/5 rounded-full bg-gradient-to-r from-orange to-[#FBBF24]" />
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>1</span>
                        <span>10</span>
                      </div>
                    </div>

                    {/* Charger type */}
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Charger Type
                      </label>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {CHARGER_TYPES.map((type, i) => (
                          <div
                            key={type}
                            className={`rounded-lg border px-3 py-2 text-center text-sm ${
                              i === 2
                                ? "border-orange bg-orange/5 font-medium text-orange"
                                : "border-border/50 text-muted-foreground"
                            }`}
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Location type */}
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Location Type
                      </label>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {LOCATION_TYPES.map((type, i) => (
                          <div
                            key={type}
                            className={`rounded-lg border px-3 py-2 text-center text-sm ${
                              i === 0
                                ? "border-orange bg-orange/5 font-medium text-orange"
                                : "border-border/50 text-muted-foreground"
                            }`}
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Average sessions */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foreground">
                          Average Sessions / Day
                        </label>
                        <span className="text-sm font-semibold text-orange">
                          12
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-light-gray">
                        <div className="h-2 w-3/5 rounded-full bg-gradient-to-r from-orange to-[#FBBF24]" />
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>1</span>
                        <span>30</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results side */}
                <div className="bg-light-gray/50 p-8">
                  <h3 className="text-xl font-bold text-foreground">
                    Results Preview
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Estimated financial projections
                  </p>

                  <div className="mt-8 space-y-4">
                    {RESULT_ITEMS.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-xl border border-border/50 bg-white p-4"
                      >
                        <span className="text-sm text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="text-lg font-bold text-foreground">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button
                      size="lg"
                      className="w-full bg-orange font-semibold text-white hover:bg-orange/90"
                      disabled
                    >
                      Calculate ROI
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What This Calculator Considers */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Methodology
            </p>
            <h2 className="mt-3">What this calculator considers</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our ROI model accounts for all the key financial variables that
              affect EV charging profitability.
            </p>
          </ScrollReveal>

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACTORS.map((factor) => {
              const Icon = factor.icon;
              return (
                <StaggerItem key={factor.title}>
                  <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-card">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-orange/10">
                      <Icon className="size-5 text-orange" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {factor.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {factor.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <CTABanner
          headline="Get a Custom ROI Analysis"
          description="Our consultants can build a detailed, location-specific ROI projection for your EV charging business with data-backed assumptions."
          primaryLabel="Get Custom Analysis"
          primaryHref="/consulting/roi"
          secondaryLabel="Back to Tools"
          secondaryHref="/consulting/tools"
          variant="dark"
        />
      </div>
    </>
  );
}
