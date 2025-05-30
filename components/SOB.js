// Dynamic import
export default function SOB() {
  console.log("SOB Component Loaded!");

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center px-6 py-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold mb-4">Let’s Build Something Great</h1>
        <p className="text-lg mb-6">
          I craft impactful digital experiences that merge creativity, strategy, and innovation.
          Whether you're launching a startup or scaling your vision, I can help bring your ideas to life.
        </p>
        {/* CTA Button */}
        <a
          href="/Projects"
          className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
