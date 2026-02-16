"use client";

import { useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Calculator,
  FileText,
  HelpCircle,
  MapPin,
  Zap,
  Briefcase,
  ArrowRight,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { CTABanner } from "@/components/shared/CTABanner";
import { DURATION } from "@/lib/animations";

/* ─── Tool definitions ─── */
const TOOLS = [
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Estimate revenue, costs & payback period",
    href: "/consulting/tools/roi-calculator",
    accentHex: "255,107,53",
  },
  {
    icon: FileText,
    title: "Subsidy Navigator",
    description: "Find eligible state & central subsidies",
    href: "/consulting/tools/subsidy-navigator",
    accentHex: "255,107,53",
  },
  {
    icon: HelpCircle,
    title: "Charger Quiz",
    description: "Get personalized charger recommendations",
    href: "/consulting/tools/charger-quiz",
    accentHex: "255,107,53",
  },
  {
    icon: MapPin,
    title: "Location Check",
    description: "Score potential sites for viability",
    href: "/consulting/tools/location-check",
    accentHex: "255,107,53",
  },
  {
    icon: Zap,
    title: "Power Calculator",
    description: "Calculate electrical requirements",
    href: "/consulting/tools/power-calculator",
    accentHex: "255,107,53",
  },
  {
    icon: Briefcase,
    title: "Business Plan",
    description: "Generate a starter business plan",
    href: "/consulting/tools/business-plan",
    accentHex: "255,107,53",
  },
];

/* ─── Tool Card with spotlight hover effect ─── */
function ToolCard({
  tool,
  index,
}: {
  tool: (typeof TOOLS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 25 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(${tool.accentHex},0.12) 0%, transparent 70%)`
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  const Icon = tool.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.a
        ref={cardRef}
        href={tool.href}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Spotlight glow overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        <div className="relative z-20">
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-orange/10">
            <Icon className="size-6 text-orange" />
          </div>
          <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-orange">
            {tool.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {tool.description}
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Try Now
            <ArrowRight className="size-3.5" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function ToolsHubPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#050d18] py-24 lg:py-32">
        {/* Dot grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Animated aurora blobs */}
        <motion.div
          className="pointer-events-none absolute left-1/4 top-0 size-[600px] rounded-full bg-orange/10 blur-[150px]"
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-1/4 size-[400px] rounded-full bg-electric-blue/8 blur-[120px]"
          animate={{
            x: [0, -70, 35, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
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
                <Wrench className="size-3 text-orange" />
              </span>
              Self-Serve Tools
            </span>
          </motion.div>

          {/* Headline */}
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
            Free{" "}
            <span className="bg-gradient-to-r from-orange via-[#FBBF24] to-orange bg-clip-text text-transparent">
              EV Business Tools
            </span>
          </motion.h1>

          {/* Subtitle */}
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
            Plan smarter with our free calculators, quizzes, and templates — no
            sign-up required.
          </motion.p>
        </div>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Tools Grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              All Tools
            </p>
            <h2 className="mt-3">Choose a tool to get started</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Each tool is free, instant, and requires no sign-up. Use them to
              research, plan, and validate your EV charging opportunity.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((tool, i) => (
              <ToolCard key={tool.title} tool={tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Need expert help?"
          description="Our consultants can build a custom plan tailored to your location, budget, and business goals. Get a managed consultation today."
          primaryLabel="Get a Managed Consultation"
          primaryHref="/consulting/managed"
          secondaryLabel="Learn About Tiers"
          secondaryHref="/consulting"
          variant="dark"
        />
      </div>
    </>
  );
}
