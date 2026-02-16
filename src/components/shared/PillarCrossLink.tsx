"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { type PillarName } from "@/styles/design-tokens";

interface PillarCrossLinkProps {
  pillar: PillarName;
  title: string;
  description: string;
  href: string;
  className?: string;
}

const pillarBorderClasses: Record<PillarName, string> = {
  marketplace: "border-l-teal hover:border-l-4",
  consulting: "border-l-orange hover:border-l-4",
  services: "border-l-purple hover:border-l-4",
  cms: "border-l-gold hover:border-l-4",
  academy: "border-l-green hover:border-l-4",
};

export function PillarCrossLink({
  pillar,
  title,
  description,
  href,
  className,
}: PillarCrossLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-lg border border-l-2 bg-card p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover",
        pillarBorderClasses[pillar],
        className
      )}
    >
      <h4 className="font-display text-lg font-semibold group-hover:text-electric-blue">
        {title}
      </h4>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
