"use client";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const categories = ["All", "Next.js", "Web Apps", "Challenges"];

const projects = [
  {
    slug: "METAL-CONNECT",
    title: "METAL‑SCRAP WEB‑APP",
    category: "Web Apps",
    description: "Smart recycling platform using AI to connect users with scrap buyers and centers.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1744816361/img1_oudkje.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://metal-connect.vercel.app",
  },
  {
    slug: "PATO'S‑PLACE",
    title: "PATO'S‑PLACE RESTAURANT",
    category: "Web Apps",
    description: "Elegant website for a continental fusion restaurant with sleek visuals.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1744816466/img6_utlsou.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://pato-place-restaurant.vercel.app/",
  },
  {
    slug: "OMNI‑FOOD",
    title: "OMNI‑FOOD WEB‑APP",
    category: "Web Apps",
    description: "Responsive food delivery site with intuitive UI for ordering and reservations.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1744816370/img2_mk0lby.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://omnifood-dusky.vercel.app",
  },
  {
    slug: "SUPER‑JARA",
    title: "SUPER‑JARA WEB‑APP",
    category: "Web Apps",
    description: "Modern app for airtime/data top‑ups, bill payments, and digital services.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816380/img3_ubyssh.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://superjara-zeta.vercel.app",
  },
  {
    slug: "MED‑CARE",
    title: "MED‑CARE WEB‑APP",
    category: "Web Apps",
    description: "Healthcare app to connect patients with providers and manage appointments.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/w_1000/ar_16:9,c_fill,g_auto,e_sharpen/v1744816444/img5_pzybgh.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://medcare-medical.vercel.app",
  },
  {
    slug: "GTEXT",
    title: "GTEXT REAL ESTATE",
    category: "Challenges",
    description: "Dynamic real estate platform to highlight premium developments and investment opportunities.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749484096/11zon_resized-5_vbhqqp.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://gtext-kappa.vercel.app/",
  },
  {
    slug: "MALE-FASHION",
    title: "MALE-FASHION",
    category: "Web Apps",
    description: "Sleek fashion web app showcasing curated collections for the modern man.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749484448/fashion_xtby6o.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://male-fashion-ivory.vercel.app/",
  },
  {
    slug: "LOAN",
    title: "LOAN PLATFORM",
    category: "Web Apps",
    description: "User-friendly platform that simplifies access to personal and business loans.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749484915/blog1.png_ahclfa.webp",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://loan-nu-eosin.vercel.app/",
  },
  {
    slug: "ITRUST",
    title: "ITRUST-FINANCE",
    category: "Web Apps",
    description: "Modern financial platform for managing, accessing, and growing finances.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749485236/images_1_lxjbag.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://itrustpay.vercel.app/",
  },
  {
    slug: "EATUP",
    title: "EATUP RESTAURANT",
    category: "Web Apps",
    description: "Restaurant website for delicious meals and unforgettable dining moments.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749485660/f2_nbojic.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://eatup-alpha.vercel.app/",
  },
  {
    slug: "tomistitches",
    title: "Tomi Stitches",
    category: "Challenges",
    description: "Platform connecting customers with skilled designers for custom clothing orders.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748805017/jagiya_jraezm.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://tomistitches.vercel.app/",
  },
  {
    slug: "jiim-projects",
    title: "Jiim Tech Lovers",
    category: "Next.js",
    description: "Car showcase project highlighting design, performance, and features of various cars.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748804566/cars_sbo3c7.jpg",
    stack: ["Next.js", "Tailwind"],
    link: "https://jimmotors.vercel.app/",
  },
  {
    slug: "classic-info",
    title: "Classic Info-Tech",
    category: "Next.js",
    description: "Dynamic learning platform for coding, cybersecurity, AI, and IT courses.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747075054/ubiqum-coding-bootcamp_uzhle4.webp",
    stack: ["Next.js", "Tailwind"],
    link: "https://classicinfo.vercel.app",
  },
  {
    slug: "Byway",
    title: "Byway Learning",
    category: "Next.js",
    description: "Web application bridging instructors and students for online learning.",
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747075054/ubiqum-coding-bootcamp_uzhle4.webp",
    stack: ["Next.js", "Tailwind"],
    link: "https://bywayy.vercel.app/",
  },
];

const PortfolioTab = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 pb-2 border-b-2 border-[var(--accent)] inline-block">
        Portfolio
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg transition-all ${
              activeCategory === category
                ? "bg-[var(--accent)] text-black font-medium"
                : "bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent)] transition-all"
          >
            {/* Project Image */}
            <div className="h-32 sm:h-40 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[var(--accent)] text-black text-xs sm:text-sm font-medium rounded-lg flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> View Live
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-3 sm:p-4">
              <h4 className="font-semibold text-sm sm:text-base text-[var(--text-primary)] mb-1 truncate">{project.title}</h4>
              <p className="text-[10px] sm:text-xs text-[var(--accent)] mb-2">{project.category}</p>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-3 line-clamp-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 sm:py-1 bg-[var(--bg-primary)] text-[var(--text-secondary)] text-[10px] sm:text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTab;
