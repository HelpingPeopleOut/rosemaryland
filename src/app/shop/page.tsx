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
      <section className="relative overflow-hidden px-[5%] pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-rose-soft/40 blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl sm:text-3xl text-rose mb-2 tracking-tight">
              RoseMaryLand
            </p>
            <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] text-forest tracking-tight leading-[1.08] mb-4">
              Experience the Beauty of Botanicals
            </h1>
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Natural hair and skincare solutions crafted with the finest
              ingredients. Unlock the power of nature with our premium products.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-[5%] pb-20 md:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
          <div className="mt-16 glass-strong rounded-[2rem] px-6 py-10 sm:px-10 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl text-forest mb-3 tracking-tight">
              Ready to order?
            </h2>
            <p className="text-muted mb-6">
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
