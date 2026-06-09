import emailjs from '@emailjs/browser';

const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  leadTemplateId: process.env.REACT_APP_EMAILJS_LEAD_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

const getMissingConfig = () =>
  Object.entries({
    serviceId: emailjsConfig.serviceId,
    leadTemplateId: emailjsConfig.leadTemplateId,
    publicKey: emailjsConfig.publicKey,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

export const isEmailJsConfigured = () => getMissingConfig().length === 0;

export const sendLeadEmail = async (formData, source = 'Lead Form') => {
  const missingConfig = getMissingConfig();

  if (missingConfig.length > 0) {
    throw new Error(
      `EmailJS is missing required config: ${missingConfig.join(', ')}`
    );
  }

  const templateParams = {
    name: formData.name,
    email: formData.email,
    from_name: formData.name,
    user_name: formData.name,
    user_email: formData.email,
    to_email: formData.email,
    to_name: formData.name,
    reply_to: formData.email,
    user_phone: formData.phone || 'Not provided',
    phone: formData.phone || 'Not provided',
    message: formData.message || 'No message provided',
    source,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    submitted_at: new Date().toLocaleString('en-AU', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
  };

  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.leadTemplateId,
    templateParams,
    {
      publicKey: emailjsConfig.publicKey,
    }
  );
};
