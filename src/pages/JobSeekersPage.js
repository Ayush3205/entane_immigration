import React, { useState, useMemo } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

/* ── Image assets ─────────────────────────────────────────────────────────── */
const HERO_BG = '/images/job-seekers/js-hero-bg.png';
const RECT_19 = '/images/job-seekers/js-rect-19-53537d.png';
const IMG_59  = '/images/job-seekers/js-image-59-510b85.png';
const IMG_60  = '/images/job-seekers/js-image-60.png';

/* ── Occupation List Data (SOL) ───────────────────────────────────────────── */
const SOL_IMG = '/images/job-seekers/js-wave-illustration.png';

const OCCUPATIONS = [
  { code: '261313', title: 'Software Engineer',               authority: 'ACS',   list: 'MLTSSL',  category: 'Tech & ICT' },
  { code: '261312', title: 'Developer Programmer',            authority: 'ACS',   list: 'MLTSSL',  category: 'Tech & ICT' },
  { code: '261111', title: 'ICT Business Analyst',            authority: 'ACS',   list: 'MLTSSL',  category: 'Tech & ICT' },
  { code: '254415', title: 'Registered Nurse (Critical Care)',authority: 'ANMAC', list: 'MLTSSL',  category: 'Healthcare' },
  { code: '253111', title: 'General Practitioner',            authority: 'MedBA', list: 'MLTSSL',  category: 'Healthcare' },
  { code: '233512', title: 'Mechanical Engineer',             authority: 'EA',    list: 'MLTSSL',  category: 'Engineering' },
  { code: '233211', title: 'Civil Engineer',                  authority: 'EA',    list: 'MLTSSL',  category: 'Engineering' },
  { code: '334111', title: 'Plumber (General)',               authority: 'TRA',   list: 'MLTSSL',  category: 'Trades' },
  { code: '341111', title: 'Electrician (General)',           authority: 'TRA',   list: 'MLTSSL',  category: 'Trades' },
  { code: '254499', title: 'Registered Nurses nec',           authority: 'ANMAC', list: 'STSOL',   category: 'Healthcare' },
  { code: '263111', title: 'Computer Network & Systems Eng.', authority: 'ACS',   list: 'MLTSSL',  category: 'Tech & ICT' },
  { code: '233914', title: 'Engineering Technologist',        authority: 'EA',    list: 'STSOL',   category: 'Engineering' },
];

const SOL_FILTERS = ['All', 'Tech & ICT', 'Healthcare', 'Engineering', 'Trades'];

/* ── PR Points Calculator Data ────────────────────────────────────────────── */
const AGE_OPTIONS = [
  { label: '18-24 years (25 pts)',  pts: 25 },
  { label: '25-32 years (30 pts)',  pts: 30 },
  { label: '33-39 years (25 pts)',  pts: 25 },
  { label: '40-44 years (15 pts)',  pts: 15 },
  { label: '45-49 years (0 pts)',   pts: 0 },
];
const ENGLISH_OPTIONS = [
  { label: 'Competent (IELTS 6) (0 pts)',     pts: 0 },
  { label: 'Proficient (IELTS 7) (10 pts)',   pts: 10 },
  { label: 'Superior (IELTS 8) (20 pts)',     pts: 20 },
];
const EDUCATION_OPTIONS = [
  { label: 'Diploma (10 pts)',              pts: 10 },
  { label: 'Bachelor Degree (15 pts)',      pts: 15 },
  { label: 'PhD (20 pts)',                  pts: 20 },
];
const EXPERIENCE_OPTIONS = [
  { label: 'Less than 3 years (0 pts)',    pts: 0 },
  { label: '3-4 years (5 pts)',            pts: 5 },
  { label: '5-8 years (10 pts)',           pts: 10 },
  { label: '8+ years (15 pts)',            pts: 15 },
];

/* ── Static content ───────────────────────────────────────────────────────── */
const STATS = [
  { value: '3.8%',        label: 'Employment Rate' },
  { value: '$90k+',       label: 'Avg. Professional Salary' },
  { value: 'High Demand', label: 'For Skilled Migrants' },
];

