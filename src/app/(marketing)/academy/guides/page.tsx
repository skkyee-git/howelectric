"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  BookOpen,
  Rocket,
  Briefcase,
  IndianRupee,
  Users,
  Wrench,
  Cpu,
  FileText,
  Landmark,
  Award,
  Settings,
  Zap,
  Building2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

interface Guide {
  title: string;
  readTime: string;
  difficulty: Difficulty;
  icon: typeof BookOpen;
  href: string;
}

interface GuideCategory {
  title: string;
  icon: typeof Rocket;
  guides: Guide[];
}

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Beginner: "bg-green/10 text-green border-green/20",
  Intermediate: "bg-amber-100 text-amber-700 border-amber-200",
  Advanced: "bg-red-100 text-red-700 border-red-200",
};

const GUIDE_CATEGORIES: GuideCategory[] = [
  {
    title: "Getting Started",
    icon: Rocket,
    guides: [
      {
        title: "Complete Beginner's Guide to EV Charging",
        readTime: "30 min",
        difficulty: "Beginner",
        icon: BookOpen,
        href: "/academy/guides",
      },
      {
        title: "How to Choose Your First EV Charger",
        readTime: "15 min",
        difficulty: "Beginner",
        icon: Zap,
        href: "/academy/guides",
      },
    ],
  },
  {
    title: "Business Planning",
    icon: Briefcase,
    guides: [
      {
        title: "EV Charging Business Plan Template",
        readTime: "45 min",
        difficulty: "Intermediate",
        icon: FileText,
        href: "/academy/guides",
      },
      {
        title: "Financial Modeling Guide for CPOs",
        readTime: "30 min",
        difficulty: "Advanced",
        icon: IndianRupee,
        href: "/academy/guides",
      },
      {
        title: "Franchise Model Playbook",
        readTime: "25 min",
        difficulty: "Intermediate",
        icon: Users,
        href: "/academy/guides",
      },
    ],
  },
  {
    title: "Technical",
    icon: Wrench,
    guides: [
      {
        title: "OCPP Integration Guide",
        readTime: "20 min",
        difficulty: "Advanced",
        icon: Cpu,
        href: "/academy/guides",
      },
      {
        title: "Electrical Infrastructure Requirements",
        readTime: "25 min",
        difficulty: "Intermediate",
        icon: Building2,
        href: "/academy/guides",
      },
      {
        title: "CMS Setup & Configuration",
        readTime: "15 min",
        difficulty: "Intermediate",
        icon: Settings,
        href: "/academy/guides",
      },
    ],
  },
  {
    title: "Regulatory",
    icon: Landmark,
    guides: [
      {
        title: "DISCOM Approval Process Guide",
        readTime: "20 min",
        difficulty: "Intermediate",
        icon: Award,
        href: "/academy/guides",
      },
      {
        title: "State Subsidy Application Handbook",
        readTime: "30 min",
        difficulty: "Advanced",
        icon: Landmark,
        href: "/academy/guides",
      },
    ],
  },
];

/* ─── Page ─── */

export default function AcademyGuidesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-green/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-green/10 text-green border-green/20">
              <BookOpen className="mr-1.5 size-3" />
              Guides
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            In-depth guides &{" "}
            <span className="text-green">playbooks</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Comprehensive, step-by-step guides for every aspect of EV charging
            infrastructure.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: DURATION.slow, ease: EASE.out }}
          >
            <Button
              asChild
              size="lg"
              className="bg-green px-6 font-semibold text-white hover:bg-green/90"
            >
              <Link href="#guides">
                Browse Guides
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Guide Categories ── */}
      <div id="guides">
        {GUIDE_CATEGORIES.map((category, categoryIdx) => (
          <section
            key={category.title}
            className={`py-20 md:py-28 ${categoryIdx % 2 === 0 ? "bg-light-gray" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionHeader
                badge={category.title}
                title={category.title}
                alignment="left"
              />

              <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.guides.map(
                  ({ title, readTime, difficulty, icon: Icon, href }) => (
                    <StaggerItem key={title}>
                      <Link href={href} className="group block h-full">
                        <motion.div
                          className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-card transition-shadow group-hover:shadow-card-hover"
                          whileHover={{ y: -4 }}
                          transition={{
                            type: "spring" as const,
                            stiffness: 300,
                          }}
                        >
                          {/* Icon */}
                          <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-green/10">
                            <Icon className="size-6 text-green" />
                          </div>

                          {/* Title */}
                          <h4 className="flex-1 text-lg font-semibold text-foreground leading-snug">
                            {title}
                          </h4>

                          {/* Meta */}
                          <div className="mt-4 flex flex-wrap items-center gap-3">
                            <Badge
                              variant="outline"
                              className={`text-xs ${DIFFICULTY_STYLES[difficulty]}`}
                            >
                              {difficulty}
                            </Badge>
                            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                              <Clock className="size-3.5" />
                              {readTime}
                            </span>
                          </div>

                          {/* Link */}
                          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-green">
                            Read Guide
                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  )
                )}
              </StaggerGrid>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Get expert help instead"
          description="Not sure where to start? Our consulting team can create a custom roadmap tailored to your business goals and budget."
          primaryLabel="Get Expert Help"
          primaryHref="/consulting"
          secondaryLabel="Explore All Guides"
          secondaryHref="/academy/guides"
          variant="dark"
        />
      </div>
    </>
  );
}
