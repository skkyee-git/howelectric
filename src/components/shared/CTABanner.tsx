"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  headline: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light";
  className?: string;
}

export function CTABanner({
  headline,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "dark",
  className,
}: CTABannerProps) {
  return (
    <ScrollReveal>
      <section
        className={cn(
          "rounded-2xl px-6 py-16 text-center md:px-12 md:py-20",
          variant === "dark"
            ? "bg-navy text-white"
            : "bg-light-gray text-foreground",
          className
        )}
      >
        <h2
          className={cn(
            "font-display",
            variant === "dark" && "text-white"
          )}
        >
          {headline}
        </h2>
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg",
            variant === "dark" ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className={cn(
              variant === "dark" &&
                "bg-electric-blue text-white hover:bg-electric-blue/90"
            )}
          >
            <Link
              href={primaryHref}
              {...(primaryHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {primaryLabel}
            </Link>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                variant === "dark" &&
                  "border-white/30 text-white hover:bg-white/10"
              )}
            >
              <Link
                href={secondaryHref}
                {...(secondaryHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {secondaryLabel}
              </Link>
            </Button>
          )}
        </div>
      </section>
    </ScrollReveal>
  );
}
