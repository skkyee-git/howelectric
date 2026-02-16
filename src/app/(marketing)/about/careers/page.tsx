"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Rocket,
  TrendingUp,
  Globe,
  Target,
  MapPin,
  ArrowRight,
  Heart,
  GraduationCap,
  Clock,
  Wifi,
  DollarSign,
  Shield,
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

const WHY_JOIN = [
  {
    icon: Target,
    title: "Mission-driven work",
    description:
      "Contribute to India's clean energy transition by building infrastructure that powers the future of mobility.",
  },
  {
    icon: Rocket,
    title: "Early-stage impact",
    description:
      "Shape the product, culture, and trajectory of a company at the ground floor. Your work matters here.",
  },
  {
    icon: TrendingUp,
    title: "Fast growth",
    description:
      "EV charging is India's fastest-growing infrastructure sector. Grow your career alongside the market.",
  },
  {
    icon: Globe,
    title: "Remote-friendly",
    description:
      "Work from anywhere in India. We care about outcomes, not office hours.",
  },
];

const OPEN_POSITIONS = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Remote",
    department: "Engineering",
    icon: "ENG",
  },
  {
    title: "EV Consulting Manager",
    location: "Delhi / Mumbai",
    department: "Consulting",
    icon: "CON",
  },
  {
    title: "Installation Operations Lead",
    location: "Bangalore",
    department: "Operations",
    icon: "OPS",
  },
  {
    title: "CMS Product Manager",
    location: "Remote",
    department: "Product",
    icon: "PRD",
  },
  {
    title: "Business Development Manager",
    location: "Pan-India",
    department: "Sales",
    icon: "SAL",
  },
  {
    title: "Content & Academy Lead",
    location: "Remote",
    department: "Marketing",
    icon: "MKT",
  },
];

const BENEFITS = [
  { icon: DollarSign, label: "Competitive salary" },
  { icon: TrendingUp, label: "ESOPs" },
  { icon: Heart, label: "Health insurance" },
  { icon: GraduationCap, label: "Learning budget" },
  { icon: Clock, label: "Flexible hours" },
  { icon: Wifi, label: "Remote-first" },
];

const DEPT_COLORS: Record<string, string> = {
  Engineering: "bg-electric-blue/10 text-electric-blue",
  Consulting: "bg-teal/10 text-teal",
  Operations: "bg-orange-100 text-orange-600",
  Product: "bg-purple-100 text-purple-600",
  Sales: "bg-green-100 text-green-600",
  Marketing: "bg-pink-100 text-pink-600",
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

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050d18] py-28 sm:py-36">
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
          animate={{ x: [0, 70, -30, 0], y: [0, -50, 30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-1/4 size-[400px] rounded-full bg-teal/8 blur-[120px]"
          animate={{ x: [0, -60, 40, 0], y: [0, 30, -50, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-electric-blue/20">
                <Briefcase className="size-3 text-electric-blue" />
              </span>
              We&apos;re Hiring
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
          >
            Build the future of{" "}
            <span className="bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent">
              EV charging in India
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: DURATION.slow }}
          >
            Join a mission-driven team that&apos;s making EV charging
            accessible for every Indian.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: DURATION.slow }}
          >
            <Button asChild size="lg" className="bg-electric-blue text-white hover:bg-electric-blue/90">
              <a href="#positions">
                View Open Positions
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Why Join ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Why Join"
            title="Why join HowElectric"
            subtitle="We're at the intersection of climate action and technology. Here's why people choose us."
          />

          <StaggerGrid className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_JOIN.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-electric-blue/10">
                    <Icon className="size-6 text-electric-blue" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Open Positions ───────────────────────────────────────── */}
      <section id="positions" className="scroll-mt-24 bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Open Roles"
            title="Open positions"
            subtitle="Find your next role and help us electrify India."
          />

          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {OPEN_POSITIONS.map(({ title, location, department }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                className="group flex flex-col rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Badge
                  variant="secondary"
                  className={DEPT_COLORS[department] ?? "bg-electric-blue/10 text-electric-blue"}
                >
                  {department}
                </Badge>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {location}
                </div>
                <Link
                  href="/careers"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-electric-blue transition-colors hover:text-electric-blue/80"
                >
                  Apply
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Culture ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-electric-blue/10 text-electric-blue"
            >
              Our Culture
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Small team, big mission
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We&apos;re a small, fast-moving team obsessed with making EV
              charging accessible across India. We value ownership, speed, and
              customer impact above all else.
            </p>
          </ScrollReveal>

          {/* Benefits */}
          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-electric-blue/10">
                    <Icon className="size-5 text-electric-blue" />
                  </div>
                  <p className="font-medium">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Don't see your role listed?"
          description="We're always looking for exceptional people. Send us your resume and tell us how you'd contribute."
          primaryLabel="See All Open Roles"
          primaryHref="/careers"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          variant="dark"
        />
      </div>
    </>
  );
}
