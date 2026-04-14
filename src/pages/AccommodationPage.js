import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';
import ConsultationPopup from '../components/Reusable/ConsultationPopup';

const HERO_BG_IMG = '/images/acc-hero-bg.png';
const MELBOURNE_IMG = '/images/acc-room.png';
const WHY_IMG = '/images/acc-why.png';
const STORY_IMG = '/images/acc-story.png';

/** Figma: Poppins 23px / 32px lh / -0.15px; base #FFF 400; accent #F30 italic 500; emphasis #FFF italic 500 */
const STUDENT_STORY_BODY_BOX = {
  width: 465,
  maxWidth: '100%',
  fontFamily: "'Poppins', sans-serif",
  fontSize: 23,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: '32px',
  letterSpacing: '-0.15px',
  color: '#FFFFFF',
};

const KHUSHI_STORY = {
  headlineCity: 'Khushi in Brisbane',
  img: STORY_IMG,
};

function KhushiStoryBody() {
  return (
    <div style={STUDENT_STORY_BODY_BOX}>
      <p className="m-0 mb-4">
        Through Esante&apos;s partner network,{' '}
        <span className="text-[#FF3300] font-medium italic">Khushi Ajmani</span>
        {' '}
        secured a single private room with an attached washroom in Brisbane for{' '}
        <span className="text-[#FF3300] font-semibold italic">just AUD 190 per week</span>
        {' '}
        — a deal that&apos;s hard to find independently.
      </p>
      <p className="m-0">
        Because her accommodation was{' '}
        <span className="font-medium italic text-white">sorted early</span>
        {' '}
        and at the right price, she was able to focus on her studies and{' '}
        <span className="font-medium italic text-white">part-time work without financial stress.</span>
      </p>
    </div>
  );
}

const ACCOMMODATION_SLIDES = [
  {
    intro: 'Dreaming for',
    city: 'Melbourne',
    price: 'AU$220/week',
    features: [
      'Fully-equipped gym',
      'Social lounges & study zones',
      '24/7 secure access',
      'Minutes from campus & transport',
    ],
  },
  {
    intro: 'Looking for',
    city: 'Sydney',
    price: 'AU$250/week',
    features: [
      'Ocean views & central location',
      'Modern shared kitchens',
      'Bike storage & laundry',
      'Close to major universities',
    ],
  },
  {
    intro: 'Hoping for',
    city: 'Brisbane',
    price: 'AU$190/week',
    features: [
      'Pool & outdoor BBQ area',
      'Quiet study rooms',
      'All bills included',
      'Walking distance to CBD',
    ],
  },
  {
    intro: 'Ready for',
    city: 'Perth',
    price: 'AU$200/week',
    features: [
      'Beach nearby',
      'Air-conditioned rooms',
      'Secure parking',
      'Vibrant student community',
    ],
  },
];

