import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "tertiary" | "accent";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight transition-all duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-paper will-change-transform";

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm rounded-full",
  md: "h-12 px-7 text-sm rounded-full",
  lg: "h-14 px-9 text-base rounded-full",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-[var(--ink-dark)] shadow-soft hover:shadow-soft-lg transition-shadow",
  secondary:
    "border border-ink/15 text-ink bg-transparent hover:bg-ink/[0.04]",
  tertiary:
    "px-0 h-auto text-ink hover:text-amber group bg-transparent",
  accent:
    "bg-ink text-paper hover:bg-[var(--ink-dark)] shadow-soft hover:shadow-soft-lg transition-shadow",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    if (variant === "tertiary") {
      return (
        <button
          ref={ref}
          className={cn(base, variants.tertiary, "text-sm", className)}
          {...props}
        >
          <span>{children}</span>
          <ArrowRight className="h-4 w-4 text-amber transition-transform duration-200 ease-out group-hover:translate-x-[6px]" />
        </button>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
