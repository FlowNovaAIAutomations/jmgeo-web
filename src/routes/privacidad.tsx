import { createFileRoute } from "@tanstack/react-router";
import { LegalPlaceholder } from "@/components/LegalPlaceholder";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — JMGeo" },
      { name: "description", content: "Política de privacidad de JMGeo." },
    ],
  }),
  component: () => (
    <LegalPlaceholder
      eyebrow="LEGAL"
      title="Política de privacidad"
    />
  ),
});
