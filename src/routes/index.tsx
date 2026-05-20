import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { TechStack } from "@/components/home/TechStack";
import { Process } from "@/components/home/Process";
import { FinalCta } from "@/components/home/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JMGeo — Topografía LIDAR con drones" },
      { name: "description", content: "Captura de datos LiDAR aérea con drones para topografía de precisión. Operamos en España, Reino Unido, Italia, Portugal, Francia y Alemania." },
      { property: "og:title", content: "JMGeo — Topografía LIDAR con drones" },
      { property: "og:description", content: "Captura LiDAR aérea precisa para infraestructura, energía y obra civil. Seis países europeos." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <WhatWeDo />
      <TechStack />
      <Process />
      <FinalCta />
    </>
  );
}
