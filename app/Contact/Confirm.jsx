export default function Confirm({ data, service, onBack, onNext }) {
  return (
    <div className="max-w-xl mx-auto text-left">
      <h2 className="text-2xl font-semibold mb-4">Please confirm your information</h2>
      <ul className="space-y-2">
        <li><strong>Service:</strong> {service}</li>
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>Email:</strong> {data.email}</li>
        <li><strong>Phone:</strong> {data.phone}</li>
        <li><strong>Message:</strong> {data.message}</li>
      </ul>
      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="bg-gray-400 text-white px-6 py-2 rounded">Back</button>
        <button onClick={onNext} className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
      </div>
    </div>
  );
}
