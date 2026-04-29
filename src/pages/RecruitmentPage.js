import React, { useState } from "react";
import Header from "../components/Reusable/Header";
import Footer from "../components/Reusable/Footer";
import EsanteBanner from "../components/Reusable/EsanteBanner";

const HERO_BG = "/images/recruitment/Hero_Background.png";
const HERO_OVERLAY = "/images/recruitment/Hero_Overlay.png";

const RECRUITMENT_FAQ_ITEMS = [
  {
    question: "How can I get a job in Australia with visa sponsorship?",
    answer:
      "You can get a job in Australia with visa sponsorship by applying for roles listed under the Skilled Occupation List (SOL). Employers sponsor skilled workers through visas like Subclass 482 (TSS) or Subclass 186 (PR), allowing you to work and settle in Australia.",
  },
  {
    question:
      "What is the best way to find jobs in Australia for skilled workers?",
    answer:
      "The most effective way is through verified recruitment networks that connect you directly with Australian employers offering sponsorship. This increases your chances of getting genuine job offers compared to applying randomly on job portals.",
  },
  {
    question: "What is a performance-based recruitment model in Australia?",
    answer:
      "A performance-based model means you pay recruitment fees only after receiving a confirmed job offer. There are no upfront charges, making it a risk-free approach for skilled professionals seeking jobs in Australia.",
  },
  {
    question: "Which industries have the highest demand in Australia?",
    answer:
      "High-demand industries in Australia include:\n• Healthcare & Nursing\n• Mining & Resources\n• Trades & Construction\n• Hospitality & Commercial Kitchens\n• Engineering & Technical roles\n• Accounting & Professional Services\n\nThese sectors actively hire international skilled workers.",
  },
  {
    question: "What is the Skilled Occupation List (SOL) in Australia?",
    answer:
      "The Skilled Occupation List (SOL) is a list of professions eligible for skilled migration to Australia. It includes categories like MLTSSL, STSOL, and regional lists, which determine your visa eligibility and PR pathways.",
  },
  {
    question:
      "What visa options are available for skilled workers in Australia?",
    answer:
      "Common visa options include:\n• Subclass 482 – Temporary Skill Shortage (TSS) Visa\n• Subclass 186 – Employer Nomination Scheme (PR)\n• Subclass 189 – Skilled Independent Visa\n• Subclass 190 – State Nomination Visa\n• Subclass 491 – Regional Skilled Visa\n\nThe best option depends on your profile and job offer.",
  },
  {
    question: "Can I get permanent residency (PR) through a job in Australia?",
    answer:
      "Yes, many employer-sponsored jobs lead to PR through visas like Subclass 186 or via skilled migration pathways. Choosing the right occupation and visa strategy is key to long-term settlement.",
  },
  {
    question: "How long does it take to get a sponsored job in Australia?",
    answer:
      "The timeline typically ranges from 1 to 6 months depending on your occupation, experience, and demand. High-demand roles like nurses, trades, and engineers often get faster placement.",
  },
  {
    question: "Do I need IELTS or English test for jobs in Australia?",
    answer:
      "Yes, most visa pathways require English proficiency tests like IELTS or PTE. Strong communication skills also improve your chances of getting selected by employers.",
  },
  {
    question: "What salary can skilled workers expect in Australia?",
    answer:
      "Salaries vary by industry, but typical ranges are:\n• $70,000 to $120,000+ AUD annually for professionals\n• $25–$50 AUD/hour for trades and hospitality roles\n• Mining and specialised roles can offer even higher pay.",
  },
  {
    question: "What documents are required to apply for jobs in Australia?",
    answer:
      "You typically need:\n• Updated CV (Australian format)\n• Educational qualifications\n• Work experience proof\n• English test results\n• Passport\n\nAdditional licensing or registration may be required for some professions.",
  },
  {
    question: "Can I apply for jobs in Australia without migration experience?",
    answer:
      "Yes, as long as you have relevant skills and work experience in a high-demand occupation. Proper guidance helps align your profile with employer and visa requirements.",
  },
  {
    question:
      "Is it safe to apply for jobs in Australia through recruitment agencies?",
    answer:
      "Yes, if the agency follows ethical and transparent practices. Always choose agencies that:\n• Work with verified employers\n• Do not charge upfront fees\n• Provide legal and compliant visa pathways",
  },
  {
    question:
      "How does Esante help skilled professionals get jobs in Australia?",
    answer:
      "Esante provides:\n• Direct employer connections\n• Interview scheduling & preparation\n• Salary negotiation\n• Visa documentation & compliance\n• Sponsorship coordination\n• Post-arrival settlement support\n\nThis ensures a complete end-to-end migration journey.",
  },
  {
    question: "What makes Esante different from other recruitment agencies?",
    answer:
      "Esante operates on a zero-risk, performance-based model:\n• No upfront fees\n• Pay only after receiving an offer letter\n• Direct employer network across Australia\n• End-to-end migration and settlement support",
  },
  {
    question: "Can I apply for multiple job roles in Australia?",
    answer:
      "Yes, depending on your skills and experience, you can apply for multiple roles across industries. This increases your chances of securing a job offer faster.",
  },
  {
    question:
      "Do employers in Australia hire international candidates directly?",
    answer:
      "Yes, especially in high-demand sectors. Many Australian employers actively sponsor overseas workers due to skill shortages across the country.",
  },
];

