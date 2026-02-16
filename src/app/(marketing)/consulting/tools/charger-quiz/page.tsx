"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Home,
  Building2,
  Truck,
  MapPin,
  Target,
  IndianRupee,
  Gauge,
  Award,
  ChevronRight,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const QUIZ_COVERS = [
  {
    icon: Target,
    title: "Use Case Matching",
    description:
      "We match charger types to your exact scenario — home, commercial, fleet, or public deployment.",
  },
  {
    icon: IndianRupee,
    title: "Budget Optimization",
    description:
      "Get charger recommendations that maximize value within your specific budget range.",
  },
  {
    icon: Gauge,
    title: "Power Requirements",
    description:
      "Understand the electrical infrastructure needed for each recommended charger option.",
  },
  {
    icon: Award,
    title: "Brand Recommendations",
    description:
      "Curated suggestions from trusted brands available in the Indian market with warranty support.",
  },
];

const QUIZ_STEPS = [
  {
    step: 1,
    question: "What's your primary use case?",
    options: [
      { icon: Home, label: "Home" },
      { icon: Building2, label: "Commercial" },
      { icon: Truck, label: "Fleet" },
      { icon: MapPin, label: "Public" },
    ],
  },
  {
    step: 2,
    question: "How many vehicles?",
    options: ["1\u20135", "5\u201320", "20\u201350", "50+"],
  },
  {
    step: 3,
    question: "Budget range?",
    options: ["Under \u20b91L", "\u20b91\u20135L", "\u20b95\u201320L", "\u20b920L+"],
  },
];

/* ─── Page ─── */

export default function ChargerQuizPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-orange/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-orange/10 text-orange border-orange/20">
              Free Tool
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Which EV charger is{" "}
            <span className="text-orange">right for you?</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Answer 5 quick questions and get personalized charger
            recommendations tailored to your needs, budget, and setup.
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
              className="bg-orange px-6 font-semibold text-white hover:bg-orange/90"
            >
              <Link href="/consulting/book">
                <Zap className="size-4" />
                Talk to an Expert Instead
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/consulting/tools">
                All Free Tools
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Quiz Mockup ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Interactive Quiz"
            title="Preview: 5-step charger recommendation"
            subtitle="A quick guided experience to match you with the perfect EV charger for your needs."
          />

          <ScrollReveal>
            <div className="relative mx-auto max-w-3xl">
              {/* Coming Soon overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-white/60 backdrop-blur-[2px]">
                <Badge className="bg-orange text-white text-base px-5 py-2 shadow-lg shadow-orange/25">
                  <Lock className="mr-2 size-4" />
                  Coming Soon
                </Badge>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-card md:p-8">
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                    <span>Step 1 of 5</span>
                    <span>20%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-1/5 rounded-full bg-orange" />
                  </div>
                </div>

                {/* Step 1 — Use case */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold">
                    Step 1: What&apos;s your primary use case?
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {QUIZ_STEPS[0].options.map((opt) => {
                      const item = opt as { icon: typeof Home; label: string };
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="flex cursor-default flex-col items-center gap-2 rounded-xl border border-border p-4 text-center transition-colors hover:border-orange/40 hover:bg-orange/5"
                        >
                          <Icon className="size-6 text-orange" />
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2 — Vehicle count */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold">
                    Step 2: How many vehicles?
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {(QUIZ_STEPS[1].options as string[]).map((opt) => (
                      <div
                        key={opt}
                        className="flex cursor-default items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-orange/40 hover:bg-orange/5"
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3 — Budget */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold">
                    Step 3: Budget range?
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {(QUIZ_STEPS[2].options as string[]).map((opt) => (
                      <div
                        key={opt}
                        className="flex cursor-default items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-orange/40 hover:bg-orange/5"
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendation preview */}
                <div className="rounded-xl border-2 border-dashed border-orange/30 bg-orange/5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-orange/10">
                      <Zap className="size-5 text-orange" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Your Recommendation
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        7.4 kW AC Charger — Home Use
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Based on your answers, we recommend a Level 2 AC charger with
                    smart scheduling. Estimated cost: &#8377;25,000 &ndash;
                    &#8377;45,000.
                  </p>
                  <div className="mt-4">
                    <Button
                      disabled
                      size="sm"
                      className="bg-orange text-white opacity-60"
                    >
                      View Full Recommendation
                      <ChevronRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Quiz Covers ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Quiz Covers"
            title="What the quiz evaluates"
            subtitle="Our recommendation engine analyzes four key dimensions to find your perfect charger match."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {QUIZ_COVERS.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 24 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: DURATION.normal, ease: EASE.out }}
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="Can't wait? Talk to an expert instead"
          description="Skip the quiz and get personalized charger recommendations from our EV infrastructure specialists in a free 30-minute consultation."
          primaryLabel="Talk to an Expert"
          primaryHref="/consulting/book"
          secondaryLabel="Explore All Tools"
          secondaryHref="/consulting/tools"
          variant="dark"
        />
      </div>
    </>
  );
}
