import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

/* ─── Icons ─────────────────────────────────────── */
const MeritIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="22" fill="#FFF0EB" />
    <path d="M22 12l2.6 5.6 5.9.86-4.25 4.14 1 5.84L22 25.88l-5.25 2.56 1-5.84L13.5 18.46l5.9-.86L22 12z"
      fill="#F97316" />
    <circle cx="22" cy="22" r="6" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

const DestinationIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="22" fill="#EFF6FF" />
    <rect x="13" y="20" width="18" height="12" rx="2" stroke="#2563EB" strokeWidth="1.6" fill="none" />
    <path d="M18 20v-3a4 4 0 0 1 8 0v3" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <circle cx="22" cy="26.5" r="1.8" fill="#2563EB" />
    <path d="M13 20h4l2-4 3 6 2-3 2 3 3-2" stroke="#2563EB" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0" />
  </svg>
);

const ResearchIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="22" fill="#F3F4F6" />
    <path d="M12 27l10-6 10 6" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 27l10-6" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M32 27v6" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M15 25v4.5c0 2.2 3.13 4 7 4s7-1.8 7-4V25" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M22 21l-10-6 10-6 10 6-10 6z" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const DropdownArrow = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
    <path d="M4 6l4 4 4-4" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RedCheck = ({ size = 20 }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: size, height: size, borderRadius: '50%',
    backgroundColor: '#FF3300', flexShrink: 0,
  }}>
    <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 11 11" fill="none">
      <path d="M2 5.5l2.8 2.8L9 3" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

/* ─── Data ───────────────────────────────────────── */
const SCHOLARSHIPS = [
  {
    id: 1,
    badge: 'POPULAR CHOICE',
    badgeColor: '#16A34A',
    badgeBg: '#DCFCE7',
    icon: <MeritIcon />,
    title: 'Merit-Based Excellence',
    description: 'Awarded to high-achieving students with outstanding academic records in previous studies.',
    benefit: 'Up to 50% Fee Off',
  },
  {
    id: 2,
    badge: 'GOVERNMENT FUNDED',
    badgeColor: '#D97706',
    badgeBg: '#FEF3C7',
    icon: <DestinationIcon />,
    title: 'Destination Australia',
    description: 'Financial support for students studying and living in regional Australian locations.',
    benefit: '$15,000 / Year',
  },
  {
    id: 3,
    badge: 'POSTGRADUATE',
    badgeColor: '#6B7280',
    badgeBg: '#F3F4F6',
    icon: <ResearchIcon />,
    title: 'Research Training (RTP)',
    description: 'Prestigious funding for Masters by Research and Doctorate (PhD) candidates.',
    benefit: 'Full Fee + Stipend',
  },
];

/* ─── Reusable input wrapper for hero form ───────── */
function HeroField({ label, children }) {
  return (
    <div>
      <label style={{
        display: 'block',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: '9.5px',
        letterSpacing: '0.12em',
        color: '#6B7280',
        marginBottom: '4px',
        textTransform: 'uppercase',
      }}>{label}</label>
      {children}
    </div>
  );
}

const heroInput = {
  width: '100%',
  padding: '8px 11px',
  border: '1px solid #E5E7EB',
  borderRadius: '6px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '12.5px',
  color: '#374151',
  backgroundColor: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
};

/* ─── Reusable input wrapper for enquiry form ────── */
function EnquiryField({ label, children }) {
  return (
    <div>
      <label style={{
        display: 'block',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: '9.5px',
        letterSpacing: '0.11em',
        color: '#9CA3AF',
        marginBottom: '5px',
        textTransform: 'uppercase',
      }}>{label}</label>
      {children}
    </div>
  );
}

const enquiryInput = {
  width: '100%',
  padding: '9px 12px',
  border: '1px solid #E5E7EB',
  borderRadius: '6px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '13px',
  color: '#374151',
  backgroundColor: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
};

