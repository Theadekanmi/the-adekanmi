"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="w-full lg:w-[280px] lg:h-screen bg-[var(--bg-secondary)] border-r border-[var(--border-color)] p-4 sm:p-6 lg:fixed lg:left-0 lg:top-0 lg:overflow-y-auto flex flex-col">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-3 right-3 lg:top-4 lg:right-4 text-lg p-2 rounded-full bg-[var(--bg-card)] hover:bg-[var(--border-color)] transition-colors z-10"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>

      {/* Main Content - Scrollable */}
      <div className="flex-1">
        {/* Profile Image */}
        <div className="flex flex-col items-center mt-8 lg:mt-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
            <div className="w-full h-full rounded-xl overflow-hidden bg-[var(--bg-card)] flex items-center justify-center">
              <span className="text-4xl sm:text-5xl">👨‍💻</span>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="mt-3 text-lg sm:text-xl font-semibold text-[var(--text-primary)] text-center">Adekanmi Adedigba</h1>
          <span className="mt-2 px-3 py-1 text-xs sm:text-sm bg-[var(--bg-card)] text-[var(--text-secondary)] rounded-lg border border-[var(--border-color)]">
            Full-Stack Developer
          </span>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 mt-4">
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("switchToContact"));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 sm:px-5 py-2 bg-[var(--accent)] text-black font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors text-xs sm:text-sm cursor-pointer"
            >
              Hire me
            </button>
            <a
              href="https://drive.google.com/file/d/1inI58gp5tBz3ahCixr0bQMsM_hAfX9MR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2 bg-[var(--bg-card)] text-[var(--text-primary)] font-medium rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors text-xs sm:text-sm flex items-center gap-1"
            >
              CV <span>📄</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 sm:my-5 border-t border-[var(--border-color)]"></div>

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
              <FaEnvelope className="text-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wide">Email</p>
              <a href="mailto:theadekanmi@gmail.com" className="text-xs sm:text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors truncate block">
                theadekanmi@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
              <FaPhone className="text-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wide">Phone</p>
              <a href="tel:+2348100098339" className="text-xs sm:text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                +234 810 009 8339
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
              <FaMapMarkerAlt className="text-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wide">Location</p>
              <p className="text-xs sm:text-sm text-[var(--text-primary)]">Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 sm:my-5 border-t border-[var(--border-color)]"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
          <a href="https://github.com/theadekanmi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">
            <FaGithub className="text-sm" />
          </a>
          <a href="http://www.linkedin.com/in/theadekanmi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">
            <FaLinkedin className="text-sm" />
          </a>
          <a href="https://twitter.com/THEADEKANMI" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">
            <FaTwitter className="text-sm" />
          </a>
          <a href="https://wa.me/2348100098339" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">
            <FaWhatsapp className="text-sm" />
          </a>
          <a href="https://www.instagram.com/theadekanmi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">
            <FaInstagram className="text-sm" />
          </a>
        </div>
      </div>

      {/* Footer - Fixed at bottom */}
      <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
        <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] text-center mb-2">
          © 2025 Adekanmi Adedigba. All rights reserved.
        </p>
        <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] text-center">
          Powered by{" "}
          <a 
            href="https://prowebnigeria.ng" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            ProWeb Nigeria
          </a>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
