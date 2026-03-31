import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const HERO_IMAGE = '/images/employers/hero-image.png';

/** Hero CTA — update to your storefront URL when available */
const SHOP_NOW_HREF = '#employers-collaborate';

/* ═══════════════════════════════════════════════════════════════════════════
   SVG: Phone Mockup with Trading App (replaces stats image)
   ═══════════════════════════════════════════════════════════════════════════ */
function PhoneMockup() {
  return (
    <div className="relative rounded-[20px] overflow-hidden" style={{ width: 240, height: 280, background: '#f0ece3' }}>
      <svg viewBox="0 0 240 280" width="240" height="280">
        <defs>
          <linearGradient id="phoneBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#111" />
          </linearGradient>
          <clipPath id="phoneScreen">
            <rect x="52" y="20" width="140" height="244" rx="14" />
          </clipPath>
          <linearGradient id="chartLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00352B" />
            <stop offset="100%" stopColor="#4a8c7f" />
          </linearGradient>
        </defs>

        {/* Hand holding the phone - simplified */}
        <ellipse cx="45" cy="170" rx="35" ry="80" fill="#d4a574" opacity="0.6" />
        <ellipse cx="195" cy="180" rx="30" ry="70" fill="#d4a574" opacity="0.4" />

        {/* Phone body */}
        <rect x="48" y="15" width="148" height="252" rx="18" fill="url(#phoneBody)" />

        {/* Phone screen */}
        <g clipPath="url(#phoneScreen)">
          <rect x="52" y="20" width="140" height="244" fill="#ffffff" />

          {/* Status bar */}
          <text x="62" y="38" fontSize="7" fill="#333" fontWeight="500">9:41</text>
          <circle cx="170" cy="34" r="3" fill="#4CAF50" />

          {/* Back arrow */}
          <path d="M62 50 L58 54 L62 58" stroke="#333" strokeWidth="1.5" fill="none" />

          {/* Price */}
          <text x="62" y="82" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" fill="#1a1a1a">$139.85</text>
          <circle cx="120" cy="77" r="4" fill="#4CAF50" opacity="0.3" />

          {/* Chart area */}
          <polyline
            points="60,130 80,125 100,135 120,110 140,120 160,105 180,115"
            fill="none"
            stroke="url(#chartLine)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="60,130 80,125 100,135 120,110 140,120 160,105 180,115 180,160 60,160"
            fill="url(#chartLine)"
            opacity="0.07"
          />

          {/* Time labels */}
          <text x="60" y="170" fontSize="5" fill="#aaa">1D</text>
          <text x="85" y="170" fontSize="5" fill="#aaa">1W</text>
          <text x="110" y="170" fontSize="5" fill="#aaa">1M</text>
          <text x="135" y="170" fontSize="5" fill="#aaa">3M</text>
          <text x="160" y="170" fontSize="5" fill="#aaa">1Y</text>

          {/* Buy button */}
          <rect x="105" y="185" width="80" height="24" rx="12" fill="#4CAF50" />
          <text x="132" y="201" fontSize="9" fill="#fff" fontWeight="600" textAnchor="middle">Buy</text>

          {/* Bottom nav icons */}
          <circle cx="75" cy="240" r="4" fill="#ddd" />
          <circle cx="100" r="4" cy="240" fill="#ddd" />
          <circle cx="125" cy="240" r="4" fill="#ddd" />
          <circle cx="150" cy="240" r="4" fill="#ddd" />
          <circle cx="175" cy="240" r="4" fill="#ddd" />
        </g>

        {/* Notch */}
        <rect x="95" y="18" width="54" height="12" rx="6" fill="#1a1a1a" />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Stats Grid (right side of "Why Employers Choose Us")
   ═══════════════════════════════════════════════════════════════════════════ */
function StatsGrid() {
  const avatars = [
    { bg: '#8B5CF6', initials: 'AK' },
    { bg: '#059669', initials: 'MJ' },
    { bg: '#D97706', initials: 'SR' },
    { bg: '#DC2626', initials: 'PL' },
    { bg: '#2563EB', initials: 'TN' },
    { bg: '#7C3AED', initials: 'RW' },
  ];

  return (
    <div className="flex flex-col" style={{ gap: 16, flex: '1 1 0', minWidth: 0 }}>
      {/* Top row: phone + $14B card */}
      <div className="flex" style={{ gap: 16 }}>
        <PhoneMockup />
        <div
          className="flex flex-col justify-center rounded-[20px]"
          style={{ flex: 1, background: '#f3f1ed', padding: '30px 24px' }}
        >
          <span className="font-poppins" style={{ fontSize: 48, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.1 }}>
            $14B
          </span>
          <span className="font-poppins" style={{ fontSize: 15, fontWeight: 400, color: '#666', marginTop: 6 }}>
            Funds &amp; Syndicates
          </span>
        </div>
      </div>

      {/* Bottom row: 27k+ and 80k cards */}
      <div className="flex" style={{ gap: 16 }}>
        <div
          className="flex flex-col justify-center rounded-[20px]"
          style={{ flex: 1, background: '#f3f1ed', padding: '30px 24px' }}
        >
          <span className="font-poppins" style={{ fontSize: 48, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.1 }}>
            27k+
          </span>
          <span className="font-poppins" style={{ fontSize: 15, fontWeight: 400, color: '#666', marginTop: 6 }}>
            Raised by startups
          </span>
        </div>
        <div
          className="flex flex-col justify-center rounded-[20px]"
          style={{ flex: 1, background: '#f0ece3', padding: '30px 24px' }}
        >
          <span className="font-poppins" style={{ fontSize: 48, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.1 }}>
            80k
          </span>
          <span className="font-poppins" style={{ fontSize: 15, fontWeight: 400, color: '#666', marginTop: 6 }}>
            Active members
          </span>
          {/* Avatar row */}
          <div className="flex" style={{ marginTop: 12 }}>
            {avatars.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-full border-2 border-white"
                style={{
                  width: 36,
                  height: 36,
                  background: a.bg,
                  marginLeft: i === 0 ? 0 : -8,
                  zIndex: avatars.length - i,
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 600, color: '#fff' }}>{a.initials}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Value Proposition Checkmark Item
   ═══════════════════════════════════════════════════════════════════════════ */
function ValueCheckItem({ boldText, normalText }) {
  return (
    <div className="flex items-start" style={{ gap: 12, marginBottom: 14 }}>
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0"
        style={{ width: 26, height: 26, background: '#FF3300', marginTop: 1 }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="font-poppins" style={{ fontSize: 15, lineHeight: '1.6em', color: '#333' }}>
        <strong style={{ color: '#1a1a1a' }}>{boldText}</strong> {normalText}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Collaboration Form
   ═══════════════════════════════════════════════════════════════════════════ */
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
      {/* Row 1 */}
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

      {/* Row 2 */}
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

      {/* Row 3 */}
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

      {/* Specific Requirements */}
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

      {/* Submit button */}
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

/* ═══════════════════════════════════════════════════════════════════════════
   Main Page
   ═══════════════════════════════════════════════════════════════════════════ */
function EmployersPage() {
  const [heroCtaHover, setHeroCtaHover] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const onShopNowClick = (e) => {
    if (SHOP_NOW_HREF.startsWith('#')) {
      e.preventDefault();
      const id = SHOP_NOW_HREF.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 0, paddingBottom: 0 }}>

        {/* ═══ 1. HERO — Figma: split cream / mint card + product with floating badges ═══ */}
        <section
          style={{
            background: '#f9f7f2',
            paddingTop: 'clamp(48px, 8vw, 80px)',
            paddingBottom: 'clamp(40px, 6vw, 72px)',
            paddingLeft: 'clamp(24px, 6vw, 100px)',
            paddingRight: 'clamp(24px, 6vw, 100px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className="flex w-full flex-col md:flex-row md:items-center"
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              gap: 'clamp(20px, 3vw, 48px)',
              minHeight: 'clamp(420px, 58vw, 584px)',
            }}
          >
            <div
              className="flex min-w-0 flex-1 items-center justify-center md:justify-start"
              style={{ padding: '8px 0' }}
            >
              <div
                className="flex w-full max-w-[520px] flex-col items-center justify-center"
                style={{
                  textAlign: 'center',
                  padding: 'clamp(32px, 5vw, 48px) clamp(28px, 4vw, 44px)',
                  borderRadius: 28,
                  background: '#e8f7f2',
                  boxShadow: '0 4px 24px rgba(0, 53, 43, 0.05)',
                }}
              >
                <h1
                  className="m-0"
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    fontWeight: 700,
                    lineHeight: 1.12,
                    color: '#1a1a1a',
                    letterSpacing: '-0.5px',
                  }}
                >
                  It&apos;s time to brush{' '}
                  <span style={{ color: '#5cb89a' }}>better.</span>
                </h1>
                <p
                  className="m-0"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 15,
                    lineHeight: '1.7em',
                    color: '#5a6d6a',
                    marginTop: 20,
                    maxWidth: 400,
                  }}
                >
                  Clean up your routine with Toothpaste Bits. No plastic, no harsh chemicals – just a better way to brush your teeth.
                </p>
                <a
                  href={SHOP_NOW_HREF}
                  onClick={onShopNowClick}
                  onMouseEnter={() => setHeroCtaHover(true)}
                  onMouseLeave={() => setHeroCtaHover(false)}
                  style={{
                    marginTop: 28,
                    padding: '16px clamp(48px, 12vw, 88px)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#fff',
                    background: heroCtaHover ? '#004835' : '#00352b',
                    border: 'none',
                    borderRadius: 50,
                    cursor: 'pointer',
                    transition: 'background 0.2s ease, box-shadow 0.2s ease',
                    boxShadow: heroCtaHover ? '0 4px 14px rgba(0, 53, 43, 0.25)' : 'none',
                    textDecoration: 'none',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                >
                  Shop Now
                </a>
              </div>
            </div>

            {/* Right — product + Figma-style floating badges */}
            <div
              className="relative min-w-0 flex-1"
              style={{
                minHeight: 'clamp(280px, 50vw, 520px)',
              }}
            >
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 34,
                  overflow: 'hidden',
                  backgroundColor: '#f9f7f2',
                  backgroundImage: `url(${HERO_IMAGE})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right center',
                  backgroundSize: 'contain',
                }}
              />

              <div
                className="hidden sm:block"
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '4%',
                  maxWidth: 200,
                  padding: '12px 14px',
                  borderRadius: 12,
                  background: '#fff',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: 36, height: 36, background: 'rgba(92, 184, 154, 0.2)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M12 4a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2V7a3 3 0 0 1 3-3z"
                      stroke="#2d6a54"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path d="M9 14h6M9 18h4" stroke="#2d6a54" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#1a1a1a',
                    lineHeight: 1.3,
                    textAlign: 'left',
                  }}
                >
                  Recommended by doctors
                </span>
              </div>

              <div
                className="hidden sm:block"
                style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '2%',
                  maxWidth: 220,
                  padding: '12px 14px',
                  borderRadius: 14,
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 8px 28px rgba(0, 53, 43, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span style={{ color: '#5cb89a', flexShrink: 0 }} aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
                  </svg>
                </span>
                <span
                  className="font-poppins"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#1a1a1a',
                    lineHeight: 1.3,
                    textAlign: 'left',
                  }}
                >
                  Trusted by 21,000+ People
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. WHY EMPLOYERS CHOOSE US ═══════════════════════════════════ */}
        <section
          className="flex flex-row items-stretch w-full"
          style={{
            background: '#FFFBE9',
            padding: '80px 100px',
            gap: 25,
          }}
        >
          {/* Left column — text */}
          <div className="flex flex-col justify-center" style={{ flex: '1 1 0', minWidth: 0, gap: 10 }}>
            <div className="flex flex-col" style={{ gap: 14 }}>
              <h2
                className="font-poppins font-bold m-0"
                style={{
                  fontSize: 40,
                  lineHeight: '1.12em',
                  letterSpacing: '-0.375%',
                  color: '#00352B',
                }}
              >
                Why Employers Choose Us
              </h2>
              <p
                className="font-poppins font-normal m-0"
                style={{
                  fontSize: 16,
                  lineHeight: '1.5em',
                  letterSpacing: '-0.94%',
                  color: '#00352B',
                }}
              >
                Legal pathways to employment abroad, including skilled migration, corporate, and talent programs.Legal pathways to employment abroad, including
              </p>
            </div>

            <h3
              className="font-poppins font-bold m-0"
              style={{ fontSize: 24, lineHeight: '1.5em', color: '#000', marginTop: 10 }}
            >
              Our Value Proposition:
            </h3>

            {/* Value proposition items */}
            <div style={{ marginTop: 6 }}>
              <ValueCheckItem
                boldText="Global Reach:"
                normalText="Access candidates from 190+ countries."
              />
              <ValueCheckItem
                boldText="Compliance First:"
                normalText="We handle skill assessments and visa sponsorship paperwork."
              />
              <ValueCheckItem
                boldText="Cultural Integration:"
                normalText="Our candidates undergo cultural orientation before arrival."
              />
            </div>
          </div>

          {/* Right column — stats grid */}
          <StatsGrid />
        </section>

        {/* ═══ 3. LET'S COLLABORATE (FORM SECTION) ═════════════════════════ */}
        <section
          id="employers-collaborate"
          className="flex flex-col items-center w-full"
          style={{
            background: '#00291F',
            padding: '80px 100px',
            position: 'relative',
          }}
        >
          {/* Subtle radial glow */}
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
            Let's Collaborate
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

        {/* FAQ — hiring skilled overseas workers */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
          aria-labelledby="employers-faq-heading"
        >
          <h2
            id="employers-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Hiring Skilled Overseas Workers in Australia
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {EMPLOYERS_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`employers-faq-answer-${index}`}
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
                          id={`employers-faq-answer-${index}`}
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
              Still have questions? Speak with Esante’s employer recruitment team.
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
