"use client";
import Image from "next/image";
import {
  CodeBracketIcon,
  ServerIcon,
  BuildingLibraryIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export default function Overview() {
  return (
    <section
      id="services"
      className="w-full px-6 py-20 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-300"
    >
      {/* SEO H1 Heading */}
      <h1 className="sr-only">Web Development Services | Full-Stack Development, API Development & African Payment Integration</h1>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-4 animate-fade-in">
          Services
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12 animate-fade-in delay-100">
          Engineering scalable frontend and backend architectures using modern frameworks and cloud technologies to accelerate growth for startups and enterprise platforms.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "API Development",
    description: "Building scalable RESTful APIs with Django REST, Flask, or Express.js to integrate services seamlessly.",
    icon: ServerIcon,
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748718970/api_xlpkrz.webp",
  },
  {
    title: "Frontend Development",
    description: "Crafting interactive, responsive UIs with React.js, Next.js, and Tailwind CSS for modern web applications.",
    icon: CodeBracketIcon,
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748716812/frontend_yb8vpx.webp",
  },
  {
    title: "Database Management",
    description: "Managing relational and non-relational databases to ensure efficiency, reliability, and data integrity.",
    icon: BuildingLibraryIcon,
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748719010/database_pjkrxh.jpg",
  },
  {
    title: "African Payment Integration",
    description: "Integrating secure and efficient payment solutions like M-Pesa, Flutterwave, and Paystack.",
    icon: ArrowTrendingUpIcon,
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748718970/payment_qgbubd.webp",
  },
  {
    title: "Performance Optimization",
    description: "Enhancing load speed, UX, and Core Web Vitals with code-level and infrastructure optimization.",
    icon: ArrowTrendingUpIcon,
    image: "https://res.cloudinary.com/dpuj2f1h3/image/upload/v1748718971/performance_lt7b1i.jpg",
  },
];

function ServiceCard({ title, description, icon: Icon, image }) {
  return (
    <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="relative w-full h-52 mb-4 rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 text-center">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
}
