"use client";
import ResourcesNav from "@/components/ResourcesNav";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const toolkitItems = [
  {
    name: "Developer Portfolio Template",
    description: "A clean and responsive Next.js + Tailwind CSS template.",
    link: "/downloads/portfolio-template.zip",
    type: "Template",
  },
  {
    name: "SEO Checklist (2025 Edition)",
    description: "Everything you need to properly optimize your site.",
    link: "/downloads/seo-checklist.pdf",
    type: "PDF Guide",
  },
  {
    name: "Performance Budget Planner",
    description: "Plan your asset sizes and performance goals.",
    link: "/downloads/performance-planner.xlsx",
    type: "Spreadsheet",
  },
];

export default function Toolkits() {
  return (
    <section className="px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Downloadable Toolkits
        </motion.h2>
        <p className="text-center mb-12 text-gray-600 dark:text-gray-400">
          Explore useful templates, guides, and resources for developers and designers.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {toolkitItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <p className="text-sm text-blue-600 dark:text-blue-400 uppercase mb-1">
                {item.type}
              </p>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <a
                href={item.link}
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
              >
                <FiDownload className="mr-2" />
                Download
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <ResourcesNav/>
    </section>
    
    
  );
}
