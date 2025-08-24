'use client';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import StepIndicator from './StepIndicator';
import WorkProcess from './WorkProcess';
import ProjectDetails from './ProjectDetails';
import Confirm from './Confirm';
import Success from './Success';
import ThankYou from './ThankYou'; 

export default function Contact() {
  return (
    <div>
      {/* SEO H1 Heading */}
      <h1 className="sr-only">Contact Adekanmi Adedigba - Get In Touch for Web Development Projects</h1>
      
      <ContactPage />
    </div>
  );
}
