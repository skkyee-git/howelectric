"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Heart,
  Zap,
  Clock,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DURATION, STAGGER } from "@/lib/animations";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const LEADERSHIP = [
  {
    initials: "DK",
    name: "Durga Kolla",
    title: "Founder & CEO",
    bio: "Leading the charge for India's EV infrastructure revolution",
    gradient: "from-electric-blue to-teal",
  },
  {
    initials: "AP",
    name: "Arun Prasad",
    title: "CTO",
    bio: "Building the technology platform powering 200+ charging stations",
    gradient: "from-teal to-green",
  },
  {
    initials: "RS",
    name: "Ravi Sharma",
    title: "VP Operations",
    bio: "Scaling our installer network across 150+ cities",
    gradient: "from-navy to-electric-blue",
  },
  {
    initials: "PS",
    name: "Priya Singh",
    title: "VP Consulting",
    bio: "Helping businesses navigate the EV transition with data-driven strategy",
    gradient: "from-electric-blue to-navy",
  },
];

const VALUES = [
  {
    icon: Shield,
    label: "Ownership",
    description:
      "We take full responsibility for outcomes and treat every project like our own.",
  },
  {
    icon: Heart,
    label: "Customer obsession",
    description:
      "Every decision starts with the customer. Their success is our measure.",
  },
  {
    icon: Zap,
    label: "Move fast",
    description:
      "We ship quickly, iterate relentlessly, and bias for action over perfection.",
  },
  {
    icon: Clock,
    label: "Think long-term",
    description:
      "We build for India's EV future, not just for the quarter ahead.",
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

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050d18] py-28 sm:py-36">
        {/* Background effects */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/4 top-0 size-[600px] rounded-full bg-electric-blue/10 blur-[150px]"
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-electric-blue/20">
                <Users className="size-3 text-electric-blue" />
              </span>
              Our Team
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
          >
            The people building{" "}
            <span className="bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent">
              India&apos;s EV future
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: DURATION.slow }}
          >
            A passionate team of engineers, operators, and EV enthusiasts on a
            mission to electrify India&apos;s mobility.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Leadership ───────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Leadership"
            title="Meet our leadership team"
            subtitle="The people steering HowElectric's mission, technology, and growth."
          />

          <motion.div
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {LEADERSHIP.map(({ initials, name, title, bio, gradient }) => (
              <motion.div
                key={name}
                variants={cardVariants}
                className="group flex flex-col items-center rounded-2xl border border-border/50 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Gradient circle avatar */}
                <div
                  className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${gradient}`}
                >
                  <span className="text-xl font-bold text-white">
                    {initials}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">{name}</h3>
                <p className="mt-1 text-sm font-medium text-electric-blue">
                  {title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team Values ──────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What drives us"
            subtitle="The principles that shape every decision we make."
          />

          <StaggerGrid className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, label, description }) => (
              <StaggerItem key={label}>
                <div className="flex flex-col items-start rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-electric-blue/10">
                    <Icon className="size-6 text-electric-blue" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Join Us ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-electric-blue/10 text-electric-blue"
            >
              Join Us
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              We&apos;re hiring across India
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join a small, fast-moving team building the infrastructure that
              will power India&apos;s EV transition. Remote-friendly roles
              across engineering, operations, consulting, and more.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-electric-blue text-white hover:bg-electric-blue/90">
                <Link href="/careers">
                  View Open Roles
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Ready to build India's EV future?"
          description="Explore open roles and join a team that's making EV charging accessible for everyone."
          primaryLabel="View Open Roles"
          primaryHref="/careers"
          secondaryLabel="Learn About Us"
          secondaryHref="/about"
          variant="dark"
        />
      </div>
    </>
  );
}
