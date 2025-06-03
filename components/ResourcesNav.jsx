"use client";
import Link from "next/link";

export default function ResourcesNav() {
  return (
    <div className="mt-16 text-center space-y-3">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Explore More Resources</h4>
      <div className="flex flex-wrap gap-4 justify-center text-sm">
        <Link href="/Resources/insights" className="text-blue-600 hover:underline dark:text-blue-400">Insights</Link>
        <Link href="/Resources/toolkits" className="text-blue-600 hover:underline dark:text-blue-400">Toolkits</Link>
        <Link href="/Resources/playground" className="text-blue-600 hover:underline dark:text-blue-400">Playground</Link>
        <Link href="/Resources/faq" className="text-blue-600 hover:underline dark:text-blue-400">FAQ</Link>
      </div>
    </div>
  );
}
