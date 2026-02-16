"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface TrustBarProps {
  logos: Logo[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

const speedMap = {
  slow: "60s",
  normal: "40s",
  fast: "25s",
};

export function TrustBar({
  logos,
  speed = "normal",
  className,
}: TrustBarProps) {
  const duplicated = [...logos, ...logos];

  return (
    <div
      className={cn(
        "relative overflow-hidden py-6",
        className
      )}
    >
      <div
        className="flex w-max items-center gap-12"
        style={{
          animation: `marquee ${speedMap[speed]} linear infinite`,
        }}
      >
        {duplicated.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex-shrink-0 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? 120}
              height={logo.height ?? 40}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
