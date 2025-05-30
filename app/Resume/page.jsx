"use client";
// Use Router hook
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();

  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold">My Resume</h1>
      <button onClick={() => router.push("/Resume/experience")} className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4">
        View Experience
      </button>
      <button onClick={() => router.push("/Resume/skills")} className="bg-green-600 text-white px-6 py-3 rounded-lg mt-4 ml-4">
        View Skills
      </button>
    </section>
  );
}