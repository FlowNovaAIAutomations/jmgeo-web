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
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-sm",
  md: "h-11 px-6 text-sm rounded-sm",
  lg: "h-14 px-8 text-base rounded-sm",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-envelope",
  secondary:
    "border border-ink text-ink bg-transparent hover:bg-ink hover:text-paper",
  tertiary:
    "px-0 h-auto text-ink hover:text-amber group bg-transparent",
  accent:
    "border border-amber text-amber bg-transparent hover:bg-amber hover:text-paper",
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
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
