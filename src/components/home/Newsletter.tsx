"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const ARTICLES = [
  {
    title: "How to Start an EV Charging Business in India: Complete Guide",
    category: "Guide",
    readTime: "12 min",
    href: "/learn/guides/start-ev-charging-business",
    color: "bg-electric-blue/10 text-electric-blue",
    featured: true,
  },
  {
    title: "AC vs DC Charging: Which One Should You Install?",
    category: "Technical",
    readTime: "8 min",
    href: "/learn/technical/ac-vs-dc-charging",
    color: "bg-teal/10 text-teal",
    featured: false,
  },
  {
    title: "Understanding FAME III Subsidies for EV Charging Infrastructure",
    category: "Policy",
    readTime: "6 min",
    href: "/learn/policy/fame-iii-subsidies",
    color: "bg-orange/10 text-orange",
    featured: false,
  },
];

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-12">
          {/* Left: Articles */}
          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
                Knowledge Hub
              </p>
              <h2 className="mt-3">Latest insights</h2>
            </ScrollReveal>

            <div className="mt-10 space-y-0 divide-y divide-border/50">
              {ARTICLES.map(
                ({ title, category, readTime, href, color }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={href}
                      className="group flex items-center gap-5 py-6"
                    >
                      {/* Number */}
                      <span className="font-mono text-4xl font-black text-border/60 transition-colors group-hover:text-electric-blue/40">
                        0{i + 1}
                      </span>

                      <div className="flex-1">
                        <div className="mb-1.5 flex items-center gap-3">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${color}`}
                          >
                            {category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {readTime}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-electric-blue lg:text-lg">
                          {title}
                        </h3>
                      </div>

                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                )
              )}
            </div>

            <ScrollReveal delay={0.2}>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/learn">
                  View All Articles
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* Right: Newsletter signup */}
          <div className="lg:pt-16">
            <ScrollReveal delay={0.15}>
              <div className="relative overflow-hidden rounded-3xl bg-navy p-8 lg:p-10">
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-teal/15 blur-[60px]" />

                <div className="relative">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-teal/10">
                    <Send className="size-5 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Stay in the loop
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    Weekly insights on EV charging trends, new products, and
                    business opportunities. No spam.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setEmail("");
                    }}
                    className="mt-6 space-y-3"
                  >
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/25 focus:border-teal/50"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-teal font-semibold text-navy hover:bg-teal/90"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </form>
                  <p className="mt-4 text-[11px] text-white/25">
                    By subscribing, you agree to our Privacy Policy.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