const JOB_CARDS_ROW1 = [
  { title: 'Doctors',   desc: 'High quality Doctors, are required\nfor this role' },
  { title: 'Nurses',    desc: 'High quality Nurses, are required\nfor this role' },
  { title: 'Engineers', desc: 'High quality Engineers, are required\nfor this role' },
];
const JOB_CARDS_ROW2 = [
  { title: 'Hospitality',  desc: 'High quality hospitality professionals\nare required' },
  { title: 'Construction', desc: 'High quality construction workers\nare required' },
];

const VISA_POINTS = [
  'Subclass 482 – Temporary Skill Shortage (TSS) Visa',
  'Subclass 186 – Employer Nomination Scheme (PR)',
  'Subclass 187 – Regional Sponsored Migration Scheme',
  'Skilled Occupation List (SOL / MLTSSL / STSOL) pathways',
  'Permanent Residency transition pathways',
  'Citizenship-ready migration planning',
];

const E2E_POINTS = [
  'Employer shortlisting & job matching',
  'Interview preparation aligned with Australian hiring standards',
  'CV & Australian cover letter optimisation',
  'Multiple employer interviews to secure the best offer & hourly rate',
  'Visa documentation & compliance support',
  'Employer nomination & sponsorship coordination',
  'Accommodation support after arrival',
  'TFN, bank account & local setup assistance',
  'Ongoing post-arrival support until settlement',
  'Long-term PR & citizenship planning',
];

const FEES_POINTS = [
  '✔ No upfront recruitment fees',
  '✔ We charge only after you receive a guaranteed job offer',
  '✔ Fees vary depending on occupation and visa type',
  "✔ If we don't secure you a job — you pay nothing",
];

const JOB_SEEKERS_FAQ_ITEMS = [
  {
    question: 'How can I get a job in Australia from overseas?',
    answer:
      'You can get a job in Australia by applying through verified employers who offer sponsorship under skilled visa programs like Subclass 482 or 186. With the right skills, experience, and guidance, you can secure a job offer before moving to Australia.',
  },
  {
    question: 'What is employer sponsorship in Australia?',
    answer:
      'Employer sponsorship means an Australian employer hires you and sponsors your work visa. Common visa options include Subclass 482 (TSS visa) and Subclass 186 (PR pathway), allowing skilled professionals to legally work and settle in Australia.',
  },
  {
    question: 'Which jobs are in demand in Australia for skilled migrants?',
    answer:
      'High-demand jobs in Australia include:\n• Healthcare (Nurses, Doctors)\n• IT (Software Engineers, Developers)\n• Engineering\n• Construction & Trades\n• Hospitality & Retail\n• Mining & Industrial roles\n\nThese occupations are listed under Australia’s Skilled Occupation List (SOL).',
  },
  {
    question: 'What is the Skilled Occupation List (SOL)?',
    answer:
      'The Skilled Occupation List (SOL) includes professions that are in demand in Australia. Your occupation must be listed under MLTSSL, STSOL, or regional lists to qualify for skilled migration or employer-sponsored visas.',
  },
  {
    question: 'What visa options are available for skilled workers in Australia?',
    answer:
      'Popular skilled visa options include:\n• Subclass 482 – Temporary Skill Shortage (TSS) Visa\n• Subclass 186 – Employer Nomination Scheme (PR)\n• Subclass 187 – Regional Sponsored Migration\n• PR pathways through skilled migration\n\nThe right visa depends on your profile, experience, and employer sponsorship.',
  },
  {
    question: 'Do I need a job offer to move to Australia for work?',
    answer:
      'For employer-sponsored visas, yes — you need a valid job offer from an approved Australian employer. However, some independent skilled migration pathways may not require an offer but depend on PR points.',
  },
  {
    question: 'How much salary can I expect in Australia?',
    answer:
      'Salaries vary by industry, but skilled professionals in Australia typically earn:\n• $70,000 to $120,000+ AUD annually\n• Higher for specialised roles\n• Hourly roles in hospitality or trades can range from $25–$40 AUD/hour.',
  },
  {
    question: 'Do I need IELTS or English test for jobs in Australia?',
    answer:
      'Yes, most visa pathways require proof of English proficiency such as IELTS or PTE. Additionally, strong communication skills improve your chances of getting hired by Australian employers.',
  },
  {
    question: 'How long does it take to get a job in Australia through sponsorship?',
    answer:
      'The timeline can vary between 1 to 6 months depending on your occupation demand, experience, and employer availability. Faster results are possible with strong profiles and proper preparation.',
  },
  {
    question: 'Can I get permanent residency (PR) through a job in Australia?',
    answer:
      'Yes, many employer-sponsored roles lead to PR through visas like Subclass 186. Long-term migration pathways can transition you from temporary work visas to permanent residency.',
  },
  {
    question: 'Do I have to pay upfront fees for getting a job in Australia?',
    answer:
      'With Esante, no. You only pay professional fees after receiving a confirmed job offer. If no job is secured, you don’t pay — making it a risk-free model.',
  },
  {
    question: 'How does Esante help skilled job seekers?',
    answer:
      'Esante provides:\n• Employer connections & job matching\n• CV and interview preparation\n• Visa documentation and compliance\n• Sponsorship coordination\n• Post-arrival settlement support\n\nThis ensures a complete end-to-end migration journey.',
  },
  {
    question: 'What documents are required to apply for jobs in Australia?',
    answer:
      'Common documents include:\n• Updated CV (Australian format)\n• Educational certificates\n• Work experience proof\n• English test results (IELTS/PTE)\n• Passport\n\nAdditional documents may be required based on your occupation.',
  },
  {
    question: 'Can freshers apply for jobs in Australia?',
    answer:
      'Most employer-sponsored roles require relevant work experience. However, freshers can explore study pathways in Australia that lead to job opportunities and PR options later.',
  },
  {
    question: 'Is it safe to apply for jobs in Australia through consultants?',
    answer:
      'Yes, if you choose ethical and transparent consultants. Always work with agencies that:\n• Do not charge upfront fees\n• Offer verified job opportunities\n• Follow legal and compliant migration processes',
  },
];

