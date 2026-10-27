import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { OrderForm } from "@/components/OrderForm";
import { ProductTile } from "@/components/ProductTile";
import { Reveal } from "@/components/Reveal";
import { SiteShell } from "@/components/SiteShell";
import { FAQ, FEATURED, IMAGES } from "@/lib/products";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <SiteShell>
      {/* Full-bleed botanical hero */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Botanical rosemary and rose water"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(20,32,16,0.88)] via-[rgba(30,47,24,0.45)] to-[rgba(30,47,24,0.15)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full bg-rose/25 blur-3xl pulse-glow" />
        <div className="pointer-events-none absolute -left-10 bottom-40 h-48 w-48 rounded-full bg-mist/40 blur-3xl" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5%] pb-16 pt-32 md:pb-24">
          <p className="font-display text-rose-soft text-2xl sm:text-3xl md:text-4xl mb-3 tracking-tight">
            {SITE.name}
          </p>
          <h1 className="font-display text-white text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.02] max-w-3xl tracking-tight mb-5">
            Unlock the Magic of Botanicals.
          </h1>
          <p className="max-w-xl text-white/85 text-base sm:text-lg leading-relaxed mb-8">
            Pure rosemary water for healthier hair. All-natural rose water for
            radiant skin. Crafted with care—distilled from nature.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#order" variant="rose" arrow>
              Place an Order
            </Button>
            <Button href="/shop/" variant="secondary">
              Explore the Shop
            </Button>
          </div>
        </div>
      </section>

      {/* Remedies */}
      <section className="mx-auto max-w-[1400px] px-[5%] py-20 md:py-28">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-rose mb-2">
                Collection
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest tracking-tight">
                Our Natural Remedies
              </h2>
            </div>
            <Button href="/shop/" variant="secondary">
              View Shop
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.filter((p) => p.id !== "bundle").map((product, i) => (
            <Reveal key={product.id} delay={(Math.min(i, 3) || 0) as 0 | 1 | 2 | 3}>
              <ProductTile
                product={product}
                pricePrefix={product.priceLabel}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Immersive banner — full bleed */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMAGES.banner}
          alt="RoseMaryLand botanical bottle"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,32,16,0.85)] via-[rgba(30,47,24,0.5)] to-[rgba(183,110,121,0.25)]" />
        <Reveal className="relative z-10 max-w-3xl px-[5%] text-center text-white">
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.4rem)] leading-tight tracking-tight mb-4">
            Welcome to our professional hair care haven, where growth begins
            anew.
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Let us guide you through the transformation journey with{" "}
            {SITE.name}.
          </p>
          <Button href="/appointments/" variant="secondary">
            Book an Appointment
          </Button>
        </Reveal>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-[1400px] px-[5%] py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-rose mb-2">
                Revival
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest tracking-tight mb-5">
                Discover Hair Revival
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed mb-4">
                Enhance your beauty with our rosemary products. Transform your
                hair into its healthiest state — regrow, repair, and revitalize.
              </p>
              <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
                Experience the rejuvenating properties of rosemary and roses as
                they work together to promote healthy hair growth, while also
                enhancing the radiance and vitality of your skin.
              </p>
              <Button href={SITE.instagram} variant="secondary" target="_blank" rel="noopener noreferrer">
                View Instagram Gallery
              </Button>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_64px_rgba(30,47,24,0.14)]">
              <Image
                src={IMAGES.story}
                alt="Botanical ingredients"
                width={900}
                height={1100}
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem] pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Order */}
      <section id="order" className="scroll-mt-24 px-[5%] py-16 md:py-24">
        <Reveal>
          <div className="glass-strong mx-auto max-w-3xl rounded-[2rem] p-6 sm:p-10 md:p-12 border-t-4 border-t-rose/70">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-rose mb-2">
                Concierge Order
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest tracking-tight mb-3">
                Place an Order or Inquiry
              </h2>
              <p className="text-muted max-w-xl mx-auto">
                Select quantities of the products you’d like, or check a box
                below for a gift card or appointment question. We will email you
                immediately to fulfill your order.
              </p>
            </div>
            <OrderForm />
          </div>
        </Reveal>
      </section>

      {/* FAQ accordion */}
      <section className="mx-auto max-w-[900px] px-[5%] pb-20 md:pb-28">
        <Reveal>
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl sm:text-4xl text-forest tracking-tight mb-2">
              Before You Order
            </h2>
            <p className="text-muted">
              Quick answers for a smoother botanical journey.
            </p>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <Accordion items={FAQ} />
        </Reveal>
        <p className="mt-8 text-center text-sm text-muted">
          Prefer browsing first?{" "}
          <Link href="/shop/" className="font-semibold text-forest underline-offset-2 hover:underline">
            Visit the shop
          </Link>
          .
        </p>
      </section>
    </SiteShell>
  );
}
