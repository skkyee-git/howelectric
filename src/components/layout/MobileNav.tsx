"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md" showCloseButton>
        <SheetHeader className="border-b pb-4">
          <SheetTitle>
            <Logo size="md" />
          </SheetTitle>
        </SheetHeader>

        {/* Scrollable nav area */}
        <div className="flex-1 overflow-y-auto py-4">
          <Accordion type="single" collapsible className="w-full">
            {NAV_ITEMS.map((item) => {
              const PillarIcon = item.pillarIcon;

              return item.columns && item.pillar ? (
                <AccordionItem key={item.href} value={item.href}>
                  <AccordionTrigger className="min-h-[44px] text-base font-semibold text-navy hover:no-underline">
                    <span className="flex items-center gap-2.5">
                      {PillarIcon && (
                        <span className="flex size-7 items-center justify-center rounded-lg bg-electric-blue/10">
                          <PillarIcon className="size-4 text-electric-blue" />
                        </span>
                      )}
                      {item.label}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-5 pl-2">
                      {item.columns.map((col) => (
                        <div key={col.title}>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-mid-gray">
                            {col.title}
                          </p>
                          <ul className="space-y-0.5">
                            {col.links.map((link) => {
                              const LinkIcon = link.icon;
                              return (
                                <li key={link.label}>
                                  <Link
                                    href={link.href}
                                    onClick={() => onOpenChange(false)}
                                    className="group flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-dark-gray transition-colors hover:bg-electric-blue/5 hover:text-navy"
                                  >
                                    {LinkIcon && (
                                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-electric-blue/8 transition-all duration-200 group-hover:bg-electric-blue/15 group-hover:scale-110">
                                        <LinkIcon className="size-3.5 text-electric-blue" />
                                      </span>
                                    )}
                                    <span>{link.label}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={item.href} className="border-b py-4">
                  <Link
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className="block min-h-[44px] text-base font-semibold text-dark-gray"
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </Accordion>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-auto space-y-3 border-t pt-4">
          <Button asChild className="w-full">
            <Link href="/get-started" onClick={() => onOpenChange(false)}>
              Start My EV Business
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/login" onClick={() => onOpenChange(false)}>
              Login
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