/* ══════════════════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ══════════════════════════════════════════════════════════════════════════════ */

function JobIconBox() {
  return (
    <div
      className="flex-shrink-0 rounded-[13px]"
      style={{ width: 64, height: 65, background: 'rgba(255,51,0,0.25)' }}
    />
  );
}

function JobCard({ title, desc }) {
  return (
    <div
      className="flex flex-col gap-[10px] px-[20px] py-[10px] bg-white rounded-[11px] flex-1"
      style={{ border: '1px solid rgba(0,0,0,0.09)' }}
    >
      <JobIconBox />
      <p
        className="font-poppins font-semibold text-black m-0"
        style={{ fontSize: 30, lineHeight: '1.5em', letterSpacing: '-0.005em' }}
      >
        {title}
      </p>
      <p
        className="font-poppins font-normal text-black m-0 whitespace-pre-line"
        style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '-0.0075em' }}
      >
        {desc}
      </p>
    </div>
  );
}

function SeeFullListCard() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[17px] px-[20px] py-[10px]
                 rounded-[11px] flex-1"
      style={{ border: '1px solid rgba(0,0,0,0.09)', background: '#00352B' }}
    >
      <p
        className="font-poppins font-semibold text-white m-0 self-start"
        style={{ fontSize: 40, lineHeight: '1.5em', letterSpacing: '-0.00375em' }}
      >
        See full list
      </p>
      <p
        className="font-poppins font-normal text-white text-center m-0 w-full"
        style={{ fontSize: 16, lineHeight: '1.5em', letterSpacing: '-0.009375em' }}
      >
        View the complete Top in demand jobs list
      </p>
      <button
        type="button"
        className="font-poppins font-medium text-white rounded-[9px] px-[10px] py-[10px] border-0 cursor-pointer"
        style={{ background: '#FF3300', fontSize: 20, lineHeight: '1.5em', letterSpacing: '-0.0075em' }}
      >
        Download PDF
      </button>
    </div>
  );
}

/* ── Skilled Occupation List (SOL) ────────────────────────────────────────── */

