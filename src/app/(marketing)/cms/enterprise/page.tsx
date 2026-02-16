"use client";

import Link from "next/link";
import {
  Server,
  ShieldCheck,
  UserCog,
  Plug,
  Building2,
  Phone,
  BarChart3,
  Lock,
  KeyRound,
  FileSearch,
  ScrollText,
  Globe,
  ArrowRight,
  Landmark,
  Car,
  Truck,
  Network,
  Crown,
  CheckCircle2,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/animation/StaggerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Data ─── */

const INCLUDED = [
  {
    icon: Server,
    title: "Dedicated Infrastructure",
    description:
      "Isolated cloud infrastructure with dedicated compute, storage, and networking for maximum performance and data isolation.",
  },
  {
    icon: ShieldCheck,
    title: "Custom SLAs (99.9% Uptime)",
    description:
      "Guaranteed 99.9% platform uptime with financial penalties for breaches. Tailored SLAs for your operational needs.",
  },
  {
    icon: UserCog,
    title: "Dedicated Account Manager",
    description:
      "A named account manager who knows your business, coordinates support, and drives quarterly business reviews.",
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    description:
      "Bespoke integrations with your ERP, CRM, fleet management, payment gateway, or any internal system.",
  },
  {
    icon: Building2,
    title: "On-Premise Deployment Option",
    description:
      "Deploy the CMS on your own infrastructure for complete data sovereignty and compliance requirements.",
  },
  {
    icon: Lock,
    title: "Advanced Security (SSO, Audit Logs)",
    description:
      "SAML/OIDC single sign-on, comprehensive audit logging, IP whitelisting, and role-based access control.",
  },
  {
    icon: Phone,
    title: "24/7 Phone Support",
    description:
      "Round-the-clock phone support with a dedicated escalation path and 1-hour critical incident response.",
  },
  {
    icon: BarChart3,
    title: "Quarterly Business Reviews",
    description:
      "Scheduled QBRs with your account team covering performance metrics, roadmap previews, and optimization opportunities.",
  },
];

const MULTI_SITE_FEATURES = [
  "Unlimited chargers across all locations",
  "Multi-location dashboard with cross-site analytics",
  "Advanced analytics and custom reports",
  "Dynamic pricing with time-of-use and demand-based rates",
  "RFID management with custom access groups",
  "Priority support with 4-hour response SLA",
  "Full API access for custom integrations",
  "Custom branding on driver-facing touchpoints",
];

const SECURITY = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Compliant",
    description:
      "Independently audited security controls meeting SOC 2 Type II standards.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description:
      "AES-256 encryption at rest and TLS 1.3 encryption in transit for all data.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access Control",
    description:
      "Granular permissions with custom roles, team hierarchies, and location-based access.",
  },
  {
    icon: FileSearch,
    title: "Audit Logging",
    description:
      "Comprehensive audit trails for every action, exportable for compliance and forensic review.",
  },
  {
    icon: Globe,
    title: "GDPR-Ready",
    description:
      "Data processing agreements, consent management, and right-to-erasure support built in.",
  },
  {
    icon: ScrollText,
    title: "Custom Compliance",
    description:
      "We work with your legal and compliance teams to meet industry-specific regulatory requirements.",
  },
];

const BEST_FOR = [
  {
    icon: Network,
    title: "Networks with 20+ Locations",
    description:
      "Large-scale charging networks that need dedicated infrastructure, custom SLAs, and enterprise-grade support.",
  },
  {
    icon: Landmark,
    title: "Government Deployments",
    description:
      "Public sector EV infrastructure projects requiring on-premise deployment, data sovereignty, and compliance.",
  },
  {
    icon: Car,
    title: "OEM Partnerships",
    description:
      "Automotive manufacturers building branded charging networks for their vehicle customers.",
  },
  {
    icon: Truck,
    title: "Large Fleet Operators",
    description:
      "Fleet operators with 100+ vehicles needing integrated depot charging management and fleet analytics.",
  },
];

/* ─── Page ─── */

export default function EnterpriseCMSPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 text-center lg:px-8 lg:pb-20 lg:pt-32">
          <ScrollReveal>
            <Badge
              variant="secondary"
              className="mb-6 bg-gold/10 text-gold"
            >
              <Crown className="mr-1 size-3" />
              Enterprise
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Enterprise-grade charging{" "}
              <span className="text-gold">management</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Dedicated infrastructure, custom SLAs, advanced security, and a
              named account manager. Everything in Multi-Site plus the scale and
              support that enterprise operations demand.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold px-8 font-semibold text-white hover:bg-gold/90"
              >
                <Link href="/consulting/book">
                  Contact Enterprise Sales
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cms/demo">Book a Demo</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-sm text-muted-foreground">
              Custom pricing &middot; Tailored to your scale and requirements
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Everything in Multi-Site ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Foundation"
            title="Everything in Multi-Site, included"
            subtitle="Enterprise builds on the full Multi-Site feature set. Every feature below is included at no extra cost."
          />

          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {MULTI_SITE_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Enterprise Extras ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Enterprise Extras"
            title="What makes Enterprise different"
            subtitle="Dedicated infrastructure, advanced security, and hands-on support designed for mission-critical deployments."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <item.icon className="size-6 text-gold" />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Security & Compliance ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Security & Compliance"
            title="Enterprise-grade security built in"
            subtitle="Comprehensive security controls, compliance certifications, and data protection measures."
          />

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <item.icon className="size-6 text-gold" />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Best For ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Best For"
            title="Built for large-scale operations"
            subtitle="Enterprise CMS is designed for organizations where EV charging is mission-critical infrastructure."
          />

          <StaggerGrid className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BEST_FOR.map((persona) => (
              <StaggerItem key={persona.title}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold/10">
                    <persona.icon className="size-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold">{persona.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {persona.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border-2 border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-8 text-center sm:p-12">
              <Badge
                variant="secondary"
                className="mb-4 bg-gold/10 text-gold"
              >
                Enterprise CMS
              </Badge>
              <div className="mt-2 text-5xl font-bold tracking-tight">
                Custom Pricing
              </div>
              <p className="mt-3 text-muted-foreground">
                Tailored to your scale, requirements, and deployment model
                &middot; Flexible contract terms
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold px-8 font-semibold text-white hover:bg-gold/90"
                >
                  <Link href="/consulting/book">
                    Contact Enterprise Sales
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/cms/demo">Book a Demo</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <CTABanner
          headline="Ready for enterprise-grade charging management?"
          description="Talk to our enterprise team to design a solution that fits your scale, security, and compliance requirements."
          primaryLabel="Contact Enterprise Sales"
          primaryHref="/consulting/book"
          secondaryLabel="Book a Demo"
          secondaryHref="/cms/demo"
          variant="dark"
        />
      </section>
    </>
  );
}
