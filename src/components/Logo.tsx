import logoSrc from "/logo-jmgeo.png?url";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

/**
 * JMGeo logo. variant="dark" = navy original (for light backgrounds).
 * variant="light" = inverted to paper color (for dark backgrounds).
 */
export function Logo({ variant = "dark", className = "h-8 w-auto" }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="JMGeo"
      className={className}
      style={
        variant === "light"
          ? { filter: "invert(1) brightness(1.05)" }
          : undefined
      }
    />
  );
}
