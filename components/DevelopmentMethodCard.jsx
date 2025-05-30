
import React from "react";

const DevelopmentMethodCard = ({ title, description, icon }) => {
  return (
    <div className="flex items-start gap-4 p-5 rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition duration-300">
      <div className="text-blue-600 dark:text-blue-400">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default DevelopmentMethodCard;
