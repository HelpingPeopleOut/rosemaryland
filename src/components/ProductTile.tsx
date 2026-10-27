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
    <article className="product-tile">
      {product.originalPrice ? <span className="badge-sale">Sale</span> : null}
      <Image
        src={product.image}
        alt={product.name}
        width={640}
        height={640}
        className="w-full"
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl sm:text-2xl text-ink tracking-tight mb-1">
          {product.name}
        </h3>
        <div className="mb-3 flex items-baseline gap-2">
          {product.originalPrice ? (
            <span className="text-muted line-through text-sm">
              {formatMoney(product.originalPrice)}
            </span>
          ) : null}
          <span className="text-lg font-semibold text-forest">
            {pricePrefix}
            {formatMoney(product.price)}
            {product.id === "gift-cards" ? "–$100" : ""}
          </span>
        </div>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
          {product.description}
        </p>
        <Button href={ctaHref} variant="primary" full>
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
