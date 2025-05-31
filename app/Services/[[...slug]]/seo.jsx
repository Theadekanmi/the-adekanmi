"use client";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function seo() {
  return (
    <section className="w-full px-6 py-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <WrenchScrewdriverIcon className="h-16 w-16 text-blue-600 mb-6 animate-spin-slow" />
        <h2 className="text-4xl font-bold text-blue-500 mb-4">SEO & Web Strategy</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          Get discovered and convert effectively through tailored SEO strategies and optimized architecture.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Technical SEO" description="Structured data, sitemaps, and schema best practices." />
          <ServiceCard title="Content Strategy" description="Keyword mapping, blogs, and landing page optimization." />
          <ServiceCard title="Architecture Planning" description="Scalable URL structures and internal linking tactics." />
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
