import { createFileRoute } from "@tanstack/react-router";
import {
  LegalDocument,
  LegalSection,
  LegalP,
  LegalList,
  LegalLi,
  LegalLink,
} from "@/components/LegalDocument";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal — JM GEO" },
      { name: "description", content: "Aviso legal e información del titular del sitio web jmgeo.es, JM GEO, S.L." },
    ],
  }),
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
  return (
    <LegalDocument title="Aviso legal" updated="18 de junio de 2026">
      <LegalP>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
        la Información y de Comercio Electrónico (LSSI-CE), se ponen a disposición de los usuarios los datos
        identificativos del titular de este sitio web.
      </LegalP>

      <LegalSection heading="1. Titular del sitio web">
        <LegalList>
          <LegalLi>
            <strong>Denominación social:</strong> JM GEO, S.L.
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
          <LegalLi>
            <strong>Teléfono:</strong> +34 640 266 724
          </LegalLi>
          <LegalLi>
            <strong>Datos registrales:</strong> Inscrita en el Registro Mercantil de Valencia.
          </LegalLi>
        </LegalList>
      </LegalSection>

      <LegalSection heading="2. Objeto">
        <LegalP>
          El presente aviso legal regula el acceso, la navegación y el uso del sitio web{" "}
          <LegalLink href="https://jmgeo.es">jmgeo.es</LegalLink> (en adelante, «el sitio web»), cuya
          finalidad es ofrecer información sobre los servicios de topografía y captura de datos LiDAR con
          drones prestados por JM GEO, S.L., así como facilitar el contacto con potenciales clientes.
        </LegalP>
        <LegalP>
          El acceso al sitio web es gratuito y atribuye la condición de usuario, que implica la aceptación
          plena de las condiciones recogidas en este aviso legal. Si el usuario no estuviera de acuerdo con
          su contenido, deberá abstenerse de utilizar el sitio web.
        </LegalP>
      </LegalSection>

      <LegalSection heading="3. Condiciones de uso">
        <LegalP>El usuario se compromete a hacer un uso adecuado y lícito del sitio web y, en particular, a no:</LegalP>
        <LegalList>
          <LegalLi>
            Utilizar el sitio web para fines ilícitos o contrarios a la buena fe, a la moral o al orden
            público.
          </LegalLi>
          <LegalLi>
            Introducir o difundir virus informáticos o cualquier otro sistema que pueda causar daños en los
            sistemas del titular o de terceros.
          </LegalLi>
          <LegalLi>
            Intentar acceder, utilizar o manipular los datos del titular, de terceros proveedores o de otros
            usuarios.
          </LegalLi>
          <LegalLi>
            Reproducir, copiar, distribuir o transformar los contenidos del sitio web salvo autorización
            expresa de su titular.
          </LegalLi>
        </LegalList>
      </LegalSection>

      <LegalSection heading="4. Propiedad intelectual e industrial">
        <LegalP>
          Todos los contenidos del sitio web —textos, fotografías, gráficos, imágenes, iconos, logotipos,
          marcas, diseño, software y el código fuente— son titularidad de JM GEO, S.L. o de terceros que han
          autorizado su uso, y están protegidos por la normativa sobre propiedad intelectual e industrial.
        </LegalP>
        <LegalP>
          Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o
          parcial, sin la autorización expresa y por escrito del titular. En particular, el logotipo y la
          denominación «JM GEO» son signos distintivos de su titular y no podrán ser utilizados sin su
          consentimiento.
        </LegalP>
      </LegalSection>

      <LegalSection heading="5. Responsabilidad">
        <LegalP>
          JM GEO, S.L. no se hace responsable de los daños o perjuicios que pudieran derivarse del uso del
          sitio web, ni de la indisponibilidad temporal del mismo por causas de fuerza mayor o de
          mantenimiento técnico. El titular procura que la información publicada sea veraz y esté
          actualizada, pero no garantiza la ausencia de errores ni la disponibilidad permanente de los
          contenidos.
        </LegalP>
        <LegalP>
          El sitio web puede contener enlaces a páginas de terceros. JM GEO, S.L. no asume responsabilidad
          alguna sobre el contenido, las políticas o las prácticas de dichos sitios externos.
        </LegalP>
      </LegalSection>

      <LegalSection heading="6. Protección de datos">
        <LegalP>
          El tratamiento de los datos personales que el usuario facilite a través del sitio web se rige por
          la <LegalLink href="/privacidad">Política de privacidad</LegalLink> y por la{" "}
          <LegalLink href="/cookies">Política de cookies</LegalLink>.
        </LegalP>
      </LegalSection>

      <LegalSection heading="7. Legislación aplicable y jurisdicción">
        <LegalP>
          El presente aviso legal se rige por la legislación española. Para la resolución de cualquier
          controversia que pudiera derivarse del acceso o uso del sitio web, las partes se someten a los
          juzgados y tribunales que correspondan conforme a la normativa aplicable.
        </LegalP>
      </LegalSection>
    </LegalDocument>
  );
}
