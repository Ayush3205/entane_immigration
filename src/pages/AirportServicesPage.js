import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const HERO_BG = '/images/airport-hero-bg.png';
const AIRPLANE = '/images/passenger-jet.png';
const WHAT_WE_DO_IMG = '/images/airport-we_do-bg.png';
const CTA_BG = '/images/esante-cta-bg.png';

const WHAT_WE_DO_IMG_SHADOW =
  '14px 18px 32px rgba(0, 0, 0, 0.48), 8px 10px 18px rgba(0, 0, 0, 0.32)';

const AIRPORT_FAQ_ITEMS = [
  {
    question: 'Do international students get airport pickup in Australia?',
    answer:
      'Yes, many student support providers offer airport pickup services in Australia. Esante provides FREE airport pickup to ensure students arrive safely and comfortably without confusion.',
  },
  {
    question: 'Is airport pickup free for students with Esante?',
    answer:
      'Yes, Esante offers complimentary airport pickup support as part of its end-to-end student services, helping students settle smoothly from day one.',
  },
  {
    question: 'How does airport pickup work for international students?',
    answer:
      'Once your flight details are shared, an Esante representative or driver will meet you at the airport, assist with luggage, and drop you safely to your accommodation.',
  },
  {
    question: 'Which cities in Australia does Esante provide airport pickup?',
    answer:
      'Esante offers airport pickup support across major Australian cities including Brisbane, Melbourne, Sydney, Adelaide, and Perth.',
  },
  {
    question: 'What should I do after landing in Australia as a student?',
    answer:
      'After landing, students should complete immigration clearance, collect luggage, and meet their pickup contact. Esante ensures someone is there to guide you from the airport to your destination.',
  },
  {
    question: 'Is airport pickup safe for international students?',
    answer:
      'Yes, airport pickup arranged through trusted providers like Esante is safe, reliable, and designed to help students avoid scams or confusion.',
  },
  {
    question: 'Can I book airport pickup before arriving in Australia?',
    answer:
      'Yes, students should book airport pickup in advance by sharing their flight details to ensure a smooth and hassle-free arrival.',
  },
  {
    question: 'What if my flight is delayed?',
    answer:
      'Esante monitors flight timings and adjusts pickup schedules accordingly, ensuring you are not left stranded at the airport.',
  },
  {
    question: 'Will someone help me with luggage at the airport?',
    answer:
      'Yes, airport pickup services typically include assistance with luggage and guidance during your first day in Australia.',
  },
  {
    question: 'Can I get dropped directly to my accommodation?',
    answer:
      'Yes, Esante ensures you are safely dropped to your temporary or permanent accommodation after pickup.',
  },
  {
    question: 'Why is airport pickup important for new students?',
    answer:
      'Airport pickup removes the stress of navigating a new country, helps avoid overpaying for taxis, and ensures a safe and smooth first experience in Australia.',
  },
  {
    question: 'Can I use public transport instead of airport pickup?',
    answer:
      'Yes, but for first-time arrivals, airport pickup is recommended for safety, convenience, and ease of transition.',
  },
  {
    question: 'Does Esante provide support after airport pickup?',
    answer:
      'Yes, Esante continues to support students after arrival with accommodation, part-time job guidance, and settling assistance.',
  },
  {
    question: 'How do I book airport pickup with Esante?',
    answer:
      'Simply fill out the airport pickup form with your details and flight information, and an Esante counsellor will confirm your pickup.',
  },
  {
    question: 'What makes Esante’s airport pickup service different?',
    answer:
      'Esante provides personalised, student-focused pickup with local support, ensuring a stress-free arrival and guidance from the moment you land.',
  },
];

