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
    slug: "GTEXT ",
    title: "GTEXT",
    category: "challenges",
    desc: "GText Real Estate is a dynamic and innovative real estate platform built to highlight premium developments, showcase investment opportunities, and connect clients with the trusted expertise of the GText brand.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749484096/11zon_resized-5_vbhqqp.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://gtext-kappa.vercel.app/",
  },
  {
    slug: "MALE-MASHION",
    title: "MALE-FASHION",
    category: "allProjects",
    desc: "Male-Fashion is a sleek and dynamic fashion web app dedicated to the modern man. It showcases curated collections, trend-forward outfits, and essential wardrobe pieces designed to inspire confidence and sophistication..",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749484448/fashion_xtby6o.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://male-fashion-ivory.vercel.app/",
  },
  {
    slug: "LOAN ",
    title: "LOAN",
    category: "allProjects",
    desc: "Is a user-friendly web platform that simplifies access to personal and business loans. Designed to connect borrowers with trusted lenders, the app ensures a transparent, secure, and hassle-free loan experience.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749484915/blog1.png_ahclfa.webp",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://loan-nu-eosin.vercel.app/",
  },
  {
    slug: "ITURST ",
    title: "ITRUST-FINANCE",
    category: "allProjects",
    desc: "iTrust Finance is a modern financial platform designed to help individuals and businesses manage, access, and grow their finances with confidence. Whether you're seeking reliable loan options, smart budgeting tools, or secure investment insights",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749485236/images_1_lxjbag.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://itrustpay.vercel.app/",
  },
  {
    slug: "EATUP ",
    title: "EATUP",
    category: "allProjects",
    desc: "EatUp Restaurant is your go-to destination for delicious meals, cozy ambience, and unforgettable dining moments. From expertly prepared local favorites to globally inspired dishes",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749485660/f2_nbojic.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://eatup-alpha.vercel.app/",
  },
  {
    slug: "tomistitches",
    title: "Tomi Stitches",
    category: "challenges",
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
    link: "https://alphaaa.vercel.app/",
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
  {
    slug: "Byway",
    title: "Byway",
    category: "nextjs",
    desc: "Byway is a web application designed to bridge the gap between instructors and students by providing a centralized online platform for learning, communication, and collaboration.",
    img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747075054/ubiqum-coding-bootcamp_uzhle4.webp",
    stack: ["Next.js", "Tailwind"],
    link: "https://bywayy.vercel.app/",
  },
  
];

// ProjectGrid Component
function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(({ slug, title, desc, img, stack, link }) => (
        <div
          key={slug}
          className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
        >
          {/* Enhanced Image Container */}
          <div className="relative overflow-hidden h-56">
            <img 
              src={img} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors duration-300"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Enhanced Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {desc}
            </p>
            
            {/* Enhanced Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Enhanced Visit Link */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group/link"
            >
              Visit Project
              <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
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
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-xl leading-relaxed">
          {projectDescriptions[activeTab]}
        </p>
      </div>

      {/* Enhanced Tabs */}
      <div className="flex justify-center flex-wrap gap-2 mb-16">
        {[
          { id: "allProjects", label: "All Projects", count: allProjects.length },
          { id: "nextjs", label: "Next.js Projects", count: allProjects.filter(p => p.category === "nextjs").length },
          { id: "challenges", label: "Frontend/Backend Challenges", count: allProjects.filter(p => p.category === "challenges").length },
        ].map(({ id, label, count }) => (
          <button
            key={id}
            onClick={() => handleTabChange(id)}
            className={`px-6 py-3 font-semibold rounded-xl border-2 transition-all duration-300 ${
              activeTab === id
                ? "border-blue-600 text-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10"
            }`}
          >
            <span className="flex items-center gap-2">
              {label}
              <span className={`px-2 py-1 text-xs rounded-full ${
                activeTab === id 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              }`}>
                {count}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <ProjectGrid projects={paginatedProjects} />

      {/* Enhanced Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-16 gap-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all duration-300 ${
              page === 1
                ? "border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                : "border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-lg"
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </span>
          </button>
          
          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  page === pageNum
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {pageNum}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all duration-300 ${
              page === totalPages
                ? "border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                : "border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-lg"
            }`}
          >
            <span className="flex items-center gap-2">
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
