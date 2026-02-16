"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plug,
  Activity,
  CreditCard,
  Users,
  BarChart3,
  Webhook,
  ArrowRight,
  Lock,
  Zap,
  FileJson,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";

const API_CATEGORIES = [
  {
    icon: Plug,
    title: "Chargers",
    description: "List, status, remote start/stop, reboot",
  },
  {
    icon: Activity,
    title: "Sessions",
    description: "Active sessions, history, session details",
  },
  {
    icon: CreditCard,
    title: "Billing",
    description: "Invoices, payments, refunds, pricing rules",
  },
  {
    icon: Users,
    title: "Users",
    description: "Create, update, roles, RFID management",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Revenue, energy, utilization metrics",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Real-time event notifications",
  },
] as const;

const API_OVERVIEW = [
  { label: "Base URL", value: "api.howelectric.com/v1", icon: Zap },
  { label: "Authentication", value: "Bearer token", icon: Lock },
  { label: "Format", value: "JSON", icon: FileJson },
  { label: "Rate limit", value: "1000 req/min", icon: Activity },
] as const;

const SDKS = ["Python", "Node.js", "Go"] as const;

export default function CMSApiPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" as const, bounce: 0.3 }}
          >
            <Badge
              variant="secondary"
              className="mb-5 bg-gold/10 text-gold border border-gold/20"
            >
              API Reference
            </Badge>
            <h1>Build on top of HowElectric CMS</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              RESTful API with comprehensive endpoints for charger management,
              billing, analytics, and user management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── API Overview ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="API at a glance"
            subtitle="Everything you need to integrate with HowElectric CMS."
            badge="Overview"
          />

          <ScrollReveal>
            <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1426] p-8 shadow-lg lg:p-10">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {API_OVERVIEW.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                      <Icon className="size-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                        {label}
                      </p>
                      <p className="mt-1 font-mono text-sm font-semibold text-white">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── API Categories ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="API endpoints"
            subtitle="Six comprehensive modules covering every aspect of your charging network."
            badge="Endpoints"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {API_CATEGORIES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="group rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all hover:shadow-card-hover lg:p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    View endpoints <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Code Example ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Simple, intuitive API"
            subtitle="Get started with just a few lines of code."
            badge="Example"
          />

          <ScrollReveal>
            <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1426] shadow-lg">
              {/* Tab bar */}
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3">
                <div className="size-3 rounded-full bg-red-500/60" />
                <div className="size-3 rounded-full bg-yellow-500/60" />
                <div className="size-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-white/40">
                  api-request.sh
                </span>
              </div>

              {/* Code body */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p className="text-white/40"># List all chargers</p>
                <p className="mt-2">
                  <span className="text-green/80">GET</span>{" "}
                  <span className="text-gold">/v1/chargers</span>
                </p>
                <p className="mt-1">
                  <span className="text-white/40">Authorization:</span>{" "}
                  <span className="text-white/70">
                    Bearer &lt;token&gt;
                  </span>
                </p>

                <div className="my-4 border-t border-white/[0.06]" />

                <p className="text-white/40"># Response</p>
                <p className="mt-2 text-white/70">{"{"}</p>
                <p className="pl-4 text-white/70">
                  <span className="text-gold">
                    &quot;chargers&quot;
                  </span>
                  : [...],
                </p>
                <p className="pl-4 text-white/70">
                  <span className="text-gold">
                    &quot;total&quot;
                  </span>
                  : 48,
                </p>
                <p className="pl-4 text-white/70">
                  <span className="text-gold">
                    &quot;online&quot;
                  </span>
                  : 45
                </p>
                <p className="text-white/70">{"}"}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SDKs ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <Badge
              variant="secondary"
              className="mb-5 bg-gold/10 text-gold border border-gold/20"
            >
              SDKs
            </Badge>
            <h2 className="font-display">SDKs coming soon</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Official client libraries to make integration even easier.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {SDKS.map((sdk) => (
                <Badge
                  key={sdk}
                  variant="outline"
                  className="px-4 py-1.5 text-sm font-medium"
                >
                  {sdk}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Ready to build?"
            description="Get your API key and start integrating HowElectric CMS into your applications today."
            primaryLabel="Get API Access"
            primaryHref="/cms/demo"
            secondaryLabel="Read Full Docs"
            secondaryHref="/cms/docs"
          />
        </div>
      </section>
    </>
  );
}
