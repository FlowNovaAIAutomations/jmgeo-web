import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", hash: "servicios", label: "Servicios" },
  { to: "/tecnologia", hash: undefined, label: "Tecnología" },
  { to: "/", hash: "proyectos", label: "Proyectos" },
  { to: "/sobre", hash: undefined, label: "Nosotros" },
] as const;


export function Header() {
  const [scrolled, setScrolled] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setScrolled(true);
  }, []);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>

      <motion.header
        animate={{
          paddingTop: scrolled ? 16 : 24,
          paddingBottom: scrolled ? 16 : 24,
          backgroundColor: scrolled
            ? "rgba(247, 245, 239, 0.85)"
            : "rgba(247, 245, 239, 0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 backdrop-blur-[12px]",
          scrolled ? "border-b border-ink/[0.08]" : "border-b border-transparent"
        )}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-[5vw] md:px-[7vw] lg:px-10 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
            aria-label="JMGeo — Inicio"
          >
            <Logo
              variant="dark"
              className={cn("w-auto transition-all duration-300", scrolled ? "h-7" : "h-9")}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-ink/80 hover:text-ink transition-colors"
                activeProps={{ className: "text-ink font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/clientes">
              <Button variant="accent" size="sm">Área clientes</Button>
            </Link>
          </div>

          <button
            className="md:hidden text-ink p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-ink text-paper flex flex-col px-[5vw] pt-32 pb-12"
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil"
          >
            <nav className="flex flex-col gap-8" aria-label="Navegación móvil">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05, ease: "easeOut" }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-[clamp(2rem,8vw,3.5rem)] leading-none hover:text-amber transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="mt-auto"
            >
              <Link to="/clientes" onClick={() => setOpen(false)}>
                <Button variant="accent" size="lg" className="w-full">Área clientes</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
