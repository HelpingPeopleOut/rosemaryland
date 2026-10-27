import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-[rgba(30,47,24,0.06)] px-[5%] py-10 text-center text-sm text-muted">
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
      <p className="mt-4">
        <Link href="/shop/" className="mx-2 hover:text-forest">
          Shop
        </Link>
        <Link href="/appointments/" className="mx-2 hover:text-forest">
          Haircare
        </Link>
        <Link href="/about/" className="mx-2 hover:text-forest">
          About
        </Link>
      </p>
    </footer>
  );
}
