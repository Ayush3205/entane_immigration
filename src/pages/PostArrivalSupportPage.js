import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';


const ASSET_BASE = process.env.PUBLIC_URL || '';

/* Local assets (avoid expiring Figma URLs) */
const imgImage47 = `${ASSET_BASE}/images/post-arrival/image47.png`;
const imgImage48 = `${ASSET_BASE}/images/post-arrival/image48.png`;
const imgImage49 = `${ASSET_BASE}/images/post-arrival/image49.png`;
const imgC299 = `${ASSET_BASE}/images/post-arrival/c299.png`;
const imgE6c18 = `${ASSET_BASE}/images/post-arrival/e6c18.png`;
const imgF4780 = `${ASSET_BASE}/images/post-arrival/f4780.png`;
const imgImage50 = `${ASSET_BASE}/images/post-arrival/image50.png`;
const imgC1c91 = `${ASSET_BASE}/images/post-arrival/c1c91.png`;
const imgArrivalIcon = `${ASSET_BASE}/images/post-arrival/arrival-icon.png`;
const imgOnboardIcon = `${ASSET_BASE}/images/post-arrival/onboard-icon.png`;
const imgHostelIcon = `${ASSET_BASE}/images/post-arrival/hostel-icon.png`;
const imgJobIcon = `${ASSET_BASE}/images/post-arrival/job-icon.png`;
const imgBanner = `${ASSET_BASE}/images/post-arrival/banner.png`;

const SUPPORT_CARDS = [
  { img: imgArrivalIcon, title: 'Arrival Essentials', subtitle: 'SIM • TFN • Bank • Super • OSHC • USI', text: 'Get set up from day one. We help you activate your SIM, open a bank account, apply for TFN, set up superannuation, USI, and health cover — without confusion or delays.' },
  { img: imgOnboardIcon, title: 'University Onboarding', subtitle: 'Orientation • Check-in • Timetable • Student Portal', text: 'From university check-in to learning portals like Canvas, Moodle, or Blackboard — we help you understand how everything works so you can focus on your studies.' },
  { img: imgHostelIcon, title: 'Local Living Support', subtitle: 'Metro Card • Groceries • City Navigation', text: 'Public transport cards, best grocery stores, apps you actually need, and how to move around your city like a local — we make daily life easy and affordable.' },
  { img: imgJobIcon, title: 'Job-Ready Program', subtitle: 'CV • Cover Letter • Job Portals • Interviews', text: 'We prepare you for the Australian job market — CVs, cover letters, SEEK/Indeed profiles, mock interviews, and workplace communication support.' },
  // ⬇️ REPLACE imgHostelIcon BELOW WITH YOUR CARD 5 IMG IMPORT ⬇️
  { img: imgHostelIcon, title: 'Accommodation Assistance', subtitle: 'Temporary • Long-Term • Lease Support', text: 'From your first week\'s stay to long-term housing, lease agreements, bond rules, and neighbourhood safety — we’ve got your housing covered.' },
  // ⬇️ REPLACE imgOnboardIcon BELOW WITH YOUR CARD 6 IMG IMPORT ⬇️
  { img: imgOnboardIcon, title: 'Student Lifestyle Benefits', subtitle: 'Cafes • Trips • Meetups • Discounts', text: 'Discover the best cafes, budget food spots, weekend trips, student discounts, and Esanté community meetups — because student life is more than classes.' },
];

