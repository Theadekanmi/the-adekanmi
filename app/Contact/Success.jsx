'use client';

export default function Success({ onSubmit }) {
  return (
    <div className="text-center space-y-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-green-600">Almost Done!</h2>
      <p className="text-lg">Click below to submit your details and finish the process.</p>
      <button
        onClick={onSubmit}
        className="px-6 py-3 bg-green-700 text-white font-semibold rounded shadow hover:bg-green-800 transition"
      >
        Submit & Finish
      </button>
    </div>
  );
}
