"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Newspaper,
  BarChart3,
  Lightbulb,
  Lock,
  ArrowRight,
  Users,
  TrendingUp,
  Heart,
  Calendar,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DURATION } from "@/lib/animations";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";

const WHAT_YOU_GET = [
  {
    icon: Newspaper,
    title: "Industry News",
    description: "Curated top stories from India's EV charging ecosystem.",
  },
  {
    icon: BarChart3,
    title: "Market Data",
    description: "Trends, forecasts, and analysis you can act on.",
  },
  {
    icon: Lightbulb,
    title: "Expert Insights",
    description: "Interviews, deep dives, and thought leadership.",
  },
  {
    icon: Lock,
    title: "Exclusive Content",
    description: "Early access to guides, tools, and reports.",
  },
];

const PAST_ISSUES = [
  {
    title: "Issue #42: PM E-DRIVE Scheme — What CPOs Need to Know",
    date: "Jan 2025",
  },
  {
    title: "Issue #41: DC Fast Charging Market Explodes in India",
    date: "Jan 2025",
  },
  {
    title: "Issue #40: Best EV Charging Locations in Tier-2 Cities",
    date: "Dec 2024",
  },
];

const NEWSLETTER_STATS = [
  { icon: Users, value: "10,000+", label: "Subscribers" },
  { icon: TrendingUp, value: "45%", label: "Open Rate" },
  { icon: Heart, value: "98%", label: "Satisfaction" },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050d18] pb-24 pt-32 lg:pb-32 lg:pt-40">
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
          className="pointer-events-none absolute left-1/3 top-0 size-[600px] rounded-full bg-green/8 blur-[150px]"
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-1/4 size-[400px] rounded-full bg-green/5 blur-[120px]"
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 50, -60, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
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
              <span className="flex size-5 items-center justify-center rounded-full bg-green/20">
                <Mail className="size-3 text-green" />
              </span>
              Weekly Newsletter
            </span>
          </motion.div>

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
            Stay ahead of the{" "}
            <span className="bg-gradient-to-r from-green via-emerald-400 to-green bg-clip-text text-transparent">
              EV charging revolution
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
            Join 10,000+ professionals getting weekly insights on EV charging
            technology, market trends, and business opportunities.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Newsletter Signup Teaser */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-border/50 bg-white p-8 shadow-card md:p-10">
              <div className="flex size-14 mx-auto items-center justify-center rounded-2xl bg-green/10">
                <Send className="size-7 text-green" />
              </div>

              <h2 className="mt-6 text-center text-2xl font-bold">
                Subscribe to HowElectric Weekly
              </h2>
              <p className="mt-2 text-center text-muted-foreground">
                Get the most important EV charging news delivered to your inbox
                every week.
              </p>

              {/* Visual-only email input */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3">
                  <Mail className="size-5 text-muted-foreground/50" />
                  <span className="text-sm text-muted-foreground/60">
                    Enter your email address
                  </span>
                </div>
                <Button className="bg-green px-8 font-semibold text-white hover:bg-green/90">
                  Subscribe
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Free. Weekly. Unsubscribe anytime.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="border-y border-border/50 bg-green/5 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="What you'll get"
            subtitle="Every issue is packed with actionable insights for EV charging professionals."
            badge="Inside the Newsletter"
          />

          <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_YOU_GET.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-card">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-green/10">
                    <item.icon className="size-6 text-green" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Past Issues Preview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeader
            title="Recent issues"
            subtitle="Browse past editions to see what you've been missing."
            badge="Archive"
          />

          <StaggerGrid className="mt-12 grid gap-5 md:grid-cols-3">
            {PAST_ISSUES.map((issue) => (
              <StaggerItem key={issue.title}>
                <div className="group flex h-full flex-col rounded-xl border border-border/50 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="size-3 text-green" />
                    {issue.date}
                  </div>
                  <h3 className="mt-3 flex-1 text-base font-bold leading-snug">
                    {issue.title}
                  </h3>
                  <Link
                    href="/academy/newsletter"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green transition-colors hover:text-green/80"
                  >
                    Read Issue
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Newsletter Stats */}
      <section className="border-y border-border/50 bg-green/5 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green">
              Trusted by Thousands
            </p>
            <h2 className="mt-3">Numbers that speak for themselves</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {NEWSLETTER_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-border/50 bg-white p-8 text-center shadow-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-green/10">
                  <stat.icon className="size-7 text-green" />
                </div>
                <p className="mt-4 text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Don't miss the next issue"
            description="Subscribe now and join 10,000+ EV professionals who start their week with HowElectric Weekly."
            primaryLabel="Subscribe Now"
            primaryHref="/academy/newsletter"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
