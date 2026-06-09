import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FOUNDER_IMAGE_LAYOUT = {
  frameTopOffset: 66,
  frameWidth: 472,
  frameHeight: 700,
  frameAspectRatio: '33 / 46',
  backgroundTop: 171,
  backgroundWidth: 472,
  backgroundHeight: 489,
  imageTop: 10,
  imageWidth: 472,
  imageHeight: 650,
};

const TeamCard = ({ image, name, title, description, contentScale = 1, contentHoverScale = 1.05 }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.killTweensOf(overlayRef.current);
    gsap.killTweensOf(contentRef.current);
    gsap.to(contentRef.current, { scale: contentHoverScale, duration: 0.45, ease: "power2.out" });
    gsap.to(overlayRef.current, { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" });
  };
  
  const handleMouseLeave = () => {
    gsap.killTweensOf(overlayRef.current);
    gsap.killTweensOf(contentRef.current);
    gsap.to(contentRef.current, { scale: contentScale, duration: 0.35, ease: "power2.out" });
    gsap.to(overlayRef.current, { y: 20, autoAlpha: 0, duration: 0.3, ease: "power2.in" });
  };

  return (
    <div 
      className="relative h-[460px] w-full max-w-[562px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[20px] group sm:h-[560px] sm:rounded-[24px] lg:h-[641px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={contentRef}
        className="absolute inset-0 overflow-hidden rounded-[24px]"
        style={{ transform: `scale(${contentScale})`, transformOrigin: 'center bottom' }}
      >
        <img
          className="w-full h-full object-cover object-top"
          src={image}
          alt={name}
        />

        {/* Default Overlay */}
        <div className="absolute bottom-5 left-5 right-5 flex min-h-[92px] flex-col justify-center rounded-[18px] bg-accent/[0.68] px-6 py-4 transition-opacity duration-300 group-hover:opacity-0 sm:bottom-[27px] sm:left-[29px] sm:right-[29px] sm:min-h-[107px] sm:rounded-[25px] sm:px-[37px]">
          <p className="text-[30px] font-medium leading-[1.2] tracking-[0] text-white sm:text-[38px] lg:text-[43px] lg:leading-[1.325]">
            {name}
          </p>
          <p className="text-[15px] font-normal leading-[1.4] tracking-[0] text-white sm:text-[18px] lg:text-[20px] lg:leading-[57px]">
            {title}
          </p>
        </div>

        {/* Hover Overlay */}
        <div 
          ref={overlayRef}
          className="invisible absolute inset-0 z-20 flex flex-col justify-center bg-[#FF3300] px-7 opacity-0 sm:px-[50px]"
          style={{ transform: 'translateY(20px)' }}
        >
          <p className="mb-2 text-[30px] font-medium leading-[1.2] tracking-[0] text-white sm:text-[40px] lg:text-[45px]">
            {name}
          </p>
          <p className="mb-5 text-[16px] font-normal leading-[1.4] tracking-[0] text-white sm:mb-8 sm:text-[20px]">
            {title}
          </p>
          <p className="text-[15px] font-normal leading-[1.55] tracking-[0] text-white sm:text-[18px] sm:leading-[1.7]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const dreamRef = useRef(null);
  const actionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(dreamRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: dreamRef.current,
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(actionRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: actionRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <div className="overflow-x-hidden bg-white font-poppins">

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section
        className="relative flex min-h-[560px] items-start justify-center bg-cover bg-center bg-no-repeat sm:min-h-[720px] lg:min-h-[900px]"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/about-us/hero-bg.png)` }}
      >
        {/* Keep hero image colors true-to-source (no white wash overlay) */}
        <div className="relative z-10 max-w-[960px] px-5 pb-[60px] pt-[30px] text-center">
          <p className="mb-4 text-[20px] font-medium leading-[1.5] tracking-[0] text-primary underline underline-offset-4 sm:mb-6 sm:text-[28px]">
            About Us
          </p>
          <h2 className="mb-5 text-[34px] font-light leading-[1.05] text-primary sm:mb-7 sm:text-[44px] lg:text-[52px] lg:leading-[0.98]">
            <span className="italic">More Than Migration</span>
            <br />
            <span className="not-italic font-bold text-accent">A Life Philosophy</span>
          </h2>
          <p className="mx-auto max-w-[803px] text-[16px] font-normal leading-[1.55] tracking-[0] text-black/75 sm:text-[20px] lg:text-[22px] lg:leading-[1.62]">
            Esante was founded on a simple belief — migration is not a transaction, it's a transformation.
          </p>
        </div>
      </section>

      {/* ═══════════════ MISSION SECTION ═══════════════ */}
      <section className="bg-primary py-14 sm:py-[72px] lg:py-[89px]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[60px] lg:px-[100px]">
          <div className="flex justify-center items-center">
            <p className="max-w-[900px] text-center text-[24px] font-normal leading-[1.35] tracking-[0] text-white sm:text-[32px] lg:text-[37px] lg:leading-[50px]">
              If you're dreaming of a new life in Australia but don't know where to start, we have good news:
              <span className="mt-2 block text-[30px] font-semibold italic text-accent sm:text-[40px] lg:mt-1 lg:text-[47px]">
                it's called Esante
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ DESCRIPTION SECTION ═══════════════ */}
      <section className="bg-white py-14 sm:py-20 lg:py-[100px]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[60px] lg:px-[100px]">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[461px_1fr] lg:gap-[74px]">
            <div>
              <img
                src="/images/about-us/team-image.png"
                alt="About Esante"
                className="h-[260px] w-full rounded-[24px] object-cover sm:h-[320px] lg:h-[380px] lg:rounded-[34px]"
              />
            </div>
            <div className="text-[16px] font-normal leading-[1.65] tracking-[0] text-black sm:text-[18px] lg:leading-[31px]">
              <p className="mb-6">
                We exist to connect people with opportunity, purpose, and possibility in Australia through education,
                skilled migration, and employment pathways that are ethical, transparent, and future‑focused.
              </p>
              <p className="mb-6">
                Every student, professional, and family we work with carries a dream. Our role is to turn that dream
                into a structured, compliant, and achievable journey — before arrival, on arrival, and long after
                settlement.
              </p>
              <p className="mb-0">
                From <span className="font-semibold">course and university selection</span> to{' '}
                <span className="font-semibold">visa strategy, accommodation, part-time work, and post-arrival support</span>,
                Esante offers an end-to-end ecosystem designed for one goal:
                <br />
                <span className="font-semibold">helping people not just reach Australia — but build a future there.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PARTNERS SECTION ═══════════════ */}
      <section className="bg-white py-14 sm:py-[80px]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[60px] lg:px-[100px]">
          <h3 className="mb-8 text-left text-[30px] font-medium italic leading-[1.2] tracking-[0] text-primary sm:text-[40px] lg:mb-[50px] lg:text-[45px]">
            We <span className="not-italic text-[#FF3300]">work closely</span> with:
          </h3>
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap lg:gap-[20px]">
            {/* Card 1: Universities — 315 x 103 */}
            <div className="relative min-h-[103px] w-full overflow-hidden rounded-[17px] sm:w-[315px] sm:flex-shrink-0">
              <img
                src="/images/about-us/partner-card-1.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex items-center gap-3 h-full px-5">
                <img src="/images/about-us/partner-icon.png" alt="" className="w-[22px] h-[22px] flex-shrink-0" />
                <p className="text-[16px] font-normal leading-[1.18] tracking-[0] text-black sm:text-[18px] sm:leading-[1.12]">
                  Australian universities<br />&amp; institutions
                </p>
              </div>
            </div>
            {/* Card 2: Migration Partners — 342 x 103 */}
            <div className="relative min-h-[103px] w-full overflow-hidden rounded-[17px] sm:w-[342px] sm:flex-shrink-0">
              <img
                src="/images/about-us/partner-card-2.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex items-center gap-3 h-full px-5">
                <img src="/images/about-us/partner-icon.png" alt="" className="w-[22px] h-[22px] flex-shrink-0" />
                <p className="text-[16px] font-normal leading-[1.18] tracking-[0] text-black sm:text-[18px] sm:leading-[1.12]">
                  Registered migration<br />and recruitment partners
                </p>
              </div>
            </div>
            {/* Card 3: Employers — 542 x 104 */}
            <div className="relative min-h-[104px] w-full overflow-hidden rounded-[17px] lg:w-[542px] lg:flex-shrink-0">
              <img
                src="/images/about-us/partner-card-3.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex items-center gap-3 h-full px-5">
                <img src="/images/about-us/partner-icon.png" alt="" className="w-[22px] h-[22px] flex-shrink-0" />
                <p className="text-[16px] font-normal leading-[1.18] tracking-[0] text-black sm:text-[18px] sm:leading-[1.12]">
                  Employers across healthcare, hospitality,<br />trades &amp; professional services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PHILOSOPHY SECTION ═══════════════ */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[54px]">
          <div className="relative mb-[60px] mt-12 overflow-visible lg:mt-[110px]">

            {/* Student image: 473x598, bottom-aligned with card, overflows 110px above */}
            <img
              src="/images/about-us/philosophy-image.png"
              alt="Esante Philosophy Student"
              className="pointer-events-none relative z-20 mx-auto mb-[-28px] h-auto w-[220px] max-w-[70vw] object-contain object-bottom lg:absolute lg:bottom-0 lg:right-[30px] lg:mb-0 lg:h-[598px] lg:w-[473px] lg:max-w-none"
            />

            {/* Cream card: 1332 x 488, #FFFBE9 bg, #FF3300 border, 48px radius */}
            <div className="relative h-auto overflow-hidden rounded-[28px] border border-[#FF3300] bg-[#FFFBE9] px-5 py-8 lg:h-[488px] lg:rounded-[48px] lg:px-[29px] lg:py-[35px]">
              <div className="max-w-[843px]">
                <h3 className="mb-5 text-[32px] font-medium leading-[1.2] tracking-[0] text-primary sm:text-[42px] lg:text-[53px] lg:tracking-[-0.15px]">
                  Esante <span className="font-semibold italic text-accent">Philosophy</span>
                </h3>
                <ul className="list-disc pl-5 space-y-0">
                  <li>
                    <span className="text-[18px] font-semibold leading-[1.5] text-[#FF3300] lg:text-[20px] lg:leading-[1.79]">Expertise</span>
                    <br />
                    <span className="text-[16px] font-normal leading-[1.5] tracking-[0] text-black lg:text-[18px] lg:leading-[1.79] lg:tracking-[-0.15px]">
                      Migration, education, and recruitment — viewed through one integrated lens.
                    </span>
                  </li>
                  <li>
                    <span className="text-[18px] font-semibold leading-[1.5] text-[#FF3300] lg:text-[20px] lg:leading-[1.79]">Integrity</span>
                    <br />
                    <span className="text-[16px] font-normal leading-[1.5] tracking-[0] text-black lg:text-[18px] lg:leading-[1.79] lg:tracking-[-0.15px]">
                      No shortcuts. No false promises. Only compliant, transparent pathways.
                    </span>
                  </li>
                  <li>
                    <span className="text-[18px] font-semibold leading-[1.5] text-[#FF3300] lg:text-[20px] lg:leading-[1.79]">Community</span>
                    <br />
                    <span className="text-[16px] font-normal leading-[1.5] tracking-[0] text-black lg:text-[18px] lg:leading-[1.79] lg:tracking-[-0.15px]">
                      We don't disappear after visa grant. We stay until you settle.
                    </span>
                  </li>
                  <li>
                    <span className="text-[18px] font-semibold leading-[1.5] text-[#FF3300] lg:text-[20px] lg:leading-[1.79]">Collaboration</span>
                    <br />
                    <span className="text-[16px] font-normal leading-[1.5] tracking-[0] text-black lg:text-[18px] lg:leading-[1.79] lg:tracking-[-0.15px]">
                      Strong partnerships with universities, employers, and service providers across Australia.
                    </span>
                  </li>
                  <li>
                    <span className="text-[18px] font-semibold leading-[1.5] text-[#FF3300] lg:text-[20px] lg:leading-[1.79]">Adventure</span>
                    <br />
                    <span className="text-[16px] font-normal leading-[1.5] tracking-[0] text-black lg:text-[18px] lg:leading-[1.79] lg:tracking-[-0.15px]">
                      Migration is a leap — we make sure you land safely.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOUNDER SECTION ═══════════════ */}
      <section className="bg-white py-14 lg:py-[80px]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[60px] lg:px-[100px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-[50px]">
            <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[28px] bg-accent pt-6 lg:hidden">
              <img
                src="/images/about-us/founder-image.png"
                alt="Deepen Khagram"
                className="h-[360px] w-full object-cover object-top"
              />
            </div>

            {/* Left: Founder portrait with red background */}
            <div
              className="relative hidden flex-shrink-0 lg:block"
              style={{
                marginTop: FOUNDER_IMAGE_LAYOUT.frameTopOffset,
                width: FOUNDER_IMAGE_LAYOUT.frameWidth,
                height: FOUNDER_IMAGE_LAYOUT.frameHeight,
                aspectRatio: FOUNDER_IMAGE_LAYOUT.frameAspectRatio,
              }}
            >
              {/* Red rounded rectangle behind portrait */}
              <div
                className="absolute left-0 bg-accent rounded-[40px]"
                style={{
                  top: FOUNDER_IMAGE_LAYOUT.backgroundTop,
                  width: FOUNDER_IMAGE_LAYOUT.backgroundWidth,
                  height: FOUNDER_IMAGE_LAYOUT.backgroundHeight,
                }}
              />
              {/* Founder portrait */}
              <img
                src="/images/about-us/founder-image.png"
                alt="Deepen Khagram"
                className="absolute left-1/2 z-10 rounded-b-[30px] object-cover object-top -translate-x-1/2"
                style={{
                  top: FOUNDER_IMAGE_LAYOUT.imageTop,
                  width: FOUNDER_IMAGE_LAYOUT.imageWidth,
                  height: FOUNDER_IMAGE_LAYOUT.imageHeight,
                }}
              />
            </div>

            {/* Right: Text content — positioned relative to match coloured line markers */}
            <div className="relative flex-1 space-y-5 lg:h-[810.018px] lg:space-y-0">

              {/* 1) Black line — Our Founder */}
              <h3
                className="text-[30px] font-normal leading-[1.2] tracking-[0] text-primary lg:absolute lg:text-[38px] lg:tracking-[-0.15px]"
                style={{ top: '115px' }}
              >
                Our <span className="font-semibold italic text-accent">Founder</span>
              </h3>

              {/* 2) Red line — Deepen Khagram */}
              <h4
                className="text-[42px] font-medium leading-[1.05] tracking-[0] text-black lg:absolute lg:text-[60px] lg:leading-[57px] lg:tracking-[-0.15px]"
                style={{ top: '180px' }}
              >
                Deepen<br />Khagram
              </h4>

              {/* 3) Dark green line — Founder & Managing Director */}
              <p
                className="text-[18px] font-normal leading-[1.45] tracking-[0] text-accent lg:absolute lg:text-[25px] lg:leading-[57px] lg:tracking-[-0.15px]"
                style={{ top: '310px' }}
              >
                Founder &amp; Managing Director
              </p>

              {/* 4) Light brown line — Born in Nairobi paragraph */}
              <p
                className="max-w-full text-[16px] font-normal leading-[1.65] tracking-[0] text-[#000] lg:absolute lg:text-[18px] lg:tracking-[-0.15px]"
                style={{ top: '370px', width: '539px', fontFamily: 'Poppins', lineHeight: '31px' }}
              >
                Born in Nairobi, Kenya, Deepen's own migration journey to Australia began in 1985 — shaping the values that Esante stands on today. With a background in accounting, business, and entrepreneurship, Deepen has built and led ventures across services, property, and international trade.
              </p>

              {/* 5) Pastel blue line — His lived experience paragraph */}
              <p
                className="max-w-full text-[16px] font-normal leading-[1.65] tracking-[0] text-[#000] lg:absolute lg:text-[18px] lg:tracking-[-0.15px]"
                style={{ top: '545px', width: '539px', fontFamily: 'Poppins', lineHeight: '31px' }}
              >
                His lived experience as a migrant informs Esante's people‑first approach — ensuring every decision balances opportunity with responsibility, ambition with ethics.
              </p>

              {/* 6) Pastel purple line — Australia gave me opportunity */}
              <p
                className="mb-0 max-w-full text-[16px] font-semibold italic leading-[1.65] tracking-[0] text-[#000] lg:absolute lg:text-[18px] lg:tracking-[-0.15px]"
                style={{ top: '670px', width: '539px', fontFamily: 'Poppins', lineHeight: '31px' }}
              >
                "Australia gave me opportunity. Esante exists to help others earn it the right way."{' '}
                <span className="not-italic">— Deepen Khagram.</span>
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM SECTION ═══════════════ */}
      <section className="bg-white pb-16 pt-14 lg:pb-[100px] lg:pt-[80px]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[60px] lg:px-[100px]">
          <div>
            <h3 className="mb-4 text-[34px] font-medium leading-[1.2] tracking-[0] text-primary sm:text-[44px] lg:text-[53px] lg:tracking-[-0.15px]">
              Meet Our <span className="font-semibold italic text-accent">Team</span>
            </h3>
            <p className="max-w-[1034px] text-[16px] font-normal leading-[1.6] tracking-[0] text-black sm:text-[18px] lg:leading-[31px] lg:tracking-[-0.15px]">
              The team that supports you beyond admissions — all the way to life in Australia.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-10">
            {/* Aashul Soni - LEFT */}
            <TeamCard
              image="/images/about-us/soni-image.png"
              name="Aashul Soni"
              title="Regional Director Of MP, India"
              description="QEAC-qualified counsellor specialising in Australian education and skilled migration. Aashul provides PIER-compliant, ethical guidance — from course selection and visa strategy to post-arrival support, helping students build career-ready pathways aligned with Australia's Skilled Occupation List."
              contentScale={0.88}
              contentHoverScale={0.92}
            />
            {/* Joshua Michael - RIGHT */}
            <TeamCard
              image="/images/about-us/joush-image.png"
              name="Joshua Michael"
              title="Australian Communication & IELTS Coach"
              description="CELTA-certified and Australia-based, Josh helps students crack IELTS/PTE and communicate with clarity for SOPs, interviews, and visas. Beyond test prep, he trains students in Australian workplace communication — giving them a real edge in part-time jobs and post-arrival life."
              contentScale={0.88}
              contentHoverScale={0.92}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ DREAM & ACTION SECTION ═══════════════ */}
      <section className="relative flex min-h-[626px] w-full flex-col justify-center overflow-hidden bg-primary py-16 lg:h-[626px] lg:py-0">
        {/* Background image with opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22]"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/about-us/dream-action-bg.png)` }}
        ></div>
        
        {/* Content container */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 sm:px-[60px] lg:gap-[90px] lg:px-[100px]">
          
          {/* Dream block */}
          <div className="w-full" ref={dreamRef}>
            <div className="relative max-w-[700px] pl-[25px]">
              {/* Absolute dot and line */}
              <div className="absolute left-0 top-[10px] w-[10px] h-[10px] bg-[#FF3300] rounded-full"></div>
              <div className="absolute right-[calc(100%-5px)] top-[14px] w-[100vw] h-[2px] bg-[#FF3300]"></div>
              
              <h4 className="mb-[15px] font-poppins text-[22px] font-semibold leading-[1.3] tracking-[0] text-[#FFF] lg:text-[25px] lg:leading-[31px] lg:tracking-[-0.15px]">
                The Dream
              </h4>
              <p className="max-w-[650px] font-poppins text-[16px] font-normal leading-[1.65] tracking-[0] text-[#FFF] lg:text-[18px] lg:leading-[31px] lg:tracking-[-0.15px]">
                To be the first-choice partner for global talent, empowering individuals and families to not just migrate, but to forge successful, fulfilling new lives within the Australian landscape.
              </p>
            </div>
          </div>

          {/* Action block */}
          <div className="flex w-full justify-end" ref={actionRef}>
            <div className="relative max-w-[840px] pr-[25px] text-right">
              {/* Absolute dot and line */}
              <div className="absolute right-0 top-[10px] w-[10px] h-[10px] bg-[#FF3300] rounded-full"></div>
              <div className="absolute left-[calc(100%-5px)] top-[14px] w-[100vw] h-[2px] bg-[#FF3300]"></div>
              
              <h4 className="mb-[15px] font-poppins text-[22px] font-semibold leading-[1.3] tracking-[0] text-[#FFF] lg:text-[25px] lg:leading-[31px] lg:tracking-[-0.15px]">
                The Action
              </h4>
              <p className="inline-block max-w-[800px] text-right font-poppins text-[16px] font-normal leading-[1.65] tracking-[0] text-[#FFF] lg:text-[18px] lg:leading-[31px] lg:tracking-[-0.15px]">
                To pioneer a vertically integrated, end-to-end migration pathway. We don't just process visas; we guide the entire journey—from the first consultation to permanent settlement—providing the expert strategy and local network needed to navigate complex transitions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Spacer before CTA banner */}
      <div className="h-12 bg-white lg:h-[80px]" />

    </div>
  );
};

export default AboutUs;
