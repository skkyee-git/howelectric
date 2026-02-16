"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { STAGGER } from "@/lib/animations";

const TEAM = [
  {
    initials: "DK",
    name: "Durga Kolla",
    role: "Founder & CEO",
    bio: "Driving India's EV infrastructure vision from zero to scale.",
    avatarBg: "bg-navy",
  },
  {
    initials: "AP",
    name: "Arun Prasad",
    role: "CTO",
    bio: "Building the tech stack that powers charger discovery, CMS, and analytics.",
    avatarBg: "bg-electric-blue",
  },
  {
    initials: "RS",
    name: "Ravi Sharma",
    role: "Head of Operations",
    bio: "Ensuring seamless installation and maintenance across 150+ cities.",
    avatarBg: "bg-teal",
  },
  {
    initials: "PS",
    name: "Priya Singh",
    role: "Head of Academy",
    bio: "Designing courses and certifications for the next generation of EV pros.",
    avatarBg: "bg-green",
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

export function TeamSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            People
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A passionate team on a mission to electrify India.
          </p>
        </ScrollReveal>

        {/* Team cards */}
        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TEAM.map(({ initials, name, role, bio, avatarBg }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="group flex flex-col items-center rounded-2xl border border-border/50 bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              {/* Avatar */}
              <div
                className={`flex size-16 items-center justify-center rounded-full ${avatarBg}`}
              >
                <span className="text-lg font-bold text-white">
                  {initials}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display mt-5 text-lg font-semibold">
                {name}
              </h3>
              <p className="mt-1 text-sm font-medium text-electric-blue">
                {role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
