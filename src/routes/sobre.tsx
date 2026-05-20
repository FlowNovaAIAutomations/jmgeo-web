import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [{ title: "Sobre — JMGeo" }] }),
  component: () => <PagePlaceholder index="02 / Compañía" titleKey="pages.about.title" />,
});
