"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Headphones,
  IndianRupee,
  NfcIcon,
  Smartphone,
  Wallet,
  History,
  Star,
  Building2,
  CheckCircle2,
  X,
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
const ROLE_TYPES = [
  {
    icon: ShieldCheck,
    title: "Super Admin",
    description: "Full access to every feature, setting, and configuration across all sites.",
    color: "bg-gold",
  },
  {
    icon: MapPin,
    title: "Site Manager",
    description: "Per-location control over chargers, sessions, and site-level reports.",
    color: "bg-electric-blue",
  },
  {
    icon: Headphones,
    title: "Operator",
    description: "Day-to-day monitoring, session management, and basic troubleshooting.",
    color: "bg-teal",
  },
  {
    icon: IndianRupee,
    title: "Finance",
    description: "Billing, invoicing, and revenue reports only — no hardware access.",
    color: "bg-green",
  },
] as const;

const DRIVER_FEATURES = [
  {
    icon: NfcIcon,
    title: "RFID Card Provisioning",
    description: "Issue and manage RFID cards for tap-to-charge access.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Accounts",
    description: "Driver self-registration via mobile app with OTP verification.",
  },
  {
    icon: Wallet,
    title: "Prepaid Wallet Top-ups",
    description: "In-app wallet with UPI and card top-up for instant charging.",
  },
  {
    icon: History,
    title: "Session History",
    description: "Complete charging history with energy, duration, and cost details.",
  },
  {
    icon: Star,
    title: "Favorite Stations",
    description: "Drivers can save their preferred stations for quick access.",
  },
  {
    icon: Building2,
    title: "Corporate Fleet Accounts",
    description: "Group drivers under a company account with centralized billing.",
  },
] as const;

const PERMISSIONS = [
  { action: "Manage Chargers", superAdmin: true, siteManager: true, operator: false, finance: false },
  { action: "View Reports", superAdmin: true, siteManager: true, operator: true, finance: true },
  { action: "Edit Billing", superAdmin: true, siteManager: false, operator: false, finance: true },
  { action: "Add Users", superAdmin: true, siteManager: true, operator: false, finance: false },
  { action: "Remote Start/Stop", superAdmin: true, siteManager: true, operator: true, finance: false },
  { action: "Firmware Updates", superAdmin: true, siteManager: false, operator: false, finance: false },
  { action: "Revenue Settlement", superAdmin: true, siteManager: false, operator: false, finance: true },
  { action: "Site Configuration", superAdmin: true, siteManager: true, operator: false, finance: false },
] as const;

const ROLE_HEADERS = [
  { key: "superAdmin" as const, label: "Super Admin" },
  { key: "siteManager" as const, label: "Site Manager" },
  { key: "operator" as const, label: "Operator" },
  { key: "finance" as const, label: "Finance" },
] as const;

export default function CMSUsersPage() {
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
              User Management
            </Badge>
            <h1>Complete control over who does what</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Role-based access control, driver management, RFID provisioning,
              and corporate fleet accounts — all from one place.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy font-semibold hover:bg-gold/90"
              >
                <Link href="/cms/demo">Try User Management</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cms/features">All Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Role Types ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Role types"
            subtitle="Four predefined roles that cover every level of your organization — from full admin to finance-only access."
            badge="Roles"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLE_TYPES.map(({ icon: Icon, title, description, color }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl ${color}/10`}
                  >
                    <Icon className={`size-6 ${color.replace("bg-", "text-")}`} />
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

      {/* ── Driver Management ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Driver management"
            subtitle="Everything you need to onboard, manage, and retain your EV driver community."
            badge="Drivers"
          />

          <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DRIVER_FEATURES.map(({ icon: Icon, title, description }) => (
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

      {/* ── Permission Matrix ── */}
      <section className="bg-light-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Access control"
            subtitle="A clear permission matrix so everyone knows exactly what they can and cannot do."
            badge="Permissions"
          />

          <ScrollReveal>
            <div className="mx-auto mt-14 max-w-4xl overflow-x-auto">
              <div className="rounded-2xl border border-border/50 bg-white shadow-card overflow-hidden">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border/50 bg-gold/5">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Permission
                      </th>
                      {ROLE_HEADERS.map(({ label }) => (
                        <th
                          key={label}
                          className="px-4 py-4 text-center text-sm font-semibold text-foreground"
                        >
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PERMISSIONS.map(({ action, ...roles }, i) => (
                      <motion.tr
                        key={action}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                        className={
                          i < PERMISSIONS.length - 1
                            ? "border-b border-border/30"
                            : ""
                        }
                      >
                        <td className="px-6 py-3.5 text-sm text-foreground">
                          {action}
                        </td>
                        {ROLE_HEADERS.map(({ key }) => (
                          <td
                            key={key}
                            className="px-4 py-3.5 text-center"
                          >
                            {roles[key] ? (
                              <CheckCircle2 className="mx-auto size-5 text-gold" />
                            ) : (
                              <X className="mx-auto size-5 text-mid-gray/50" />
                            )}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CTABanner
            headline="Take control of your team access"
            description="Set up roles, invite your team, and provision driver accounts in minutes. Full control, zero complexity."
            primaryLabel="Try User Management"
            primaryHref="/cms/demo"
            secondaryLabel="View All Features"
            secondaryHref="/cms/features"
          />
        </div>
      </section>
    </>
  );
}
