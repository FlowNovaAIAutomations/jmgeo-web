import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  LegalDocument,
  LegalSection,
  LegalP,
  LegalList,
  LegalLi,
  LegalLink,
} from "@/components/LegalDocument";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — JM GEO" },
      { name: "description", content: "Política de privacidad de JM GEO, S.L. conforme al RGPD y la LOPDGDD." },
    ],
  }),
  component: PrivacidadPage,
});

// Dos versiones JSX seleccionadas por idioma. Los nombres propios de normas y
// organismos españoles (LOPDGDD, AEPD…) se mantienen en español en la versión
// inglesa; el RGPD se referencia por su nombre inglés oficial (GDPR).
function PrivacidadPage() {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? <PrivacidadEn /> : <PrivacidadEs />;
}

function PrivacidadEs() {
  return (
    <LegalDocument title="Política de privacidad" updated="18 de junio de 2026">
      <LegalP>
        En JM GEO, S.L. nos comprometemos a proteger la privacidad de los usuarios y a tratar sus datos
        personales conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de 5 de
        diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
      </LegalP>

      <LegalSection heading="1. Responsable del tratamiento">
        <LegalList>
          <LegalLi>
            <strong>Titular:</strong> JM GEO, S.L.
          </LegalLi>
          <LegalLi>
            <strong>NIF:</strong> B75609180
          </LegalLi>
          <LegalLi>
            <strong>Domicilio:</strong> Maestra Juana Sena, 5 - 5, 46910 Benetússer (Valencia), España
          </LegalLi>
          <LegalLi>
            <strong>Correo electrónico:</strong>{" "}
            <LegalLink href="mailto:administracion@jmgeo.es">administracion@jmgeo.es</LegalLink>
          </LegalLi>
        </LegalList>
      </LegalSection>

      <LegalSection heading="2. Datos que tratamos">
        <LegalP>
          Tratamos los datos personales que el usuario nos facilita voluntariamente a través del formulario
          de contacto del sitio web:
        </LegalP>
        <LegalList>
          <LegalLi>Nombre completo.</LegalLi>
          <LegalLi>Empresa u organización (opcional).</LegalLi>
          <LegalLi>Dirección de correo electrónico.</LegalLi>
          <LegalLi>Teléfono (opcional).</LegalLi>
          <LegalLi>Tipo de proyecto y el contenido del mensaje que el usuario decida incluir.</LegalLi>
        </LegalList>
        <LegalP>
          No recabamos categorías especiales de datos. Le rogamos que no incluya en el mensaje información
          sensible que no resulte necesaria para atender su consulta.
        </LegalP>
      </LegalSection>

      <LegalSection heading="3. Finalidad del tratamiento">
        <LegalP>Los datos facilitados se utilizan únicamente para:</LegalP>
        <LegalList>
          <LegalLi>Atender y responder a las consultas y solicitudes de presupuesto recibidas.</LegalLi>
          <LegalLi>Gestionar la relación comercial que, en su caso, pueda derivarse del contacto.</LegalLi>
        </LegalList>
        <LegalP>
          No se utilizan los datos para elaborar perfiles ni se toman decisiones automatizadas con efectos
          jurídicos sobre el usuario.
        </LegalP>
      </LegalSection>

      <LegalSection heading="4. Legitimación">
        <LegalP>
          La base jurídica del tratamiento es el <strong>consentimiento</strong> del interesado (art. 6.1.a
          del RGPD), que presta al marcar la casilla de aceptación y enviar el formulario, así como la
          aplicación de <strong>medidas precontractuales</strong> solicitadas por el propio usuario (art.
          6.1.b del RGPD) cuando la consulta tiene por objeto la posible contratación de nuestros servicios.
        </LegalP>
      </LegalSection>

      <LegalSection heading="5. Conservación de los datos">
        <LegalP>
          Conservaremos los datos durante el tiempo necesario para atender la consulta y, en su caso,
          mientras se mantenga la relación comercial. Una vez finalizada, los datos se conservarán
          debidamente bloqueados durante los plazos legalmente exigibles para atender posibles
          responsabilidades, tras los cuales serán suprimidos.
        </LegalP>
      </LegalSection>

      <LegalSection heading="6. Destinatarios y encargados del tratamiento">
        <LegalP>
          No cedemos datos a terceros, salvo obligación legal. Para la prestación del servicio nos apoyamos
          en proveedores que actúan como encargados del tratamiento, con los que se han suscrito los
          correspondientes contratos conforme al art. 28 del RGPD:
        </LegalP>
        <LegalList>
          <LegalLi>
            <strong>Vercel Inc.</strong> — alojamiento y publicación del sitio web.
          </LegalLi>
          <LegalLi>
            <strong>Resend (Plus Five Five, Inc.)</strong> — envío de los correos generados por el
            formulario de contacto.
          </LegalLi>
        </LegalList>
        <LegalP>
          Algunos de estos proveedores pueden estar ubicados fuera del Espacio Económico Europeo. En tales
          casos, las transferencias internacionales se realizan con las debidas garantías (cláusulas
          contractuales tipo de la Comisión Europea u otros mecanismos válidos previstos en el RGPD).
        </LegalP>
      </LegalSection>

      <LegalSection heading="7. Derechos del usuario">
        <LegalP>
          El usuario puede ejercer en cualquier momento los siguientes derechos dirigiéndose a{" "}
          <LegalLink href="mailto:administracion@jmgeo.es">administracion@jmgeo.es</LegalLink>, indicando el
          derecho que desea ejercer y adjuntando, en su caso, copia de un documento que acredite su
          identidad:
        </LegalP>
        <LegalList>
          <LegalLi>Acceso a sus datos personales.</LegalLi>
          <LegalLi>Rectificación de los datos inexactos.</LegalLi>
          <LegalLi>Supresión de los datos cuando ya no sean necesarios.</LegalLi>
          <LegalLi>Limitación u oposición al tratamiento.</LegalLi>
          <LegalLi>Portabilidad de los datos.</LegalLi>
          <LegalLi>Retirar el consentimiento prestado, sin que ello afecte a la licitud del tratamiento previo.</LegalLi>
        </LegalList>
        <LegalP>
          Asimismo, si considera que sus derechos no han sido debidamente atendidos, tiene derecho a
          presentar una reclamación ante la Agencia Española de Protección de Datos (
          <LegalLink href="https://www.aepd.es">www.aepd.es</LegalLink>).
        </LegalP>
      </LegalSection>

      <LegalSection heading="8. Seguridad">
        <LegalP>
          JM GEO, S.L. adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad
          de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizados,
          teniendo en cuenta el estado de la técnica, la naturaleza de los datos y los riesgos a que están
          expuestos.
        </LegalP>
      </LegalSection>

      <LegalSection heading="9. Cambios en la política de privacidad">
        <LegalP>
          Esta política podrá modificarse para adaptarse a novedades legislativas o cambios en los
          tratamientos. Se recomienda revisar su contenido periódicamente; la fecha de la última
          actualización figura al inicio de este documento.
        </LegalP>
      </LegalSection>
    </LegalDocument>
  );
}

