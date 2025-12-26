"use client";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import {
  FaGitAlt, FaGithub, FaPython, FaHtml5, FaBootstrap, FaJsSquare, FaDatabase, FaReact
} from "react-icons/fa";
import { SiNextdotjs, SiFlask, SiTailwindcss, SiVercel, SiDjango } from "react-icons/si";

const education = [
  {
    institution: "The Oke Ogun Polytechnic, Saki",
    period: "2020 — 2024",
    description: "HND Public Administration"
  },
  {
    institution: "3MTT Nigeria",
    period: "2024",
    description: "Frontend Development Certification"
  },
  {
    institution: "ALX Africa",
    period: "2024",
    description: "Back-End Development & AI Career Essentials"
  },
  {
    institution: "Classic Info-Tech",
    period: "2024",
    description: "Frontend Development Certification"
  },
  {
    institution: "Microsoft & LinkedIn",
    period: "2024",
    description: "Generative AI Essentials"
  }
];

const experience = [
  {
    role: "Fullstack Developer — Metal-Connect (3MTT Team Project)",
    company: "3MTT",
    period: "AUG 2023 - DEC 2024",
    description: "Collaborated with a multidisciplinary team of 3MTT participants from UI/UX, Data Analysis, and AI/Machine Learning tracks. Developed a web application enabling users to buy and sell scrap metals in a streamlined marketplace platform. Handled frontend development using HTML, CSS, and JavaScript, integrating responsive UI components and interactive features. Worked closely with the AI/ML member to incorporate intelligent scrap pricing suggestions based on market data."
  },
  {
    role: "Team Lead — Africa Health Care and Education",
    company: "ALX Africa (Prototype Project)",
    period: "2024",
    description: "Led a cross-functional team in designing a prototype aimed at connecting healthcare professionals and educators across Africa. Coordinated task delegation, milestones, and tracking to deliver the prototype on time. Facilitated collaboration among team members with diverse skill sets."
  },
  {
    role: "Freelance Web Developer",
    company: "Independent",
    period: "2023 – Present",
    description: "Designed and built portfolio and business websites for clients using Next.js and Tailwind CSS. Implemented custom features like contact forms, blog sections, and interactive animations. Ensured cross-browser compatibility and mobile responsiveness."
  },
  {
    role: "Frontend Developer Intern",
    company: "Cognifyz Technologies",
    period: "Feb 2025 – Mar 2025",
    description: "Worked on real-world frontend projects using HTML, CSS, and JavaScript. Collaborated with a team to improve UIs and optimize website performance."
  },
  {
    role: "Frontend Developer Intern",
    company: "Classic Info-Tech",
    period: "April 2025 - Dec 2025",
    description: "Developed and maintained responsive web pages using modern frontend technologies. Contributed to design and functionality improvements of client websites."
  }
];

const skills = [
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 80 },
  { name: "Python", icon: <FaPython />, level: 75 },
  { name: "Django", icon: <SiDjango />, level: 75 },
  { name: "Flask", icon: <SiFlask />, level: 70 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
  { name: "Git", icon: <FaGitAlt />, level: 90 },
  { name: "SQL", icon: <FaDatabase />, level: 70 },
  { name: "HTML/CSS", icon: <FaHtml5 />, level: 90 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 75 },
  { name: "Vercel", icon: <SiVercel />, level: 75 },
];

const ResumeTab = () => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 pb-2 border-b-2 border-[var(--accent)] inline-block">
        Resume
      </h2>

      {/* Education */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <FaGraduationCap className="text-lg sm:text-xl text-[var(--accent)]" />
          <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">Education</h3>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {education.map((item, index) => (
            <div key={index} className="relative pl-5 sm:pl-6 border-l-2 border-[var(--border-color)] pb-3 sm:pb-4 last:pb-0">
              <div className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)]"></div>
              <h4 className="font-semibold text-sm sm:text-base text-[var(--text-primary)]">{item.institution}</h4>
              <span className="text-[10px] sm:text-xs text-[var(--accent)]">{item.period}</span>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <FaBriefcase className="text-lg sm:text-xl text-[var(--accent)]" />
          <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">Professional Experience</h3>
        </div>
        <div className="space-y-4 sm:space-y-5">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-5 sm:pl-6 border-l-2 border-[var(--border-color)] pb-4 sm:pb-5 last:pb-0">
              <div className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--accent)]"></div>
              <h4 className="font-semibold text-sm sm:text-base text-[var(--text-primary)]">{item.role}</h4>
              <p className="text-xs sm:text-sm text-[var(--accent)]">{item.company} | {item.period}</p>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-4 sm:mb-6">My Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-3 sm:p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] text-sm sm:text-base">{skill.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
              </div>
              <span className="text-[10px] sm:text-xs text-[var(--text-secondary)]">{skill.level}%</span>
            </div>
            <div className="w-full h-1.5 sm:h-2 bg-[var(--bg-primary)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent)] rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTab;
