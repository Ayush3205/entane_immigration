import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';

// Hero featured image (Figma fill_REYQ1Z) – use placeholder; replace with Figma asset if available
const imgHeroFeatured =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/8sadqtxv_expires_30_days.png';

// Card assets (Figma design system – arrow + card images)
const imgArrowUpRight = 'https://www.figma.com/api/mcp/asset/f4c02ea5-df2d-47d2-a2ef-b2ea3df966c3';
const imgArrowDown = 'https://www.figma.com/api/mcp/asset/4cdf5a8a-e438-4f4b-a0d2-389a09c12223';

const CASE_STUDY_CARDS = [
  { image: 'https://www.figma.com/api/mcp/asset/fa41ab00-f056-49c8-a521-b82edf4c937a', category: 'Design', title: 'UX review presentations', description: 'How do you create compelling presentations that wow your colleagues and impress your managers?' },
  { image: 'https://www.figma.com/api/mcp/asset/5f309bdf-72f7-4ef7-8241-61d1fe2e4ced', category: 'Design', title: 'UX review presentations', description: 'How do you create compelling presentations that wow your colleagues and impress your managers?' },
  { image: 'https://www.figma.com/api/mcp/asset/f2758485-85c6-43e6-bde4-8b10bc399e58', category: 'Design', title: 'UX review presentations', description: 'How do you create compelling presentations that wow your colleagues and impress your managers?' },
  { image: 'https://www.figma.com/api/mcp/asset/09d50615-bfa8-434b-8b69-f773faed2b53', category: 'Design', title: 'UX review presentations', description: 'How do you create compelling presentations that wow your colleagues and impress your managers?' },
  { image: 'https://www.figma.com/api/mcp/asset/11ed5df5-0d49-4758-8040-af838aecea84', category: 'Design', title: 'UX review presentations', description: 'How do you create compelling presentations that wow your colleagues and impress your managers?' },
  { image: 'https://www.figma.com/api/mcp/asset/4d0c1347-fc24-45b9-95c8-27ca4f441b09', category: 'Design', title: 'UX review presentations', description: 'How do you create compelling presentations that wow your colleagues and impress your managers?' },
];

const CASE_STUDY_INITIAL = 6;
const CASE_STUDY_LOAD_MORE = 6;
const allCaseStudyCards = [...CASE_STUDY_CARDS, ...CASE_STUDY_CARDS];

