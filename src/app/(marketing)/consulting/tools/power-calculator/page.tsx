"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Activity,
  Cable,
  ShieldCheck,
  BarChart3,
  IndianRupee,
  Gauge,
  Lock,
  Calculator,
  Minus,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const CALCULATOR_FEATURES = [
  {
    icon: Activity,
    title: "Load Analysis",
    description:
      "Calculate total electrical load based on charger count, type, and simultaneous usage patterns.",
  },
  {
    icon: Zap,
    title: "Transformer Sizing",
    description:
      "Determine the right transformer capacity to support your charging infrastructure reliably.",
  },
  {
    icon: Cable,
    title: "Cable Specifications",
    description:
      "Get cable gauge, length, and routing recommendations for safe power delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Protection Requirements",
    description:
      "MCB, RCCB, surge protection, and earthing specifications for regulatory compliance.",
  },
  {
    icon: BarChart3,
    title: "Energy Consumption",
    description:
      "Monthly and annual energy consumption estimates based on your usage profile.",
  },
  {
    icon: IndianRupee,
    title: "Cost Estimation",
    description:
      "Estimated electrical upgrade costs including transformer, cabling, and protection equipment.",
  },
];

const CALC_INPUTS = [
  { label: "Number of chargers", value: "4", unit: "chargers" },
  { label: "Charger type & power rating", value: "30 kW DC", unit: "" },
  { label: "Simultaneous charging %", value: "75", unit: "%" },
  { label: "Existing power capacity", value: "50", unit: "kW" },
];

const CALC_OUTPUTS = [
  { label: "Total power required", value: "120", unit: "kW", highlight: true },
  { label: "Transformer capacity needed", value: "150", unit: "kVA", highlight: false },
  { label: "Estimated electrical upgrade cost", value: "8.5", unit: "L", highlight: true },
  { label: "Monthly energy consumption", value: "14,400", unit: "kWh", highlight: false },
];

/* ─── Page ─── */

export default function PowerCalculatorPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              Free Tool
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Power Requirement{" "}
            <span className="text-orange">Calculator</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Calculate the electrical infrastructure needed for your charging
            setup. Understand power demands, transformer sizing, and upgrade
            costs before you invest.
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
              <Link href="/consulting/site-assessment">
                <Zap className="size-4" />
                Get a Professional Power Audit
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consulting/tools">
                All Free Tools
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Calculator Mockup ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Calculator Preview"
            title="See what the calculator computes"
            subtitle="Input your setup details and get instant power infrastructure estimates."
          />

          <ScrollReveal>
            <div className="relative mx-auto max-w-4xl">
              {/* Coming Soon overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-white/60 backdrop-blur-[2px]">
                <Badge className="bg-orange text-white text-base px-5 py-2 shadow-lg shadow-orange/25">
                  <Lock className="mr-2 size-4" />
                  Coming Soon
                </Badge>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-card md:p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Inputs panel */}
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-orange/10">
                        <Calculator className="size-5 text-orange" />
                      </div>
                      <h3 className="text-lg font-semibold">Your Inputs</h3>
                    </div>

                    <div className="space-y-5">
                      {CALC_INPUTS.map((input) => (
                        <div key={input.label}>
                          <label className="mb-2 block text-sm font-medium text-muted-foreground">
                            {input.label}
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex h-10 flex-1 items-center rounded-lg border border-border bg-muted/30 px-4">
                              <span className="flex-1 text-sm font-medium text-foreground">
                                {input.value}
                              </span>
                              {input.unit && (
                                <span className="text-xs text-muted-foreground">
                                  {input.unit}
                                </span>
                              )}
                            </div>
                            <div className="flex gap-1">
                              <div className="flex size-10 cursor-default items-center justify-center rounded-lg border border-border text-muted-foreground">
                                <Minus className="size-4" />
                              </div>
                              <div className="flex size-10 cursor-default items-center justify-center rounded-lg border border-border text-muted-foreground">
                                <Plus className="size-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outputs panel */}
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-orange/10">
                        <Gauge className="size-5 text-orange" />
                      </div>
                      <h3 className="text-lg font-semibold">Results</h3>
                    </div>

                    <div className="space-y-4">
                      {CALC_OUTPUTS.map((output) => (
                        <div
                          key={output.label}
                          className={`rounded-xl border p-4 ${
                            output.highlight
                              ? "border-orange/30 bg-orange/5"
                              : "border-border bg-muted/20"
                          }`}
                        >
                          <p className="text-sm text-muted-foreground">
                            {output.label}
                          </p>
                          <div className="mt-1 flex items-baseline gap-1">
                            <span
                              className={`text-2xl font-bold ${
                                output.highlight
                                  ? "text-orange"
                                  : "text-foreground"
                              }`}
                            >
                              {output.label.includes("cost")
                                ? `\u20b9${output.value}`
                                : output.value}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {output.unit}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Calculate ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What We Calculate"
            title="Comprehensive power infrastructure analysis"
            subtitle="Our calculator evaluates six critical parameters to ensure your charging setup is electrically sound and cost-effective."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CALCULATOR_FEATURES.map(({ icon: Icon, title, description }) => (
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
          headline="Need a professional power audit?"
          description="Our engineers conduct on-site power audits with detailed load analysis, transformer sizing, and infrastructure upgrade plans tailored to your location."
          primaryLabel="Get a Professional Power Audit"
          primaryHref="/consulting/site-assessment"
          secondaryLabel="Explore All Tools"
          secondaryHref="/consulting/tools"
          variant="dark"
        />
      </div>
    </>
  );
}
