"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Zap,
  Building2,
  TrendingUp,
  Briefcase,
  Rocket,
  Clock,
  Video,
  Award,
  IndianRupee,
  ArrowRight,
  GraduationCap,
  Users,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const COURSE_DETAILS = [
  { icon: Clock, label: "Duration", value: "Self-paced (approx 8 hours)" },
  { icon: Video, label: "Format", value: "Video lessons + quizzes" },
  { icon: Award, label: "Certificate", value: "Certificate of Completion" },
  { icon: IndianRupee, label: "Fee", value: "Free" },
];

const MODULES = [
  {
    number: 1,
    title: "Introduction to Electric Vehicles",
    description: "EV types, battery basics, charging standards",
    icon: BookOpen,
  },
  {
    number: 2,
    title: "Charging Technology",
    description: "AC vs DC, connectors (CCS2, CHAdeMO, Type 2), power levels",
    icon: Zap,
  },
  {
    number: 3,
    title: "Charging Infrastructure",
    description: "Components, installation basics, grid requirements",
    icon: Building2,
  },
  {
    number: 4,
    title: "Indian EV Market",
    description:
      "Market size, growth projections, key players, government policies",
    icon: TrendingUp,
  },
  {
    number: 5,
    title: "Business Models",
    description: "CPO models, revenue streams, unit economics",
    icon: Briefcase,
  },
  {
    number: 6,
    title: "Getting Started",
    description: "How to evaluate the opportunity, next steps, resources",
    icon: Rocket,
  },
];

const WHO_ITS_FOR = [
  {
    icon: Lightbulb,
    label: "Anyone curious about EV charging",
  },
  {
    icon: Rocket,
    label: "Entrepreneurs exploring the space",
  },
  {
    icon: GraduationCap,
    label: "Students",
  },
  {
    icon: Users,
    label: "Career changers",
  },
  {
    icon: BarChart3,
    label: "Investors doing due diligence",
  },
];

/* ─── Page ─── */

export default function FundamentalsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-green/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-green/10 text-green border-green/20">
              Free Course
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Master the fundamentals of{" "}
            <span className="text-green">EV charging</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            A comprehensive introduction to EV charging technology,
            infrastructure, and the Indian market — completely free.
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
              className="bg-green px-6 font-semibold text-white hover:bg-green/90"
            >
              <Link href="https://howacademy.in/courses/ev-infrastructure/" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="size-4" />
                Start Free Course
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/academy/certification">
                View Certification Tracks
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Course Details Card ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Course Details"
            title="Everything you need to know"
            subtitle="Get a complete foundation in EV charging — at your own pace, completely free."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-green/20 bg-white p-8 shadow-card md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                {COURSE_DETAILS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green/10">
                      <Icon className="size-5 text-green" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-0.5 font-semibold text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Course Outline ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Course Outline"
            title="6 modules to build your foundation"
            subtitle="From EV basics to business models — everything you need to understand the EV charging landscape."
          />

          <div className="relative mx-auto max-w-4xl">
            {/* Connector line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-green/40 via-green/20 to-transparent md:left-8 lg:block" />

            <div className="space-y-10">
              {MODULES.map(
                ({ number, title, description, icon: Icon }, idx) => (
                  <ScrollReveal key={number} delay={idx * 0.08}>
                    <div className="flex gap-6 md:gap-8">
                      <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-green text-lg font-bold text-white shadow-lg shadow-green/20 md:size-16 md:text-xl">
                        {number}
                      </div>
                      <div className="pt-1 md:pt-3">
                        <div className="flex items-center gap-3">
                          <Icon className="size-5 text-green" />
                          <h3 className="text-xl font-semibold md:text-2xl">
                            {title}
                          </h3>
                        </div>
                        <p className="mt-2 text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Who It's For"
            title="This course is perfect for you"
            subtitle="Whether you're exploring, investing, or switching careers — this free course gives you the knowledge to get started."
          />

          <StaggerGrid className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {WHO_ITS_FOR.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <motion.div
                  className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green/10">
                    <Icon className="size-5 text-green" />
                  </div>
                  <span className="font-medium text-foreground">{label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Ready to learn the fundamentals?"
          description="Start your free course today and build a solid foundation in EV charging technology, infrastructure, and the Indian market."
          primaryLabel="Start Free Course"
          primaryHref="https://howacademy.in/courses/ev-infrastructure/"
          secondaryLabel="View Certification Tracks"
          secondaryHref="/academy/certification"
          variant="dark"
        />
      </div>
    </>
  );
}
