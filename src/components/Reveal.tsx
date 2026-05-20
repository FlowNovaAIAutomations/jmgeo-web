import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  amount?: number;
  y?: number;
  as?: "div" | "section" | "article" | "header" | "aside";
};

/**
 * Reveal wrapper — fade-in + slide-up con respeto a prefers-reduced-motion.
 * Usar en cualquier bloque que aparece al scroll.
 */
export function Reveal({
  children,
  delay = 0,
  amount = 0.2,
  y = 10,
  as = "div",
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * RevealStagger — contenedor que aplica stagger 0.1s a sus hijos directos
 * cuando entren en viewport. Los hijos deben ser <motion.*> con
 * variants={revealItem} o usar `<RevealItem />`.
 */
export function RevealStagger({
  children,
  delay = 0,
  amount = 0.2,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
  as?: "div" | "section" | "ul";
}) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  y = 10,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
