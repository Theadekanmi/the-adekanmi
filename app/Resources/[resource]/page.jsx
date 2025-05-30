"use client"
// Dynamic routes 
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResourcePage() {
  const params = useParams();
  const router = useRouter();
  const resourceType = params.resource; // Current resource from URL

  // Define available resources
  const resources = ["insights", "toolkits", "playground", "faq"];
  
  // Find the index of the current resource
  const currentIndex = resources.indexOf(resourceType);
  
  // Determine the next resource cyclically
  const nextResource = resources[(currentIndex + 1) % resources.length];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{resourceType} Resources</h1>
        <p className="text-lg mb-6">
          You are viewing the {resourceType} section. Here, you'll find valuable insights, toolkits, and interactive playgrounds.
        </p>

        {/* Button to cycle through Resources dynamically */}
        <button 
          onClick={() => router.push(`/Resources/${nextResource}`)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6"
        >
          Go to {nextResource.charAt(0).toUpperCase() + nextResource.slice(1)}
        </button>
      </div>
    </section>
  );
}

