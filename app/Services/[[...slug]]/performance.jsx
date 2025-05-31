"use client";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";

export default function performane() {
  return (
    <section className="w-full px-6 py-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <ChartBarSquareIcon className="h-16 w-16 text-blue-600 mb-6 animate-pulse" />
        <h2 className="text-4xl font-bold text-blue-500 mb-4">Performance Optimization</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          Boost your website’s speed and responsiveness across all devices with performance-first engineering.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Core Web Vitals" description="Improve CLS, FID, and LCP for SEO and user satisfaction." />
          <ServiceCard title="Code Splitting" description="Minimize JavaScript load times with dynamic imports." />
          <ServiceCard title="Image & Asset Optimization" description="Efficient media delivery via modern formats and lazy loading." />
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
