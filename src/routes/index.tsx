import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { Equipment } from "@/components/home/Equipment";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Projects } from "@/components/home/Projects";
import { FinalCta } from "@/components/home/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JM GEO · Topografía con drones y LiDAR" },
      { name: "description", content: "JM GEO. Especialistas en captura de datos LiDAR aéreos con drones. Topografía técnica de precisión en España, Reino Unido, Italia, Portugal, Francia y Alemania." },
      { property: "og:title", content: "JM GEO · Topografía con drones y LiDAR" },
      { property: "og:description", content: "JM GEO. Especialistas en captura de datos LiDAR aéreos con drones. Topografía técnica de precisión en España, Reino Unido, Italia, Portugal, Francia y Alemania." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Positioning />
      <Equipment />
      <WhatWeDo />
      <FinalCta />
    </>
  );
}
