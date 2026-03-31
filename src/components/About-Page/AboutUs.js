import React from 'react';

const AboutUs = () => {
  return (
    <div className="font-poppins bg-white">

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section
        className="relative min-h-[900px] bg-cover bg-center bg-no-repeat flex items-start justify-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/about-us/hero-bg.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 via-30% to-transparent" />
        <div className="relative z-10 text-center max-w-[960px] pt-[120px] px-5 pb-[60px]">
          <p className="text-[16px] font-medium leading-[1.5] tracking-[-0.15px] text-primary underline underline-offset-4 mb-6">
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
          <div className="flex gap-[30px] items-start">
            {/* Left: Founder portrait with red background + SVG decoration */}
            <div className="relative flex-shrink-0 w-[557px]">
              {/* Red rounded rectangle behind portrait */}
              <div className="absolute top-[200px] left-0 w-[513px] h-[609px] bg-accent rounded-[24px]" />
              {/* Founder portrait (transparent PNG sitting on top) */}
              <img
                src="/images/about-us/founder-image.png"
                alt="Deepen Khagram"
                className="relative z-10 w-full h-auto"
              />
            </div>
            {/* Right: Text content */}
            <div className="flex-1 pt-[110px]">
              <h3 className="text-[38px] font-normal leading-[1.2] tracking-[-0.15px] text-primary mb-3">
                Our <span className="font-semibold italic text-accent">Founder</span>
              </h3>
              <h4 className="text-[60px] font-medium leading-[57px] tracking-[-0.15px] text-black mb-4">
                Deepen<br />Khagram
              </h4>
              <p className="text-[25px] font-normal leading-[57px] tracking-[-0.15px] text-accent">
                Founder &amp; Managing Director
              </p>
              <div className="text-[18px] font-normal leading-[31px] tracking-[-0.15px] text-black mt-2">
                <p className="mb-4">
                  Born in Nairobi, Kenya, Deepen's own migration journey to Australia began in 1985 — shaping the values
                  that Esante stands on today. With a background in accounting, business, and entrepreneurship, Deepen
                  has built and led ventures across services, property, and international trade.
                </p>
                <p className="mb-4">
                  His lived experience as a migrant informs Esanté's people‑first approach — ensuring every decision
                  balances opportunity with responsibility, ambition with ethics.
                </p>
                <p className="mb-0">
                  <em>"Australia gave me opportunity. Esante exists to help others earn it the right way."</em> - Deepen
                  Khagram.
                </p>
              </div>
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
            <div className="relative w-[562px] h-[641px] rounded-[24px] overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover object-top"
                src="/images/about-us/soni-image.png"
                alt="Aashul Soni"
              />
              <div className="absolute left-[29px] right-[29px] bottom-[27px] bg-accent/[0.68] rounded-[25px] min-h-[107px] flex flex-col justify-center px-[37px] py-4">
                <p className="text-[43px] font-medium leading-[1.325] tracking-[-0.15px] text-white">
                  Aashul Soni
                </p>
                <p className="text-[20px] font-normal leading-[57px] tracking-[-0.15px] text-white">
                  Regional Director Of MP, India
                </p>
              </div>
            </div>
            {/* Joshua Michael - RIGHT */}
            <div className="relative w-[562px] h-[641px] rounded-[24px] overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover object-top"
                src="/images/about-us/joush-image.png"
                alt="Joshua Michael"
              />
              <div className="absolute left-[29px] right-[29px] bottom-[27px] bg-accent/[0.68] rounded-[25px] min-h-[107px] flex flex-col justify-center px-[37px] py-4">
                <p className="text-[43px] font-medium leading-[1.325] tracking-[-0.15px] text-white">
                  Joshua Michael
                </p>
                <p className="text-[20px] font-normal leading-[57px] tracking-[-0.15px] text-white">
                  Australian Communication &amp; IELTS Coach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ DREAM & ACTION SECTION (Image Only) ═══════════════ */}
      <section>
        <img
          src={`${process.env.PUBLIC_URL || ''}/images/about-us/dream-action-bg.png`}
          alt="The Dream and The Action"
          className="w-full object-cover"
        />
      </section>

      {/* Spacer before CTA banner */}
      <div className="h-[80px] bg-white" />

    </div>
  );
};

export default AboutUs;
