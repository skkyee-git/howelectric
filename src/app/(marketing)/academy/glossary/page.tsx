"use client";

import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const GLOSSARY_TERMS = [
  {
    term: "AC Charging",
    definition:
      "Alternating current charging, typically 3.3kW to 22kW, used for slow/medium charging.",
  },
  {
    term: "BIS",
    definition:
      "Bureau of Indian Standards — sets quality and safety standards for EV chargers in India.",
  },
  {
    term: "CCS2",
    definition:
      "Combined Charging System 2 — standard DC fast charging connector used in India.",
  },
  {
    term: "CHAdeMO",
    definition:
      "DC fast charging standard developed in Japan, being phased out in favor of CCS2.",
  },
  {
    term: "CPO",
    definition:
      "Charge Point Operator — company that owns and operates EV charging stations.",
  },
  {
    term: "DC Fast Charging",
    definition:
      "Direct current charging, 30kW to 360kW, for rapid top-ups.",
  },
  {
    term: "DISCOM",
    definition:
      "Distribution Company — the local electricity utility that provides grid connection.",
  },
  {
    term: "FAME II",
    definition:
      "Faster Adoption and Manufacturing of EVs — central government subsidy scheme.",
  },
  {
    term: "GST",
    definition:
      "Goods & Services Tax — applies to charging services at 18%.",
  },
  {
    term: "kW",
    definition:
      "Kilowatt — unit of power, indicates how fast a charger can deliver energy.",
  },
  {
    term: "kWh",
    definition:
      "Kilowatt-hour — unit of energy consumed, basis for billing.",
  },
  {
    term: "Load Management",
    definition:
      "Distributing power across multiple chargers to avoid grid overload.",
  },
  {
    term: "OCPP",
    definition:
      "Open Charge Point Protocol — standard communication between charger and CMS.",
  },
  {
    term: "PM E-DRIVE",
    definition:
      "Government scheme succeeding FAME II for EV adoption subsidies.",
  },
  {
    term: "RFID",
    definition:
      "Radio-Frequency Identification — used for contactless charger access.",
  },
  {
    term: "SLA",
    definition:
      "Service Level Agreement — uptime and response time guarantees.",
  },
  {
    term: "Smart Charging",
    definition:
      "Optimizing charging schedules based on grid load and pricing.",
  },
  {
    term: "Type 2",
    definition:
      "Standard AC charging connector used in India and Europe.",
  },
  {
    term: "UPI",
    definition:
      "Unified Payments Interface — India's instant payment system.",
  },
  {
    term: "V2G",
    definition:
      "Vehicle-to-Grid — technology allowing EVs to send power back to the grid.",
  },
];

/* Active alphabet letters (have terms starting with them) */
const ACTIVE_LETTERS = new Set(
  GLOSSARY_TERMS.map((t) => t.term.charAt(0).toUpperCase())
);

/* ─── Page ─── */

export default function AcademyGlossaryPage() {
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
              <BookMarked className="mr-1.5 size-3" />
              Glossary
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            EV charging{" "}
            <span className="text-green">terminology explained</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Your complete reference guide to EV charging terms, standards, and
            acronyms.
          </motion.p>
        </div>
      </section>

      {/* ── Alphabet Filter ── */}
      <section className="border-b border-border bg-light-gray py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2">
              {ALPHABET.map((letter) => (
                <button
                  key={letter}
                  className={`flex size-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    ACTIVE_LETTERS.has(letter)
                      ? "bg-green/10 text-green hover:bg-green hover:text-white"
                      : "bg-white text-muted-foreground/40 cursor-default"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Glossary Terms ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Terms"
            title="All terms"
            subtitle="Browse the complete glossary of EV charging terminology used across the industry."
          />

          <StaggerGrid className="grid gap-6 md:grid-cols-2">
            {GLOSSARY_TERMS.map(({ term, definition }) => (
              <StaggerItem key={term}>
                <motion.div
                  className="rounded-xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green/10">
                      <span className="text-sm font-bold text-green">
                        {term.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground">
                        {term}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {definition}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Learn more in our courses"
          description="Go beyond the glossary. Enroll in our free fundamentals course or explore advanced certification tracks."
          primaryLabel="Explore Courses"
          primaryHref="https://howacademy.in/courses/ev-infrastructure/"
          secondaryLabel="Free Fundamentals"
          secondaryHref="/academy/fundamentals"
          variant="dark"
        />
      </div>
    </>
  );
}
