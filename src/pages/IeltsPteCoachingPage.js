import React, { useRef, useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';

/* ── Local images ── */
const imgCoach  = '/images/ielts-coach.png';
const joshVideoUrl = 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/ielts-josh-video.mp4';

/* Hero background is a local asset (1440×982 building photo) */
const HERO_BG = '/images/ielts-hero-bg.png';

/* Figma hero frame */
const HERO_W = 1440;
const HERO_H = 982;
/* Figma coach (flag person): 644×882; frame enforces aspect-ratio 46/63 */
const COACH_W = 644;

/* ── Testimonial data — local images from public/images ── */
const CARDS = [
  {
    video: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/ielts-testi-1.mp4', quote: '"Changed how I study for IELTS entirely."',              uni: 'The University of Melbourne',
  },
  {
    video: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/ielts-testi-2.mp4', quote: '"My PTE score went from 58 to 79 in 6 weeks."',         uni: 'University of Sydney',
  },
  {
    video: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/ielts-testi-3.mp4', quote: '"Genuine coaching, real confidence builder."',           uni: 'Queensland University of Technology',
  },
  {
    /* Card 4 — plain image, no overlay (play button) */
    video: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/ielts-testi-4.mp4',
    city: '', quote: '', uni: '',                                                                                                                    hasOverlay: false,
  },
  {
    img:  '/images/ielts-testi-5.png',
    city: 'Adelaide (South Australia)',    quote: '"From Band 6 to Band 8 \u2014 Josh\'s methods work."',  uni: 'University of Adelaide',              hasOverlay: true,
  },
  {
    img:  '/images/ielts-testi-1.png',
    city: 'Melbourne (State of Victoria)', quote: '"Incredible support throughout my IELTS journey."',     uni: 'The University of Melbourne',         hasOverlay: true,
  },
  {
    img:  '/images/ielts-testi-2.png',
    city: 'Melbourne (State of Victoria)', quote: '"Best decision I made before coming to Australia."',    uni: 'The University of Melbourne',         hasOverlay: true,
  },
];

const CARD_W   = 290;
const CARD_H   = 460;
const CARD_GAP = 26;
const VISIBLE  = 4;

const IELTS_PTE_FAQ_ITEMS = [
  {
    question: 'Is IELTS or PTE required to study in Australia?',
    answer:
      'Yes, most universities in Australia require IELTS or PTE scores as proof of English proficiency. The required score depends on the course and institution.',
  },
  {
    question: 'Does Esante provide free IELTS and PTE coaching?',
    answer:
      'Yes, Esante offers FREE IELTS and PTE coaching as part of its end-to-end student support services, helping students prepare for both exams and real-life communication in Australia.',
  },
  {
    question: 'Who will train me for IELTS and PTE at Esante?',
    answer:
      'You will be trained by a CELTA & TEFL-certified communication coach with international teaching experience, focusing on real-world English and test performance.',
  },
  {
    question: 'What makes Esante’s IELTS/PTE coaching different?',
    answer:
      'Esante’s coaching goes beyond exam preparation. It focuses on improving real communication skills, Australian accent understanding, interview confidence, and workplace English.',
  },
  {
    question: 'Can I prepare for IELTS or PTE without coaching?',
    answer:
      'Yes, but professional coaching significantly improves your chances of achieving higher band scores faster by providing structured learning and expert feedback.',
  },
  {
    question: 'What is a good IELTS score for Australia?',
    answer:
      'Most universities require an IELTS score of 6.0 to 7.0, but competitive courses may require higher scores. Esante helps students achieve their target bands effectively.',
  },
  {
    question: 'Is PTE easier than IELTS for Australia?',
    answer:
      'It depends on the student’s strengths. Some find PTE easier due to its computer-based format, while others prefer IELTS. Esante helps you choose the best option.',
  },
  {
    question: 'How long does it take to prepare for IELTS or PTE?',
    answer:
      'Preparation time varies, but most students take 4–8 weeks with proper guidance and practice.',
  },
  {
    question: 'Do you provide speaking practice for IELTS and PTE?',
    answer:
      'Yes, Esante focuses heavily on speaking practice, including real-time feedback, pronunciation improvement, and confidence-building exercises.',
  },
  {
    question: 'Will this coaching help me after I reach Australia?',
    answer:
      'Yes, the coaching is designed to help students beyond exams — including job interviews, workplace communication, and daily conversations in Australia.',
  },
  {
    question: 'Can beginners join IELTS/PTE coaching at Esante?',
    answer:
      'Yes, students at all levels — beginners to advanced — can join and improve their English skills with structured support.',
  },
  {
    question: 'Do you help with multiple attempts if I don’t get my target score?',
    answer:
      'Yes, Esante supports students with re-attempt strategies, feedback, and improvement plans to help achieve better scores.',
  },
  {
    question: 'Why is English communication important in Australia?',
    answer:
      'Strong English skills are essential for academic success, part-time jobs, interviews, and social integration in Australia.',
  },
  {
    question: 'How do I start IELTS/PTE coaching with Esante?',
    answer:
      'Simply fill out the enquiry form, and an Esante counsellor will guide you and connect you with the coaching team.',
  },
  {
    question: 'Does Esante help with interview and job communication skills?',
    answer:
      'Yes, Esante prepares students for job interviews, workplace communication, and real-life situations in Australia.',
  },
];

function IeltsPteCoachingPage() {
  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const [tIdx, setTIdx] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [joshIsPlaying, setJoshIsPlaying] = useState(false);
  const [playingTestimonials, setPlayingTestimonials] = useState(() =>
    CARDS.map(() => false)
  );
  const joshVideoRef = useRef(null);
  const testimonialVideoRefs = useRef([]);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };
  const maxIdx = CARDS.length - VISIBLE;
  const prevT  = () => setTIdx(i => Math.max(0, i - 1));
  const nextT  = () => setTIdx(i => Math.min(maxIdx, i + 1));

  const pauseAllExcept = (targetType, targetIndex = null) => {
    if (joshVideoRef.current && targetType !== 'josh') {
      joshVideoRef.current.pause();
      setJoshIsPlaying(false);
    }

    testimonialVideoRefs.current.forEach((video, index) => {
      if (!video || (targetType === 'testimonial' && targetIndex === index)) return;
      video.pause();
    });

    setPlayingTestimonials((prev) => prev.map((_, index) => (
      targetType === 'testimonial' && targetIndex === index ? true : false
    )));
  };

  const toggleJoshVideo = () => {
    const video = joshVideoRef.current;
    if (!video) return;

    if (video.paused) {
      pauseAllExcept('josh');
      video.play().then(() => setJoshIsPlaying(true)).catch(() => {});
      return;
    }

    video.pause();
    setJoshIsPlaying(false);
  };

  const toggleTestimonialVideo = (index) => {
    const video = testimonialVideoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      pauseAllExcept('testimonial', index);
      video.play().then(() => {
        setPlayingTestimonials((prev) => prev.map((value, idx) => (idx === index ? true : value)));
      }).catch(() => {});
      return;
    }

    video.pause();
    setPlayingTestimonials((prev) => prev.map((value, idx) => (idx === index ? false : value)));
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white">
      <Header />

      <div className="w-full overflow-x-hidden">

        {/* ══════════════════════════════════════════════════════════
            HERO — Figma: bg 1440×982 (aspect-ratio 349/238), coach 644×882 (46/63)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden bg-white">
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: '349 / 238',
            }}
          >
            <img
              src={HERO_BG}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover object-top pointer-events-none"
            />

            {/* Coach — 644×882 @ left 796 top 100; % so layout scales with frame */}
            <div
              className="absolute z-[2] overflow-hidden pointer-events-none"
              style={{
                left: `${(796 / HERO_W) * 100}%`,
                top: `${(100 / HERO_H) * 100}%`,
                width: `${(COACH_W / HERO_W) * 100}%`,
                aspectRatio: '46 / 63',
              }}
            >
              <img
                alt=""
                src={imgCoach}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div
              className="absolute z-[5] flex max-w-[min(640px,48vw)] flex-col items-start"
              style={{
                left: `${(298 / HERO_W) * 100}%`,
                top: `${(150 / HERO_H) * 100}%`,
              }}
            >
              <p
                className="font-poppins font-medium text-primary underline decoration-solid tracking-[-0.56px]"
                style={{ fontSize: 28, lineHeight: '1.1', marginBottom: 36 }}
              >
                IELTS &amp; PTE Training
              </p>

              <p
                className="font-poppins font-semibold italic text-accent"
                style={{ fontSize: 75, lineHeight: '0.95', margin: '0 0 0 0' }}
              >
                Free IELTS &amp;
              </p>
              <p
                className="font-poppins font-semibold italic text-accent"
                style={{ fontSize: 75, lineHeight: '0.95', margin: '0 0 22px 0' }}
              >
                PTE Training
              </p>

              <p
                className="font-poppins font-semibold italic text-primary"
                style={{ fontSize: 35, lineHeight: '1.12', letterSpacing: '-0.02em', margin: '0 0 18px 0' }}
              >
                By a Native{' '}
                <span className="text-accent">Australian Coach</span>
              </p>

              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center justify-center px-[12px] py-[4px] bg-accent rounded-[16px] border-0 cursor-pointer"
              >
                <span
                  className="font-poppins font-medium text-cream text-center leading-[20px]"
                  style={{ fontSize: 14 }}
                >
                  Get Free Guidance from Esante
                </span>
              </button>
            </div>
          </div>
        </section>

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[84px] box-border overflow-x-hidden">
        {/* ══════════════════════════════════════════════════════════
            MEET JOSHUA SECTION
            Figma: photo 259:1501 at left=84 top=1118 (504×570)
            Title 258:1521 at left=627 | Gap photo→text = 39px
            Bio 259:1504 | Bullets 259:1506
            mt = 1118 − 968 = 150px (968 = hero bottom from white-rect top)
        ══════════════════════════════════════════════════════════ */}
        <section
          className="flex w-full flex-col items-start gap-10 mt-[150px] mb-[200px] lg:flex-row lg:gap-[39px]"
        >
          {/* Josh photo — 259:1501 504×570, rounded-20, crop h=207.24% l=-58.12% t=-5% w=219.29% */}
          <div
            className="relative shrink-0 overflow-hidden w-full max-w-[504px]"
            style={{ height: 570, borderRadius: 20 }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <video
                ref={joshVideoRef}
                src={joshVideoUrl}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            <button
              type="button"
              onClick={toggleJoshVideo}
              className="absolute inset-0 z-[2] flex items-center justify-center"
              aria-label={joshIsPlaying ? 'Pause Josh video' : 'Play Josh video'}
            >
              {!joshIsPlaying && (
                <span className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-white/90 text-[#FF3300] shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 4.05C6 2.97 7.2 2.32 8.1 2.92L18.68 9.87C19.49 10.4 19.49 11.6 18.68 12.13L8.1 19.08C7.2 19.68 6 19.03 6 17.95V4.05Z" fill="currentColor" />
                  </svg>
                </span>
              )}
            </button>
          </div>

          {/* Text column */}
          <div className="flex min-w-0 flex-1 flex-col items-start">

            {/* Title — 258:1521: "Meet <bold-italic-red>Joshua...</red>" 43px / "Your..." 29px */}
            <p
              className="font-poppins font-normal text-black mb-0"
              style={{ fontSize: 43, lineHeight: '1.62' }}
            >
              {'Meet '}
              <span className="font-bold italic text-accent">Joshua Michael William G.</span>
            </p>
            <p
              className="font-poppins font-normal text-black mb-[20px]"
              style={{ fontSize: 29, lineHeight: '1.62' }}
            >
              Your Communication &amp; IELTS Coach 🇦🇺
            </p>

            {/* Bio — 259:1504: 23px / leading-[32px] / tracking-[-0.15px] */}
            <div
              className="font-poppins font-normal text-black"
              style={{ fontSize: 23, lineHeight: '32px', letterSpacing: '-0.15px' }}
            >
              <p className="mb-0">
                {'Josh is a '}
                <span className="font-semibold text-accent">
                  CELTA &amp; TEFL-certified English communication coach
                </span>
                {' with over '}
                <span className="font-semibold text-accent">5+ years of teaching experience</span>
                {', working with students from all over the world.'}
              </p>
              <p className="mb-0" style={{ lineHeight: '32px' }}>&nbsp;</p>
              <p className="mb-[16px]">
                {'He is the founder of '}
                <span className="font-semibold text-accent">Communication Mastery</span>
                {', a global learning community with '}
                <span className="font-semibold text-accent">1,700+ members</span>
                {', where he helps learners:'}
              </p>
            </div>

            {/* Bullet list — 259:1506: 23px list-disc ms-[34.5px] */}
            <ul
              className="font-poppins font-normal text-black list-disc list-outside"
              style={{ fontSize: 23, letterSpacing: '-0.15px', lineHeight: '42px', paddingLeft: '34.5px' }}
            >
              <li>Speak English fluently and naturally</li>
              <li>Improve IELTS &amp; PTE speaking performance</li>
              <li>Build confidence for interviews and real conversations</li>
              <li>Communicate clearly in professional and social settings</li>
            </ul>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            TESTIMONIAL CAROUSEL
            Figma: 259:1529  1240×400  left=84  4 visible cards 290×400 gap=26
            Card: bg image | top row (play 35×35 + city label) | gradient bottom 130px
        ══════════════════════════════════════════════════════════ */}
        <section className="relative mb-[40px] w-full overflow-hidden">

          {/* Left nav arrow */}
          <button
            type="button"
            onClick={prevT}
            disabled={tIdx === 0}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 disabled:opacity-25 transition-opacity cursor-pointer"
            aria-label="Previous testimonials"
          >
            <svg width="34" height="44" viewBox="0 0 34 44" fill="none" aria-hidden>
              <polygon points="34,0 34,44 0,22" fill="#FFFFFF" />
            </svg>
          </button>

          {/* Sliding track — exactly 4 cards wide */}
          <div className="max-w-full overflow-hidden" style={{ width: 'min(1238px, 100%)' }}>
            <div
              className="flex"
              style={{
                gap: CARD_GAP,
                transform: `translateX(-${tIdx * (CARD_W + CARD_GAP)}px)`,
                transition: 'transform 0.4s ease',
              }}
            >
              {CARDS.map((c, i) => (
                <div
                  key={i}
                  className="relative shrink-0 overflow-hidden bg-black"
                  style={{ width: CARD_W, height: CARD_H, borderRadius: 15 }}
                >
                  {/* Card background */}
                  {c.video ? (
                    <>
                      <video
                        ref={(element) => { testimonialVideoRefs.current[i] = element; }}
                        src={c.video}
                        className="absolute inset-0 w-full h-full object-contain rounded-[15px] bg-black"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 pointer-events-none" />
                      <button
                        type="button"
                        onClick={() => toggleTestimonialVideo(i)}
                        className="absolute inset-0 z-10 flex items-center justify-center"
                        aria-label={playingTestimonials[i] ? `Pause testimonial video ${i + 1}` : `Play testimonial video ${i + 1}`}
                      >
                        {!playingTestimonials[i] && (
                          <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white/90 text-[#FF3300] shadow-[0_16px_36px_rgba(0,0,0,0.26)]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                              <path d="M5 3.35C5 2.45 6 1.91 6.75 2.41L15.57 8.23C16.24 8.67 16.24 9.67 15.57 10.11L6.75 15.93C6 16.43 5 15.89 5 14.99V3.35Z" fill="currentColor" />
                            </svg>
                          </span>
                        )}
                      </button>
                    </>
                  ) : (
                    <img
                      src={c.img}
                      alt={c.city}
                      className="absolute inset-0 w-full h-full object-cover rounded-[15px] pointer-events-none"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right nav arrow */}
          <button
            type="button"
            onClick={nextT}
            disabled={tIdx >= maxIdx}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 disabled:opacity-25 transition-opacity cursor-pointer"
            aria-label="Next testimonials"
          >
            <svg width="34" height="44" viewBox="0 0 34 44" fill="none" aria-hidden>
              <polygon points="0,0 0,44 34,22" fill="rgba(255,255,255,0.64)" />
            </svg>
          </button>
        </section>

        {/* ══════════════════════════════════════════════════════════
            QUOTE BLOCK
            Figma: 259:1594  1232×141  left=92  24px SemiBold leading-[32px]
        ══════════════════════════════════════════════════════════ */}
        <p
          className="font-poppins font-semibold text-black mb-[36px]"
          style={{
            fontSize: 24,
            lineHeight: '32px',
            letterSpacing: '-0.15px',
            marginBottom: '140px',
          }}
        >
          {'At '}
          <span className="italic">Esante</span>
          {', '}
          <span className="text-accent">Josh </span>
          {'plays a critical role \u2014 not just in helping students '}
          <span className="text-accent">achieve their target IELTS/PTE scores, </span>
          {'but in preparing them for '}
          <span className="text-accent">real Australian life.</span>
        </p>

        {/* ══════════════════════════════════════════════════════════
            WHY OUR COACHING IS UNMATCHED
            Figma: 257:1568 heading 322×216 left=92 | 259:1597 bullets 883×167 left=432
            Heading: "Why Our" (Regular) / "Coaching is" (SemiBold Italic #f30) /
                     "Unmatched" (SemiBold Italic #f30) + ":" (Regular)  — 45px
            Bullets: 22px Regular leading-[1.2 / 1.36 / 1.35]
        ══════════════════════════════════════════════════════════ */}
        <section
          className="flex w-full flex-col items-start gap-8 mb-[100px] lg:flex-row"
        >
          {/* Heading column */}
          <div
            className="font-poppins shrink-0"
            style={{ fontSize: 45, letterSpacing: '-0.15px', width: 322, color: '#00352B' }}
          >
            <p className="font-normal mb-0" style={{ lineHeight: '1.2' }}>Why Our</p>
            <p className="font-semibold italic text-accent mb-0" style={{ lineHeight: '1.2' }}>Coaching is</p>
            <p className="mb-0" style={{ lineHeight: '1.2' }}>
              <span className="font-semibold italic text-accent">Unmatched</span>
              <span className="font-normal">:</span>
            </p>
          </div>

          {/* Bullets column */}
          <div
            className="font-poppins font-normal text-black flex flex-col min-w-0"
            style={{ fontSize: 22, letterSpacing: '-0.15px' }}
          >
            <p className="mb-[13px]" style={{ lineHeight: '1.2' }}>
              ✅ $0 Cost: Professional coaching usually costs $50/hour. You get it FREE.
            </p>
            <p className="mb-[8px]" style={{ lineHeight: '1.36' }}>
              ✅ Real-Time Feedback: Live sessions focusing on pronunciation, vocabulary,<br />
              and &quot;Band 8&quot; sentence structures.
            </p>
            <p style={{ lineHeight: '1.35' }}>
              ✅ Beyond the Test: Josh prepares you for life in Australia-teaching you the slang,<br />
              etiquette, and confidence needed to ace job interviews after you land.
            </p>
          </div>
        </section>

        {/* FAQ — IELTS & PTE coaching for Australia */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-[24px] md:px-[60px] lg:px-[92px] gap-[24px] mb-[48px]"
          aria-labelledby="ielts-pte-faq-heading"
        >
          <h2
            id="ielts-pte-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About IELTS &amp; PTE Coaching for Australia
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {IELTS_PTE_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`ielts-pte-faq-answer-${index}`}
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
                          id={`ielts-pte-faq-answer-${index}`}
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
                Book Free IELTS / PTE Guidance
              </span>
            </button>
          </div>
        </section>

        {/* ── CTA BANNER (reusable) ── */}
        <EsanteBanner />

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default IeltsPteCoachingPage;
