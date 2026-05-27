import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function FinalCta() {
  return (
    <section className="relative bg-[var(--envelope)] text-paper py-[180px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease }}
        className="relative mx-auto max-w-[1100px] px-6 lg:px-10 text-center flex flex-col items-center"
      >
        <h2
          className="font-display font-normal leading-[0.98] tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 8vw, 6.875rem)" }}
        >
          ¿Tienes un proyecto?
          <br />
          <span className="italic-acc">Lo medimos</span>
        </h2>

        <Link to="/contacto" className="mt-12">
          <Button size="lg" className="!bg-paper !text-ink hover:!bg-paper/90">Solicitar presupuesto</Button>
        </Link>
      </motion.div>
    </section>
  );
}
