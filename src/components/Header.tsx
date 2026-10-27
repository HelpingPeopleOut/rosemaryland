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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-[5%] py-3.5">
        <Link
          href="/"
          className="font-display flex items-center gap-3 text-xl font-semibold text-forest tracking-tight"
        >
          <Image
            src={SITE.logo}
            alt={`${SITE.name} logo`}
            width={42}
            height={42}
            className="h-[42px] w-[42px] rounded-full object-cover shadow-md ring-2 ring-white/80"
            priority
          />
          <span>{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
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

        <div className="hidden md:block">
          <Button href={ctaHref} variant="primary" className="!py-2.5 !px-5 !text-sm">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}
