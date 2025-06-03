'use client';

export default function ProjectDetails({ data, onChange, onNext, onBack }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={onChange}
        placeholder="Name"
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={onChange}
        placeholder="Email"
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={onChange}
        placeholder="Phone"
        className="w-full p-3 border rounded"
        required
      />
      <textarea
        name="message"
        value={data.message}
        onChange={onChange}
        placeholder="Tell me about your project"
        className="w-full p-3 border rounded h-32"
        required
      />

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-400 text-white px-6 py-2 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
