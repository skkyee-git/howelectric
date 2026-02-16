"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Wrench,
  Briefcase,
  Scale,
  Users,
  Trophy,
  ArrowRight,
  MapPin,
  MessagesSquare,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DURATION } from "@/lib/animations";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";

const FORUM_CATEGORIES = [
  {
    icon: MessageSquare,
    title: "General Discussion",
    posts: "1,234",
    description: "EV industry news, trends, and conversations",
  },
  {
    icon: Wrench,
    title: "Technical Help",
    posts: "856",
    description: "Installation issues, troubleshooting, CMS questions",
  },
  {
    icon: Briefcase,
    title: "Business Strategy",
    posts: "623",
    description: "Business models, ROI discussions, growth strategies",
  },
  {
    icon: Scale,
    title: "Regulatory & Subsidies",
    posts: "412",
    description: "Policy updates, subsidy applications, compliance",
  },
  {
    icon: Users,
    title: "Job Board",
    posts: "189",
    description: "Hiring? Looking? Post and find EV jobs",
  },
  {
    icon: Trophy,
    title: "Success Stories",
    posts: "97",
    description: "Share your wins and milestones",
  },
];

const COMMUNITY_STATS = [
  { icon: Users, value: "5,000+", label: "Members" },
  { icon: MessagesSquare, value: "3,200+", label: "Discussions" },
  { icon: MapPin, value: "150+", label: "Cities Represented" },
];

export default function ForumPage() {
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
                <Globe className="size-3 text-green" />
              </span>
              Community Forum
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
            Connect with fellow{" "}
            <span className="bg-gradient-to-r from-green via-emerald-400 to-green bg-clip-text text-transparent">
              EV professionals
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
            Ask questions, share experiences, and network with India&apos;s
            fastest-growing EV community.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Forum Categories — Coming Soon */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeader
            title="Browse forum categories"
            subtitle="Explore topics, share knowledge, and connect with the community."
            badge="Topics"
          />

          <div className="relative mt-12">
            {/* Coming Soon overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-white/60 backdrop-blur-[2px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 24,
                }}
                className="flex flex-col items-center gap-4"
              >
                <Badge className="bg-green/10 px-5 py-2 text-base font-semibold text-green">
                  Coming Soon
                </Badge>
                <p className="max-w-xs text-center text-sm text-muted-foreground">
                  We&apos;re building something special. The community forum
                  launches soon.
                </p>
              </motion.div>
            </div>

            {/* Forum list */}
            <StaggerGrid className="divide-y divide-border rounded-2xl border border-border/50 bg-white shadow-card">
              {FORUM_CATEGORIES.map((category) => (
                <StaggerItem key={category.title}>
                  <div className="flex items-center gap-5 px-6 py-5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green/10">
                      <category.icon className="size-6 text-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold">{category.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <div className="hidden text-right sm:block">
                      <p className="text-lg font-bold text-green">
                        {category.posts}
                      </p>
                      <p className="text-xs text-muted-foreground">posts</p>
                    </div>
                    <ArrowRight className="hidden size-4 text-muted-foreground/40 sm:block" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="border-y border-border/50 bg-green/5 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green">
              Our Community
            </p>
            <h2 className="mt-3">A thriving network of EV professionals</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {COMMUNITY_STATS.map((stat, i) => (
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
            headline="Be the first to join our community"
            description="Sign up for our newsletter to get notified when the community forum launches and stay connected with India's EV charging ecosystem."
            primaryLabel="Join the Newsletter"
            primaryHref="/academy/newsletter"
            secondaryLabel="Get Certified"
            secondaryHref="https://howacademy.in/courses/ev-infrastructure/"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
