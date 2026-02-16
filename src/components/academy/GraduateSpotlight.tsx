"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const GRADUATES = [
  {
    name: "Vikram Mehta",
    city: "Pune",
    track: "Installer",
    initials: "VM",
    color: "bg-green",
    quote:
      "The hands-on training gave me the confidence to handle DC fast charger installations independently. Within two months of graduating, I had more work than I could manage.",
    stat: "Earning \u20B91.2L/mo",
  },
  {
    name: "Sneha Reddy",
    city: "Hyderabad",
    track: "Operator",
    initials: "SR",
    color: "bg-teal",
    quote:
      "I went from knowing nothing about EV charging to running a 12-station network across Telangana. The CMS training module alone was worth the entire fee.",
    stat: "Launched 12 stations",
  },
  {
    name: "Arjun Kapoor",
    city: "Delhi NCR",
    track: "Consultant",
    initials: "AK",
    color: "bg-electric-blue",
    quote:
      "The consultant track taught me how to build business cases that actually win investor funding. I now advise fleet operators and real-estate developers on EV infrastructure.",
    stat: "Earning \u20B92.5L/mo",
  },
];

const trackBadgeClasses: Record<string, string> = {
  Installer: "bg-green/10 text-green",
  Operator: "bg-teal/10 text-teal",
  Consultant: "bg-electric-blue/10 text-electric-blue",
};

export function GraduateSpotlight() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            Success Stories
          </p>
          <h2 className="mt-3">Graduate Success Stories</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Real graduates, real careers. See how HOW Academy alumni are shaping
            India&apos;s EV charging future.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GRADUATES.map((graduate, i) => (
            <motion.div
              key={graduate.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full flex-col rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-12 items-center justify-center rounded-xl ${graduate.color} text-sm font-bold text-white`}
                >
                  {graduate.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    {graduate.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {graduate.city}
                  </p>
                </div>
              </div>

              {/* Track badge */}
              <Badge
                className={`mt-3 w-fit border-0 text-[10px] font-semibold ${
                  trackBadgeClasses[graduate.track]
                }`}
              >
                {graduate.track} Track
              </Badge>

              {/* Quote */}
              <p className="mt-4 flex-1 text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;{graduate.quote}&rdquo;
              </p>

              {/* Stat */}
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className="text-sm font-bold text-green">{graduate.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