const CASE_STUDIES_FAQ_ITEMS = [
  {
    question: 'What are student success stories for studying in Australia?',
    answer:
      'Student success stories showcase real journeys of international students who successfully studied, worked, and settled in Australia. These case studies help future students understand practical challenges, outcomes, and real-life results.',
  },
  {
    question: 'How do case studies help in planning to study in Australia?',
    answer:
      'Case studies provide real examples of:\n• University selection strategies\n• Visa approvals\n• Accommodation and job support\n• Post-arrival settlement\n\nThey help students make informed decisions based on actual experiences instead of assumptions.',
  },
  {
    question: 'Are these Australia student success stories real?',
    answer:
      'Yes, Esante case studies are based on real students and professionals who have successfully moved to Australia through proper guidance, compliant processes, and structured planning.',
  },
  {
    question: 'What can I learn from other students’ Australia journey?',
    answer:
      'You can learn:\n• Which courses and universities work best\n• How to avoid visa rejection mistakes\n• How students manage cost of living\n• How they secure part-time jobs\n• How they transition into long-term opportunities',
  },
  {
    question: 'How long does it take to settle in Australia as an international student?',
    answer:
      'Most students start settling within the first 2–4 weeks with proper support, including accommodation, job guidance, and understanding local systems like banking, transport, and university onboarding.',
  },
  {
    question: 'Can I also achieve similar success in Australia?',
    answer:
      'Yes, with the right course selection, proper documentation, and expert guidance, you can achieve similar outcomes. Success depends on your profile, planning, and execution of the process.',
  },
  {
    question: 'Do students really get part-time jobs easily in Australia?',
    answer:
      'Many students secure part-time jobs within the first few weeks if they are guided properly. Having the right CV, communication skills, and local support significantly improves job opportunities.',
  },
  {
    question: 'What are common mistakes students make while planning Australia?',
    answer:
      'Common mistakes include:\n• Choosing the wrong course\n• Weak SOP or GS statement\n• Lack of financial planning\n• No job or accommodation strategy\n• Relying on unverified agents\n\nCase studies help you avoid these mistakes.',
  },
  {
    question: 'How important is SOP and documentation in these success stories?',
    answer:
      'A strong SOP and properly structured documents play a major role in:\n• University admission\n• Visa approval\n• Scholarship opportunities\n\nMost successful cases have well-prepared, compliant documentation.',
  },
  {
    question: 'Do these case studies include post-arrival support experiences?',
    answer:
      'Yes, many success stories highlight how students benefited from:\n• Accommodation support\n• Part-time job assistance\n• Post-arrival settlement guidance\n• Local support networks in Australia',
  },
  {
    question: 'Which cities in Australia are best based on student success stories?',
    answer:
      'Popular cities include:\n• Brisbane (affordable & job-friendly)\n• Melbourne (top universities)\n• Sydney (high exposure & opportunities)\n• Adelaide & Perth (lower cost of living)\n\nThe best city depends on your goals and budget.',
  },
  {
    question: 'Can studying in Australia lead to long-term career opportunities?',
    answer:
      'Yes, many students transition from study to work opportunities through post-study work visas and skilled migration pathways, depending on their course and occupation demand.',
  },
  {
    question: 'How does Esante help students achieve these success outcomes?',
    answer:
      'Esante supports students through:\n• Course and university selection\n• SOP and visa documentation\n• Accommodation and job support\n• Post-arrival settlement guidance\n\nThis end-to-end support helps students achieve real, measurable results.',
  },
  {
    question: 'How can I start my Australia journey like these success stories?',
    answer:
      'You can start by speaking with an expert counsellor, evaluating your profile, and building a clear roadmap for study, visa, and settlement in Australia.',
  },
];

function CaseStudyCard({ card }) {
  return (
    <div
      className="bg-white flex flex-1 flex-col items-start min-w-0 pb-8 pt-6 px-6"
      style={{
        boxShadow: '0px 12px 16px 0px rgba(16,24,40,0.08), 0px 4px 6px 0px rgba(16,24,40,0.03)',
      }}
    >
      <div className="relative w-full shrink-0" style={{ height: '240px' }}>
        <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-start self-stretch gap-3 mt-6">
        <span className="text-[#FF3300] text-sm" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
          {card.category}
        </span>
        <div className="flex flex-col items-start self-stretch gap-3">
          <div className="flex gap-4 items-start self-stretch">
            <span
              className="flex-1 text-[#00352B] text-2xl min-w-0"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: '32px' }}
            >
              {card.title}
            </span>
            <div className="shrink-0 w-6 h-6 flex items-center justify-center pt-1">
              <img src={imgArrowUpRight} alt="" className="w-full h-full" />
            </div>
          </div>
          <span
            className="text-[#667085] text-base self-stretch"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: '24px' }}
          >
            {card.description}
          </span>
        </div>
      </div>
    </div>
  );
}

