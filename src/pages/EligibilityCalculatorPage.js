import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import { sendLeadEmail } from '../services/emailjsService';

function EligibilityCalculatorPage() {
  const [activeTab, setActiveTab] = useState('PROFILE');
  const [selectedAge, setSelectedAge] = useState('25-32');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    highestQualification: '',
    fieldOfStudy: '',
    graduationYear: '',
    preferredIntake: '',
    yearsExperience: '',
    currentRole: '',
    industry: '',
    englishTest: '',
    englishScore: '',
    testDate: '',
  });

  const [profileErrors, setProfileErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const tabs = ['PROFILE', 'EDUCATION', 'EXPERIENCE', 'ENGLISH'];
  const ageGroups = ['18-24', '25-32', '33-39', '40-44', '45+'];
  const isFinalStep = activeTab === tabs[tabs.length - 1];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setProfileErrors((p) => ({
      ...p,
      [name]: '',
    }));
  };

  const sectionConfig = {
    PROFILE: {
      title: 'Personal Details',
      description: "We'll use this to personalise your assessment results.",
    },
    EDUCATION: {
      title: 'Education',
      description: 'Tell us about your highest qualification and field of study.',
    },
    EXPERIENCE: {
      title: 'Work Experience',
      description: 'Share your professional background so we can match visa and course options.',
    },
    ENGLISH: {
      title: 'English Proficiency',
      description: 'Add your English test details so we can assess eligibility accurately.',
    },
  };

  const renderTabFields = () => {
    switch (activeTab) {
      case 'PROFILE':
        return (
          <>
            {/* First Name and Last Name Row – Figma: ~8px label to field, 25–30px between rows */}
            <div className="grid md:grid-cols-2 gap-6" style={{ gap: '28px' }}>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="e.g. Sarah"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.firstName && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.firstName}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="e.g. Jenkins"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.lastName && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.lastName}</span>
                )}
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6" style={{ gap: '28px' }}>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.email && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.email}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+61 ..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.phone && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.phone}</span>
                )}
              </div>
            </div>

            {/* Age Group – Figma: 40–50px gap from fields above; 10–15px label to buttons */}
            <div style={{ marginTop: '48px' }}>
              <label className="block text-sm font-medium text-[#00352B] mb-3">Age Group</label>
              <div className="grid grid-cols-5 gap-4">
                {ageGroups.map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => setSelectedAge(age)}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                      selectedAge === age
                        ? 'border-[#00352B] bg-[#00352B]/5 text-[#00352B]'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          </>
        );
      case 'EDUCATION':
        return (
          <>
            <div className="grid md:grid-cols-2 gap-6" style={{ gap: '28px' }}>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  Highest Qualification
                </label>
                <input
                  type="text"
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleInputChange}
                  placeholder="e.g. Bachelor’s Degree"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.highestQualification && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.highestQualification}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  Field of Study
                </label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  placeholder="e.g. Computer Science"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.fieldOfStudy && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.fieldOfStudy}</span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6" style={{ gap: '28px' }}>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  Graduation Year
                </label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  placeholder="e.g. 2022"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.graduationYear && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.graduationYear}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  Preferred Intake
                </label>
                <input
                  type="text"
                  name="preferredIntake"
                  value={formData.preferredIntake}
                  onChange={handleInputChange}
                  placeholder="e.g. Feb 2026"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.preferredIntake && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.preferredIntake}</span>
                )}
              </div>
            </div>
          </>
        );
      case 'EXPERIENCE':
        return (
          <>
            <div className="grid md:grid-cols-2 gap-6" style={{ gap: '28px' }}>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                  placeholder="e.g. 3 years"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.yearsExperience && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.yearsExperience}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  Current Role
                </label>
                <input
                  type="text"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleInputChange}
                  placeholder="e.g. Software Engineer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.currentRole && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.currentRole}</span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6" style={{ gap: '28px' }}>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">Industry</label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="e.g. IT, Healthcare"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.industry && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.industry}</span>
                )}
              </div>
            </div>
          </>
        );
      case 'ENGLISH':
        return (
          <>
            <div className="grid md:grid-cols-2 gap-6" style={{ gap: '28px' }}>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  English Test
                </label>
                <input
                  type="text"
                  name="englishTest"
                  value={formData.englishTest}
                  onChange={handleInputChange}
                  placeholder="e.g. IELTS, PTE"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.englishTest && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.englishTest}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">
                  Overall Score
                </label>
                <input
                  type="text"
                  name="englishScore"
                  value={formData.englishScore}
                  onChange={handleInputChange}
                  placeholder="e.g. 7.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.englishScore && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.englishScore}</span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6" style={{ gap: '28px' }}>
              <div>
                <label className="block text-sm font-medium text-[#00352B] mb-2">Test Date</label>
                <input
                  type="text"
                  name="testDate"
                  value={formData.testDate}
                  onChange={handleInputChange}
                  placeholder="e.g. Jan 2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                {profileErrors.testDate && (
                  <span style={{ color: '#b42318', fontSize: '12px', display: 'block', marginTop: '4px' }}>{profileErrors.testDate}</span>
                )}
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const validateProfile = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(emailTrimmed)) {
        errors.email = 'Please enter a valid email address';
      }
    }
    const phoneTrimmed = formData.phone.trim();
    if (phoneTrimmed) {
      const phoneRegex = /^\+?[0-9\s\-()]+$/;
      const digitsOnly = phoneTrimmed.replace(/\D/g, '');

      if (!phoneRegex.test(phoneTrimmed)) {
        errors.phone = 'Phone number can only contain digits, spaces, dashes, parentheses, or +';
      } else if (phoneTrimmed.startsWith('+')) {
        if (phoneTrimmed.startsWith('+91')) {
          if (digitsOnly.substring(2).length !== 10) {
            errors.phone = 'Indian phone number must be exactly 10 digits after +91';
          }
        } else if (phoneTrimmed.startsWith('+61')) {
          if (![9, 10].includes(digitsOnly.substring(2).length)) {
            errors.phone = 'Australian phone number must be 9 or 10 digits after +61';
          }
        } else if (phoneTrimmed.startsWith('+1')) {
          if (digitsOnly.substring(1).length !== 10) {
            errors.phone = 'US/Canada phone number must be exactly 10 digits after +1';
          }
        } else {
          if (digitsOnly.length < 11 || digitsOnly.length > 14) {
            errors.phone = 'International phone number has an invalid length';
          }
        }
      } else {
        if (digitsOnly.length !== 10) {
          errors.phone = 'Local phone number must be exactly 10 digits';
        }
      }
    }
    setProfileErrors((p) => {
      const cleaned = { ...p };
      delete cleaned.firstName;
      delete cleaned.lastName;
      delete cleaned.email;
      delete cleaned.phone;
      return { ...cleaned, ...errors };
    });
    return Object.keys(errors).length === 0;
  };

  const validateEducation = () => {
    const errors = {};
    if (!formData.highestQualification.trim()) {
      errors.highestQualification = 'Highest Qualification is required';
    }
    if (!formData.fieldOfStudy.trim()) {
      errors.fieldOfStudy = 'Field of Study is required';
    }
    if (!formData.graduationYear.trim()) {
      errors.graduationYear = 'Graduation Year is required';
    }
    if (!formData.preferredIntake.trim()) {
      errors.preferredIntake = 'Preferred Intake is required';
    }
    setProfileErrors((p) => {
      const cleaned = { ...p };
      delete cleaned.highestQualification;
      delete cleaned.fieldOfStudy;
      delete cleaned.graduationYear;
      delete cleaned.preferredIntake;
      return { ...cleaned, ...errors };
    });
    return Object.keys(errors).length === 0;
  };

  const validateExperience = () => {
    const errors = {};
    if (!formData.yearsExperience.trim()) {
      errors.yearsExperience = 'Years of Experience is required';
    }
    if (!formData.currentRole.trim()) {
      errors.currentRole = 'Current Role is required';
    }
    if (!formData.industry.trim()) {
      errors.industry = 'Industry is required';
    }
    setProfileErrors((p) => {
      const cleaned = { ...p };
      delete cleaned.yearsExperience;
      delete cleaned.currentRole;
      delete cleaned.industry;
      return { ...cleaned, ...errors };
    });
    return Object.keys(errors).length === 0;
  };

  const validateEnglish = () => {
    const errors = {};
    if (!formData.englishTest.trim()) {
      errors.englishTest = 'English Test is required';
    }
    if (!formData.englishScore.trim()) {
      errors.englishScore = 'Overall Score is required';
    }
    if (!formData.testDate.trim()) {
      errors.testDate = 'Test Date is required';
    }
    setProfileErrors((p) => {
      const cleaned = { ...p };
      delete cleaned.englishTest;
      delete cleaned.englishScore;
      delete cleaned.testDate;
      return { ...cleaned, ...errors };
    });
    return Object.keys(errors).length === 0;
  };

  const validateActiveStep = () => {
    if (activeTab === 'PROFILE') {
      return validateProfile();
    }
    if (activeTab === 'EDUCATION') {
      return validateEducation();
    }
    if (activeTab === 'EXPERIENCE') {
      return validateExperience();
    }
    if (activeTab === 'ENGLISH') {
      return validateEnglish();
    }
    return true;
  };

  const isTabAccessible = (tab) => {
    const targetIndex = tabs.indexOf(tab);
    const currentIndex = tabs.indexOf(activeTab);
    
    if (targetIndex <= currentIndex) {
      return true;
    }
    
    if (targetIndex > 0) {
      if (!validateProfile()) return false;
    }
    if (targetIndex > 1) {
      if (!validateEducation()) return false;
    }
    if (targetIndex > 2) {
      if (!validateExperience()) return false;
    }
    return true;
  };

  const handleTabClick = (tab) => {
    if (isTabAccessible(tab)) {
      setActiveTab(tab);
    } else {
      validateActiveStep();
    }
  };

  const handleNextStep = () => {
    if (!validateActiveStep()) {
      return;
    }
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handleSubmit = async () => {
    const isProfileValid = validateProfile();
    const isEducationValid = validateEducation();
    const isExperienceValid = validateExperience();
    const isEnglishValid = validateEnglish();

    if (!isProfileValid) {
      setActiveTab('PROFILE');
      return;
    }
    if (!isEducationValid) {
      setActiveTab('EDUCATION');
      return;
    }
    if (!isExperienceValid) {
      setActiveTab('EXPERIENCE');
      return;
    }
    if (!isEnglishValid) {
      setActiveTab('ENGLISH');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const detailMessage = `
Age Group: ${selectedAge}

Education Details:
- Highest Qualification: ${formData.highestQualification}
- Field of Study: ${formData.fieldOfStudy}
- Graduation Year: ${formData.graduationYear}
- Preferred Intake: ${formData.preferredIntake}

Work Experience:
- Years of Experience: ${formData.yearsExperience}
- Current Role: ${formData.currentRole}
- Industry: ${formData.industry}

English Proficiency:
- Test: ${formData.englishTest}
- Overall Score: ${formData.englishScore}
- Test Date: ${formData.testDate}
`.trim();

      const leadData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: detailMessage,
      };

      await sendLeadEmail(leadData, 'Eligibility Calculator');
      setShowSuccessPopup(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        highestQualification: '',
        fieldOfStudy: '',
        graduationYear: '',
        preferredIntake: '',
        yearsExperience: '',
        currentRole: '',
        industry: '',
        englishTest: '',
        englishScore: '',
        testDate: '',
      });
      setSelectedAge('25-32');
      setProfileErrors({});
    } catch (err) {
      console.error('Submission failed:', err);
      setSubmitError('Failed to submit eligibility assessment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="eligibility-calculator-page min-h-screen bg-gray-50">
      <Header />
      <main className="eligibility-calculator-main" style={{ paddingTop: '120px' }}>
        {/* Hero Section – negative margin pulls hero under navbar so no white gap */}
        <div
          className="relative bg-cover bg-center"
          style={{
            height: '420px',
            marginTop: '-120px',
            backgroundImage:
              "linear-gradient(rgba(0, 53, 43, 0.6), rgba(0, 53, 43, 0.5)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=500&fit=crop')",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <div style={{ marginBottom: '24px' }}>
              <span
                className="inline-block text-white text-xs font-medium px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.35)',
                }}
              >
                FREE ASSESSMENT TOOL
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-center"
              style={{ marginBottom: '16px' }}
            >
              Check Your Eligibility
            </h1>
            <p
              className="text-center text-white/90 text-base md:text-lg max-w-2xl"
              style={{ lineHeight: 1.5 }}
            >
              See which Australian visa pathways or university courses match your profile in under 2
              minutes.
            </p>
          </div>
        </div>

        {/* Form Container – Figma: card overlaps hero ~1/3 down; generous gaps inside */}
        <div className="max-w-4xl mx-auto px-4 relative z-10" style={{ marginTop: '-80px', paddingBottom: '96px' }}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`flex-1 py-4 px-6 text-sm font-medium transition-all ${
                    activeTab === tab
                      ? 'text-[#00352B] border-b-2 border-[#00352B]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form Content – Figma: 40–50px tabs to header; 30–40px description to fields; 60–70px above Next Step */}
            <div className="px-8 md:px-12 pt-12 pb-10">
              <div style={{ marginBottom: '40px' }}>
                <h2 className="text-2xl font-bold text-[#00352B] mb-3">
                  {sectionConfig[activeTab].title}
                </h2>
                <p className="text-gray-600 text-sm" style={{ lineHeight: 1.5 }}>
                  {sectionConfig[activeTab].description}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {renderTabFields()}

                {/* Next Step – Figma: substantial gap (60–70px) above button */}
                <div className="flex flex-col items-end gap-2" style={{ marginTop: '64px', paddingTop: '8px', width: '100%' }}>
                  {submitError && (
                    <span style={{ color: '#b42318', fontSize: '14px', marginBottom: '8px' }}>{submitError}</span>
                  )}
                  <button
                    type="button"
                    onClick={isFinalStep ? handleSubmit : handleNextStep}
                    disabled={isSubmitting}
                    className="bg-[#00352B] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : (isFinalStep ? 'Submit' : 'Next Step')}
                    {!isFinalStep && !isSubmitting && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showSuccessPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(0, 53, 43, 0.56)' }}
        >
          <div
            className="bg-white rounded-xl shadow-2xl text-center"
            style={{ maxWidth: 420, width: '100%', padding: '36px 28px' }}
          >
            <div
              className="mx-auto flex items-center justify-center rounded-full"
              style={{
                width: 56,
                height: 56,
                backgroundColor: 'rgba(0, 53, 43, 0.08)',
                color: '#00352B',
                marginBottom: 20,
              }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.4}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#00352B]" style={{ marginBottom: 12 }}>
              Thank You
            </h3>
            <p className="text-gray-600" style={{ lineHeight: 1.6, marginBottom: 28 }}>
              Our Counsellor will contact you.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="bg-[#00352B] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              OK
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default EligibilityCalculatorPage;

