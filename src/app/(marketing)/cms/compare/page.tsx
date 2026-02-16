"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Minus,
  ArrowRight,
  MapPin,
  Layers,
  Zap,
  Clock,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type CellStatus = "best" | "ok" | "bad" | "na";

interface ComparisonRow {
  criteria: string;
  howelectric: string;
  howelectricStatus: CellStatus;
  generic: string;
  genericStatus: CellStatus;
  inhouse: string;
  inhouseStatus: CellStatus;
  nocms: string;
  nocmsStatus: CellStatus;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    criteria: "Setup time",
    howelectric: "1 day",
    howelectricStatus: "best",
    generic: "2-4 weeks",
    genericStatus: "ok",
    inhouse: "3-6 months",
    inhouseStatus: "bad",
    nocms: "N/A",
    nocmsStatus: "na",
  },
  {
    criteria: "OCPP support",
    howelectric: "1.6J + 2.0.1",
    howelectricStatus: "best",
    generic: "1.6J only",
    genericStatus: "ok",
    inhouse: "Custom",
    inhouseStatus: "ok",
    nocms: "None",
    nocmsStatus: "bad",
  },
  {
    criteria: "Indian payments (UPI/GST)",
    howelectric: "Built-in",
    howelectricStatus: "best",
    generic: "Add-on",
    genericStatus: "ok",
    inhouse: "Custom build",
    inhouseStatus: "bad",
    nocms: "Manual",
    nocmsStatus: "bad",
  },
  {
    criteria: "Driver app",
    howelectric: "Included",
    howelectricStatus: "best",
    generic: "Extra cost",
    genericStatus: "ok",
    inhouse: "Build yourself",
    inhouseStatus: "bad",
    nocms: "None",
    nocmsStatus: "bad",
  },
  {
    criteria: "White-label",
    howelectric: "Available",
    howelectricStatus: "best",
    generic: "Limited",
    genericStatus: "ok",
    inhouse: "Full control",
    inhouseStatus: "best",
    nocms: "N/A",
    nocmsStatus: "na",
  },
  {
    criteria: "Support",
    howelectric: "24/7 India-based",
    howelectricStatus: "best",
    generic: "Business hours",
    genericStatus: "ok",
    inhouse: "Self-support",
    inhouseStatus: "bad",
    nocms: "None",
    nocmsStatus: "bad",
  },
  {
    criteria: "Cost",
    howelectric: "From free",
    howelectricStatus: "best",
    generic: "$200+/mo",
    genericStatus: "ok",
    inhouse: "₹10L+ dev cost",
    inhouseStatus: "bad",
    nocms: "₹0",
    nocmsStatus: "ok",
  },
  {
    criteria: "Time to revenue",
    howelectric: "Day 1",
    howelectricStatus: "best",
    generic: "2-4 weeks",
    genericStatus: "ok",
    inhouse: "3-6 months",
    inhouseStatus: "bad",
    nocms: "N/A",
    nocmsStatus: "na",
  },
  {
    criteria: "Scalability",
    howelectric: "Unlimited",
    howelectricStatus: "best",
    generic: "Limited",
    genericStatus: "ok",
    inhouse: "Depends",
    inhouseStatus: "ok",
    nocms: "N/A",
    nocmsStatus: "na",
  },
  {
    criteria: "Updates",
    howelectric: "Automatic",
    howelectricStatus: "best",
    generic: "Manual",
    genericStatus: "ok",
    inhouse: "Self-managed",
    inhouseStatus: "bad",
    nocms: "None",
    nocmsStatus: "bad",
  },
];

const ADVANTAGES = [
  {
    icon: MapPin,
    title: "India-first Design",
    description:
      "Built specifically for the Indian market — UPI payments, GST invoicing, regional language support, and compliance with Indian EV charging standards baked in from day one.",
  },
  {
    icon: Layers,
    title: "All-in-one Platform",
    description:
      "Charger management, billing, driver app, analytics, and support — everything under one roof. No need to stitch together multiple vendors and integrations.",
  },
  {
    icon: Clock,
    title: "Instant Setup",
    description:
      "Go from sign-up to live in a single day. No lengthy onboarding, no complex integrations. Connect your OCPP chargers and start collecting revenue immediately.",
  },
];

function StatusIcon({ status }: { status: CellStatus }) {
  if (status === "best") {
    return (
      <div className="inline-flex size-5 items-center justify-center rounded-full bg-gold/10">
        <Check className="size-3 text-gold" />
      </div>
    );
  }
  if (status === "ok") {
    return (
      <div className="inline-flex size-5 items-center justify-center rounded-full bg-muted">
        <Minus className="size-3 text-muted-foreground" />
      </div>
    );
  }
  if (status === "bad") {
    return (
      <div className="inline-flex size-5 items-center justify-center rounded-full bg-destructive/10">
        <X className="size-3 text-destructive" />
      </div>
    );
  }
  return (
    <div className="inline-flex size-5 items-center justify-center rounded-full bg-muted">
      <Minus className="size-3 text-muted-foreground" />
    </div>
  );
}

