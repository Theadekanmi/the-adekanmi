"use client";
import { FaCode, FaMobileAlt, FaServer, FaCreditCard, FaDatabase, FaTachometerAlt, FaUserCircle, FaCogs, FaGlobe, FaCodeBranch } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "Frontend Development",
    description: "Crafting dynamic, responsive user interfaces using React.js and Next.js, ensuring a smooth and engaging user experience."
  },
  {
    icon: <FaServer className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "API Development",
    description: "Building scalable and efficient RESTful APIs using frameworks like Django REST and Flask, enabling seamless integration with third-party services."
  },
  {
    icon: <FaDatabase className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "Database Management",
    description: "Designing and managing databases to ensure data integrity and efficiency, handling both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases."
  },
  {
    icon: <FaCreditCard className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "African Payment Integration",
    description: "Specializing in integrating local African payment gateways like M-Pesa, Flutterwave, and Paystack to enable secure and seamless transactions."
  },
  {
    icon: <FaTachometerAlt className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "Performance Optimization",
    description: "Enhancing load speed, code efficiency, and SEO to maximize user engagement and platform stability across devices."
  },
  {
    icon: <FaMobileAlt className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "Responsive Design",
    description: "Creating websites that perform beautifully on any device, from desktops to smartphones with fluid layouts."
  }
];

const developmentMethods = [
  {
    icon: <FaUserCircle className="text-lg text-[var(--accent)]" />,
    title: "User-Centered Design",
    description: "By collaborating closely with designers, I focus on delivering user-centered solutions that prioritize usability, accessibility, and seamless navigation."
  },
  {
    icon: <FaMobileAlt className="text-lg text-[var(--accent)]" />,
    title: "Device-Friendly Interfaces",
    description: "My projects are designed to perform beautifully on any device, from desktops to smartphones, delivering responsive layouts that adjust fluidly."
  },
  {
    icon: <FaCogs className="text-lg text-[var(--accent)]" />,
    title: "Component-Driven Design",
    description: "I follow a component-driven approach, breaking down complex interfaces into reusable and manageable pieces for greater efficiency."
  },
  {
    icon: <FaTachometerAlt className="text-lg text-[var(--accent)]" />,
    title: "Performance Optimization",
    description: "I optimize code, images, and server responses to deliver fast-loading, efficient digital experiences with modern tooling."
  },
  {
    icon: <FaGlobe className="text-lg text-[var(--accent)]" />,
    title: "Cross-Browser Compatibility",
    description: "I ensure consistent visuals and functionality across Chrome, Firefox, Safari, Edge, and other modern browsers."
  },
  {
    icon: <FaCodeBranch className="text-lg text-[var(--accent)]" />,
    title: "Version Control & Collaboration",
    description: "Using Git and collaborative workflows, I maintain clean code and smooth coordination across teams and projects."
  }
];

const certifications = [
  "Frontend Development – 3MTT Certification (2024)",
  "Frontend Development — Classic Info-Tech (2024)",
  "AI Career Essentials — ALX Africa (2024)",
  "Back-End Development — ALX Africa (2024)",
  "Generative AI Essentials — Microsoft & LinkedIn (2024)"
];

const AboutTab = () => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 pb-2 border-b-2 border-[var(--accent)] inline-block">
        About Me
      </h2>

      <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
        <p>
          I'm Adekanmi, a Full-Stack Developer specializing in crafting visually compelling, high-performance web experiences.
        </p>
        <p>
          Leveraging React and Next.js, I build fast-loading websites optimized for both users and search engines. With a background in Public Administration and knowledge in Project Management, I approach problem-solving with structure.
        </p>
        <p>
          Beyond development, I help startups optimize websites for speed, responsiveness, and seamless UX.
        </p>
        <p>
          I build custom web solutions for a wide range of industries, from online stores and educational platforms to hotel booking systems, agriculture tech, and restaurant ordering sites. Whether you need a sleek business website or a powerful booking or e-commerce system, I deliver fast, responsive, and optimized solutions using modern tools like Next.js, Tailwind CSS, and integrated payment APIs.
        </p>
      </div>

      {/* What I'm Doing Section */}
      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-8 sm:mt-10 mb-4 sm:mb-6">
        What I'm Doing
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--bg-primary)] flex items-center justify-center">
              {service.icon}
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-sm sm:text-base text-[var(--text-primary)] mb-1 sm:mb-2">{service.title}</h4>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Development Methods */}
      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-8 sm:mt-10 mb-4 sm:mb-6">
        My Go-To Development Methods
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {developmentMethods.map((method, index) => (
          <div
            key={index}
            className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              {method.icon}
              <h4 className="font-semibold text-sm sm:text-base text-[var(--text-primary)]">{method.title}</h4>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{method.description}</p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-8 sm:mt-10 mb-4 sm:mb-6">
        Certifications
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-3 sm:p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-secondary)] hover:border-[var(--accent)] transition-colors"
          >
            {cert}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTab;
