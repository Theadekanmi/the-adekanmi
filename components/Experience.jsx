// components/Experience.jsx
import { CiLaptop, CiMonitor } from "react-icons/ci";
import { ExperienceCard } from "@/components/ExperienceCard";

const experiences = [
  {
    title: "Fullstack Developer — Metal-Connect (3MTT Team Project)",
    company: "3MTT",
    period: "AUG 2023 - DEC 2024",
    icon: <CiLaptop size={28}/>,
    description: [
      "Collaborated with a multidisciplinary team of 3MTT participants from UI/UX, Data Analysis, and AI/Machine Learning tracks.",
      "Developed a web application enabling users to buy and sell scrap metals in a streamlined marketplace platform.",
      "Handled frontend development using HTML, CSS, and JavaScript, integrating responsive UI components and interactive features.",
      "Worked closely with the AI/ML member to incorporate intelligent scrap pricing suggestions based on market data.",
      "Coordinated with the Data Analyst to visualize market trends and transaction history using interactive charts.",
    ],
  },
  {
    title: "Team Lead — Africa Health Care and Education (ALX Prototype Project)",
    company: "ALX Africa",
    period: "2024",
    icon: <CiLaptop size={28} />,
    description: [
      "Led a cross-functional team in designing a prototype aimed at connecting healthcare professionals and educators across Africa.",
      "Coordinated task delegation, milestones, and tracking to deliver the prototype on time.",
      "Facilitated collaboration among team members with diverse skill sets.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Independent",
    period: "2023 – Present",
    icon: <CiLaptop size={28}/>,
    description: [
      "Designed and built portfolio and business websites for clients using Next.js and Tailwind CSS.",
      "Implemented custom features like contact forms, blog sections, and interactive animations.",
      "Ensured cross-browser compatibility and mobile responsiveness.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Cognifyz Technologies",
    period: "Feb 2025 – Mar 2025",
    icon: <CiMonitor size={28}/>,
    description: [
      "Worked on real-world frontend projects using HTML, CSS, and JavaScript.",
      "Collaborated with a team to improve UIs and optimize website performance.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Classic Info-Tech",
    period: "April 2025 - Dec 2025",
    icon: <CiMonitor size={28}/>,
    description: [
      "Developed and maintained responsive web pages using modern frontend technologies.",
      "Contributed to design and functionality improvements of client websites.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto mb-24 px-4">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center">
        Professional Experience
      </h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            icon={exp.icon}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
}
