import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navKeys = [
  { to: "/", key: "nav.home" },
  { to: "/tecnologia", key: "nav.tech" },
  { to: "/sobre", key: "nav.about" },
  { to: "/contacto", key: "nav.contact" },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-paper/80 backdrop-blur-md border-b border-border"
          : "py-6 bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo variant="dark" className={cn("w-auto transition-all", scrolled ? "h-7" : "h-9")} />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navKeys.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-ink/80 hover:text-ink transition-colors"
              activeProps={{ className: "text-ink font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/clientes">
            <Button variant="accent" size="sm">{t("nav.clients")}</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-paper flex flex-col px-6 pt-12 gap-8">
          {navKeys.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-ink"
            >
              {t(item.key)}
            </Link>
          ))}
          <Link to="/clientes" onClick={() => setOpen(false)} className="mt-4">
            <Button variant="accent">{t("nav.clients")}</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
