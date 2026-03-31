import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const HERO_BG        = '/images/airport-hero-bg.png';
const AIRPLANE       = '/images/passenger-jet.png';
const WHAT_WE_DO_IMG = '/images/airport-hero-bg.png';
const CTA_BG         = '/images/esante-cta-bg.png';

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

      <div className="flex flex-col items-center self-stretch w-full max-w-[1440px] mx-auto bg-white pt-[94px]">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        {/* Outer wrapper is 673 px; airplane absolute at bottom-[-96px] overflows
            96 px. mb-[120px] = airplane overflow (96) + gap to body copy (24).   */}
        <div className="relative w-full mb-[120px]">

          {/* Hero photo container — exact Figma size */}
          <div className="relative w-full h-[673px] overflow-hidden">

            {/* Background image: Figma positions it left-anchored, shifted up 32.35 %
                w-[131.18%] h-[186.73%] left-0 top-[-32.35%]                        */}
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

            {/* ── Text block ───────────────────────────────────────────────────
                Label   (300:1740): y = 437-261 = 176 px from hero top
                Heading (300:1739): y = 454-261 = 193 px — visually the first
                  paragraph ("Welcome Home") renders at the very top of the node
                  (blank spacer has near-zero height in Figma's engine).
                  Net: label + heading are tight-stacked with ~4 px natural gap.
                Badge   (300:1741): y = 634-261 = 373 px — independent absolute. */}
            {/*
              Figma absolute positions (from hero top):
                Label         y = 176 px  (height 21 px  → bottom 197 px)
                Heading node  y = 193 px  (4 px before label bottom — tight overlap)
                Badge         y = 373 px  (independent absolute)

              gap-[16px] between flex children gives:
              label → "Welcome Home"             ≈  16 px visible gap
              "Welcome Home" → "Your Personal…"  ≈ 16 px visible gap
            */}
            <div
              className="absolute flex flex-col items-start gap-[16px]"
              style={{ top: 176, left: 96 }}
            >
              {/* Eyebrow label */}
              <p
                className="font-poppins text-[28px] font-medium tracking-[-0.56px] text-[#00352B] underline decoration-solid"
                style={{ lineHeight: '21px', marginBottom: 0 }}
              >
                Free Airport Pickup in Australia
              </p>

              {/* "Welcome Home" */}
              <p
                className="font-poppins text-[56px] font-semibold italic text-accent"
                style={{ lineHeight: '1.1', margin: 0 }}
              >
                Welcome Home
              </p>

              {/* "Your Personal Chauffeur Awaits." */}
              <p
                className="font-poppins text-[48px] font-normal text-primary"
                style={{ lineHeight: '1.1', margin: 0 }}
              >
                Your Personal Chauffeur Awaits.
              </p>

              {/* ── CTA Badge ── inside flex column, shares the same gap-[16px] */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-[12px] py-[4px] bg-accent rounded-[16px] cursor-pointer"
              >
                <span className="font-poppins text-[14px] font-medium leading-[20px] text-cream text-center">
                  Get Free Guidance from Esante
                </span>
              </a>
            </div>
          </div>

          {/* ── Airplane ─────────────────────────────────────────────────────
              Container: 669×314px, bottom-[-80px] left-[4px] (Figma: x=90-86=4px
              from content left, extends 80px below hero).
              Img crop: w-[235.94%] h-[335.56%] left-[-65.54%] top-[-101.68%]     */}
          <div
            className="absolute pointer-events-none overflow-hidden"
            style={{ bottom: -96, left: 4, width: 669, height: 314 }}
          >
            <img
              alt=""
              src={AIRPLANE}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* ── BODY COPY ────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center w-full max-w-[1007px] mx-auto px-6 mb-[40px] gap-0">
          {/* Red italic lead */}
          <p className="font-poppins text-[30px] font-semibold italic leading-[1.504] text-accent text-center tracking-[-0.15px]">
            Zero Stress. Zero Confusion. We greet you at the gate and drive you safely to your doorstep.
          </p>

          {/* Body paragraph */}
          <p className="font-poppins text-[23px] font-normal leading-[36px] text-black text-center tracking-[-0.15px] mt-[36px]">
            Landing in a new country can feel overwhelming — new airport, new city, new systems.{' '}
            That's why Esante offers FREE airport pickup support across Australia, so you never feel alone on your first day.
          </p>

          {/* Bold italic closer */}
          <p className="font-poppins text-[23px] font-semibold italic leading-[36px] text-black text-center tracking-[-0.15px]">
            From the moment you land, we've got you covered.
          </p>
        </div>

        {/* ── WHAT WE DO CARD ──────────────────────────────────────────────── */}
        {/* Figma: card x=137 (51 px from content left), right edge = 137+1325=1462,
            content right = 86+1440=1526 → right margin = 64 px                */}
        <div
          className="flex flex-row items-center justify-between bg-accent rounded-[39px] mb-[84px]"
          style={{ marginLeft: 51, marginRight: 64, width: 'calc(100% - 115px)' }}
        >
          {/* Left: text content */}
          <div className="flex flex-col items-start pl-[82px] pt-[67px] pb-[67px] gap-[12px]">

            {/* "What We Do:" — regular + medium-italic blend */}
            <p className="font-poppins text-[60px] font-normal leading-[1.2] text-white tracking-[-0.15px]">
              What{' '}
              <span className="font-medium italic">We Do:</span>
            </p>

            {/* Bullet list */}
            <p className="font-poppins text-[24px] font-normal leading-[1.2] text-white tracking-[-0.15px]">
              ✅&nbsp; Pick you up directly from the airport
            </p>
            <p className="font-poppins text-[24px] font-normal leading-[1.36] text-white tracking-[-0.15px]">
              ✅&nbsp; Help with luggage and first-day guidance
            </p>
            <p className="font-poppins text-[24px] font-normal leading-[1.35] text-white tracking-[-0.15px] max-w-[464px]">
              ✅ Drop you safely to your temporary or permanent accommodation
            </p>
            <p className="font-poppins text-[24px] font-normal leading-[1.35] text-white tracking-[-0.15px]">
              ✅ Ensure a stress-free, comfortable arrival
            </p>

            {/* Bold tagline */}
            <p className="font-poppins text-[26px] font-bold leading-[1.35] text-white tracking-[-0.15px] mt-[4px]">
              No taxis. No confusion. No overpaying.
            </p>
          </div>

          {/* Right: photo — 22 px top/bottom, 47 px right margin */}
          <div className="w-[570px] h-[414px] my-[22px] mr-[47px] rounded-[37px] overflow-hidden shrink-0">
            <img
              src={WHAT_WE_DO_IMG}
              alt="Airport pickup service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* FAQ — airport pickup for international students */}
        <section
          className="flex flex-col items-center self-stretch w-full max-w-[1064px] mx-auto px-6 py-[64px] gap-[24px]"
          aria-labelledby="airport-faq-heading"
        >
          <h2
            id="airport-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
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
                    <div className="w-full h-[1px] bg-[#00352B]/10" />
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
                        className="text-[18px] font-medium text-[#00352B] leading-[1.556]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.question}
                      </p>
                      {isOpen && item.answer && (
                        <p
                          id={`airport-faq-answer-${index}`}
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
                Get Free Airport Pickup Guidance
              </span>
            </button>
          </div>
        </section>

        {/* ── CLOSING QUOTE ────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-[58px] px-4">
          <p className="font-poppins text-[45px] font-normal leading-[1.2] text-primary text-center tracking-[-0.15px]">
            This is not just a pickup
          </p>
          <p className="font-poppins text-[45px] font-semibold italic leading-[1.2] text-accent text-center tracking-[-0.15px]">
            it's your first step into Australia with confidence.
          </p>
        </div>

        {/* ── CTA BANNER (Group 98) ─────────────────────────────────────────
            Outer group: 1259 px wide. Image (Frame 94): 1047 px wide, centered
            (106 px each side). All text overlays the image.
            Heading starts 59 px from top; subtext at 214 px; button at 283 px. */}
        <div className="relative w-full max-w-[1259px] mx-auto h-[367px] mb-[84px]">

          {/* Orange background image — centered, 1047 × 367, rounded corners */}
          <div className="absolute top-0 left-[106px] w-[1047px] h-[367px] rounded-[37px] overflow-hidden">
            <img
              src={CTA_BG}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Heading overlay — full 1259 px width, starts at top-[59px] */}
          <div className="absolute top-[59px] left-0 w-full flex flex-col items-center text-center px-4">
            <p className="font-poppins text-[42px] font-normal leading-[1.15] text-white tracking-[-0.96px]">
              Think of
            </p>
            <p className="font-poppins text-[48px] font-semibold italic leading-[1.15] text-white tracking-[-0.96px]">
              Esante as your Australia-study partner
            </p>
            <p className="font-poppins text-[42px] font-normal leading-[1.15] text-white tracking-[-0.96px]">
              not just an agent.
            </p>
          </div>

          {/* Subtext + button — positioned within image frame (top-[214px] / top-[283px]) */}
          <p
            className="absolute w-[708px] font-poppins text-[23px] font-normal leading-normal text-[rgba(255,255,255,0.9)] text-center capitalize tracking-[-0.15px]"
            style={{ top: 214, left: '50%', transform: 'translateX(-50%)' }}
          >
            Let our experts in Brisbane guide you every step of the way.
          </p>

          <a
            href="/#book-free-call"
            className="absolute flex items-center justify-center bg-white rounded-[16px] h-[36px] w-[181px] overflow-hidden"
            style={{ top: 283, left: '50%', transform: 'translateX(-50%)' }}
          >
            <span className="font-['Inter',sans-serif] text-[19px] font-normal leading-normal text-primary tracking-[-0.15px]">
              Book Free Call
            </span>
          </a>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default AirportServicesPage;
