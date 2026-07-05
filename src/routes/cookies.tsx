import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
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

// Dos versiones JSX seleccionadas por idioma (ver aviso-legal.tsx).
function CookiesPage() {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? <CookiesEn /> : <CookiesEs />;
}

function CookiesEs() {
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

function CookiesEn() {
  return (
    <LegalDocument title="Cookie policy" updated="18 June 2026">
      <LegalP>
        This policy explains what cookies are, which types are used by the website{" "}
        <LegalLink href="https://jmgeo.es">jmgeo.es</LegalLink>, owned by JM GEO, S.L., and how the user can
        manage them.
      </LegalP>

      <LegalSection heading="1. What are cookies?">
        <LegalP>
          A cookie is a small text file that a website stores in the user's browser or device when they
          visit it. Cookies allow the site to remember information about the visit and, in some cases, to
          collect browsing data.
        </LegalP>
      </LegalSection>

      <LegalSection heading="2. Cookies used by this site">
        <LegalP>
          jmgeo.es is an essentially informational website. <strong>We do not use our own analytics,
          advertising or tracking cookies</strong>. Only technical cookies strictly necessary for the proper
          functioning of the site may be used and, on the contact page, cookies from a third-party service
          (Google Maps) when the location map is loaded.
        </LegalP>
        <LegalTable
          head={["Cookie / Provider", "Type", "Purpose", "Duration"]}
          rows={[
            [
              "Technical (own)",
              "Necessary",
              "Enable browsing and the use of the site's basic functions.",
              "Session",
            ],
            [
              "Google Maps (Google LLC)",
              "Third party",
              "Loaded only on the contact page when displaying the location map. Managed by Google.",
              "As per Google's policy",
            ],
          ]}
        />
        <LegalP>
          Any cookies that Google may set through the embedded map are governed by Google's privacy policy,
          available at{" "}
          <LegalLink href="https://policies.google.com/privacy">policies.google.com/privacy</LegalLink>.
        </LegalP>
      </LegalSection>

      <LegalSection heading="3. How to manage or disable cookies">
        <LegalP>
          The user can allow, block or delete the cookies installed on their device by configuring their
          browser settings. Help links for the most common browsers are listed below:
        </LegalP>
        <LegalList>
          <LegalLi>
            <LegalLink href="https://support.google.com/chrome/answer/95647">Google Chrome</LegalLink>
          </LegalLi>
          <LegalLi>
            <LegalLink href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">Mozilla Firefox</LegalLink>
          </LegalLi>
          <LegalLi>
            <LegalLink href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">Safari</LegalLink>
          </LegalLi>
          <LegalLi>
            <LegalLink href="https://support.microsoft.com/en-us/microsoft-edge">Microsoft Edge</LegalLink>
          </LegalLi>
        </LegalList>
        <LegalP>
          Disabling technical cookies may affect the proper functioning of some parts of the website.
        </LegalP>
      </LegalSection>

      <LegalSection heading="4. Changes to the cookie policy">
        <LegalP>
          JM GEO, S.L. may update this cookie policy in response to legislative or technical developments.
          Users are advised to review it periodically. For any questions, you can write to{" "}
          <LegalLink href="mailto:administracion@jmgeo.es">administracion@jmgeo.es</LegalLink>.
        </LegalP>
      </LegalSection>
    </LegalDocument>
  );
}
