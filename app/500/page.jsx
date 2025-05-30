export default function Custom500() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-5xl font-bold text-red-600">500 - Internal Server Error</h1>
      <p className="text-lg mt-4">
        Oops! Something went wrong on our end. Please try refreshing the page or come back later.
      </p>

      {/* Button to return to Home */}
      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">Go to Home</a>
    </section>
  );
}
