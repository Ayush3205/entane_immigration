import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import AboutUs from '../components/About-Page/AboutUs';
import EsanteBanner from '../components/Reusable/EsanteBanner';

const ABOUT_US_FAQ_ITEMS = [
  {
    question: 'What is Esante and what services does it provide?',
    answer:
      'Esante is an Australia-focused education, migration, and settlement company that helps students and professionals with university admissions, visa processing, accommodation, job support, and post-arrival settlement.',
  },
  {
    question: 'Is Esante a registered migration or education consultancy?',
    answer:
      'Esante works with registered migration and legal professionals in Australia and follows a compliance-first, ethical approach aligned with Australian regulations.',
  },
  {
    question: 'What makes Esante different from other consultants?',
    answer:
      'Unlike traditional consultancies, Esante provides end-to-end support — from course selection and visa processing to accommodation, part-time jobs, and post-arrival settlement in Australia.',
  },
  {
    question: 'Does Esante only help with studying in Australia?',
    answer:
      'No, Esante supports students, skilled professionals, and families through education pathways, skilled migration, and employment opportunities in Australia.',
  },
  {
    question: 'Where is Esante based?',
    answer:
      'Esante operates with strong on-ground support in Australia, particularly in Brisbane, along with global operations to assist international students.',
  },
  {
    question: 'Does Esante provide support after visa approval?',
    answer:
      'Yes, Esante continues supporting students after visa approval with accommodation, job assistance, and complete post-arrival settlement services.',
  },
  {
    question: 'Who is the founder of Esante?',
    answer:
      'Esante was founded by Deepen Khagram, whose personal migration journey to Australia shaped the company’s people-first and ethical approach.',
  },
  {
    question: 'Who are the key people behind Esante?',
    answer:
      'The leadership team includes experienced professionals like Deepen Khagram (Director), Varun Gupta (Legal & Strategy), and global education and migration experts.',
  },
  {
    question: 'Does Esante provide legally compliant migration advice?',
    answer:
      'Yes, all guidance is aligned with Australian immigration laws and supported by qualified professionals to ensure compliance and transparency.',
  },
  {
    question: 'What is Esante’s philosophy?',
    answer:
      'Esante believes migration is not just a transaction but a transformation — focusing on long-term success, ethical pathways, and real outcomes for students.',
  },
  {
    question: 'Does Esante work with Australian universities?',
    answer:
      'Yes, Esante partners with trusted Australian universities and institutions to provide students with the right course and career pathways.',
  },
  {
    question: 'Can Esante help with PR pathways in Australia?',
    answer:
      'Yes, Esante helps students and professionals choose courses and career paths aligned with Australia’s skilled migration and PR opportunities.',
  },
  {
    question: 'Does Esante help with jobs in Australia?',
    answer:
      'Yes, Esante provides part-time job support, job-ready training, and access to verified employers across industries.',
  },
  {
    question: 'Is Esante suitable for first-time international students?',
    answer:
      'Yes, Esante is ideal for students who need complete guidance from scratch — including counselling, applications, visa, and settlement support.',
  },
  {
    question: 'Does Esante provide IELTS or PTE training?',
    answer:
      'Yes, Esante offers free IELTS and PTE training with expert coaching to help students succeed academically and professionally.',
  },
  {
    question: 'How does Esante support students long-term?',
    answer:
      'Esante supports students before arrival, during studies, and after landing in Australia — ensuring smooth transition and long-term success.',
  },
  {
    question: 'Can professionals or families also apply through Esante?',
    answer:
      'Yes, Esante supports not only students but also skilled professionals and families looking to migrate or settle in Australia.',
  },
  {
    question: 'Is Esante focused only on Australia?',
    answer:
      'Yes, Esante specializes exclusively in Australia, ensuring deep expertise, better guidance, and stronger outcomes.',
  },
  {
    question: 'How trustworthy is Esante as a migration partner?',
    answer:
      'Esante follows a transparent, compliance-driven approach with no false promises, making it a reliable long-term partner for your Australia journey.',
  },
  {
    question: 'How can I start my journey with Esante?',
    answer:
      'You can fill out a form or book a consultation, and an Esante expert will guide you step-by-step based on your goals.',
  },
];

