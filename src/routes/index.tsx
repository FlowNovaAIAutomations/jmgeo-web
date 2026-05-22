import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { TechStack } from "@/components/home/TechStack";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { FinalCta } from "@/components/home/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JMGeo · Topografía con drones y LiDAR" },
      { name: "description", content: "JMGeo. Especialistas en captura de datos LiDAR aéreos con drones. Topografía técnica de precisión en España, Reino Unido, Italia, Portugal, Francia y Alemania." },
      { property: "og:title", content: "JMGeo · Topografía con drones y LiDAR" },
      { property: "og:description", content: "JMGeo. Especialistas en captura de datos LiDAR aéreos con drones. Topografía técnica de precisión en España, Reino Unido, Italia, Portugal, Francia y Alemania." },
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
      <WhatWeDo />
      <TechStack />
      <Process />
      <FinalCta />
    </>
  );
}
