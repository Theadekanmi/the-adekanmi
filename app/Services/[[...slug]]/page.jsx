"use client"
// optional catch all routes
"use client";
import { useParams, useRouter } from "next/navigation";

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug || []; // Get URL params or default to empty array

  // Define all available services
  const services = ["web-development", "ui-design"];

  // Get current index of the service
  const currentIndex = services.indexOf(slug.join("-"));

  // Determine the next service cyclically
  const nextService = services[(currentIndex + 1) % services.length];

  // Define service data dynamically
  const serviceData = {
    "web-development": {
      title: "Web Development",
      description: "Explore our web development services, including front-end, back-end, and full-stack solutions.",
    },
    "ui-design": {
      title: "UI Design",
      description: "We craft visually stunning and user-friendly UI designs for websites and apps.",
    },
  };

  // Fetch dynamic content or fallback to "Our Services"
  const service = serviceData[slug.join("-")] || {
    title: "Our Services",
    description: "Explore our wide range of services including web development, UI design, and more.",
  };

  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold">{service.title}</h1>
      <p className="text-lg">{service.description}</p>

      {/* Button to cycle through services dynamically */}
      {nextService && (
        <button 
          onClick={() => router.push(`/Services/${nextService}`)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6"
        >
          Go to {nextService.replace("-", " ").toUpperCase()}
        </button>
      )}
    </section>
  );
}


