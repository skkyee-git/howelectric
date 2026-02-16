"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Calculator,
  Landmark,
  HelpCircle,
  MapPin,
  Bolt,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const TOOLS = [
  {
    icon: Calculator,
    title: "ROI Calculator",
    description:
      "Project your revenue, payback period, and profit margins based on location and investment.",
    href: "/consulting/tools/roi-calculator",
    accentHex: "255,107,53",
  },
  {
    icon: Landmark,
    title: "Subsidy Navigator",
    description:
      "Find all central and state government subsidies applicable to your EV charging project.",
    href: "/consulting/tools/subsidy-navigator",
    accentHex: "78,205,196",
  },
  {
    icon: HelpCircle,
    title: "Charger Quiz",
    description:
      "Answer a few questions and get personalized charger recommendations for your use case.",
    href: "/consulting/tools/charger-quiz",
    accentHex: "168,85,247",
  },
  {
    icon: MapPin,
    title: "Location Check",
    description:
      "Assess the viability of your proposed location based on traffic, competition, and infrastructure.",
    href: "/consulting/tools/location-check",
    accentHex: "46,134,171",
  },
  {
    icon: Bolt,
    title: "Power Calculator",
    description:
      "Determine your electrical load requirements and transformer needs for any charger setup.",
    href: "/consulting/tools/power-calculator",
    accentHex: "251,191,36",
  },
  {
    icon: Briefcase,
    title: "Business Plan",
    description:
      "Generate a professional EV charging business plan template ready for investors and banks.",
    href: "/consulting/tools/business-plan",
    accentHex: "16,185,129",
  },
];

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
          <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-orange/10">
            <Icon className="size-5 text-orange" />
          </div>
          <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-orange">
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

export function FreeToolsGrid() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            Free Tools
          </p>
          <h2 className="mt-3">Start with our free tools</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            No sign-up required. Use our self-serve tools to research, plan, and
            validate your EV charging opportunity.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, i) => (
            <ToolCard key={tool.title} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
