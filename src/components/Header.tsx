"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";
import { Button } from "./Button";

export function Header({ ctaHref = "/#order", ctaLabel = "Order Now" }: {
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-[rgba(30,47,24,0.08)] supports-[backdrop-filter]:bg-[rgba(255,252,249,0.72)]">
      <div className="page-x mx-auto flex max-w-[1400px] items-center justify-between gap-3 py-2.5 sm:gap-4 sm:py-3.5">
        <Link
          href="/"
          className="font-display flex min-w-0 items-center gap-2.5 text-lg font-semibold text-forest tracking-tight sm:gap-3 sm:text-xl"
        >
          <Image
            src={SITE.logo}
            alt={`${SITE.name} logo`}
            width={42}
            height={42}
            className="h-9 w-9 shrink-0 rounded-full object-cover shadow-md ring-2 ring-white/80 sm:h-[42px] sm:w-[42px]"
            priority
          />
          <span className="truncate">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-forest after:transition-all after:duration-300 hover:text-forest hover:after:w-full ${
                isActive(item.href)
                  ? "text-forest after:w-full"
                  : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={ctaHref} variant="primary" className="!py-2.5 !px-5 !text-sm">
            {ctaLabel}
          </Button>
        </div>

        {/* Compact order CTA for tablet portrait / large phones without bottom crowding */}
        <div className="hidden sm:block lg:hidden">
          <Button href={ctaHref} variant="primary" className="!py-2 !px-4 !text-xs">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}
