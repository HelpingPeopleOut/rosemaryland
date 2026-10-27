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
      <section className="relative flex min-h-[100svh] items-end overflow-hidden max-lg:min-h-[calc(100svh-4.5rem)]">
        <Image
          src={IMAGES.hero}
          alt="Botanical rosemary and rose water"
          fill
          priority
          className="object-cover object-[center_35%] sm:object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(20,32,16,0.92)] via-[rgba(30,47,24,0.5)] to-[rgba(30,47,24,0.2)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full bg-rose/25 blur-3xl pulse-glow" />
        <div className="pointer-events-none absolute -left-10 bottom-40 h-48 w-48 rounded-full bg-mist/40 blur-3xl" />

        <div className="page-x relative z-10 mx-auto w-full max-w-[1400px] pb-10 pt-28 sm:pb-16 sm:pt-32 md:pb-24">
          <p className="font-display mb-2 text-xl tracking-tight text-rose-soft sm:mb-3 sm:text-3xl md:text-4xl">
            {SITE.name}
          </p>
          <h1 className="font-display mb-4 max-w-3xl text-[clamp(2.15rem,8vw,5.2rem)] leading-[1.05] tracking-tight text-white sm:mb-5">
            Unlock the Magic of Botanicals.
          </h1>
          <p className="mb-7 max-w-xl text-[0.95rem] leading-relaxed text-white/85 sm:mb-8 sm:text-lg">
            Pure rosemary water for healthier hair. All-natural rose water for
            radiant skin. Crafted with care—distilled from nature.
          </p>
          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Button href="#order" variant="rose" arrow stackMobile>
              Place an Order
            </Button>
            <Button href="/shop/" variant="secondary" stackMobile>
              Explore the Shop
            </Button>
          </div>
        </div>
      </section>

      {/* Remedies */}
      <section className="page-x mx-auto max-w-[1400px] section-y">
        <Reveal>
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-rose">
                Collection
              </p>
              <h2 className="font-display text-3xl tracking-tight text-forest sm:text-4xl md:text-5xl">
                Our Natural Remedies
              </h2>
            </div>
            <Button href="/shop/" variant="secondary" className="self-start sm:self-auto">
              View Shop
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
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
      <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden sm:min-h-[70vh]">
        <Image
          src={IMAGES.banner}
          alt="RoseMaryLand botanical bottle"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,32,16,0.88)] via-[rgba(30,47,24,0.55)] to-[rgba(183,110,121,0.25)]" />
        <Reveal className="page-x relative z-10 max-w-3xl text-center text-white">
          <h2 className="font-display mb-3 text-[clamp(1.7rem,4.5vw,3.4rem)] leading-tight tracking-tight sm:mb-4">
            Welcome to our professional hair care haven, where growth begins
            anew.
          </h2>
          <p className="mb-7 text-base text-white/85 sm:mb-8 sm:text-lg">
            Let us guide you through the transformation journey with{" "}
            {SITE.name}.
          </p>
          <Button href="/appointments/" variant="secondary">
            Book an Appointment
          </Button>
        </Reveal>
      </section>

      {/* Story */}
      <section className="page-x mx-auto max-w-[1400px] section-y">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-rose">
                Revival
              </p>
              <h2 className="font-display mb-4 text-3xl tracking-tight text-forest sm:mb-5 sm:text-4xl md:text-5xl">
                Discover Hair Revival
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted sm:text-lg">
                Enhance your beauty with our rosemary products. Transform your
                hair into its healthiest state — regrow, repair, and revitalize.
              </p>
              <p className="mb-7 text-base leading-relaxed text-muted sm:mb-8 sm:text-lg">
                Experience the rejuvenating properties of rosemary and roses as
                they work together to promote healthy hair growth, while also
                enhancing the radiance and vitality of your skin.
              </p>
              <Button
                href={SITE.instagram}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto lg:mx-0"
              >
                View Instagram Gallery
              </Button>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-[1.5rem] shadow-[0_28px_64px_rgba(30,47,24,0.14)] sm:rounded-[2rem] lg:max-w-none">
              <Image
                src={IMAGES.story}
                alt="Botanical ingredients"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/20 sm:rounded-[2rem]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Order */}
      <section id="order" className="page-x scroll-mt-24 py-12 sm:py-16 md:py-24">
        <Reveal>
          <div className="glass-strong mx-auto max-w-3xl rounded-[1.5rem] border-t-4 border-t-rose/70 p-4 sm:rounded-[2rem] sm:p-8 md:p-12">
            <div className="mb-6 text-center sm:mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-rose">
                Concierge Order
              </p>
              <h2 className="font-display mb-3 text-2xl tracking-tight text-forest sm:text-3xl md:text-4xl">
                Place an Order or Inquiry
              </h2>
              <p className="mx-auto max-w-xl text-sm text-muted sm:text-base">
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
      <section className="page-x mx-auto max-w-[900px] pb-16 sm:pb-20 md:pb-28">
        <Reveal>
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="font-display mb-2 text-2xl tracking-tight text-forest sm:text-3xl md:text-4xl">
              Before You Order
            </h2>
            <p className="text-sm text-muted sm:text-base">
              Quick answers for a smoother botanical journey.
            </p>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <Accordion items={FAQ} />
        </Reveal>
        <p className="mt-6 text-center text-sm text-muted sm:mt-8">
          Prefer browsing first?{" "}
          <Link
            href="/shop/"
            className="font-semibold text-forest underline-offset-2 hover:underline"
          >
            Visit the shop
          </Link>
          .
        </p>
      </section>
    </SiteShell>
  );
}
