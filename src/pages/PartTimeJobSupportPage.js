import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';

const HERO_BG = '/images/ptj-hero-bg.png';
const IMG_JOB_CAFE = '/images/ptj-job-cafe.png';
const IMG_JOB_RETAIL = '/images/ptj-job-retail.png';
const IMG_JOB_HOSPITALITY = '/images/ptj-job-hospitality.png';
const IMG_JOB_PETROL = '/images/ptj-job-petrol.png';
const IMG_STORY_1 = '/images/ptj-story1.png';
const IMG_STORY_2 = '/images/ptj-story2.png';

// const JOB_PHOTO_SHADOW =
//   '14px 18px 32px rgba(0, 0, 0, 0.48), 8px 10px 18px rgba(0, 0, 0, 0.32)';
const STORY_PHOTO_SHADOW =
  '12px 14px 26px rgba(0, 0, 0, 0.45), 6px 8px 14px rgba(0, 0, 0, 0.3)';

const JOB_SLIDES = [
  {
    category: 'Cafés & Coffee Shops',
    titleLine1: 'Working in',
    titleLine2: 'Cafés',
    rate: 'AU$28–40/hour',
    details: ['Barista, cashier & service roles', 'Flexible shifts around classes', 'Tips + weekend penalty rates'],
    img: IMG_JOB_CAFE,
  },
  {
    category: 'Retail & Supermarkets',
    titleLine1: 'Retail &',
    titleLine2: 'Grocery',
    rate: 'AU$25–38/hour',
    details: ['Checkout, stocking & customer service', 'Stable hours & employee discounts', 'Weekend penalty rates'],
    img: IMG_JOB_RETAIL,
  },
  {
    category: 'Hospitality & Restaurants',
    titleLine1: 'Hospitality',
    titleLine2: 'Roles',
    rate: 'AU$28–42/hour',
    details: ['Waiter, kitchen hand & front-of-house', 'Evening & weekend shifts', 'Tips + award wages'],
    img: IMG_JOB_HOSPITALITY,
  },
  {
    category: 'Petrol & Service Stations',
    titleLine1: 'Service Station',
    titleLine2: 'Work',
    rate: 'AU$26–36/hour',
    details: ['Attendant, console & retail', '24/7 shift flexibility', 'Often close to campus'],
    img: IMG_JOB_PETROL,
  },
];

const PART_TIME_JOB_FAQ_ITEMS = [
  {
    question: 'Can international students work part-time in Australia?',
    answer:
      'Yes, international students in Australia can work part-time while studying. As per current regulations, students are typically allowed to work up to 48 hours per fortnight during study periods and unlimited hours during breaks.',
  },
  {
    question: 'How much can students earn from part-time jobs in Australia?',
    answer:
      'Students can earn between AUD 20 to AUD 35+ per hour depending on the job role, location, and experience. Many students earn around AUD 2,500 to AUD 4,000 per month.',
  },
  {
    question: 'What are the best part-time jobs for students in Australia?',
    answer:
      'Common part-time jobs include roles in cafés, restaurants, petrol stations, supermarkets, retail stores, and customer service positions.',
  },
  {
    question: 'Does Esante help students find part-time jobs in Australia?',
    answer:
      'Yes, Esante provides part-time job support by connecting students with verified employers and guiding them through the hiring process before and after arrival.',
  },
  {
    question: 'Is it easy to find part-time jobs in Australia for international students?',
    answer:
      'It can be competitive without guidance. With the right support, preparation, and local connections, students can find jobs much faster.',
  },
  {
    question: 'Do I need experience to get a part-time job in Australia?',
    answer:
      'Not always. Many entry-level jobs do not require prior experience. Esante helps students prepare with CV building, interview training, and communication skills.',
  },
  {
    question: 'Can I get a job before arriving in Australia?',
    answer:
      'While most hiring happens after arrival, Esante helps students prepare in advance and connect with opportunities quickly once they land.',
  },
  {
    question: 'What is the minimum wage in Australia for students?',
    answer:
      'The minimum wage in Australia is regulated and regularly updated, but most students earn above minimum wage depending on the role and industry.',
  },
  {
    question: 'How does Esante help students get jobs faster?',
    answer:
      'Esante works with trusted employer networks, provides job-ready training, and guides students toward roles with better pay and higher hiring chances.',
  },
  {
    question: 'What documents are required to work in Australia as a student?',
    answer:
      'Students typically need a valid student visa, Tax File Number (TFN), and bank account to start working legally in Australia.',
  },
  {
    question: 'Can part-time jobs cover living expenses in Australia?',
    answer:
      'Yes, many students are able to cover rent, groceries, and daily expenses through part-time work, especially with proper job guidance.',
  },
  {
    question: 'Which cities in Australia offer more job opportunities for students?',
    answer:
      'Cities like Brisbane, Melbourne, and Sydney offer strong job opportunities, but regional areas can also provide good work options with less competition.',
  },
  {
    question: 'Do I need good English to get a part-time job in Australia?',
    answer:
      'Yes, basic to good English communication is important. Esante provides IELTS and communication training to help students improve their chances.',
  },
  {
    question: 'Will Esante help me with interview preparation?',
    answer:
      'Yes, Esante provides Australian-style CV guidance, interview preparation, and workplace communication training to help students get selected.',
  },
  {
    question: 'Can I switch jobs while studying in Australia?',
    answer:
      'Yes, students can change jobs anytime as long as they follow visa work conditions.',
  },
  {
    question: 'How early should I start preparing for a part-time job in Australia?',
    answer:
      'Ideally, students should start preparing 2–4 weeks before arrival to increase their chances of getting hired quickly.',
  },
  {
    question: 'Why choose Esante for part-time job support in Australia?',
    answer:
      'Esante offers end-to-end support including employer connections, job-ready training, and on-ground guidance to help students earn faster and settle smoothly.',
  },
];

