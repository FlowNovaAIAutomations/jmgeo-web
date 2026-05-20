import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/tecnologia")({
  head: () => ({ meta: [{ title: "Tecnología — JMGeo" }] }),
  component: () => <PagePlaceholder index="01 / Técnica" titleKey="pages.tech.title" />,
});
