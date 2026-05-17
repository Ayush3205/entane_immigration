import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const HERO_IMAGE = '/images/employers/Hero.png';
const EMPLOYERS_CHOOSE_IMAGE = '/images/employers/Employers-Choose.png';

function CollaborationForm() {
  const [form, setForm] = useState({
    companyName: '',
    contactPerson: '',
    workEmail: '',
    phoneNumber: '',
    industry: '',
    hiringNeeds: '',
    requirements: '',
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    fontSize: 14,
    fontFamily: 'Poppins, sans-serif',
    border: '1px solid #ddd',
    borderRadius: 8,
    outline: 'none',
    color: '#1a1a1a',
    background: '#fff',
  };

  const labelStyle = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '1.2px',
    color: '#1a1a1a',
    marginBottom: 6,
    fontFamily: 'Poppins, sans-serif',
    textTransform: 'uppercase',
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px center',
    paddingRight: 40,
  };

  return (
    <div className="w-full rounded-[16px] bg-white" style={{ padding: '40px 44px', maxWidth: 660, margin: '0 auto' }}>
      <div className="flex" style={{ gap: 24, marginBottom: 24 }}>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Company Name</label>
          <input
            type="text"
            placeholder="Your Business Name"
            value={form.companyName}
            onChange={handleChange('companyName')}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Contact Person</label>
          <input
            type="text"
            placeholder="Full Name"
            value={form.contactPerson}
            onChange={handleChange('contactPerson')}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="flex" style={{ gap: 24, marginBottom: 24 }}>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Work Email</label>
          <input
            type="email"
            placeholder="name@company.com"
            value={form.workEmail}
            onChange={handleChange('workEmail')}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            placeholder="+61 ..."
            value={form.phoneNumber}
            onChange={handleChange('phoneNumber')}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="flex" style={{ gap: 24, marginBottom: 24 }}>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Industry</label>
          <select
            value={form.industry}
            onChange={handleChange('industry')}
            style={selectStyle}
          >
            <option value="" disabled>Select Industry</option>
            <option value="healthcare">Healthcare</option>
            <option value="construction">Construction</option>
            <option value="hospitality">Hospitality</option>
            <option value="engineering">Engineering</option>
            <option value="it">IT & Technology</option>
            <option value="mining">Mining</option>
            <option value="trades">Trades</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Hiring Needs</label>
          <select
            value={form.hiringNeeds}
            onChange={handleChange('hiringNeeds')}
            style={selectStyle}
          >
            <option value="" disabled>Select Volume</option>
            <option value="1-5">1–5 positions</option>
            <option value="6-20">6–20 positions</option>
            <option value="21-50">21–50 positions</option>
            <option value="50+">50+ positions</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col" style={{ marginBottom: 28 }}>
        <label style={labelStyle}>Specific Requirements</label>
        <textarea
          placeholder="Tell us about the roles you are looking to fill..."
          value={form.requirements}
          onChange={handleChange('requirements')}
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
        />
      </div>

      <button
        className="w-full font-poppins"
        style={{
          padding: '15px 0',
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: '1.5px',
          color: '#fff',
          background: '#00352B',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          textTransform: 'uppercase',
        }}
      >
        Submit Enquiry
      </button>
    </div>
  );
}