function PartTimeJobSupportPage() {
  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const goToPrevSlide = () => setCurrentSlide((p) => (p === 0 ? JOB_SLIDES.length - 1 : p - 1));
  const goToNextSlide = () => setCurrentSlide((p) => (p === JOB_SLIDES.length - 1 ? 0 : p + 1));

  return (
    <div className="flex flex-col w-full bg-white items-start">
      <Header />

      <div className="flex flex-col w-full max-w-[1440px] mx-auto px-6 lg:px-[100px]">

        {/* ── Hero text block — centered, Figma alignment ── */}
        <div className="flex flex-col items-center self-stretch bg-white pt-[120px] sm:pt-[160px] md:pt-[186px] pb-10 md:pb-[67px] max-w-[900px] mx-auto w-full">
          {/* Page label — Poppins 500, underlined forest green */}
          <span className="font-poppins font-medium text-[clamp(18px,2.6vw,28px)] leading-[1.4] tracking-[-0.02em] text-[#00352B] mb-4 text-center underline decoration-[#00352B] decoration-2 underline-offset-[6px]">
            Part-Time Job Support in Australia
          </span>
          <h1 className="font-poppins font-semibold italic text-[clamp(32px,6vw,48px)] leading-[1.2] tracking-[-0.02em] text-center text-[#FF3300] mb-2 px-2">
            Earn While You Study
          </h1>
          <p className="font-poppins font-semibold text-[clamp(32px,6vw,48px)] leading-[1.2] tracking-[-0.02em] text-center text-black mb-8 px-2">
            Live Stress-Free.
          </p>
          <button
            type="button"
            onClick={openConsultation}
            className="inline-flex py-2 px-4 sm:py-[4px] sm:px-3 justify-center items-center rounded-2xl border-0 cursor-pointer min-h-[44px]"
            style={{ background: '#FF3300' }}
          >
            <span className="font-poppins text-center font-medium text-[#FFFBE9] text-sm sm:text-[14px] font-medium leading-5">
              Get Free Guidance from Esante
            </span>
          </button>
        </div>

        {/* ── Hero carousel — responsive width, Figma gradient + green card + photo ── */}
        <div className="w-full flex justify-center mb-16 md:mb-[102px] -mx-6 lg:mx-0 px-0 lg:px-0">
          <section className="relative w-full max-w-[1383px] min-h-[520px] sm:min-h-[600px] md:h-[672px] md:min-h-0 rounded-[32px] md:rounded-[49px] overflow-hidden">
            {/* Red background */}
            <div className="absolute inset-0 bg-[#FF3300]" aria-hidden />
            {/* Background image overlay */}
            <div
              className="absolute inset-0"
              style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: '100% 100%', backgroundPosition: 'center', opacity: 0.55 }}
              aria-hidden
            />

            {/* Left arrow */}
            <button
              type="button"
              onClick={goToPrevSlide}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 border border-white/50 cursor-pointer transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Right arrow */}
            <button
              type="button"
              onClick={goToNextSlide}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 border border-white/50 cursor-pointer transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Sliding carousel — dark green card; slide width = 100% of viewport for smooth responsive transform */}
            <div className="absolute left-1/2 top-1/2 z-[5] w-[812px] max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 h-[557px] max-h-[calc(100%-120px)] sm:max-h-[calc(100%-96px)] overflow-hidden" style={{ borderRadius: 41, background: '#00352B' }}>
              <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {JOB_SLIDES.map((slide, index) => (
                  <div key={index} className="relative h-full w-full min-w-full flex-shrink-0">
                    <div
                      className="h-full pt-6 pb-6 pl-25 pr-5 sm:pt-7 sm:pb-7 sm:pl-12 sm:pr-[min(28px,4vw)] box-border flex flex-col justify-center text-left"
                      style={{ borderRadius: 41, background: '#00352B' }}
                    >
                      <div className="relative z-[2] w-full max-w-[420px] pr-0 md:pr-2">
                        <span className="font-poppins font-normal text-[clamp(16px,2.2vw,22px)] leading-[1.5] tracking-[-0.00682em] text-[#FF3300] mb-0 block">
                          {slide.category}
                        </span>
                        <h2 className="font-poppins font-bold text-[clamp(28px,5vw,54px)] leading-[1.15] tracking-[-0.00278em] text-white mb-2 sm:mb-[10px]">
                          <span className="block">{slide.titleLine1}</span>
                          <span className="block">{slide.titleLine2}</span>
                        </h2>
                        <div className="inline-flex items-center justify-center min-h-[48px] px-3 sm:px-[14px] rounded-[15px] mb-3 border border-white/30">
                          <span className="font-poppins font-normal text-[clamp(20px,3.2vw,32px)] leading-[1.5] text-white">
                            {slide.rate}
                          </span>
                        </div>
                        <ul className="list-disc list-inside font-poppins font-normal text-[14px] sm:text-[15px] leading-[1.867em] tracking-[-0.01em] text-white max-w-none mb-4 [&_li]:marker:text-white md:[&_li]:whitespace-nowrap">
                          {slide.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={openConsultation}
                          className="inline-flex py-2 px-3 sm:py-1 sm:px-3 justify-center items-center rounded-2xl border-0 cursor-pointer hover:opacity-90 transition-opacity min-h-[44px] sm:min-h-0"
                          style={{ background: '#FF3300' }}
                        >
                          <span className="font-poppins font-medium text-[15px] sm:text-[16px] leading-[1.25em] text-white text-center">
                            Get Part-Time Job Guidance from Esante
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job photo — Map over images to preload them and use CSS opacity transitions */}
            {JOB_SLIDES.map((slide, idx) => (
              <img
                key={idx}
                src={slide.img}
                alt={`${slide.titleLine1} ${slide.titleLine2}`}
                className={`absolute z-20 pointer-events-none hidden sm:block transition-opacity duration-500 ${
                  currentSlide === idx ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  right: 'clamp(16px, 10vw, 198px)',
                  top: 'clamp(56px, 12vh, 92px)',
                  width: 'clamp(200px, 26vw, 400px)',
                  height: 'clamp(260px, 31vw, 500px)',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: 41,
                  background: 'lightgray 50% / cover no-repeat',
                  boxShadow: '10px 10px 5.7px 0px #000',
                }}
              />
            ))}

          </section>
        </div>

        {/* ── Description — centered body copy (Figma) ── */}
        <section className="flex flex-col items-center w-full max-w-[1300px] mx-auto mb-[76px] px-2">
          <p
            className="font-poppins text-center text-[#FF3300] mb-12 w-full max-w-full"
            style={{
              fontSize: 30,
              fontStyle: 'italic',
              fontWeight: 600,
              lineHeight: '150.37%',
              letterSpacing: '-0.15px',
            }}
          >
            <span className="hidden xl:inline">From arrival to your first paycheck—we connect you with trusted<br />employers so you can earn $3,000+ AUD per month.</span>
            <span className="inline xl:hidden">From arrival to your first paycheck—we connect you with trusted employers so you can earn $3,000+ AUD per month.</span>
          </p>
          
          <div
            className="font-poppins text-center text-black w-full max-w-full"
            style={{
              fontSize: 23,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '36px',
            }}
          >
            <div className="hidden xl:block">
              <p className="m-0">
                For international students, finding a part-time job in Australia is not optional — it&apos;s essential. Rent,<br />
                groceries, transport, and daily expenses depend on it. At Esanté, we understand this reality because<br />
                we are on the ground in Australia.
              </p>
              <p className="m-0 mt-[10px]">
                That&apos;s why part-time job support is a core part of our end-to-end student services, not an add-on.
              </p>
            </div>
            <div className="block xl:hidden mx-auto max-w-[900px]">
              <p className="m-0 mb-4">
                For international students, finding a part-time job in Australia is not optional — it&apos;s essential. Rent, groceries, transport, and daily expenses depend on it. At Esanté, we understand this reality because we are on the ground in Australia.
              </p>
              <p className="m-0">
                That&apos;s why part-time job support is a core part of our end-to-end student services, not an add-on.
              </p>
            </div>
          </div>
        </section>

        {/* ── How Esante Helps — two-column Figma box, symmetric padding ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center w-full max-w-[1213px] mx-auto mb-20 md:mb-[122px] px-8 py-10 md:px-[60px] md:py-[50px] rounded-[45px] border-2 border-[#FF3300] bg-white gap-10 lg:gap-[90px]">
          <div className="flex flex-col items-start w-full lg:w-[500px] shrink-0 text-left">
            <h2 className="font-poppins text-[#00352B] m-0 mb-1" style={{ fontSize: 'clamp(28px, 4vw, 45px)', fontStyle: 'normal', fontWeight: 400, lineHeight: '120%', letterSpacing: '-0.15px' }}>
              How Esante Helps You
            </h2>
            <p className="font-poppins text-[#FF3300] m-0 mb-4" style={{ fontSize: 'clamp(28px, 4vw, 45px)', fontStyle: 'italic', fontWeight: 500, lineHeight: '120%', letterSpacing: '-0.15px' }}>
              Get Part-Time Work<br />Faster
            </p>
            <p className="font-poppins text-[#000] m-0" style={{ fontSize: 'clamp(16px, 2vw, 21px)', fontStyle: 'italic', fontWeight: 500, lineHeight: '38px', letterSpacing: '-0.15px' }}>
              Esante works closely with multiple verified part-<br className="hidden lg:block" />time job partners across Australia, including:
            </p>
          </div>
          <ul className="flex flex-col items-start list-none pl-0 m-0 pt-[27px] lg:-ml-[30px] w-full lg:w-[480px] gap-[8px]">
            {['Cafés & restaurants', 'Petrol stations', 'Grocery stores & supermarkets', 'Shopping malls & retail outlets', 'Hospitality & customer service roles'].map((item) => (
              <li key={item} className="flex flex-row items-start gap-[12px] font-poppins font-normal m-0" style={{ fontSize: 'clamp(18px,2.2vw,22px)', leading: '1.35', color: '#000' }}>
                <span className="shrink-0 leading-[1.2]" aria-hidden="true">✅</span>
                <span className="leading-[1.2]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Student story — image left, text right; stacked on mobile ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between w-full max-w-[1214px] mx-auto mb-24 md:mb-[136px] gap-10 lg:gap-8">

          <div className="relative shrink-0 mx-auto lg:mx-0" style={{ width: 320, height: 360 }}>
            <img
              src={IMG_STORY_1}
              alt="Diya and Khushi"
              style={{
                position: 'absolute',
                left: 10,
                top: 0,
                width: 240,
                height: 300,
                objectFit: 'cover',
                borderRadius: 16,
                transform: 'rotate(-8deg)',
                transformOrigin: 'top left',
                boxShadow: STORY_PHOTO_SHADOW,
              }}
            />
            <img
              src={IMG_STORY_2}
              alt="Student story"
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 185,
                height: 230,
                objectFit: 'cover',
                borderRadius: 16,
                zIndex: 10,
                border: '7px solid #FFFFFF',
                transform: 'rotate(6deg)',
                transformOrigin: 'bottom right',
                boxShadow: STORY_PHOTO_SHADOW,
              }}
            />
          </div>

          <div className="flex flex-col gap-6 text-left w-full lg:max-w-[749px] flex-1 min-w-0">
            <div>
              <h3 className="font-poppins font-semibold text-[23px] leading-[1.652em] tracking-[-0.00652em] text-[#FF3300] mb-1">
                Meet Diya &amp; Khushi:
              </h3>
              <p className="font-poppins font-normal text-[23px] leading-[1.652em] tracking-[-0.00652em] text-black">
                When Diya and Khushi landed in Brisbane, they were worried about managing high living costs. Through Esante&apos;s local job network, they were interviewed and hired within their first week.{' '}
                <span className="font-semibold text-[#FF3300]">The Result: Both are now earning between $3,000 – $4,000 AUD per month.</span>
                {' '}They pay their own rent, cover all groceries, and still save money—living financially independent from day one.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-[23px] leading-[1.652em] tracking-[-0.00652em] text-[#FF3300] mb-1">
                The &quot;Brisbane HQ&quot; Advantage:
              </h3>
              <p className="font-poppins font-normal text-[23px] leading-[1.652em] tracking-[-0.00652em] text-black">
                Because our headquarters are on the ground in Australia, we understand the local labour market better than any offshore agent. We guide you toward roles with the{' '}
                <span className="font-semibold text-[#FF3300]">best hourly rates</span>
                , ensuring you aren&apos;t stuck with minimum wage.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ — part-time jobs for students in Australia */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-0 gap-[24px]"
          aria-labelledby="part-time-job-faq-heading"
        >
          <h2
            id="part-time-job-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Part-Time Jobs for Students in Australia
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {PART_TIME_JOB_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`part-time-job-faq-answer-${index}`}
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
                          id={`part-time-job-faq-answer-${index}`}
                          className="text-[16px] font-normal text-[#00352B] leading-[1.5]"
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
                Get Part-Time Job Guidance
              </span>
            </button>
          </div>
        </section>

      </div>

      <EsanteBanner />
      <Footer />
    </div>
  );
}

export default PartTimeJobSupportPage;
