"use client";
import { useRouter } from "next/navigation";
import { EnvelopeIcon, PhoneIcon, ArrowDownTrayIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function ResumePage() {
  const router = useRouter();

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">My Resume</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        A comprehensive overview of my professional journey, skills, and expertise in web development and software engineering.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Adekanmi Adedigba</h2>
        <p className="text-blue-600 dark:text-blue-400 font-medium">Full Stack Developer & Software Engineer</p>

        <div className="flex justify-center items-center gap-2 mt-4 text-gray-700 dark:text-gray-300">
          <EnvelopeIcon className="h-5 w-5 text-blue-600" />
          <a href="mailto:ismaheel4real2008@gmail.com" className="hover:underline">
            Theadekanmi@gmail.com
          </a>
        </div>

        <div className="flex justify-center items-center gap-2 mt-2 text-gray-700 dark:text-gray-300">
          <PhoneIcon className="h-5 w-5 text-green-600" />
          <span>+2348100098339</span>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <a
        href="https://drive.google.com/file/d/1inI58gp5tBz3ahCixr0bQMsM_hAfX9MR/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
          <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
          MY CV
        </a>
        <a
          href="/Contact"
          className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition">
          <PaperAirplaneIcon className="h-5 w-5 mr-2 rotate-45" />
          Contact Me
        </a>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => router.push("/Resume/experience")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          View Experience
        </button>
        <button
          onClick={() => router.push("/Resume/skills")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
          View Skills
        </button>
      </div>
    </section>
  );
}
