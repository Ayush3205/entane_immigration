import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const HERO_LEFT = '/images/sop-img-78.png';
const HERO_RIGHT = '/images/ptj-story1.png';

const STATS = [
  { value: '140,000 +', label: 'skilled and family visas granted' },
  { value: '13,000 +', label: 'humanitarian visas granted' },
  { value: '1.9m +', label: 'temporary visas granted' },
];

const EXPERTS = [
  {
    name: 'Michael Sterling',
    role: 'CEO - Founder',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Henry Dawson',
    role: 'Legal Consultant',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Emily Carter',
    role: 'Client Relations Manager',
    twitter: '#',
    linkedin: '#',
  },
];

/* ── Remix-icon SVGs ── */
const IconTwitterX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.263 5.632 5.9-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function MigrationAdvisorsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    currentRole: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="migration-advisors-page flex flex-col w-full bg-white">
      <Header />

      <main style={{ paddingTop: '120px' }}>

        {/* ── Hero ── */}
        <section className="w-full max-w-[1280px] mx-auto px-6 pt-6 pb-12">
          <div className="w-full rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="text-center pt-8 pb-6 px-6">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ backgroundColor: '#2563EB' }}>
                <span className="text-white text-xs font-semibold tracking-wider">CUSTOMER STORIES</span>
              </div>
              <h1
                className="font-bold text-[#00352B] text-3xl md:text-[42px] leading-tight mb-4 max-w-3xl mx-auto"
                style={{ fontFamily: "'Inter Display', Inter, sans-serif" }}
              >
                Trusted by top{' '}
                <span style={{ color: '#EAB308', backgroundColor: 'rgba(234,179,8,0.15)' }} className="px-1">
                  companies
                </span>{' '}
                to reimagine recognition
              </h1>
              <p className="font-poppins text-[#64748B] text-base md:text-lg max-w-2xl mx-auto">
                Explore customer insights and share your rewards and recognition journey.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-stretch gap-2.5 md:gap-[10px] w-full max-w-[960px] mx-auto">
              <div className="relative w-full md:min-w-0 h-[320px] md:h-[420px] overflow-hidden rounded-t-2xl" style={{ flex: '160 160 0' }}>
                <img src={HERO_LEFT} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col md:flex-row w-full md:min-w-0 gap-0 md:gap-[10px]" style={{ flex: '720 720 0' }}>
                <div className="relative w-full md:min-w-0 h-[320px] md:h-[420px] overflow-hidden rounded-t-2xl" style={{ flex: '160 160 0' }}>
                  <img src={HERO_RIGHT} alt="" className="w-full h-full object-cover" />
                </div>
                <div
                  className="relative w-full min-h-[320px] md:h-[420px] flex flex-row text-white md:min-w-0 overflow-hidden rounded-t-2xl"
                  style={{ flex: '560 560 0' }}
                >
                  <div className="relative w-[130px] md:w-[140px] shrink-0 h-full flex items-center justify-center p-2 md:p-3" style={{ backgroundColor: '#00352B' }}>
                    <img src={HERO_LEFT} alt="" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-5 md:p-6 min-w-0 text-left" style={{ backgroundColor: '#00352B' }}>
                    <p className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>12,000+</p>
                    <p className="text-sm md:text-base font-medium text-white/95 mb-14 md:mb-16" style={{ fontFamily: 'Inter, sans-serif' }}>programme recognitions</p>
                    <p className="text-sm text-white/85 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      &ldquo;Southwest Gas partnered with Cheersly to design a highly effective, incentive-driven safety recognition program, complete with courses and training opportunities tailored to their employees&rsquo; needs and culture.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:min-w-0 h-[320px] md:h-[420px] overflow-hidden rounded-t-2xl" style={{ flex: '160 160 0' }}>
                <img src={HERO_RIGHT} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="w-full max-w-[1280px] mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 text-center border border-[#E5E7EB] shadow-sm"
                style={{ backgroundColor: '#FFFBE9', fontFamily: 'Inter, sans-serif' }}
              >
                <p className="text-2xl md:text-3xl font-bold text-[#00352B] mb-2">{stat.value}</p>
                <p className="text-[#64748B] text-sm md:text-base lowercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Meet the experts — exactly matches Figma node 259:2255 "Team - Echo UI" ── */}
        <section
          className="w-full py-20"
          style={{ backgroundColor: 'rgba(255, 251, 233, 0.1)' }}
        >
          {/* Heading */}
          <div
            className="flex flex-col items-center mx-auto mb-16"
            style={{ gap: '12px', maxWidth: '628px' }}
          >
            {/* "Team" badge — dashed border, gray text */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 12px',
                borderRadius: '4px',
                border: '1px dashed #B5BBC4',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#49505B',
              }}
            >
              Team
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: "'Inter Display', Inter, sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: '1em',
                letterSpacing: '-2.81%',
                color: '#00352B',
                textAlign: 'center',
                margin: 0,
              }}
            >
              Meet the experts
              <br />
              in the field
            </h2>
          </div>

          {/* Cards row */}
          <div
            className="mx-auto px-6"
            style={{
              maxWidth: '1280px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {EXPERTS.map((expert, i) => (
              <div
                key={i}
                style={{
                  width: '302px',
                  backgroundColor: '#EDEEF1',
                  border: '1px dashed #D8DBDF',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    width: '270px',
                    height: '270px',
                    backgroundColor: '#F7F8F8',
                    border: '4px solid #FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0px 2px 2px 0px rgba(216, 219, 223, 0.5)',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  {/* Placeholder gradient representing a person */}
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(180deg, #D8DBDF 0%, #C4C8CE 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="30" r="20" fill="#B5BBC4" />
                      <ellipse cx="40" cy="75" rx="32" ry="22" fill="#B5BBC4" />
                    </svg>
                  </div>
                </div>

                {/* Info area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {/* Name + role */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '32px',
                        letterSpacing: '-0.16px',
                        color: '#25272C',
                      }}
                    >
                      {expert.name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '28px',
                        letterSpacing: '-0.12px',
                        color: '#8D95A3',
                      }}
                    >
                      {expert.role}
                    </span>
                  </div>

                  {/* Divider — dashed */}
                  <div
                    style={{
                      width: '100%',
                      height: '1px',
                      borderTop: '1px dashed #D8DBDF',
                    }}
                  />

                  {/* Social icons */}
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                    <a
                      href={expert.twitter}
                      aria-label={`${expert.name} on X`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: '#FFFFFF',
                        color: '#49505B',
                        textDecoration: 'none',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F3F4F6')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                    >
                      <IconTwitterX />
                    </a>
                    <a
                      href={expert.linkedin}
                      aria-label={`${expert.name} on LinkedIn`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: '#FFFFFF',
                        color: '#49505B',
                        textDecoration: 'none',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F3F4F6')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                    >
                      <IconLinkedIn />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Study + Consultation Form ── */}
        <section style={{ background: '#f5f5f5', padding: '75px 100px 100px' }}>
          <div style={{
            maxWidth: 1040, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1.45fr',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 4px 32px rgba(0,0,0,0.09)',
          }}>

            {/* ── Left green panel with airport background ── */}
            <div style={{
              backgroundImage: 'url(/images/airport-hero-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundColor: '#00352B',
              padding: '40px 32px',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden', minHeight: 420,
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, rgba(0,35,24,0.88) 0%, rgba(0,55,40,0.82) 100%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '5px 14px',
                  background: 'rgba(0,0,0,0.55)',
                  borderRadius: 20,
                  marginBottom: 24,
                }}>
                  <span style={{
                    fontFamily: 'Poppins', fontWeight: 500, fontSize: 11,
                    color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>Skilled Migration</span>
                </div>
                <h2 style={{
                  fontFamily: 'Poppins', fontWeight: 700,
                  fontSize: 'clamp(26px, 2.4vw, 36px)', lineHeight: '1.2em',
                  color: '#fff', margin: '0 0 4px 0',
                }}>
                  Your path to<br />permanent residency.
                </h2>
                <h2 style={{
                  fontFamily: 'Poppins', fontWeight: 700,
                  fontSize: 'clamp(26px, 2.4vw, 36px)', lineHeight: '1.2em',
                  color: '#FF3300', margin: '0 0 20px 0',
                }}>
                  Start today.
                </h2>
                <p style={{
                  fontFamily: 'Poppins', fontWeight: 400, fontSize: 14,
                  lineHeight: '1.7em', color: 'rgba(255,255,255,0.82)', margin: 0,
                }}>
                  Get expert migration advice tailored to your situation.
                  Book a 1:1 session with our registered migration agents today.
                </p>
              </div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 32, marginTop: 36 }}>
                {[{ value: '5k+', label: 'Visas Granted' }, { value: '98%', label: 'Success Rate' }].map(s => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 2px 0' }}>{s.value}</p>
                    <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right form panel ── */}
            <form
              onSubmit={e => {
                e.preventDefault();
                alert('Thank you! Your enquiry has been submitted. Our team will contact you shortly.');
                setFormData({ fullName: '', phone: '', email: '', currentRole: '', date: '', time: '' });
              }}
              style={{ background: '#fff', padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18, justifyContent: 'center' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Full Name</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  <input type="text" name="fullName" placeholder="John Doe" required value={formData.fullName}
                    onChange={handleChange}
                    style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 14, color: '#333' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Phone</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <input type="tel" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone}
                      onChange={handleChange}
                      style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 13, color: '#333', minWidth: 0 }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Email</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    <input type="email" name="email" placeholder="john@example.com" required value={formData.email}
                      onChange={handleChange}
                      style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 13, color: '#333', minWidth: 0 }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>I am a...</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
                  <select name="currentRole" value={formData.currentRole} onChange={handleChange}
                    style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 14, color: formData.currentRole ? '#333' : '#aaa', appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}>
                    <option value="">Select your current role</option>
                    <option value="student">Student</option>
                    <option value="graduate">Recent Graduate</option>
                    <option value="professional">Working Professional</option>
                    <option value="parent">Parent / Guardian</option>
                    <option value="other">Other</option>
                  </select>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}><path d="M5 7.5l5 5 5-5" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Date</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                    <input type="date" name="date" value={formData.date} onChange={handleChange}
                      style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 13, color: '#333', minWidth: 0 }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Time</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    <input type="time" name="time" value={formData.time} onChange={handleChange}
                      style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 13, color: '#333', minWidth: 0 }} />
                  </div>
                </div>
              </div>

              <button type="submit" style={{
                width: '100%', padding: '14px 24px', background: '#FF3300',
                border: 'none', borderRadius: 8, color: '#fff',
                fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, cursor: 'pointer',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 2,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#e62e00'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FF3300'; }}
              >
                Book 1:1 Consulting
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>

              <p style={{ fontFamily: 'Poppins', fontSize: 11, color: '#aaa', textAlign: 'center', margin: 0 }}>
                By booking, you agree to our{' '}
                <span style={{ color: '#555', textDecoration: 'underline', cursor: 'pointer' }}>Terms</span>{' '}&amp;{' '}
                <span style={{ color: '#555', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>
              </p>
            </form>
          </div>
        </section>

        {/* ── CTA strip ── */}
        <section className="w-full py-16 px-6" style={{ backgroundColor: '#00352B' }}>
          <div className="max-w-[900px] mx-auto text-center">
            <p className="font-poppins text-white text-xl md:text-2xl leading-relaxed mb-8">
              Ready To Start Your Australian Journey? Let Our Experts In Mumbai And Brisbane Guide You Every Step Of The Way.
            </p>
            <a
              href="/#book-free-call"
              className="inline-block font-poppins font-medium text-white rounded-lg px-8 py-3 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#FF3300' }}
            >
              Book Free Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
