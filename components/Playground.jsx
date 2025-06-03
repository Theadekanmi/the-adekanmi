"use client";
import ResourcesNav from "@/components/ResourcesNav";
import { useState } from "react";

const codeSnippets = [
  {
    title: "Basic Next.js Page",
    code: `export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}`,
  },
  {
    title: "Using useEffect in Next.js",
    code: `import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Timer: {count}s</div>;
}`,
  },
  {
    title: "API Route Example",
    code: `// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ message: "Hello from API!" });
}`,
  },
];

export default function Playground() {
  const [index, setIndex] = useState(0);
  const nextSnippet = () => setIndex((index + 1) % codeSnippets.length);

  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Playground</h2>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg shadow-md text-sm font-mono whitespace-pre-wrap">
          <h3 className="text-lg font-semibold text-white mb-2">{codeSnippets[index].title}</h3>
          <pre>{codeSnippets[index].code}</pre>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={nextSnippet}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Next Snippet
          </button>
        </div>
        <div className="text-center mt-10">
          <a href="/Resources/toolkits" className="text-blue-600 hover:underline dark:text-blue-400">
            Go to Toolkits &rarr;
          </a>
        </div>
      </div>
      <ResourcesNav/>
    </section>
  );
}
