import logoDark from "/logo-jmgeo.svg?url";
import logoLight from "/logo-jmgeo-white.svg?url";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

/**
 * JM GEO logo en SVG vectorial (extraído del PDF oficial del cliente).
 * variant="dark"  → navy original (#1C2630), para fondos claros.
 * variant="light" → blanco, para fondos oscuros.
 * Ambos archivos son vectores sobre fondo 100% transparente.
 */
export function Logo({ variant = "dark", className = "h-8 w-auto" }: LogoProps) {
  return (
    <img
      src={variant === "light" ? logoLight : logoDark}
      alt="JM GEO"
      className={className}
    />
  );
}