const POST_ARRIVAL_FAQ_ITEMS = [
  {
    question: 'What is post-arrival support for international students in Australia?',
    answer:
      'Post-arrival support includes all the assistance students need after landing in Australia, such as SIM card setup, bank account opening, TFN application, accommodation, university onboarding, and job preparation.',
  },
  {
    question: 'Does Esante provide support after I arrive in Australia?',
    answer:
      'Yes, Esante provides complete post-arrival support. From airport pickup to settling into accommodation and finding part-time jobs, our team supports you at every step.',
  },
  {
    question: 'What is included in Esante’s post-arrival settlement services?',
    answer:
      'Esante offers SIM activation, TFN setup, bank account assistance, university onboarding, transport guidance, job preparation, accommodation support, and ongoing lifestyle assistance.',
  },
  {
    question: 'Is post-arrival support free for Esante students?',
    answer:
      'Yes, all post-arrival support services are completely free for students who apply through Esante.',
  },
  {
    question: 'How do I settle in Australia as an international student?',
    answer:
      'To settle in Australia, you need to set up essentials like a SIM card, bank account, TFN, and accommodation, understand transport systems, and get familiar with your university. Esante helps you manage all of this smoothly.',
  },
  {
    question: 'Will someone help me after I land in Australia?',
    answer:
      'Yes, every Esante student is assigned a dedicated support person in Australia who helps you from day one until you are fully settled.',
  },
  {
    question: 'What documents do I need after arriving in Australia?',
    answer:
      'You will need your passport, visa, Confirmation of Enrolment (CoE), and identification documents to set up your TFN, bank account, and other services.',
  },
  {
    question: 'How can I open a bank account in Australia as a student?',
    answer:
      'You can open a bank account with major banks like Commonwealth, NAB, ANZ, or Westpac. Esante guides you through the process to avoid delays.',
  },
  {
    question: 'What is TFN and why is it important?',
    answer:
      'TFN (Tax File Number) is required to work legally in Australia. Without it, you may be taxed at a higher rate. Esante helps you apply for it easily.',
  },
  {
    question: 'How do I get a SIM card in Australia?',
    answer:
      'You can get a SIM card from providers like Telstra, Optus, or Vodafone. Esante helps you choose the best plan and activate it immediately after arrival.',
  },
  {
    question: 'How do I travel in Australia as a student?',
    answer:
      'Each city has its own transport card like Opal (Sydney), Myki (Melbourne), or Go Card (Brisbane). Esante helps you set up and use these systems efficiently.',
  },
  {
    question: 'Can Esante help me find a part-time job after arrival?',
    answer:
      'Yes, Esante provides job-ready support including CV building, interview preparation, and access to verified job opportunities.',
  },
  {
    question: 'What is university onboarding support?',
    answer:
      'University onboarding includes help with orientation, timetable setup, student portals like Canvas or Moodle, and understanding academic systems.',
  },
  {
    question: 'Can I get help with accommodation after arriving?',
    answer:
      'Yes, Esante helps you with both temporary and long-term accommodation, including lease guidance and verified housing options.',
  },
  {
    question: 'What is the Job-Ready Program by Esante?',
    answer:
      'It includes Australian-style CV preparation, cover letters, LinkedIn setup, interview training, and workplace communication skills.',
  },
  {
    question: 'How long does post-arrival support last?',
    answer:
      'Esante supports students from arrival until they are fully settled, especially during the crucial first few months.',
  },
  {
    question: 'Do you help with student life and social integration?',
    answer:
      'Yes, Esante helps students explore cafés, student discounts, networking opportunities, and community events.',
  },
  {
    question: 'What makes Esante different from other consultancies?',
    answer:
      'Unlike traditional agents, Esante provides on-ground support in Australia, helping students not just reach but succeed after arrival.',
  },
  {
    question: 'Is post-arrival support important for international students?',
    answer:
      'Yes, proper guidance after arrival helps students avoid mistakes, save money, and settle faster into Australian life.',
  },
  {
    question: 'How can I get post-arrival support from Esante?',
    answer:
      'You can fill out the form on this page, and an Esante counsellor will guide you step-by-step for your arrival and settlement in Australia.',
  },
];

