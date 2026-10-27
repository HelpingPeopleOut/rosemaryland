"use client";

import { useId, useState } from "react";

export type AccordionItem = {
  q: string;
  a: string;
};

type Props = {
  items: readonly AccordionItem[];
  className?: string;
  /** Open first item by default (default true) */
  defaultOpen?: number | null;
  /** Skip outer glass shell (for nested panels) */
  plain?: boolean;
};

export function Accordion({
  items,
  className = "",
  defaultOpen = 0,
  plain = false,
}: Props) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div
      className={
        plain
          ? `border-t border-[rgba(30,47,24,0.08)] ${className}`
          : `glass-strong rounded-[1.25rem] px-4 sm:rounded-[1.5rem] sm:px-6 md:px-8 ${className}`
      }
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const triggerId = `${baseId}-trigger-${i}`;

        return (
          <div
            key={item.q}
            className="accordion-item"
            data-open={isOpen ? "true" : "false"}
          >
            <button
              type="button"
              id={triggerId}
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-base tracking-tight sm:text-lg md:text-xl">
                {item.q}
              </span>
              <span className="accordion-icon" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="accordion-panel"
            >
              <div>
                <p className="text-sm sm:text-base">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
