"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ORDERABLE } from "@/lib/products";
import { SITE } from "@/lib/site";
import { Button } from "./Button";

function formatMoney(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function OrderForm() {
  const [qty, setQty] = useState<Record<string, number>>(() =>
    Object.fromEntries(ORDERABLE.map((p) => [p.id, 0]))
  );
  const [giftCard, setGiftCard] = useState(false);
  const [apptQ, setApptQ] = useState(false);

  const total = useMemo(
    () =>
      ORDERABLE.reduce((sum, p) => sum + (qty[p.id] || 0) * p.price, 0),
    [qty]
  );

  const itemCount = useMemo(
    () => Object.values(qty).reduce((a, b) => a + b, 0),
    [qty]
  );

  const bump = (id: string, delta: number) => {
    setQty((prev) => ({
      ...prev,
      [id]: Math.max(0, Math.min(99, (prev[id] || 0) + delta)),
    }));
  };

  return (
    <form
      action={`https://formsubmit.co/${SITE.email.orders}`}
      method="POST"
      className="space-y-5 sm:space-y-6"
    >
      <input type="hidden" name="_cc" value={SITE.email.support} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Website Order/Inquiry!" />
      <input type="hidden" name="_next" value={`${SITE.url}/thank-you/`} />
      <input
        type="hidden"
        name="Order Summary"
        value={
          ORDERABLE.filter((p) => qty[p.id] > 0)
            .map((p) => `${p.name} x${qty[p.id]}`)
            .join(", ") || "No product quantities selected"
        }
      />
      <input type="hidden" name="Estimated Total" value={formatMoney(total)} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="Name"
            type="text"
            required
            placeholder="Jane Doe"
            className="field"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="Email"
            type="email"
            required
            placeholder="jane@example.com"
            className="field"
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <label className="label !mb-0">Select Products & Quantities</label>
          {itemCount > 0 ? (
            <span className="text-sm font-semibold text-rose tabular-nums">
              Est. {formatMoney(total)}
            </span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3">
          {ORDERABLE.map((product) => {
            const count = qty[product.id] || 0;
            return (
              <div
                key={product.id}
                className="order-row"
                data-active={count > 0 ? "true" : "false"}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={64}
                  height={64}
                  className="rounded-[14px] object-cover"
                />
                <div className="order-row-info min-w-0">
                  <h4 className="font-display text-[0.95rem] leading-snug text-ink sm:text-lg">
                    <span className="sm:hidden">{product.shortName}</span>
                    <span className="hidden sm:inline">{product.name}</span>
                  </h4>
                  <p className="mt-0.5 text-sm font-semibold text-forest">
                    {product.originalPrice ? (
                      <>
                        <span className="mr-1.5 text-muted line-through font-medium text-xs">
                          {formatMoney(product.originalPrice)}
                        </span>
                        {formatMoney(product.price)}
                      </>
                    ) : (
                      formatMoney(product.price)
                    )}
                  </p>
                </div>
                <div className="stepper" aria-label={`${product.name} quantity`}>
                  <button
                    type="button"
                    onClick={() => bump(product.id, -1)}
                    disabled={count === 0}
                    aria-label={`Decrease ${product.name}`}
                  >
                    −
                  </button>
                  <span aria-live="polite">{count}</span>
                  <button
                    type="button"
                    onClick={() => bump(product.id, 1)}
                    aria-label={`Increase ${product.name}`}
                  >
                    +
                  </button>
                </div>
                <input
                  type="hidden"
                  name={product.formKey}
                  value={String(count)}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <label className="label">Other Inquiries</label>
        <div className="flex flex-col gap-2">
          <label className="check-row">
            <input
              type="checkbox"
              name="Interest"
              value="Gift Card"
              checked={giftCard}
              onChange={(e) => setGiftCard(e.target.checked)}
            />
            <span className="text-sm text-muted leading-snug">
              I am interested in purchasing a Gift Card ($25–$100).
            </span>
          </label>
          <label className="check-row">
            <input
              type="checkbox"
              name="Interest"
              value="Appointment/General Question"
              checked={apptQ}
              onChange={(e) => setApptQ(e.target.checked)}
            />
            <span className="text-sm text-muted leading-snug">
              I have a question about Hair Appointments or General Info.
            </span>
          </label>
        </div>
      </div>

      <div>
        <label className="label" htmlFor="message">
          Message / Order Details
        </label>
        <textarea
          id="message"
          name="Message"
          rows={4}
          className="field min-h-[110px] resize-y sm:min-h-[120px]"
          placeholder="Gift card amounts, appointment questions, shipping details…"
        />
      </div>

      {itemCount > 0 || giftCard || apptQ ? (
        <div className="glass rounded-2xl px-4 py-3 text-sm text-muted flex flex-wrap items-center justify-between gap-2">
          <span>
            {itemCount > 0
              ? `${itemCount} item${itemCount === 1 ? "" : "s"} selected`
              : "Inquiry ready to send"}
          </span>
          {itemCount > 0 ? (
            <strong className="text-forest tabular-nums">
              Est. total {formatMoney(total)}
            </strong>
          ) : null}
        </div>
      ) : null}

      <Button type="submit" variant="primary" full arrow>
        Submit Request
      </Button>
      <p className="text-center text-xs text-muted px-2">
        We’ll email you immediately to fulfill your order or answer your inquiry.
      </p>
    </form>
  );
}
