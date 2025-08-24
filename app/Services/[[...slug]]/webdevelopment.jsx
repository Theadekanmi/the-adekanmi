"use client";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function WebDevelopment() {
  return (
    <section className="w-full px-6 py-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-500">
      {/* SEO H1 Heading */}
      <h1 className="sr-only">Web Development Services | Custom Websites & Web Applications</h1>
      
      <div className="max-w-6xl mx-auto text-center">
        <RocketLaunchIcon className="h-16 w-16 text-blue-600 mb-6 animate-bounce" />
        <h2 className="text-4xl font-bold text-blue-500 mb-4">Web Development</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          Robust, scalable, and fast web development services tailored to meet business goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevServices.map((item, idx) => (
            <WebDevCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

const webDevServices = [
  {
    title: "Full-Stack Solutions",
    description: "End-to-end web apps using Next.js, Express, and Node.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748716812/frontend_yb8vpx.webp",
  },
  {
    title: "API Integrations",
    description: "Connect with third-party services and cloud platforms.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748718970/api_xlpkrz.webp",
  },
  {
    title: "Real-time Apps",
    description: "Build interactive, real-time applications with websockets.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748719540/realtime_znmliw.webp",
  },
];

function WebDevCard({ title, description, image }) {
  return (
    <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="relative w-full h-52 mb-4 rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{title}</h4>
      <p className="text-gray-500 dark:text-gray-300">{description}</p>
    </div>
  );
}
