import React from 'react';
import { FaLinkedin, FaTwitter, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p>&copy; 2025 ADEKANMI ADEDIGBA. All rights reserved.</p>

      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://github.com/theadekanmi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-200 hover:text-blue-600 text-3xl"
        >
          <FaGithub />
        </a>

        <a
          href="http://www.linkedin.com/in/theadekanmi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 text-3xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://twitter.com/THEADEKANMI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-3xl"
        >
          <FaTwitter />
        </a>

        <a
          href="https://wa.me/2348100098339"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-600 text-3xl"
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:theadekanmi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-200 hover:text-red-600 text-3xl"
        >
          <MdEmail />
        </a>

        <a
          href="https://www.instagram.com/theadekanmi?igsh=dnZsZmRnZ21hN3A2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-600 text-3xl"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
