import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

/* ── Course data with all card fields ── */
const COURSES = [
  {
    id: 1,
    title: 'Master of Professional Accounting',
    university: 'The University of Sydney',
    level: 'Postgraduate',
    area: 'Business & Management',
    degreeType: 'Masters Degree (Coursework)',
    ranking: '61',
    location: 'Darlington, Australia',
    intake: '09.02.2026',
    entryScore: 'IELTS 7.0',
    fees: 'AUD58800',
    feesYear: '2026',
    logo: '/images/course-card-logo.png',
  },
  {
    id: 2,
    title: 'Bachelor of Computer Science',
    university: 'University of Melbourne',
    level: 'Undergraduate',
    area: 'Engineering & IT',
    degreeType: 'Bachelor Degree (Coursework)',
    ranking: '33',
    location: 'Parkville, Australia',
    intake: '03.03.2026',
    entryScore: 'IELTS 6.5',
    fees: 'AUD45600',
    feesYear: '2026',
    logo: '/images/course-card-logo.png',
  },
  {
    id: 3,
    title: 'Master of Engineering (Biomedical)',
    university: 'University of Queensland',
    level: 'Postgraduate',
    area: 'Medical & Health',
    degreeType: 'Masters Degree (Coursework)',
    ranking: '47',
    location: 'St Lucia, Australia',
    intake: '24.02.2026',
    entryScore: 'IELTS 6.5',
    fees: 'AUD52400',
    feesYear: '2026',
    logo: '/images/course-card-logo.png',
  },
  {
    id: 4,
    title: 'Bachelor of Nursing',
    university: 'Monash University',
    level: 'Undergraduate',
    area: 'Medical & Health',
    degreeType: 'Bachelor Degree (Coursework)',
    ranking: '55',
    location: 'Clayton, Australia',
    intake: '02.03.2026',
    entryScore: 'IELTS 7.0',
    fees: 'AUD47200',
    feesYear: '2026',
    logo: '/images/course-card-logo.png',
  },
  {
    id: 5,
    title: 'Master of Data Science',
    university: 'UNSW Sydney',
    level: 'Postgraduate',
    area: 'Engineering & IT',
    degreeType: 'Masters Degree (Coursework)',
    ranking: '19',
    location: 'Kensington, Australia',
    intake: '17.02.2026',
    entryScore: 'IELTS 7.0',
    fees: 'AUD55800',
    feesYear: '2026',
    logo: '/images/course-card-logo.png',
  },
  {
    id: 6,
    title: 'Bachelor of Laws (LLB)',
    university: 'Australian National University',
    level: 'Undergraduate',
    area: 'Law',
    degreeType: 'Bachelor Degree (Coursework)',
    ranking: '30',
    location: 'Canberra, Australia',
    intake: '24.02.2026',
    entryScore: 'IELTS 7.0',
    fees: 'AUD43800',
    feesYear: '2026',
    logo: '/images/course-card-logo.png',
  },
  {
    id: 7,
    title: 'Master of Architecture',
    university: 'RMIT University',
    level: 'Postgraduate',
    area: 'Arts & Design',
    degreeType: 'Masters Degree (Coursework)',
    ranking: '250',
    location: 'Melbourne, Australia',
    intake: '03.03.2026',
    entryScore: 'IELTS 6.5',
    fees: 'AUD40200',
    feesYear: '2026',
    logo: '/images/course-card-logo.png',
  },
  {
    id: 8,
    title: 'Bachelor of Environmental Science',
    university: 'Griffith University',
    level: 'Undergraduate',
    area: 'Sciences',
    degreeType: 'Bachelor Degree (Coursework)',
    ranking: '301',
    location: 'Nathan, Australia',
    intake: '02.03.2026',
    entryScore: 'IELTS 6.0',
    fees: 'AUD36400',
    feesYear: '2026',
    logo: '/images/course-card-logo.png',
  },
  {
    id: 9,
    title: 'Master of Business Administration',
    university: 'Macquarie University',
    level: 'Postgraduate',
    area: 'Business & Management',
    degreeType: 'Masters Degree (Coursework)',
    ranking: '195',
    location: 'Macquarie Park, Australia',
    intake: '10.02.2026',
    entryScore: 'IELTS 6.5',
    fees: 'AUD49600',
    feesYear: '2026',
    logo: '/images/course-card-logo.png',
  },
];

