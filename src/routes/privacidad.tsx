import { createFileRoute } from "@tanstack/react-router";
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

function PrivacidadPage() {
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
