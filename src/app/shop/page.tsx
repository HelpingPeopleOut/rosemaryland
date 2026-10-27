import type { Metadata } from "next";
import { ProductTile } from "@/components/ProductTile";
import { Reveal } from "@/components/Reveal";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Natural hair and skincare solutions crafted with the finest ingredients, including pure rosemary water and rose water.",
};

export default function ShopPage() {
  return (
    <SiteShell>
      <section className="page-x relative overflow-hidden pb-8 pt-12 sm:pb-10 sm:pt-16 md:pb-14 md:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(36rem,100%)] -translate-x-1/2 rounded-full bg-rose-soft/40 blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-display mb-2 text-xl tracking-tight text-rose sm:text-2xl md:text-3xl">
              RoseMaryLand
            </p>
            <h1 className="font-display mb-3 text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-tight text-forest sm:mb-4">
              Experience the Beauty of Botanicals
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
              Natural hair and skincare solutions crafted with the finest
              ingredients. Unlock the power of nature with our premium products.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-x mx-auto max-w-[1400px] pb-16 sm:pb-20 md:pb-28">
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.id}
              delay={(Math.min(i % 4, 3) || 0) as 0 | 1 | 2 | 3}
            >
              <ProductTile
                product={{
                  ...product,
                  description: product.longDescription || product.description,
                }}
                ctaHref="/#order"
                ctaLabel="Request Order"
                pricePrefix={product.priceLabel}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass-strong mx-auto mt-12 max-w-2xl rounded-[1.5rem] px-5 py-8 text-center sm:mt-16 sm:rounded-[2rem] sm:px-10 sm:py-10">
            <h2 className="font-display mb-3 text-2xl tracking-tight text-forest sm:text-3xl">
              Ready to order?
            </h2>
            <p className="mb-6 text-sm text-muted sm:text-base">
              Select quantities with product images on our concierge order form—
              we’ll confirm everything by email.
            </p>
            <Button href="/#order" variant="primary" arrow>
              Go to Order Form
            </Button>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
