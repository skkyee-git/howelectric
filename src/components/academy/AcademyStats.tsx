"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { AnimatedCounter } from "@/components/animation/AnimatedCounter";

const STATS = [
  {
    target: 1000,
    suffix: "+",
    label: "Graduates",
  },
  {
    target: 95,
    suffix: "%",
    label: "Placement Rate",
  },
  {
    target: 150,
    suffix: "+",
    label: "Cities Covered",
  },
  {
    target: 3,
    suffix: "",
    label: "Certification Tracks",
  },
];

export function AcademyStats() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
      {/* Gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-1/2 size-[400px] -translate-y-1/2 rounded-full bg-green/10 blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 top-1/2 size-[300px] -translate-y-1/2 rounded-full bg-electric-blue/8 blur-[100px]"
        animate={{
          x: [0, -50, 25, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-mono text-4xl font-bold text-white lg:text-5xl">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
