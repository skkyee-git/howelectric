"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { DURATION } from "@/lib/animations";

export function LearnHero() {
  return (
    <section className="relative overflow-hidden bg-light-gray py-24 lg:py-32">
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
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
          <span className="inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/5 px-4 py-1.5 text-sm font-medium text-electric-blue">
            <span className="flex size-5 items-center justify-center rounded-full bg-electric-blue/15">
              <BookOpen className="size-3 text-electric-blue" />
            </span>
            Knowledge Hub
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: DURATION.slow,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Learn everything about{" "}
          <span className="text-electric-blue">EV charging</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: DURATION.slow,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Guides, case studies, webinars, and industry insights to help you make
          informed decisions.
        </motion.p>
      </div>
    </section>
  );
}