const EXPENSE_SCHOLARSHIP_FAQ_ITEMS = [
  {
    question: 'What is the total cost of studying in Australia for international students?',
    answer:
      'The total cost includes tuition fees and living expenses:\n• Tuition: AUD 20,000 – AUD 45,000 per year\n• Living cost: AUD 20,000 – AUD 29,000 per year\n\nThe exact cost depends on your city, lifestyle, and course.',
  },
  {
    question: 'How much money is required to study in Australia?',
    answer:
      'To study in Australia, students typically need:\n• Tuition fees (varies by course)\n• Living expenses (as per visa requirements)\n• Health insurance (OSHC)\n• Travel and initial setup costs\n\nProper financial planning is essential before applying.',
  },
  {
    question: 'Can I reduce my cost of studying in Australia?',
    answer:
      'Yes, you can reduce costs by:\n• Applying for scholarships\n• Choosing regional universities\n• Working part-time\n• Selecting budget-friendly accommodation\n\nSmart planning can significantly lower your expenses.',
  },
  {
    question: 'What scholarships are available for international students in Australia?',
    answer:
      'Common scholarships include:\n• Merit-based university scholarships\n• Destination Australia Scholarship\n• Research Training Program (RTP)\n• Early application discounts\n\nScholarships can cover partial to full tuition fees.',
  },
  {
    question: 'How can I increase my chances of getting a scholarship in Australia?',
    answer:
      'To improve your chances:\n• Maintain strong academic scores\n• Submit a high-quality SOP\n• Apply early\n• Choose the right university and course\n\nA well-structured application plays a key role.',
  },
  {
    question: 'Can I study in Australia for free or at low cost?',
    answer:
      'While fully free education is rare, students can:\n• Get high-value scholarships\n• Work part-time to cover expenses\n• Choose affordable institutions\n\nThis makes studying in Australia financially manageable.',
  },
  {
    question: 'Is there a cost of living calculator for Australia?',
    answer:
      'Yes, our cost of living calculator helps you:\n• Estimate monthly expenses\n• Plan your budget city-wise\n• Understand rent, food, and transport costs\n\nThis helps you make informed financial decisions.',
  },
  {
    question: 'How much can I earn while studying in Australia?',
    answer:
      'Students can earn:\n• AUD 24 – AUD 35 per hour (depending on job)\n• Monthly earnings: approx. AUD 1,500 – AUD 3,000\n\nThis helps cover living expenses.',
  },
  {
    question: 'What is the cheapest city in Australia for international students?',
    answer:
      'More affordable cities include:\n• Adelaide\n• Perth\n• Brisbane\n• Regional areas\n\nThese cities offer lower rent and better PR opportunities.',
  },
  {
    question: 'How does Esante help with expense planning and scholarships?',
    answer:
      'Esante helps you with:\n• Scholarship identification & application strategy\n• Budget planning using real cost insights\n• Course selection based on ROI & PR potential\n• Financial guidance before and after arrival',
  },
];

