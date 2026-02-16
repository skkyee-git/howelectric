"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  BarChart3,
  CreditCard,
  Bell,
  ArrowRight,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CMS_FEATURES = [
  {
    id: "monitoring",
    icon: Wifi,
    title: "Real-time Monitoring",
    description:
      "Track every charger's status, energy output, and connectivity in real time. Get instant alerts when something needs attention.",
    color: "text-teal",
    bg: "bg-teal/10",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Understand utilization patterns, peak hours, and revenue trends. Make data-driven decisions to optimize your network.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    id: "billing",
    icon: CreditCard,
    title: "Automated Billing",
    description:
      "UPI, card, and wallet payments. GST-compliant invoicing. Automatic settlement and revenue reports.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    id: "alerts",
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Proactive notifications for faults, low utilization, and maintenance schedules. Never miss a critical event.",
    color: "text-orange",
    bg: "bg-orange/10",
  },
];

export function CMSTeaser() {
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = CMS_FEATURES[activeFeature];

  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: Sticky Dashboard Mockup */}
          <div className="lg:sticky lg:top-32">
            <div className="relative">
              {/* Dashboard card */}
              <div className="overflow-hidden rounded-3xl border border-border/50 bg-white shadow-xl">
                {/* Window chrome */}
                <div className="flex items-center gap-2 border-b border-border/50 bg-light-gray px-4 py-3">
                  <div className="size-3 rounded-full bg-red-400" />
                  <div className="size-3 rounded-full bg-yellow-400" />
                  <div className="size-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-6 flex-1 rounded-md bg-white px-3 text-xs leading-6 text-muted-foreground">
                    cms.howelectric.com
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Station Overview
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Last updated: just now
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-green/10 px-3 py-1">
                      <div className="size-2 rounded-full bg-green" />
                      <span className="text-xs font-medium text-green">
                        All Online
                      </span>
                    </div>
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-light-gray p-3">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Active
                      </p>
                      <p className="text-xl font-bold text-foreground">24</p>
                    </div>
                    <div className="rounded-xl bg-light-gray p-3">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Sessions
                      </p>
                      <p className="text-xl font-bold text-electric-blue">
                        142
                      </p>
                    </div>
                    <div className="rounded-xl bg-light-gray p-3">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Revenue
                      </p>
                      <p className="text-xl font-bold text-teal">₹48.2K</p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mt-4 flex h-32 items-end gap-1.5 rounded-xl bg-light-gray p-4">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-sm bg-electric-blue/60"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04, duration: 0.5 }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 rounded-2xl border border-border/50 bg-white p-3 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-teal/10">
                    <Monitor className="size-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">OCPP 1.6J</p>
                    <p className="text-[10px] text-muted-foreground">
                      Compatible
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Feature Reveals */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              HowElectric CMS
            </p>
            <h2 className="mt-3">
              Your station. Your software. Your data.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A cloud-based charge management system built for Indian businesses.
            </p>

            {/* Feature selector */}
            <div className="mt-10 space-y-3">
              {CMS_FEATURES.map(
                ({ id, icon: Icon, title, description, color, bg }, i) => (
                  <button
                    key={id}
                    onClick={() => setActiveFeature(i)}
                    className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                      activeFeature === i
                        ? "border-border bg-white shadow-md"
                        : "border-transparent hover:border-border/50 hover:bg-white/50"
                    }`}
                  >
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${bg} transition-transform duration-300 ${
                        activeFeature === i ? "scale-110" : ""
                      }`}
                    >
                      <Icon className={`size-5 ${color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {title}
                      </h3>
                      <AnimatePresence>
                        {activeFeature === i && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-1.5 text-sm leading-relaxed text-muted-foreground"
                          >
                            {description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                )
              )}
            </div>

            <Button asChild size="lg" className="mt-8">
              <Link href="/cms">
                Explore HowElectric CMS
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
