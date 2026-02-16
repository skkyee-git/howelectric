"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const QUIZ_STEPS = [
  "Answer 5 simple questions",
  "Get personalized recommendations",
  "Compare matched chargers side-by-side",
];

export function ChargerQuizCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      {/* Gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-1/4 size-[500px] rounded-full bg-teal/10 blur-[120px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-1/4 size-[400px] rounded-full bg-electric-blue/8 blur-[100px]"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 50, -60, 0],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left: Content */}
          <ScrollReveal>
            <div className="flex size-12 items-center justify-center rounded-2xl bg-teal/15">
              <HelpCircle className="size-6 text-teal" />
            </div>
            <h2 className="mt-5 text-white">
              Not sure which charger is right for you?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/50">
              Our smart quiz analyzes your needs — vehicle type, usage pattern,
              location, and budget — to recommend the perfect charger.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-teal font-semibold text-navy hover:bg-teal/90"
            >
              <Link href="/consulting/tools/charger-quiz">
                Take the Quiz
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </ScrollReveal>

          {/* Right: Steps card */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:p-10">
              <p className="mb-6 text-sm font-semibold text-white/60">
                How it works
              </p>
              <div className="flex flex-col gap-5">
                {QUIZ_STEPS.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal/15">
                      <CheckCircle2 className="size-5 text-teal" />
                    </div>
                    <p className="text-base font-medium text-white/80">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center">
                <p className="text-2xl font-bold text-white">2 minutes</p>
                <p className="mt-1 text-xs text-white/30">
                  Average time to complete
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