export default function ComparePage() {
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
                CMS Comparison
              </Badge>
            </motion.div>

            <motion.h1
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              How HowElectric CMS{" "}
              <span className="text-gold">compares</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              See why India&apos;s fastest-growing CPOs choose HowElectric CMS
              over alternatives. Compare across 10 critical criteria.
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
                  Try It Free
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Side-by-side"
            title="The complete comparison"
            subtitle="HowElectric CMS vs Generic CMS vs Building In-House vs No CMS — across 10 criteria that matter."
          />

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr>
                    <th className="border-b border-border/50 px-4 py-4 text-left text-sm font-medium text-muted-foreground">
                      Criteria
                    </th>
                    <th className="border-b-2 border-gold/30 bg-gold/5 px-4 py-4 text-left text-sm font-bold text-foreground">
                      <div className="flex items-center gap-2">
                        <Zap className="size-4 text-gold" />
                        HowElectric
                      </div>
                    </th>
                    <th className="border-b border-border/50 px-4 py-4 text-left text-sm font-medium text-muted-foreground">
                      Generic CMS
                    </th>
                    <th className="border-b border-border/50 px-4 py-4 text-left text-sm font-medium text-muted-foreground">
                      Build In-House
                    </th>
                    <th className="border-b border-border/50 px-4 py-4 text-left text-sm font-medium text-muted-foreground">
                      No CMS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, index) => (
                    <motion.tr
                      key={row.criteria}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.03,
                        duration: 0.3,
                        type: "spring" as const,
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="group transition-colors hover:bg-light-gray/50"
                    >
                      <td className="border-b border-border/30 px-4 py-4 text-sm font-medium text-foreground">
                        {row.criteria}
                      </td>
                      <td className="border-b border-gold/10 bg-gold/5 px-4 py-4">
                        <div className="flex items-center gap-2">
                          <StatusIcon status={row.howelectricStatus} />
                          <span className="text-sm font-semibold text-foreground">
                            {row.howelectric}
                          </span>
                        </div>
                      </td>
                      <td className="border-b border-border/30 px-4 py-4">
                        <div className="flex items-center gap-2">
                          <StatusIcon status={row.genericStatus} />
                          <span className="text-sm text-muted-foreground">
                            {row.generic}
                          </span>
                        </div>
                      </td>
                      <td className="border-b border-border/30 px-4 py-4">
                        <div className="flex items-center gap-2">
                          <StatusIcon status={row.inhouseStatus} />
                          <span className="text-sm text-muted-foreground">
                            {row.inhouse}
                          </span>
                        </div>
                      </td>
                      <td className="border-b border-border/30 px-4 py-4">
                        <div className="flex items-center gap-2">
                          <StatusIcon status={row.nocmsStatus} />
                          <span className="text-sm text-muted-foreground">
                            {row.nocms}
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HowElectric Advantages */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Why HowElectric"
            title="The HowElectric advantage"
            subtitle="Three reasons India's fastest-growing CPOs choose HowElectric CMS."
          />

          <StaggerGrid className="grid gap-6 md:grid-cols-3">
            {ADVANTAGES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="group h-full rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-gold/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-7 text-gold" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Mobile-friendly comparison cards (visible on smaller screens as complement) */}
      <section className="bg-white py-24 lg:hidden lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Quick Compare"
            title="At a glance"
            subtitle="Key differences summarized for quick reference."
          />

          <StaggerGrid className="grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "HowElectric CMS",
                highlight: true,
                points: [
                  "1 day setup",
                  "OCPP 1.6J + 2.0.1",
                  "UPI + GST built-in",
                  "Driver app included",
                  "From free",
                  "24/7 India support",
                ],
              },
              {
                label: "Generic CMS",
                highlight: false,
                points: [
                  "2-4 weeks setup",
                  "OCPP 1.6J only",
                  "UPI/GST as add-on",
                  "Driver app extra",
                  "$200+/month",
                  "Business hours only",
                ],
              },
              {
                label: "Build In-House",
                highlight: false,
                points: [
                  "3-6 months setup",
                  "Custom OCPP",
                  "Custom payments",
                  "Build your own app",
                  "₹10L+ dev cost",
                  "Self-support only",
                ],
              },
              {
                label: "No CMS",
                highlight: false,
                points: [
                  "N/A",
                  "No OCPP",
                  "Manual billing",
                  "No app",
                  "₹0 software",
                  "No support",
                ],
              },
            ].map((option) => (
              <StaggerItem key={option.label}>
                <div
                  className={`rounded-2xl border p-5 ${
                    option.highlight
                      ? "border-gold/30 bg-gold/5 shadow-md"
                      : "border-border/50 bg-light-gray"
                  }`}
                >
                  <h3
                    className={`font-bold ${
                      option.highlight ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {option.label}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {option.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        {option.highlight ? (
                          <Check className="size-3 text-gold" />
                        ) : (
                          <Minus className="size-3 text-muted-foreground" />
                        )}
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Ready to see the difference?"
            description="Join India's fastest-growing CPOs who chose HowElectric CMS. Start with a free trial — no credit card required."
            primaryLabel="Try It Free"
            primaryHref="/cms/demo"
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
}
