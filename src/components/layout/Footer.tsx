"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./Logo";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons = [
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Top: Logo + Tagline + Newsletter */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Logo size="lg" className="[&_span]:text-white [&_span:last-child]:text-electric-blue" />
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                {SITE.tagline} — {SITE.description}.
              </p>
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-sm">
              <p className="mb-2 text-sm font-medium text-white/80">
                Stay in the loop
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:border-electric-blue focus-visible:ring-electric-blue/30"
                />
                <Button type="submit" size="default" className="shrink-0 bg-electric-blue hover:bg-electric-blue/90">
                  <ArrowRight className="size-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        {/* Link Grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-6">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} {SITE.name}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/40 transition-colors hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
