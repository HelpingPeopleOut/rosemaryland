import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "rose" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  full?: boolean;
  arrow?: boolean;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = "primary",
    className = "",
    full,
    arrow,
  } = props;

  const classes = [
    "btn",
    `btn-${variant}`,
    full ? "btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {arrow ? (
        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={classes} target={target} rel={rel}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  const { type = "button", disabled, onClick } = props as ButtonAsButton;
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
