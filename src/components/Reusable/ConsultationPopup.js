import React, { useEffect } from 'react';
import ConsultationForm from './ConsultationForm';

function ConsultationPopup({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return (
    <div className="consultation-popup-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="consultation-popup" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="consultation-popup-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className="consultation-popup-title">Book 1:1 Consultation</h2>
        <p className="consultation-popup-subtitle">Schedule a personalised consultation with our migration experts.</p>
        <ConsultationForm onSuccess={onClose} />
      </div>
    </div>
  );
}

export default ConsultationPopup;