const EMPLOYERS_FAQ_ITEMS = [
  {
    question: 'How can Australian employers hire overseas workers legally?',
    answer:
      'Australian employers can hire overseas workers through employer-sponsored visa programs such as Subclass 482 (TSS), 186 (ENS), and 494 (regional). This requires meeting sponsorship criteria and following migration compliance processes.',
  },
  {
    question: 'What are the benefits of hiring skilled migrants in Australia?',
    answer:
      'Hiring skilled migrants helps employers:\n• Fill critical skill shortages\n• Improve workforce productivity\n• Access global talent pools\n• Support long-term business growth',
  },
  {
    question: 'What visa options are available for employers to sponsor workers?',
    answer:
      'Common employer-sponsored visa options include:\n• Subclass 482 – Temporary Skill Shortage (TSS)\n• Subclass 186 – Employer Nomination Scheme (PR)\n• Subclass 494 – Regional Sponsored Migration\n• Subclass 407 – Training Visa\n\nThe right option depends on role, location, and long-term workforce plans.',
  },
  {
    question: 'Is hiring overseas workers complicated for employers?',
    answer:
      'It can be complex due to visa rules, compliance, and documentation. However, with the right recruitment and migration partner, the entire process can be handled end-to-end, reducing risk and administrative burden.',
  },
  {
    question: 'How long does it take to hire an overseas employee in Australia?',
    answer:
      'Timelines vary based on visa type and role demand, but typically range between 4 to 12 weeks from candidate selection to onboarding.',
  },
  {
    question: 'What costs are involved in hiring overseas talent?',
    answer:
      'Costs may include:\n• Sponsorship and nomination fees\n• Visa application costs\n• Recruitment fees\n\nHowever, structured hiring ensures long-term ROI through skilled, reliable employees.',
  },
  {
    question: 'How does Esante support employers in overseas recruitment?',
    answer:
      'Esante provides:\n• Pre-screened global talent\n• Skills and visa eligibility checks\n• Employer sponsorship guidance\n• Compliance and documentation management\n• Post-arrival onboarding and retention support',
  },
  {
    question: 'Can Esante help with regional and high-demand hiring needs?',
    answer:
      'Yes, Esante supports employers across metro and regional Australia, especially in high-demand sectors like healthcare, trades, mining, hospitality, and engineering.',
  },
];

function EmployersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <section
          className="relative w-full overflow-hidden bg-[#f7f2e8]"
          style={{
            minHeight: 'clamp(620px, 78vw, 724px)',
            backgroundImage: `url('${HERO_IMAGE}')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div
            className="relative z-[1] flex h-full w-full px-5 py-[128px] sm:px-8 lg:px-[100px]"
            style={{
              minHeight: 'clamp(620px, 78vw, 724px)',
              background:
                'linear-gradient(90deg, rgba(255,251,233,0.96) 0%, rgba(255,251,233,0.93) 21%, rgba(255,251,233,0.78) 35%, rgba(255,251,233,0.16) 53%, rgba(255,251,233,0) 66%)',
            }}
          >
            <div className="flex w-full items-center">
              <div className="flex w-full max-w-[560px] flex-col gap-5 lg:gap-7">
                <p
                  className="font-poppins text-[#FF3300]"
                  style={{
                    fontSize: 'clamp(16px, 1.6vw, 20px)',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    letterSpacing: '-0.15px',
                    lineHeight: 1.2,
                  }}
                >
                  For Employers
                </p>

                <h1
                  className="font-poppins text-[#00352B]"
                  style={{
                    fontSize: 'clamp(42px, 6vw, 78px)',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    lineHeight: 0.96,
                  }}
                >
                  Hire Skilled Global Talent with Confidence
                </h1>

                <p
                  className="font-poppins max-w-[520px] text-black/70"
                  style={{
                    fontSize: 'clamp(16px, 1.7vw, 18px)',
                    fontWeight: 400,
                    letterSpacing: '-0.15px',
                    lineHeight: 1.65,
                  }}
                >
                  Esante helps Australian employers source pre-screened, visa-aware professionals
                  across healthcare, trades, hospitality, engineering, and high-demand sectors.
                  We support recruitment, sponsorship readiness, and migration coordination so you
                  can fill roles faster with less friction.
                </p>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={openConsultation}
                    className="inline-flex items-center justify-center rounded-[10px] border border-[#FF3300] bg-[#FF3300] px-[24px] py-[14px] font-poppins text-white transition-transform duration-200 hover:-translate-y-[1px]"
                    style={{
                      fontSize: '18px',
                      fontWeight: 400,
                      letterSpacing: '-0.15px',
                      lineHeight: 1.5,
                    }}
                  >
                    Explore Partnership
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white px-5 py-[72px] sm:px-8 lg:px-[100px] lg:py-[88px]">
          <div
            className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-[34px]"
          >
            <div className="w-full max-w-[473px] flex-shrink-0 overflow-hidden rounded-[34px] lg:rounded-[40px]">
              <img
                src={EMPLOYERS_CHOOSE_IMAGE}
                alt="Smiling professionals giving thumbs up"
                className="block h-full w-full object-cover"
              />
            </div>

            <div className="flex w-full max-w-[630px] flex-col lg:pt-1">
              <h2
                className="font-poppins text-[#00352B]"
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 54px)',
                  fontWeight: 400,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.12,
                }}
              >
                Why Employers Choose
              </h2>
              <p
                className="font-poppins italic text-[#FF3300]"
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 54px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                  marginTop: 4,
                }}
              >
                Esante
              </p>

              <p
                className="font-poppins text-[#00352B]"
                style={{
                  fontSize: 'clamp(24px, 2.25vw, 36px)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.24,
                  marginTop: 28,
                }}
              >
                We handle everything:
              </p>

              <div className="mt-[18px] flex flex-col gap-[10px]">
                {[
                  'Pre-screened global talent',
                  'Skills & visa eligibility checks',
                  'Employer sponsorship pathways',
                  'Migration compliance & documentation',
                  'Onboarding & post-arrival support',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-[10px]">
                    <span
                      aria-hidden="true"
                      className="mt-[3px] flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[4px] bg-[#18B433] text-white"
                      style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}
                    >
                      ✓
                    </span>
                    <p
                      className="font-poppins m-0 text-black"
                      style={{
                        fontSize: 'clamp(18px, 1.55vw, 30px)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.24,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="font-poppins m-0 text-black"
                style={{
                  fontSize: 'clamp(20px, 1.7vw, 32px)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.28,
                  marginTop: 28,
                }}
              >
                So your team can focus on business{' '}
                <span className="text-[#000000]">— </span>
                <span className="text-[#FF3300]">not immigration.</span>
              </p>
            </div>
          </div>
        </section>

        <section
          id="employers-collaborate"
          className="flex w-full flex-col items-center"
          style={{
            background: '#00291F',
            padding: '80px 100px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '50%',
              background: 'radial-gradient(ellipse at center top, rgba(74,140,127,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <h2
            className="font-poppins font-bold m-0"
            style={{
              fontSize: 40,
              lineHeight: '1.2em',
              color: '#ffffff',
              fontStyle: 'italic',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Let&apos;s Collaborate
          </h2>
          <p
            className="font-poppins m-0"
            style={{
              fontSize: 14,
              lineHeight: '1.6em',
              color: 'rgba(255,255,255,0.55)',
              fontStyle: 'italic',
              textAlign: 'center',
              marginTop: 10,
              maxWidth: 560,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Ready to solve your staffing shortages? Fill out the form below and our Corporate Partnerships team will be in touch within 24 hours.
          </p>

          <div style={{ marginTop: 40, width: '100%', position: 'relative', zIndex: 1 }}>
            <CollaborationForm />
          </div>
        </section>

        <section
          className="flex flex-col items-center self-stretch w-full gap-[24px] bg-white px-6 py-[64px] md:px-[60px] lg:px-[100px]"
          aria-labelledby="employers-faq-heading"
        >
          <h2
            id="employers-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Hiring Skilled Overseas Workers in Australia
          </h2>

          <div className="flex w-full max-w-[1064px] flex-col">
            {EMPLOYERS_FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="flex w-full flex-col items-center">
                  {index > 0 && (
                    <div className="h-[1px] w-full bg-[#00352B]/10" />
                  )}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start gap-[24px] py-[24px] text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`employers-faq-answer-${index}`}
                  >
                    <div className="flex flex-1 flex-col gap-[8px]">
                      <p
                        className="text-[18px] font-medium leading-[1.556] text-[#00352B]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.question}
                      </p>
                      {isOpen && item.answer && (
                        <p
                          id={`employers-faq-answer-${index}`}
                          className="whitespace-pre-line text-[16px] font-normal leading-[1.5] text-[#00352B]"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {item.answer}
                        </p>
                      )}
                    </div>
                    <div className="mt-[2px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full border-2 border-[#FF3300] text-[12px] text-[#FF3300]">
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-[8px] flex max-w-[640px] flex-col items-center gap-[20px] text-center">
            <p className="font-poppins text-[18px] leading-[1.5] text-[#00352B]">
              Still have questions? Speak with Esante’s employer recruitment team.
            </p>
            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex items-center justify-center rounded-[16px] border-0 cursor-pointer"
              style={{ background: '#FF3300', padding: '12px 28px' }}
            >
              <span
                className="font-poppins font-medium text-center"
                style={{ color: '#FFFBE9', fontSize: 16, lineHeight: '1.43em' }}
              >
                Book Employer Consultation
              </span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default EmployersPage;
