"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Heart,
  Rocket,
  GraduationCap,
  Globe,
  MapPin,
  Clock,
  Briefcase,
  Code,
  Megaphone,
  Wrench,
  BarChart3,
  Users,
  Shield,
  Coffee,
  Laptop,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const WHY_JOIN = [
  {
    icon: Rocket,
    title: "Mission-Driven",
    description:
      "Work on India's most critical infrastructure challenge — electrifying transportation for 1.4 billion people.",
  },
  {
    icon: TrendingUp,
    title: "High Growth",
    description:
      "Join a fast-scaling startup in a $10B+ market. Grow your career as we grow the company.",
  },
  {
    icon: GraduationCap,
    title: "Learning Culture",
    description:
      "Continuous learning with access to courses, conferences, and mentorship from industry leaders.",
  },
  {
    icon: Globe,
    title: "India-Wide Impact",
    description:
      "Our work spans 150+ cities. See the real-world impact of your contributions across the country.",
  },
];

const OPEN_POSITIONS = [
  {
    icon: Code,
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
  },
  {
    icon: Code,
    title: "Backend Engineer — OCPP",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
  },
  {
    icon: Megaphone,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Bangalore",
    type: "Full-time",
  },
  {
    icon: Wrench,
    title: "Field Operations Lead",
    department: "Operations",
    location: "Mumbai / Delhi",
    type: "Full-time",
  },
  {
    icon: BarChart3,
    title: "Business Development Manager",
    department: "Sales",
    location: "Remote (India)",
    type: "Full-time",
  },
  {
    icon: Users,
    title: "EV Academy Trainer",
    department: "Academy",
    location: "Multiple Cities",
    type: "Contract",
  },
];

const BENEFITS = [
  { icon: Heart, label: "Health Insurance" },
  { icon: Laptop, label: "Remote-First" },
  { icon: Coffee, label: "Flexible Hours" },
  { icon: GraduationCap, label: "Learning Budget" },
  { icon: Shield, label: "Stock Options" },
  { icon: Zap, label: "EV Charging Perks" },
];

/* ─── Page ─── */

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-electric-blue/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-electric-blue/10 text-electric-blue border-electric-blue/20">
              Careers
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Join the{" "}
            <span className="text-electric-blue">HowElectric</span> team
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Help us build India&apos;s end-to-end EV charging platform. We&apos;re
            looking for passionate people who want to make a real impact on clean
            transportation.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: DURATION.slow, ease: EASE.out }}
          >
            <Button
              asChild
              size="lg"
              className="bg-electric-blue px-6 font-semibold text-white hover:bg-electric-blue/90"
            >
              <a href="#positions">
                <Briefcase className="size-4" />
                View Open Positions
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/team">
                Meet the Team
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Why HowElectric"
            title="Why join us?"
            subtitle="We're more than a startup — we're a movement to electrify India's transportation future."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {WHY_JOIN.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-electric-blue/10">
                    <Icon className="size-6 text-electric-blue" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section id="positions" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Open Positions"
            title="Find your role"
            subtitle="We're hiring across engineering, operations, marketing, and more. All roles offer competitive pay and equity."
          />

          <StaggerGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OPEN_POSITIONS.map(
              ({ icon: Icon, title, department, location, type }) => (
                <StaggerItem key={title}>
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
                    <div className="flex items-start justify-between">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-electric-blue/10">
                        <Icon className="size-5 text-electric-blue" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-electric-blue/10 text-electric-blue text-xs"
                      >
                        {department}
                      </Badge>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold">{title}</h3>

                    <div className="mt-3 flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-3.5" />
                        {location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="size-3.5" />
                        {type}
                      </div>
                    </div>

                    <div className="mt-auto pt-5">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-electric-blue">
                        Apply Now
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              )
            )}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Benefits"
            title="Perks & benefits"
            subtitle="We take care of our people so they can focus on building the future."
          />

          <ScrollReveal>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-3">
              {BENEFITS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 text-center shadow-card"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-electric-blue/10">
                    <Icon className="size-6 text-electric-blue" />
                  </div>
                  <p className="mt-3 text-sm font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Apply Now"
          description="Don't see a perfect fit? Send us your resume anyway — we're always looking for exceptional talent."
          primaryLabel="Apply Now"
          primaryHref="/careers"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          variant="dark"
        />
      </div>
    </>
  );
}
