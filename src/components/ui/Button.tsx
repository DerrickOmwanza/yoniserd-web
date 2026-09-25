import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "link";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out-soft";

const variants: Record<Variant, string> = {
  primary: "rounded-full bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md",
  gold: "rounded-full bg-gold-500 text-navy-950 hover:bg-gold-300 shadow-sm hover:shadow-md",
  outline:
    "rounded-full border border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
  "outline-light":
    "rounded-full border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy-950",
  link: "text-navy-900 underline-offset-4 decoration-gold-500 decoration-2 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  children,
  className = "",
  ...rest
}: ButtonLinkProps) {
  const sizing = variant === "link" ? "text-sm" : sizes[size];
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizing} ${className}`} {...rest}>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
