interface CompassRoseProps {
  size?: number;
  opacity?: number;
  className?: string;
}

/**
 * Signature graphic — derived from the "O" in the JMGeo logo.
 * Inline SVG so it inherits currentColor and scales cleanly.
 */
export function CompassRose({
  size = 120,
  opacity = 1,
  className,
}: CompassRoseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ opacity }}
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        {/* outer ring */}
        <circle cx="50" cy="50" r="32" />
        {/* inner ring (subtle) */}
        <circle cx="50" cy="50" r="28" strokeWidth="0.3" opacity="0.4" />
        {/* cardinal ticks */}
        <line x1="50" y1="8" x2="50" y2="16" />
        <line x1="50" y1="84" x2="50" y2="92" />
        <line x1="8" y1="50" x2="16" y2="50" />
        <line x1="84" y1="50" x2="92" y2="50" />
      </g>
      <g
        fill="currentColor"
        fontFamily="Geist, Inter, system-ui, sans-serif"
        fontSize="7"
        fontWeight="400"
        textAnchor="middle"
      >
        <text x="50" y="6" dy="0.35em">N</text>
        <text x="50" y="98" dy="0.35em">S</text>
        <text x="4" y="50" dy="0.35em">W</text>
        <text x="96" y="50" dy="0.35em">E</text>
      </g>
    </svg>
  );
}
