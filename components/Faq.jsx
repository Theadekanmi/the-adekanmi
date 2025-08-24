"use client";
import ResourcesNav from "@/components/ResourcesNav";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I provide web development, performance optimization, SEO strategy, and ongoing support.",
  },
  {
    question: "How do I start working with you?",
    answer:
      "You can use the contact form on the site to reach out. We'll discuss your project and set up a timeline.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "Primarily JavaScript, Next.js, React, and Tailwind CSS, but I adapt based on project needs.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, I provide maintenance, updates, and technical assistance after launch.",
  },
  {
    question: "Can I see your previous work?",
    answer:
      "Absolutely. Visit the Projects page to see real examples of my development work.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen py-16 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 py-4 px-6 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {faq.question}
              <span className="ml-2 text-blue-600 dark:text-blue-400">
                {openIndex === index ? (
                  <FiChevronUp size={20} />
                ) : (
                  <FiChevronDown size={20} />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                <p className="text-base text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="text-center mt-10">
          <a
            href="/Resources/insights"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            &larr; Back to Insights
          </a>
        </div>
      </div>
      <ResourcesNav />
    </section>
  );
}
