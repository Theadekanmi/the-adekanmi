"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const projectsRef = useRef();
  const servicesRef = useRef();
  const resourcesRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const refs = [projectsRef, servicesRef, resourcesRef];
      const clickedInsideDropdown = refs.some(
        (ref) => ref.current && ref.current.contains(event.target)
      );
      if (!clickedInsideDropdown) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navLink = "block py-2 px-4 hover:text-blue-600";
  const dropdownLink = "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800";

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-gray-400 dark:bg-darkBackground shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">SMGE</div>
          <div className="leading-tight">
            <h3 className="font-bold text-md">ADEKANMI</h3>
            <span className="text-sm text-gray-500">ADEDIGBA</span>
          </div>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-2xl">
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden lg:flex space-x-6 font-semibold items-center">
          <li><Link href="/" className={navLink}>Home</Link></li>
          <li><Link href="/About" className={navLink}>About</Link></li>

          <li className="relative" ref={projectsRef}>
            <button onClick={() => toggleDropdown("projects")} className={navLink}>Projects ▾</button>
            {activeDropdown === "projects" && (
              <ul className="absolute left-0 mt-2 min-w-[180px] bg-white dark:bg-darkBackground shadow-lg rounded-md">
                <li><Link href="/Projects" className={dropdownLink} onClick={() => setActiveDropdown(null)}>All Projects</Link></li>
                <li><Link href="/Projects/nextjs-portfolio" className={dropdownLink} onClick={() => setActiveDropdown(null)}>Next.js Portfolio</Link></li>
                <li><Link href="/Projects/front/backend-challenges" className={dropdownLink} onClick={() => setActiveDropdown(null)}>Frontend/Backend Challenges</Link></li>
              </ul>
            )}
          </li>

          <li className="relative" ref={servicesRef}>
            <button onClick={() => toggleDropdown("services")} className={navLink}>Services ▾</button>
            {activeDropdown === "services" && (
              <ul className="absolute left-0 mt-2 min-w-[180px] bg-white dark:bg-darkBackground shadow-lg rounded-md">
                <li><Link href="/Services" className={dropdownLink} onClick={() => setActiveDropdown(null)}>Overview</Link></li>
                <li><Link href="/Services/web-development" className={dropdownLink} onClick={() => setActiveDropdown(null)}>Web Development</Link></li>
                <li><Link href="/Services/performance" className={dropdownLink} onClick={() => setActiveDropdown(null)}>Performance Optimization</Link></li>
                <li><Link href="/Services/seo" className={dropdownLink} onClick={() => setActiveDropdown(null)}>SEO & Strategy</Link></li>
                <li><Link href="/Services/maintenance" className={dropdownLink} onClick={() => setActiveDropdown(null)}>Maintenance</Link></li>
              </ul>
            )}
          </li>

          <li className="relative" ref={resourcesRef}>
            <button onClick={() => toggleDropdown("resources")} className={navLink}>Resources ▾</button>
            {activeDropdown === "resources" && (
              <ul className="absolute left-0 mt-2 min-w-[180px] bg-white dark:bg-darkBackground shadow-lg rounded-md">
                <li><Link href="/Resources/Insight" className={dropdownLink} onClick={() => setActiveDropdown(null)}>Insight</Link></li>
                <li><Link href="/Resources/Toolkits" className={dropdownLink} onClick={() => setActiveDropdown(null)}>Toolkits</Link></li>
                <li><Link href="/Resources/Playground" className={dropdownLink} onClick={() => setActiveDropdown(null)}>Playground</Link></li>
                <li><Link href="/Resources/Faq" className={dropdownLink} onClick={() => setActiveDropdown(null)}>FAQ</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/Resume" className={navLink}>Resume</Link></li>
          <li><Link href="/Contact" className={navLink}>Contact</Link></li>
          <li><button onClick={toggleTheme}>{theme === "dark" ? "🌞" : "🌙"}</button></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 bg-white dark:bg-darkBackground shadow">
          <Link href="/" className={navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/About" className={navLink} onClick={() => setIsMobileMenuOpen(false)}>About</Link>

          <div className="space-y-1">
            <button onClick={() => toggleDropdown("projects")} className={navLink}>Projects ▾</button>
            {activeDropdown === "projects" && (
              <ul className="pl-4">
                <li><Link href="/Projects" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>All Projects</Link></li>
                <li><Link href="/Projects/nextjs-portfolio" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>Next.js Portfolio</Link></li>
                <li><Link href="/Projects/front/backend-challenges" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>Frontend/Backend Challenges</Link></li>
              </ul>
            )}
          </div>

          <div className="space-y-1">
            <button onClick={() => toggleDropdown("services")} className={navLink}>Services ▾</button>
            {activeDropdown === "services" && (
              <ul className="pl-4">
                <li><Link href="/Services" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>Overview</Link></li>
                <li><Link href="/Services/web-development" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>Web Development</Link></li>
                <li><Link href="/Services/performance" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>Performance Optimization</Link></li>
                <li><Link href="/Services/seo" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>SEO & Strategy</Link></li>
                <li><Link href="/Services/maintenance" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>Maintenance</Link></li>
              </ul>
            )}
          </div>

          <div className="space-y-1">
            <button onClick={() => toggleDropdown("resources")} className={navLink}>Resources ▾</button>
            {activeDropdown === "resources" && (
              <ul className="pl-4">
                <li><Link href="/Resources/Insight" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>Insight</Link></li>
                <li><Link href="/Resources/Toolkits" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>Toolkits</Link></li>
                <li><Link href="/Resources/Playground" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>Playground</Link></li>
                <li><Link href="/Resources/Faq" className={dropdownLink} onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}>FAQ</Link></li>
              </ul>
            )}
          </div>

          <Link href="/Resume" className={navLink} onClick={() => setIsMobileMenuOpen(false)}>Resume</Link>
          <Link href="/Contact" className={navLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <button onClick={toggleTheme} className="block text-xl">{theme === "dark" ? "🌞" : "🌙"}</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
