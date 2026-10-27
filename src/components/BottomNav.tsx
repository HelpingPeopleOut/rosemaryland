"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/shop/",
    label: "Shop",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6 8h12l-1 12H7L6 8Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M9 8a3 3 0 0 1 6 0"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "/appointments/",
    label: "Book",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3"
          y="5"
          width="18"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M3 9h18M8 3v4M16 3v4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "/about/",
    label: "About",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3c2.5 3 5 5.2 5 8.2A5 5 0 1 1 7 11.2C7 8.2 9.5 6 12 3Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <nav
      className="glass-strong fixed bottom-0 left-0 z-[60] flex w-full justify-around border-t border-[rgba(30,47,24,0.08)] px-1 pt-1.5 pb-[calc(0.55rem+env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(30,47,24,0.08)] lg:hidden"
      aria-label="Mobile"
    >
      {ITEMS.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex min-h-[3rem] min-w-[4.25rem] flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl px-2 py-1 text-[0.68rem] font-medium transition-colors sm:min-w-[4.5rem] sm:text-[0.7rem] ${
              active ? "text-forest bg-mist/70" : "text-muted"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
