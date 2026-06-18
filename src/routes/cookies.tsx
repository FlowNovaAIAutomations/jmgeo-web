import { createFileRoute } from "@tanstack/react-router";
import {
  LegalDocument,
  LegalSection,
  LegalP,
  LegalList,
  LegalLi,
  LegalLink,
  LegalTable,
} from "@/components/LegalDocument";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies — JM GEO" },
      { name: "description", content: "Política de cookies del sitio web jmgeo.es de JM GEO, S.L." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalDocument title="Política de cookies" updated="18 de junio de 2026">
      <LegalP>
        Esta política explica qué son las cookies, qué tipos utiliza el sitio web{" "}
        <LegalLink href="https://jmgeo.es">jmgeo.es</LegalLink>, titularidad de JM GEO, S.L., y cómo el
        usuario puede gestionarlas.
      </LegalP>

      <LegalSection heading="1. ¿Qué son las cookies?">
        <LegalP>
          Una cookie es un pequeño archivo de texto que un sitio web almacena en el navegador o dispositivo
          del usuario cuando lo visita. Las cookies permiten que el sitio recuerde información sobre la
          visita y, en algunos casos, recabar datos de navegación.
        </LegalP>
      </LegalSection>

      <LegalSection heading="2. Cookies que utiliza este sitio">
        <LegalP>
          jmgeo.es es un sitio web esencialmente informativo. <strong>No utilizamos cookies propias de
          análisis, publicidad ni seguimiento</strong> de los usuarios. Únicamente pueden emplearse cookies
          técnicas estrictamente necesarias para el correcto funcionamiento del sitio y, en la página de
          contacto, cookies de un servicio de terceros (Google Maps) al cargar el mapa de ubicación.
        </LegalP>
        <LegalTable
          head={["Cookie / Proveedor", "Tipo", "Finalidad", "Duración"]}
          rows={[
            [
              "Técnicas (propias)",
              "Necesaria",
              "Permiten la navegación y el uso de las funciones básicas del sitio.",
              "Sesión",
            ],
            [
              "Google Maps (Google LLC)",
              "Terceros",
              "Se cargan únicamente en la página de contacto al mostrar el mapa de ubicación. Las gestiona Google.",
              "Según política de Google",
            ],
          ]}
        />
        <LegalP>
          Las cookies que pueda instalar Google a través del mapa embebido se rigen por la política de
          privacidad de Google, disponible en{" "}
          <LegalLink href="https://policies.google.com/privacy">policies.google.com/privacy</LegalLink>.
        </LegalP>
      </LegalSection>

      <LegalSection heading="3. Cómo gestionar o desactivar las cookies">
        <LegalP>
          El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo
          configurando las opciones de su navegador. A continuación se indican los enlaces de ayuda de los
          navegadores más habituales:
        </LegalP>
        <LegalList>
          <LegalLi>
            <LegalLink href="https://support.google.com/chrome/answer/95647">Google Chrome</LegalLink>
          </LegalLi>
          <LegalLi>
            <LegalLink href="https://support.mozilla.org/es/kb/Borrar%20cookies">Mozilla Firefox</LegalLink>
          </LegalLi>
          <LegalLi>
            <LegalLink href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">Safari</LegalLink>
          </LegalLi>
          <LegalLi>
            <LegalLink href="https://support.microsoft.com/es-es/microsoft-edge">Microsoft Edge</LegalLink>
          </LegalLi>
        </LegalList>
        <LegalP>
          La desactivación de las cookies técnicas podría afectar al correcto funcionamiento de algunas
          partes del sitio web.
        </LegalP>
      </LegalSection>

      <LegalSection heading="4. Cambios en la política de cookies">
        <LegalP>
          JM GEO, S.L. podrá actualizar esta política de cookies en función de novedades legislativas o
          técnicas. Se recomienda al usuario revisarla periódicamente. Para cualquier duda puede escribir a{" "}
          <LegalLink href="mailto:administracion@jmgeo.es">administracion@jmgeo.es</LegalLink>.
        </LegalP>
      </LegalSection>
    </LegalDocument>
  );
}
