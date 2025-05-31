"use client";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamic imports at the top level
const Overview = dynamic(() => import("./overview"));
const WebDevelopment = dynamic(() => import("./webdevelopment"));
const Performance = dynamic(() => import("./performance"));
const SEO = dynamic(() => import("./seo"));
const Maintenance = dynamic(() => import("./maintenance"));

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug?.[0] || "overview";

  const views = {
    overview: Overview,
    webdevelopment: WebDevelopment,
    performance: Performance,
    seo: SEO,
    maintenance: Maintenance,
  };

  const View = views[slug] || Overview;

  return <View />;
}
