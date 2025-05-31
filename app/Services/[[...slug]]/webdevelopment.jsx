"use client";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function WebDevelopment() {
  return (
    <section className="w-full px-6 py-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <RocketLaunchIcon className="h-16 w-16 text-blue-600 mb-6 animate-bounce" />
        <h2 className="text-4xl font-bold text-blue-500 mb-4">Web Development</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          Robust, scalable, and fast web development services tailored to meet business goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Full-Stack Solutions" description="End-to-end web apps using Next.js, Express, and Node." />
          <ServiceCard title="API Integrations" description="Connect with third-party services and cloud platforms." />
          <ServiceCard title="Real-time Apps" description="Build interactive, real-time applications with websockets." />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-darkCard shadow-md hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{title}</h4>
      <p className="text-gray-500 dark:text-gray-300">{description}</p>
    </div>
  );
}
