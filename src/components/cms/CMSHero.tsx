"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DURATION } from "@/lib/animations";

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

export function CMSHero() {
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

      {/* Animated aurora blobs — gold + electric-blue */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-0 size-[700px] rounded-full bg-gold/10 blur-[150px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-1/4 size-[500px] rounded-full bg-electric-blue/8 blur-[120px]"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 40, -70, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-0 top-1/2 size-[350px] rounded-full bg-gold/5 blur-[100px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center sm:py-40 lg:min-h-screen lg:px-8 lg:py-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
            <span className="flex size-5 items-center justify-center rounded-full bg-gold/20">
              <Monitor className="size-3 text-gold" />
            </span>
            CMS Platform
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mt-8">
          <AnimatedHeadline
            text="The operating system for your"
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
              className="inline-block bg-gradient-to-r from-gold via-orange to-gold bg-clip-text text-transparent"
            >
              EV charging network.
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.0,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Hardware-agnostic OCPP management. India-first with UPI payments &amp;
          GST invoicing built in. Starting at just ₹500 per charger per month.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.15,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gold px-6 font-semibold text-navy shadow-[0_0_30px_rgba(251,191,36,0.2)] transition-shadow hover:bg-gold/90 hover:shadow-[0_0_50px_rgba(251,191,36,0.3)]"
          >
            <Link href="/cms/demo">Try Live Demo</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/[0.12] bg-white/[0.03] text-white backdrop-blur-sm hover:bg-white/[0.08] hover:text-white"
          >
            <Link href="/cms/pricing">Start Free Trial</Link>
          </Button>
        </motion.div>

        {/* Micro stats */}
        <motion.div
          className="mt-10 flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: DURATION.slow }}
        >
          {[
            { value: "₹500/mo", label: "Starting Price" },
            { value: "OCPP 1.6/2.0", label: "Protocol" },
            { value: "99.9%", label: "Uptime" },
          ].map(({ value, label }, i) => (
            <div key={label} className="text-center">
              {i > 0 && (
                <div className="absolute -ml-4 h-8 w-px bg-white/10" />
              )}
              <p className="text-lg font-bold text-white">{value}</p>
              <p className="text-[11px] text-white/30">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
