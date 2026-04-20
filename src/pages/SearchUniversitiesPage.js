import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

/* ── University data ── */
const UNIVERSITIES = [
  {
    id: 1,
    name: 'University of Sydney',
    city: 'Sydney',
    state: 'NSW',
    ranking: '19',
    totalCourses: '320+',
    type: 'Research',
    logo: '/images/course-card-logo.png',
    image: '/images/course-card-main.png',
  },
  {
    id: 2,
    name: 'University of Melbourne',
    city: 'Melbourne',
    state: 'VIC',
    ranking: '33',
    totalCourses: '285+',
    type: 'Research',
    logo: '/images/course-card-logo.png',
    image: '/images/course-card-main.png',
  },
  {
    id: 3,
    name: 'UNSW Sydney',
    city: 'Sydney',
    state: 'NSW',
    ranking: '19',
    totalCourses: '260+',
    type: 'Research',
    logo: '/images/course-card-logo.png',
    image: '/images/course-card-main.png',
  },
  {
    id: 4,
    name: 'Australian National University',
    city: 'Canberra',
    state: 'ACT',
    ranking: '30',
    totalCourses: '210+',
    type: 'Research',
    logo: '/images/course-card-logo.png',
    image: '/images/course-card-main.png',
  },
  {
    id: 5,
    name: 'Monash University',
    city: 'Melbourne',
    state: 'VIC',
    ranking: '55',
    totalCourses: '340+',
    type: 'Research',
    logo: '/images/course-card-logo.png',
    image: '/images/course-card-main.png',
  },
  {
    id: 6,
    name: 'University of Queensland',
    city: 'Brisbane',
    state: 'QLD',
    ranking: '47',
    totalCourses: '295+',
    type: 'Research',
    logo: '/images/course-card-logo.png',
    image: '/images/course-card-main.png',
  },
  {
    id: 7,
    name: 'RMIT University',
    city: 'Melbourne',
    state: 'VIC',
    ranking: '250',
    totalCourses: '430+',
    type: 'Teaching',
    logo: '/images/course-card-logo.png',
    image: '/images/course-card-main.png',
  },
  {
    id: 8,
    name: 'Griffith University',
    city: 'Brisbane',
    state: 'QLD',
    ranking: '301',
    totalCourses: '190+',
    type: 'Teaching',
    logo: '/images/course-card-logo.png',
    image: '/images/course-card-main.png',
  },
  {
    id: 9,
    name: 'Canterbury Institute of Management',
    city: 'Sydney',
    state: 'NSW',
    ranking: '—',
    totalCourses: '80+',
    type: 'Teaching',
    logo: '/images/course-card-logo.png',
    image: '/images/course-card-main.png',
  },
];

const CITIES = ['All Cities', 'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra'];
const UNI_TYPES = ['All Types', 'Research', 'Teaching'];

const UNIVERSITIES_FAQ_ITEMS = [
  {
    question: 'Which are the best universities in Australia for international students?',
    answer:
      'Australia is home to top-ranked universities such as Group of Eight (Go8) institutions, along with high-quality public and private universities offering globally recognized degrees across various fields.',
  },
  {
    question: 'How do I choose the right university in Australia?',
    answer:
      'Choosing the right university depends on:\n• Course relevance to your career goals\n• University ranking and reputation\n• Location (city vs regional)\n• Tuition fees and scholarships\n• PR pathway opportunities\n\nA strategic selection is important for long-term success.',
  },
  {
    question: 'What is the difference between universities and colleges in Australia?',
    answer:
      'Universities offer undergraduate, postgraduate, and research degrees\n• Colleges / Institutes usually offer diplomas, vocational courses, or pathway programs\n\nBoth can lead to strong career outcomes depending on your pathway.',
  },
  {
    question: 'Do Australian universities offer scholarships for international students?',
    answer:
      'Yes, many universities offer:\n• Merit-based scholarships\n• Early application scholarships\n• Course-specific grants\n\nA strong SOP and academic profile can increase your chances.',
  },
  {
    question: 'What are the tuition fees for universities in Australia?',
    answer:
      'Average tuition fees:\n• Bachelor’s: AUD 20,000 – AUD 45,000 per year\n• Master’s: AUD 22,000 – AUD 50,000 per year\n\nFees vary depending on course, university, and location.',
  },
  {
    question: 'Can I get admission to Australian universities with low academic scores?',
    answer:
      'Yes, many universities and colleges offer:\n• Flexible entry requirements\n• Pathway or diploma programs\n• Conditional offers\n\nYour overall profile, SOP, and experience also matter.',
  },
  {
    question: 'Which Australian universities offer the best PR pathways?',
    answer:
      'Universities located in regional areas or offering courses aligned with the Skilled Occupation List (SOL) provide better post-study work visa and PR opportunities.',
  },
  {
    question: 'How long does it take to get admission into an Australian university?',
    answer:
      'Typically:\n• Offer letter: 1–4 weeks\n• Confirmation of Enrolment (CoE): after fee payment\n• Visa processing: varies\n\nEarly application improves your chances.',
  },
  {
    question: 'Can I work while studying at an Australian university?',
    answer:
      'Yes, international students can:\n• Work up to 48 hours per fortnight\n• Work full-time during semester breaks\n\nThis helps manage living expenses.',
  },
  {
    question: 'How does Esante help with university selection and admission?',
    answer:
      'Esante provides:\n• Personalized university shortlisting\n• Course + PR pathway alignment\n• Scholarship optimization\n• SOP & application support\n• Visa guidance and post-arrival support',
  },
];

