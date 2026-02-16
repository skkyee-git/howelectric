"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  IndianRupee,
  Clock,
  ArrowRight,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function ROICalculatorTeaser() {
  const [investment, setInvestment] = useState(500000);

  const monthlyRevenue = Math.round(investment * 0.1);
  const annualRevenue = monthlyRevenue * 12;
  const paybackMonths = Math.round(investment / monthlyRevenue);
  const sliderPercent = useMemo(
    () => ((investment - 100000) / (5000000 - 100000)) * 100,
    [investment]
  );

  const formatINR = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      {/* Floating gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-1/4 size-[500px] rounded-full bg-electric-blue/15 blur-[120px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-1/4 size-[400px] rounded-full bg-teal/10 blur-[100px]"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 50, -60, 0],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Content */}
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">
              ROI Calculator
            </p>
            <h2 className="mt-3 text-white">
              How much can you earn from an EV charging station?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/50">
              Slide to set your investment amount and see projected returns
              instantly. Get the full analysis with our detailed calculator.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-teal font-semibold text-navy hover:bg-teal/90"
            >
              <Link href="/consulting/tools/roi-calculator">
                Get Full Analysis
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </ScrollReveal>

          {/* Right: Glassmorphic Calculator */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:p-10">
              {/* Header badge */}
              <div className="mb-8 flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-teal/15">
                  <Calculator className="size-4 text-teal" />
                </div>
                <span className="text-sm font-semibold text-white/60">
                  Quick Estimate
                </span>
              </div>

              {/* Slider */}
              <div className="mb-10">
                <div className="mb-4 flex items-baseline justify-between">
                  <label className="text-sm text-white/50">
                    Your Investment
                  </label>
                  <motion.span
                    key={investment}
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-mono text-2xl font-bold text-white"
                  >
                    {formatINR(investment)}
                  </motion.span>
                </div>

                {/* Custom slider with filled track */}
                <div className="relative h-2 w-full rounded-full bg-white/10">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal to-electric-blue"
                    style={{ width: `${sliderPercent}%` }}
                  />
                  <input
                    type="range"
                    min={100000}
                    max={5000000}
                    step={50000}
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-teal [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(78,205,196,0.5)]"
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-white/30">
                  <span>₹1L</span>
                  <span>₹50L</span>
                </div>
              </div>

              {/* Results — 3 cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    icon: IndianRupee,
                    value: formatINR(monthlyRevenue),
                    label: "Monthly Revenue",
                    color: "text-teal",
                    glow: "shadow-[0_0_30px_rgba(78,205,196,0.1)]",
                  },
                  {
                    icon: TrendingUp,
                    value: formatINR(annualRevenue),
                    label: "Annual Revenue",
                    color: "text-green",
                    glow: "shadow-[0_0_30px_rgba(16,185,129,0.1)]",
                  },
                  {
                    icon: Clock,
                    value: `${paybackMonths} mo`,
                    label: "Payback Period",
                    color: "text-gold",
                    glow: "shadow-[0_0_30px_rgba(251,191,36,0.1)]",
                  },
                ].map(({ icon: Icon, value, label, color, glow }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className={`rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 text-center ${glow}`}
                  >
                    <Icon
                      className={`mx-auto mb-2 size-5 ${color}`}
                    />
                    <motion.p
                      key={value}
                      initial={{ opacity: 0.5, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-mono text-lg font-bold text-white"
                    >
                      {value}
                    </motion.p>
                    <p className="mt-1 text-[11px] text-white/40">{label}</p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-6 text-center text-[11px] text-white/20">
                * Estimates based on average utilization rates. Actual results
                may vary.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
