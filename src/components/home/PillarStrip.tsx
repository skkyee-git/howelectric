"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ShoppingBag,
  Lightbulb,
  Wrench,
  Monitor,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

// ── Data ──────────────────────────────────────────────────────────────

const PILLARS = [
  {
    icon: ShoppingBag,
    name: "Marketplace",
    tagline: "10,000+ chargers from 50+ brands",
    href: "/marketplace",
    accentHex: "78,205,196",
    accent: "text-teal",
    accentBg: "bg-teal/10",
    span: "col-span-2 row-span-2 sm:col-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Lightbulb,
    name: "Consulting",
    tagline: "Expert guidance for every decision",
    href: "/consulting",
    accentHex: "255,107,53",
    accent: "text-orange",
    accentBg: "bg-orange/10",
    span: "col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    icon: Wrench,
    name: "Installation & AMC",
    tagline: "End-to-end field operations",
    href: "/services",
    accentHex: "168,85,247",
    accent: "text-purple",
    accentBg: "bg-purple/10",
    span: "col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    icon: Monitor,
    name: "CMS Platform",
    tagline: "Monitor, bill & scale your network",
    href: "/cms",
    accentHex: "251,191,36",
    accent: "text-gold",
    accentBg: "bg-gold/10",
    span: "col-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    icon: GraduationCap,
    name: "EV Academy",
    tagline: "Certifications & upskilling",
    href: "/academy",
    accentHex: "16,185,129",
    accent: "text-green",
    accentBg: "bg-green/10",
    span: "col-span-1 lg:col-span-2 lg:row-span-1",
  },
];

// ── Spotlight Card ────────────────────────────────────────────────────

function SpotlightCard({
  icon: Icon,
  name,
  tagline,
  href,
  accentHex,
  accent,
  accentBg,
  span,
  index,
}: (typeof PILLARS)[number] & { index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 25 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D tilt
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  // Spotlight position as percentage
  const spotX = useTransform(smoothX, [-0.5, 0.5], [0, 100]);
  const spotY = useTransform(smoothY, [-0.5, 0.5], [0, 100]);

  // Spotlight gradient
  const spotlightBg = useTransform(
    [spotX, spotY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}% ${y}%, rgba(${accentHex},0.12) 0%, transparent 60%)`
  );

  // Border glow gradient
  const borderGlow = useTransform(
    [spotX, spotY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}% ${y}%, rgba(${accentHex},0.4) 0%, transparent 60%)`
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={span}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 900 }}
    >
      <motion.a
        ref={cardRef}
        href={href}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 transition-shadow duration-500"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Border glow layer */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: borderGlow }}
        />

        {/* Inner card bg sits on top of border glow */}
        <div className="pointer-events-none absolute inset-[1px] rounded-[23px] bg-white" />

        {/* Spotlight overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlightBg }}
        />

        {/* Content */}
        <div className="relative z-20">
          <div
            className={`flex size-12 items-center justify-center rounded-2xl ${accentBg} transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className={`size-5 ${accent}`} />
          </div>
        </div>

        <div className="relative z-20 mt-auto">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">{name}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{tagline}</p>
            </div>
            <div
              className={`flex size-9 shrink-0 items-center justify-center rounded-full ${accentBg} opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2`}
            >
              <ArrowUpRight className={`size-4 ${accent}`} />
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────

export function PillarStrip() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Our Platform
          </p>
          <h2 className="mt-3 max-w-xl">
            Five pillars. One complete ecosystem.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to build, run, and scale EV charging
            infrastructure — all under one roof.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 lg:grid-cols-6 lg:auto-rows-[180px]">
          {PILLARS.map((pillar, i) => (
            <SpotlightCard key={pillar.name} {...pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