function AirportServicesPage() {
  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col items-start w-full bg-white">
      <Header />

      <div className="flex flex-col items-center self-stretch w-full max-w-[1440px] mx-auto bg-white px-6 lg:px-[100px] pt-[94px]">

        {/* ── HERO — original layout: 673px frame, Figma image crop, fixed text + plane ── */}
        <div className="relative w-full mb-[120px] -mx-6 lg:-mx-[100px]">
          <div className="relative w-full h-[673px] max-h-[80vh] overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                src={HERO_BG}
                style={{
                  position: 'absolute',
                  width: '131.18%',
                  height: '186.73%',
                  left: 0,
                  top: '-32.35%',
                  maxWidth: 'none',
                }}
              />
            </div>

            <div className="absolute left-6 top-24 flex flex-col items-start gap-[16px] md:left-[96px] md:top-[176px]">
              <p
                className="font-poppins text-[28px] font-medium tracking-[-0.56px] text-[#00352B] underline decoration-solid m-0 max-md:text-[22px]"
                style={{ lineHeight: '21px' }}
              >
                Free Airport Pickup in Australia
              </p>

              <p
                className="font-poppins text-[56px] font-semibold italic text-accent m-0 max-md:text-[36px] max-md:leading-tight"
                style={{ lineHeight: '1.1' }}
              >
                Welcome Home
              </p>

              <p
                className="font-poppins text-[48px] font-normal text-primary m-0 max-md:text-[28px] max-md:leading-tight"
                style={{ lineHeight: '1.1' }}
              >
                Your Personal Chauffeur Awaits.
              </p>

              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center justify-center px-[12px] py-[4px] bg-accent rounded-[16px] cursor-pointer border-0"
              >
                <span className="font-poppins text-[14px] font-medium leading-[20px] text-cream text-center">
                  Get Free Guidance from Esante
                </span>
              </button>
            </div>
          </div>

          <div
            className="absolute pointer-events-none overflow-hidden max-md:hidden"
            style={{ bottom: -96, left: 4, width: 669, height: 314 }}
          >
            <img alt="" src={AIRPLANE} className="absolute inset-0 h-full w-full object-contain" />
          </div>
        </div>

        {/* ── INTRO — Figma: center-aligned ── */}
        <section className="flex flex-col items-center text-center w-full max-w-[1007px] mx-auto mb-10 md:mb-12 px-0">
          <p className="font-poppins text-[clamp(20px,3.2vw,30px)] font-semibold not-italic leading-[1.5] text-accent tracking-[-0.15px] m-0">
            Zero Stress. Zero Confusion. We greet you at the gate and drive you safely to your doorstep.
          </p>

          <p className="font-poppins text-[clamp(18px,2.4vw,23px)] font-normal leading-[1.56] text-black tracking-[-0.15px] mt-8 md:mt-9">
            Landing in a new country can feel overwhelming — new airport, new city, new systems.{' '}
            That&apos;s why Esante offers FREE airport pickup support across Australia, so you never feel alone on your first day.
          </p>

          <p className="font-poppins text-[clamp(18px,2.4vw,23px)] font-semibold italic leading-[1.56] text-black tracking-[-0.15px] mt-8 md:mt-9 m-0">
            *From the moment you land, we&apos;ve got you covered.*
          </p>
        </section>

        {/* ── WHAT WE DO — orange card, two columns; list with ✅; image shadow ── */}
        <section
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-[1325px] mx-auto mb-14 md:mb-[84px] rounded-[32px] md:rounded-[39px] bg-accent px-6 py-10 sm:px-10 sm:py-12 lg:pl-[82px] lg:pr-12 lg:py-[67px] gap-10 lg:gap-8"
        >
          <div className="flex flex-col items-start text-left gap-3 lg:gap-3 shrink-0 lg:max-w-[540px]">
            <p className="font-poppins text-[clamp(36px,6vw,60px)] font-normal leading-[1.2] text-white tracking-[-0.15px] m-0">
              What{' '}
              <span className="font-medium italic">We Do:</span>
            </p>

            <ul className="list-none m-0 p-0 flex flex-col gap-2.5 w-full">
              {[
                'Pick you up directly from the airport',
                'Help with luggage and first-day guidance',
                'Drop you safely to your temporary or permanent accommodation',
                'Ensure a stress-free, comfortable arrival',
              ].map((line) => (
                <li
                  key={line}
                  className="font-poppins text-[clamp(18px,2.2vw,24px)] font-normal leading-[1.35] text-white tracking-[-0.15px] flex flex-row items-start gap-2"
                >
                  <span className="shrink-0" aria-hidden="true">
                    ✅
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="font-poppins text-[clamp(20px,2.6vw,26px)] font-bold leading-[1.35] text-white tracking-[-0.15px] mt-2 m-0">
              No taxis. No confusion. No overpaying.
            </p>
          </div>

          <div
            className="w-full max-w-[570px] lg:w-[570px] aspect-[570/414] lg:aspect-auto lg:h-[414px] mx-auto lg:mx-0 lg:mr-0 rounded-[28px] md:rounded-[37px] overflow-hidden shrink-0 self-center lg:self-auto"
            style={{ boxShadow: WHAT_WE_DO_IMG_SHADOW }}
          >
            <img
              src={WHAT_WE_DO_IMG}
              alt="Airport pickup service"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ── TRANSITION QUOTE — Figma: center ── */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-14 px-2 max-w-[900px] mx-auto w-full">
          <p className="font-poppins text-[clamp(28px,5vw,45px)] font-normal leading-[1.2] text-primary tracking-[-0.15px] m-0">
            This is not just a pickup
          </p>
          <p className="font-poppins text-[clamp(28px,5vw,45px)] font-semibold italic leading-[1.2] text-accent tracking-[-0.15px] mt-2 m-0">
            it&apos;s your first step into Australia with confidence.
          </p>
        </div>

        {/* ── FAQ ── */}
        <section
          className="flex flex-col items-center self-stretch w-full max-w-[1064px] mx-auto px-0 py-[48px] md:py-[64px] gap-[24px]"
          aria-labelledby="airport-faq-heading"
        >
          <h2
            id="airport-faq-heading"
            className="font-poppins font-bold text-center text-primary max-w-[900px] px-2"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Airport Pickup Services for International Students
          </h2>

          <div className="w-full flex flex-col">
            {AIRPORT_FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="flex flex-col items-center w-full">
                  {index > 0 && (
                    <div className="w-full h-[1px] bg-primary/10" />
                  )}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start gap-[24px] py-[24px] text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`airport-faq-answer-${index}`}
                  >
                    <div className="flex-1 flex flex-col gap-[8px]">
                      <p
                        className="text-[18px] font-medium text-primary leading-[1.556]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.question}
                      </p>
                      {isOpen && item.answer && (
                        <p
                          id={`airport-faq-answer-${index}`}
                          className="text-[16px] font-normal text-primary leading-[1.5]"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {item.answer}
                        </p>
                      )}
                    </div>
                    <div className="mt-[2px] flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-accent text-accent text-[12px] shrink-0">
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-[20px] max-w-[640px] text-center mt-[8px] px-2">
            <p className="font-poppins text-[18px] text-primary leading-[1.5]">
              Still have questions? Get personalised guidance from an Esante expert.
            </p>
            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex justify-center items-center rounded-2xl border-0 cursor-pointer"
              style={{ background: '#FF3300', padding: '12px 28px' }}
            >
              <span
                className="font-poppins font-medium text-center"
                style={{ color: '#FFFBE9', fontSize: 16, lineHeight: '1.43em' }}
              >
                Get Free Airport Pickup Guidance
              </span>
            </button>
          </div>
        </section>

        {/* ── CTA BANNER — below FAQ: Think of Esante… ── */}
        <div className="relative w-full max-w-[1259px] mx-auto mb-16 md:mb-[84px] px-0 mt-4">
          <div className="relative w-full min-h-[280px] sm:min-h-[320px] md:h-[367px] rounded-[28px] md:rounded-[37px] overflow-hidden">
            <img
              src={CTA_BG}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-[1] flex flex-col items-center justify-center text-center px-6 py-10 md:py-12 md:px-12 min-h-[280px] sm:min-h-[320px] md:min-h-[367px]">
              <div className="flex flex-col items-center gap-0">
                <p className="font-poppins text-[clamp(24px,4vw,42px)] font-normal leading-[1.15] text-white tracking-[-0.02em] m-0">
                  Think of
                </p>
                <p className="font-poppins text-[clamp(26px,4.5vw,48px)] font-semibold italic leading-[1.15] text-white tracking-[-0.02em] m-0">
                  Esante as your Australia-study partner
                </p>
                <p className="font-poppins text-[clamp(24px,4vw,42px)] font-normal leading-[1.15] text-white tracking-[-0.02em] m-0">
                  not just an agent.
                </p>
              </div>
              <p className="font-poppins text-[clamp(16px,2.2vw,23px)] font-normal leading-[1.45] text-white/90 text-center max-w-[708px] mt-6 md:mt-8 capitalize tracking-[-0.15px]">
                Let Our Experts In Brisbane Guide You Every Step Of The Way.
              </p>
              <button
                type="button"
                onClick={openConsultation}
                className="mt-6 md:mt-8 inline-flex items-center justify-center bg-white rounded-2xl px-6 py-2.5 min-h-[44px] border-0 cursor-pointer"
              >
                <span className="font-poppins text-[17px] md:text-[19px] font-medium text-primary tracking-[-0.15px]">
                  Book Free Call
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AirportServicesPage;
