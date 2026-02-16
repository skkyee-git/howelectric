"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function CTASection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy">
      {/* Animated gradient orbs */}
      <motion.div
        className="pointer-events-none absolute size-[600px] rounded-full bg-electric-blue/20 blur-[120px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute size-[400px] rounded-full bg-teal/15 blur-[100px]"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 60, -100, 0],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 left-1/4 size-[350px] rounded-full bg-purple/10 blur-[100px]"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
        <ScrollReveal>
          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to build your EV charging business?
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/50 md:text-xl"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Whether you&apos;re starting from scratch or scaling an existing
            network, HowElectric has everything you need to succeed.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white px-8 font-semibold text-navy shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-shadow hover:bg-white/90 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
            >
              <Link href="/get-started">
                Start My Journey
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 px-8 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <Link href="/consulting">Talk to an Expert</Link>
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
