"use client";

import { motion } from "framer-motion";
import { Search, FileText, Wrench, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We assess your location, power infrastructure, target audience, and investment capacity to define the opportunity.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Plan",
    description:
      "Custom feasibility report with ROI projections, charger recommendations, subsidy mapping, and site layout.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Execute",
    description:
      "Vendor selection, procurement, installation oversight, and government compliance — all managed for you.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    description:
      "CMS onboarding, network expansion planning, and ongoing optimization to maximize your returns.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            Our Process
          </p>
          <h2 className="mt-3">From idea to operational station</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A proven four-step methodology that has delivered 200+ successful EV
            charging projects across India.
          </p>
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Connecting line — desktop */}
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center"
              >
                {/* Number circle */}
                <div className="relative mx-auto mb-6 flex size-[104px] items-center justify-center">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange/20" />
                  {/* Inner circle */}
                  <div className="flex size-20 items-center justify-center rounded-full bg-white shadow-card">
                    <step.icon className="size-8 text-orange" />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-orange text-xs font-bold text-white shadow-sm">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