function PostArrivalSupportPage() {
  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const maxSlide = Math.max(0, SUPPORT_CARDS.length - 4);
  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));


  useEffect(() => {
    const ctx = gsap.context(() => {
      const containers = gsap.utils.toArray('.floating-img-container');
      
      containers.forEach((container) => {
        const duration = 2.5 + Math.random() * 1.5;
        const yOffset = 15 + Math.random() * 10;
        const delay = Math.random() * -2;
        
        const tween = gsap.to(container, {
          y: yOffset,
          duration: duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: delay
        });

        // Pause animation smoothly on hover
        container.addEventListener('mouseenter', () => {
          gsap.to(tween, { timeScale: 0.1, duration: 0.5 });
        });
        
        // Resume smoothly on leave
        container.addEventListener('mouseleave', () => {
          gsap.to(tween, { timeScale: 1, duration: 0.5 });
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <main className="flex flex-col w-full max-w-[1440px] mx-auto bg-white">

        {/* ══════════════════════════════════════════════════
            HERO SECTION
            Figma: label y=174 from white-rect top, centered
        ══════════════════════════════════════════════════ */}
        <section className="flex flex-col items-center w-full pt-[174px] pb-[96px]">

          {/* Label */}
          <p
            className="font-poppins font-medium text-[28px] text-primary underline decoration-solid tracking-[-0.56px] text-center mb-[60px]"
            style={{ lineHeight: '21px' }}
          >
            Post-Arrival Support
          </p>

          {/* Heading block — two lines then badge */}
          <div className="text-center font-poppins mb-[26px]">
            <p
              className="font-normal text-[48px] text-primary mb-[8px]"
              style={{ lineHeight: '1.0', margin: '0 0 8px 0' }}
            >
              Because getting admitted is just the beginning
            </p>
            <p
              className="font-semibold italic text-[56px] text-accent"
              style={{ lineHeight: '1.0', margin: 0 }}
            >
              living well is what matters.
            </p>
          </div>

          {/* CTA Badge */}
          <button
            type="button"
            onClick={openConsultation}
            className="inline-flex items-center justify-center px-[12px] py-[4px] bg-accent rounded-[16px] border-0 cursor-pointer"
          >
            <span className="font-poppins font-medium text-[22px] leading-[20px] text-cream text-center">
              Get Post Arrival Support
            </span>
          </button>
        </section>

        {/* ══════════════════════════════════════════════════
            INTRO COLLAGE SECTION
            Absolute-positioned images around a centered
            gray rounded box.  All pixel values are relative
            to the 1440 px-wide content column and offset
            from the section's own top edge.

            Section top  = y 491 from white-rect top
            Section height = 808 px (top of img47 → bottom of img50)

            Images (l/t/w/h, crop percentages from Figma):
              img47  l=329  t=0    w=202  h=181
              img48  l=714  t=91   w=189  h=172
              img49  l=51   t=156  w=159  h=143
              c299   l=1158 t=99   w=182  h=164
              e6c18  l=81   t=618  w=193  h=173
              f4780  l=430  t=560  w=181  h=162
              img50  l=836  t=636  w=189  h=172
              c1c91  l=1188 t=560  w=181  h=162

            Gray box:  l=102  t=156  w=1208  h=549
            Text in box: l_offset=83  t_offset=167
        ══════════════════════════════════════════════════ */}
        <section ref={containerRef} className="relative w-full" style={{ height: 808 }}>

          {/* ── TOP ROW IMAGES ── */}

          {/* img47 — students (centre-left, highest) */}
          <div
            className="floating-img-container absolute group z-[2] hover:z-[10]"
            style={{ left: 329, top: 0, width: 202, height: 181 }}
          >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden cursor-pointer transition-all duration-[400ms] group-hover:scale-[1.15] group-hover:-rotate-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: '133.15%', left: '-42.58%', top: '-33.12%', width: '179.35%' }}
                src={imgImage47}
              />
            </div>
          </div>

          {/* img48 — students (centre-right) */}
          <div
            className="floating-img-container absolute group z-[2] hover:z-[10]"
            style={{ left: 714, top: 91, width: 189, height: 172 }}
          >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden cursor-pointer transition-all duration-[400ms] group-hover:scale-[1.15] group-hover:-rotate-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: '147.48%', left: '-0.66%', top: '-7.22%', width: '100.52%' }}
                src={imgImage48}
              />
            </div>
          </div>

          {/* img49 — Sydney opera house (far left) */}
          <div
            className="floating-img-container absolute group z-[2] hover:z-[10]"
            style={{ left: 51, top: 156, width: 159, height: 143 }}
          >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden cursor-pointer transition-all duration-[400ms] group-hover:scale-[1.15] group-hover:-rotate-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: '194.24%', left: '-0.09%', top: '-49.64%', width: '100.19%' }}
                src={imgImage49}
              />
            </div>
          </div>

          {/* c299 — airplane / skyline (far right) */}
          <div
            className="floating-img-container absolute group z-[2] hover:z-[10]"
            style={{ left: 1158, top: 99, width: 182, height: 164 }}
          >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden cursor-pointer transition-all duration-[400ms] group-hover:scale-[1.15] group-hover:-rotate-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: '138.85%', left: '-0.14%', top: '-19.42%', width: '100.28%' }}
                src={imgC299}
              />
            </div>
          </div>

          {/* ── GRAY ROUNDED TEXT BOX ── */}
          <div
            className="absolute bg-[#f6f4f4] rounded-[67px]"
            style={{ left: 102, top: 156, width: 1208, height: 549 }}
          >
            <div
              className="absolute text-center"
              style={{ left: 83, top: 167, width: 1085 }}
            >
              {/* Bold italic red intro text */}
              <p
                className="font-poppins font-semibold italic text-[35px] text-accent leading-[1.11] mb-0"
              >
                Arriving in Australia is exciting, but it can also be confusing.
                <br />
                {' New systems, new rules, new responsibilities \u2014 all at once'}
              </p>
              {/* Spacer matching Figma blank paragraph */}
              <p className="font-poppins text-[31px] leading-[1.11] mb-0" style={{ color: 'transparent' }}>&nbsp;</p>
              {/* Regular descriptive text */}
              <p className="font-poppins font-normal text-[22px] text-primary leading-[1.11] mb-0">
                At Esante, we don&apos;t disappear after your visa is approved.
                <br />
                {' We stay with you after you land, helping you settle, work, study, and live confidently in Australia.'}
              </p>
            </div>
          </div>

          {/* ── BOTTOM ROW IMAGES ── */}

          {/* e6c18 — person (far left) */}
          <div
            className="floating-img-container absolute group z-[2] hover:z-[10]"
            style={{ left: 81, top: 618, width: 193, height: 173 }}
          >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden cursor-pointer transition-all duration-[400ms] group-hover:scale-[1.15] group-hover:-rotate-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: '198.56%', left: '-0.1%', top: '-64.75%', width: '100.2%' }}
                src={imgE6c18}
              />
            </div>
          </div>

          {/* f4780 — accommodation (centre-left) */}
          <div
            className="floating-img-container absolute group z-[2] hover:z-[10]"
            style={{ left: 430, top: 560, width: 181, height: 162 }}
          >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden cursor-pointer transition-all duration-[400ms] group-hover:scale-[1.15] group-hover:-rotate-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: '111.51%', left: '0', top: '-11.51%', width: '100%' }}
                src={imgF4780}
              />
            </div>
          </div>

          {/* img50 — graduation (centre-right) */}
          <div
            className="floating-img-container absolute group z-[2] hover:z-[10]"
            style={{ left: 836, top: 636, width: 189, height: 172 }}
          >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden cursor-pointer transition-all duration-[400ms] group-hover:scale-[1.15] group-hover:-rotate-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: '147.48%', left: '-0.66%', top: '-7.22%', width: '100.52%' }}
                src={imgImage50}
              />
            </div>
          </div>

          {/* c1c91 — city / skyline (far right) */}
          <div
            className="floating-img-container absolute group z-[2] hover:z-[10]"
            style={{ left: 1188, top: 560, width: 181, height: 162 }}
          >
            <div className="relative w-full h-full rounded-[15px] overflow-hidden cursor-pointer transition-all duration-[400ms] group-hover:scale-[1.15] group-hover:-rotate-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]">
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: '149.64%', left: '-0.32%', top: '-43.17%', width: '100.65%' }}
                src={imgC1c91}
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            COMPREHENSIVE SUPPORT HEADING
            Figma: y=1497 from white-rect top, left=92 px
            Gap from intro section bottom (y=1299): 198 px
        ══════════════════════════════════════════════════ */}
        <section className="w-full px-[92px] mt-[198px] mb-0">
          <p
            className="font-poppins text-[45px] text-primary tracking-[-0.15px] leading-[1.2] mb-[15px]"
          >
            {'Comprehensive '}
            <span className="font-semibold italic text-accent">Support,</span>
            {' Right Where You Need It'}
          </p>
          <p
            className="font-poppins font-normal text-[31px] text-black tracking-[-0.15px] leading-[1.2] mb-[37px]"
          >
            Everything you need after landing - sorted, step by step.
          </p>
        </section>

        {/* ══════════════════════════════════════════════════
            SUPPORT CARDS SECTION
            Figma: bg #eee, y=1640 from white-rect top
            Cards: 308×399 px each, bg #00352B, rounded-[28px]
            Icons protrude above card top edge
            CTA badge: h=49, rounded-[21px], text 26px
        ══════════════════════════════════════════════════ */}
        <section className="relative w-full bg-[#eee] pt-[63px] pb-[55px] flex flex-col items-center">
          
          <div className="relative flex items-center justify-center w-full max-w-[1440px]">
            {/* Left Chevron */}
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-4 mr-2 disabled:opacity-20 cursor-pointer border-0 bg-transparent flex items-center justify-center transition-opacity"
            >
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L4 20L22 38" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden w-[1316px] flex-shrink-0">
              <div 
                className="flex items-stretch gap-[28px] transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 336}px)` }}
              >
                {SUPPORT_CARDS.map((card, idx) => (
                  <div key={idx} className="flex flex-col bg-primary rounded-[28px] w-[308px] shrink-0 pt-[32px] px-[24px] pb-[32px]">
                    <img
                      src={card.img}
                      alt=""
                      className="w-[80px] h-[80px] mb-[24px] object-contain"
                    />
                    <div className="flex-1 flex flex-col">
                      <p className="font-poppins font-semibold text-[22px] text-accent leading-[1.58] mb-1">
                        {card.title}
                      </p>
                      <p className="font-poppins font-bold text-[13px] text-white leading-[1.58] mb-[12px]">
                        {card.subtitle}
                      </p>
                      <p className="font-poppins text-[16px] text-white leading-[1.58] mb-0">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Chevron */}
            <button 
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              className="p-4 ml-2 disabled:opacity-20 cursor-pointer border-0 bg-transparent flex items-center justify-center transition-opacity"
            >
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L20 20L2 38" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* CTA badge — Figma: h=49, rounded-[21px], text 26px */}
          <button
            type="button"
            onClick={openConsultation}
            className="inline-flex items-center justify-center px-[12px] py-[4px] bg-accent rounded-[21px] border-0 cursor-pointer mt-[49px]"
            style={{ height: 49 }}
          >
            <span className="font-poppins font-medium text-[26px] leading-[20px] text-cream text-center">
              Get Post Arrival Support
            </span>
          </button>
        </section>

        {/* FAQ — post-arrival support for students in Australia */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[92px] gap-[24px]"
          aria-labelledby="post-arrival-faq-heading"
        >
          <h2
            id="post-arrival-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Post-Arrival Support for Students in Australia
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {POST_ARRIVAL_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`post-arrival-faq-answer-${index}`}
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
                          id={`post-arrival-faq-answer-${index}`}
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
                Talk to an Esante Counsellor
              </span>
            </button>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CLOSING BANNER
            Figma: group 1259×367 px, image offset left=106
            Text heading overlays from top=59
            Sub-text + "Book Free Call" inside the image
            Gap from cards section: 108 px
        ══════════════════════════════════════════════════ */}
        <section className="w-full flex justify-center mt-[108px] mb-[69px]">
          {/* Outer group: 1259×367 */}
          <div className="relative" style={{ width: 1259, height: 367 }}>

            {/* Background image container — left=106, full height */}
            <div
              className="absolute rounded-[37px] overflow-hidden"
              style={{ left: 106, top: 0, width: 1047, height: 367 }}
            >
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                src={imgBanner}
              />

              {/* Sub-text inside image — Figma: top=214, centred at x=523 within image */}
              <p
                className="absolute font-poppins text-[23px] text-center capitalize tracking-[-0.15px] whitespace-pre-wrap"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  left: 523 - 354,   /* 523 – (708/2) = 169 */
                  top: 214,
                  width: 708,
                  lineHeight: 'normal',
                }}
              >
                Let our experts in Brisbane guide you every step of the way.
              </p>

              {/* Book Free Call button — Figma: left=433 top=283, 181×36 */}
              <a
                href="#contact"
                className="absolute bg-white flex items-center justify-center rounded-[16px] overflow-hidden"
                style={{ left: 433, top: 283, width: 181, height: 36 }}
              >
                <span
                  className="font-normal text-[19px] text-primary tracking-[-0.15px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Book Free Call
                </span>
              </a>
            </div>

            {/* Heading text overlay — spans full 1259 px group width, top=59 */}
            <div
              className="absolute w-full flex flex-col items-center font-poppins text-center text-white tracking-[-0.96px]"
              style={{ top: 59 }}
            >
              <p className="text-[42px] font-normal mb-0" style={{ lineHeight: 1 }}>
                Think of
              </p>
              <p
                className="text-[48px] font-semibold italic mb-0"
                style={{ lineHeight: 1 }}
              >
                Esante as your Australia-study partner
              </p>
              <p className="text-[42px] font-normal mb-0" style={{ lineHeight: 1 }}>
                not just an agent.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default PostArrivalSupportPage;
