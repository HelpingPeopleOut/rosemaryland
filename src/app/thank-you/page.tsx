import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { SiteShell } from "@/components/SiteShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <SiteShell hideFooter>
      <section className="page-x flex flex-1 items-center justify-center py-12 sm:py-16 md:py-24">
        <div className="glass-strong relative w-full max-w-lg overflow-hidden rounded-[1.5rem] border-t-4 border-t-rose/70 px-5 py-10 text-center sm:rounded-[2rem] sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-rose-soft/50 blur-2xl pulse-glow" />
          <div className="pointer-events-none absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-mist blur-2xl" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-mist text-forest float-soft">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M20 7 10 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="font-display text-xl text-rose mb-1 tracking-tight">
              {SITE.name}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-forest tracking-tight mb-4">
              Thank You!
            </h1>
            <p className="text-muted text-base sm:text-lg mb-8 leading-relaxed">
              We have received your request. Our team will review your details
              and be in touch with you shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/" variant="primary">
                Return to Home
              </Button>
              <Button href="/shop/" variant="secondary">
                Browse Shop
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
