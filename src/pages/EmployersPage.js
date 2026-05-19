import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';

const HERO_IMAGE = '/images/employers/Hero.png';
const EMPLOYERS_CHOOSE_IMAGE = '/images/employers/Employers-Choose.png';
const RED_TAPE_IMAGE = '/images/employers/Red-Tape.png';
const RECRUITMENT_IMAGE = '/images/employers/Recruitment.png';

const INDUSTRY_CARDS = [
  {
    title: 'Healthcare & Nursing',
    body: 'Hospitals, Aged Care, Disability Care',
    image: '/images/employers/Health.png',
  },
  {
    title: 'Hospitality',
    body: 'Chefs, Cooks, Restaurant Managers',
    image: '/images/employers/Hospitality.png',
  },
  {
    title: 'Construction & Trades',
    body: 'Carpenters, Electricians, Boilermakers, Fitters',
    image: '/images/employers/Construction.png',
  },
  {
    title: 'Mining & Resources',
    body: 'Boilermakers, Drillers, Fitters, Heavy Equipment Operators',
    image: '/images/employers/Mining.png',
  },
  {
    title: 'Mechanical Trades',
    body: 'Diesel Motor Mechanics, Automotive Technicians',
    image: '/images/employers/Mechanical.png',
  },
  {
    title: 'Professional Services',
    body: 'Accountants, Engineers, IT professionals',
    image: '/images/employers/Professional.png',
  },
];

