"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  alignment = "center",
  className,
}: SectionHeaderProps) {
  return (
    <ScrollReveal
      className={cn(
        "mb-12",
        alignment === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <Badge
          variant="secondary"
          className="mb-4 bg-electric-blue/10 text-electric-blue"
        >
          {badge}
        </Badge>
      )}
      <h2 className="font-display">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-muted-foreground",
            alignment === "center" && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
