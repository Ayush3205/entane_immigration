import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const COST_OF_LIVING_FAQ_ITEMS = [
  {
    question: 'What is the average cost of living in Australia for international students?',
    answer:
      'The average cost of living in Australia ranges between AUD 1,500 to AUD 2,500 per month, depending on the city, lifestyle, and accommodation type.',
  },
  {
    question: 'How much money do I need monthly to live in Australia as a student?',
    answer:
      'Students typically need around AUD 1,800–2,200 per month to cover rent, food, transport, and personal expenses.',
  },
  {
    question: 'Which city in Australia is cheapest for international students?',
    answer:
      'Cities like Adelaide, Perth, and regional areas are generally more affordable compared to Sydney and Melbourne.',
  },
  {
    question: 'Is Sydney or Melbourne more expensive for students?',
    answer:
      'Sydney is usually the most expensive city, especially for accommodation, while Melbourne is slightly more affordable but still on the higher side.',
  },
  {
    question: 'How much does student accommodation cost in Australia?',
    answer:
      'Accommodation costs range from AUD 150 to AUD 350 per week depending on whether you choose shared housing, private rooms, or student residences.',
  },
  {
    question: 'Can I reduce my living expenses in Australia?',
    answer:
      'Yes, students can reduce costs by sharing accommodation, using student discounts, cooking at home, and working part-time.',
  },
  {
    question: 'How much can I earn as a student in Australia?',
    answer:
      'Students can earn approximately AUD 20–30 per hour through part-time jobs, helping cover a significant portion of living expenses.',
  },
  {
    question: 'Is it possible to cover living expenses through part-time work?',
    answer:
      'Yes, many students manage to cover rent and daily expenses through part-time jobs, especially with proper guidance and job support.',
  },
  {
    question: 'What are the main expenses for students in Australia?',
    answer:
      'Major expenses include accommodation, groceries, transport, phone bills, and personal spending.',
  },
  {
    question: 'How much does food cost per month in Australia?',
    answer:
      'Food and groceries typically cost around AUD 300–600 per month depending on your lifestyle.',
  },
  {
    question: 'What is the cost of transport for students in Australia?',
    answer:
      'Public transport costs range from AUD 100 to AUD 200 per month, with discounts available for students in many cities.',
  },
  {
    question: 'Do international students get discounts in Australia?',
    answer:
      'Yes, students can access discounts on transport, food, entertainment, and shopping through student ID programs.',
  },
  {
    question: 'How accurate is a cost of living calculator for Australia?',
    answer:
      'A cost of living calculator gives a strong estimate based on your preferences, city, and lifestyle, helping you plan your budget effectively.',
  },
  {
    question: 'Why should I use a cost of living calculator before moving to Australia?',
    answer:
      'It helps you understand your expected expenses, plan finances better, and avoid surprises after arrival.',
  },
  {
    question: 'Can Esante help me manage my living costs in Australia?',
    answer:
      'Yes, Esante helps students find affordable accommodation, part-time jobs, and provides budgeting guidance to reduce overall expenses.',
  },
  {
    question: 'How can I save money while studying in Australia?',
    answer:
      'You can save by choosing affordable cities, sharing rent, using public transport, and working part-time.',
  },
  {
    question: 'Is Australia expensive compared to other countries?',
    answer:
      'Australia can be expensive, but high wages, part-time job opportunities, and quality of life make it a valuable investment.',
  },
  {
    question: 'Do I need to show funds for living expenses in my visa application?',
    answer:
      'Yes, students must show proof of sufficient funds to cover tuition fees and living expenses as part of visa requirements.',
  },
  {
    question: 'What is the minimum bank balance required for Australia student visa?',
    answer:
      'The required amount depends on government guidelines but generally includes tuition fees plus one year of living expenses.',
  },
  {
    question: 'How can I plan my budget before moving to Australia?',
    answer:
      'You can use Esante’s cost of living calculator and speak with a counsellor to create a personalised financial plan.',
  },
];

function CostOfLivingCalculatorPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="tools-page">
      <Header />
      <main className="tools-page__main">
        <section className="tools-page__section">
          <h1>Cost of Living Calculator</h1>
          <p>
            This page can later include a calculator to estimate tuition,
            accommodation, and everyday expenses in Australia. For now it
            explains that students will be able to plan their budget and compare
            different cities and study options.
          </p>
        </section>

        {/* FAQ — cost of living in Australia for students */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
          aria-labelledby="cost-of-living-faq-heading"
        >
          <h2
            id="cost-of-living-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Cost of Living in Australia for Students
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {COST_OF_LIVING_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`cost-of-living-faq-answer-${index}`}
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
                          id={`cost-of-living-faq-answer-${index}`}
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
                Calculate Your Cost &amp; Get Free Guidance
              </span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CostOfLivingCalculatorPage;
