"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  CalendarCheck,
  Wrench,
  Radio,
  Monitor,
  Rocket,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const STEPS = [
  {
    icon: ShoppingCart,
    title: "Purchase",
    description: "Buy your charger from our marketplace or bring your own.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule",
    description: "Pick a date. Our team confirms within 24 hours.",
  },
  {
    icon: Wrench,
    title: "Install",
    description: "Certified installer handles electrical work & mounting.",
  },
  {
    icon: Radio,
    title: "Commission",
    description: "Full testing, safety checks, and compliance verification.",
  },
  {
    icon: Monitor,
    title: "CMS Setup",
    description: "Pre-configured for remote monitoring on Day 1.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Your station is operational. Start earning revenue.",
  },
];

export function InstallationProcess() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple">
            Installation Process
          </p>
          <h2 className="mt-3">From purchase to go-live in 6 steps</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            CMS pre-configured during installation — your station is operational
            and earning from Day 1.
          </p>
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Connecting line — desktop */}
          <div className="absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-purple/25 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center"
              >
                {/* Circle */}
                <div className="relative mx-auto mb-4 flex size-[88px] items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple/15" />
                  <div className="flex size-16 items-center justify-center rounded-full bg-white shadow-card">
                    <step.icon className="size-6 text-purple" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-purple text-[10px] font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-sm font-bold">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
