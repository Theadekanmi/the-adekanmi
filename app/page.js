"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import AboutTab from "@/components/tabs/AboutTab";
import ResumeTab from "@/components/tabs/ResumeTab";
import PortfolioTab from "@/components/tabs/PortfolioTab";
import ResourcesTab from "@/components/tabs/ResourcesTab";
import BlogTab from "@/components/tabs/BlogTab";
import ContactTab from "@/components/tabs/ContactTab";

const tabs = ["About", "Resume", "Portfolio", "Resources", "Blog", "Contact"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  // Listen for custom event to switch to Contact tab
  useEffect(() => {
    const handleHireMe = () => {
      setActiveTab("Contact");
    };
    window.addEventListener("switchToContact", handleHireMe);
    return () => window.removeEventListener("switchToContact", handleHireMe);
  }, []);

  const renderTab = () => {
    switch (activeTab) {
      case "About": return <AboutTab />;
      case "Resume": return <ResumeTab />;
      case "Portfolio": return <PortfolioTab />;
      case "Resources": return <ResourcesTab />;
      case "Blog": return <BlogTab />;
      case "Contact": return <ContactTab />;
      default: return <AboutTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <h1 className="sr-only">Adekanmi Adedigba — Full-Stack Developer Portfolio</h1>
      
      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="lg:ml-[280px] min-h-screen">
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-10">
          {/* Navigation Tabs */}
          <nav className="mb-6 sm:mb-8 overflow-x-auto scrollbar-hide">
            <ul className="flex gap-1 bg-[var(--bg-secondary)] p-1 rounded-xl border border-[var(--border-color)] min-w-max lg:min-w-0 lg:justify-end">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                      activeTab === tab
                        ? "bg-[var(--accent)] text-black"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tab Content */}
          <div className="bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] p-4 sm:p-6 lg:p-8">
            {renderTab()}
          </div>
        </div>
      </main>
    </div>
  );
}