export default function RecruitmentPage() {
  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent("openConsultationPopup"));

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col items-start w-full bg-white">
      <Header />

      <div className="flex flex-col items-center self-stretch w-full max-w-[1440px] mx-auto bg-white px-6 lg:px-[100px] pt-0">
        <div className="relative w-screen mb-[120px]">
          <div className="relative overflow-hidden w-full h-[90vh]">
            <img
              alt=""
              src={HERO_BG}
              className="absolute inset-0 pointer-events-none"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />

            <div
              className="absolute z-[2] overflow-hidden pointer-events-none"
              style={{
                right: "80px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "636px",
                height: "477px",
                borderRadius: "50px",
                aspectRatio: "4 / 3",
              }}
            >
              <img
                alt=""
                src={HERO_OVERLAY}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div
              className="absolute z-[3] flex flex-col items-start"
              style={{
                left: "clamp(24px, 5vw, 80px)",
                top: "50%",
                transform: "translateY(-50%)",
                gap: "8px",
                maxWidth: "45%",
              }}
            >
              <p
                className="font-poppins font-medium tracking-[-0.56px] text-[#00352B] underline decoration-solid mb-7"
                style={{
                  fontSize: "28px",
                  lineHeight: "28px",
                  height: "21px",
                }}
              >
                Recruitment
              </p>

              <p
                className="font-poppins font-semibold italic text-accent m-0"
                style={{
                  fontSize: "clamp(28px, 3.6vw, 52px)",
                  lineHeight: "1.1",
                }}
              >
                Your Skills. Our Network
              </p>
              <p
                className="font-poppins font-semibold italic text-accent mb-7"
                style={{
                  fontSize: "clamp(28px, 3.6vw, 52px)",
                  lineHeight: "1.1",
                }}
              >
                Your Australian Career
              </p>

              <p
                className="font-poppins font-normal text-primary mb-7"
                style={{
                  fontSize: "clamp(20px, 2.8vw, 21px)",
                  lineHeight: "normal",
                }}
              >
                Australia is calling for skilled professionals. We connect you
                with top employers in Healthcare, Mining, and Trades-and you
                don&apos;t pay our professional fee until you have the Offer Letter
                in your hand.
              </p>

              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center justify-center bg-accent cursor-pointer border-0 mt-1"
                style={{
                  padding: "7px 16px",
                  borderRadius: "20px",
                }}
              >
                <span
                  className="font-poppins font-medium text-cream text-center"
                  style={{
                    fontSize: "clamp(11px, 1vw, 14px)",
                    lineHeight: "1.4",
                  }}
                >
                  Get Free Guidance from Esante
                </span>
              </button>
            </div>
          </div>
        </div>

        <main className="flex flex-col w-full max-w-[1440px] mx-auto">
          <section className="flex flex-col items-center text-center py-[80px] px-6 md:px-[60px] lg:px-[100px]">
            <h2
              className="font-poppins italic text-[#00352B] m-0 w-full max-w-none"
              style={{
                fontSize: "clamp(30px, 4.2vw, 56px)",
                fontWeight: 600,
                lineHeight: "1.05",
                letterSpacing: "-1.12px",
                whiteSpace: "nowrap",
              }}
            >
              We Don&apos;t Get Paid Until You Get Hired.
            </h2>

            <p
              className="font-poppins text-black mt-8 mb-0 w-full max-w-none"
              style={{
                fontSize: "clamp(18px, 1.95vw, 25px)",
                fontWeight: 600,
                lineHeight: "30px",
                whiteSpace: "nowrap",
              }}
            >
              Most agencies ask for thousands of dollars just to &quot;look&quot;
              for a job.
            </p>

            <p
              className="font-poppins font-semibold italic text-accent mt-4 mb-0"
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                fontWeight: 600,
                letterSpacing: "-0.15px",
                lineHeight: "normal",
              }}
            >
              Esante is different.
            </p>

            <p
              className="font-poppins text-black max-w-[980px] mt-6 mb-0"
              style={{
                fontSize: "clamp(16px, 1.9vw, 21px)",
                fontWeight: 400,
                letterSpacing: "-0.15px",
                lineHeight: "1.5",
              }}
            >
              We are so confident in our employer network that we operate on a
              Performance-Based Model.
            </p>

            <p
              className="font-poppins text-black max-w-[980px] mt-4 mb-0"
              style={{
                fontSize: "clamp(16px, 1.9vw, 21px)",
                fontWeight: 400,
                letterSpacing: "-0.15px",
                lineHeight: "1.5",
              }}
            >
              We schedule multiple interviews, negotiate your hourly rate, and
              secure your sponsorship.
              <br />
              You only pay our professional recruitment fee once you receive
              your official Offer Letter.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div
                className="relative flex items-center gap-4 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  width: "280px",
                  height: "90px",
                }}
              >
                <img
                  src="/images/recruitment/Dollar_Background.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="relative z-[1] flex items-center gap-4 px-6 w-full">
                  <img
                    src="/images/recruitment/dollor.png"
                    alt="Dollar icon"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="flex flex-col items-start text-left">
                    <span
                      className="font-poppins text-[#000]"
                      style={{
                        fontSize: "24px",
                        fontWeight: 400,
                        lineHeight: "112%",
                        letterSpacing: "-0.15px",
                      }}
                    >
                      No Job?
                    </span>
                    <span
                      className="font-poppins font-bold text-[#000]"
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "112%",
                        letterSpacing: "-0.15px",
                      }}
                    >
                      You pay $0.
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="relative flex items-center gap-4 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  width: "280px",
                  height: "90px",
                }}
              >
                <img
                  src="/images/recruitment/Drive_Background.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="relative z-[1] flex items-center gap-4 px-6 w-full">
                  <img
                    src="/images/recruitment/drive.png"
                    alt="Results icon"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="flex flex-col items-start text-left">
                    <span
                      className="font-poppins text-[#000]"
                      style={{
                        fontSize: "24px",
                        fontWeight: 400,
                        lineHeight: "112%",
                        letterSpacing: "-0.15px",
                      }}
                    >
                      No Risk.
                    </span>
                    <span
                      className="font-poppins font-bold text-[#000]"
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "112%",
                        letterSpacing: "-0.15px",
                      }}
                    >
                      Just results.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="flex flex-col items-center self-stretch w-full bg-white py-[48px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
            aria-labelledby="recruitment-faq-heading"
          >
            <h2
              id="recruitment-faq-heading"
              className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
              style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                lineHeight: 1.35,
                letterSpacing: "-0.02em",
              }}
            >
              Frequently Asked Questions About Jobs in Australia &amp; Skilled
              Migration Pathways
            </h2>

            <div className="w-full max-w-[1064px] flex flex-col">
              {RECRUITMENT_FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center w-full"
                  >
                    {index > 0 && (
                      <div className="w-full h-[1px] bg-[#00352B]/10" />
                    )}
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-start gap-[24px] py-[24px] text-left focus:outline-none"
                      aria-expanded={isOpen}
                      aria-controls={`recruitment-faq-answer-${index}`}
                    >
                      <div className="flex-1 flex flex-col gap-[8px]">
                        <p
                          className="text-[18px] font-medium text-[#00352B] leading-[1.556]"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {item.question}
                        </p>
                        {isOpen && item.answer && (
                          <p
                            id={`recruitment-faq-answer-${index}`}
                            className="text-[16px] font-normal text-[#00352B] leading-[1.5] whitespace-pre-line"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {item.answer}
                          </p>
                        )}
                      </div>
                      <div className="mt-[2px] flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-[#FF3300] text-[#FF3300] text-[12px] shrink-0">
                        {isOpen ? "−" : "+"}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
        <EsanteBanner />
      </div>
      <Footer />
    </div>
  );
}
