import React, { useState, useEffect } from 'react';

function ConsultationPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder - can connect to backend later
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="consultation-popup-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="consultation-popup" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="consultation-popup-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className="consultation-popup-title">Book 1:1 Consultation</h2>
        <p className="consultation-popup-subtitle">Schedule a personalised consultation with our migration experts.</p>
        <form className="consultation-popup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <textarea
            placeholder="Tell us about your migration goals..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
          />
          <button type="submit" className="consultation-popup-submit">Request Consultation</button>
        </form>
      </div>
    </div>
  );
}

export default ConsultationPopup;
