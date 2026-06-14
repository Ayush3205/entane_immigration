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
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) {
        error = 'Name is required';
      }
    } else if (name === 'email') {
      const emailTrimmed = value.trim();
      if (!emailTrimmed) {
        error = 'Email is required';
      } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailTrimmed)) {
          error = 'Please enter a valid email address';
        }
      }
    } else if (name === 'phone') {
      const phoneTrimmed = value.trim();
      if (phoneTrimmed) {
        const phoneRegex = /^\+?[0-9\s\-()]+$/;
        const digitsOnly = phoneTrimmed.replace(/\D/g, '');

        if (!phoneRegex.test(phoneTrimmed)) {
          error = 'Phone number can only contain digits, spaces, dashes, parentheses, or +';
        } else if (phoneTrimmed.startsWith('+')) {
          if (phoneTrimmed.startsWith('+91')) {
            if (digitsOnly.substring(2).length !== 10) {
              error = 'Indian phone number must be exactly 10 digits after +91';
            }
          } else if (phoneTrimmed.startsWith('+61')) {
            if (![9, 10].includes(digitsOnly.substring(2).length)) {
              error = 'Australian phone number must be 9 or 10 digits after +61';
            }
          } else if (phoneTrimmed.startsWith('+1')) {
            if (digitsOnly.substring(1).length !== 10) {
              error = 'US/Canada phone number must be exactly 10 digits after +1';
            }
          } else {
            if (digitsOnly.length < 11 || digitsOnly.length > 14) {
              error = 'International phone number has an invalid length';
            }
          }
        } else {
          if (digitsOnly.length !== 10) {
            error = 'Local phone number must be exactly 10 digits';
          }
        }
      }
    }
    return error;
  };

  const updateField = (field) => (event) => {
    const val = event.target.value;
    setFormData((current) => ({
      ...current,
      [field]: val,
    }));
    setErrors((current) => ({
      ...current,
      [field]: '',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const phoneErr = validateField('phone', formData.phone);

    if (nameErr || emailErr || phoneErr) {
      setErrors({
        name: nameErr,
        email: emailErr,
        phone: phoneErr,
      });
      return;
    }

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
      setErrors({});
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
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '4px' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={updateField('name')}
            disabled={isSubmitting}
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
          {errors.name && (
            <span style={{ color: '#b42318', fontSize: '12px', textAlign: 'left', paddingLeft: '4px' }}>
              {errors.name}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '4px' }}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={updateField('email')}
            disabled={isSubmitting}
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
          {errors.email && (
            <span style={{ color: '#b42318', fontSize: '12px', textAlign: 'left', paddingLeft: '4px' }}>
              {errors.email}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '4px' }}>
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={updateField('phone')}
            disabled={isSubmitting}
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
          {errors.phone && (
            <span style={{ color: '#b42318', fontSize: '12px', textAlign: 'left', paddingLeft: '4px' }}>
              {errors.phone}
            </span>
          )}
        </div>

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
