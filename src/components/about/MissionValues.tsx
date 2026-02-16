"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Layers, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { DURATION, STAGGER } from "@/lib/animations";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Brand Agnostic",
    description:
      "We recommend the best solution, not our own brand. Our marketplace compares 50+ manufacturers so you always get the right fit.",
  },
  {
    icon: Layers,
    title: "End-to-End",
    description:
      "From planning to operations, one platform covers all. No more juggling vendors, contractors, and software providers.",
  },
  {
    icon: MapPin,
    title: "India-First",
    description:
      "Built for Indian infrastructure, UPI, GST, and local support. Every feature is designed for real-world conditions here.",
  },
];

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

export function MissionValues() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Our Mission
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why we exist
          </h2>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal delay={0.15} className="mt-12 text-center">
          <blockquote className="mx-auto max-w-3xl">
            <p className="text-2xl font-semibold leading-snug text-navy sm:text-3xl lg:text-4xl">
              &ldquo;Amazon meets McKinsey meets Shopify —{" "}
              <span className="bg-gradient-to-r from-electric-blue to-teal bg-clip-text text-transparent">
                for EV charging
              </span>
              &rdquo;
            </p>
          </blockquote>
        </ScrollReveal>

        {/* Value cards */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {VALUES.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group rounded-2xl border border-border/50 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-electric-blue/10">
                <Icon className="size-6 text-electric-blue" />
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold">
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
