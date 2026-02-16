"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  TrendingUp,
  IndianRupee,
  Wrench,
  Scale,
  MapPin,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const DIMENSIONS = [
  {
    icon: TrendingUp,
    title: "Market Knowledge",
    score: 4,
    description:
      "Understanding of EV adoption trends, charging demand, and your target customer segments in the Indian market.",
  },
  {
    icon: IndianRupee,
    title: "Financial Readiness",
    score: 3,
    description:
      "Capital availability, funding strategy, and understanding of the investment required for EV charging infrastructure.",
  },
  {
    icon: Wrench,
    title: "Technical Understanding",
    score: 4,
    description:
      "Knowledge of charger types, power requirements, installation processes, and maintenance needs.",
  },
  {
    icon: Scale,
    title: "Regulatory Awareness",
    score: 3,
    description:
      "Familiarity with DISCOM policies, subsidies (FAME, state schemes), licensing, and compliance requirements.",
  },
  {
    icon: MapPin,
    title: "Location Access",
    score: 4,
    description:
      "Access to suitable locations with adequate power supply, footfall, and commercial viability.",
  },
];

/* ─── Pentagon Chart (pure CSS + inline SVG) ─── */

function PentagonChart({ scores }: { scores: number[] }) {
  const cx = 150;
  const cy = 150;
  const maxR = 110;
  const levels = 5;
  const sides = 5;

  // Angle for each vertex (starting from top, going clockwise)
  const angles = Array.from({ length: sides }, (_, i) => {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
    return angle;
  });

  // Generate pentagon points at a given radius
  const polygonPoints = (radius: number) =>
    angles
      .map((angle) => {
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");

  // Generate score polygon
  const scorePoints = angles
    .map((angle, i) => {
      const r = (scores[i] / levels) * maxR;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");

  // Labels for each vertex
  const labels = [
    "Market",
    "Financial",
    "Technical",
    "Regulatory",
    "Location",
  ];

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <svg viewBox="0 0 300 300" className="w-full">
        {/* Grid pentagons */}
        {Array.from({ length: levels }, (_, i) => {
          const r = ((i + 1) / levels) * maxR;
          return (
            <polygon
              key={i}
              points={polygonPoints(r)}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
            />
          );
        })}

        {/* Axis lines */}
        {angles.map((angle, i) => {
          const x2 = cx + maxR * Math.cos(angle);
          const y2 = cy + maxR * Math.sin(angle);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
            />
          );
        })}

        {/* Score polygon */}
        <polygon
          points={scorePoints}
          fill="rgba(255, 107, 53, 0.15)"
          stroke="#FF6B35"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Score dots */}
        {angles.map((angle, i) => {
          const r = (scores[i] / levels) * maxR;
          const dotX = cx + r * Math.cos(angle);
          const dotY = cy + r * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={dotX}
              cy={dotY}
              r="5"
              fill="#FF6B35"
              stroke="white"
              strokeWidth="2"
            />
          );
        })}

        {/* Labels */}
        {angles.map((angle, i) => {
          const labelR = maxR + 24;
          const x = cx + labelR * Math.cos(angle);
          const y = cy + labelR * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground text-[11px] font-medium"
            >
              {labels[i]}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

/* ─── Page ─── */

export default function ReadinessQuizPage() {
  const sampleScores = DIMENSIONS.map((d) => d.score);
  const totalScore = Math.round(
    (sampleScores.reduce((sum, s) => sum + s, 0) / (sampleScores.length * 5)) *
      100
  );

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
              Readiness Quiz
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Are you ready to start an{" "}
            <span className="text-orange">EV charging business?</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            Take our 2-minute quiz to assess your EV business readiness across
            5 key dimensions. Understand your strengths and gaps before you
            invest.
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
                Skip the Quiz &mdash; Talk to an Expert
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

      {/* ── Quiz Mockup with Pentagon Chart ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Quiz Preview"
            title="Your readiness at a glance"
            subtitle="The quiz evaluates 5 dimensions and generates a comprehensive readiness score with personalized insights."
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
                {/* Quiz header */}
                <div className="mb-8 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    Sample Result
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">
                    EV Business Readiness Assessment
                  </h3>
                </div>

                {/* Pentagon chart */}
                <div className="mb-8">
                  <PentagonChart scores={sampleScores} />
                </div>

                {/* Score breakdown */}
                <div className="mb-6 space-y-3">
                  {DIMENSIONS.map(({ title, score }) => (
                    <div key={title} className="flex items-center gap-3">
                      <span className="w-36 text-sm font-medium text-foreground sm:w-44">
                        {title}
                      </span>
                      <div className="flex-1">
                        <div className="h-2.5 w-full rounded-full bg-muted">
                          <div
                            className="h-2.5 rounded-full bg-orange"
                            style={{ width: `${(score / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                      <span className="w-8 text-right text-sm font-semibold text-orange">
                        {score}/5
                      </span>
                    </div>
                  ))}
                </div>

                {/* Result card */}
                <div className="rounded-xl border-2 border-dashed border-orange/30 bg-orange/5 p-6 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    Your Readiness Score
                  </p>
                  <p className="mt-2 text-4xl font-bold text-orange">
                    {totalScore}/100
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-1.5">
                    <CheckCircle2 className="size-4 text-orange" />
                    <span className="text-sm font-semibold text-orange">
                      Ready with support
                    </span>
                  </div>
                  <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
                    You have a solid foundation but could benefit from expert
                    guidance on financials and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Assess ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="What We Assess"
            title="5 dimensions of EV business readiness"
            subtitle="Our assessment framework evaluates your preparedness across the critical success factors for an EV charging business."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIMENSIONS.map(({ icon: Icon, title, description }) => (
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
          headline="Skip the quiz — talk to an expert"
          description="Get a personalized readiness assessment from our EV infrastructure consultants. We'll evaluate your situation and create a tailored action plan in a free 30-minute call."
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
