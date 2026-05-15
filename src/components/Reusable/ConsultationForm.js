import React, { useState } from 'react';

function ConsultationForm({
  className = 'consultation-popup-form',
  submitClassName = 'consultation-popup-submit',
  submitLabel = 'Request Consultation',
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
  };

  return (
    <>
      <form className={className} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={updateField('name')}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={updateField('email')}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={updateField('phone')}
        />
        <textarea
          placeholder="Tell us about your migration goals..."
          value={formData.message}
          onChange={updateField('message')}
          rows={4}
        />
        <button type="submit" className={submitClassName}>
          {submitLabel}
        </button>
      </form>
      {isSubmitted && (
        <p className="consultation-form-success">
          Thanks, we&apos;ve received your request and will get in touch soon.
        </p>
      )}
    </>
  );
}

export default ConsultationForm;
