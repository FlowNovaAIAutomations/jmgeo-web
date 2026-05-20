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
  sm: "h-9 px-4 text-sm rounded-sm",
  md: "h-11 px-6 text-sm rounded-sm",
  lg: "h-14 px-8 text-base rounded-sm",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-[var(--ink-dark)] hover:scale-[1.02] active:scale-100",
  secondary:
    "border border-ink text-ink bg-transparent hover:bg-ink hover:text-paper",
  tertiary:
    "px-0 h-auto text-ink hover:text-amber group bg-transparent",
  accent:
    "bg-amber text-paper hover:bg-[var(--amber-dark)] hover:scale-[1.02] active:scale-100",
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
