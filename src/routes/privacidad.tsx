import { createFileRoute } from "@tanstack/react-router";
import { LegalPlaceholder } from "@/components/LegalPlaceholder";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — JM GEO" },
      { name: "description", content: "Política de privacidad de JM GEO." },
    ],
  }),
  component: () => (
    <LegalPlaceholder
      eyebrow="LEGAL"
      title="Política de privacidad"
    />
  ),
});
