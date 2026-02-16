"use client";

import { motion } from "framer-motion";
import {
  Zap,
  PlugZap,
  HardHat,
  MonitorSmartphone,
  TrendingUp,
  WrenchIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const MODULES = [
  {
    number: "01",
    title: "EV Fundamentals & Safety",
    description:
      "Understand EV architecture, battery chemistry, and critical safety protocols for high-voltage charging systems.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Charger Types & Specifications",
    description:
      "Master AC Level 1/2, DC fast charging, connector standards (CCS2, CHAdeMO, Type 2) and power ratings.",
    icon: PlugZap,
  },
  {
    number: "03",
    title: "Installation Standards",
    description:
      "Learn site assessment, electrical panel upgrades, load balancing, and compliance with Indian CEA guidelines.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "CMS Integration & Setup",
    description:
      "Configure OCPP-based charge management systems, set up billing, user auth, and remote diagnostics.",
    icon: MonitorSmartphone,
  },
  {
    number: "05",
    title: "Business Planning & ROI",
    description:
      "Build financial models, navigate FAME II / state subsidies, and create investor-ready business plans.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Troubleshooting & Maintenance",
    description:
      "Diagnose common faults, perform preventive maintenance, and manage AMC workflows for long-term uptime.",
    icon: WrenchIcon,
  },
];

export function CurriculumPreview() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            Curriculum
          </p>
          <h2 className="mt-3">What you&apos;ll learn</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our curriculum is designed with industry leaders to cover every
            aspect of the EV charging ecosystem.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-4">
                {/* Numbered badge */}
                <div className="flex size-10 items-center justify-center rounded-xl bg-green/10 font-mono text-sm font-bold text-green">
                  {mod.number}
                </div>
                {/* Icon */}
                <div className="flex size-10 items-center justify-center rounded-xl bg-green/5">
                  <mod.icon className="size-5 text-green" />
                </div>
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {mod.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
