"use client";

import { motion } from "framer-motion";
import { DURATION, EASE } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center sm:py-32 lg:px-8 lg:py-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: DURATION.normal,
            ease: EASE.out,
          }}
        >
          <Badge
            variant="secondary"
            className="mb-6 bg-electric-blue/10 text-electric-blue"
          >
            Transparent Pricing
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: DURATION.slow,
            ease: EASE.out,
          }}
        >
          Simple pricing for every scale
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: DURATION.slow,
            ease: EASE.out,
          }}
        >
          From free tools to enterprise solutions — transparent pricing across
          all five pillars.
        </motion.p>
      </div>
    </section>
  );
}
