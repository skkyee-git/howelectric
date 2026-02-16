"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DURATION } from "@/lib/animations";

const STATS = [
  { value: "500+", label: "Installations Done" },
  { value: "150+", label: "Cities Covered" },
  { value: "200+", label: "Certified Installers" },
  { value: "98%", label: "On-Time Rate" },
];

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#050d18] pb-28 pt-32 lg:pb-36 lg:pt-40">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Aurora blobs — purple accent */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-0 size-[700px] rounded-full bg-purple/10 blur-[150px]"
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
        }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
            <span className="flex size-5 items-center justify-center rounded-full bg-purple/20">
              <Wrench className="size-3 text-purple" />
            </span>
            Installation & Maintenance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
        >
          Professional installation,{" "}
          <span className="bg-gradient-to-r from-purple via-electric-blue to-purple bg-clip-text text-transparent">
            zero downtime.
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
        >
          Certified installers, end-to-end commissioning, and annual maintenance
          — your chargers operational from Day 1.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            asChild
            size="lg"
            className="bg-purple px-6 font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-shadow hover:bg-purple/90 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)]"
          >
            <Link href="/services/request">
              <Wrench className="size-4" />
              Request Installation
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/[0.12] bg-white/[0.03] text-white backdrop-blur-sm hover:bg-white/[0.08] hover:text-white"
          >
            <Link href="/services/installers">
              <MapPin className="size-4" />
              Find Installer Near You
            </Link>
          </Button>
        </motion.div>

        {/* Micro stats */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: DURATION.slow }}
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-bold text-white sm:text-xl">{value}</p>
              <p className="text-[11px] text-white/30">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
