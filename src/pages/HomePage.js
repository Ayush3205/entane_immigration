import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Reusable/Header';
import DreamSection from '../components/Home-Page/DreamSection';
import AustraliaSection from '../components/Home-Page/AustraliaSection';
import ServiceCards from '../components/Home-Page/ServiceCards';
import WhatEsanteDoes from '../components/Home-Page/WhatEsanteDoes';
import FastTrackDegree from '../components/Home-Page/FastTrackDegree';
import SkillsShortage from '../components/Home-Page/SkillsShortage';
import FindYourPlace from '../components/Home-Page/FindYourPlace';
import RealStories from '../components/Home-Page/RealStories';
import LatestNews from '../components/Home-Page/LatestNews';
import EsanteBanner from '../components/Reusable/EsanteBanner';
import Footer from '../components/Reusable/Footer';
import ResponsiveHeroVideo from '../components/Home-Page/ResponsiveHeroVideo';
import { HERO_DESKTOP_VIDEO_URL } from '../components/Home-Page/heroVideoAssets';

const MORPH_END    = 800;  // scroll px that span the full morph animation
// Navbar slides up + fades out over first HEADER_FADE px of scroll
// const HEADER_FADE  = 120;
const HERO_VIDEO_MUTE_PROGRESS = 0.85;
const HERO_MOBILE_VIDEO_URL = 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/Hero-Mobile.mp4';
const HERO_MOBILE_MAX_WIDTH = 767;

const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutCubic   = (t) => 1 - Math.pow(1 - t, 3);



const HOME_FAQ_ITEMS = [
  {
    question: 'Why study in Australia as an international student?',
    answer:
      'Australia offers globally recognised education, strong career opportunities, high quality of life, and clear pathways to work and migration after study.',
  },
  {
    question: 'How can I study in Australia from India or other countries?',
    answer:
      'You need to choose a course, apply to a university, receive an offer letter, and then apply for a student visa. Esante guides you through the entire process end-to-end.',
  },
  {
    question: 'What does Esante do for students?',
    answer:
      'Esante helps students with course selection, university applications, SOP writing, visa processing, accommodation, part-time jobs, and post-arrival support in Australia.',
  },
  {
    question: 'Is Esante a migration agent or education consultant?',
    answer:
      'Esante is an Australia-focused education and migration partner that provides complete support from admission to settlement in Australia.',
  },
  {
    question: 'How much does it cost to study in Australia?',
    answer:
      'Tuition fees typically range from AUD 20,000 to AUD 45,000 per year depending on the course and university. Living costs vary by city and lifestyle.',
  },
  {
    question: 'Can I work while studying in Australia?',
    answer:
      'Yes, international students can work part-time while studying. This helps cover living expenses and gain local work experience.',
  },
  {
    question: 'What are the benefits of studying in Australia?',
    answer:
      'Benefits include high-quality education, post-study work rights, multicultural environment, strong job market, and migration opportunities.',
  },
  {
    question: 'What is the Australia student visa process?',
    answer:
      'The process includes receiving an offer letter, preparing a Genuine Student (GS) statement, submitting financial documents, and applying for a student visa.',
  },
  {
    question: 'What is a Genuine Student (GS) requirement?',
    answer:
      'It is a key visa requirement where you must prove your intention to study genuinely and how your course aligns with your future career.',
  },
  {
    question: 'Can I get PR (Permanent Residency) after studying in Australia?',
    answer:
      'Yes, many students transition to PR through skilled migration pathways after gaining relevant qualifications and work experience.',
  },
  {
    question: 'Which courses are in demand in Australia?',
    answer:
      'Popular in-demand fields include Nursing, IT, Engineering, Hospitality, and Trades aligned with Australia’s skilled occupation list.',
  },
  {
    question: 'How does Esante help with migration pathways?',
    answer:
      'Esante provides guidance on course selection aligned with PR pathways, skilled occupation lists, and long-term migration planning.',
  },
  {
    question: 'Do you help with accommodation in Australia?',
    answer:
      'Yes, Esante helps students secure verified accommodation at better rates through trusted partner networks.',
  },
  {
    question: 'Can you help me get a part-time job in Australia?',
    answer:
      'Yes, Esante supports students with job preparation, CV building, interview training, and access to verified employers.',
  },
  {
    question: 'Do you provide IELTS or PTE training?',
    answer:
      'Yes, Esante offers free IELTS and PTE training with expert coaching to help students achieve their required scores.',
  },
  {
    question: 'What support do I get after arriving in Australia?',
    answer:
      'Esante provides post-arrival support including SIM setup, bank account, TFN, accommodation, job assistance, and daily life guidance.',
  },
  {
    question: 'Is studying in Australia worth it?',
    answer:
      'Yes, Australia provides strong return on investment through global exposure, job opportunities, and migration pathways.',
  },
  {
    question: 'How long does it take to process an Australia student visa?',
    answer:
      'Visa processing time varies but typically ranges from a few weeks to a couple of months depending on your profile.',
  },
  {
    question: 'Why choose Esante over other consultancies?',
    answer:
      'Esante provides end-to-end support including on-ground assistance in Australia, unlike traditional agents who stop after visa approval.',
  },
  {
    question: 'How can I start my journey to study in Australia with Esante?',
    answer:
      'You can fill out the enquiry form on this page, and an Esante counsellor will guide you step-by-step.',
  },
];

