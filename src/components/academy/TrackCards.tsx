"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Wrench, Monitor, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const TRACKS = [
  {
    name: "Installer",
    tagline: "For electricians & technicians",
    duration: "8 Weeks",
    price: "\u20B915,000",
    icon: Wrench,
    features: [
      "Hands-on charger installation training",
      "Electrical safety & compliance standards",
      "OCPP protocol fundamentals",
      "On-site assessment certification",
    ],
    cta: "Explore Track",
    href: "/academy/installer",
    popular: false,
  },
  {
    name: "Operator",
    tagline: "For station owners & managers",
    duration: "6 Weeks",
    price: "\u20B920,000",
    icon: Monitor,
    features: [
      "CMS platform mastery & billing",
      "Station operations & maintenance",
      "Revenue optimization strategies",
      "Customer management systems",
    ],
    cta: "Explore Track",
    href: "/academy/operator",
    popular: true,
  },
  {
    name: "Consultant",
    tagline: "For business professionals",
    duration: "10 Weeks",
    price: "\u20B935,000",
    icon: Briefcase,
    features: [
      "EV market analysis & forecasting",
      "Feasibility studies & site planning",
      "Subsidy navigation & compliance",
      "Client advisory & project management",
    ],
    cta: "Explore Track",
    href: "/academy/consultant",
    popular: false,
  },
];

export function TrackCards() {
  return (
    <section id="tracks" className="overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            Certification Tracks
          </p>
          <h2 className="mt-3">Choose your path</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you wire chargers, run stations, or advise businesses —
            there&apos;s a track built for your career goals.
          </p>
        </ScrollReveal>

        {/* Track cards container */}
        <div className="mt-16 rounded-[2rem] bg-gradient-to-br from-green/10 via-green/5 to-transparent p-4 sm:p-6 lg:p-8">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {TRACKS.map((track, i) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {track.popular && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <Badge className="border-0 bg-green px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-green/25">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div
                  className={`flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover lg:p-8 ${
                    track.popular
                      ? "ring-2 ring-green/30"
                      : "ring-1 ring-border/50"
                  }`}
                >
                  {/* Icon + Name */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-10 items-center justify-center rounded-xl ${
                        track.popular
                          ? "bg-green/15"
                          : "bg-green/10"
                      }`}
                    >
                      <track.icon
                        className={`size-5 ${
                          track.popular
                            ? "text-green"
                            : "text-green"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{track.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {track.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Duration + Price */}
                  <div className="mt-6 border-t border-border/50 pt-6">
                    <p className="text-3xl font-bold text-foreground">
                      {track.price}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {track.duration} &middot; Online + Hands-on
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {track.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Check
                          className={`mt-0.5 size-4 shrink-0 ${
                            track.popular ? "text-green" : "text-green"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8">
                    <Button
                      asChild
                      size="lg"
                      className={`w-full font-semibold ${
                        track.popular
                          ? "bg-green text-white hover:bg-green/90"
                          : "bg-navy text-white hover:bg-navy/90"
                      }`}
                    >
                      <Link href={track.href}>
                        {track.cta}
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
