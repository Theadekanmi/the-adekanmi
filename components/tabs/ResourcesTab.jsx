"use client";
import { FaLightbulb, FaTools, FaGamepad, FaQuestionCircle, FaExternalLinkAlt } from "react-icons/fa";

const resources = [
  {
    icon: <FaLightbulb className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "Insight",
    description: "Deep dives into web development concepts, best practices, and industry trends. Learn from real-world experiences and case studies.",
    link: "/Resources/Insight",
    topics: ["Web Performance", "SEO Tips", "Code Architecture", "Career Advice"]
  },
  {
    icon: <FaTools className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "Toolkits",
    description: "Curated collection of tools, libraries, and resources I use daily for development. From VS Code extensions to design tools.",
    link: "/Resources/Toolkits",
    topics: ["VS Code Setup", "Design Tools", "Dev Libraries", "Productivity Apps"]
  },
  {
    icon: <FaGamepad className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "Playground",
    description: "Interactive coding experiments and mini-projects. Explore creative implementations and learn through hands-on examples.",
    link: "/Resources/Playground",
    topics: ["CSS Animations", "React Hooks", "API Demos", "UI Components"]
  },
  {
    icon: <FaQuestionCircle className="text-xl sm:text-2xl text-[var(--accent)]" />,
    title: "FAQ",
    description: "Frequently asked questions about my services, process, and how we can work together. Get answers to common queries.",
    link: "/Resources/Faq",
    topics: ["Pricing", "Timeline", "Process", "Support"]
  }
];

const usefulLinks = [
  { name: "React Documentation", url: "https://react.dev", category: "Frontend" },
  { name: "Next.js Docs", url: "https://nextjs.org/docs", category: "Frontend" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com", category: "CSS" },
  { name: "Django REST Framework", url: "https://www.django-rest-framework.org", category: "Backend" },
  { name: "Paystack Docs", url: "https://paystack.com/docs", category: "Payments" },
  { name: "Flutterwave Docs", url: "https://developer.flutterwave.com", category: "Payments" },
  { name: "Vercel", url: "https://vercel.com", category: "Deployment" },
  { name: "GitHub", url: "https://github.com", category: "Version Control" },
];

const ResourcesTab = () => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 pb-2 border-b-2 border-[var(--accent)] inline-block">
        Resources
      </h2>

      <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-6 sm:mb-8">
        Helpful resources, tools, and guides to help you on your development journey.
      </p>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            className="group p-4 sm:p-5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] hover:border-[var(--accent)] transition-all"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[var(--bg-primary)] flex items-center justify-center">
                {resource.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base text-[var(--text-primary)] mb-1 sm:mb-2 group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                  {resource.title}
                  <FaExternalLinkAlt className="text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-2 sm:mb-3 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {resource.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 sm:py-1 bg-[var(--bg-primary)] text-[var(--text-secondary)] text-[10px] sm:text-xs rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Useful Links */}
      <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-4 sm:mb-6">
        Useful Links
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {usefulLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 sm:p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-all"
          >
            <p className="text-[10px] sm:text-xs text-[var(--accent)] mb-1">{link.category}</p>
            <p className="text-xs sm:text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1">
              {link.name}
              <FaExternalLinkAlt className="text-[8px] sm:text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent)]/5 rounded-xl border border-[var(--accent)]/30">
        <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-3 sm:mb-4">💡 Quick Tips</h3>
        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--accent)]">•</span>
            Always use semantic HTML for better accessibility and SEO
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--accent)]">•</span>
            Optimize images before uploading - use WebP format when possible
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--accent)]">•</span>
            Write clean, commented code - your future self will thank you
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--accent)]">•</span>
            Test on multiple devices and browsers before deployment
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesTab;