/* ── Search Icon ── */
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M19 19L13.65 13.65M15.667 8.833a6.833 6.833 0 1 1-13.667 0 6.833 6.833 0 0 1 13.667 0z"
      stroke="rgba(60,60,67,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Logo fallback ── */
const LogoFallback = ({ name }) => (
  <div style={{
    width: '100%', height: '100%',
    background: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <div style={{
      width: 42, height: 42,
      background: 'linear-gradient(135deg, #00352B 0%, #005a47 100%)',
      borderRadius: 6,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'Poppins' }}>
        {name.split(' ').filter(w => w.length > 2).map(w => w[0].toUpperCase()).slice(0, 2).join('')}
      </span>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════
   UNIVERSITY CARD — matches Figma layout exactly:
   white card (397x444), border #BABABA radius 13px,
   logo top-left, name + "View all courses" text,
   divider, image banner, "View Details" pill button
   ══════════════════════════════════════════════════════ */
const UniversityCard = ({ university }) => {
  const [logoErr, setLogoErr] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        border: '1px solid #BABABA',
        borderRadius: 13,
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.22s ease, transform 0.22s ease',
        minHeight: 444,
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,53,43,0.13)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* ── Logo — Figma x:14, y:31, w:91, h:88 ── */}
      <div style={{ padding: '31px 14px 0' }}>
        <div style={{
          width: 91, height: 88,
          borderRadius: 8,
          overflow: 'hidden',
          background: '#fff',
          border: '1px solid #e8e8e8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {!logoErr ? (
            <img
              src={university.logo}
              alt={university.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }}
              onError={() => setLogoErr(true)}
            />
          ) : (
            <LogoFallback name={university.name} />
          )}
        </div>
      </div>

      {/*
        Logo bottom = 31+88 = 119  →  Name top y:135  →  gap: 16px
      */}
      <div style={{ padding: '16px 19px 0' }}>
        {/* ── Name — Poppins 700 20px #00352B ── */}
        <h3 style={{
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: 20,
          lineHeight: '1.3em',
          color: '#00352B',
          margin: 0,
        }}>
          {university.name}
        </h3>
      </div>

      {/*
        Name ≈ y:135  →  "View all courses" y:183  →  gap ≈ 4px after name
      */}
      <div style={{ padding: '4px 19px 0' }}>
        {/* ── "View all courses" — Poppins 600 14px UPPER #FF3300 ── */}
        <p style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '1.43em',
          textTransform: 'uppercase',
          color: '#FF3300',
          margin: 0,
          letterSpacing: '0.04em',
        }}>
          View all courses
        </p>
      </div>

      {/*
        "View all courses" bottom ≈ 203  →  Divider y:215  →  gap: 12px
        Divider inset matches Figma x:19 (w:346)
      */}
      <div style={{ height: 1, background: '#A2A2A2', margin: '12px 19px 0' }} />

      {/*
        Divider bottom = 216  →  Banner y:233  →  gap: 17px
        Banner: w:237, h:55, left-aligned at x:14
      */}
      <div style={{ padding: '17px 0 0 14px' }}>
        <div style={{
          width: 237,
          height: 55,
          borderRadius: 6,
          overflow: 'hidden',
          background: '#f0f0f0',
        }}>
          {!imgErr ? (
            <img
              src={university.image}
              alt={`${university.name} logo`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={() => setImgErr(true)}
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(90deg, #e8f4f1 0%, #d2ebe5 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'Poppins', fontSize: 11, color: '#00352B', opacity: 0.55 }}>
                {university.city}, {university.state}
              </span>
            </div>
          )}
        </div>
      </div>

      {/*
        Banner bottom = 288  →  Button top y:364  →  flex spacer fills 76px gap
      */}
      <div style={{ flex: 1 }} />

      {/*
        Button: x:14, y:364, w:357, h:53, radius:21, border #BABABA
        Card bottom = 444  →  button bottom = 417  →  bottom padding: 27px
      */}
      <div style={{ padding: '0 14px 27px' }}>
        <div
          style={{
            border: '1px solid #BABABA',
            borderRadius: 21,
            height: 53,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#00352B';
            e.currentTarget.style.background = '#f6faf9';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#BABABA';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          {/* ── "View Details" — Poppins 500 20px #00352B, centered ── */}
          <span style={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '1.6em',
            color: '#00352B',
          }}>
            View Details
          </span>
        </div>
      </div>
    </div>
  );
};

/* ── Filter dropdown ── */
const FilterSelect = ({ options, value, onChange }) => (
  <div style={{ position: 'relative' }}>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        appearance: 'none',
        WebkitAppearance: 'none',
        padding: '10px 40px 10px 16px',
        border: '1px solid #BABABA',
        borderRadius: 8,
        fontFamily: 'Poppins',
        fontSize: 14,
        color: '#333',
        background: '#fff',
        cursor: 'pointer',
        minWidth: 180,
        outline: 'none',
      }}
    >
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
    <div style={{
      position: 'absolute', right: 12, top: '50%',
      transform: 'translateY(-50%)', pointerEvents: 'none', color: '#555',
    }}>
      <ChevronDown />
    </div>
  </div>
);