const SUBJECT_AREAS = [
  'All Areas', 'Business & Management', 'Engineering & IT',
  'Medical & Health', 'Law', 'Arts & Design', 'Sciences',
];
const STUDY_LEVELS = ['All Levels', 'Undergraduate', 'Postgraduate', 'PhD / Research', 'Diploma'];
const DESTINATIONS = ['All Destinations', 'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra'];

const COURSES_FAQ_ITEMS = [
  {
    question: 'How do I choose the right course to study in Australia?',
    answer:
      'Choosing the right course depends on your academic background, career goals, budget, and PR opportunities. It’s important to select a course aligned with Australia’s Skilled Occupation List to improve your long-term migration prospects.',
  },
  {
    question: 'Which courses are in high demand in Australia?',
    answer:
      'Some of the most in-demand courses in Australia include:\n• Nursing & Healthcare\n• Information Technology (IT)\n• Engineering\n• Accounting & Finance\n• Trades (Carpentry, Automotive, Electrical)\n• Hospitality & Cookery\n\nThese fields are aligned with skill shortages and PR pathways.',
  },
  {
    question: 'What are the eligibility requirements to study in Australia?',
    answer:
      'Eligibility typically includes:\n• Academic qualifications (12th / Bachelor’s / Master’s)\n• English proficiency (IELTS / PTE)\n• Genuine Student (GS) requirement\n• Financial capacity proof\n\nRequirements vary by university and course.',
  },
  {
    question: 'What is the cost of studying in Australia?',
    answer:
      'Course fees generally range from:\n• AUD 20,000 – AUD 45,000 per year (depending on course & university)\n\nAdditional costs include accommodation, living expenses, and insurance.',
  },
  {
    question: 'Can I work while studying in Australia?',
    answer:
      'Yes, international students can work:\n• Up to 48 hours per fortnight during study periods\n• Full-time during holidays\n\nPart-time jobs help cover living expenses and gain local experience.',
  },
  {
    question: 'Which intake should I choose for studying in Australia?',
    answer:
      'The main intakes are:\n• February (major intake)\n• July (second major intake)\n• November (limited courses)\n\nChoosing the right intake depends on course availability and your readiness.',
  },
  {
    question: 'Do all courses in Australia lead to PR opportunities?',
    answer:
      'Not all courses lead to PR. Courses aligned with the Skilled Occupation List (SOL / MLTSSL) offer better chances for post-study work visas and permanent residency pathways.',
  },
  {
    question: 'How can Esante help me select the right course and university?',
    answer:
      'Esante provides:\n• Personalized course & university selection\n• PR-focused career pathway planning\n• Application and admission support\n• SOP & visa guidance\n• End-to-end support before and after arrival',
  },
  {
    question: 'Can I change my course or university after arriving in Australia?',
    answer:
      'Yes, but it must comply with visa conditions and Genuine Student requirements. Changing courses without proper guidance can impact your visa status.',
  },
  {
    question: 'Is studying in Australia worth it for international students?',
    answer:
      'Yes, Australia offers:\n• Globally recognized education\n• Strong job opportunities\n• Post-study work visas\n• Pathways to permanent residency',
  },
];

