import { createFileRoute } from "@tanstack/react-router";
import { LegalPlaceholder } from "@/components/LegalPlaceholder";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies — JM GEO" },
      { name: "description", content: "Política de cookies de JM GEO." },
    ],
  }),
  component: () => (
    <LegalPlaceholder
      eyebrow="LEGAL"
      title="Política de cookies"
    />
  ),
});
