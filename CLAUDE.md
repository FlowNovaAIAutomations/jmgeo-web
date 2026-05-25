# CLAUDE.md — Web pública JMGeo

> Este archivo da contexto a Claude Code sobre el proyecto. Vive en la raíz del repositorio y se versiona en Git para que todo el equipo trabaje con el mismo contexto.

## Qué es este proyecto

Web corporativa pública de **JMGeo**, empresa española de topografía técnica especializada en **captura de datos LiDAR con drones**. Es la cara pública de la empresa, pensada para enseñar en ferias del sector y captar clientes. NO es la aplicación de clientes (eso es un proyecto separado, ver sección "Relación con el ERP").

Cliente final: Javier (Javi), responsable de JMGeo.
Desarrolla: FlowNova (Daniel + equipo).

## Estado y urgencia

- La web tiene una **primera versión comprometida para la semana del 25** (feria). Prioridad máxima: que esté presentable y publicada a tiempo.
- Construida inicialmente en Lovable, exportada a este repositorio para continuar en Claude Code.
- Se despliega vía GitHub → Vercel → dominio **jmgeo.es**.

## Posicionamiento (IMPORTANTE para textos y diseño)

JMGeo se posiciona como **especialista en drones + LiDAR**, NO como topografía generalista. La empresa también hace ejecución de obra, replanteos y levantamientos en obra, pero **eso NO debe aparecer en la web** por decisión comercial del cliente. Todo el mensaje gira en torno a captura aérea de datos LiDAR, fotogrametría, SLAM y nubes de puntos.

Opera en 6 países europeos: España, Reino Unido, Italia, Portugal, Francia, Alemania.

## Stack técnico

- React + Vite
- Tailwind CSS
- Framer Motion (animaciones)
- react-router (multipágina)
- Arquitectura multi-idioma preparada con react-i18next (de momento SOLO español publicado; el inglés se añadirá en fase posterior — NO trabajar el inglés todavía salvo petición explícita)
- Deploy: Vercel conectado a GitHub, dominio jmgeo.es

## Identidad visual (estética actual: minimalista suave)

El cliente pidió una línea muy minimalista, limpia, con suavidad cromática. Paleta vigente:

- Fondo principal: `#F8FAFB` (blanco azulado muy suave)
- Fondo alternativo de secciones: `#EDF2F6`
- Texto principal: `#3A4A5A` (azul-gris suave, NO navy duro)
- Texto secundario: `#8595A3`
- Acento azul suave: `#6B93B8` (uso moderado y elegante)
- Secciones oscuras (con moderación): `#4A5E70`
- Bordes/líneas: `#E2E9EE` (muy sutiles)

Reglas de estilo:
- **Bordes redondeados** consistentes: botones 12px (o pill), tarjetas/imágenes/vídeos 20px, inputs 12px
- **Mucho espacio en blanco**, padding vertical generoso entre secciones (160-200px)
- **Evitar contrastes fuertes**: transiciones suaves entre secciones, nada de bloques negros/navy duros
- **Sombras suaves y difusas** en lugar de bordes marcados
- **Header integrado**: el menú superior no debe parecer una banda separada; transparente sobre el contenido, fondo sutil al hacer scroll
- Tipografía moderna y elegante, sans-serif limpia (no rígida ni excesivamente cuadrada)
- Elementos decorativos al mínimo

## Estructura de páginas

1. `/` — Home
2. `/tecnologia` — Página estrella (drones + LiDAR, sustituye a una "Servicios" tradicional, sin lista cerrada de servicios)
3. `/sobre` — Sobre JMGeo
4. `/contacto` — Contacto con formulario
5. `/clientes` — Pantalla "Próximamente" (es el enlace al futuro ERP; ver sección siguiente)
6. Placeholders legales: `/aviso-legal`, `/privacidad`, `/cookies`

## Relación con el ERP (proyecto SEPARADO)

El "Área de clientes" de esta web es solo un **enlace** al ERP, que es una aplicación independiente en otro repositorio, desplegada en el subdominio **app.jmgeo.es** (o clientes.jmgeo.es).

- Mientras el ERP no exista: `/clientes` muestra la pantalla "Próximamente".
- Cuando el ERP esté listo: el botón "Área clientes" del header apuntará a app.jmgeo.es.
- **NO mezclar el código del ERP con esta web.** Son proyectos distintos por seguridad y mantenibilidad.

## Hero actual (textos vigentes tras feedback del cliente)

Lema principal en 3 líneas, SIN punto final:
```
Midiendo el presente
una línea
Construyendo el futuro
```
Subtítulo: "Captura LiDAR aérea, fotogrametría, SLAM y nubes de puntos para operaciones técnicas en toda Europa."
Badge destacado: "Tus proyectos, datos y levantamientos siempre accesibles desde cualquier lugar."

## Datos de contacto reales (NO inventar otros)

- Teléfono: +34 640 266 724
- Email: javier@jmgeo.es (de momento usamos este, no info@)
- Dirección: Maestra Juana Senent 5, 5, Benetússer, 46910, Valencia, España
- Formulario de contacto: envía a javier@jmgeo.es (conectar con Resend cuando esté la cuenta; mientras tanto el formulario solo simula el envío)

## Materiales

- Logo: en `/public/` (PNG navy sobre transparente, con JM grande y GEO con rosa de los vientos como "O"). NO modificar el logo, es marca registrada del cliente.
- Imágenes: provisionalmente stock (Unsplash) o ambientales generadas con IA SIN replicar proyectos reales del cliente. El cliente enviará material propio (fotos y 3 vídeos de 3 servicios) próximamente. Hay placeholders de vídeo preparados en Home y Tecnología.

## Convenciones de trabajo

- Toda la web en **español**.
- Commits frecuentes y descriptivos en español.
- Verificar visualmente cada cambio en local (`npm run dev`) y en el deploy antes de dar por buena una tarea.
- No introducir dependencias pesadas sin necesidad.
- Mantener coherencia visual estricta entre todas las páginas.

## Cosas que NO hacer

- NO mostrar la línea de negocio de obra/replanteos en la web.
- NO trabajar la versión en inglés todavía (consume esfuerzo, fase posterior).
- NO mezclar código del ERP aquí.
- NO modificar el logo del cliente.
- NO usar contrastes fuertes ni la paleta antigua (navy duro #14283A, ámbar #B98418) — fue sustituida por la paleta suave.
- NO meter fotos que parezcan de proyectos reales de clientes sin confirmación (riesgo NDA).
