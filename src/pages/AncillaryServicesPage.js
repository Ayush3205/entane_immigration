import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';

gsap.registerPlugin(ScrollTrigger);

// ─── Figma images (section 239:1666 "Ancillary services") ───────────────────
// Center card  – node 239:1847 / layout_GY3D9A: 309×407, borderRadius 33px
// Side cards   – nodes 239:1853, 239:1858, 239:1840, 239:1850, borderRadius 31px
// Fan geometry: all cards are ~309×407 natural size; bounding boxes in Figma
// are larger for outer cards because they are rotated (36° → BB ≈ 467×505).

// Natural card dimensions
const CARD_W = 282;
const CARD_H = 372;

// Card data — positions scaled proportionally from Figma fan layout
const CARDS = [
  // Left outer — Airport service (y aligned with inner-left pivot row for even fan)
  {
    img: '/images/anc-img-65.png',
    alt: 'Airport service',
    label: 'Airport service',
    x: -380, y: 120, rotate: -36, z: 1, br: 28,
    grayscale: true, opacity: 1,
  },
  // Left inner — Post-arrival support
  {
    img: '/images/anc-rect-22.png',
    alt: 'Post-arrival support',
    label: 'Post-arrival support',
    x: -195, y: 26, rotate: -18, z: 2, br: 28,
    grayscale: true, opacity: 1,
  },
  // Center — Accommodation
  {
    img: '/images/anc-img-62.png',
    alt: 'Accommodation',
    label: 'Accommodation',
    x: 0, y: 0, rotate: 0, z: 5, br: 29,
    grayscale: false, opacity: 1,
  },
  // Right inner — Part-time
  {
    img: '/images/anc-img-63.png',
    alt: 'Part-time job',
    label: 'PART TIME',
    x: 195, y: 26, rotate: 18, z: 2, br: 28,
    grayscale: true, opacity: 1,
  },
  // Right outer — FREE SOP (y aligned with inner-right pivot row for even fan)
  {
    img: '/images/anc-img-64.png',
    alt: 'Free SOP support',
    label: 'FREE SOP',
    x: 380, y: 120, rotate: 36, z: 1, br: 28,
    grayscale: true, opacity: 1,
  },
];

const ANCILLARY_FAQ_ITEMS = [
  {
    question: 'What are ancillary services for international students in Australia?',
    answer:
      'Ancillary services include all support beyond admissions and visa, such as accommodation assistance, part-time job guidance, IELTS preparation, scholarship support, and post-arrival help. These services ensure students can settle, work, and succeed smoothly after arriving in Australia.',
  },
  {
    question: 'Does Esante provide support after reaching Australia?',
    answer:
      'Yes, Esante provides complete post-arrival support in Australia. This includes accommodation guidance, part-time job assistance, local setup support, and ongoing counselling to help students adjust and succeed.',
  },
  {
    question: "Are Esante's ancillary services free for students?",
    answer:
      'Yes, most ancillary services provided by Esante are offered at no extra cost. Our goal is to support students throughout their journey without additional financial burden.',
  },
  {
    question: 'What kind of accommodation support do students get in Australia?',
    answer:
      'Esante helps students find safe and affordable accommodation options, including shared housing and student accommodations, based on budget and preferred location.',
  },
  {
    question: 'Can Esante help me find a part-time job in Australia?',
    answer:
      'Yes, Esante provides guidance on job search strategies, resume building, and understanding the Australian job market so students can find part-time work while studying.',
  },
  {
    question: 'Do you provide IELTS or PTE preparation support?',
    answer:
      'Yes, Esante offers IELTS and communication training support to help students meet English requirements and improve their confidence for studying and working in Australia.',
  },
  {
    question: 'What is GS-compliant documentation for Australia student visa?',
    answer:
      'GS (Genuine Student) documentation ensures your application clearly reflects your study intent and eligibility. Esante helps structure SOPs and documents as per Australian immigration requirements.',
  },
  {
    question: 'Can you help with scholarships for studying in Australia?',
    answer:
      'Yes, Esante assists students in identifying scholarship opportunities and guides them on how to maximise their chances through strong applications.',
  },
  {
    question: 'Why are ancillary services important for studying in Australia?',
    answer:
      'These services help students settle smoothly, avoid mistakes, and adapt quickly to life in Australia, covering areas like housing, jobs, and daily living.',
  },
  {
    question: 'How is Esante different from other education consultants?',
    answer:
      'Esante provides end-to-end support — from course selection to post-arrival assistance — focusing on long-term student success rather than just admissions.',
  },
  {
    question: 'Can I get personalised guidance for studying and settling in Australia?',
    answer:
      'Yes, simply fill out the enquiry form and an Esante counsellor will guide you step-by-step based on your goals.',
  },
];

