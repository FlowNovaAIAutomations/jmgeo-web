import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/")({
  component: () => <PagePlaceholder index="00 / Home" titleKey="pages.home.title" />,
});
