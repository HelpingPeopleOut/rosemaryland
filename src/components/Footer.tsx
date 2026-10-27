import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="page-x mt-4 border-t border-[rgba(30,47,24,0.06)] py-8 pb-10 text-center text-sm text-muted sm:mt-8 sm:py-10">
      <p className="font-display text-lg text-forest mb-2">{SITE.name}</p>
      <p className="mb-1">
        &copy; {new Date().getFullYear()} RoseMaryLand.Love. All rights reserved.
      </p>
      <p>
        Created by{" "}
        <a
          href={SITE.creator.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-forest underline-offset-2 hover:underline"
        >
          {SITE.creator.name}
        </a>
      </p>
      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <Link href="/shop/" className="hover:text-forest">
          Shop
        </Link>
        <Link href="/appointments/" className="hover:text-forest">
          Haircare
        </Link>
        <Link href="/about/" className="hover:text-forest">
          About
        </Link>
      </p>
    </footer>
  );
}
