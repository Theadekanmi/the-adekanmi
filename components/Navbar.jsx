"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const projectsRef = useRef();
  const servicesRef = useRef();
  const resourcesRef = useRef();
  const mobileDropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const refs = [projectsRef, servicesRef, resourcesRef, mobileDropdownRef];
      const clickedInside = refs.some(ref => ref.current && ref.current.contains(event.target));
      if (!clickedInside) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(prev => (prev === menu ? null : menu));
  };

  const handleLinkClick = (event) => {
  const href = event.currentTarget ? event.currentTarget.getAttribute("href") : null;

  if (href) {
    setTimeout(() => {
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
      window.location.href = href;
    }, 200);
  }
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

        <button onClick={() => setIsMobileMenuOpen(prev => !prev)} className="lg:hidden text-2xl">
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden lg:flex space-x-6 font-semibold items-center">
          <li><Link href="/" className={navLink}>Home</Link></li>
          <li><Link href="/About" className={navLink}>About</Link></li>

          <li className="relative" ref={projectsRef}>
            <button onClick={() => toggleDropdown("projects")} className={navLink}>Projects ▾</button>
            {activeDropdown === "projects" && (
              <ul className="absolute left-0 mt-2 min-w-[180px] bg-white dark:bg-darkBackground shadow-lg rounded-md">
                <li><Link href="/Projects" className={dropdownLink} onClick={handleLinkClick}>All Projects</Link></li>
                <li><Link href="/Projects/nextjs-portfolio" className={dropdownLink} onClick={handleLinkClick}>Next.js Portfolio</Link></li>
                <li><Link href="/Projects/front/backend-challenges" className={dropdownLink} onClick={handleLinkClick}>Frontend/Backend Challenges</Link></li>
              </ul>
            )}
          </li>

          <li className="relative" ref={servicesRef}>
            <button onClick={() => toggleDropdown("services")} className={navLink}>Services ▾</button>
            {activeDropdown === "services" && (
              <ul className="absolute left-0 mt-2 min-w-[180px] bg-white dark:bg-darkBackground shadow-lg rounded-md">
                <li><Link href="/Services" className={dropdownLink} onClick={handleLinkClick}>Overview</Link></li>
                <li><Link href="/Services/web-development" className={dropdownLink} onClick={handleLinkClick}>Web Development</Link></li>
                <li><Link href="/Services/performance" className={dropdownLink} onClick={handleLinkClick}>Performance Optimization</Link></li>
                <li><Link href="/Services/seo" className={dropdownLink} onClick={handleLinkClick}>SEO & Strategy</Link></li>
                <li><Link href="/Services/maintenance" className={dropdownLink} onClick={handleLinkClick}>Maintenance</Link></li>
              </ul>
            )}
          </li>

          <li className="relative" ref={resourcesRef}>
            <button onClick={() => toggleDropdown("resources")} className={navLink}>Resources ▾</button>
            {activeDropdown === "resources" && (
              <ul className="absolute left-0 mt-2 min-w-[180px] bg-white dark:bg-darkBackground shadow-lg rounded-md">
                <li><Link href="/Resources/Insight" className={dropdownLink} onClick={handleLinkClick}>Insight</Link></li>
                <li><Link href="/Resources/Toolkits" className={dropdownLink} onClick={handleLinkClick}>Toolkits</Link></li>
                <li><Link href="/Resources/Playground" className={dropdownLink} onClick={handleLinkClick}>Playground</Link></li>
                <li><Link href="/Resources/Faq" className={dropdownLink} onClick={handleLinkClick}>FAQ</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/Resume" className={navLink}>Resume</Link></li>
          <li><Link href="/Contact" className={navLink}>Contact</Link></li>
          <li><button onClick={toggleTheme}>{theme === "dark" ? "🌞" : "🌙"}</button></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div ref={mobileDropdownRef} className="lg:hidden px-6 pb-4 space-y-3 bg-white dark:bg-darkBackground shadow">
          <Link href="/" className={navLink} onClick={handleLinkClick}>Home</Link>
          <Link href="/About" className={navLink} onClick={handleLinkClick}>About</Link>

          {/* Mobile Projects */}
          <div>
            <button onClick={() => toggleDropdown("projects")} className={navLink}>Projects ▾</button>
            {activeDropdown === "projects" && (
              <ul className="pl-4 mt-1 bg-white dark:bg-darkBackground rounded-md border border-gray-300 dark:border-gray-700 shadow-inner">
                <li><Link href="/Projects" className={dropdownLink} onClick={handleLinkClick}>All Projects</Link></li>
                <li><Link href="/Projects/nextjs-portfolio" className={dropdownLink} onClick={handleLinkClick}>Next.js Portfolio</Link></li>
                <li><Link href="/Projects/front/backend-challenges" className={dropdownLink} onClick={handleLinkClick}>Frontend/Backend Challenges</Link></li>
              </ul>
            )}
          </div>

          {/* Mobile Services */}
          <div>
            <button onClick={() => toggleDropdown("services")} className={navLink}>Services ▾</button>
            {activeDropdown === "services" && (
              <ul className="pl-4 mt-1 bg-white dark:bg-darkBackground rounded-md border border-gray-300 dark:border-gray-700 shadow-inner">
                <li><Link href="/Services" className={dropdownLink} onClick={handleLinkClick}>Overview</Link></li>
                <li><Link href="/Services/web-development" className={dropdownLink} onClick={handleLinkClick}>Web Development</Link></li>
                <li><Link href="/Services/performance" className={dropdownLink} onClick={handleLinkClick}>Performance Optimization</Link></li>
                <li><Link href="/Services/seo" className={dropdownLink} onClick={handleLinkClick}>SEO & Strategy</Link></li>
                <li><Link href="/Services/maintenance" className={dropdownLink} onClick={handleLinkClick}>Maintenance</Link></li>
              </ul>
            )}
          </div>

          {/* Mobile Resources */}
          <div>
            <button onClick={() => toggleDropdown("resources")} className={navLink}>Resources ▾</button>
            {activeDropdown === "resources" && (
              <ul className="pl-4 mt-1 bg-white dark:bg-darkBackground rounded-md border border-gray-300 dark:border-gray-700 shadow-inner">
                <li><Link href="/Resources/Insight" className={dropdownLink} onClick={handleLinkClick}>Insight</Link></li>
                <li><Link href="/Resources/Toolkits" className={dropdownLink} onClick={handleLinkClick}>Toolkits</Link></li>
                <li><Link href="/Resources/Playground" className={dropdownLink} onClick={handleLinkClick}>Playground</Link></li>
                <li><Link href="/Resources/Faq" className={dropdownLink} onClick={handleLinkClick}>FAQ</Link></li>
              </ul>
            )}
          </div>

          <Link href="/Resume" className={navLink} onClick={handleLinkClick}>Resume</Link>
          <Link href="/Contact" className={navLink} onClick={handleLinkClick}>Contact</Link>
          <button onClick={toggleTheme} className="block text-xl">{theme === "dark" ? "🌞" : "🌙"}</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

