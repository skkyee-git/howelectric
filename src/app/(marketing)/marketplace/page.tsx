"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  ArrowRight,
  Bell,
  Wrench,
  Lightbulb,
  Monitor,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DURATION } from "@/lib/animations";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const AVAILABLE_NOW = [
  {
    icon: Lightbulb,
    title: "Consulting",
    description: "Plan your EV charging business with expert guidance.",
    href: "/consulting",
    color: "text-orange",
    bg: "bg-orange/10",
  },
  {
    icon: Wrench,
    title: "Installation & AMC",
    description: "Professional installation and annual maintenance.",
    href: "/services",
    color: "text-purple",
    bg: "bg-purple/10",
  },
  {
    icon: Monitor,
    title: "CMS Platform",
    description: "Monitor, bill & manage your charging network.",
    href: "/cms",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: GraduationCap,
    title: "HOW Academy",
    description: "Get certified in EV charging infrastructure.",
    href: "/academy",
    color: "text-green",
    bg: "bg-green/10",
  },
];

export default function MarketplacePage() {
  return (
    <>
      {/* Hero — Coming Soon */}
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

        {/* Aurora blobs */}
        <motion.div
          className="pointer-events-none absolute left-1/3 top-0 size-[600px] rounded-full bg-teal/8 blur-[150px]"
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

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
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
              <span className="flex size-5 items-center justify-center rounded-full bg-teal/20">
                <ShoppingBag className="size-3 text-teal" />
              </span>
              Coming in 2027
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            India&apos;s largest{" "}
            <span className="bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent">
              EV charger marketplace
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            50+ brands, 500+ products — from home chargers to ultra-fast highway
            stations. We&apos;re building something special. Launching 2027.
          </motion.p>

          {/* Coming soon visual */}
          <motion.div
            className="mx-auto mt-10 max-w-md rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: DURATION.slow,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex size-14 mx-auto items-center justify-center rounded-2xl bg-teal/15">
              <Bell className="size-7 text-teal" />
            </div>
            <p className="mt-4 text-xl font-bold text-white">
              Marketplace launching 2027
            </p>
            <p className="mt-2 text-sm text-white/40">
              Source, compare & buy EV chargers from India&apos;s widest
              selection. Get notified when we launch.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 w-full bg-teal font-semibold text-navy hover:bg-teal/90"
            >
              <Link href="/consulting/book">
                Talk to Us in the Meantime
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-10 flex items-center justify-center gap-8 sm:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: DURATION.slow }}
          >
            {[
              { value: "50+", label: "Brands Lined Up" },
              { value: "500+", label: "Products Planned" },
              { value: "2027", label: "Launch Year" },
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

      {/* Available Now section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
              Available Now
            </p>
            <h2 className="mt-3">Start your EV journey today</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              While we build the marketplace, everything else is ready. Get
              consulting, installation, CMS, and certified — all live now.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AVAILABLE_NOW.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div
                    className={`mb-4 flex size-12 items-center justify-center rounded-xl ${item.bg}`}
                  >
                    <item.icon className={`size-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-electric-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore
                    <ArrowRight className="size-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
