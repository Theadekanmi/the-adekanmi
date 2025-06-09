"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGitAlt,
  FaReact,
  FaGithub,
  FaPython,
  FaHtml5,
  FaBootstrap,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlask,
  SiTailwindcss,
  SiVercel,
  SiDjango,
} from "react-icons/si";

const skills = [
  {
    name: "Git",
    level: 90,
    icon: <FaGitAlt size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  
  {
    name: "Next.js",
    level: 80,
    icon: <SiNextdotjs size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Github",
    level: 85,
    icon: <FaGithub size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Javascript",
    level: 80,
    icon: <FaJsSquare size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Python",
    level: 75,
    icon: <FaPython size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Django",
    level: 75,
    icon: <SiDjango size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Flask",
    level: 70,
    icon: <SiFlask size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "SQL",
    level: 70,
    icon: <FaDatabase size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Html",
    level: 90,
    icon: <FaHtml5 size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Tailwind Css",
    level: 85,
    icon: <SiTailwindcss size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Bootstrap",
    level: 75,
    icon: <FaBootstrap size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Vercel",
    level: 75,
    icon: <SiVercel size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full px-6 py-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-4">Technical Skills</h2>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12">
          My Development Expertise — A comprehensive overview of my technical toolkit.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="w-full sm:w-1/2 lg:w-1/4 bg-white dark:bg-darkCard p-6 rounded-xl shadow-md text-center transition hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center justify-center">
                {skill.icon}
                <span>{skill.name}</span>
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Proficiency: {skill.level}%
              </p>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div
                  className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
