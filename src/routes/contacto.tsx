import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/contacto")({
  head: () => ({ meta: [{ title: "Contacto — JMGeo" }] }),
  component: () => <PagePlaceholder index="03 / Contacto" titleKey="pages.contact.title" />,
});
