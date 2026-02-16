"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  ChevronLeft,
  Search,
  Car,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Building2,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/CTABanner";
import { DURATION } from "@/lib/animations";

/* ─── Score breakdown data ─── */
const SCORE_BARS = [
  { label: "Traffic Density", score: 85, color: "bg-green" },
  { label: "EV Adoption Rate", score: 72, color: "bg-electric-blue" },
  { label: "Competition Score", score: 90, color: "bg-orange" },
  { label: "Power Availability", score: 68, color: "bg-purple" },
  { label: "Demographics", score: 75, color: "bg-teal" },
];

/* ─── Factors we analyze ─── */
const ANALYSIS_FACTORS = [
  {
    icon: Car,
    title: "Traffic Density",
    description: "Average daily vehicle counts and EV traffic patterns on nearby roads",
  },
  {
    icon: TrendingUp,
    title: "EV Adoption Rate",
    description: "Regional EV registration data and growth trajectories",
  },
  {
    icon: Shield,
    title: "Competition Score",
    description: "Existing charger density within 5km radius and utilization rates",
  },
  {
    icon: Zap,
    title: "Power Availability",
    description: "Grid capacity, transformer proximity, and load-shedding frequency",
  },
  {
    icon: Users,
    title: "Demographics",
    description: "Income levels, vehicle ownership patterns, and tech adoption indices",
  },
  {
    icon: Building2,
    title: "Footfall & Amenities",
    description: "Nearby malls, restaurants, offices, and average dwell time",
  },
];

export default function LocationCheckPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#050d18] py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <motion.div
          className="pointer-events-none absolute left-1/3 top-0 size-[550px] rounded-full bg-orange/10 blur-[150px]"
          animate={{ x: [0, 40, -20, 0], y: [0, -45, 30, 0] }}
          transition={{ repeat: Infinity, duration: 19, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-1/4 size-[400px] rounded-full bg-electric-blue/8 blur-[120px]"
          animate={{ x: [0, -50, 30, 0], y: [0, 30, -45, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05, duration: DURATION.normal }}
            className="mb-8 flex justify-center"
          >
            <Link
              href="/consulting/tools"
              className="inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white/70"
            >
              <ChevronLeft className="size-4" />
              All Tools
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-orange/20">
                <MapPin className="size-3 text-orange" />
              </span>
              Free Tool
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Location{" "}
            <span className="bg-gradient-to-r from-orange via-[#FBBF24] to-orange bg-clip-text text-transparent">
              Viability Check
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Score any potential location for EV charging station viability.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Location Scoring Mockup */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white shadow-card-hover">
              {/* Coming Soon overlay */}
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/60 backdrop-blur-[2px]">
                <div className="text-center">
                  <Badge className="border-0 bg-orange px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange/25">
                    Coming Soon
                  </Badge>
                  <p className="mt-3 text-sm text-muted-foreground">
                    This tool is under development
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Address input mockup */}
                <div className="mx-auto max-w-lg">
                  <label className="text-sm font-medium text-foreground">
                    Enter Location
                  </label>
                  <div className="mt-2 flex items-center gap-2 rounded-lg border border-border/50 bg-light-gray/50 px-4 py-3">
                    <Search className="size-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Address or Pin Code (e.g., 400001)
                    </span>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button
                      size="sm"
                      className="bg-orange font-semibold text-white hover:bg-orange/90"
                      disabled
                    >
                      Check Viability
                    </Button>
                  </div>
                </div>

                {/* Score output */}
                <div className="mx-auto mt-10 max-w-lg">
                  {/* Overall Score */}
                  <div className="mb-8 text-center">
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      Location Score
                    </p>
                    <div className="mt-3 inline-flex items-baseline gap-1">
                      <span className="text-6xl font-bold text-orange">78</span>
                      <span className="text-2xl font-medium text-muted-foreground">
                        /100
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-green font-medium">
                      Good viability
                    </p>
                  </div>

                  {/* Score breakdown bars */}
                  <div className="space-y-4">
                    {SCORE_BARS.map((bar) => (
                      <div key={bar.label}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">
                            {bar.label}
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {bar.score}%
                          </span>
                        </div>
                        <div className="mt-2 h-2.5 rounded-full bg-light-gray">
                          <div
                            className={`h-2.5 rounded-full ${bar.color}`}
                            style={{ width: `${bar.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Factors We Analyze */}
      <section className="bg-light-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Methodology
            </p>
            <h2 className="mt-3">Factors we analyze</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our location scoring algorithm evaluates multiple data points to
              give you a comprehensive viability assessment.
            </p>
          </ScrollReveal>

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ANALYSIS_FACTORS.map((factor) => {
              const Icon = factor.icon;
              return (
                <StaggerItem key={factor.title}>
                  <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-card">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-orange/10">
                      <Icon className="size-5 text-orange" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {factor.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {factor.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <CTABanner
          headline="Get a Professional Site Assessment"
          description="Our team conducts on-ground surveys with power audits, traffic analysis, and competitive mapping for your exact location."
          primaryLabel="Get Site Assessment"
          primaryHref="/consulting/site-assessment"
          secondaryLabel="Back to Tools"
          secondaryHref="/consulting/tools"
          variant="dark"
        />
      </div>
    </>
  );
}
