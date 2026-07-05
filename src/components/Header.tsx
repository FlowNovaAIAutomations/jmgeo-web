import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { applyStoredLanguage } from "@/lib/i18n";

const navItems = [
  { to: "/sobre", hash: undefined, key: "nav.about" },
  { to: "/", hash: "servicios", key: "nav.services" },
  { to: "/tecnologia", hash: undefined, key: "nav.tech" },
  { to: "/", hash: "proyectos", key: "nav.projects" },
  { to: "/contacto", hash: undefined, key: "nav.contact" },
] as const;


export function Header() {
  // Solo el Home tiene hero oscuro (envelope) que permite el header transparente
  // con logo y menú en blanco. El resto de páginas tienen fondo claro en el top,
  // así que forzamos el estilo "scrolled" (logo navy + menú oscuro + fondo
  // translúcido claro) siempre, para que se vea bien sin importar el scroll.
  const [scrolledRaw, setScrolledRaw] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "es";

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  // En home: depende del scroll. Fuera del home: siempre estilo "scrolled".
  const scrolled = isHome ? scrolledRaw : true;

  useEffect(() => {
    const onScroll = () => setScrolledRaw(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tras la hidratación (el HTML estático siempre es ES), restaurar el idioma
  // guardado de visitas anteriores.
  useEffect(() => {
    applyStoredLanguage();
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
        {t("header.skip")}
      </a>

      <motion.header
        animate={{
          paddingTop: scrolled ? 12 : 20,
          paddingBottom: scrolled ? 12 : 20,
          backgroundColor: scrolled
            ? "rgba(248, 250, 251, 0.85)"
            : "rgba(248, 250, 251, 0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50",
          scrolled ? "backdrop-blur-[12px] border-b border-ink/[0.06]" : "border-b border-transparent"
        )}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-[5vw] md:px-[7vw] lg:px-10 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
            aria-label={t("header.homeAria")}
          >
            <Logo
              variant={scrolled ? "dark" : "light"}
              className={cn("w-auto transition-all duration-300", scrolled ? "h-11 md:h-12" : "h-36 md:h-52")}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10" aria-label={t("header.mainNav")}>
            {navItems.map((item) => (
              <Link
                key={`${item.to}-${item.key}`}
                to={item.to}
                hash={item.hash}
                onClick={() => {
                  // Si ya estamos en la misma ruta y hay hash, forzar scroll
                  if (item.hash && window.location.pathname === item.to) {
                    const el = document.getElementById(item.hash);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={cn(
                  "font-mono uppercase text-[11px] tracking-[0.22em] transition-colors",
                  scrolled
                    ? "text-ink/90 hover:text-ink"
                    : "text-paper hover:text-paper/80"
                )}
                activeProps={{ className: scrolled ? "text-ink" : "text-paper" }}
                activeOptions={{ exact: item.to === "/" && !item.hash }}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Lado derecho: PRIMERO área clientes, LUEGO selector de idioma a la derecha. */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/clientes">
              <Button variant="accent" size="md">{t("nav.clients")}</Button>
            </Link>
            <div
              role="group"
              aria-label={t("header.langSelector")}
              className={cn(
                "inline-flex items-center rounded-xl border overflow-hidden transition-colors",
                scrolled ? "border-ink/15" : "border-paper/25"
              )}
            >
              {(["es", "en"] as const).map((code) => {
                const active = lang === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => void i18n.changeLanguage(code)}
                    aria-pressed={active}
                    aria-label={code === "es" ? t("header.langEs") : t("header.langEn")}
                    className={cn(
                      "font-sans text-[11px] tracking-[0.18em] px-2.5 py-1 transition-colors",
                      active
                        ? scrolled
                          ? "bg-ink text-paper"
                          : "bg-paper text-ink"
                        : scrolled
                          ? "text-ink/65 hover:text-ink"
                          : "text-paper/70 hover:text-paper"
                    )}
                  >
                    {code.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>


          <button
            className={cn("md:hidden p-2 -mr-2 transition-colors", scrolled ? "text-ink" : "text-paper")}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("header.closeMenu") : t("header.openMenu")}
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
            aria-label={t("header.mobileMenu")}
          >
            <nav className="flex flex-col gap-8" aria-label={t("header.mobileNav")}>
              {navItems.map((item, i) => (
                <motion.div
                  key={`${item.to}-${item.key}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05, ease: "easeOut" }}
                >
                  <Link
                    to={item.to}
                    hash={item.hash}
                    onClick={() => {
                      setOpen(false);
                      if (item.hash && window.location.pathname === item.to) {
                        const el = document.getElementById(item.hash);
                        el?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="font-display text-[clamp(2rem,8vw,3.5rem)] leading-none hover:text-amber transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}

            </nav>

            {/* Selector de idioma en móvil */}
            <div className="mt-10 inline-flex items-center self-start rounded-xl border border-paper/25 overflow-hidden">
              {(["es", "en"] as const).map((code) => {
                const active = lang === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => void i18n.changeLanguage(code)}
                    aria-pressed={active}
                    aria-label={code === "es" ? t("header.langEs") : t("header.langEn")}
                    className={cn(
                      "font-sans text-[12px] tracking-[0.18em] px-3.5 py-1.5 transition-colors",
                      active ? "bg-paper text-ink" : "text-paper/70 hover:text-paper"
                    )}
                  >
                    {code.toUpperCase()}
                  </button>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="mt-auto"
            >
              <Link to="/clientes" onClick={() => setOpen(false)}>
                <Button variant="accent" size="lg" className="w-full">{t("nav.clients")}</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
