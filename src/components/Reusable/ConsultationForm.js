import React, { useState } from 'react';
import { sendLeadEmail } from '../../services/emailjsService';

function ConsultationForm({
  className = 'consultation-popup-form',
  submitClassName = 'consultation-popup-submit',
  submitLabel = 'Request Consultation',
  source = 'Lead Form',
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateField = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setIsSubmitted(false);
    setErrorMessage('');

    try {
      await sendLeadEmail(formData, source);
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess(formData);
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Lead form email failed:', error);
      setErrorMessage(
        'Sorry, we could not send your request right now. Please try again or email admin@esante.com.au.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className={className} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={updateField('name')}
          disabled={isSubmitting}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={updateField('email')}
          disabled={isSubmitting}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={updateField('phone')}
          disabled={isSubmitting}
        />
        <textarea
          placeholder="Tell us about your migration goals..."
          value={formData.message}
          onChange={updateField('message')}
          disabled={isSubmitting}
          rows={4}
        />
        <button type="submit" className={submitClassName} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : submitLabel}
        </button>
      </form>
      {isSubmitted && (
        <p className="consultation-form-success">
          Thanks, we&apos;ve received your request and will get in touch soon.
        </p>
      )}
      {errorMessage && (
        <p className="consultation-form-error">
          {errorMessage}
        </p>
      )}
    </>
  );
}

export default ConsultationForm;