function PrivacidadEn() {
  return (
    <LegalDocument title="Privacy policy" updated="18 June 2026">
      <LegalP>
        At JM GEO, S.L. we are committed to protecting users' privacy and to processing their personal data
        in accordance with Regulation (EU) 2016/679 (GDPR) and the Ley Orgánica 3/2018, de 5 de diciembre,
        de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) — the Spanish data
        protection law.
      </LegalP>

      <LegalSection heading="1. Data controller">
        <LegalList>
          <LegalLi>
            <strong>Owner:</strong> JM GEO, S.L.
          </LegalLi>
          <LegalLi>
            <strong>Tax ID (NIF):</strong> B75609180
          </LegalLi>
          <LegalLi>
            <strong>Registered address:</strong> Maestra Juana Sena, 5 - 5, 46910 Benetússer (Valencia),
            Spain
          </LegalLi>
          <LegalLi>
            <strong>Email:</strong>{" "}
            <LegalLink href="mailto:administracion@jmgeo.es">administracion@jmgeo.es</LegalLink>
          </LegalLi>
        </LegalList>
      </LegalSection>

      <LegalSection heading="2. Data we process">
        <LegalP>
          We process the personal data that the user voluntarily provides to us through the website's
          contact form:
        </LegalP>
        <LegalList>
          <LegalLi>Full name.</LegalLi>
          <LegalLi>Company or organisation (optional).</LegalLi>
          <LegalLi>Email address.</LegalLi>
          <LegalLi>Phone number (optional).</LegalLi>
          <LegalLi>Project type and the content of the message the user chooses to include.</LegalLi>
        </LegalList>
        <LegalP>
          We do not collect special categories of data. Please do not include sensitive information in your
          message that is not necessary to deal with your enquiry.
        </LegalP>
      </LegalSection>

      <LegalSection heading="3. Purpose of processing">
        <LegalP>The data provided is used solely to:</LegalP>
        <LegalList>
          <LegalLi>Handle and respond to enquiries and quote requests received.</LegalLi>
          <LegalLi>Manage any business relationship that may arise from the contact.</LegalLi>
        </LegalList>
        <LegalP>
          The data is not used for profiling, nor are automated decisions with legal effects taken about the
          user.
        </LegalP>
      </LegalSection>

      <LegalSection heading="4. Legal basis">
        <LegalP>
          The legal basis for processing is the data subject's <strong>consent</strong> (Art. 6(1)(a) GDPR),
          given by ticking the acceptance box and submitting the form, as well as the application of{" "}
          <strong>pre-contractual measures</strong> requested by the user (Art. 6(1)(b) GDPR) where the
          enquiry concerns the possible engagement of our services.
        </LegalP>
      </LegalSection>

      <LegalSection heading="5. Data retention">
        <LegalP>
          We will keep the data for as long as necessary to deal with the enquiry and, where applicable, for
          the duration of the business relationship. Once it has ended, the data will be kept duly blocked
          for the legally required periods to address any potential liabilities, after which it will be
          deleted.
        </LegalP>
      </LegalSection>

      <LegalSection heading="6. Recipients and data processors">
        <LegalP>
          We do not disclose data to third parties, except where legally required. To provide the service we
          rely on providers acting as data processors, with whom the corresponding contracts have been
          signed in accordance with Art. 28 GDPR:
        </LegalP>
        <LegalList>
          <LegalLi>
            <strong>Vercel Inc.</strong> — hosting and publication of the website.
          </LegalLi>
          <LegalLi>
            <strong>Resend (Plus Five Five, Inc.)</strong> — sending of the emails generated by the contact
            form.
          </LegalLi>
        </LegalList>
        <LegalP>
          Some of these providers may be located outside the European Economic Area. In such cases,
          international transfers are carried out with the appropriate safeguards (European Commission
          standard contractual clauses or other valid mechanisms provided for in the GDPR).
        </LegalP>
      </LegalSection>

      <LegalSection heading="7. User rights">
        <LegalP>
          The user may exercise the following rights at any time by writing to{" "}
          <LegalLink href="mailto:administracion@jmgeo.es">administracion@jmgeo.es</LegalLink>, indicating
          the right they wish to exercise and attaching, where applicable, a copy of a document proving
          their identity:
        </LegalP>
        <LegalList>
          <LegalLi>Access to their personal data.</LegalLi>
          <LegalLi>Rectification of inaccurate data.</LegalLi>
          <LegalLi>Erasure of data when it is no longer necessary.</LegalLi>
          <LegalLi>Restriction of or objection to processing.</LegalLi>
          <LegalLi>Data portability.</LegalLi>
          <LegalLi>Withdrawal of consent, without affecting the lawfulness of prior processing.</LegalLi>
        </LegalList>
        <LegalP>
          Likewise, if you consider that your rights have not been properly addressed, you have the right to
          lodge a complaint with the Agencia Española de Protección de Datos, the Spanish data protection
          authority (<LegalLink href="https://www.aepd.es">www.aepd.es</LegalLink>).
        </LegalP>
      </LegalSection>

      <LegalSection heading="8. Security">
        <LegalP>
          JM GEO, S.L. adopts the technical and organisational measures necessary to guarantee the security
          of personal data and to prevent its alteration, loss, unauthorised processing or access, taking
          into account the state of the art, the nature of the data and the risks to which it is exposed.
        </LegalP>
      </LegalSection>

      <LegalSection heading="9. Changes to the privacy policy">
        <LegalP>
          This policy may be amended to adapt to legislative developments or changes in processing. We
          recommend reviewing its content periodically; the date of the last update appears at the top of
          this document.
        </LegalP>
      </LegalSection>
    </LegalDocument>
  );
}
