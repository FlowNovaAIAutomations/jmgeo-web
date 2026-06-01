import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { CompassRose } from "./CompassRose";

const linkCls =
  "text-paper/75 hover:text-amber hover:opacity-100 transition-colors duration-200";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden text-paper bg-[var(--envelope)]">
      {/* Decoración compass */}
      <div className="absolute right-10 top-10 text-paper pointer-events-none">
        <CompassRose size={60} opacity={0.1} />
      </div>

      <div
        className="relative mx-auto max-w-[1440px]"
        style={{ padding: "100px 80px 40px" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-4"
          style={{ gap: "60px" }}
        >
          {/* Col 1 — Marca */}
          <div>
            <Logo variant="light" className="h-20 w-auto" />
            <p
              className="font-display text-paper/70 leading-snug"
              style={{ fontSize: "16px", marginTop: "24px" }}
            >
              Midiendo el presente para construir el futuro
            </p>
          </div>

          {/* Col 2 — Explorar */}
          <FooterCol title="EXPLORAR">
            <FooterLink to="/">Inicio</FooterLink>
            <FooterLink to="/tecnologia">Tecnología</FooterLink>
            <FooterLink to="/sobre">Sobre JM GEO</FooterLink>
            <FooterLink to="/contacto">Contacto</FooterLink>
            <FooterLink to="/clientes">Área clientes</FooterLink>
          </FooterCol>

          {/* Col 3 — Contacto */}
          <FooterCol title="CONTACTO">
            <li className="text-paper/75">JM GEO, S.L.</li>
            <li className="text-paper/75">Maestra Juana Sena, 5 - 5</li>
            <li className="text-paper/75">46910 Benetússer (Valencia)</li>
            <li className="text-paper/75">España</li>
            <li className="text-paper/75">
              <a href="tel:+34640266724" className={linkCls}>
                T: +34 640 266 724
              </a>
            </li>
            <li className="text-paper/75">
              <a href="mailto:administracion@jmgeo.es" className={linkCls}>
                E: administracion@jmgeo.es
              </a>
            </li>
          </FooterCol>

          {/* Col 4 — Legal */}
          <FooterCol title="LEGAL">
            <FooterLink to="/aviso-legal">Aviso legal</FooterLink>
            <FooterLink to="/privacidad">Política de privacidad</FooterLink>
            <FooterLink to="/cookies">Política de cookies</FooterLink>
          </FooterCol>
        </div>

        {/* Barra inferior */}
        <div
          className="border-t border-paper/10 flex flex-col md:flex-row md:justify-between gap-4"
          style={{ marginTop: "80px", paddingTop: "32px" }}
        >
          <span
            className="font-mono text-paper/50"
            style={{ fontSize: "11px", letterSpacing: "0.1em" }}
          >
            © {year} JM GEO · Todos los derechos reservados
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        className="font-mono uppercase text-amber"
        style={{ fontSize: "10px", letterSpacing: "0.25em" }}
      >
        {title}
      </h3>
      <ul
        className="font-sans"
        style={{
          marginTop: "20px",
          fontSize: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link to={to} className={linkCls}>
        {children}
      </Link>
    </li>
  );
}
