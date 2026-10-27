import type { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { Footer } from "./Footer";

export function SiteShell({
  children,
  ctaHref,
  ctaLabel,
  hideFooter,
}: {
  children: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  hideFooter?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col pb-nav">
      <Header ctaHref={ctaHref} ctaLabel={ctaLabel} />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
      <BottomNav />
    </div>
  );
}
