"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
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

export function AboutHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#050d18]">
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
        className="pointer-events-none absolute left-0 top-1/2 size-[350px] rounded-full bg-teal/5 blur-[100px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center sm:py-40 lg:px-8">
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
            <span className="flex size-5 items-center justify-center rounded-full bg-electric-blue/20">
              <Building2 className="size-3 text-electric-blue" />
            </span>
            About HowElectric
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mt-8">
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {["Building", "India's", "EV", "charging"].map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={wordReveal}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
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
              infrastructure.
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.0,
            duration: DURATION.slow,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          The world is going electric. The question isn&apos;t IF — it&apos;s
          HOW.
        </motion.p>

        {/* Micro stats */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: DURATION.slow }}
        >
          {[
            { value: "5", label: "Pillars" },
            { value: "150+", label: "Cities" },
            { value: "Bengaluru", label: "HQ" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-bold text-white sm:text-xl">
                {value}
              </p>
              <p className="text-[11px] uppercase tracking-wider text-white/30">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
