"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  BadgeCheck,
  ArrowRight,
  Clock,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const INSTALLERS = [
  {
    name: "Rajesh Kumar",
    city: "Delhi NCR",
    certification: "HOW Track 3",
    rating: 4.9,
    jobs: 145,
    response: "< 2 hrs",
    specialization: "DC Fast Chargers",
    initials: "RK",
    color: "bg-purple",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    certification: "HOW Track 2",
    rating: 4.8,
    jobs: 98,
    response: "< 3 hrs",
    specialization: "Residential",
    initials: "PS",
    color: "bg-teal",
  },
  {
    name: "Vikram Singh",
    city: "Bangalore",
    certification: "HOW Track 3",
    rating: 4.9,
    jobs: 167,
    response: "< 2 hrs",
    specialization: "Commercial & Fleet",
    initials: "VS",
    color: "bg-electric-blue",
  },
  {
    name: "Anita Patel",
    city: "Ahmedabad",
    certification: "HOW Track 2",
    rating: 4.7,
    jobs: 76,
    response: "< 4 hrs",
    specialization: "Solar EV Kits",
    initials: "AP",
    color: "bg-orange",
  },
];

export function InstallerHighlight() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-purple">
              Certified Installers
            </p>
            <h2 className="mt-3">Trained, tested & trusted</h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Every installer is HOW Academy certified with verified track
              records. Find one near you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="hidden sm:block">
            <Button asChild variant="outline" size="lg">
              <Link href="/services/installers">
                View All Installers
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INSTALLERS.map((installer, i) => (
            <motion.div
              key={installer.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/services/installers"
                className="group flex h-full flex-col rounded-2xl border border-border/50 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Avatar + Name */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl ${installer.color} text-sm font-bold text-white`}
                  >
                    {installer.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {installer.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {installer.city}
                    </div>
                  </div>
                </div>

                {/* Certification */}
                <Badge className="mt-3 w-fit border-0 bg-purple/10 text-[10px] font-semibold text-purple">
                  <BadgeCheck className="mr-1 size-3" />
                  {installer.certification}
                </Badge>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/50 pt-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5">
                      <Star className="size-3 fill-gold text-gold" />
                      <span className="text-xs font-bold">{installer.rating}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5">
                      <Wrench className="size-3 text-purple" />
                      <span className="text-xs font-bold">{installer.jobs}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Jobs</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5">
                      <Clock className="size-3 text-teal" />
                      <span className="text-xs font-bold">{installer.response}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Response</p>
                  </div>
                </div>

                {/* Specialization */}
                <p className="mt-3 text-[11px] text-muted-foreground">
                  Specializes in:{" "}
                  <span className="font-medium text-foreground">
                    {installer.specialization}
                  </span>
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/services/installers">
              View All Installers
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