function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [heroVideoUrl, setHeroVideoUrl] = useState(HERO_DESKTOP_VIDEO_URL);

  const toggleHomeFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Hero morph animation uses refs + direct DOM; FAQ uses React state above
  const headerWrapRef   = useRef(null);
  const morphBoxRef     = useRef(null);
  const morphVideoRef   = useRef(null);
  const dreamStickyRef  = useRef(null);
  const morphTargetRef  = useRef(null);
  const autoScrollTargetRef = useRef(null);
  const autoScrollState = useRef({ lastY: 0, active: false });
  const heroAudioAllowedRef = useRef(true);
  const heroScrollProgressRef = useRef(0);
  const syncHeroVideoRef = useRef(() => {});

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Set transparent phase on mount so navbar starts with no background
    if (headerWrapRef.current) {
      headerWrapRef.current.setAttribute('data-nav-phase', 'transparent');
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const getViewportWidth = () => {
      const candidates = [
        window.visualViewport?.width,
        window.innerWidth,
        document.documentElement?.clientWidth,
        window.screen?.width,
      ].filter((value) => Number.isFinite(value) && value > 0);

      return candidates.length ? Math.min(...candidates) : window.innerWidth;
    };

    const syncHeroVideoSource = () => {
      const viewportWidth = getViewportWidth();
      const nextSrc = viewportWidth <= HERO_MOBILE_MAX_WIDTH
        ? HERO_MOBILE_VIDEO_URL
        : HERO_DESKTOP_VIDEO_URL;
      setHeroVideoUrl((current) => (current === nextSrc ? current : nextSrc));
    };

    syncHeroVideoSource();

    const rafId = window.requestAnimationFrame(syncHeroVideoSource);
    const timeoutId = window.setTimeout(syncHeroVideoSource, 250);
    window.addEventListener('resize', syncHeroVideoSource, { passive: true });
    window.addEventListener('orientationchange', syncHeroVideoSource);
    window.visualViewport?.addEventListener('resize', syncHeroVideoSource);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.removeEventListener('resize', syncHeroVideoSource);
      window.removeEventListener('orientationchange', syncHeroVideoSource);
      window.visualViewport?.removeEventListener('resize', syncHeroVideoSource);
    };
  }, []);

  // Autoplay hero morph video
  useEffect(() => {
    const video = morphVideoRef.current;
    if (!video || !heroVideoUrl) return;

    const interactionEvents = ['pointerdown', 'touchstart', 'keydown'];
    const setMutedState = (shouldMute) => {
      video.muted = shouldMute;
      video.defaultMuted = shouldMute;
      video.volume = shouldMute ? 0 : 1;
    };

    const syncHeroVideoState = () => {
      const raw = heroScrollProgressRef.current;
      const isPageVisible = document.visibilityState === 'visible';
      const shouldPauseHeroVideo = !isPageVisible || raw >= 1;
      const shouldMuteHeroVideo =
        shouldPauseHeroVideo ||
        raw >= HERO_VIDEO_MUTE_PROGRESS ||
        !heroAudioAllowedRef.current;

      setMutedState(shouldMuteHeroVideo);

      if (shouldPauseHeroVideo) {
        if (!video.paused) video.pause();
        return;
      }

      if (!video.paused) return;

      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          if (shouldMuteHeroVideo) return;
          heroAudioAllowedRef.current = false;
          setMutedState(true);
          video.play().catch(() => {});
        });
      }
    };

    syncHeroVideoRef.current = syncHeroVideoState;

    const unlockAudio = () => {
      heroAudioAllowedRef.current = true;
      syncHeroVideoState();
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, unlockAudio);
      });
    };

    const pauseHeroVideo = () => {
      setMutedState(true);
      if (!video.paused) video.pause();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') {
        pauseHeroVideo();
        return;
      }
      syncHeroVideoState();
    };

    syncHeroVideoState();
    video.addEventListener('loadeddata', syncHeroVideoState);
    video.addEventListener('canplay', syncHeroVideoState);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', syncHeroVideoState);
    window.addEventListener('pagehide', pauseHeroVideo);
    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, unlockAudio, { once: true });
    });

    return () => {
      syncHeroVideoRef.current = () => {};
      video.removeEventListener('loadeddata', syncHeroVideoState);
      video.removeEventListener('canplay', syncHeroVideoState);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', syncHeroVideoState);
      window.removeEventListener('pagehide', pauseHeroVideo);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, unlockAudio);
      });
    };
  }, [heroVideoUrl]);

  // Single RAF loop — all DOM mutations in one tick, zero React re-renders
  useEffect(() => {
    let cachedHeaderH    = 0;
    let cachedTargetRect = null;
    let dreamCardsCache  = null;
    let rafId;

    // Bust the cached rect on resize or any layout-changing event
    const onResize = () => { cachedTargetRect = null; cachedHeaderH = 0; dreamCardsCache = null; };
    window.addEventListener('resize', onResize);

    const tick = () => {
      const y = window.scrollY || document.documentElement.scrollTop;

      // ── READ PHASE (before any write) ──
      // Re-cache target rect from a fresh read each frame while the morph is
      // happening (raw > 0 && raw < 1) so the translation/scale stays accurate
      // even if layout reflows (font load, image load, etc.) shift things.
      if (morphTargetRef.current) {
        const r = morphTargetRef.current.getBoundingClientRect();
        if (r.width > 0) cachedTargetRect = r;
      }
      if (cachedHeaderH === 0 && headerWrapRef.current) {
        cachedHeaderH = headerWrapRef.current.offsetHeight || 120;
      }

      const raw = Math.max(0, Math.min(1, y / MORPH_END));
      const pin = Math.min(y, MORPH_END);
      const vw  = window.innerWidth;
      const vh  = window.innerHeight;
      heroScrollProgressRef.current = raw;
      syncHeroVideoRef.current();

      // 0. Auto-Snap to Australia Section after Morph (Disabled to remove lag)
      autoScrollState.current.lastY = y;

      // 1. Header scroll state is now managed inside Header.js itself —
      //    no DOM manipulation needed here.

      // 2. Dream section: sub-pixel-accurate pin (no Math.round → no jitter)
      if (dreamStickyRef.current) {
        dreamStickyRef.current.style.transform = `translate3d(0,${pin}px,0)`;
      }

      // 3. Morph target card: crossfade reveal in the final 20 % of the animation
      //    Starts appearing at 80 %, fully opaque at 97 %
      if (morphTargetRef.current) {
        const revealP = Math.max(0, Math.min(1, (raw - 0.80) / 0.17));
        morphTargetRef.current.style.opacity = easeOutCubic(revealP).toFixed(4);
      }

      // 4. Hero morph box — the main act
      const box = morphBoxRef.current;
      if (box) {
        if (raw <= 0) {
          // ── Resting state (top of page) ──
          box.style.transform     = 'translate3d(0,0,0) scale(1,1)';
          box.style.borderRadius  = '0px';
          box.style.opacity       = '1';
          box.style.visibility    = 'visible';
          box.style.boxShadow     = 'none';
          box.style.pointerEvents = 'none';
        } else if (raw >= 1) {
          // ── Fully morphed — hide the box so the card shows through ──
          box.style.opacity       = '0';
          box.style.visibility    = 'hidden';
          box.style.pointerEvents = 'none';
        } else {
          // ── Active morph ──
          // easeInOutCubic: box stays proportional to its position throughout —
          // large while far from card, card-sized when it arrives.
          // This gives the "entering / exiting exactly through the slot" effect.
          const t = easeInOutCubic(raw);

          let tx = 0, ty = 0, sx = 1, sy = 1;

          if (cachedTargetRect && cachedTargetRect.width > 0) {
            // Card centre in the viewport
            const cardCx = cachedTargetRect.left + cachedTargetRect.width  / 2;
            const cardCy = cachedTargetRect.top  + cachedTargetRect.height / 2;
            // Morph-box centre is always the viewport centre (position:fixed)
            const boxCx  = vw / 2;
            const boxCy  = vh / 2;

            // Translate the box centre to meet the card centre
            tx = (cardCx - boxCx) * t;
            ty = (cardCy - boxCy) * t;
            // Scale the box to exactly match the card's dimensions
            sx = 1 + (cachedTargetRect.width  / vw - 1) * t;
            sy = 1 + (cachedTargetRect.height / vh - 1) * t;
          } else {
            sx = sy = 1 - t * 0.5; // fallback: plain shrink
          }

          // Border-radius: 0 → 15 px (matches the updated dream card)
          const radius = t * 15;

          // Fade: video stays crystal-clear until 80 %, then crossfades
          // out cleanly as the card fades in (both driven by the same progress)
          const fadeP   = Math.max(0, (raw - 0.80) / 0.20);
          const opacity = Math.max(0, 1 - easeOutCubic(fadeP));

          // Cinematic lift-shadow: peaks at ~40 % of the animation,
          // clears well before the fade so there's no halo during the crossfade
          const shadowEnvelope = Math.max(0, 1 - Math.max(0, (raw - 0.60) / 0.25));
          const shadowPeak     = Math.sin(Math.PI * Math.min(raw / 0.60, 1)) * shadowEnvelope;

          box.style.transform     = `translate3d(${tx.toFixed(2)}px,${ty.toFixed(2)}px,0) scale(${sx.toFixed(5)},${sy.toFixed(5)})`;
          box.style.borderRadius  = `${radius.toFixed(2)}px`;
          box.style.opacity       = opacity.toFixed(4);
          box.style.visibility    = 'visible';
          box.style.boxShadow     = `0 ${(28 * shadowPeak).toFixed(1)}px ${(64 * shadowPeak).toFixed(1)}px rgba(0,0,0,${(0.30 * shadowPeak).toFixed(3)})`;
          box.style.pointerEvents = 'none';
        }
      }

      // 5. Dream cards: one CSS-var write per frame drives all cards atomically —
      //    eliminates per-card DOM mutations and scroll-jitter entirely.
      if (!dreamCardsCache && dreamStickyRef.current) {
        dreamCardsCache = dreamStickyRef.current.querySelector('.dream-section');
      }
      if (dreamCardsCache) {
        if (raw >= 1) {
          dreamCardsCache.style.setProperty('--dcards-s', '1');
          dreamCardsCache.style.setProperty('--dcards-o', '1');
        } else {
          const s = (0.05 + 0.95 * easeInOutCubic(raw)).toFixed(4);
          const o = Math.min(1, raw * 3).toFixed(4);
          dreamCardsCache.style.setProperty('--dcards-s', s);
          dreamCardsCache.style.setProperty('--dcards-o', o);
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="App">
      <Header headerRef={headerWrapRef} />

      <div
        ref={morphBoxRef}
        className="hero-morph-image"
        style={{
          left: 0, top: 0,
          width: '100vw', height: '100vh',
          borderRadius: 0, opacity: 1, visibility: 'visible',
          backgroundImage: 'none',
        }}
      >
        {heroVideoUrl && (
          <ResponsiveHeroVideo
            key={heroVideoUrl}
            ref={morphVideoRef}
            className="hero-morph-video"
            src={heroVideoUrl}
          />
        )}
      </div>

      <main className="main-content" style={{ paddingTop: 0 }}>
        <div className="dream-scroll-container" style={{ paddingBottom: MORPH_END }}>
          <div ref={dreamStickyRef} className="dream-sticky-wrap">
            <DreamSection
              morphTargetRef={morphTargetRef}
              heroVideoUrl={heroVideoUrl}
            />
          </div>
        </div>
        <div ref={autoScrollTargetRef}>
          <AustraliaSection />
        </div>
        <ServiceCards />
        <WhatEsanteDoes />
        <FastTrackDegree />
        <SkillsShortage />
        <FindYourPlace />
        <RealStories />
        <LatestNews />

        {/* FAQ — studying in Australia & migration with Esante */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
          aria-labelledby="home-faq-heading"
        >
          <h2
            id="home-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Studying in Australia &amp; Migration with Esante
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {HOME_FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="flex flex-col items-center w-full">
                  {index > 0 && (
                    <div className="w-full h-[1px] bg-[#00352B]/10" />
                  )}
                  <button
                    type="button"
                    onClick={() => toggleHomeFaq(index)}
                    className="w-full flex items-start gap-[24px] py-[24px] text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-answer-${index}`}
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
                          id={`home-faq-answer-${index}`}
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

          
        </section>

        <EsanteBanner
          line1=""
          line2="Ready to Start your Australian Journey?"
          line3=""
          subtext="Let our experts in Mumbai and Brisbane guide you every step of the way."
        />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