function SkilledOccupationList() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    return OCCUPATIONS.filter((o) => {
      const matchesFilter = activeFilter === 'All' || o.category === activeFilter;
      const matchesSearch =
        !search ||
        o.title.toLowerCase().includes(search.toLowerCase()) ||
        o.code.includes(search);
      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter]);

  return (
    <section className="w-full bg-white" style={{ padding: '80px 100px' }}>
      <div className="flex gap-[60px] items-start w-full">
        {/* LEFT PANEL */}
        <div className="flex flex-col gap-[20px]" style={{ width: 420, flexShrink: 0 }}>
          <div
            className="rounded-[12px] overflow-hidden"
            style={{ width: '100%', height: 280, backgroundImage: `url('${SOL_IMG}')`, backgroundSize: 'cover', backgroundPosition: 'top left' }}
          />
          <h2
            className="font-poppins font-bold text-black m-0"
            style={{ fontSize: 32, lineHeight: '1.3em' }}
          >
            Skilled Occupation List
          </h2>
          <p
            className="font-poppins font-normal m-0"
            style={{ fontSize: 16, lineHeight: '1.6em', color: 'rgba(0,0,0,0.7)' }}
          >
            The SOL is the definitive list of Australian professions eligible for skilled migration.
            Your occupation must be on the relevant list to qualify.
          </p>
          <div className="flex gap-[10px]">
            <span
              className="font-poppins font-semibold text-white rounded-full px-[14px] py-[6px]"
              style={{ fontSize: 13, background: '#00352B' }}
            >
              MLTSSL (Medium Term)
            </span>
            <span
              className="font-poppins font-semibold text-white rounded-full px-[14px] py-[6px]"
              style={{ fontSize: 13, background: '#FF3300' }}
            >
              STSOL (Short Term)
            </span>
          </div>
          <button
            type="button"
            className="font-poppins font-semibold text-white rounded-[10px] border-0 cursor-pointer w-full"
            style={{ background: '#00352B', fontSize: 16, padding: '14px 24px', marginTop: 8 }}
          >
            Download Full PDF Guide
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col gap-[20px] flex-1" style={{ minWidth: 0 }}>
          {/* Search bar */}
          <div className="relative">
            <svg className="absolute left-[16px] top-1/2 -translate-y-1/2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by occupation or code (e.g. 'Nurse', '261313')..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full font-poppins rounded-[10px] border outline-none transition-all"
              style={{
                fontSize: 15,
                padding: '14px 16px 14px 46px',
                borderColor: '#e0e0e0',
                background: '#FAFAFA',
              }}
            />
          </div>

          {/* Filter tabs */}
          <div className="flex gap-[10px] flex-wrap">
            {SOL_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className="font-poppins rounded-full border cursor-pointer transition-all"
                style={{
                  fontSize: 14,
                  fontWeight: activeFilter === f ? 600 : 400,
                  padding: '8px 20px',
                  background: activeFilter === f ? '#00352B' : '#FFFFFF',
                  color: activeFilter === f ? '#FFFFFF' : '#00352B',
                  borderColor: activeFilter === f ? '#00352B' : '#d0d0d0',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Occupation cards */}
          <div className="flex flex-col gap-[12px]">
            {filtered.length === 0 && (
              <p className="font-poppins text-center py-[30px]" style={{ fontSize: 15, color: '#999' }}>
                No occupations found. Try a different search or filter.
              </p>
            )}
            {filtered.slice(0, 5).map((o) => (
              <div
                key={o.code}
                className="flex items-center justify-between rounded-[10px] border transition-all"
                style={{
                  padding: '16px 20px',
                  borderColor: '#e8e8e8',
                  background: '#FFFFFF',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00352B'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,53,43,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-[10px]">
                    <span className="font-poppins" style={{ fontSize: 13, color: '#888', fontWeight: 400 }}>{o.code}</span>
                    <span className="font-poppins font-semibold" style={{ fontSize: 16, color: '#000' }}>{o.title}</span>
                  </div>
                  <span className="font-poppins" style={{ fontSize: 13, color: '#888' }}>Assessing Authority: {o.authority}</span>
                </div>
                <span
                  className="font-poppins font-semibold rounded-[6px] px-[12px] py-[4px] flex-shrink-0"
                  style={{
                    fontSize: 13,
                    background: o.list === 'MLTSSL' ? '#00352B' : '#FF3300',
                    color: '#FFFFFF',
                  }}
                >
                  {o.list}
                </span>
              </div>
            ))}
          </div>

          <p
            className="font-poppins text-center m-0"
            style={{ fontSize: 14, color: '#888', fontStyle: 'italic', marginTop: 4 }}
          >
            Showing curated list of popular occupations. Download PDF for full list.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── PR Points Calculator ─────────────────────────────────────────────────── */

function PRPointsCalculator() {
  const [age, setAge] = useState(1);
  const [english, setEnglish] = useState(1);
  const [education, setEducation] = useState(1);
  const [experience, setExperience] = useState(2);
  const [calculated, setCalculated] = useState(false);

  const score = AGE_OPTIONS[age].pts + ENGLISH_OPTIONS[english].pts + EDUCATION_OPTIONS[education].pts + EXPERIENCE_OPTIONS[experience].pts;
  const meetsThreshold = score >= 65;

  const handleCalculate = () => setCalculated(true);

  const selectStyle = {
    width: '100%',
    padding: '12px 14px',
    fontSize: 15,
    fontFamily: 'Poppins, sans-serif',
    border: '1px solid #d0d0d0',
    borderRadius: 8,
    background: '#FFFFFF',
    color: '#333',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    paddingRight: 40,
  };

  const labelStyle = {
    fontSize: 15,
    fontWeight: 600,
    fontFamily: 'Poppins, sans-serif',
    color: '#00352B',
    marginBottom: 8,
    display: 'block',
  };

  return (
    <section style={{ background: '#00291F', padding: '80px 100px' }} className="w-full">
      {/* heading */}
      <h2
        className="font-poppins font-bold text-white text-center m-0"
        style={{ fontSize: 36, lineHeight: '1.4em', marginBottom: 10 }}
      >
        Calculate Your PR Points
      </h2>
      <p
        className="font-poppins font-normal text-center m-0"
        style={{ fontSize: 16, lineHeight: '1.6em', color: 'rgba(255,255,255,0.6)', maxWidth: 680, margin: '0 auto 40px' }}
      >
        Check your eligibility for Australian Permanent Residency (Subclass 189/190/491).
        Score at least 65 points to be eligible to apply.
      </p>

      {/* Calculator body */}
      <div className="flex gap-[40px] items-start" style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Form card */}
        <div
          className="flex-1 rounded-[16px]"
          style={{ background: '#FFFFFF', padding: '36px 32px' }}
        >
          <div className="grid grid-cols-2 gap-x-[24px] gap-y-[24px]">
            <div>
              <label style={labelStyle}>Age Group</label>
              <select value={age} onChange={(e) => { setAge(Number(e.target.value)); setCalculated(false); }} style={selectStyle}>
                {AGE_OPTIONS.map((o, i) => <option key={i} value={i}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>English Proficiency</label>
              <select value={english} onChange={(e) => { setEnglish(Number(e.target.value)); setCalculated(false); }} style={selectStyle}>
                {ENGLISH_OPTIONS.map((o, i) => <option key={i} value={i}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Education</label>
              <select value={education} onChange={(e) => { setEducation(Number(e.target.value)); setCalculated(false); }} style={selectStyle}>
                {EDUCATION_OPTIONS.map((o, i) => <option key={i} value={i}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Experience (Overseas)</label>
              <select value={experience} onChange={(e) => { setExperience(Number(e.target.value)); setCalculated(false); }} style={selectStyle}>
                {EXPERIENCE_OPTIONS.map((o, i) => <option key={i} value={i}>{o.label}</option>)}
              </select>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCalculate}
            className="w-full font-poppins font-semibold text-white border-0 cursor-pointer rounded-[10px] transition-opacity hover:opacity-90"
            style={{ background: '#00352B', fontSize: 16, padding: '14px', marginTop: 28 }}
          >
            Calculate Score
          </button>
        </div>

        {/* Score display */}
        <div
          className="flex flex-col items-center justify-center rounded-[16px]"
          style={{ width: 320, flexShrink: 0, padding: '40px 30px', background: 'rgba(0,53,43,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p
            className="font-poppins font-bold text-white m-0"
            style={{ fontSize: 22, marginBottom: 16 }}
          >
            Your Estimated Score
          </p>
          <p
            className="font-poppins font-bold m-0 transition-all"
            style={{
              fontSize: 80,
              lineHeight: '1em',
              color: calculated ? (meetsThreshold ? '#4CAF50' : '#FF3300') : 'rgba(255,255,255,0.25)',
              marginBottom: 16,
            }}
          >
            {calculated ? score : '—'}
          </p>
          <p
            className="font-poppins font-normal text-center m-0"
            style={{ fontSize: 14, lineHeight: '1.5em', color: 'rgba(255,255,255,0.6)', marginBottom: 24, maxWidth: 240 }}
          >
            {calculated
              ? meetsThreshold
                ? 'You meet the minimum 65 points for Expression of Interest (EOI).'
                : 'Minimum 65 points required for Expression of Interest (EOI).'
              : 'Select your details and click Calculate Score.'}
          </p>
          <button
            type="button"
            className="font-poppins font-semibold text-white border-0 cursor-pointer rounded-[8px] transition-opacity hover:opacity-90"
            style={{ background: '#FF3300', fontSize: 15, padding: '12px 28px' }}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT – Section order matches Figma (239:1516) exactly
   ══════════════════════════════════════════════════════════════════════════════ */

function JobSeekersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="flex flex-col items-center w-full bg-white">
      <Header />

      <div className="flex flex-col w-full" style={{ maxWidth: 1440, margin: '0 auto' }}>

        {/* ═══ 1. HERO ═══════════════════════════════════════════════════════ */}
        <section
          className="relative flex flex-col justify-center gap-[33px] px-[100px] py-[80px] w-full"
          style={{
            minHeight: 800,
            background: `linear-gradient(rgba(0,53,43,0.57),rgba(0,53,43,0.57)),
                         url('${HERO_BG}') center/cover no-repeat`,
          }}
        >
          <div className="flex flex-col" style={{ width: 840 }}>
            <h1
              className="font-poppins font-bold text-white m-0"
              style={{ fontSize: 80, lineHeight: '1.5em', letterSpacing: '-0.001875em' }}
            >
              For Job Seekers
            </h1>
            <p
              className="font-poppins font-bold m-0"
              style={{ fontSize: 30, lineHeight: '1.5em', letterSpacing: '-0.005em', color: '#FF3300' }}
            >
              Pay professional fees ONLY after getting an Offer Letter.
            </p>
          </div>

          <p
            className="font-poppins font-normal text-white m-0"
            style={{ fontSize: 16, lineHeight: '1.5em', letterSpacing: '-0.009375em', width: 704 }}
          >
            Secure a sponsored job in Australia with Esante.
            We specialize in 482, 186, and PR visa pathways for skilled professionals.
            <br /><br />
            Australia continues to face a critical shortage of skilled professionals across
            healthcare, trades, hospitality, construction, mining, engineering and
            professional services.
            <br />
            At Esante, we specialise in connecting skilled job seekers from around the world
            with verified Australian employers — through legitimate job offers,
            employer-sponsored visas and permanent residency pathways.
            From your first interview to settling in Australia, we manage the entire
            recruitment and migration journey — ethically, transparently and professionally.
          </p>

          <button
            className="font-poppins font-normal text-white rounded-[12px] border-0 cursor-pointer"
            style={{
              position: 'absolute', left: 100, bottom: 80,
              fontSize: 18, lineHeight: '1.5em', letterSpacing: '-0.008333em',
              background: '#FF3300', border: '1px solid #FF3300',
              padding: '15px 25px',
            }}
          >
            Explore Job Opportunities
          </button>
        </section>

        {/* ═══ 2. STATS BAR ══════════════════════════════════════════════════ */}
        <section className="flex flex-row items-stretch gap-[10px] px-[100px] py-[40px] w-full">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center gap-[10px] p-[10px] flex-1">
              <p className="font-poppins font-bold m-0" style={{ fontSize: 40, lineHeight: '1.5em', letterSpacing: '-0.00375em', color: '#00352B' }}>
                {s.value}
              </p>
              <p className="font-poppins font-normal m-0" style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '-0.0075em', color: '#00352B' }}>
                {s.label}
              </p>
            </div>
          ))}
        </section>

        {/* ═══ 3. TOP IN-DEMAND JOBS ═════════════════════════════════════════ */}
        <section
          className="flex flex-col items-center gap-[25px] px-[100px] py-[80px] w-full"
          style={{ background: '#FFFBE9' }}
        >
          <div className="flex flex-col items-center w-full">
            <h2 className="font-poppins font-bold m-0 text-center" style={{ fontSize: 74, lineHeight: '1.5em', letterSpacing: '-0.002027em', color: '#00352B' }}>
              Top In-Demand Jobs
            </h2>
            <p className="font-poppins font-normal m-0 text-center" style={{ fontSize: 16, lineHeight: '1.5em', letterSpacing: '-0.009375em', width: 724, color: '#00352B' }}>
              Legal pathways to employment abroad, including skilled migration, corporate,
              and talent programs. Legal pathways to employment abroad, including
            </p>
          </div>
          <div className="flex flex-row items-stretch gap-[30px] py-[10px] w-full">
            {JOB_CARDS_ROW1.map((c) => <JobCard key={c.title} {...c} />)}
          </div>
          <div className="flex flex-row items-stretch gap-[30px] py-[10px] w-full">
            {JOB_CARDS_ROW2.map((c) => <JobCard key={c.title} {...c} />)}
            <SeeFullListCard />
          </div>
        </section>

        {/* ═══ 4. SKILLED VISA & PR PATHWAYS — text LEFT, image RIGHT ════════ */}
        <section className="flex flex-row items-start px-[100px] py-[80px] w-full bg-white" style={{ gap: 40 }}>
          <div className="flex flex-col" style={{ flex: '1 1 0', minWidth: 0 }}>
            <h2
              className="font-poppins font-bold italic m-0"
              style={{ fontSize: 28, lineHeight: '1.4em', color: '#FF3300' }}
            >
              Skilled Visa &amp; PR Pathways
            </h2>
            <h3
              className="font-poppins font-bold text-black m-0"
              style={{ fontSize: 28, lineHeight: '1.4em', marginTop: 2, marginBottom: 14 }}
            >
              We Work With
            </h3>
            <p className="font-poppins font-normal text-black m-0" style={{ fontSize: 16, lineHeight: '1.6em' }}>
              We assist job seekers across all major Australian skilled
              migration pathways, including:
            </p>
            <ul className="m-0 pl-[20px] mt-[4px]" style={{ listStyleType: 'disc' }}>
              {VISA_POINTS.map((pt) => (
                <li key={pt} className="font-poppins font-normal text-black" style={{ fontSize: 16, lineHeight: '1.7em' }}>
                  {pt}
                </li>
              ))}
            </ul>
            <p className="font-poppins font-normal text-black m-0" style={{ fontSize: 16, lineHeight: '1.6em', marginTop: 14 }}>
              Our team evaluates your skills, experience, occupation
              demand and employer sponsorship potential before
              recommending the most suitable visa strategy.
            </p>
          </div>
          <div className="flex-shrink-0 relative rounded-[31px] overflow-hidden" style={{ width: 460, height: 420 }}>
            <div className="absolute inset-0" style={{ backgroundImage: `url('${RECT_19}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          </div>
        </section>

        {/* ═══ 5. END-TO-END RECRUITMENT — image LEFT, text RIGHT ═══════════ */}
        <section className="flex flex-row items-start px-[100px] py-[80px] w-full bg-white" style={{ gap: 40 }}>
          <div
            className="flex-shrink-0 rounded-[31px]"
            style={{ width: 460, height: 420, backgroundImage: `url('${IMG_59}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
          />
          <div className="flex flex-col" style={{ flex: '1 1 0', minWidth: 0 }}>
            <h2
              className="font-poppins font-bold text-black m-0"
              style={{ fontSize: 28, lineHeight: '1.4em' }}
            >
              End-to-End Recruitment Support
            </h2>
            <h3
              className="font-poppins font-bold italic m-0"
              style={{ fontSize: 28, lineHeight: '1.4em', color: '#FF3300', marginTop: 2, marginBottom: 14 }}
            >
              (Beyond Just a Job)
            </h3>
            <p className="font-poppins font-normal text-black m-0" style={{ fontSize: 16, lineHeight: '1.6em' }}>
              Esante offers complete migration-to-settlement support, including:
            </p>
            <ul className="m-0 pl-[20px] mt-[4px]" style={{ listStyleType: 'disc' }}>
              {E2E_POINTS.map((pt) => (
                <li key={pt} className="font-poppins font-normal text-black" style={{ fontSize: 16, lineHeight: '1.7em' }}>
                  {pt}
                </li>
              ))}
            </ul>
            <p className="font-poppins font-bold text-black m-0" style={{ fontSize: 16, lineHeight: '1.6em', marginTop: 14 }}>
              We don&apos;t just help you get a job — we help you build a life in{' '}
              <span className="italic" style={{ color: '#FF3300' }}>Australia.</span>
            </p>
          </div>
        </section>

        {/* ═══ 6. OUR PROFESSIONAL FEES — text LEFT, image RIGHT ═══════════ */}
        <section className="flex flex-row items-start px-[100px] py-[80px] w-full bg-white" style={{ gap: 40 }}>
          <div className="flex flex-col" style={{ flex: '1 1 0', minWidth: 0 }}>
            <h2
              className="font-poppins font-bold text-black m-0"
              style={{ fontSize: 28, lineHeight: '1.4em' }}
            >
              Our Professional Fees
            </h2>
            <h3
              className="font-poppins font-bold italic m-0"
              style={{ fontSize: 28, lineHeight: '1.4em', color: '#FF3300', marginTop: 2, marginBottom: 14 }}
            >
              Transparent &amp; Risk-Free
            </h3>
            <p className="font-poppins font-normal text-black m-0" style={{ fontSize: 16, lineHeight: '1.6em' }}>
              We believe in performance-based recruitment, not false promises.
            </p>
            {FEES_POINTS.map((pt) => (
              <p key={pt} className="font-poppins font-normal text-black m-0" style={{ fontSize: 16, lineHeight: '1.7em' }}>
                {pt}
              </p>
            ))}
            <p className="font-poppins font-normal text-black m-0" style={{ fontSize: 16, lineHeight: '1.6em', marginTop: 14 }}>
              This ensures our success is directly linked to yours.
            </p>
          </div>
          <div
            className="flex-shrink-0 rounded-[31px]"
            style={{ width: 460, height: 420, backgroundImage: `url('${IMG_60}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
          />
        </section>

        {/* ═══ 7. STOP SEARCHING — START WORKING ═════════════════════════════ */}
        <section
          className="flex flex-col items-center justify-center gap-[20px] px-[100px] py-[80px] w-full text-center bg-white"
        >
          <p className="font-poppins font-bold m-0" style={{ fontSize: 44, lineHeight: '1.4em' }}>
            <span style={{ color: '#00352B' }}>Stop Searching. </span>
            <span style={{ color: '#FF3300' }}>Start Working.</span>
          </p>
          <p className="font-poppins font-normal m-0" style={{ fontSize: 23, lineHeight: '1.5em', letterSpacing: '-0.006522em', color: '#333' }}>
            You have the skill. We have the sponsor. Let&apos;s make it happen.
          </p>
          <button
            className="font-poppins font-normal text-white rounded-[12px] border-0 cursor-pointer"
            style={{ fontSize: 18, lineHeight: '1.5em', letterSpacing: '-0.008333em', background: '#FF3300', padding: '15px 25px', marginTop: 8 }}
          >
            Explore Job Opportunities
          </button>
        </section>

        {/* ═══ 8. SKILLED OCCUPATION LIST (interactive) ══════════════════════ */}
        <SkilledOccupationList />

        {/* ═══ 9. PR POINTS CALCULATOR (interactive) ═════════════════════════ */}
        <PRPointsCalculator />

        {/* ═══ 10. FAQ — skilled jobs & employer sponsorship ═══════════════ */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
          aria-labelledby="job-seekers-faq-heading"
        >
          <h2
            id="job-seekers-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Skilled Jobs in Australia &amp; Employer Sponsorship
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {JOB_SEEKERS_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`job-seekers-faq-answer-${index}`}
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
                          id={`job-seekers-faq-answer-${index}`}
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
              Still have questions? Get personalised guidance from an Esante recruitment expert.
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
                Talk to an Esante Recruitment Specialist
              </span>
            </button>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}

export default JobSeekersPage;
