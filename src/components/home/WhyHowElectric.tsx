"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Layers,
  MapPin,
  Zap,
  Users,
  HeadphonesIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function WhyHowElectric() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Why HowElectric
          </p>
          <h2 className="mt-3 max-w-xl">
            Built different. Built for India.
          </h2>
        </ScrollReveal>

        {/* Bento Grid — asymmetric layout */}
        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 lg:grid-cols-6 lg:auto-rows-[180px]">
          {/* Card 1: Brand Agnostic — large (4 cols, 2 rows) */}
          <motion.div
            className="col-span-2 row-span-2 lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-[#0f3460] p-8 lg:p-10">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-electric-blue/20 blur-[80px]" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
                  <Shield className="size-6 text-electric-blue" />
                </div>
              </div>

              <div className="relative mt-auto">
                <h3 className="text-2xl font-bold text-white lg:text-3xl">
                  Brand Agnostic
                </h3>
                <p className="mt-2 max-w-md text-base text-white/50">
                  We don&apos;t push one brand. Compare chargers from 50+
                  manufacturers to find the perfect fit for your use case and
                  budget.
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-electric-blue">
                    50+
                  </span>
                  <span className="text-sm text-white/40">Brands</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Stat — compact (2 cols, 1 row) */}
          <motion.div
            className="col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.08,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex h-full flex-col justify-center rounded-3xl border border-border/50 bg-light-gray p-6 text-center">
              <Zap className="mx-auto mb-2 size-6 text-teal" />
              <p className="text-3xl font-black text-foreground lg:text-4xl">
                10K+
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Products Listed
              </p>
            </div>
          </motion.div>

          {/* Card 3: Stat — compact (2 cols, 1 row) */}
          <motion.div
            className="col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.16,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex h-full flex-col justify-center rounded-3xl border border-border/50 bg-light-gray p-6 text-center">
              <Users className="mx-auto mb-2 size-6 text-orange" />
              <p className="text-3xl font-black text-foreground lg:text-4xl">
                500+
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Businesses Trust Us
              </p>
            </div>
          </motion.div>

          {/* Card 4: End-to-End — medium (3 cols, 1 row) */}
          <motion.div
            className="col-span-2 lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.24,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="group flex h-full items-center gap-6 rounded-3xl border border-border/50 bg-gradient-to-r from-teal/5 to-transparent p-6 lg:p-8">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-teal/10">
                <Layers className="size-7 text-teal" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  End-to-End Platform
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  From selecting chargers to installation, CMS, and ongoing
                  maintenance — everything under one roof.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 5: India-First — medium (3 cols, 1 row) */}
          <motion.div
            className="col-span-2 lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.32,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="group flex h-full items-center gap-6 rounded-3xl border border-border/50 bg-gradient-to-r from-orange/5 to-transparent p-6 lg:p-8">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-orange/10">
                <MapPin className="size-7 text-orange" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  India-First Approach
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  UPI & GST-ready billing, local installation teams, vernacular
                  support, and compliance with Indian standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Support — wide (6 cols, 1 row) */}
          <motion.div
            className="col-span-2 lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex h-full items-center justify-between gap-8 rounded-3xl border border-border/50 bg-light-gray px-8 py-6 lg:px-12">
              <div className="flex items-center gap-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-green/10">
                  <HeadphonesIcon className="size-6 text-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Dedicated Support in 150+ Cities
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Local teams, regional language support, and same-day service
                    in major metros.
                  </p>
                </div>
              </div>
              <span className="hidden text-4xl font-black text-green/60 lg:block">
                150+
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
