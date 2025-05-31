"use client";
import { CodeBracketIcon, ServerIcon, BuildingLibraryIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function overview() {
  return (
    <section id="services" className="w-full px-6 py-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-4 animate-fade-in">
          Services
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12 animate-fade-in delay-100">
          Engineering scalable frontend and backend architectures using modern frameworks and cloud technologies to accelerate growth for startups and enterprise platforms.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* API Development */}
          <ServiceCard
            icon={<ServerIcon className="h-10 w-10 mx-auto text-blue-600 dark:text-blue-400" />}
            title="API Development"
            description="Building scalable RESTful APIs with Django REST, Flask, or Express.js to integrate services seamlessly."
          />

          {/* Frontend Development */}
          <ServiceCard
            icon={<CodeBracketIcon className="h-10 w-10 mx-auto text-blue-600 dark:text-blue-400" />}
            title="Frontend Development"
            description="Crafting interactive, responsive UIs with React.js, Next.js, and Tailwind CSS for modern web applications."
          />

          {/* Database Management */}
          <ServiceCard
            icon={<BuildingLibraryIcon className="h-10 w-10 mx-auto text-blue-600 dark:text-blue-400" />}
            title="Database Management"
            description="Managing relational and non-relational databases to ensure efficiency, reliability, and data integrity."
          />

          {/* African Payment Integration */}
          <ServiceCard
            icon={<ArrowTrendingUpIcon className="h-10 w-10 mx-auto text-blue-600 dark:text-blue-400" />}
            title="African Payment Integration"
            description="Integrating secure and efficient payment solutions like M-Pesa, Flutterwave, and Paystack."
          />

          {/* Performance Optimization */}
          <ServiceCard
            icon={<ArrowTrendingUpIcon className="h-10 w-10 mx-auto text-blue-600 dark:text-blue-400" />}
            title="Performance Optimization"
            description="Enhancing load speed, UX, and Core Web Vitals with code-level and infrastructure optimization."
          />
        </div>
      </div>
    </section>
  );
}

// Inline helper for reusable card
function ServiceCard({ icon, title, description }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-darkCard p-6 rounded-xl shadow-md text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up">
      {icon}
      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 mt-2">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
