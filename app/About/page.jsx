"use client";
import Experience from "@/components/Experience";
import SkillsCard from "@/components/SkillsCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FaUserCircle, FaMobileAlt, FaCogs, FaTachometerAlt, FaGlobe, FaCodeBranch } from "react-icons/fa";
import DevelopmentMethodCard from "@/components/DevelopmentMethodCard";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const developmentMethods = [
  {
    title: "User-Centered Design: Building with the User in Mind",
    description:
      "By collaborating closely with designers, I focus on delivering user-centered solutions that prioritize usability, accessibility, and seamless navigation.",
    icon: <FaUserCircle size={24} />,
  },
  {
    title: "Device-Friendly Interfaces",
    description:
      "My projects are designed to perform beautifully on any device, from desktops to smartphones, delivering responsive layouts that adjust fluidly.",
    icon: <FaMobileAlt size={24} />,
  },
  {
    title: "Component-Driven Design",
    description:
      "I follow a component-driven approach, breaking down complex interfaces into reusable and manageable pieces for greater efficiency.",
    icon: <FaCogs size={24} />,
  },
  {
    title: "Performance Optimization",
    description:
      "I optimize code, images, and server responses to deliver fast-loading, efficient digital experiences with modern tooling.",
    icon: <FaTachometerAlt size={24} />,
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "I ensure consistent visuals and functionality across Chrome, Firefox, Safari, Edge, and other modern browsers.",
    icon: <FaGlobe size={24} />,
  },
  {
    title: "Version Control and Collaboration",
    description:
      "Using Git and collaborative workflows, I maintain clean code and smooth coordination across teams and projects.",
    icon: <FaCodeBranch size={24} />,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* About Section */}
      <section className="relative w-full overflow-hidden text-lightText dark:text-darkText">
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

        <div className="relative z-20 px-6 py-16 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-blue-500 text-center"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            ABOUT ME
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              className="md:w-1/2 text-base leading-relaxed space-y-4 text-white dark:text-gray-200"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <p>
                I'm Adekanmi, a Full-Stack Developer specializing in crafting
                visually compelling, high-performance web experiences.
              </p>
              <p>
                Leveraging React and Next.js, I build fast-loading websites
                optimized for both users and search engines.
              </p>
              <p>
                With a background in Public Administration and knowledge in
                Project Management, I approach problem-solving with structure.
              </p>
              <p>
                Beyond development, I help startups optimize websites for speed,
                responsiveness, and seamless UX.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2 bg-blue-600 p-6 rounded-lg text-white shadow-md"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                CERTIFICATIONS
              </h3>
              <ul className="space-y-3 text-base">
                <li className="border-b border-blue-300 pb-2">
                  Frontend Development – 3MTT Certification (2024)
                </li>
                <li className="border-b border-blue-300 pb-2">
                  Frontend Development — Classic Info-Tech (2024)
                </li>
                <li className="border-b border-blue-300 pb-2">
                  AI Career Essentials — ALX Africa (2024)
                </li>
                <li className="border-b border-blue-300 pb-2">
                  Back-End Development — ALX Africa (2024)
                </li>
                <li className="pb-2">
                  Generative AI Essentials — Microsoft & LinkedIn (2024)
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-16">
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                <CiMail className="text-xl" />
                <span>HIRE ME</span>
              </motion.button>
            </a>
            <a
              href="https://drive.google.com/file/d/1inI58gp5tBz3ahCixr0bQMsM_hAfX9MR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-gray-300 rounded-full hover:bg-blue-700 hover:text-white transition"
              >
                <CiMail className="text-xl" />
                <span>MY CV</span>
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsCard />

      {/* Go-To Development Methods */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
            My Go-To Development Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developmentMethods.map((method, idx) => (
              <DevelopmentMethodCard
                key={idx}
                title={method.title}
                description={method.description}
                icon={method.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
         <Experience/>
      </section>

    </main>
  );
}
