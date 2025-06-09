"use client";
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
import { CiMail } from "react-icons/ci";
import PopupComponent from "@/components/PopupComponent";
import DatePickerComponent from "@/components/DatePickerComponent";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import BackgroundSwiper from "@/components/BackgroundSwiper";
import AOS from "aos";
import "aos/dist/aos.css";

// Dynamic imports
const SOB = dynamic(() => import("@/components/SOB"), { ssr: false });
const Hello = dynamic(() => import("@/components/Hello"), { ssr: false });

// Skills array moved outside JSX
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
    name: "Boostrap",
    level: 75,
    icon: <FaBootstrap size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Vercel",
    level: 75,
    icon: <SiVercel size={24} className="inline-block mr-2 text-blue-600 dark:text-blue-400" />,
  },
];

const HomePage = () => {
  const [showComp, setShowComp] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      <BackgroundSwiper />

      {/* Popup Button */}
      <div className="mt-8 text-center">
        <PopupComponent className="text-lg md:text-base sm:text-sm w-full max-w-lg h-auto md:max-w-md sm:max-w-sm" />
      </div>

      {/* Toggle Component Section */}
      <section className="relative w-full overflow-hidden bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mt-8">
            <div className="border rounded-lg p-4 bg-white shadow-md">
              {showComp ? <SOB /> : <Hello />}
            </div>
            <button
              onClick={() => setShowComp(!showComp)}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Next
            </button>
          </div>
        </div>
      </section>

           {/* About Section */}
<section id="about" className="relative w-full overflow-hidden text-lightText dark:text-darkText">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source
      src="https://res.cloudinary.com/dpuj2f1h3/video/upload/f_auto,q_auto/aboutme_bg_jelnxd.mp4"
      type="video/mp4"
    />
  </video>
  <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-10"></div>

  <div className="relative z-20 px-6 py-16 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-500 text-center">ABOUT ME</h2>

    <div className="flex flex-col md:flex-row items-start md:items-stretch gap-12">
      <div className="md:w-1/2 text-lg leading-relaxed space-y-4 text-white">
        <p>
          I'm Adekanmi, a Full-Stack Developer with a focus on crafting visually compelling,
             high-performance web experiences. On the front end, I specialize in responsive design,
             clean, scalable code, and user-first interfaces that not only look stunning but also
             perform seamlessly across devices.
        </p>

        <div className="text-center mt-4">
          <a
            href="/About"
            className="inline-block px-6 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
          >
            Read More
          </a>
        </div>
      </div>

      <div className="md:w-1/2 bg-blue-600 p-6 rounded-lg text-white shadow-md">
        <h3 className="text-xl font-bold mb-4 text-center">CERTIFICATIONS</h3>
        <ul className="space-y-3 text-base">
          <li className="border-b border-blue-300 pb-2">Frontend Development – 3MTT Certification (2024)</li>
          <li className="border-b border-blue-300 pb-2">Frontend Development — Classic Info-Tech (2024)</li>
          <li className="border-b border-blue-300 pb-2">AI Career Essentials — ALX Africa (2024)</li>
          <li className="border-b border-blue-300 pb-2">Back-End Development — ALX Africa (2024)</li>
          <li className="pb-2">Generative AI Essentials — Microsoft & LinkedIn (2024)</li>
        </ul>
      </div>
    </div>

    <div className="flex flex-wrap justify-center gap-4 mt-16">
      <a href="/Contact">
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          <CiMail className="text-xl" />
          <span>HIRE ME</span>
        </button>
      </a>
      <a
        href="https://drive.google.com/file/d/1inI58gp5tBz3ahCixr0bQMsM_hAfX9MR/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-gray-300 rounded-full hover:bg-blue-700 hover:text-white transition">
          <CiMail className="text-xl" />
          <span>MY CV</span>
        </button>
      </a>
    </div>
  </div>
</section>


      {/* Skills Section */}
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
              <div
                key={skill.name}
                className="w-full sm:w-1/2 lg:w-1/4 bg-white dark:bg-darkCard p-6 rounded-xl shadow-md text-center transition hover:shadow-lg"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="w-full px-6 py-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-300">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-4">
      Services
    </h2>
    <p className="text-center max-w-2xl mx-auto text-lg mb-12">
      Engineering scalable frontend and backend architectures using modern frameworks and cloud technologies to accelerate growth for startups and enterprise platforms.
    </p>

    {/* Services Grid */}
    <div className="flex flex-wrap justify-center gap-6">
      {/* API Development */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-darkCard p-6 rounded-xl shadow-md text-center transition hover:shadow-lg">
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
          API Development
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Building scalable and efficient RESTful APIs using frameworks like Django REST and Flask, enabling seamless integration with third-party services.
        </p>
      </div>

      {/* Frontend Development */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-darkCard p-6 rounded-xl shadow-md text-center transition hover:shadow-lg">
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
          Frontend Development
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Crafting dynamic, responsive user interfaces using React.js and Next.js, ensuring a smooth and engaging user experience.
        </p>
      </div>

      {/* Database Management */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-darkCard p-6 rounded-xl shadow-md text-center transition hover:shadow-lg">
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
          Database Management
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Designing and managing databases to ensure data integrity and efficiency, handling both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.
        </p>
      </div>

      {/* African Payment Integration */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-darkCard p-6 rounded-xl shadow-md text-center transition hover:shadow-lg">
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
          African Payment Integration
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Specializing in integrating local African payment gateways like M-Pesa, Flutterwave, and Paystack to enable secure and seamless transactions.
        </p>
      </div>
      
      {/* Perfomance optimization */}
       <div className="w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-darkCard p-6 rounded-xl shadow-md transition hover:shadow-lg">
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Performance Optimization</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Enhancing load speed, code efficiency, and SEO to maximize user engagement and platform stability across devices.
        </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default HomePage;
