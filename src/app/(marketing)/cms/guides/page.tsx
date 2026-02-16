"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wallet,
  Cpu,
  Truck,
  Globe,
  Plug,
  BarChart3,
  CreditCard,
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

const INTEGRATION_SECTIONS = [
  {
    title: "Payment Gateways",
    icon: Wallet,
    items: [
      { name: "Razorpay", description: "UPI, cards, net banking, and wallets" },
      { name: "PhonePe", description: "UPI payments and QR code checkout" },
      { name: "Paytm", description: "Wallet, UPI, and subscription payments" },
      { name: "Stripe", description: "International cards and payments" },
    ],
  },
  {
    title: "Charger Brands",
    icon: Cpu,
    items: [
      { name: "ABB", description: "Terra AC/DC charger integration" },
      { name: "Delta", description: "AC Mini Plus and DC City chargers" },
      { name: "Schneider", description: "EVlink and charge point management" },
      { name: "Exicom", description: "Harmony series OCPP integration" },
    ],
  },
  {
    title: "Fleet Management",
    icon: Truck,
    items: [
      { name: "SAP", description: "Enterprise fleet and asset management" },
      { name: "Locus", description: "Route optimization and dispatch" },
      { name: "Custom API", description: "Build your own fleet integration" },
    ],
  },
  {
    title: "Other Integrations",
    icon: Globe,
    items: [
      { name: "Google Maps", description: "Station discovery and navigation" },
      {
        name: "WhatsApp Business",
        description: "Customer notifications and alerts",
      },
      { name: "Slack Alerts", description: "Team notifications for events" },
    ],
  },
] as const;

const ARCHITECTURE_NODES = [
  { label: "Chargers", sublabel: "OCPP 1.6/2.0", icon: Plug },
  { label: "Payments", sublabel: "Razorpay, Stripe", icon: CreditCard },
  { label: "Fleet Systems", sublabel: "SAP, Locus", icon: Truck },
  { label: "Analytics", sublabel: "Dashboards", icon: BarChart3 },
] as const;

export default function CMSGuidesPage() {
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
              Integration Guides
            </Badge>
            <h1>Connect HowElectric CMS with everything</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Step-by-step guides for connecting with payment gateways, charger
              brands, fleet systems, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Integration Categories ── */}
      {INTEGRATION_SECTIONS.map((section) => {
        const SectionIcon = section.icon;
        return (
          <section
            key={section.title}
            className="border-t border-border/30 bg-light-gray py-20 odd:bg-white lg:py-28"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionHeader
                title={section.title}
                badge={section.title}
              />

              <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {section.items.map((item) => (
                  <StaggerItem key={item.name}>
                    <Link
                      href="/cms/guides"
                      className="group flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                    >
                      <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10">
                        <SectionIcon className="size-5 text-gold" />
                      </div>
                      <h3 className="mt-4 text-base font-semibold">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
                        Guide <ArrowRight className="size-3.5" />
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </section>
        );
      })}

      {/* ── Integration Architecture ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Integration architecture"
            subtitle="HowElectric CMS sits at the center of your charging ecosystem."
            badge="Architecture"
          />

          <ScrollReveal>
            <div className="mx-auto mt-14 max-w-3xl">
              {/* Center hub */}
              <div className="flex flex-col items-center">
                <div className="flex size-24 items-center justify-center rounded-2xl border-2 border-gold/30 bg-gold/10 shadow-lg">
                  <div className="text-center">
                    <Plug className="mx-auto size-8 text-gold" />
                    <p className="mt-1 text-xs font-bold text-gold">CMS</p>
                  </div>
                </div>

                {/* Connector lines */}
                <div className="my-6 h-8 w-px bg-gold/30" />

                {/* Connected nodes */}
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {ARCHITECTURE_NODES.map(
                    ({ label, sublabel, icon: NodeIcon }) => (
                      <div key={label} className="text-center">
                        <div className="mx-auto h-6 w-px bg-gold/30" />
                        <div className="mx-auto rounded-xl border border-border/50 bg-white p-4 shadow-card">
                          <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-gold/10">
                            <NodeIcon className="size-5 text-gold" />
                          </div>
                          <p className="mt-2 text-sm font-semibold">{label}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {sublabel}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Ready to integrate?"
            description="Start connecting HowElectric CMS with your existing systems. Get up and running in hours, not weeks."
            primaryLabel="Start Integrating"
            primaryHref="/cms/demo"
            secondaryLabel="API Reference"
            secondaryHref="/cms/api"
          />
        </div>
      </section>
    </>
  );
}
