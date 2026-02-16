"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Lightbulb,
  Wrench,
  Monitor,
  GraduationCap,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { STAGGER } from "@/lib/animations";

const PILLARS = [
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Source & compare chargers from 50+ brands",
    borderColor: "border-l-teal",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    description: "Expert planning from free tools to enterprise",
    borderColor: "border-l-orange",
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    icon: Wrench,
    title: "Services",
    description: "Certified installation & annual maintenance",
    borderColor: "border-l-purple",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
  },
  {
    icon: Monitor,
    title: "CMS",
    description: "Monitor, bill & manage your charging network",
    borderColor: "border-l-gold",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
  },
  {
    icon: GraduationCap,
    title: "Academy",
    description: "Training & certification for EV professionals",
    borderColor: "border-l-green",
    iconBg: "bg-green/10",
    iconColor: "text-green",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
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
      staggerChildren: STAGGER.slow,
      delayChildren: 0.2,
    },
  },
};

export function FivePillars() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            What We Do
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The Five Pillars
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every aspect of EV charging infrastructure, covered under one roof.
          </p>
        </ScrollReveal>

        {/* Pillar cards */}
        <motion.div
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PILLARS.map(
            ({ icon: Icon, title, description, borderColor, iconBg, iconColor }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                className={`group flex items-start gap-4 rounded-2xl border border-border/50 border-l-4 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover ${borderColor}`}
              >
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
                >
                  <Icon className={`size-5 ${iconColor}`} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