/* ── SVG icons matching the Figma card screenshot ── */
const IconAustraliaFlag = () => {
  const star5 = (cx, cy, r) => {
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const a = (i * Math.PI) / 5 - Math.PI / 2;
      const rad = i % 2 === 0 ? r : r * 0.38;
      pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
    }
    return pts.join(' ');
  };
  const star7 = (cx, cy, r) => {
    const pts = [];
    for (let i = 0; i < 14; i++) {
      const a = (i * Math.PI) / 7 - Math.PI / 2;
      const rad = i % 2 === 0 ? r : r * 0.445;
      pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
    }
    return pts.join(' ');
  };
  return (
    <svg width="20" height="13" viewBox="0 0 26 17" style={{ borderRadius: 2, flexShrink: 0, display: 'block' }}>
      {/* Blue background */}
      <rect width="26" height="17" fill="#00247D" rx="1.5"/>
      {/* Union Jack — top-left 13×8.5 quadrant */}
      {/* White saltire */}
      <line x1="0" y1="0" x2="13" y2="8.5" stroke="white" strokeWidth="3"/>
      <line x1="13" y1="0" x2="0" y2="8.5" stroke="white" strokeWidth="3"/>
      {/* Red saltire */}
      <line x1="0" y1="0" x2="13" y2="8.5" stroke="#CF142B" strokeWidth="1.5"/>
      <line x1="13" y1="0" x2="0" y2="8.5" stroke="#CF142B" strokeWidth="1.5"/>
      {/* White cross */}
      <rect x="5.2" y="0" width="2.6" height="8.5" fill="white"/>
      <rect x="0" y="3" width="13" height="2.5" fill="white"/>
      {/* Red cross */}
      <rect x="5.85" y="0" width="1.3" height="8.5" fill="#CF142B"/>
      <rect x="0" y="3.6" width="13" height="1.3" fill="#CF142B"/>
      {/* Commonwealth Star: 7-pointed at bottom-left */}
      <polygon points={star7(3.5, 13.5, 2.2)} fill="white"/>
      {/* Southern Cross: 4 large + 1 small 5-pointed stars */}
      <polygon points={star5(21, 4, 1.8)} fill="white"/>
      <polygon points={star5(24.5, 9, 1.5)} fill="white"/>
      <polygon points={star5(21, 14, 1.5)} fill="white"/>
      <polygon points={star5(16.5, 9.5, 1.5)} fill="white"/>
      <polygon points={star5(23.5, 12, 1)} fill="white"/>
    </svg>
  );
};

const IconRanking = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="18" y="3" width="4" height="18" rx="1" />
    <rect x="10" y="8" width="4" height="13" rx="1" />
    <rect x="2" y="13" width="4" height="8" rx="1" />
  </svg>
);

const IconGradCap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v4a6 6 0 0 0 12 0v-4" />
    <path d="M20 10v4" />
  </svg>
);

const IconCalendar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const IconCheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconDollar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M15 9.5a3 3 0 0 0-6 0c0 3 6 3 6 6a3 3 0 0 1-6 0" />
  </svg>
);

const IconInfo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#666" stroke="none">
    <circle cx="12" cy="12" r="10" fill="#666" />
    <path d="M12 8h.01M11 12h1v4h1" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ── Search icon ── */
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

/* ── Detail row ── */
const DetailRow = ({ icon, text, extra }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '5px 0',
  }}>
    <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>{icon}</span>
    <span style={{
      fontFamily: 'Poppins',
      fontSize: 13,
      fontWeight: 400,
      color: '#333',
      flex: 1,
      lineHeight: '1.4em',
    }}>
      {text}
    </span>
    {extra && <span style={{ display: 'flex', alignItems: 'center', marginLeft: 4 }}>{extra}</span>}
  </div>
);

