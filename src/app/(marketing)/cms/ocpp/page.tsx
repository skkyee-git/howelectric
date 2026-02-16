"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plug,
  Shield,
  Play,
  Settings,
  Cpu,
  CalendarCheck,
  FileSearch,
  Gauge,
  CheckCircle2,
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

/* ── Data ── */
const OCPP_VERSIONS = [
  {
    version: "OCPP 1.6J",
    tag: "Widely Adopted",
    description:
      "The most commonly deployed protocol version. Supported by virtually every charger manufacturer. JSON over WebSocket for reliable, real-time communication.",
    features: [
      "Remote start & stop",
      "Meter values reporting",
      "Firmware updates",
      "Diagnostics transfer",
      "Heartbeat monitoring",
      "Authorization caching",
    ],
  },
  {
    version: "OCPP 2.0.1",
    tag: "Next-Gen",
    description:
      "The latest protocol version with improved security, device management, and smart charging profiles. Future-proof your network.",
    features: [
      "Enhanced security (TLS)",
      "Smart charging profiles",
      "ISO 15118 support",
      "Improved device model",
      "Transaction handling",
      "Display messaging",
    ],
  },
] as const;

const COMPATIBLE_BRANDS = [
  "ABB",
  "Delta",
  "Schneider",
  "Exicom",
  "Servotech",
  "Tata Power",
  "Okaya",
  "Ather",
] as const;

const KEY_FEATURES = [
  {
    icon: Play,
    title: "Remote Start/Stop",
    description:
      "Initiate or end charging sessions remotely from the CMS dashboard.",
  },
  {
    icon: Settings,
    title: "Firmware Management",
    description:
      "Push firmware updates to chargers OTA without on-site visits.",
  },
  {
    icon: Cpu,
    title: "Smart Charging Profiles",
    description:
      "Set power limits, load balancing rules, and time-based scheduling.",
  },
  {
    icon: CalendarCheck,
    title: "Reservation Support",
    description:
      "Allow drivers to reserve chargers in advance with guaranteed availability.",
  },
  {
    icon: FileSearch,
    title: "Diagnostics & Logs",
    description:
      "Retrieve diagnostic files and error logs from chargers for troubleshooting.",
  },
  {
    icon: Gauge,
    title: "Meter Values Streaming",
    description:
      "Real-time energy, power, voltage, and current readings from every charger.",
  },
] as const;

export default function CMSOCPPPage() {
  return (
    <>
      {/* ── Mini Hero ── */}
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
              OCPP Support
            </Badge>
            <h1>Universal charger compatibility with OCPP</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Connect any OCPP-compliant charger to HowElectric CMS. No vendor
              lock-in, no proprietary protocols — just open, standards-based
              interoperability.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy font-semibold hover:bg-gold/90"
              >
                <Link href="/cms/demo">Connect Your Chargers</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cms/features">All Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What is OCPP ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gold/10">
                <Plug className="size-7 text-gold" />
              </div>
              <h2 className="mt-6">What is OCPP?</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Open Charge Point Protocol (OCPP) is the industry standard for
                charger-to-software communication. Developed by the Open Charge
                Alliance, it ensures that EV chargers from any manufacturer can
                communicate with any compatible management system — giving you
                complete freedom of choice for your hardware.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Supported Versions ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Supported versions"
            subtitle="HowElectric CMS supports both major OCPP versions so you can work with any generation of charger hardware."
            badge="Protocol Versions"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {OCPP_VERSIONS.map(({ version, tag, description, features }, i) => (
              <ScrollReveal key={version} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border/50 bg-light-gray p-6 shadow-card lg:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-gold/10">
                      <Shield className="size-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{version}</h3>
                      <span className="text-xs font-medium text-gold">{tag}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compatible Brands ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Compatible charger brands"
            subtitle="Works with all major EV charger manufacturers in India and globally."
            badge="Hardware Partners"
          />

          <StaggerGrid className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COMPATIBLE_BRANDS.map((brand) => (
              <StaggerItem key={brand}>
                <Link
                  href="/cms/ocpp"
                  className="group flex items-center justify-center rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all hover:border-gold/30 hover:shadow-card-hover"
                >
                  <div className="text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/20">
                      <Plug className="size-5 text-gold" />
                    </div>
                    <p className="mt-3 text-sm font-semibold">{brand}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Key OCPP Features ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Key OCPP features"
            subtitle="Leverage the full power of the OCPP protocol to manage your chargers remotely and efficiently."
            badge="Protocol Features"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_FEATURES.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="rounded-2xl border border-border/50 bg-light-gray p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-8">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-gold/10">
                    <Icon className="size-5 text-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Connect your chargers today"
            description="Any OCPP-compliant charger, any manufacturer. Get connected in minutes with our guided onboarding."
            primaryLabel="Connect Your Chargers"
            primaryHref="/cms/demo"
            secondaryLabel="View Documentation"
            secondaryHref="/cms/docs"
          />
        </div>
      </section>
    </>
  );
}
