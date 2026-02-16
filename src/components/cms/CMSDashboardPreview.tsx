"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const STATS = [
  { label: "Active Stations", value: "24", color: "text-teal" },
  { label: "Revenue Today", value: "₹18,450", color: "text-gold" },
  { label: "Uptime", value: "99.8%", color: "text-green" },
];

const BAR_DATA = [
  { height: "60%", label: "Mon" },
  { height: "85%", label: "Tue" },
  { height: "45%", label: "Wed" },
  { height: "92%", label: "Thu" },
  { height: "70%", label: "Fri" },
  { height: "55%", label: "Sat" },
  { height: "78%", label: "Sun" },
];

export function CMSDashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      {/* Floating gradient orbs — gold */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-1/4 size-[500px] rounded-full bg-gold/15 blur-[120px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-1/4 size-[400px] rounded-full bg-electric-blue/10 blur-[100px]"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 50, -60, 0],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Content */}
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Dashboard Preview
            </p>
            <h2 className="mt-3 text-white">
              See your entire network at a glance
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/50">
              Monitor charger health, track revenue, and manage sessions from a
              single dashboard. Real-time data from every station in your
              network, accessible from any device.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Live charger status with instant alerts",
                "Revenue analytics with GST-ready reports",
                "Remote diagnostics and firmware updates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <span className="block size-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Glassmorphic Dashboard Card */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:p-8">
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

              {/* 3 mini stat cards */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {STATS.map(({ label, value, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 text-center shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                  >
                    <p className={`font-mono text-lg font-bold ${color}`}>
                      {value}
                    </p>
                    <p className="mt-1 text-[11px] text-white/40">{label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Simple bar chart */}
              <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="mb-3 text-[11px] font-medium text-white/40">
                  Weekly Sessions
                </p>
                <div className="flex items-end gap-2" style={{ height: 80 }}>
                  {BAR_DATA.map(({ height, label }, i) => (
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

              {/* Live Demo link */}
              <div className="mt-5 text-center">
                <Link
                  href="/cms/demo"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold/80"
                >
                  Live Demo
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
