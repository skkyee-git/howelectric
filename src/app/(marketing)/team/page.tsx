"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  ArrowRight,
  Users,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { DURATION, EASE } from "@/lib/animations";

/* ─── Data ─── */

const LEADERSHIP = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "Former EV strategy consultant with 10+ years in clean energy. Passionate about making EV charging accessible across India.",
    gradient: "from-electric-blue/80 to-electric-blue/40",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Full-stack engineer who built India's first OCPP-compliant CMS platform. Ex-Tata Technologies.",
    gradient: "from-teal/80 to-teal/40",
  },
  {
    name: "Amit Patel",
    role: "VP of Operations",
    bio: "Scaled installation operations to 150+ cities. Background in logistics and infrastructure at Reliance.",
    gradient: "from-orange/80 to-orange/40",
  },
  {
    name: "Sneha Reddy",
    role: "Head of Academy",
    bio: "Certified 2,000+ EV professionals. Former training director at Schneider Electric India.",
    gradient: "from-purple/80 to-purple/40",
  },
];

/* ─── Page ─── */

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-electric-blue/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.out }}
          >
            <Badge className="mb-6 bg-electric-blue/10 text-electric-blue border-electric-blue/20">
              Our Team
            </Badge>
          </motion.div>

          <motion.h1
            className="max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: DURATION.slow, ease: EASE.out }}
          >
            Meet the{" "}
            <span className="text-electric-blue">HowElectric</span> team
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: DURATION.slow, ease: EASE.out }}
          >
            We&apos;re a team of engineers, operators, and EV enthusiasts
            building India&apos;s most comprehensive EV charging platform.
          </motion.p>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="bg-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Leadership"
            title="The people driving our mission"
            subtitle="Our leadership team combines deep domain expertise in EV infrastructure, technology, and operations."
          />

          <StaggerGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map(({ name, role, bio, gradient }) => (
              <StaggerItem key={name}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover">
                  {/* Avatar placeholder */}
                  <div
                    className={`flex h-48 items-center justify-center bg-gradient-to-br ${gradient}`}
                  >
                    <div className="flex size-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Users className="size-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="mt-1 text-sm font-medium text-electric-blue">
                      {role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {bio}
                    </p>

                    {/* Social links */}
                    <div className="mt-auto flex gap-3 pt-5">
                      <span className="flex size-8 items-center justify-center rounded-full bg-light-gray text-muted-foreground transition-colors hover:bg-electric-blue/10 hover:text-electric-blue">
                        <Linkedin className="size-4" />
                      </span>
                      <span className="flex size-8 items-center justify-center rounded-full bg-light-gray text-muted-foreground transition-colors hover:bg-electric-blue/10 hover:text-electric-blue">
                        <Twitter className="size-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── We're Hiring ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-electric-blue/5 p-10 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-electric-blue/10">
                <Sparkles className="size-8 text-electric-blue" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">We&apos;re hiring!</h2>
              <p className="mt-3 text-muted-foreground">
                Join our growing team and help shape the future of EV charging
                in India. We&apos;re looking for talented engineers, operators,
                and business minds.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-electric-blue px-6 font-semibold text-white hover:bg-electric-blue/90"
                >
                  <Link href="/careers">
                    View Open Roles
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <CTABanner
          headline="View Open Roles"
          description="We're building something big and we need great people. Explore our open positions and find your fit."
          primaryLabel="View Open Roles"
          primaryHref="/careers"
          secondaryLabel="Learn About Us"
          secondaryHref="/about"
          variant="dark"
        />
      </div>
    </>
  );
}
