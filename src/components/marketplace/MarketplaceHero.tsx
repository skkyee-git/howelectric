"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Zap, ShoppingBag } from "lucide-react";
import { DURATION } from "@/lib/animations";

const SUGGESTIONS = [
  "7.4 kW AC Charger",
  "DC Fast Charger",
  "Tata Power",
  "CCS2 Connector",
  "Home Charger",
  "Fleet Charger",
];

export function MarketplaceHero() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/marketplace/products?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#050d18] pb-28 pt-32 lg:pb-36 lg:pt-40">
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Animated aurora blobs — teal accent */}
      <motion.div
        className="pointer-events-none absolute left-1/3 top-0 size-[600px] rounded-full bg-teal/12 blur-[150px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-1/4 size-[400px] rounded-full bg-electric-blue/8 blur-[120px]"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 50, -60, 0],
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
            <span className="flex size-5 items-center justify-center rounded-full bg-teal/20">
              <ShoppingBag className="size-3 text-teal" />
            </span>
            India&apos;s Largest EV Charger Marketplace
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
        >
          Source, compare & buy{" "}
          <span className="bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent">
            EV chargers
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
        >
          50+ brands, 500+ products — from home chargers to ultra-fast highway
          stations. All tested, verified, and CMS-ready.
        </motion.p>

        {/* Search bar */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative mx-auto mt-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex items-center overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <Search className="ml-5 size-5 shrink-0 text-white/30" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chargers, brands, power output..."
              className="flex-1 bg-transparent px-4 py-4 text-base text-white placeholder-white/30 outline-none sm:py-5"
            />
            <button
              type="submit"
              className="mr-2 flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-teal/90 sm:px-6 sm:py-3"
            >
              <Zap className="size-4" />
              Search
            </button>
          </div>
        </motion.form>

        {/* Quick suggestions */}
        <motion.div
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: DURATION.slow }}
        >
          <span className="text-xs text-white/20">Popular:</span>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setQuery(s)}
              className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-white/40 transition-colors hover:bg-white/[0.08] hover:text-white/60"
            >
              {s}
            </button>
          ))}
        </motion.div>

        {/* Micro stats */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: DURATION.slow }}
        >
          {[
            { value: "50+", label: "Brands" },
            { value: "500+", label: "Products" },
            { value: "150+", label: "Cities" },
            { value: "10K+", label: "Sold" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-bold text-white">{value}</p>
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
