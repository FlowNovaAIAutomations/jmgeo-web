import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { CompassRose } from "./CompassRose";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-envelope text-paper overflow-hidden">
      <div className="absolute -right-16 -bottom-16 text-paper pointer-events-none">
        <CompassRose size={320} opacity={0.06} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo variant="light" className="h-10 w-auto" />
            <p className="mt-6 text-sm text-paper/60 max-w-xs leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <div className="label-tech text-paper/50">{t("footer.navigate")}</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-amber transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/tecnologia" className="hover:text-amber transition-colors">{t("nav.tech")}</Link></li>
              <li><Link to="/sobre" className="hover:text-amber transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/contacto" className="hover:text-amber transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <div className="label-tech text-paper/50">{t("footer.contact")}</div>
            <ul className="mt-4 space-y-3 text-sm text-paper/80">
              <li>javier@jmgeo.es</li>
              <li>España · UK · IT · PT · FR · DE</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-paper/40 font-mono uppercase tracking-widest">
          <span>© {year} JMGeo</span>
          <span>{t("footer.legal")}</span>
        </div>
      </div>
    </footer>
  );
}
