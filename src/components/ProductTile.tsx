import Image from "next/image";
import type { Product } from "@/lib/products";
import { Button } from "./Button";

function formatMoney(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function ProductTile({
  product,
  ctaHref = "/#order",
  ctaLabel = "Order Now",
  pricePrefix,
}: {
  product: Product;
  ctaHref?: string;
  ctaLabel?: string;
  pricePrefix?: string;
}) {
  return (
    <article className="product-tile h-full">
      {product.originalPrice ? <span className="badge-sale">Sale</span> : null}
      <Image
        src={product.image}
        alt={product.name}
        width={640}
        height={640}
        className="w-full"
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <h3 className="font-display mb-1 text-xl tracking-tight text-ink sm:text-2xl">
          {product.name}
        </h3>
        <div className="mb-2 flex flex-wrap items-baseline gap-2 sm:mb-3">
          {product.originalPrice ? (
            <span className="text-sm text-muted line-through">
              {formatMoney(product.originalPrice)}
            </span>
          ) : null}
          <span className="text-base font-semibold text-forest sm:text-lg">
            {pricePrefix}
            {formatMoney(product.price)}
            {product.id === "gift-cards" ? "–$100" : ""}
          </span>
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted sm:mb-5">
          {product.description}
        </p>
        <Button href={ctaHref} variant="primary" full>
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
