"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Handshake,
  Factory,
  Cpu,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DURATION, STAGGER } from "@/lib/animations";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const PARTNER_CATEGORIES = [
  {
    title: "Charger Manufacturers",
    icon: Factory,
    partners: [
      { name: "ABB", category: "Global leader in fast charging" },
      { name: "Delta", category: "Power & thermal management" },
      { name: "Schneider", category: "Electrical distribution" },
      { name: "Exicom", category: "India's EV charging pioneer" },
      { name: "Servotech", category: "AC & DC charger manufacturer" },
      { name: "Okaya", category: "Battery & charger solutions" },
    ],
  },
  {
    title: "Technology Partners",
    icon: Cpu,
    partners: [
      { name: "Razorpay", category: "Payments infrastructure" },
      { name: "AWS", category: "Cloud infrastructure" },
      { name: "Google Maps", category: "Location services" },
      { name: "WhatsApp Business", category: "Customer communication" },
    ],
  },
  {
    title: "Industry Bodies",
    icon: Landmark,
    partners: [
      { name: "NITI Aayog", category: "Government policy think-tank" },
      { name: "BEE", category: "Bureau of Energy Efficiency" },
      { name: "ISGF", category: "India Smart Grid Forum" },
    ],
  },
];

const PARTNER_TYPES = [
  "Charger manufacturers",
  "Technology providers",
  "Installation companies",
  "Financial institutions",
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.fast,
      delayChildren: 0.15,
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PartnersPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050d18] py-28 sm:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          className="pointer-events-none absolute right-1/4 top-0 size-[600px] rounded-full bg-electric-blue/10 blur-[150px]"
          animate={{ x: [0, -60, 30, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-electric-blue/20">
                <Handshake className="size-3 text-electric-blue" />
              </span>
              Partners
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: DURATION.slow, ease: [0.22, 1, 0.36, 1] }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent">
              partner ecosystem
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: DURATION.slow }}
          >
            We work with India&apos;s leading charger manufacturers, technology
            providers, and industry bodies to deliver world-class EV
            infrastructure.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Partner Categories ───────────────────────────────────── */}
      {PARTNER_CATEGORIES.map(({ title, icon: Icon, partners }) => (
        <section key={title} className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal className="mb-12">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-electric-blue/10">
                  <Icon className="size-5 text-electric-blue" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {title}
                </h2>
              </div>
            </ScrollReveal>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {partners.map(({ name, category }) => (
                <motion.div
                  key={name}
                  variants={cardVariants}
                  className="flex items-center gap-5 rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* Logo placeholder */}
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                    <span className="text-sm font-bold text-gray-500">
                      {name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{name}</h3>
                    <Badge
                      variant="secondary"
                      className="mt-1.5 bg-electric-blue/10 text-electric-blue"
                    >
                      {category}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── Become a Partner ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Become a Partner"
            title="Want to partner with HowElectric?"
            subtitle="We're always looking for partners who share our mission to accelerate EV adoption across India."
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_TYPES.map((type) => (
              <StaggerItem key={type}>
                <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                    <Handshake className="size-5 text-electric-blue" />
                  </div>
                  <p className="font-medium">{type}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <ScrollReveal className="mt-12 text-center">
            <Button asChild size="lg" className="bg-electric-blue text-white hover:bg-electric-blue/90">
              <Link href="/contact">
                Become a Partner
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Let's build India's EV future together"
          description="Partner with HowElectric to expand your reach and impact in the fastest-growing EV market."
          primaryLabel="Become a Partner"
          primaryHref="/contact"
          secondaryLabel="Learn More"
          secondaryHref="/about"
          variant="dark"
        />
      </div>
    </>
  );
}