/** Space below card stack for hover captions */
const FAN_SECTION_BOTTOM = 72;

export default function AncillaryServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const fanSectionRef = useRef(null);
  const cardAnimateRefs = useRef([]);

  const setCardAnimateRef = (el, index) => {
    if (el) cardAnimateRefs.current[index] = el;
  };

  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  useEffect(() => {
    const layers = CARDS.map((_, i) => cardAnimateRefs.current[i]).filter(Boolean);
    if (layers.length !== CARDS.length) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        layers,
        {
          opacity: 0,
          y: 88,
          scale: 0.82,
        },
        {
          opacity: (i) => CARDS[i]?.opacity ?? 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: {
            each: 0.1,
            from: 'center',
          },
          scrollTrigger: {
            trigger: fanSectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, fanSectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <main className="flex flex-col w-full bg-white" style={{ overflow: 'visible' }}>
        <div className="flex flex-col items-center w-full pt-[150px] pb-16" style={{ overflow: 'visible' }}>

          {/* ── Heading and Badge ── layout_NN129N: column/center/gap-16/1240×108 ── */}
          <section
            className="flex flex-col items-center gap-[16px] mb-[32px]"
            style={{ width: 1240, maxWidth: '100%' }}
          >
            {/* style_8GUZMK: Poppins 600 / 48px / letterSpacing -2% / CENTER */}
            {/* fills: Primary Color (#00352B) — mixed text runs give line 2 its red/italic */}
            <h1 className="font-poppins text-center" style={{ lineHeight: 1 }}>
              <span
                className="block font-semibold text-[48px] text-[#00352B]"
                style={{ letterSpacing: '-0.96px', lineHeight: '54px' }}
              >
                Ancillary Services
              </span>
              <span
                className="block font-semibold italic text-[48px] text-[#FF3300]"
                style={{ letterSpacing: '-0.96px', lineHeight: '54px' }}
              >
                That Actually Matter
              </span>
            </h1>

            {/* Badge button – layout_MYW2I2: row/center/pad 4px 12px/hug
                fill_P7T27W #FF3300, borderRadius 16px
                style_CK69WR: Poppins 500 / 14px / 1.43em / CENTER
                fills: Light Background #FFFBE9 */}
            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex justify-center items-center rounded-[16px] border-0 cursor-pointer"
              style={{ background: '#FF3300', padding: '4px 12px' }}
            >
              <span
                className="font-poppins text-center font-medium"
                style={{ color: '#FFFBE9', fontSize: 14, lineHeight: '1.43em' }}
              >
                Get Free Guidance from Esante
              </span>
            </button>
          </section>

          {/* ── Supporting text ── layout_PGLZJH: 867×190
              style_29U0JM: Poppins 400 / 20px / 1.5em / CENTER
              fills: fill_6ECEP5 #000000 ── */}
          <section
            className="flex flex-col items-center w-full mb-[48px]"
            style={{ maxWidth: 867 }}
          >
            <p
              className="font-poppins font-normal text-[20px] text-[#000000] text-center"
              style={{ lineHeight: '1.5em', maxWidth: 867 }}
            >
              Studying in Australia isn't just about getting an offer letter — it's about surviving,
              settling, earning, and succeeding once you land.
              <br /><br />
              That's where Esante's end-to-end ancillary services come in.
            </p>
          </section>

          {/* ── Fan Cards ── layout_678G42 center: 310×407 / layout_GY3D9A: 309×407 ── */}
          <section
            ref={fanSectionRef}
            className="relative w-full flex justify-center"
            style={{ height: CARD_H + FAN_SECTION_BOTTOM, overflow: 'visible' }}
          >
            {CARDS.map((card, i) => {
              const isHovered = hoveredCardIndex === i;
              const isFullColor =
                isHovered || (hoveredCardIndex === null && i === 2);
              const useGrayscale = !isFullColor;
              const z = isHovered ? Math.max(card.z, 14) : card.z;
              const dimOthers = hoveredCardIndex !== null && !isHovered;

              return (
                <div
                  key={i}
                  role="presentation"
                  onMouseEnter={() => setHoveredCardIndex(i)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  className="cursor-pointer"
                  style={{
                    position: 'absolute',
                    width: CARD_W,
                    height: CARD_H,
                    left: `calc(50% + ${card.x}px - ${CARD_W / 2}px)`,
                    top: card.y,
                    zIndex: z,
                    overflow: 'visible',
                  }}
                >
                  {/* GSAP animates this layer only; keeps transforms stable on React updates */}
                  <div
                    ref={(el) => setCardAnimateRef(el, i)}
                    style={{
                      width: '100%',
                      height: '100%',
                      overflow: 'visible',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        transform: `rotate(${card.rotate}deg) scale(${isHovered ? 1.1 : 1})`,
                        transformOrigin: 'center bottom',
                        transition:
                          'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.35s ease, opacity 0.35s ease',
                        filter: useGrayscale ? 'grayscale(100%)' : 'none',
                        opacity: dimOthers ? 0.48 : 1,
                      }}
                    >
                      <img
                        src={card.img}
                        alt={card.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: card.br,
                          boxShadow: useGrayscale
                            ? '0 8px 40px rgba(0,0,0,0.20)'
                            : '0 24px 72px rgba(0,0,0,0.32)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: card.br,
                          background: useGrayscale
                            ? 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)'
                            : 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 58%)',
                          pointerEvents: 'none',
                          transition: 'background 0.35s ease',
                        }}
                      />
                    </div>
                  </div>

                  <div
                    aria-hidden={!isHovered}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: CARD_H + 10,
                      transform: `translateX(-50%) rotate(${card.rotate}deg)`,
                      transformOrigin: 'center top',
                      width: 'max-content',
                      maxWidth: 300,
                      textAlign: 'center',
                      pointerEvents: 'none',
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.25s ease',
                    }}
                  >
                    <span
                      className="font-poppins font-semibold text-[18px] leading-tight text-[#00352B]"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {card.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </section>

          {/* ── Description text ── layout_QPQ4K1: 850×489
              style_WDUKGC: Poppins 500 / 26px / 1.577em / CENTER / -2% letterSpacing
              fills: fill_6ECEP5 #000000
              Two paragraphs in one TEXT node (separated by \L\L in Figma) ── */}
          <section className="flex flex-col items-center w-full mt-[130px] mb-[40px]">
            {/* First paragraph — italic red (text-run override in Figma) */}
            <p
              className="font-poppins font-semibold italic text-[26px] text-[#FF3300] text-center"
              style={{ maxWidth: 850, lineHeight: '1.577em', letterSpacing: '-0.52px' }}
            >
              From SOP &amp; GS-compliant documentation, scholarship optimisation, free IELTS &amp;
              communication training, accommodation support, part-time job assistance, to complete
              post-arrival hand-holding, we cover everything students usually struggle with —
              at no extra cost.
            </p>
          </section>

          <section className="flex flex-col items-center w-full mb-[32px]">
            {/* Second paragraph — normal black */}
            <p
              className="font-poppins font-medium text-[26px] text-[#000000] text-center"
              style={{ maxWidth: 850, lineHeight: '1.577em', letterSpacing: '-0.52px' }}
            >
              Unlike traditional consultancies that stop at visa filing, Esante works as your
              on-ground support system in Australia, ensuring you save money, avoid mistakes,
              and build a future-ready pathway aligned with Australia's education and migration
              framework.
            </p>
          </section>

          {/* FAQ — studying in Australia & student support */}
          <section
            className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-[24px] md:px-[60px] lg:px-[100px] gap-[24px]"
            aria-labelledby="ancillary-faq-heading"
          >
            <h2
              id="ancillary-faq-heading"
              className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
              style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
            >
              Frequently Asked Questions About Studying in Australia &amp; Student Support Services
            </h2>

            <div className="w-full max-w-[1064px] flex flex-col">
              {ANCILLARY_FAQ_ITEMS.map((item, index) => {
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
                      aria-controls={`ancillary-faq-answer-${index}`}
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
                            id={`ancillary-faq-answer-${index}`}
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
              <p
                className="font-poppins text-[18px] text-[#00352B] leading-[1.5]"
              >
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

        </div>
      </main>

      <EsanteBanner />
      <Footer />
    </div>
  );
}
