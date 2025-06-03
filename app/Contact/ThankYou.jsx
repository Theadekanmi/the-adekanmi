'use client';

export default function ThankYou() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold text-green-600">Thank You!</h1>
      <p className="text-lg mt-4">Your message has been received. We'll respond as soon as possible!</p>
      <a href="/" className="text-blue-600 mt-6 inline-block underline">Go back to Home</a>
    </section>
  );
}
