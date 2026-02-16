"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  Truck,
  Landmark,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const USE_CASES = [
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description:
      "Launch your EV charging business from scratch. We help with location selection, business planning, and your first installation.",
    stats: "50+ Startups Launched",
    gradient: "from-orange/15 to-orange/5",
    large: true,
  },
  {
    icon: Building,
    title: "Real Estate Developers",
    description:
      "Integrate EV charging into residential, commercial, and mixed-use projects. Add value to your properties with future-ready infrastructure.",
    stats: "80+ Properties Equipped",
    gradient: "from-electric-blue/15 to-electric-blue/5",
    large: true,
  },
  {
    icon: Truck,
    title: "Fleet Operators",
    description:
      "Design and deploy depot charging solutions for electric fleets — buses, delivery vans, and corporate vehicles.",
    stats: "30+ Fleets Electrified",
    gradient: "from-teal/15 to-teal/5",
    large: false,
  },
  {
    icon: Landmark,
    title: "Government & PSUs",
    description:
      "Public charging networks, smart city projects, and policy-compliant deployments with full regulatory support.",
    stats: "15+ Govt Projects",
    gradient: "from-purple/15 to-purple/5",
    large: false,
  },
];

export function UseCases() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            Who We Help
          </p>
          <h2 className="mt-3">Built for every scale</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you&apos;re an entrepreneur with a single location or a
            government agency planning a citywide network.
          </p>
        </ScrollReveal>

        {/* Bento grid: 2 large + 2 small on desktop */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {USE_CASES.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group rounded-2xl border border-border/50 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover ${
                useCase.large ? "p-8 lg:p-10" : "p-6 lg:p-8"
              }`}
            >
              <div
                className={`mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${useCase.gradient}`}
              >
                <useCase.icon className="size-6 text-foreground/70" />
              </div>
              <h3
                className={`font-bold ${
                  useCase.large ? "text-2xl" : "text-xl"
                }`}
              >
                {useCase.title}
              </h3>
              <p
                className={`mt-3 leading-relaxed text-muted-foreground ${
                  useCase.large ? "text-base" : "text-sm"
                }`}
              >
                {useCase.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-orange">
                {useCase.stats}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
