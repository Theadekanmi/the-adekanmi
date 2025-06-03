"use client";
import { useState } from "react";

// All Projects Data — insert your full project data here (exactly as you sent)
const allProjects = [
  {
    slug: "METAL-CONNECT",
    title: "METAL‑SCRAP WEB‑APP",
    category: "allProjects",
    desc: "Smart recycling platform using AI to connect users with scrap buyers and centers.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1744816361/img1_oudkje.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://metal-connect.vercel.app",
  },
  {
    slug: "PATO'S‑PLACE ",
    title: "PATO'S‑PLACE RESTAURANT",
    category: "allProjects",
    desc: "Elegant website for a continental fusion restaurant with sleek visuals.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1744816466/img6_utlsou.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://pato-place-restaurant.vercel.app/",
  },
  {
    slug: "OMNI‑FOOD",
    title: "OMNI‑FOOD WEB‑APP",
    category: "allProjects",
    desc: "Responsive food delivery site with intuitive UI for ordering and reservations.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1744816370/img2_mk0lby.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://omnifood-dusky.vercel.app",
  },
  {
    slug: "SUPER‑JARA",
    title: "SUPER‑JARA WEB‑APP",
    category: "allProjects",
    desc: "Modern app for airtime/data top‑ups, bill payments, and digital services—fast, reliable, and affordable.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816380/img3_ubyssh.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://superjara-zeta.vercel.app",
  },
  {
    slug: "church",
    title: "CHURCH WEB‑APP",
    category: "allProjects",
    desc: "Community‑focused app for church members: share sermons, events, updates, and foster engagement.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816394/img4_wxkwpc.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://church‑app.vercel.app",
  },
  {
    slug: "MED‑CARE ",
    title: "MED‑CARE WEB‑APP",
    category: "allProjects",
    desc: "Healthcare app to connect patients with providers, manage appointments, and access health resources seamlessly.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816444/img5_pzybgh.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://medcare-medical.vercel.app",
  },
  {
    slug: "tomistitches",
    title: "Tomi Stitches",
    category: "allProjects",
    desc: "This platform is designed to connect customers with skilled designer, allowing them to order and customize clothing effortlessly. Users can send messages directly to designer, specifying styles, fabrics, and measurements to create unique pieces tailored to their preferences.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748805017/jagiya_jraezm.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://tomistitches.vercel.app/",
  },
  {
    slug: "jiim-projects",
    title: "Jiim Tech Lovers Projects",
    category: "nextjs",
    desc: "This project was developed to highlight the design, performance, and features of various cars, offering an engaging and informative experience for enthusiasts and potential buyers. Using Next.js and Tailwind CSS.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748804566/cars_sbo3c7.jpg",
    stack: ["Next.js", "Tailwind"],
    link: "https://jimmotors.vercel.app/",
  },
  {
    slug: "alpha-msd2",
    title: "Alpha MSD2",
    category: "nextjs",
    desc: "This initiative is designed to showcase the seamless integration of technology and human expertise in investment decision-making. Through innovative tools and insightful resources, the platform empowers individuals to make informed financial choices while fostering a culture of continuous learning and growth.",
    img: "/images/alpha.jpg",
    stack: ["Next.js", "Tailwind"],
    link: "https://alphaa-msd2.vercel.app/",
  },
  {
    slug: "classic-info",
    title: "Classic Info",
    category: "nextjs",
    desc: "This initiative is designed to provide a dynamic learning environment for individuals looking to advance their skills in technology. The platform offers comprehensive courses in coding, cybersecurity, AI, and IT, catering to both beginners and experienced professionals.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747075054/ubiqum-coding-bootcamp_uzhle4.webp",
    stack: ["Next.js", "Tailwind"],
    link: "https://classicinfo.vercel.app",
  },
];

// ProjectGrid Component
function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map(({ slug, title, desc, img, stack, link }) => (
        <div
          key={slug}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img src={img} alt={title} className="w-full h-48 object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{desc}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 hover:underline font-semibold mb-3"
            >
              Visit Project
            </a>
            <div className="flex flex-wrap gap-2 mt-4">
              {stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-gray-400 dark:border-gray-500 text-gray-600 dark:text-gray-300 rounded-full text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Main Projects Component
export default function Projects() {
  const [activeTab, setActiveTab] = useState("allProjects");
  const [page, setPage] = useState(1);
  const projectsPerPage = 6;

  // Filter projects by category
  const filteredProjects =
    activeTab === "allProjects"
      ? allProjects
      : allProjects.filter((p) => p.category === activeTab);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get only projects for current page
  const paginatedProjects = filteredProjects.slice(
    (page - 1) * projectsPerPage,
    page * projectsPerPage
  );

  // Description for each tab
  const projectDescriptions = {
    allProjects:
      "Explore a broad range of projects, from Html, Css, Javascript and  full Next.js applications to frontend/backend challenges.",
    nextjs:
      "Discover Next.js projects demonstrating modern React development and responsive design.",
    challenges:
      "Check out various frontend and backend challenges showcasing coding skills and creativity.",
  };

  // Handle tab click and reset page
  function handleTabChange(id) {
    setActiveTab(id);
    setPage(1);
  }

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300 text-lg">
        {projectDescriptions[activeTab]}
      </p>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {[
          { id: "allProjects", label: "All Projects" },
          { id: "nextjs", label: "Next.js Projects" },
          { id: "challenges", label: "Frontend/Backend Challenges" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleTabChange(id)}
            className={`px-4 py-2 font-medium rounded-lg border-b-2 ${
              activeTab === id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-600"
            } transition`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <ProjectGrid projects={paginatedProjects} />

      {/* Pagination Controls */}
      <div className="flex justify-center mt-12 gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`px-5 py-2 rounded-lg border ${
            page === 1
              ? "border-gray-300 text-gray-400 cursor-not-allowed"
              : "border-blue-600 text-blue-600 hover:bg-blue-100"
          } transition`}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-5 py-2 rounded-lg border ${
            page === totalPages
              ? "border-gray-300 text-gray-400 cursor-not-allowed"
              : "border-blue-600 text-blue-600 hover:bg-blue-100"
          } transition`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