const ACCOMMODATION_FAQ_ITEMS = [
  {
    question: 'How can international students find accommodation in Australia?',
    answer:
      'International students can find accommodation in Australia through student residences, shared apartments, or private rentals. Esante simplifies this process by connecting students with verified accommodation providers and securing better rates through trusted local partnerships.',
  },
  {
    question: 'What is the average cost of student accommodation in Australia?',
    answer:
      'Student accommodation in Australia typically ranges from AUD 180 to AUD 300 per week depending on the city, location, and type of housing. Through Esante’s partner network, students can often access lower-than-market rates.',
  },
  {
    question: 'Is it better to book accommodation before arriving in Australia?',
    answer:
      'Yes, it is highly recommended to secure accommodation before arriving in Australia. It reduces stress, avoids temporary expensive stays, and ensures you have a safe place ready when you land.',
  },
  {
    question: 'Does Esante charge extra for accommodation support?',
    answer:
      'No, Esante provides accommodation assistance at no extra cost. We help students access exclusive partner rates without adding service fees.',
  },
  {
    question: 'What types of student accommodation are available in Australia?',
    answer:
      'Students can choose from private rooms, shared apartments, student residences, and temporary accommodation for initial weeks. Esante helps match options based on budget and preferences.',
  },
  {
    question: 'Can Esante help me get cheaper student accommodation in Australia?',
    answer:
      'Yes, through direct partnerships with accommodation providers, Esante negotiates better weekly rents compared to public listings and passes these savings directly to students.',
  },
  {
    question: 'Which cities in Australia have the most affordable student accommodation?',
    answer:
      'Cities like Adelaide, Perth, and some regional areas are generally more affordable compared to Sydney and Melbourne. Esante helps students choose the best city based on budget and lifestyle.',
  },
  {
    question: 'Is student accommodation in Australia safe?',
    answer:
      'Yes, most student accommodations in Australia are safe and regulated. Esante ensures students are placed only in verified and trusted properties.',
  },
  {
    question: 'Can I get temporary accommodation when I first arrive in Australia?',
    answer:
      'Yes, many students opt for temporary accommodation for the first few weeks. Esante helps arrange short-term stays until you find a long-term option.',
  },
  {
    question: 'Do I need a lease agreement for student accommodation in Australia?',
    answer:
      'Yes, most accommodations require a lease agreement. Esante guides students through rental contracts, terms, and conditions to avoid mistakes.',
  },
  {
    question: 'Can I work part-time while staying in student accommodation?',
    answer:
      'Yes, international students in Australia can work part-time while studying. Choosing accommodation near job hubs can make it easier, and Esante also guides students on job opportunities.',
  },
  {
    question: 'How early should I start looking for accommodation in Australia?',
    answer:
      'Ideally, students should start searching at least 4–8 weeks before arrival to secure the best options and pricing.',
  },
  {
    question: 'Why is student accommodation expensive in Australia?',
    answer:
      'High demand, limited supply, and location preferences make accommodation expensive. Esante helps students avoid overpaying by accessing negotiated partner rates.',
  },
  {
    question: 'Can I change my accommodation after arriving in Australia?',
    answer:
      'Yes, students can switch accommodation after arrival. Esante continues to support students even after they land to help with relocation if needed.',
  },
  {
    question: 'How does Esante make accommodation easier for students?',
    answer:
      'Esante handles the entire process — from shortlisting verified options, negotiating better rates, assisting with bookings, to providing support after move-in.',
  },
];

