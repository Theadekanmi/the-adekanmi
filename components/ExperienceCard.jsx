import React from "react";

export const ExperienceCard = ({ title, company, period, icon, description }) => {
  return (
    <div className="relative pl-10 border-l-4 border-blue-600 dark:border-blue-400">
      {/* Timeline dot */}
      <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900 flex items-center justify-center">
        {icon}
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
          {company} | {period}
        </p>
        <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200 space-y-1">
          {description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