/* ════════════════════════════════════════════════
   PAGE COMPONENT
════════════════════════════════════════════════ */
export default function ExpensePlanningScholarshipsPage() {
  const [eForm, setEForm] = useState({ fullName: '', email: '', phone: '', degreeLevel: '', intake: '' });
  const [qForm, setQForm] = useState({ firstName: '', lastName: '', email: '', scholarship: '', query: '' });
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const onE = (e) => setEForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onQ = (e) => setQForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', background: '#fff' }}>
      <Header />

      <main style={{ paddingTop: '88px' }}>

        {/* ══════════════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════════════ */}
        <section style={{
          position: 'relative',
          width: '100%',
          minHeight: '490px',
          backgroundImage: 'url(/images/ielts-hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          overflow: 'hidden',
        }}>
          {/* gradient overlay — dark left, lighter right */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(95deg, rgba(0,20,12,0.94) 0%, rgba(0,25,15,0.88) 40%, rgba(0,18,10,0.70) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Content row */}
          <div style={{
            position: 'relative', zIndex: 1,
            maxWidth: '1280px', margin: '0 auto',
            padding: '36px 80px 48px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '60px',
          }}>

            {/* ─── Left text block — vertically centered ─── */}
            <div style={{
              flex: '1 1 0',
              minWidth: 0,
              alignSelf: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* FUNDING YOUR FUTURE badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 12px',
                border: '1.5px solid rgba(255,255,255,0.45)',
                borderRadius: '20px',
                width: 'fit-content',
                marginBottom: '20px',
              }}>
                <span style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '10px',
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}>Funding Your Future</span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                lineHeight: '1.16em',
                color: '#fff',
                margin: '0 0 16px 0',
              }}>
                Expense Planning &amp;<br />Scholarships
              </h1>

              {/* Subtitle */}
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '13.5px',
                lineHeight: '1.75em',
                color: 'rgba(255,255,255,0.70)',
                margin: '0 0 32px 0',
                maxWidth: '420px',
              }}>
                Don't let finances hold you back. Discover thousands of
                scholarships, plan your budget, and get personalized financial
                guidance for your Australian education journey.
              </p>

              {/* Check items */}
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
                {['1000+ Scholarships', 'Budget Planner', 'Loan Assistance'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <RedCheck size={18} />
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 500,
                      fontSize: '12.5px',
                      color: '#fff',
                    }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Right card — anchored to top ─── */}
            <div style={{
              flex: '0 0 400px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '26px 28px 22px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.20)',
              alignSelf: 'flex-start',
            }}>
              <h2 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '21px',
                color: '#111',
                margin: '0 0 3px 0',
                textAlign: 'center',
              }}>Get Free Guidance</h2>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                color: '#9CA3AF',
                textAlign: 'center',
                margin: '0 0 18px 0',
              }}>Check your scholarship eligibility today.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {/* Full Name */}
                <HeroField label="Full Name">
                  <input type="text" name="fullName" placeholder="e.g. John Doe"
                    value={eForm.fullName} onChange={onE} style={heroInput} />
                </HeroField>

                {/* Email + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <HeroField label="Email Address">
                    <input type="email" name="email" placeholder="john@email.com"
                      value={eForm.email} onChange={onE} style={heroInput} />
                  </HeroField>
                  <HeroField label="Phone Number">
                    <input type="tel" name="phone" placeholder="+91 ..."
                      value={eForm.phone} onChange={onE} style={heroInput} />
                  </HeroField>
                </div>

                {/* Degree + Intake */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <HeroField label="Degree Level">
                    <div style={{ position: 'relative' }}>
                      <select name="degreeLevel" value={eForm.degreeLevel} onChange={onE}
                        style={{ ...heroInput, appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', paddingRight: '26px' }}>
                        <option value="">Select...</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                        <option>PhD / Research</option>
                      </select>
                      <span style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                        <DropdownArrow />
                      </span>
                    </div>
                  </HeroField>
                  <HeroField label="Planned Intake">
                    <div style={{ position: 'relative' }}>
                      <select name="intake" value={eForm.intake} onChange={onE}
                        style={{ ...heroInput, appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', paddingRight: '26px' }}>
                        <option value="">Select...</option>
                        <option>Feb 2026</option>
                        <option>Jul 2026</option>
                        <option>Feb 2027</option>
                      </select>
                      <span style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                        <DropdownArrow />
                      </span>
                    </div>
                  </HeroField>
                </div>
              </div>

              {/* CTA button */}
              <button
                type="button"
                onClick={() => alert('Our scholarship advisor will contact you soon!')}
                style={{
                  display: 'block',
                  width: '100%',
                  marginTop: '16px',
                  padding: '12px',
                  backgroundColor: '#FF3300',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '7px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '12.5px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  marginBottom: '10px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e52e00')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF3300')}
              >
                Check Eligibility
              </button>

              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '10.5px',
                color: '#9CA3AF',
                textAlign: 'center',
                margin: '0',
              }}>We respect your privacy. No spam.</p>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 2 — AVAILABLE SCHOLARSHIPS
        ══════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#F8F7F2', padding: '72px 80px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>

            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '11px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#FF3300',
              textAlign: 'center',
              margin: '0 0 6px',
            }}>Funding Options</p>

            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 2.8vw, 40px)',
              color: '#111',
              textAlign: 'center',
              margin: '0 0 10px',
            }}>Available Scholarships</h2>

            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              lineHeight: '1.65em',
              color: '#6B7280',
              textAlign: 'center',
              margin: '0 auto 44px',
              maxWidth: '480px',
            }}>
              Explore high-value funding options categorized by merit, destination, and research focus.
            </p>

            {/* Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '18px',
            }}>
              {SCHOLARSHIPS.map((s) => (
                <div key={s.id} style={{
                  backgroundColor: '#fff',
                  border: '1px solid #EBEBEB',
                  borderRadius: '12px',
                  padding: '20px 18px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>

                  {/* Icon row (left) + badge pill (right) — space-between */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                    {s.icon}
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: '9px',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      color: s.badgeColor,
                      backgroundColor: s.badgeBg,
                      padding: '3px 8px',
                      borderRadius: '20px',
                      whiteSpace: 'nowrap',
                      marginTop: '4px',
                    }}>{s.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#111',
                    margin: '0 0 8px',
                  }}>{s.title}</h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12.5px',
                    lineHeight: '1.65em',
                    color: '#6B7280',
                    margin: '0 0 14px',
                    flex: 1,
                  }}>{s.description}</p>

                  {/* Thin divider */}
                  <div style={{ height: '1px', backgroundColor: '#F0F0F0', marginBottom: '12px' }} />

                  {/* Benefit row — "BENEFIT" label LEFT, value RIGHT */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}>
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: '9px',
                      letterSpacing: '0.13em',
                      color: '#9CA3AF',
                      textTransform: 'uppercase',
                    }}>Benefit</span>
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '13px',
                      color: '#111',
                    }}>{s.benefit}</span>
                  </div>

                  {/* View Details */}
                  <button
                    type="button"
                    style={{
                      width: '100%',
                      padding: '9px',
                      border: '1.5px solid #DEDEDE',
                      borderRadius: '7px',
                      backgroundColor: 'transparent',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 500,
                      fontSize: '12.5px',
                      color: '#374151',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#00352B';
                      e.currentTarget.style.borderColor = '#00352B';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#DEDEDE';
                      e.currentTarget.style.color = '#374151';
                    }}
                  >
                    View Details
                  </button>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 3 — SCHOLARSHIP ENQUIRY
        ══════════════════════════════════════════ */}
        <section style={{ backgroundColor: '#fff', padding: '72px 80px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>

            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '11px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#FF3300',
              textAlign: 'center',
              margin: '0 0 6px',
            }}>Expert Guidance</p>

            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 2.8vw, 40px)',
              color: '#111',
              textAlign: 'center',
              margin: '0 0 10px',
            }}>Scholarship Enquiry</h2>

            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              lineHeight: '1.65em',
              color: '#6B7280',
              textAlign: 'center',
              margin: '0 auto 40px',
            }}>
              Have a specific scholarship in mind? Let our experts assess your profile.
            </p>

            {/* Two-column card */}
            <div style={{
              maxWidth: '860px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 4px 30px rgba(0,0,0,0.10)',
            }}>

              {/* ─── Left dark panel: content at BOTTOM ─── */}
              <div style={{
                backgroundColor: '#00352B',
                padding: '32px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: '18px',
              }}>
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  lineHeight: '1.7em',
                  color: '#fff',
                  margin: 0,
                }}>
                  Scholarship applications are highly competitive. Early assessment
                  increases your success rate.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Check exact eligibility score', 'Get deadline alerts', 'Application essay review'].map((t) => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <RedCheck size={20} />
                      <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '12.5px',
                        color: 'rgba(255,255,255,0.85)',
                      }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ─── Right form panel ─── */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Your enquiry has been submitted! Our scholarship advisor will reach out shortly.');
                  setQForm({ firstName: '', lastName: '', email: '', scholarship: '', query: '' });
                }}
                style={{
                  backgroundColor: '#fff',
                  padding: '28px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '13px',
                }}
              >
                {/* First + Last name */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <EnquiryField label="First Name">
                    <input type="text" name="firstName" placeholder="First Name"
                      value={qForm.firstName} onChange={onQ} style={enquiryInput} />
                  </EnquiryField>
                  <EnquiryField label="Last Name">
                    <input type="text" name="lastName" placeholder="Last Name"
                      value={qForm.lastName} onChange={onQ} style={enquiryInput} />
                  </EnquiryField>
                </div>

                {/* Email + Scholarship */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <EnquiryField label="Email Address">
                    <input type="email" name="email" placeholder="name@email.com"
                      value={qForm.email} onChange={onQ} style={enquiryInput} />
                  </EnquiryField>
                  <EnquiryField label="Scholarship of Interest">
                    <div style={{ position: 'relative' }}>
                      <select name="scholarship" value={qForm.scholarship} onChange={onQ}
                        style={{ ...enquiryInput, appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', paddingRight: '28px' }}>
                        <option value="">Merit-Based Excellence</option>
                        <option>Merit-Based Excellence</option>
                        <option>Destination Australia</option>
                        <option>Research Training (RTP)</option>
                        <option>Other</option>
                      </select>
                      <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                        <DropdownArrow />
                      </span>
                    </div>
                  </EnquiryField>
                </div>

                {/* Query */}
                <EnquiryField label="Your Query / Profile Details">
                  <textarea
                    name="query" rows={5} placeholder="Tell us about your GPA, IELTS score, or specific questions..."
                    value={qForm.query} onChange={onQ}
                    style={{
                      ...enquiryInput,
                      resize: 'vertical',
                      lineHeight: '1.6em',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  />
                </EnquiryField>

                {/* Send Enquiry — bottom right */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px' }}>
                  <button
                    type="submit"
                    style={{
                      padding: '11px 26px',
                      backgroundColor: '#111827',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '7px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: '12.5px',
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#000')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#111827')}
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>

            </div>
          </div>
        </section>

        {/* FAQ — cost of studying in Australia & scholarships */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
          aria-labelledby="expense-scholarship-faq-heading"
        >
          <h2
            id="expense-scholarship-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Cost of Studying in Australia &amp; Scholarships
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {EXPENSE_SCHOLARSHIP_FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="flex flex-col items-center w-full">
                  {index > 0 && (
                    <div className="w-full h-[1px] bg-[#00352B]/10" />
                  )}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start gap-[24px] py-[24px] text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`expense-scholarship-faq-answer-${index}`}
                  >
                    <div className="flex-1 flex flex-col gap-[8px]">
                      <p
                        className="text-[18px] font-medium text-[#00352B] leading-[1.556]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.question}
                      </p>
                      {isOpen && item.answer && (
                        <p
                          id={`expense-scholarship-faq-answer-${index}`}
                          className="text-[16px] font-normal text-[#00352B] leading-[1.5] whitespace-pre-line"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {item.answer}
                        </p>
                      )}
                    </div>
                    <div className="mt-[2px] flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-[#FF3300] text-[#FF3300] text-[12px] shrink-0">
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-[20px] max-w-[640px] text-center mt-[8px]">
            <p className="font-poppins text-[18px] text-[#00352B] leading-[1.5]">
              Still have questions? Get personalised financial planning &amp; scholarship guidance from an Esante expert.
            </p>
            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex justify-center items-center rounded-[16px] border-0 cursor-pointer"
              style={{ background: '#FF3300', padding: '12px 28px' }}
            >
              <span
                className="font-poppins font-medium text-center"
                style={{ color: '#FFFBE9', fontSize: 16, lineHeight: '1.43em' }}
              >
                Get Free Guidance
              </span>
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