export default function AccommodationPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const goToPrevSlide = () => setCurrentSlide((p) => (p === 0 ? ACCOMMODATION_SLIDES.length - 1 : p - 1));
  const goToNextSlide = () => setCurrentSlide((p) => (p === ACCOMMODATION_SLIDES.length - 1 ? 0 : p + 1));

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <main className="flex flex-col w-full max-w-[1440px] mx-auto bg-[#FFFFFF]">
        <div className="flex flex-col items-center w-full pt-[130px] pb-16 px-[100px]">
          {/* Hero: text block — matches reference design */}
          <section className="flex flex-col items-center w-full max-w-[1192px] mb-[64px] gap-0">
            {/* Page label — underlined, dark green */}
            <span className="font-poppins font-medium text-[28px] leading-[1.4] tracking-[-0.02em] text-[#00352B] mb-[16px] underline decoration-[#00352B] underline-offset-2">
              Accommodation
            </span>
            {/* Main heading line 1 — bold, italic, orange/red */}
            <h1 className="font-poppins font-bold italic text-[48px] leading-[1.25] tracking-[-0.02em] text-center text-[#FF3300] mb-[4px] whitespace-nowrap">
              Student Accommodation in Australia
            </h1>
            {/* Main heading line 2 — regular weight, dark green */}
            <p className="font-poppins font-normal text-[48px] leading-[1.25] tracking-[-0.02em] text-center text-[#00352B] max-w-[800px] mb-[32px]">
              Sorted With Esante.
            </p>
            {/* CTA — rounded, orange background, white text */}
            <button
              type="button"
              className="inline-flex py-1 px-3 justify-center items-center rounded-[16px] border-0 cursor-pointer"
              style={{ background: '#F30' }}
              onClick={() => setConsultationOpen(true)}
            >
              <span
                className="font-poppins text-center font-medium"
                style={{
                  color: 'var(--Light-Background, #FFFBE9)',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '20px',
                }}
              >
                Get Free Guidance from Esante
              </span>
            </button>
          </section>

          {/* Section: Hero carousel */}
          <div className="w-full -mx-[72px] min-w-0">
            <section className="relative w-[1383px] max-w-[100%] h-[672px] mx-auto mb-[105px] rounded-[49px] overflow-hidden">
            {/* Background */}
            <div
              className="absolute inset-0 rounded-[49px] bg-[#00352B]"
              style={{ backgroundImage: `url(${HERO_BG_IMG})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}
              aria-hidden
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 rounded-[49px] bg-[#00352B]/55 pointer-events-none" aria-hidden />

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

            {/* Centered group: orange card + room image - sliding carousel */}
            {/* Sliding carousel — orange card; slide width = 100% of viewport for smooth responsive transform */}
            <div className="absolute left-1/2 top-1/2 z-[5] w-[812px] max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 h-[557px] max-h-[calc(100%-120px)] sm:max-h-[calc(100%-96px)] overflow-hidden" style={{ borderRadius: 41, background: '#FF3300' }}>
              <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {ACCOMMODATION_SLIDES.map((slide, index) => (
                  <div key={index} className="relative h-full w-full min-w-full flex-shrink-0">
                    <div
                      className="h-full pt-6 pb-6 pl-25 pr-5 sm:pt-7 sm:pb-7 sm:pl-12 sm:pr-[min(28px,4vw)] box-border flex flex-col justify-center text-left"
                      style={{ borderRadius: 41, background: '#FF3300' }}
                    >
                      <div className="relative z-[2] w-full max-w-[420px] pr-0 md:pr-2"
                        style={{ opacity: index === currentSlide ? 1 : 0, transition: 'opacity 300ms ease-out' }}>
                        <p className="font-poppins font-normal text-[40px] leading-[1.35] tracking-[-0.00375em] text-white mb-0">
                          {slide.intro}
                        </p>
                        <h2 className="font-poppins font-bold text-[64px] leading-[1.2] tracking-[-0.00234em] text-white mb-[10px]">
                          {slide.city}
                        </h2>
                        <p className="font-poppins font-normal text-[28px] leading-[1.35] tracking-[-0.00536em] text-white mb-[8px]">
                          Starting at Just
                        </p>
                        <div className="w-[207px] h-[53px] flex items-center justify-center bg-[#00352B] rounded-[15px] mb-[14px] shrink-0 border border-white/30">
                          <span className="font-poppins font-normal text-[29px] leading-[1.5] tracking-[-0.00517em] text-white">
                            {slide.price}
                          </span>
                        </div>
                        <ul className="list-disc list-inside font-poppins font-normal text-[15px] leading-[1.8] tracking-[-0.01em] text-white max-w-[280px] mb-4 [&_li]:marker:text-white">
                          {slide.features.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          className="flex items-center justify-center h-9 px-4 w-fit min-w-0 bg-white rounded-[12px] border-0 cursor-pointer font-poppins font-medium text-[14px] text-[#00352B] transition-opacity hover:opacity-95 shrink-0 shadow-[0_2px_6px_rgba(0,0,0,0.15)] min-h-[44px] sm:min-h-0"
                          onClick={() => setConsultationOpen(true)}
                        >
                          Get Free Guidance from Esante
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Room photo */}
            <img
              src={MELBOURNE_IMG}
              alt="Accommodation room"
              className="absolute z-20 pointer-events-none hidden sm:block"
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


          </section>
          </div>

          {/* Section: Long copy — Figma typography (Accent / At Esante / Partner / B2B body) */}
          <section className="flex flex-col items-center w-full max-w-[1117px] mx-auto mb-[100px] px-4">
            <p
              className="font-poppins text-center text-[#FF3300] mb-8 max-w-[1024px]"
              style={{
                fontSize: 30,
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: '150.37%',
                letterSpacing: '-0.15px',
              }}
            >
              Finding cheap student accommodation in Australia is one of the biggest challenges for
              international students — inflated prices, unreliable listings, and hidden fees make it
              harder than it should be.
            </p>
            <p
              className="font-poppins text-center text-black mb-4 max-w-[1024px]"
              style={{
                fontSize: 34,
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '-0.15px',
              }}
            >
              At Esante, we do it differently. We don&apos;t list properties.
            </p>
            <p
              className="font-poppins text-center text-[#FF3300] mb-4 max-w-[1024px]"
              style={{
                fontSize: 30,
                fontWeight: 400,
                lineHeight: '36px',
                letterSpacing: '-0.15px',
              }}
            >
              We partner, negotiate, verify, and support — like a local Australian team.
            </p>
            <p
              className="font-poppins text-center text-black max-w-[1024px]"
              style={{
                fontSize: 23,
                fontWeight: 400,
                lineHeight: '36px',
                letterSpacing: '-0.15px',
              }}
            >
              We have direct B2B partnerships with multiple trusted accommodation providers across Australia, which allows us to access exclusive student rates that are lower than standard market prices. These benefits are passed directly to our students, with no extra charges.
            </p>
          </section>

          {/* Section: Why Esante */}
          <section className="flex flex-col w-full max-w-[1087px] mx-auto mb-[98px]">
            <div className="flex flex-row items-start w-full gap-[50px]">
              <img
                src={WHY_IMG}
                alt="Why Esante accommodation"
                className="w-[379px] h-[379px] shrink-0 object-cover rounded-[50px]"
              />
              <div className="flex flex-col items-start flex-1 min-w-0 pt-0">
                <h2 className="font-poppins font-normal text-[45px] leading-[1.2] tracking-[-0.00333em] text-[#00352B] mb-8 max-w-[603px]">
                  Why Esante Accommodation Support Is Different
                </h2>
                <ul className="flex flex-col gap-[12px] list-none p-0 m-0">
                  <li className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ B2B partner rates with verified accommodation providers
                  </li>
                  <li className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ Lower weekly rents compared to public listings
                  </li>
                  <li className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ Private rooms, shared apartments & student residences
                  </li>
                  <li className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ Support before arrival and after moving in
                  </li>
                  <li className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.007em] text-black">
                    ✅ Lease & rental guidance by an Australia-based team
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Real Student Story */}
          <section className="relative w-full max-w-[1230px] mx-auto mb-[65px]">
            <div className="relative w-full h-[600px] py-8 px-12 bg-[#00352B] rounded-[51px] border-2 border-[#FF3300]">
              <div className="flex flex-row items-center justify-center w-full h-full gap-10 px-14">
                <div className="flex flex-col items-start text-left shrink-0">
                  <p
                    className="font-poppins font-medium italic text-[#FF3300] m-0 mb-2"
                    style={{ fontSize: 28, lineHeight: '34px', letterSpacing: '-0.15px' }}
                  >
                    Real Student Story.
                  </p>
                  <h3
                    className="font-poppins font-bold text-white m-0 mb-6"
                    style={{
                      fontSize: 45,
                      lineHeight: '1.2em',
                      letterSpacing: '-0.15px',
                    }}
                  >
                    {KHUSHI_STORY.headlineCity}
                  </h3>
                  <div className="w-[465px] max-w-full min-w-0 box-border">
                    <KhushiStoryBody />
                  </div>
                </div>
                <img
                  src={KHUSHI_STORY.img}
                  alt={KHUSHI_STORY.headlineCity}
                  className="w-[418px] h-[502px] shrink-0 object-cover rounded-[41px]"
                />
              </div>
            </div>
          </section>

          {/* FAQ — student accommodation in Australia */}
          <section
            className="flex flex-col items-center self-stretch w-full bg-[#FFFFFF] py-[64px] px-0 gap-[24px]"
            aria-labelledby="accommodation-faq-heading"
          >
            <h2
              id="accommodation-faq-heading"
              className="font-poppins font-bold text-center text-[#00352B] max-w-[900px] px-4"
              style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
            >
              Frequently Asked Questions About Student Accommodation in Australia
            </h2>

            <div className="w-full max-w-[1064px] flex flex-col">
              {ACCOMMODATION_FAQ_ITEMS.map((item, index) => {
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
                      aria-controls={`accommodation-faq-answer-${index}`}
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
                            id={`accommodation-faq-answer-${index}`}
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

            <div className="flex flex-col items-center gap-[20px] max-w-[640px] text-center mt-[8px] px-4">
              <p className="font-poppins text-[18px] text-[#00352B] leading-[1.5]">
                Still have questions? Get personalised guidance from an Esante expert.
              </p>
              <button
                type="button"
                onClick={() => setConsultationOpen(true)}
                className="inline-flex justify-center items-center rounded-[16px] border-0 cursor-pointer"
                style={{ background: '#FF3300', padding: '12px 28px' }}
              >
                <span
                  className="font-poppins font-medium text-center"
                  style={{ color: '#FFFBE9', fontSize: 16, lineHeight: '1.43em' }}
                >
                  Get Best Student Accommodation Deals
                </span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <EsanteBanner />
      <Footer />

      <ConsultationPopup
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
