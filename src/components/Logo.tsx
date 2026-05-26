import logoDark from "/logo-jmgeo.png?url";
import logoLight from "/logo-jmgeo-white.png?url";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "h-8 w-auto" }: LogoProps) {
  return (
    <img
      src={variant === "light" ? logoLight : logoDark}
      alt="JMGeo"
      className={className}
    />
  );
}
