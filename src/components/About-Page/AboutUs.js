import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamCard = ({ image, name, title, description }) => {
  const overlayRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.killTweensOf(overlayRef.current);
    gsap.to(overlayRef.current, { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" });
  };
  
  const handleMouseLeave = () => {
    gsap.killTweensOf(overlayRef.current);
    gsap.to(overlayRef.current, { y: 20, autoAlpha: 0, duration: 0.3, ease: "power2.in" });
  };

  return (
    <div 
      className="relative w-[562px] h-[641px] rounded-[24px] overflow-hidden flex-shrink-0 cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        src={image}
        alt={name}
      />
      
      {/* Default Overlay */}
      <div className="absolute left-[29px] right-[29px] bottom-[27px] bg-accent/[0.68] rounded-[25px] min-h-[107px] flex flex-col justify-center px-[37px] py-4 transition-opacity duration-300 group-hover:opacity-0">
        <p className="text-[43px] font-medium leading-[1.325] tracking-[-0.15px] text-white">
          {name}
        </p>
        <p className="text-[20px] font-normal leading-[57px] tracking-[-0.15px] text-white">
          {title}
        </p>
      </div>

      {/* Hover Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-[#FF3300] z-20 flex flex-col justify-center px-[50px] opacity-0 invisible"
        style={{ transform: 'translateY(20px)' }}
      >
        <p className="text-[45px] font-medium leading-[1.2] tracking-[-0.15px] text-white mb-2">
          {name}
        </p>
        <p className="text-[20px] font-normal leading-[1.4] tracking-[-0.15px] text-white mb-8">
          {title}
        </p>
        <p className="text-[18px] font-normal leading-[1.7] tracking-[-0.15px] text-white">
          {description}
        </p>
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
    <div className="font-poppins bg-white">

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section
        className="relative min-h-[900px] bg-cover bg-center bg-no-repeat flex items-start justify-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/about-us/hero-bg.png)` }}
      >
        {/* Keep hero image colors true-to-source (no white wash overlay) */}
        <div className="relative z-10 text-center max-w-[960px] pt-[30px] px-5 pb-[60px]">
          <p className="text-[28px] font-medium leading-[1.5] tracking-[-0.15px] text-primary underline underline-offset-4 mb-6">
            About Us
          </p>
          <h2 className="text-[52px] font-light leading-[0.98] text-primary mb-7">
            <span className="italic">More Than Migration</span>
            <br />
            <span className="not-italic font-bold text-accent">A Life Philosophy</span>
          </h2>
          <p className="text-[22px] font-normal leading-[1.62] tracking-[-0.15px] text-black/75 max-w-[803px] mx-auto">
            Esante was founded on a simple belief — migration is not a transaction, it's a transformation.
          </p>
        </div>
      </section>

      {/* ═══════════════ MISSION SECTION ═══════════════ */}
      <section className="bg-primary py-[89px]">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <div className="flex justify-center items-center">
            <p className="text-[37px] font-normal leading-[50px] tracking-[-0.15px] text-white text-center max-w-[900px]">
              If you're dreaming of a new life in Australia but don't know where to start, we have good news:
              <span className="block text-[47px] font-semibold italic text-accent mt-1">
                it's called Esante
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ DESCRIPTION SECTION ═══════════════ */}
      <section className="py-[100px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <div className="grid grid-cols-[461px_1fr] gap-[74px] items-start">
            <div>
              <img
                src="/images/about-us/team-image.png"
                alt="About Esante"
                className="w-full h-[380px] object-cover rounded-[34px]"
              />
            </div>
            <div className="text-[18px] font-normal leading-[31px] tracking-[-0.15px] text-black">
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
      <section className="py-[80px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <h3 className="text-[45px] font-medium italic leading-[1.2] tracking-[-0.33%] text-primary text-left mb-[50px]">
            We <span className="not-italic text-[#FF3300]">work closely</span> with:
          </h3>
          <div className="flex items-stretch gap-[20px]">
            {/* Card 1: Universities — 315 x 103 */}
            <div className="relative rounded-[17px] overflow-hidden flex-shrink-0" style={{ width: '315px', height: '103px' }}>
              <img
                src="/images/about-us/partner-card-1.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex items-center gap-3 h-full px-5">
                <img src="/images/about-us/partner-icon.png" alt="" className="w-[22px] h-[22px] flex-shrink-0" />
                <p className="text-[18px] font-normal leading-[1.12] tracking-[-0.15px] text-black">
                  Australian universities<br />&amp; institutions
                </p>
              </div>
            </div>
            {/* Card 2: Migration Partners — 342 x 103 */}
            <div className="relative rounded-[17px] overflow-hidden flex-shrink-0" style={{ width: '342px', height: '103px' }}>
              <img
                src="/images/about-us/partner-card-2.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex items-center gap-3 h-full px-5">
                <img src="/images/about-us/partner-icon.png" alt="" className="w-[22px] h-[22px] flex-shrink-0" />
                <p className="text-[18px] font-normal leading-[1.12] tracking-[-0.15px] text-black">
                  Registered migration<br />and recruitment partners
                </p>
              </div>
            </div>
            {/* Card 3: Employers — 542 x 104 */}
            <div className="relative rounded-[17px] overflow-hidden flex-shrink-0" style={{ width: '542px', height: '104px' }}>
              <img
                src="/images/about-us/partner-card-3.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex items-center gap-3 h-full px-5">
                <img src="/images/about-us/partner-icon.png" alt="" className="w-[22px] h-[22px] flex-shrink-0" />
                <p className="text-[18px] font-normal leading-[1.12] tracking-[-0.15px] text-black">
                  Employers across healthcare, hospitality,<br />trades &amp; professional services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PHILOSOPHY SECTION ═══════════════ */}
      <section className="bg-white overflow-visible">
        <div className="max-w-[1440px] mx-auto px-[54px]">
          <div className="relative mt-[110px] mb-[60px] overflow-visible">

            {/* Student image: 473x598, bottom-aligned with card, overflows 110px above */}
            <img
              src="/images/about-us/philosophy-image.png"
              alt="Esante Philosophy Student"
              className="absolute z-20 right-[30px] bottom-0 w-[473px] h-[598px] object-contain object-bottom pointer-events-none"
            />

            {/* Cream card: 1332 x 488, #FFFBE9 bg, #FF3300 border, 48px radius */}
            <div className="relative bg-[#FFFBE9] border border-[#FF3300] rounded-[48px] h-[488px] px-[29px] py-[35px] overflow-hidden">
              <div className="max-w-[843px]">
                <h3 className="text-[53px] font-medium leading-[1.2] tracking-[-0.15px] text-primary mb-5">
                  Esante <span className="font-semibold italic text-accent">Philosophy</span>
                </h3>
                <ul className="list-disc pl-5 space-y-0">
                  <li>
                    <span className="text-[20px] font-semibold leading-[1.79] text-[#FF3300]">Expertise</span>
                    <br />
                    <span className="text-[18px] font-normal leading-[1.79] tracking-[-0.15px] text-black">
                      Migration, education, and recruitment — viewed through one integrated lens.
                    </span>
                  </li>
                  <li>
                    <span className="text-[20px] font-semibold leading-[1.79] text-[#FF3300]">Integrity</span>
                    <br />
                    <span className="text-[18px] font-normal leading-[1.79] tracking-[-0.15px] text-black">
                      No shortcuts. No false promises. Only compliant, transparent pathways.
                    </span>
                  </li>
                  <li>
                    <span className="text-[20px] font-semibold leading-[1.79] text-[#FF3300]">Community</span>
                    <br />
                    <span className="text-[18px] font-normal leading-[1.79] tracking-[-0.15px] text-black">
                      We don't disappear after visa grant. We stay until you settle.
                    </span>
                  </li>
                  <li>
                    <span className="text-[20px] font-semibold leading-[1.79] text-[#FF3300]">Collaboration</span>
                    <br />
                    <span className="text-[18px] font-normal leading-[1.79] tracking-[-0.15px] text-black">
                      Strong partnerships with universities, employers, and service providers across Australia.
                    </span>
                  </li>
                  <li>
                    <span className="text-[20px] font-semibold leading-[1.79] text-[#FF3300]">Adventure</span>
                    <br />
                    <span className="text-[18px] font-normal leading-[1.79] tracking-[-0.15px] text-black">
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
      <section className="bg-white py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <div className="flex gap-[30px]">
            {/* Left: Founder portrait with red background */}
            <div className="relative flex-shrink-0" style={{ width: '556.551px', height: '810.018px' }}>
              {/* Red rounded rectangle behind portrait */}
              <div
                className="absolute left-0 bg-accent rounded-[24px]"
                style={{ top: '200px', width: '513px', height: '609px' }}
              />
              {/* Founder portrait */}
              <img
                src="/images/about-us/founder-image.png"
                alt="Deepen Khagram"
                className="relative z-10 w-full h-full object-cover object-top"
              />
            </div>

            {/* Right: Text content — positioned relative to match coloured line markers */}
            <div className="relative flex-1" style={{ height: '810.018px' }}>

              {/* 1) Black line — Our Founder */}
              <h3
                className="absolute text-[38px] font-normal leading-[1.2] tracking-[-0.15px] text-primary"
                style={{ top: '115px' }}
              >
                Our <span className="font-semibold italic text-accent">Founder</span>
              </h3>

              {/* 2) Red line — Deepen Khagram */}
              <h4
                className="absolute text-[60px] font-medium leading-[57px] tracking-[-0.15px] text-black"
                style={{ top: '180px' }}
              >
                Deepen<br />Khagram
              </h4>

              {/* 3) Dark green line — Founder & Managing Director */}
              <p
                className="absolute text-[25px] font-normal leading-[57px] tracking-[-0.15px] text-accent"
                style={{ top: '310px' }}
              >
                Founder &amp; Managing Director
              </p>

              {/* 4) Light brown line — Born in Nairobi paragraph */}
              <p
                className="absolute text-[18px] font-normal tracking-[-0.15px] text-[#000]"
                style={{ top: '370px', width: '539px', fontFamily: 'Poppins', lineHeight: '31px' }}
              >
                Born in Nairobi, Kenya, Deepen's own migration journey to Australia began in 1985 — shaping the values that Esante stands on today. With a background in accounting, business, and entrepreneurship, Deepen has built and led ventures across services, property, and international trade.
              </p>

              {/* 5) Pastel blue line — His lived experience paragraph */}
              <p
                className="absolute text-[18px] font-normal tracking-[-0.15px] text-[#000]"
                style={{ top: '545px', width: '539px', fontFamily: 'Poppins', lineHeight: '31px' }}
              >
                His lived experience as a migrant informs Esanté's people‑first approach — ensuring every decision balances opportunity with responsibility, ambition with ethics.
              </p>

              {/* 6) Pastel purple line — Australia gave me opportunity */}
              <p
                className="absolute text-[18px] italic font-semibold tracking-[-0.15px] text-[#000] mb-0"
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
      <section className="pt-[80px] pb-[100px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[100px]">
          <div className="mb-[50px]">
            <h3 className="text-[53px] font-medium leading-[1.2] tracking-[-0.15px] text-primary mb-4">
              Meet Our <span className="font-semibold italic text-accent">Team</span>
            </h3>
            <p className="text-[18px] font-normal leading-[31px] tracking-[-0.15px] text-black max-w-[1034px]">
              The team that supports you beyond admissions — all the way to life in Australia.
            </p>
          </div>
          <div className="flex gap-10">
            {/* Aashul Soni - LEFT */}
            <TeamCard
              image="/images/about-us/soni-image.png"
              name="Aashul Soni"
              title="Regional Director Of MP, India"
              description="QEAC-qualified counsellor specialising in Australian education and skilled migration. Aashul provides PIER-compliant, ethical guidance — from course selection and visa strategy to post-arrival support, helping students build career-ready pathways aligned with Australia's Skilled Occupation List."
            />
            {/* Joshua Michael - RIGHT */}
            <TeamCard
              image="/images/about-us/joush-image.png"
              name="Joshua Michael"
              title="Australian Communication & IELTS Coach"
              description="CELTA-certified and Australia-based, Josh helps students crack IELTS/PTE and communicate with clarity for SOPs, interviews, and visas. Beyond test prep, he trains students in Australian workplace communication — giving them a real edge in part-time jobs and post-arrival life."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ DREAM & ACTION SECTION ═══════════════ */}
      <section className="relative w-full h-[626px] bg-primary overflow-hidden flex flex-col justify-center">
        {/* Background image with opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22]"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/about-us/dream-action-bg.png)` }}
        ></div>
        
        {/* Content container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[100px] flex flex-col gap-[90px]">
          
          {/* Dream block */}
          <div className="w-full" ref={dreamRef}>
            <div className="pl-[25px] relative max-w-[700px]">
              {/* Absolute dot and line */}
              <div className="absolute left-0 top-[10px] w-[10px] h-[10px] bg-[#FF3300] rounded-full"></div>
              <div className="absolute right-[calc(100%-5px)] top-[14px] w-[100vw] h-[2px] bg-[#FF3300]"></div>
              
              <h4 className="text-[#FFF] font-poppins text-[25px] font-semibold leading-[31px] tracking-[-0.15px] mb-[15px]">
                The Dream
              </h4>
              <p className="text-[#FFF] font-poppins text-[18px] font-normal leading-[31px] tracking-[-0.15px] max-w-[650px]">
                To be the first-choice partner for global talent, empowering individuals and families to not just migrate, but to forge successful, fulfilling new lives within the Australian landscape.
              </p>
            </div>
          </div>

          {/* Action block */}
          <div className="w-full flex justify-end" ref={actionRef}>
            <div className="pr-[25px] relative max-w-[840px] text-right">
              {/* Absolute dot and line */}
              <div className="absolute right-0 top-[10px] w-[10px] h-[10px] bg-[#FF3300] rounded-full"></div>
              <div className="absolute left-[calc(100%-5px)] top-[14px] w-[100vw] h-[2px] bg-[#FF3300]"></div>
              
              <h4 className="text-[#FFF] font-poppins text-[25px] font-semibold leading-[31px] tracking-[-0.15px] mb-[15px]">
                The Action
              </h4>
              <p className="inline-block text-[#FFF] font-poppins text-[18px] font-normal leading-[31px] tracking-[-0.15px] max-w-[800px] text-right">
                To pioneer a vertically integrated, end-to-end migration pathway. We don't just process visas; we guide the entire journey—from the first consultation to permanent settlement—providing the expert strategy and local network needed to navigate complex transitions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Spacer before CTA banner */}
      <div className="h-[80px] bg-white" />

    </div>
  );
};

export default AboutUs;
