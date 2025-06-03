export default function StepIndicator({ step }) {
  const steps = ['Choose Service', 'Project Details', 'Confirm', 'Success'];
  return (
    <div className="flex justify-center mb-8">
      {steps.map((label, idx) => (
        <div key={label} className="flex items-center mx-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold 
            ${idx + 1 === step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}>
            {idx + 1}
          </div>
          <span className="ml-2 text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