function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCount, setVisibleCount] = useState(CASE_STUDY_INITIAL);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const tabs = [
    { id: 'All', label: 'All' },
    { id: 'Student', label: 'Student' },
    { id: 'Skilled Workers', label: 'Skilled Workers' },
  ];

  const visibleCards = allCaseStudyCards.slice(0, visibleCount);
  const rows = [];
  for (let i = 0; i < visibleCards.length; i += 3) {
    rows.push(visibleCards.slice(i, i + 3));
  }
  const hasMoreCaseStudies = visibleCount < allCaseStudyCards.length;

  return (
    <div className="case-studies-page">
      <Header />
      <main style={{ paddingTop: '120px' }}>
        <div className="bg-white flex flex-col">

          {/* ── Hero + Tabs + Cards in one flow (no extra gaps between sections) ── */}
          <div
            className="flex flex-col items-center w-full bg-white"
            style={{ paddingTop: '96px' }}
          >
            <div className="flex flex-col items-center w-full px-8" style={{ maxWidth: '1280px', width: '100%' }}>
              {/* Heading and supporting text */}
              <div className="flex flex-col gap-6 items-center w-full" style={{ maxWidth: '1024px' }}>
                <div className="flex flex-col gap-4 items-center w-full">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      backgroundColor: '#FF3300',
                      borderRadius: '16px',
                      padding: '4px 12px',
                    }}
                  >
                    <span
                      className="text-[#FFFBE9]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '20px',
                      }}
                    >
                      Case Studies
                    </span>
                  </div>
                  <h1
                    className="text-[#00352B] text-center w-full"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: '48px',
                      lineHeight: '60px',
                      letterSpacing: '-0.96px',
                    }}
                  >
                    Real Stories, Real Success in Australia
                  </h1>
                </div>
                <p
                  className="text-[#FF3300] text-center w-full"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '30px',
                  }}
                >
                  Discover how students and working professionals successfully migrated to australia, and read their success stories.
                </p>
              </div>

              {/* Featured card */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  height: '450px',
                  borderRadius: '21px',
                  marginTop: '32px',
                }}
              >
                <img
                  src={imgHeroFeatured}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Row: paragraph + Read Full Case Study button (gap from image per Figma) */}
              <div
                className="flex flex-row justify-between items-end gap-2 w-full"
                style={{ padding: '10px 0', marginTop: '32px' }}
              >
                <p
                  className="text-[#667085] flex-1 min-w-0 max-w-[846px]"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                  }}
                >
                  How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?
                </p>
                <button
                  type="button"
                  className="shrink-0 cursor-pointer border-0 rounded-[9px] text-white"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '1.33em',
                    padding: '10px 20px',
                    backgroundColor: '#FF3300',
                  }}
                >
                  Read Full Case Study
                </button>
              </div>

              {/* Tabs: same container, no gap, aligned with content */}
              <div
                className="flex flex-row items-center w-full border-b border-[#D0D5DD] mt-12"
                style={{ borderBottomWidth: '1px' }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className="pb-3 px-4 relative bg-transparent border-0 cursor-pointer"
                  >
                    <span
                      className={activeTab === tab.id ? 'text-[#00352B]' : 'text-[#667085]'}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: '16px',
                      }}
                    >
                      {tab.label}
                    </span>
                    {activeTab === tab.id && (
                      <span
                        className="absolute bottom-0 left-0 right-0 bg-[#FF3300]"
                        style={{ height: '3px' }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards grid + Load more: same 1280px container, no top gap */}
            <div
              className="flex flex-col gap-12 items-start w-full px-8 pb-16"
              style={{ maxWidth: '1280px', width: '100%', marginTop: '0', paddingTop: '32px' }}
            >
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-8 items-start justify-center w-full">
                {row.map((card, idx) => (
                  <CaseStudyCard key={`${rowIdx}-${idx}`} card={card} />
                ))}
              </div>
            ))}
            {hasMoreCaseStudies && (
              <div className="flex items-center justify-center w-full">
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + CASE_STUDY_LOAD_MORE)}
                  className="flex items-center justify-center gap-2 rounded-lg border cursor-pointer"
                  style={{
                    padding: '12px 20px',
                    backgroundColor: '#F9F5FF',
                    border: '1px solid #F9F5FF',
                    boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                  }}
                >
                  <img src={imgArrowDown} alt="" className="w-5 h-5" />
                  <span
                    className="text-[#FF3300]"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '24px',
                    }}
                  >
                    Load more
                  </span>
                </button>
              </div>
            )}
          </div>
          </div>

          {/* FAQ — success stories & case studies */}
          <section
            className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
            aria-labelledby="case-studies-faq-heading"
          >
            <h2
              id="case-studies-faq-heading"
              className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
              style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
            >
              Frequently Asked Questions About Studying in Australia Success Stories &amp; Case Studies
            </h2>

            <div className="w-full max-w-[1064px] flex flex-col">
              {CASE_STUDIES_FAQ_ITEMS.map((item, index) => {
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
                      aria-controls={`case-studies-faq-answer-${index}`}
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
                            id={`case-studies-faq-answer-${index}`}
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
                Still have questions? Get personalised guidance from an Esante expert.
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

          {/* Reusable CTA banner (Figma Group 28 / Frame 94) */}
          <EsanteBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CaseStudiesPage;
