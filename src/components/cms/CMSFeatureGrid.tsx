"use client";

import { motion } from "framer-motion";
import { Activity, CreditCard, BarChart3, Smartphone } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animation/StaggerGrid";

const FEATURE_CATEGORIES = [
  {
    icon: Activity,
    title: "Monitoring & Control",
    features: [
      "Real-time charger status and health monitoring",
      "Remote start, stop, and restart commands",
      "Automatic error alerts and diagnostics",
    ],
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    features: [
      "UPI QR, credit/debit cards, and wallets",
      "Automatic GST invoicing and compliance",
      "Revenue sharing and split payouts",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    features: [
      "Usage trends and peak-hour analysis",
      "Revenue tracking with daily/weekly/monthly views",
      "Charger performance and efficiency metrics",
    ],
  },
  {
    icon: Smartphone,
    title: "Driver App",
    features: [
      "Nearby station finder with real-time availability",
      "Session booking and queue management",
      "In-app payments and digital receipts",
    ],
  },
];

const COMING_SOON = [
  "DLM",
  "Fleet Mgmt",
  "White-Label",
  "OCPI Roaming",
  "AI Pricing",
];

export function CMSFeatureGrid() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold">
            Platform Features
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to run a charging network
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            From real-time monitoring to automated billing, our CMS handles the
            complexity so you can focus on growth.
          </p>
        </ScrollReveal>

        <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2">
          {FEATURE_CATEGORIES.map(({ icon: Icon, title, features }) => (
            <StaggerItem key={title}>
              <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Coming Soon */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Coming Soon
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {COMING_SOON.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
