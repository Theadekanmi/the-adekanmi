"use client";
import ResourcesNav from "@/components/ResourcesNav";
import { motion } from "framer-motion";

export default function Insight() {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Deep Insights & Learning
        </motion.h2>

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
