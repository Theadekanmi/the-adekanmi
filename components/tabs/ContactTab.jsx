"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

const ContactTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:theadekanmi@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact">
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 pb-2 border-b-2 border-[var(--accent)] inline-block">
        Contact
      </h2>

      {/* Map Placeholder */}
      <div className="w-full h-36 sm:h-48 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] mb-6 sm:mb-8 flex items-center justify-center overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932537065!2d3.1438721!3d6.5480357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lagos, Nigeria Map"
        ></iframe>
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-4 sm:mb-6">
        Reach out to me
      </h3>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <a
          href="mailto:theadekanmi@gmail.com"
          className="flex items-center gap-3 p-3 sm:p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors"
        >
          <FaEnvelope className="text-[var(--accent)] text-sm sm:text-base flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-[var(--text-secondary)]">Email</p>
            <p className="text-xs sm:text-sm text-[var(--text-primary)] truncate">theadekanmi@gmail.com</p>
          </div>
        </a>

        <a
          href="tel:+2348100098339"
          className="flex items-center gap-3 p-3 sm:p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors"
        >
          <FaPhone className="text-[var(--accent)] text-sm sm:text-base flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-[var(--text-secondary)]">Phone</p>
            <p className="text-xs sm:text-sm text-[var(--text-primary)]">+234 810 009 8339</p>
          </div>
        </a>

        <a
          href="https://wa.me/2348100098339"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 sm:p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors"
        >
          <FaWhatsapp className="text-[var(--accent)] text-sm sm:text-base flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-[var(--text-secondary)]">WhatsApp</p>
            <p className="text-xs sm:text-sm text-[var(--text-primary)]">Message me</p>
          </div>
        </a>

        <div className="flex items-center gap-3 p-3 sm:p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)]">
          <FaMapMarkerAlt className="text-[var(--accent)] text-sm sm:text-base flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-[var(--text-secondary)]">Location</p>
            <p className="text-xs sm:text-sm text-[var(--text-primary)]">Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs sm:text-sm text-[var(--text-secondary)] mb-1.5 sm:mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-sm sm:text-base text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm text-[var(--text-secondary)] mb-1.5 sm:mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-sm sm:text-base text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs sm:text-sm text-[var(--text-secondary)] mb-1.5 sm:mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-sm sm:text-base text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[var(--accent)] text-black text-sm sm:text-base font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
        >
          <FaPaperPlane className="text-sm" /> Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactTab;
