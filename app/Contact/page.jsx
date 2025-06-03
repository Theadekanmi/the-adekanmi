'use client';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import StepIndicator from './StepIndicator';
import WorkProcess from './WorkProcess';
import ProjectDetails from './ProjectDetails';
import Confirm from './Confirm';
import Success from './Success';
import ThankYou from './ThankYou'; 

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSelect = (service) => setSelectedService(service);
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFinalSubmit = async () => {
    const submissionData = new FormData();
    submissionData.append('name', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('phone', formData.phone);
    submissionData.append('message', formData.message);
    submissionData.append('service', selectedService);

    try {
      const res = await fetch('https://usebasin.com/f/8ecaf1613235', {
        method: 'POST',
        body: submissionData,
      });

      if (res.ok) {
        nextStep(); // Go to ThankYou step
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  return (
    <section className="p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Get Started with Adekanmi Adedigba</h1>
      <p className="text-center text-lg mb-8">
        Let's work together to bring your vision to life. Follow these simple steps to begin our journey.
      </p>

      <StepIndicator step={step} />

      {step === 1 && (
        <ServiceCard selected={selectedService} onSelect={handleSelect} onNext={nextStep} />
      )}

      {step === 2 && (
        <ProjectDetails data={formData} onChange={handleChange} onNext={nextStep} onBack={prevStep} />
      )}

      {step === 3 && (
        <Confirm data={formData} service={selectedService} onBack={prevStep} onNext={nextStep} />
      )}

      {step === 4 && (
        <Success onSubmit={handleFinalSubmit} />
      )}

      {step === 5 && <ThankYou />}

      <WorkProcess />
    </section>
  );
}
