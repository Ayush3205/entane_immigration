import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const RECRUITMENT_FAQ_ITEMS = [
  {
    question: 'How can I get a job in Australia with visa sponsorship?',
    answer:
      'You can get a job in Australia with visa sponsorship by applying for roles listed under the Skilled Occupation List (SOL). Employers sponsor skilled workers through visas like Subclass 482 (TSS) or Subclass 186 (PR), allowing you to work and settle in Australia.',
  },
  {
    question: 'What is the best way to find jobs in Australia for skilled workers?',
    answer:
      'The most effective way is through verified recruitment networks that connect you directly with Australian employers offering sponsorship. This increases your chances of getting genuine job offers compared to applying randomly on job portals.',
  },
  {
    question: 'What is a performance-based recruitment model in Australia?',
    answer:
      'A performance-based model means you pay recruitment fees only after receiving a confirmed job offer. There are no upfront charges, making it a risk-free approach for skilled professionals seeking jobs in Australia.',
  },
  {
    question: 'Which industries have the highest demand in Australia?',
    answer:
      'High-demand industries in Australia include:\n• Healthcare & Nursing\n• Mining & Resources\n• Trades & Construction\n• Hospitality & Commercial Kitchens\n• Engineering & Technical roles\n• Accounting & Professional Services\n\nThese sectors actively hire international skilled workers.',
  },
  {
    question: 'What is the Skilled Occupation List (SOL) in Australia?',
    answer:
      'The Skilled Occupation List (SOL) is a list of professions eligible for skilled migration to Australia. It includes categories like MLTSSL, STSOL, and regional lists, which determine your visa eligibility and PR pathways.',
  },
  {
    question: 'What visa options are available for skilled workers in Australia?',
    answer:
      'Common visa options include:\n• Subclass 482 – Temporary Skill Shortage (TSS) Visa\n• Subclass 186 – Employer Nomination Scheme (PR)\n• Subclass 189 – Skilled Independent Visa\n• Subclass 190 – State Nomination Visa\n• Subclass 491 – Regional Skilled Visa\n\nThe best option depends on your profile and job offer.',
  },
  {
    question: 'Can I get permanent residency (PR) through a job in Australia?',
    answer:
      'Yes, many employer-sponsored jobs lead to PR through visas like Subclass 186 or via skilled migration pathways. Choosing the right occupation and visa strategy is key to long-term settlement.',
  },
  {
    question: 'How long does it take to get a sponsored job in Australia?',
    answer:
      'The timeline typically ranges from 1 to 6 months depending on your occupation, experience, and demand. High-demand roles like nurses, trades, and engineers often get faster placement.',
  },
  {
    question: 'Do I need IELTS or English test for jobs in Australia?',
    answer:
      'Yes, most visa pathways require English proficiency tests like IELTS or PTE. Strong communication skills also improve your chances of getting selected by employers.',
  },
  {
    question: 'What salary can skilled workers expect in Australia?',
    answer:
      'Salaries vary by industry, but typical ranges are:\n• $70,000 to $120,000+ AUD annually for professionals\n• $25–$50 AUD/hour for trades and hospitality roles\n• Mining and specialised roles can offer even higher pay.',
  },
  {
    question: 'What documents are required to apply for jobs in Australia?',
    answer:
      'You typically need:\n• Updated CV (Australian format)\n• Educational qualifications\n• Work experience proof\n• English test results\n• Passport\n\nAdditional licensing or registration may be required for some professions.',
  },
  {
    question: 'Can I apply for jobs in Australia without migration experience?',
    answer:
      'Yes, as long as you have relevant skills and work experience in a high-demand occupation. Proper guidance helps align your profile with employer and visa requirements.',
  },
  {
    question: 'Is it safe to apply for jobs in Australia through recruitment agencies?',
    answer:
      'Yes, if the agency follows ethical and transparent practices. Always choose agencies that:\n• Work with verified employers\n• Do not charge upfront fees\n• Provide legal and compliant visa pathways',
  },
  {
    question: 'How does Esante help skilled professionals get jobs in Australia?',
    answer:
      'Esante provides:\n• Direct employer connections\n• Interview scheduling & preparation\n• Salary negotiation\n• Visa documentation & compliance\n• Sponsorship coordination\n• Post-arrival settlement support\n\nThis ensures a complete end-to-end migration journey.',
  },
  {
    question: 'What makes Esante different from other recruitment agencies?',
    answer:
      'Esante operates on a zero-risk, performance-based model:\n• No upfront fees\n• Pay only after receiving an offer letter\n• Direct employer network across Australia\n• End-to-end migration and settlement support',
  },
  {
    question: 'Can I apply for multiple job roles in Australia?',
    answer:
      'Yes, depending on your skills and experience, you can apply for multiple roles across industries. This increases your chances of securing a job offer faster.',
  },
  {
    question: 'Do employers in Australia hire international candidates directly?',
    answer:
      'Yes, especially in high-demand sectors. Many Australian employers actively sponsor overseas workers due to skill shortages across the country.',
  },
];

export default function RecruitmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex flex-col w-full max-w-[1440px] mx-auto">
        <section className="flex flex-col items-center px-6 md:px-[60px] lg:px-[100px] pt-[48px] pb-[32px] text-center">
          <h1
            className="font-poppins font-bold text-[#00352B] m-0"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            Recruitment
          </h1>
          <p className="font-poppins text-[18px] text-[#333] max-w-[720px] mt-4 mb-0 leading-[1.5]">
            Skilled jobs, employer sponsorship, and migration pathways — get verified opportunities and
            end-to-end support with Esante.
          </p>
        </section>

        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[48px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
          aria-labelledby="recruitment-faq-heading"
        >
          <h2
            id="recruitment-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Jobs in Australia &amp; Skilled Migration Pathways
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {RECRUITMENT_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`recruitment-faq-answer-${index}`}
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
                          id={`recruitment-faq-answer-${index}`}
                          className="text-[16px] font-normal text-[#00352B] leading-[1.5] whitespace-pre-line"
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
              Still have questions? Get personalised guidance from an Esante recruitment expert.
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
                Check My Eligibility for Jobs in Australia
              </span>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
