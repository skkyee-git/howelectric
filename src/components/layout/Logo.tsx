import Link from "next/link";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
} as const;

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-baseline font-display font-extrabold tracking-tight",
        sizeMap[size],
        className
      )}
    >
      <span className="text-navy">How</span>
      <span className="text-electric-blue">Electric</span>
    </Link>
  );
}
