"use client";

import { useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  ShoppingCart,
  ShoppingBag,
  Lightbulb,
  Wrench,
  Monitor,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DURATION, EASE } from "@/lib/animations";

// ── Data ──────────────────────────────────────────────────────────────

const OFFERINGS = [
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Source & compare chargers",
    href: "/marketplace",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    description: "Plan your EV business",
    href: "/consulting",
  },
  {
    icon: Wrench,
    title: "Installation & AMC",
    description: "End-to-end field support",
    href: "/services",
  },
  {
    icon: Monitor,
    title: "CMS Platform",
    description: "Monitor, bill & scale",
    href: "/cms",
  },
  {
    icon: GraduationCap,
    title: "EV Academy",
    description: "Courses & certifications",
    href: "/academy",
  },
];

// ── Word-by-word stagger animation ───────────────────────────────────

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const wordReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

function AnimatedHeadline({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.h1
      variants={wordContainer}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordReveal}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// ── Animation constants ──────────────────────────────────────────────

const ICON_EASE: [number, number, number, number] = [0.45, 0, 0.55, 1];

const iconFloat = {
  animate: (i: number) => ({
    y: [0, -3, 0],
    rotate: [0, i % 2 === 0 ? 6 : -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: ICON_EASE,
      delay: i * 0.4,
    },
  }),
};

// ── Offerings Card with 3D tilt ─────────────────────────────────────

function OfferingsCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    springConfig
  );
  const glareX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [0, 100]),
    springConfig
  );
  const glareY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [0, 100]),
    springConfig
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
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
      className="relative mt-10 lg:mt-0"
      style={{ perspective: 800 }}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.6,
        duration: DURATION.dramatic,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Radial glow behind card */}
      <div className="pointer-events-none absolute -inset-12 rounded-full bg-electric-blue/15 blur-[80px]" />

      {/* Brand mark */}
      <motion.div
        className="absolute -top-5 left-1/2 z-10 flex size-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-blue to-teal shadow-[0_0_30px_rgba(78,205,196,0.3)]"
        initial={{ opacity: 0, y: 12, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 0.9,
          duration: DURATION.normal,
          ease: EASE.outBack,
        }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: ICON_EASE }}
        >
          <Zap className="size-7 text-white" />
        </motion.div>
      </motion.div>

      {/* 3D Tilt Card */}
      <motion.div
        ref={cardRef}
        className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glare overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`
            ),
          }}
        />

        {/* Header */}
        <motion.div
          className="px-6 pb-4 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: DURATION.normal }}
        >
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-teal">
            Our Platform
          </p>
          <p className="text-xl font-bold text-white">
            Everything you need to build EV infrastructure
          </p>
        </motion.div>

        <div className="mx-6 h-px bg-white/[0.06]" />

        {/* Offerings grid */}
        <div className="grid grid-cols-2 gap-px bg-white/[0.03] p-px">
          {OFFERINGS.map(({ icon: Icon, title, description, href }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.0 + i * 0.06,
                duration: DURATION.normal,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={href}
                className="group flex flex-col gap-2 bg-[#060e1a]/80 p-4 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-teal/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal/20">
                  <motion.div
                    custom={i}
                    variants={iconFloat}
                    animate="animate"
                  >
                    <Icon className="size-4 text-teal transition-colors duration-300 group-hover:text-white" />
                  </motion.div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white transition-colors group-hover:text-teal">
                    {title}
                  </p>
                  <p className="text-[11px] leading-relaxed text-white/35">
                    {description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* CTA cell */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.0 + OFFERINGS.length * 0.06,
              duration: DURATION.normal,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="/get-started"
              className="group flex h-full flex-col items-center justify-center gap-1.5 bg-teal/[0.08] p-4 transition-colors hover:bg-teal/15"
            >
              <span className="text-sm font-semibold text-teal">
                Get Started
              </span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: ICON_EASE,
                }}
              >
                <ArrowRight className="size-4 text-teal" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main Component ──────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050d18]">
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
        className="pointer-events-none absolute left-1/4 top-0 size-[700px] rounded-full bg-electric-blue/10 blur-[150px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-1/4 size-[500px] rounded-full bg-teal/8 blur-[120px]"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 40, -70, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-0 top-1/2 size-[350px] rounded-full bg-purple/5 blur-[100px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-6 py-24 sm:py-32 lg:min-h-screen lg:grid-cols-[1.2fr_420px] lg:gap-16 lg:px-8 lg:py-0">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-teal/20">
                <Zap className="size-3 text-teal" />
              </span>
              India&apos;s EV Charging Platform
            </span>
          </motion.div>

          {/* Headline — word-by-word stagger with blur reveal */}
          <div className="mt-8">
            <AnimatedHeadline
              text="EV Charging Infrastructure"
              className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            />
            <motion.h1
              className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              variants={wordContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      type: "spring" as const,
                      stiffness: 200,
                      damping: 20,
                      delay: 0.7,
                    },
                  },
                }}
                className="inline-block bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent"
              >
                Simplified.
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/40 sm:text-lg lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            One platform to source chargers, plan deployments, and manage your
            network — from first install to nationwide scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white px-6 font-semibold text-navy shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow hover:bg-white/90 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            >
              <Link href="/consulting">
                Book a Consultation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/[0.12] bg-white/[0.03] text-white backdrop-blur-sm hover:bg-white/[0.08] hover:text-white"
            >
              <Link href="/services">
                <ShoppingCart className="size-4" />
                Explore Services
              </Link>
            </Button>
          </motion.div>

          {/* Micro stats */}
          <motion.div
            className="mt-10 flex items-center justify-center gap-8 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            {[
              { value: "50+", label: "Brands" },
              { value: "150+", label: "Cities" },
              { value: "10K+", label: "Products" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center lg:text-left">
                <p className="text-lg font-bold text-white">{value}</p>
                <p className="text-[11px] text-white/30">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Offerings card */}
        <OfferingsCard />
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
