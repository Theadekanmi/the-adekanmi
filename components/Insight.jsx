"use client";
import ResourcesNav from "@/components/ResourcesNav";
import { motion } from "framer-motion";

export default function Insight() {
  return (
    <section className="min-h-screen py-16 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* SEO H1 Heading */}
      <h1 className="sr-only">Web Development Insights & Resources | Latest Trends & Best Practices</h1>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Web Development Insights</h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg mb-8 text-center"
        >
          Thought leadership, web dev best practices, and practical lessons to elevate your skillset.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "The Psychology of UI/UX",
              content:
                "Understanding how design impacts human behavior can lead to more intuitive interfaces. Explore cognitive load, color theory, and interaction flow.",
            },
            {
              title: "Optimizing for Performance",
              content:
                "Learn how to improve load times with lazy loading, code-splitting, and Web Vitals. Real-world examples show measurable gains.",
            },
            {
              title: "Modern State Management",
              content:
                "From Redux Toolkit to Zustand and Jotai, this guide dives deep into managing state efficiently in modern React apps.",
            },
            {
              title: "Accessibility First",
              content:
                "Build inclusive experiences with semantic HTML, ARIA roles, and accessible patterns that scale.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <ResourcesNav/>
    </section>
  );
}
