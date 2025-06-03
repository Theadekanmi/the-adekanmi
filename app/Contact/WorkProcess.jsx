export default function WorkProcess() {
  const steps = [
    { title: 'Discovery', desc: 'We’ll discuss your goals, requirements, and vision.' },
    { title: 'Planning', desc: 'A detailed roadmap will be created.' },
    { title: 'Development', desc: 'Built with modern best practices.' },
    { title: 'Testing & Launch', desc: 'Thorough QA before launch.' },
    { title: 'Support', desc: 'Post-launch maintenance and support.' },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-6 text-center">My Work Process</h2>
      <div className="grid gap-6 md:grid-cols-5">
        {steps.map((step, idx) => (
          <div key={idx} className="p-4 border rounded-lg shadow hover:shadow-md transition">
            <div className="text-2xl font-bold mb-2">{String(idx + 1).padStart(2, '0')}</div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
