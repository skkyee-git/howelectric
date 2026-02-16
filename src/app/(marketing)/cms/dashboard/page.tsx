"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  Activity,
  Zap,
  IndianRupee,
  ArrowUpRight,
  Eye,
  Clock,
  TrendingUp,
  Bell,
  CalendarRange,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";

/* ── Dashboard Mockup Data ── */
const STATS = [
  { label: "Total Chargers", value: "48", icon: Zap, trend: "+3 this week" },
  { label: "Active Sessions", value: "12", icon: Activity, trend: "Live now" },
  {
    label: "Revenue Today",
    value: "\u20B918,450",
    icon: IndianRupee,
    trend: "+12% vs yesterday",
  },
  {
    label: "Uptime",
    value: "99.2%",
    icon: ArrowUpRight,
    trend: "Last 30 days",
  },
] as const;

const CHARGER_STATUS = [
  { label: "Available", count: 32, color: "bg-green" },
  { label: "Charging", count: 12, color: "bg-gold" },
  { label: "Offline", count: 2, color: "bg-mid-gray" },
  { label: "Error", count: 2, color: "bg-destructive" },
] as const;

const BAR_DATA = [
  { height: "55%", label: "Mon", value: "\u20B92.1k" },
  { height: "72%", label: "Tue", value: "\u20B92.8k" },
  { height: "48%", label: "Wed", value: "\u20B91.9k" },
  { height: "88%", label: "Thu", value: "\u20B93.4k" },
  { height: "65%", label: "Fri", value: "\u20B92.5k" },
  { height: "80%", label: "Sat", value: "\u20B93.1k" },
  { height: "92%", label: "Sun", value: "\u20B93.6k" },
] as const;

const CAPABILITIES = [
  {
    icon: Eye,
    title: "Live Charger Monitoring",
    description:
      "See every charger's status in real time — available, charging, offline, or error.",
  },
  {
    icon: Clock,
    title: "Session Tracking",
    description:
      "Track active and historical sessions with duration, energy, and cost details.",
  },
  {
    icon: Zap,
    title: "Energy Consumption Metrics",
    description:
      "Monitor kWh consumed per charger, site, and across your entire network.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Analytics",
    description:
      "Visualize revenue trends with daily, weekly, and monthly breakdowns.",
  },
  {
    icon: Bell,
    title: "Alert Management",
    description:
      "Receive and manage alerts for offline chargers, errors, and SLA breaches.",
  },
  {
    icon: CalendarRange,
    title: "Custom Date Ranges",
    description:
      "Filter all data by custom date ranges for precise reporting and analysis.",
  },
] as const;

export default function CMSDashboardPage() {
  return (
    <>
      {/* ── Mini Hero ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" as const, bounce: 0.3 }}
          >
            <Badge
              variant="secondary"
              className="mb-5 bg-gold/10 text-gold border border-gold/20"
            >
              Dashboard
            </Badge>
            <h1>Real-time visibility into your entire network</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Monitor charger health, track revenue, and manage sessions from a
              single, beautiful dashboard. Every data point you need, refreshed
              in real time.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy font-semibold hover:bg-gold/90"
              >
                <Link href="/cms/demo">See It Live</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cms/features">All Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Dashboard Preview Mockup ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Your network at a glance"
            subtitle="A preview of the HowElectric CMS dashboard — real-time data, actionable insights, zero clutter."
            badge="Dashboard Preview"
          />

          <ScrollReveal>
            <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-border/50 bg-dark-gray p-6 shadow-modal lg:p-8">
              {/* Header bar */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-gold/15">
                  <Monitor className="size-4 text-gold" />
                </div>
                <span className="text-sm font-semibold text-white/80">
                  HowElectric CMS
                </span>
                <div className="ml-auto flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-green/60" />
                  <div className="size-2.5 rounded-full bg-gold/60" />
                  <div className="size-2.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              {/* Top stats row */}
              <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {STATS.map(({ label, value, icon: Icon, trend }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-gold" />
                      <p className="text-[11px] text-white/40">{label}</p>
                    </div>
                    <p className="mt-2 font-mono text-xl font-bold text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-[10px] text-white/30">{trend}</p>
                  </motion.div>
                ))}
              </div>

              {/* Charger status breakdown */}
              <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="mb-3 text-[11px] font-medium text-white/40">
                  Charger Status
                </p>
                <div className="flex items-center gap-4">
                  {CHARGER_STATUS.map(({ label, count, color }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.06 }}
                      className="flex items-center gap-2"
                    >
                      <span
                        className={`block size-2.5 rounded-full ${color}`}
                      />
                      <span className="text-xs text-white/60">
                        {label}{" "}
                        <span className="font-semibold text-white">{count}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Revenue chart placeholder */}
              <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[11px] font-medium text-white/40">
                    Revenue — Last 7 Days
                  </p>
                  <p className="font-mono text-xs font-semibold text-gold">
                    {"\u20B9"}18,450 today
                  </p>
                </div>
                <div className="flex items-end gap-2" style={{ height: 100 }}>
                  {BAR_DATA.map(({ height, label, value }, i) => (
                    <motion.div
                      key={label}
                      className="flex flex-1 flex-col items-center gap-1"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      style={{ height: "100%", originY: 1 }}
                    >
                      <div
                        className="w-full rounded-t bg-gradient-to-t from-gold/60 to-gold"
                        style={{ height }}
                      />
                      <span className="text-[9px] text-white/30">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Capabilities ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Key capabilities"
            subtitle="Six powerful modules that make the dashboard your single source of truth for network operations."
            badge="Capabilities"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="rounded-2xl border border-border/50 bg-light-gray p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-8">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-5 text-gold" />
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

      {/* ── CTA Banner ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="See the dashboard in action"
            description="Get a guided walkthrough of the CMS dashboard with your own data. Free setup, no commitments."
            primaryLabel="See It Live"
            primaryHref="/cms/demo"
            secondaryLabel="View All Features"
            secondaryHref="/cms/features"
          />
        </div>
      </section>
    </>
  );
}
