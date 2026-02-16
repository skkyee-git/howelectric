"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Video,
  BookA,
  HelpCircle,
  Newspaper,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const CATEGORIES = [
  {
    icon: BookOpen,
    title: "Guides",
    description: "Step-by-step guides for every stage",
    href: "/learn/guides",
    gradient: "from-electric-blue/15 to-electric-blue/5",
    iconBg: "bg-electric-blue/10",
    iconColor: "text-electric-blue",
  },
  {
    icon: Newspaper,
    title: "Blog",
    description: "Latest news and industry insights",
    href: "/learn/blog",
    gradient: "from-teal/15 to-teal/5",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real success stories from our clients",
    href: "/learn/case-studies",
    gradient: "from-orange/15 to-orange/5",
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    icon: Video,
    title: "Webinars",
    description: "Live and recorded expert sessions",
    href: "/learn/webinars",
    gradient: "from-purple/15 to-purple/5",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
  },
  {
    icon: BookA,
    title: "Glossary",
    description: "A-Z of EV charging terminology",
    href: "/learn/glossary",
    gradient: "from-green/15 to-green/5",
    iconBg: "bg-green/10",
    iconColor: "text-green",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Quick answers to common questions",
    href: "/learn/faq",
    gradient: "from-gold/15 to-gold/5",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
  },
];

export function ContentCategories() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Explore Topics
          </p>
          <h2 className="mt-3">Browse by category</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about EV charging, organized for easy
            access.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
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
                href={cat.href}
                className="group flex items-start gap-5 rounded-2xl border border-border/50 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Icon */}
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient}`}
                >
                  <cat.icon
                    className={`size-6 ${cat.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-foreground">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-electric-blue group-hover:opacity-100" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