const OFFICE_MAP_URL =
  'https://www.google.com/maps?q=2%2F40%20Brookes%20Street%2C%20Bowen%20Hills%20QLD%204006%2C%20Australia&z=16&output=embed';

const OfficeContactSection = () => {
  const [mapFrameKey, setMapFrameKey] = useState(0);

  return (
    <section className="w-full bg-white px-6 py-[56px] md:px-[60px] lg:px-[100px]">
      <div className="mx-auto grid w-full max-w-[1440px] overflow-hidden bg-[#003f34] lg:grid-cols-[0.86fr_1.14fr]">
        <div className="flex min-h-[360px] flex-col justify-center px-8 py-12 sm:px-12 lg:min-h-[430px] lg:px-[60px]">
          <h2 className="font-poppins text-[34px] font-normal leading-tight text-white sm:text-[42px]">
            Head <span className="font-medium italic text-[#FF3300]">Office</span>
          </h2>

        <div className="mt-12 flex flex-col gap-6 text-[16px] leading-[1.45] text-white sm:text-[18px]">
          <a
            href="https://www.google.com/maps/search/?api=1&query=2%2F40%20Brookes%20Street%2C%20Bowen%20Hills%20QLD%204006%2C%20Australia"
            className="flex items-start gap-4 transition-colors hover:text-[#FFB09A]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mt-1 shrink-0 text-[#FF3300]" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </span>
            <span>
              2/40 Brookes Street, Bowen Hills 4006
              <br />
              Queensland, Australia
            </span>
          </a>

          <a
            href="tel:+61409557421"
            className="flex items-center gap-4 transition-colors hover:text-[#FFB09A]"
          >
            <span className="shrink-0 text-[#FFB800]" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.19 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
              </svg>
            </span>
            <span>(+61) 409 557 421</span>
          </a>

          <a
            href="mailto:admin@esante.com.au"
            className="flex items-center gap-4 break-all transition-colors hover:text-[#FFB09A]"
          >
            <span className="shrink-0 text-[#FF6A00]" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 4.25-7.05 5.29a.92.92 0 0 1-1.1 0L4.4 8.25A1 1 0 0 1 5.6 6.65L12 11.45l6.4-4.8a1 1 0 1 1 1.2 1.6Z" />
              </svg>
            </span>
            <span>admin@esante.com.au</span>
          </a>
        </div>
      </div>

      <div className="relative min-h-[320px] bg-[#e7eef6] sm:min-h-[380px] lg:min-h-[430px]">
        <button
          type="button"
          onClick={() => setMapFrameKey((key) => key + 1)}
          className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 bg-white px-3 py-2 text-[13px] font-medium text-[#00352B] shadow-md transition-colors hover:bg-[#FFFBE9] focus:outline-none focus:ring-2 focus:ring-[#FF3300] focus:ring-offset-2"
          aria-label="Reset map to Head Office location"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 3v6h6" />
          </svg>
          Reset map
        </button>
        <iframe
          key={mapFrameKey}
          title="Esante Head Office location map"
          src={OFFICE_MAP_URL}
          className="h-[320px] w-full border-0 sm:h-[380px] lg:h-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      </div>
    </section>
  );
};

function AboutPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="about-page overflow-x-hidden">
      <Header />
      <AboutUs />
      <OfficeContactSection />

      {/* FAQ — Esante & studying/migrating to Australia */}
      <section
        className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
        aria-labelledby="about-faq-heading"
      >
        <h2
          id="about-faq-heading"
          className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
          style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
        >
          Frequently Asked Questions About Esante &amp; Studying/Migrating to Australia
        </h2>

        <div className="w-full max-w-[1064px] flex flex-col">
          {ABOUT_US_FAQ_ITEMS.map((item, index) => {
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
                  aria-controls={`about-faq-answer-${index}`}
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
                        id={`about-faq-answer-${index}`}
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
              Book Free Counselling
            </span>
          </button>
        </div>
      </section>

      <EsanteBanner />
      <Footer />
    </div>
  );
}

export default AboutPage;