function EmployersPage() {
  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="service-page">
      <Header />

      <main className="service-page__main" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <section
          className="relative w-full overflow-hidden bg-[#f7f2e8]"
          style={{
            minHeight: 'clamp(620px, 78vw, 724px)',
            backgroundImage: `url('${HERO_IMAGE}')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div
            className="relative z-[1] flex h-full w-full px-5 py-[128px] sm:px-8 lg:px-[100px]"
            style={{
              minHeight: 'clamp(620px, 78vw, 724px)',
              background:
                'linear-gradient(90deg, rgba(255,251,233,0.96) 0%, rgba(255,251,233,0.93) 21%, rgba(255,251,233,0.78) 35%, rgba(255,251,233,0.16) 53%, rgba(255,251,233,0) 66%)',
            }}
          >
            <div className="flex w-full items-center">
              <div className="flex w-full max-w-[560px] flex-col gap-5 lg:gap-7">
                <h1
                  className="font-poppins text-[#00352B]"
                  style={{
                    fontSize: '72px',
                    fontWeight: 700,
                    letterSpacing: '-0.15px',
                    lineHeight: 'normal',
                  }}
                >
                  For Employers
                </h1>

                <p
                  className="max-w-[520px] font-poppins text-[#FF3300]"
                  style={{
                    fontSize: '30px',
                    fontWeight: 700,
                    letterSpacing: '-0.15px',
                    lineHeight: '131.8%',
                    marginTop: -2,
                  }}
                >
                  Hire Skilled Overseas Talent —
                  <br />
                  Without the Complexity
                </p>

                <div
                  className="max-w-[520px] font-poppins text-black"
                  style={{
                    fontSize: '21px',
                    fontWeight: 400,
                    letterSpacing: '-0.15px',
                    lineHeight: 'normal',
                  }}
                >
                  <p className="m-0">
                    Australia faces critical skill shortages
                    <br />
                    across key industries.
                  </p>
                  <p className="m-0 mt-[8px]">
                    Esante helps you source, sponsor, and
                    <br />
                    onboard skilled overseas talent — end-to-end.
                  </p>
                </div>

                <p
                  className="max-w-[520px] font-poppins text-black"
                  style={{
                    fontSize: '21px',
                    fontWeight: 700,
                    letterSpacing: '-0.15px',
                    lineHeight: 'normal',
                  }}
                >
                  We’re your recruitment + migration partner
                  <br />
                  — not just a sourcing agency.
                </p>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={openConsultation}
                    className="inline-flex items-center justify-center rounded-[10px] border border-[#FF3300] bg-[#FF3300] px-[24px] py-[14px] font-poppins text-white transition-transform duration-200 hover:-translate-y-[1px]"
                    style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: '-0.15px',
                      lineHeight: 1.35,
                    }}
                  >
                    Explore Partnership
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white px-5 py-[72px] sm:px-8 lg:px-[100px] lg:py-[88px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-[52px]">
            <div className="w-full max-w-[473px] flex-shrink-0 overflow-hidden rounded-[34px] lg:rounded-[40px]">
              <img
                src={EMPLOYERS_CHOOSE_IMAGE}
                alt="Smiling professionals giving thumbs up"
                className="block h-full w-full object-cover"
              />
            </div>

            <div className="flex w-full max-w-[630px] flex-col lg:pt-1">
              <h2
                className="font-poppins text-[#00352B]"
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 54px)',
                  fontWeight: 400,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.12,
                }}
              >
                Why Employers Choose
              </h2>
              <p
                className="mt-1 font-poppins italic text-[#FF3300]"
                style={{
                  fontSize: 'clamp(34px, 4.2vw, 54px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                }}
              >
                Esante
              </p>

              <p
                className="font-poppins text-[#00352B]"
                style={{
                  fontSize: 'clamp(24px, 2.25vw, 36px)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.24,
                  marginTop: 28,
                }}
              >
                We handle everything:
              </p>

              <div className="mt-[18px] flex flex-col gap-[10px]">
                {[
                  'Pre-screened global talent',
                  'Skills & visa eligibility checks',
                  'Employer sponsorship pathways',
                  'Migration compliance & documentation',
                  'Onboarding & post-arrival support',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-[10px]">
                    <span
                      aria-hidden="true"
                      className="mt-[3px] flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[4px] bg-[#18B433] text-white"
                      style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}
                    >
                      ✓
                    </span>
                    <p
                      className="m-0 font-poppins text-black"
                      style={{
                        fontSize: 'clamp(18px, 1.55vw, 30px)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.24,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="m-0 max-w-[640px] font-poppins text-black lg:whitespace-nowrap"
                style={{
                  fontSize: 'clamp(18px, 1.45vw, 30px)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.28,
                  marginTop: 28,
                }}
              >
                So your team can focus on business <span>- </span>
                <span className="text-[#FF3300]">not immigration.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#FFFBE9] px-5 py-[72px] sm:px-8 lg:px-[100px] lg:py-[86px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center">
            <h2
              className="text-center font-poppins text-[#00352B]"
              style={{
                fontSize: 'clamp(40px, 5vw, 72px)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.02,
              }}
            >
              Industries We Support
            </h2>

            <p
              className="mt-4 max-w-[900px] text-center font-poppins text-[#00352B]"
              style={{
                fontSize: 'clamp(18px, 1.55vw, 30px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1.35,
              }}
            >
              We work with employers across Australia in high-demand sectors, including:
            </p>

            <div className="mt-[42px] grid w-full grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3">
              {INDUSTRY_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[12px] border border-black/10 bg-white px-[18px] py-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  <img src={card.image} alt="" className="h-[62px] w-[62px] object-contain" />
                  <h3
                    className="mt-[12px] font-poppins text-black"
                    style={{
                      fontSize: 'clamp(26px, 2vw, 30px)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      lineHeight: 1.18,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-[10px] font-poppins text-black/85"
                    style={{
                      fontSize: 'clamp(16px, 1.2vw, 18px)',
                      fontWeight: 400,
                      letterSpacing: '-0.015em',
                      lineHeight: 1.45,
                    }}
                  >
                    {card.body}
                  </p>
                </article>
              ))}
            </div>

            <p
              className="mt-[38px] max-w-[1000px] text-center font-poppins text-black"
              style={{
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1.45,
              }}
            >
              Our global talent pool spans{' '}
              <span className="text-[#FF3300]">Asia, Africa, the Pacific Islands, and beyond</span>
              {' '} - all candidates are screened for skills, experience, and visa readiness.
            </p>

            <button
              type="button"
              onClick={openConsultation}
              className="mt-[34px] inline-flex items-center justify-center rounded-[10px] border border-[#FF3300] bg-[#FF3300] px-[24px] py-[14px] font-poppins text-white transition-transform duration-200 hover:-translate-y-[1px]"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                letterSpacing: '-0.15px',
                lineHeight: 1.5,
              }}
            >
              Explore Partnership
            </button>
          </div>
        </section>

        <section className="w-full bg-white px-5 py-[78px] sm:px-8 lg:px-[100px] lg:py-[92px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-[40px] lg:gap-[68px]">
            <div className="flex w-full max-w-[560px] flex-col pt-[14px] md:pt-[50px]">
              <h2
                className="font-poppins text-[#00352B] md:whitespace-nowrap"
                style={{
                  fontSize: 'clamp(30px, 3vw, 46px)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.04,
                }}
              >
                We Handle the Red Tape.
              </h2>
              <p
                className="font-poppins text-[#FF3300] md:whitespace-nowrap"
                style={{
                  fontSize: 'clamp(30px, 3vw, 46px)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.04,
                  marginTop: 2,
                }}
              >
                You Get the Talent.
              </p>

              <div className="mt-[30px] flex flex-col gap-[30px]">
                <p
                  className="m-0 max-w-[448px] font-poppins text-black"
                  style={{
                    fontSize: 'clamp(16px, 1.38vw, 23px)',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.42,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Sourcing &amp; Vetting:</span>{' '}
                  Pre-qualified candidates meeting Australian standards
                </p>

                <p
                  className="m-0 max-w-[388px] font-poppins text-black"
                  style={{
                    fontSize: 'clamp(16px, 1.38vw, 23px)',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.42,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Visa &amp; Sponsorship:</span>{' '}
                  End-to-end compliance and processing
                </p>

                <p
                  className="m-0 max-w-[430px] font-poppins text-black"
                  style={{
                    fontSize: 'clamp(16px, 1.38vw, 23px)',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.42,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Relocation &amp; Settlement:</span>{' '}
                  Employees arrive ready to work from Day 1
                </p>
              </div>
            </div>

            <div className="w-full max-w-[610px] overflow-hidden rounded-[28px] md:ml-auto lg:rounded-[34px]">
              <img
                src={RED_TAPE_IMAGE}
                alt="Skilled workers smiling together outdoors"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full bg-white px-5 pb-[56px] pt-[8px] sm:px-8 lg:px-[100px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
            <h2
              className="font-poppins italic text-[#FF3300]"
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
              }}
            >
              Visa Pathways We Support
            </h2>

            <p
              className="mt-[26px] font-poppins text-black"
              style={{
                fontSize: 'clamp(18px, 1.9vw, 24px)',
                fontWeight: 400,
                letterSpacing: '-0.15px',
                lineHeight: 1.2,
              }}
            >
              482, 186, 494, 407 &amp; Skilled PR pathways.
            </p>

            <p
              className="mt-[8px] font-poppins text-black"
              style={{
                fontSize: 'clamp(20px, 2vw, 26px)',
                fontWeight: 700,
                letterSpacing: '-0.15px',
                lineHeight: 1.2,
              }}
            >
              Strategic, compliant, and tailored to your workforce needs.
            </p>

            <button
              type="button"
              onClick={openConsultation}
              className="mt-[26px] inline-flex items-center justify-center rounded-[10px] border border-[#FF3300] bg-[#FF3300] px-[24px] py-[14px] font-poppins text-white transition-transform duration-200 hover:-translate-y-[1px]"
              style={{
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '-0.15px',
                lineHeight: 1.35,
              }}
            >
              Explore Partnership
            </button>
          </div>
        </section>

        <section className="w-full bg-white px-5 py-[54px] sm:px-8 lg:px-[100px] lg:py-[78px]">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 md:flex-row md:items-center md:justify-start md:gap-[100px]">
            <div className="flex w-full max-w-[690px] flex-col">
              <h2
                className="font-poppins text-[#00352B]"
                style={{
                  fontSize: 'clamp(34px, 3.6vw, 42px)',
                  fontWeight: 400,
                  letterSpacing: '-0.15px',
                  lineHeight: 1.06,
                }}
              >
                How Our <span className="font-bold text-[#FF3300]">Employer</span>
                <br />
                <span className="font-bold text-[#FF3300]">Recruitment</span> Process Works
              </h2>

              <div className="mt-[34px] flex flex-col gap-[6px]">
                <p
                  className="m-0 font-poppins text-black"
                  style={{
                    fontSize: 'clamp(16px, 1.2vw, 18px)',
                    fontWeight: 400,
                    letterSpacing: '-0.15px',
                    lineHeight: 1.2,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Workforce Assessment</span> - Understanding your hiring needs and timelines
                </p>

                <p
                  className="m-0 font-poppins text-black"
                  style={{
                    fontSize: 'clamp(16px, 1.2vw, 18px)',
                    fontWeight: 400,
                    letterSpacing: '-0.15px',
                    lineHeight: 1.2,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Global Talent Sourcing</span> - Accessing pre-screened international candidates
                </p>

                <p
                  className="m-0 font-poppins text-black"
                  style={{
                    fontSize: 'clamp(16px, 1.2vw, 18px)',
                    fontWeight: 400,
                    letterSpacing: '-0.15px',
                    lineHeight: 1.2,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Skills &amp; Visa Screening</span> - Ensuring eligibility and compliance
                </p>

                <p
                  className="m-0 font-poppins text-black"
                  style={{
                    fontSize: 'clamp(16px, 1.2vw, 18px)',
                    fontWeight: 400,
                    letterSpacing: '-0.15px',
                    lineHeight: 1.2,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Interview Coordination</span> - Managing candidate interviews
                </p>

                <p
                  className="m-0 font-poppins text-black"
                  style={{
                    fontSize: 'clamp(16px, 1.2vw, 18px)',
                    fontWeight: 400,
                    letterSpacing: '-0.15px',
                    lineHeight: 1.2,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Offer &amp; Processing</span> - Handling sponsorship and visa documentation
                </p>

                <p
                  className="m-0 font-poppins text-black"
                  style={{
                    fontSize: 'clamp(16px, 1.2vw, 18px)',
                    fontWeight: 400,
                    letterSpacing: '-0.15px',
                    lineHeight: 1.2,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Post-Arrival Support</span> - Supporting onboarding and settlement
                </p>
              </div>
            </div>

            <div className="w-full max-w-[322px] overflow-hidden rounded-[45px] border-[3px] border-[#1E90FF]">
              <img
                src={RECRUITMENT_IMAGE}
                alt="Employer recruitment meeting around a table"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <div className="w-full bg-white px-5 pb-[84px] pt-[12px] sm:px-8 lg:px-[100px]">
          <EsanteBanner
            line1="Ready to"
            line2="Build a Truly Global Team?"
            line3=""
            line4=""
            subtext="Fill your vacancies with the world’s best talent."
            buttonText="Book Free Call"
            line1ClassName="font-poppins text-[54px] pb-[30px] font-semibold italic leading-[17px] text-white tracking-[-1.08px] text-center"
            line2ClassName="font-poppins text-[54px] font-semibold italic leading-[58px] text-white tracking-[-1.08px] text-center"
            subtextClassName="mt-8 w-full max-w-[800px] pb-[20px] font-poppins text-[34px] font-normal leading-[20px] text-white text-center tracking-[-0.68px]"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default EmployersPage;