/* ══════════════════
   PAGE
   ══════════════════ */
export default function SearchUniversitiesPage() {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('All Cities');
  const [type, setType] = useState('All Types');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [enquiry, setEnquiry] = useState({
    fullName: '', email: '', phone: '', courseInterest: '', message: '', date: '', time: '',
  });

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const filtered = UNIVERSITIES.filter(u => {
    const q = search.toLowerCase();
    return (
      (!q || u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q)) &&
      (city === 'All Cities' || u.city === city) &&
      (type === 'All Types' || u.type === type)
    );
  });

  const handleEnquiry = e => {
    e.preventDefault();
    alert('Thank you! Your enquiry has been submitted. Our team will contact you shortly.');
    setEnquiry({ fullName: '', email: '', phone: '', courseInterest: '', message: '', date: '', time: '' });
  };

  const filtersActive = city !== 'All Cities' || type !== 'All Types' || search !== '';

  return (
    <div style={{ fontFamily: 'Poppins', background: '#fff', minHeight: '100vh' }}>
      <Header />

      <main>

        {/* ══════════════════════════════════════
            HERO SECTION
            ══════════════════════════════════════ */}
        <section style={{
          background: '#fff',
          paddingTop: 60,
          paddingBottom: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          textAlign: 'center',
        }}>
          {/* Badge — #FF3300 bg, #FFFBE9 text, radius 16 */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px 12px',
            background: '#FF3300',
            borderRadius: 16,
          }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '1.43em',
              color: '#FFFBE9',
            }}>
              Universities
            </span>
          </div>

          {/* Heading — Poppins 600 48px #00352B */}
          <h1 style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            lineHeight: '1.25em',
            letterSpacing: '-0.02em',
            color: '#00352B',
            margin: 0,
            maxWidth: 900,
            width: '100%',
            textAlign: 'center',
          }}>
            Choose the right university for your journey
          </h1>

          {/* Search field — 424px, #FF3300 border, rgba bg, radius 10 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '7px 8px',
            background: 'rgba(118,118,128,0.12)',
            border: '1px solid #FF3300',
            borderRadius: 10,
            width: 424,
            maxWidth: '90vw',
          }}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                border: 'none', background: 'transparent', outline: 'none',
                flex: 1, fontFamily: 'Poppins', fontSize: 16,
                color: 'rgba(60,60,67,0.6)', lineHeight: '1.3em',
              }}
            />
          </div>

          {/* Supporting text — Poppins 400 20px #000 */}
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: 20,
            lineHeight: '1.5em',
            color: '#000',
            textAlign: 'center',
            maxWidth: 1240,
            width: '90%',
            margin: 0,
          }}>
            Discover universities from top cities below. Use the filters to refine by city,
            university type and more.
          </p>
        </section>

        {/* ══════════════════
            FILTER BAR
            ══════════════════ */}
        <section style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          flexWrap: 'wrap',
          padding: '40px 100px 40px',
        }}>
          <FilterSelect options={CITIES} value={city} onChange={setCity} />
          <FilterSelect options={UNI_TYPES} value={type} onChange={setType} />
          {filtersActive && (
            <button
              onClick={() => { setCity('All Cities'); setType('All Types'); setSearch(''); }}
              style={{
                padding: '10px 20px', border: '1px solid #FF3300',
                borderRadius: 8, background: 'transparent', color: '#FF3300',
                fontFamily: 'Poppins', fontSize: 14, cursor: 'pointer',
              }}
            >
              Clear Filters
            </button>
          )}
        </section>

        {/* ══════════════════════════════════════════
            CARDS GRID — 3 per row matching Figma grid
            ══════════════════════════════════════════ */}
        <section style={{ padding: '0 100px 80px', background: '#fff', marginTop: 8 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontFamily: 'Poppins', fontSize: 18, color: '#888' }}>
                No universities found matching your criteria.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}>
              {filtered.map(uni => (
                <UniversityCard key={uni.id} university={uni} />
              ))}
            </div>
          )}
        </section>

        {/* ══════════════════════════════════════════════════
            BOOKING FORM SECTION
            Left: dark-green card  |  Right: booking form
            ══════════════════════════════════════════════════ */}
        <section style={{ background: '#f5f5f5', padding: '75px 100px 100px' }}>
          <div style={{
            maxWidth: 1040, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1.45fr',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 4px 32px rgba(0,0,0,0.09)',
          }}>

            {/* ── Left green panel ── */}
            <div style={{
              backgroundImage: 'url(/images/migration-advisors-hero.png)',
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
                background: 'linear-gradient(160deg, rgba(0,35,24,0.86) 0%, rgba(0,55,40,0.80) 100%)',
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
                  }}>University Admissions</span>
                </div>
                <h2 style={{
                  fontFamily: 'Poppins', fontWeight: 700,
                  fontSize: 'clamp(26px, 2.4vw, 36px)', lineHeight: '1.2em',
                  color: '#fff', margin: '0 0 4px 0',
                }}>
                  Study at top<br />universities.
                </h2>
                <h2 style={{
                  fontFamily: 'Poppins', fontWeight: 700,
                  fontSize: 'clamp(26px, 2.4vw, 36px)', lineHeight: '1.2em',
                  color: '#FF3300', margin: '0 0 20px 0',
                }}>
                  Dream big.
                </h2>
                <p style={{
                  fontFamily: 'Poppins', fontWeight: 400, fontSize: 14,
                  lineHeight: '1.7em', color: 'rgba(255,255,255,0.82)', margin: 0,
                }}>
                  Get expert guidance for your university application journey.
                  Book a 1:1 session with our top counselors today.
                </p>
              </div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 32, marginTop: 36 }}>
                {[{ value: '5k+', label: 'Students Placed' }, { value: '98%', label: 'Success Rate' }].map(s => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 2px 0' }}>{s.value}</p>
                    <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right form panel ── */}
            <form onSubmit={handleEnquiry} style={{ background: '#fff', padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18, justifyContent: 'center' }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Full Name</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  <input type="text" placeholder="John Doe" required value={enquiry.fullName}
                    onChange={e => setEnquiry(p => ({ ...p, fullName: e.target.value }))}
                    style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 14, color: '#333' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Phone</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <input type="tel" placeholder="+1 (555) 000-0000" value={enquiry.phone}
                      onChange={e => setEnquiry(p => ({ ...p, phone: e.target.value }))}
                      style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 13, color: '#333', minWidth: 0 }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Email</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    <input type="email" placeholder="john@example.com" required value={enquiry.email}
                      onChange={e => setEnquiry(p => ({ ...p, email: e.target.value }))}
                      style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 13, color: '#333', minWidth: 0 }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>I am a...</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
                  <select value={enquiry.courseInterest} onChange={e => setEnquiry(p => ({ ...p, courseInterest: e.target.value }))}
                    style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 14, color: enquiry.courseInterest ? '#333' : '#aaa', appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}>
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
                    <input type="date" value={enquiry.date} onChange={e => setEnquiry(p => ({ ...p, date: e.target.value }))}
                      style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 13, color: '#333', minWidth: 0 }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Time</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    <input type="time" value={enquiry.time} onChange={e => setEnquiry(p => ({ ...p, time: e.target.value }))}
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

        {/* FAQ — universities in Australia for international students */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
          aria-labelledby="universities-faq-heading"
        >
          <h2
            id="universities-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Universities in Australia for International Students
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {UNIVERSITIES_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`universities-faq-answer-${index}`}
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
                          id={`universities-faq-answer-${index}`}
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
              Still have questions? Get personalised university guidance from an Esante expert.
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
