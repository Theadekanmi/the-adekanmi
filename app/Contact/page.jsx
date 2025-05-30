"use client";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/Contact/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 text-center">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <input type="text" placeholder="Your Name" className="border px-4 py-2" required />
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4">
        Send Message
      </button>
    </form>
  );
}
