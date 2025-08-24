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
      {/* SEO H1 Heading - Hidden visually but accessible to screen readers */}
      <h1 className="sr-only">Adekanmi Adedigba - Full-Stack Developer Portfolio | Web Development & African Payment Integration</h1>
      
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
  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80 z-10"></div>

  <div className="relative z-20 px-6 py-20 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        ABOUT ME
      </h2>
    </div>

    <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-12">
      <div className="lg:w-1/2 text-lg leading-relaxed space-y-6 text-white">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
          <p className="text-xl leading-relaxed">
            I'm Adekanmi, a Full-Stack Developer with a focus on crafting visually compelling,
               high-performance web experiences. On the front end, I specialize in responsive design,
               clean, scalable code, and user-first interfaces that not only look stunning but also
               perform seamlessly across devices.
          </p>
        </div>

        <div className="text-center">
          <a
            href="/About"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Read More
          </a>
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white shadow-2xl border border-blue-400/30">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-100">CERTIFICATIONS</h3>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-3 border-b border-blue-400/30 pb-3">
              <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
              <span>Frontend Development – 3MTT Certification (2024)</span>
            </li>
            <li className="flex items-center gap-3 border-b border-blue-400/30 pb-3">
              <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
              <span>Frontend Development — Classic Info-Tech (2024)</span>
            </li>
            <li className="flex items-center gap-3 border-b border-blue-400/30 pb-3">
              <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
              <span>AI Career Essentials — ALX Africa (2024)</span>
            </li>
            <li className="flex items-center gap-3 border-b border-blue-400/30 pb-3">
              <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
              <span>Back-End Development — ALX Africa (2024)</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
              <span>Generative AI Essentials — Microsoft & LinkedIn (2024)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
      <a href="/Contact">
        <button className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <CiMail className="text-xl" />
          <span>HIRE ME</span>
        </button>
      </a>
      <a
        href="https://drive.google.com/file/d/1inI58gp5tBz3ahCixr0bQMsM_hAfX9MR/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-white dark:bg-darkCard p-6 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  Proficiency: {skill.level}%
                </p>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-purple-600"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="w-full px-6 py-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-300">
  <div className="max-w-6xl mx-auto">
    {/* Enhanced Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
        Services
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Engineering scalable frontend and backend architectures using modern frameworks and cloud technologies to accelerate growth for startups and enterprise platforms.
      </p>
    </div>

    {/* Enhanced Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* API Development */}
      <div className="group bg-white dark:bg-darkCard p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 transition-colors duration-300">
          API Development
        </h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Building scalable and efficient RESTful APIs using frameworks like Django REST and Flask, enabling seamless integration with third-party services.
        </p>
      </div>

      {/* Frontend Development */}
      <div className="group bg-white dark:bg-darkCard p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 transition-colors duration-300">
          Frontend Development
        </h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Crafting dynamic, responsive user interfaces using React.js and Next.js, ensuring a smooth and engaging user experience.
        </p>
      </div>

      {/* Database Management */}
      <div className="group bg-white dark:bg-darkCard p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 transition-colors duration-300">
          Database Management
        </h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Designing and managing databases to ensure data integrity and efficiency, handling both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.
        </p>
      </div>

      {/* African Payment Integration */}
      <div className="group bg-white dark:bg-darkCard p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 transition-colors duration-300">
          African Payment Integration
        </h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Specializing in integrating local African payment gateways like M-Pesa, Flutterwave, and Paystack to enable secure and seamless transactions.
        </p>
      </div>
      
      {/* Performance optimization */}
      <div className="group bg-white dark:bg-darkCard p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 transition-colors duration-300">
          Performance Optimization
        </h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
