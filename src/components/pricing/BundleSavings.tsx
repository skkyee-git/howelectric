"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Button } from "@/components/ui/button";
import { DURATION, EASE, STAGGER } from "@/lib/animations";

// ── Bundle data ─────────────────────────────────────────────────────

const BUNDLES = [
  {
    name: "Starter Bundle",
    price: "\u20B93\u20135L",
    savings: "Save \u20B945K",
    description: "1 AC charger + CMS Starter + Installation + 1-year AMC Basic",
  },
  {
    name: "Business Bundle",
    price: "\u20B98\u201315L",
    savings: "Save \u20B91.5L",
    description:
      "2\u20134 chargers + CMS Business + Installation + AMC Premium",
  },
  {
    name: "Premium Bundle",
    price: "\u20B925\u201350L",
    savings: "Save \u20B95L",
    description:
      "DC fast charger network + CMS Enterprise + Full deployment + AMC Premium",
  },
];

// ── Stagger variants ────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

// ── Component ───────────────────────────────────────────────────────

export function BundleSavings() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      {/* Gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-electric-blue/10 blur-[120px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 size-[400px] rounded-full bg-teal/8 blur-[100px]"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 30, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="mb-14 text-center">
          <h2 className="font-display text-white">Save more with bundles</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Combine a Charger + CMS + Installation + AMC into a single package
            and unlock significant savings on your EV charging deployment.
          </p>
        </ScrollReveal>

        {/* Bundle cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {BUNDLES.map((bundle) => (
            <motion.div
              key={bundle.name}
              variants={cardVariants}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl transition-colors hover:bg-white/[0.06]"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">
                {bundle.name}
              </p>

              <p className="mt-4 text-3xl font-bold text-white">
                {bundle.price}
              </p>

              <span className="mt-2 inline-block rounded-full bg-green/20 px-3 py-0.5 text-xs font-semibold text-green">
                {bundle.savings}
              </span>

              <p className="mt-4 text-sm leading-relaxed text-white/50">
                {bundle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: DURATION.normal,
            ease: EASE.out,
          }}
        >
          <Button
            asChild
            size="lg"
            className="bg-electric-blue text-white hover:bg-electric-blue/90"
          >
            <Link href="/marketplace/bundles">View All Bundles</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
