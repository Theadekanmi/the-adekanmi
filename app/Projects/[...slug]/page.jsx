"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();

  const projectSlug = params.slug ? params.slug.join("/") : "default-project";

  const projectData = {
    "nextjs-portfolio": {
      title: "Next.js Projects",
      description: "Showcase of mini-projects built using Next.js and Tailwind CSS.",
      items: [
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
      ],
      nextProject: "front/backend-challenges",
    },
    "front/backend-challenges": {
      title: "Frontend/Backend Challenges",
      description: "A collection of challenges completed to sharpen frontend/backend skills.",
      items: [
        {
          slug: "tomistitches",
          title: "Tomi Stitches",
          category: "allProjects",
          desc: "This platform is designed to connect customers with skilled designers, allowing them to order and customize clothing effortlessly. Users can send messages directly to designers, specifying styles, fabrics, and measurements to create unique pieces tailored to their preferences.",
          img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748805017/jagiya_jraezm.jpg",
          stack: ["HTML", "CSS", "JavaScript"],
          link: "https://tomistitches.vercel.app/",
        },
        {
             slug: "GTEXT ",
             title: "GTEXT",
             category: "allProjects",
             desc: "GText Real Estate is a dynamic and innovative real estate platform built to highlight premium developments, showcase investment opportunities, and connect clients with the trusted expertise of the GText brand.",
             img: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1749484096/11zon_resized-5_vbhqqp.jpg",
             stack: ["HTML", "CSS", "JavaScript"],
             link: "https://gtext-kappa.vercel.app/",
        },
      ],
      nextProject: "nextjs-portfolio",
    },
  };

  const project = projectData[projectSlug] || {
    title: "Project Not Found",
    description: "The requested project does not exist. Please check the URL.",
    items: [],
    nextProject: "nextjs-portfolio",
  };

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center">{project.title}</h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 my-4">
        {project.description}
      </p>

      <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {project.items.length > 0 ? (
          project.items.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                <div className="flex flex-wrap gap-2 my-2">
                  {item.stack.map((tech, i) => (
                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:underline"
                >
                  Visit Project →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-red-500">No projects found.</p>
        )}
      </div>

      <div className="flex flex-col items-center mt-10 gap-4">
        {projectData[project.nextProject] && (
          <button
            onClick={() => router.push(`/Projects/${project.nextProject}`)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Go to {projectData[project.nextProject].title}
          </button>
        )}
        <button
          onClick={() => router.push("/Projects")}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg"
        >
          Back to All Projects
        </button>
      </div>
    </section>
  );
}
