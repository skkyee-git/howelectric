"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bike,
  Car,
  Zap,
  Sun,
  Cable,
  Plug,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const CATEGORIES = [
  {
    icon: Bike,
    title: "2-Wheeler Chargers",
    count: "45+ Products",
    href: "/marketplace/ac-chargers",
    gradient: "from-teal/15 to-teal/5",
    iconColor: "text-teal",
  },
  {
    icon: Car,
    title: "4-Wheeler Chargers",
    count: "120+ Products",
    href: "/marketplace/home",
    gradient: "from-electric-blue/15 to-electric-blue/5",
    iconColor: "text-electric-blue",
  },
  {
    icon: Zap,
    title: "DC Fast Chargers",
    count: "80+ Products",
    href: "/marketplace/dc-chargers",
    gradient: "from-orange/15 to-orange/5",
    iconColor: "text-orange",
  },
  {
    icon: Sun,
    title: "Solar EV Kits",
    count: "25+ Products",
    href: "/marketplace/smart",
    gradient: "from-gold/15 to-gold/5",
    iconColor: "text-gold",
  },
  {
    icon: Plug,
    title: "Portable Chargers",
    count: "35+ Products",
    href: "/marketplace/portable",
    gradient: "from-purple/15 to-purple/5",
    iconColor: "text-purple",
  },
  {
    icon: Cable,
    title: "Accessories & Cables",
    count: "60+ Products",
    href: "/marketplace/accessories",
    gradient: "from-green/15 to-green/5",
    iconColor: "text-green",
  },
];

export function CategoryTiles() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">
            Browse by Category
          </p>
          <h2 className="mt-3">Find the right charger</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From home wall-mounts to highway ultra-fast stations — every
            category covered.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={cat.href}
                className="group flex flex-col items-center rounded-2xl border border-border/50 bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div
                  className={`mb-3 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient}`}
                >
                  <cat.icon
                    className={`size-7 ${cat.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>
                <h3 className="text-sm font-bold leading-snug text-foreground">
                  {cat.title}
                </h3>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {cat.count}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
