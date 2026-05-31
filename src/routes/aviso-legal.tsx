import { createFileRoute } from "@tanstack/react-router";
import { LegalPlaceholder } from "@/components/LegalPlaceholder";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal — JM GEO" },
      { name: "description", content: "Aviso legal de JM GEO." },
    ],
  }),
  component: () => (
    <LegalPlaceholder
      eyebrow="LEGAL"
      title="Aviso legal"
    />
  ),
});
