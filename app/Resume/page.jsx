"use client";
import { useRouter } from "next/navigation";
import { EnvelopeIcon, PhoneIcon, ArrowDownTrayIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Resume() {
  return (
    <div>
      {/* SEO H1 Heading */}
      <h1 className="sr-only">Adekanmi Adedigba Resume - Full-Stack Developer Experience & Skills</h1>
      
      <ResumePage />
    </div>
  );
}
