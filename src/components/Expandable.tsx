import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Expandable — bloque colapsable. Mantiene la web limpia mostrando solo
 * un titular o un blurb corto; el detalle se despliega si el usuario quiere.
 */
export function Expandable({
  label,
  children,
  tone = "light",
}: {
  label?: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const colors =
    tone === "dark"
      ? {
          btn: "text-paper/80 hover:text-paper border-paper/20 hover:border-paper/50",
          body: "text-paper/70 border-paper/15",
        }
      : {
          btn: "text-ink/70 hover:text-ink border-ink/20 hover:border-ink/60",
          body: "text-mid border-ink/10",
        };

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`mt-5 inline-flex items-center gap-2 font-mono uppercase text-[10px] tracking-[0.25em] border-b pb-1 transition-colors ${colors.btn}`}
      >
        <span>{open ? t("expandable.close") : (label ?? t("whatWeDo.more"))}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="inline-flex"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div
              className={`mt-5 pt-5 border-t text-[14px] leading-relaxed ${colors.body}`}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
