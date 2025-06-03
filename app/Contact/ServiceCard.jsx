export default function ServiceCard({ selected, onSelect, onNext }) {
  const services = [
    { title: 'Frontend Development', icon: '💻', desc: 'Responsive, modern UI with HTML/CSS/JS' },
    { title: 'Backend Development', icon: '⚙️', desc: 'APIs, databases, and logic-heavy features' },
    { title: 'SEO', icon: '🔍', desc: 'Optimization for better visibility on search engines' },
    { title: 'Performance Optimization', icon: '🚀', desc: 'Speed and performance improvements' },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((s) => (
        <div
          key={s.title}
          onClick={() => onSelect(s.title)}
          className={`border rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105 ${
            selected === s.title ? 'border-blue-600' : 'border-gray-300'
          }`}
        >
          <h2 className="text-2xl">{s.icon} {s.title}</h2>
          <p className="text-sm mt-2">{s.desc}</p>
        </div>
      ))}
      <button
        onClick={onNext}
        disabled={!selected}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded disabled:bg-gray-400"
      >
        Continue
      </button>
    </div>
  );
}
