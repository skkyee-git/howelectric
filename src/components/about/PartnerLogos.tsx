"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const PARTNERS = [
  "Tata Power",
  "Siemens",
  "ABB",
  "Delta",
  "Exicom",
  "ChargePoint",
  "Ather",
];

export function PartnerLogos() {
  // Duplicate for seamless marquee loop
  const duplicated = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Ecosystem
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by leading brands
          </h2>
        </ScrollReveal>

        {/* Marquee container */}
        <div className="relative mt-14 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-light-gray to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-light-gray to-transparent" />

          {/* Scrolling row */}
          <motion.div
            className="flex w-max items-center gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicated.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-14 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-white px-8 shadow-card transition-all duration-300 hover:shadow-card-hover"
              >
                <span className="whitespace-nowrap text-sm font-semibold text-muted-foreground">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
