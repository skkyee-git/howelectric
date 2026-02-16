"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveMenu(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);

  // Close mega menu on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-white/95 backdrop-blur-md"
          : "border-b border-transparent bg-white"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left: Logo */}
        <Logo size="md" />

        {/* Center: Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isOpen = activeMenu === item.label;
            const hasDropdown = !!item.columns;

            return (
              <div
                key={item.label}
                onMouseEnter={() =>
                  hasDropdown ? handleMouseEnter(item.label) : undefined
                }
                onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
                className="relative"
              >
                <Link
                  href={item.href}
                  onFocus={() =>
                    hasDropdown ? handleMouseEnter(item.label) : undefined
                  }
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isOpen
                      ? "text-electric-blue bg-electric-blue/5"
                      : "text-dark-gray hover:bg-light-gray hover:text-navy"
                  )}
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "size-3.5 text-mid-gray transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right: CTAs + hamburger */}
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" className="hidden lg:inline-flex">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/get-started">Start My EV Business</Link>
          </Button>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      {/* Mega menu panels */}
      {NAV_ITEMS.map(
        (item) =>
          item.columns && (
            <div
              key={item.label}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <MegaMenu item={item} isOpen={activeMenu === item.label} />
            </div>
          )
      )}

      {/* Mobile nav */}
      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </header>
  );
}
