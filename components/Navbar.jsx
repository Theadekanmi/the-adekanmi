"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const dropdownClasses =
    "absolute left-0 bg-white dark:bg-darkBackground text-lightText dark:text-black shadow-md rounded mt-2 z-10 min-w-[160px]";

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-darkBackground text-gray-800 dark:text-darkText shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg font-bold">
            SMGE
          </div>
          <div className="leading-tight text-gray-800 dark:text-darkText">
            <h3 className="font-bold text-md hover:text-blue-600">ADEKANMI</h3>
            <span className="text-sm text-gray-500 hover:text-blue-600">ADEDIGBA</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl focus:outline-none">
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Navigation */}
        <ul
          className={`relative flex-col lg:flex-row gap-6 items-start lg:items-center text-1xl font-bold ${
            isMobileMenuOpen ? "flex" : "hidden lg:flex"
          } bg-white dark:bg-darkBackground lg:bg-transparent px-6 py-4 lg:p-0 w-full lg:w-auto`}
        >
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/About" className="hover:text-blue-600">About</Link></li>

          {/* Projects Dropdown */}
          <li
            className="relative group lg:hover:block"
            onClick={() => !isDesktop && setIsProjectsOpen(!isProjectsOpen)}
          >
            <button className="cursor-pointer hover:text-blue-600">Projects ▾</button>
            <ul
              className={`${dropdownClasses} ${
                isDesktop
                  ? "hidden group-hover:block"
                  : isProjectsOpen
                  ? "block"
                  : "hidden"
              }`}
            >
              <li><Link href="/Projects" className="hover:text-blue-600 px-4 py-2 block">All Projects</Link></li>
              <li><Link href="/Projects/nextjs-portfolio" className="hover:text-blue-600 px-4 py-2 block">Next.js Portfolio</Link></li>
              <li><Link href="/Projects/front/backend-challenges" className="hover:text-blue-600 px-4 py-2 block">Front/backend Challenges</Link></li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative group lg:hover:block"
            onClick={() => !isDesktop && setIsServicesOpen(!isServicesOpen)}
          >
            <button className="cursor-pointer hover:text-blue-600">Services ▾</button>
            <ul
              className={`${dropdownClasses} ${
                isDesktop
                  ? "hidden group-hover:block"
                  : isServicesOpen
                  ? "block"
                  : "hidden"
              }`}
            >
              <li><Link href="/Services" className="hover:text-blue-600 px-4 py-2 block">Overview</Link></li>
              <li><Link href="/Services/web-development" className="hover:text-blue-600 px-4 py-2 block">Web Development</Link></li>
              <li><Link href="/Services/performance" className="hover:text-blue-600 px-4 py-2 block">Performance Optimization</Link></li>
              <li><Link href="/Services/seo" className="hover:text-blue-600 px-4 py-2 block">SEO&Web Strategy</Link></li>
              <li><Link href="/Services/maintenance" className="hover:text-blue-600 px-4 py-2 block">Maintenance</Link></li>
            </ul>
          </li>

          {/* Resources Dropdown */}
          <li
            className="relative group lg:hover:block"
            onClick={() => !isDesktop && setIsResourcesOpen(!isResourcesOpen)}
          >
            <button className="cursor-pointer hover:text-blue-600">Resources ▾</button>
            <ul
              className={`${dropdownClasses} ${
                isDesktop
                  ? "hidden group-hover:block"
                  : isResourcesOpen
                  ? "block"
                  : "hidden"
              }`}
            >
              <li><Link href="/Resources/Insight" className="hover:text-blue-600 px-4 py-2 block">Insight</Link></li>
              <li><Link href="/Resources/Toolkits" className="hover:text-blue-600 px-4 py-2 block">Toolkits</Link></li>
              <li><Link href="/Resources/Playground" className="hover:text-blue-600 px-4 py-2 block">Playground</Link></li>
              <li><Link href="/Resources/Faq" className="hover:text-blue-600 px-4 py-2 block">FAQ</Link></li>
            </ul>
          </li>

          <li><Link href="/Resume" className="hover:text-blue-600">Resume</Link></li>
          <li><Link href="/Contact" className="hover:text-blue-600">Contact</Link></li>
          <li>
            <button onClick={toggleTheme}>
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