/* ── University logo fallback ── */
const LogoFallback = ({ name }) => (
  <div style={{
    width: '100%', height: '100%',
    background: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 6,
  }}>
    <div style={{
      width: 40, height: 40,
      background: 'linear-gradient(135deg, #00352B 0%, #005a47 100%)',
      borderRadius: 6,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'Poppins', letterSpacing: 0.5 }}>
        {name.split(' ').filter(w => w.length > 2).map(w => w[0].toUpperCase()).slice(0, 2).join('')}
      </span>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════
   COURSE CARD — matches Figma card screenshot exactly:
   white card, logo top-left, title, university, divider,
   6 detail rows, "View Details" outlined pill button
   ══════════════════════════════════════════════════════ */
const CourseCard = ({ course }) => {
  const [logoErr, setLogoErr] = useState(false);

  return (
    <div style={{
      width: '100%',
      border: '1px solid #BABABA',
      borderRadius: 13,
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      transition: 'box-shadow 0.22s ease, transform 0.22s ease',
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
      {/* ── Top padding area with logo (y:41 from card top in Figma) ── */}
      <div style={{ padding: '24px 14px 0 14px' }}>
        {/* Logo thumbnail — 103×90px, white bg, rounded corners */}
        <div style={{
          width: 103, height: 72,
          borderRadius: 10,
          overflow: 'hidden',
          background: '#fff',
          border: '1px solid #e8e8e8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {!logoErr ? (
            <img
              src={course.logo}
              alt={course.university}
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }}
              onError={() => setLogoErr(true)}
            />
          ) : (
            <LogoFallback name={course.university} />
          )}
        </div>
      </div>

      {/* ── Course title + university (padding matches Figma x:19) ── */}
      <div style={{ padding: '14px 19px 0 19px' }}>
        <h3 style={{
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: 18,
          lineHeight: '1.5em',
          color: '#00352B',
          margin: '0 0 4px 0',
        }}>
          {course.title}
        </h3>
        <p style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: 13,
          lineHeight: '1.4em',
          textTransform: 'uppercase',
          color: '#FF3300',
          margin: 0,
          letterSpacing: '0.04em',
        }}>
          {course.university}
        </p>
      </div>

      {/* ── Divider (Figma: x:24 inset, #A2A2A2) ── */}
      <div style={{
        height: 1,
        background: '#A2A2A2',
        margin: '14px 24px',
      }} />

      {/* ── Detail rows — matches course-card-main.png screenshot exactly ── */}
      <div style={{ padding: '0 19px', flex: 1 }}>
        <DetailRow
          icon={<IconRanking />}
          text={`THE World Ranking: ${course.ranking}`}
        />
        <DetailRow
          icon={<IconGradCap />}
          text={course.degreeType}
        />
        <DetailRow
          icon={<IconAustraliaFlag />}
          text={course.location}
        />
        <DetailRow
          icon={<IconCalendar />}
          text={`Next intake: ${course.intake}`}
        />
        <DetailRow
          icon={<IconCheckCircle />}
          text={`Entry Score: ${course.entryScore}`}
        />
        <DetailRow
          icon={<IconDollar />}
          text={`${course.fees} (${course.feesYear})`}
          extra={<IconInfo />}
        />
      </div>

      {/* ── "View Details" pill — Figma: x:14, radius 21px, border #BABABA ── */}
      <div style={{ padding: '16px 14px 18px' }}>
        <div style={{
          border: '1px solid #BABABA',
          borderRadius: 21,
          padding: '12px 0',
          textAlign: 'center',
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
          <span style={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: 16,
            color: '#00352B',
            lineHeight: '1.5em',
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
export default function SearchCoursesPage() {
  const [search, setSearch] = useState('');
  const [area, setArea] = useState('All Areas');
  const [level, setLevel] = useState('All Levels');
  const [destination, setDestination] = useState('All Destinations');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [enquiry, setEnquiry] = useState({
    fullName: '', email: '', phone: '', courseInterest: '', message: '', date: '', time: '',
  });

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const filtered = COURSES.filter(c => {
    const q = search.toLowerCase();
    return (
      (!q || c.title.toLowerCase().includes(q) || c.university.toLowerCase().includes(q)) &&
      (area === 'All Areas' || c.area === area) &&
      (level === 'All Levels' || c.level === level)
    );
  });

  const handleEnquiry = e => {
    e.preventDefault();
    alert('Thank you! Your enquiry has been submitted. Our team will contact you shortly.');
    setEnquiry({ fullName: '', email: '', phone: '', courseInterest: '', message: '' });
  };

  const filtersActive = area !== 'All Areas' || level !== 'All Levels' || destination !== 'All Destinations' || search !== '';

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
              Courses
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
            Choose the right course for your journey
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
            Discover courses from top universities below. Use the filters to refine by subject area,
            study level, destination and more.
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
          <FilterSelect options={SUBJECT_AREAS} value={area} onChange={setArea} />
          <FilterSelect options={STUDY_LEVELS} value={level} onChange={setLevel} />
          <FilterSelect options={DESTINATIONS} value={destination} onChange={setDestination} />
          {filtersActive && (
            <button
              onClick={() => { setArea('All Areas'); setLevel('All Levels'); setDestination('All Destinations'); setSearch(''); }}
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

        {/* ══════════════════════════════════
            CARDS GRID — 3 per row, gap 24px
            ══════════════════════════════════ */}
        <section style={{ padding: '0 100px 80px', background: '#fff', marginTop: 8 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontFamily: 'Poppins', fontSize: 18, color: '#888' }}>
                No courses found matching your criteria.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}>
              {filtered.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </section>

        {/* ══════════════════════════════════════════════════
            BOOKING FORM SECTION  — matches Figma exactly
            Left: dark-green card  |  Right: booking form
            ══════════════════════════════════════════════════ */}
        <section style={{ background: '#f5f5f5', padding: '75px 100px 100px' }}>
          {/* Outer white card — border-radius here clips both panels (matches Figma) */}
          <div style={{
            maxWidth: 1040, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1.45fr',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 4px 32px rgba(0,0,0,0.09)',
          }}>

            {/* ── Left green panel (no own border-radius — parent clips it) ── */}
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
              {/* dark green overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, rgba(0,35,24,0.86) 0%, rgba(0,55,40,0.80) 100%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Badge — dark pill, matches Figma */}
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
                  }}>Global Education</span>
                </div>
                {/* Headline */}
                <h2 style={{
                  fontFamily: 'Poppins', fontWeight: 700,
                  fontSize: 'clamp(26px, 2.4vw, 36px)', lineHeight: '1.2em',
                  color: '#fff', margin: '0 0 4px 0',
                }}>
                  Study in 10+<br />countries.
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
                  Get expert guidance for your international education journey.
                  Book a 1:1 session with our top counselors today.
                </p>
              </div>
              {/* Stats */}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 32, marginTop: 36 }}>
                {[{ value: '5k+', label: 'Students Placed' }, { value: '98%', label: 'Success Rate' }].map(s => (
                  <div key={s.label}>
                    <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 2px 0' }}>{s.value}</p>
                    <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right form — white panel inside the outer card ── */}
            <form onSubmit={handleEnquiry} style={{ background: '#fff', padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18, justifyContent: 'center' }}>

              {/* Full Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 500, color: '#333' }}>Full Name</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', border: '1px solid #e0e0e0', borderRadius: 8, background: '#fafafa' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  <input type="text" placeholder="John Doe" required value={enquiry.fullName}
                    onChange={e => setEnquiry(p => ({ ...p, fullName: e.target.value }))}
                    style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontFamily: 'Poppins', fontSize: 14, color: '#333' }} />
                </div>
              </div>

              {/* Phone + Email */}
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

              {/* I am a... */}
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

              {/* Date + Time */}
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

              {/* Submit */}
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

              {/* Terms */}
              <p style={{ fontFamily: 'Poppins', fontSize: 11, color: '#aaa', textAlign: 'center', margin: 0 }}>
                By booking, you agree to our{' '}
                <span style={{ color: '#555', textDecoration: 'underline', cursor: 'pointer' }}>Terms</span>{' '}&amp;{' '}
                <span style={{ color: '#555', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>
              </p>
            </form>
          </div>
        </section>

        {/* FAQ — courses in Australia for international students */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
          aria-labelledby="courses-faq-heading"
        >
          <h2
            id="courses-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Courses in Australia for International Students
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {COURSES_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`courses-faq-answer-${index}`}
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
                          id={`courses-faq-answer-${index}`}
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
              Still have questions? Get personalised course guidance from an Esante expert.
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
