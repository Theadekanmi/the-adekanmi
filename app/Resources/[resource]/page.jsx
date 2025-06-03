"use client";
import { useParams } from "next/navigation";
import Insight from "@/components/Insight";
import Toolkits from "@/components/Toolkits";
import Playground from "@/components/Playground";
import Faq from "@/components/Faq";

export default function ResourcePage() {
  const { resource } = useParams();

  const components = {
    insight: <Insight />,
    toolkits: <Toolkits />,
    playground: <Playground />,
    faq: <Faq />,
  };

  const ResourceComponent = components[resource?.toLowerCase()];

  return ResourceComponent || (
    <section className="min-h-screen flex items-center justify-center text-center text-gray-800 dark:text-white">
      <div>
        <h1 className="text-3xl font-bold mb-2">Resource Not Found</h1>
        <p className="text-lg">Please check the URL or select a valid resource.</p>
      </div>
    </section>
  );
}
