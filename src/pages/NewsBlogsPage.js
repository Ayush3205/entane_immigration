import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';
import { NEWS_BLOGS_TEXT_URL, parseNewsBlogs } from '../data/newsBlogs';

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M9.17 15.83A6.67 6.67 0 1 0 9.17 2.5a6.67 6.67 0 0 0 0 13.33ZM17.5 17.5l-3.63-3.63"
        stroke="#667085"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4.17 10h11.66m0 0L10 4.17M15.83 10 10 15.83"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlogCard({ post }) {
  return (
    <article
      className="bg-white flex h-full flex-col justify-between min-w-0 relative"
      style={{
        minHeight: '390px',
        border: '1px solid rgba(0, 53, 43, 0.12)',
        borderRadius: '8px',
        padding: '28px',
        boxShadow: '0px 10px 24px rgba(16,24,40,0.06)',
      }}
    >
      <div className="flex flex-col gap-5 items-start w-full">
        <div
          className="inline-flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(255, 51, 0, 0.08)',
            borderRadius: '999px',
            color: '#FF3300',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '13px',
            fontWeight: 600,
            lineHeight: '20px',
            padding: '5px 12px',
          }}
        >
          {post.category}
        </div>

        <div className="flex flex-col gap-3 items-start w-full">
          <Link
            to={`/news-blogs/${post.slug}`}
            className="text-[#00352B] w-full"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '32px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </Link>
          <p
            className="text-[#667085] text-base w-full"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              lineHeight: '25px',
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.description}
          </p>
        </div>
      </div>

      <div
        className="flex items-center justify-between gap-4 w-full"
        style={{
          borderTop: '1px solid rgba(0, 53, 43, 0.1)',
          marginTop: '28px',
          paddingTop: '20px',
        }}
      >
        <div
          className="flex flex-col items-start min-w-0"
          style={{ fontSize: '14px', lineHeight: '20px' }}
        >
          <p
            className="text-[#00352B]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            {post.author}
          </p>
          <p
            className="text-[#667085]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {post.date}
          </p>
        </div>
        <Link
          to={`/news-blogs/${post.slug}`}
          className="inline-flex items-center justify-center gap-2 shrink-0"
          style={{
            color: '#FF3300',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '15px',
            lineHeight: '22px',
          }}
        >
          Read More
          <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
}

const BLOG_INITIAL = 9;
const BLOG_LOAD_MORE = 9;

const BLOGS_FAQ_ITEMS = [
  {
    question: 'What are the best resources to plan studying in Australia?',
    answer:
      'The best resources include expert blogs, cost of living guides, visa process breakdowns, scholarship information, and real student experiences. Esante’s resources page combines all these insights in one place to help students make informed decisions about studying and settling in Australia.',
  },
  {
    question: 'How can blogs help in planning to study in Australia?',
    answer:
      'Blogs provide real-world insights, updated immigration policies, student experiences, and practical tips on accommodation, jobs, and lifestyle. They help you understand what to expect beyond just university admission.',
  },
  {
    question: 'What topics should I research before moving to Australia as a student?',
    answer:
      'Before moving, you should research:\n• Cost of living in Australia\n• Student visa requirements\n• Part-time job opportunities\n• Accommodation options\n• Post-study work and PR pathways\n• Scholarships and funding options',
  },
  {
    question: 'Where can I find the latest updates on Australia student visas?',
    answer:
      'You can stay updated through trusted migration experts, official government updates, and regularly updated blog resources like Esante’s insights section, which simplifies complex visa changes into easy-to-understand guidance.',
  },
  {
    question: 'How do I choose the right course and university in Australia?',
    answer:
      'Choosing the right course depends on your career goals, budget, PR opportunities, and academic background. Expert guidance and detailed resources can help you align your course selection with long-term migration and career outcomes.',
  },
  {
    question: 'What is the cost of living for international students in Australia?',
    answer:
      'The cost of living typically ranges between AUD 1,500 to AUD 2,500 per month depending on the city, lifestyle, and accommodation choices. You can use a cost of living calculator and expert guidance to estimate your exact expenses.',
  },
  {
    question: 'Can I work while studying in Australia?',
    answer:
      'Yes, international students can work part-time while studying. Many students earn enough to cover their living expenses through jobs in hospitality, retail, and other sectors.',
  },
  {
    question: 'How can I find part-time jobs in Australia as a student?',
    answer:
      'You can find part-time jobs through job portals, local networking, and student support services. Platforms like SEEK and Indeed are commonly used, but expert support can help you access better opportunities faster.',
  },
  {
    question: 'What are the best cities in Australia for international students?',
    answer:
      'Popular student cities include:\n• Melbourne\n• Sydney\n• Brisbane\n• Adelaide\n• Perth\n\nEach city offers different advantages in terms of affordability, job opportunities, and lifestyle.',
  },
  {
    question: 'How do I get scholarships to study in Australia?',
    answer:
      'Scholarships are awarded based on academic performance, SOP quality, and eligibility criteria. A strong application with a well-structured SOP significantly improves your chances of receiving scholarships.',
  },
  {
    question: 'What is the process for applying for an Australia student visa?',
    answer:
      'The process includes:\n• Choosing a course and university\n• Receiving an offer letter\n• Preparing financial and academic documents\n• Writing a GS/SOP statement\n• Lodging your visa application\n\nExpert guidance ensures compliance and reduces chances of rejection.',
  },
  {
    question: 'What happens after I arrive in Australia as a student?',
    answer:
      'After arrival, students need to set up essentials like:\n• Bank account\n• TFN\n• SIM card\n• Accommodation\n• University onboarding\n\nPost-arrival support helps students settle faster and avoid common mistakes.',
  },
  {
    question: 'Can studying in Australia lead to permanent residency (PR)?',
    answer:
      'Yes, many courses are aligned with Australia’s Skilled Occupation List, which can create pathways to PR. However, eligibility depends on multiple factors including course selection, work experience, and visa category.',
  },
  {
    question: 'Why is expert guidance important for studying in Australia?',
    answer:
      'Expert guidance helps you:\n• Avoid costly mistakes\n• Choose the right course and city\n• Improve visa success chances\n• Access better job and accommodation options\n• Plan long-term migration pathways',
  },
];

const cleanFaqText = (value = '') =>
  value
    .replace(/\u00e2\u20ac\u2122/g, "'")
    .replace(/\u00e2\u20ac\u00a2/g, '-')
    .replace(/\u00e2\u02c6\u2019/g, '-');

const DISPLAY_BLOGS_FAQ_ITEMS = BLOGS_FAQ_ITEMS.map((item) => ({
  ...item,
  answer: cleanFaqText(item.answer),
}));

function NewsBlogsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
  const [visibleCount, setVisibleCount] = useState(BLOG_INITIAL);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    fetch(NEWS_BLOGS_TEXT_URL)
      .then((response) => response.text())
      .then((text) => {
        if (isMounted) {
          setBlogPosts(parseNewsBlogs(text));
          setIsLoadingBlogs(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setBlogPosts([]);
          setIsLoadingBlogs(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setVisibleCount(BLOG_INITIAL);
  }, [searchValue]);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const normalizedSearch = searchValue.trim().toLowerCase();
  const filteredPosts = blogPosts.filter((post) => (
    !normalizedSearch ||
    post.title.toLowerCase().includes(normalizedSearch) ||
    post.description.toLowerCase().includes(normalizedSearch) ||
    post.category.toLowerCase().includes(normalizedSearch)
  ));
  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div className="news-blogs-page">
      <Header />
      <main>
        <div className="bg-white flex flex-col" style={{ gap: '65px' }}>

          {/* ── Hero / Header Section (96px gap from navbar per Figma) ── */}
          <div
            className="bg-white flex flex-col items-center w-full"
            style={{ paddingTop: '96px' }}
          >
            <div className="flex flex-col items-center px-8 w-full" style={{ maxWidth: '1280px' }}>
              <div className="flex flex-col gap-10 items-center w-full">
                {/* Heading group */}
                <div className="flex flex-col gap-6 items-center" style={{ maxWidth: '1024px', width: '100%' }}>
                  <div className="flex flex-col gap-4 items-center w-full">
                    {/* Badge */}
                    <div className="flex items-start" style={{ mixBlendMode: 'multiply' }}>
                      <div
                        className="flex items-center justify-center"
                        style={{
                          backgroundColor: '#FF3300',
                          borderRadius: '16px',
                          padding: '4px 12px',
                        }}
                      >
                        <span
                          className="text-[#FFFBE9] text-center"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '20px',
                          }}
                        >
                          Our blog
                        </span>
                      </div>
                    </div>
                    {/* Main title */}
                    <p
                      className="text-[#00352B] text-center w-full"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: '48px',
                        lineHeight: '60px',
                        letterSpacing: '-0.96px',
                      }}
                    >
                      Resources and insights
                    </p>
                  </div>
                  {/* Subtitle */}
                  <p
                    className="text-[#FF3300] text-center w-full"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '30px',
                    }}
                  >
                    The latest industry news, interviews, technologies, and resources.
                  </p>
                </div>

                {/* Search Input */}
                <div className="flex flex-col items-start" style={{ width: 'min(100%, 320px)' }}>
                  <div
                    className="flex gap-2 items-center w-full overflow-hidden"
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid #D0D5DD',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                    }}
                  >
                    <SearchIcon />
                    <input
                      placeholder="Search"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="flex-1 bg-transparent border-0 outline-none text-[#667085] text-base"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        minWidth: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Blog Grid Section ── */}
          <div
            className="flex flex-col items-center w-full"
            style={{ paddingBottom: '96px' }}
          >
            <div
              className="flex flex-col gap-16 items-start px-8 w-full"
              style={{ maxWidth: '1280px' }}
            >
              {/* Card rows */}
              <div className="flex flex-col gap-12 items-start w-full">
                {isLoadingBlogs ? (
                  <div className="flex justify-center w-full py-12">
                    <p className="text-[#667085]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18 }}>
                      Loading blogs...
                    </p>
                  </div>
                ) : visiblePosts.length === 0 ? (
                  <div className="flex justify-center w-full py-12">
                    <p className="text-[#667085]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18 }}>
                      No blogs found matching your search.
                    </p>
                  </div>
                ) : (
                  <div
                    className="w-full"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                      gap: '32px',
                      alignItems: 'stretch',
                    }}
                  >
                    {visiblePosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                )}
              </div>

              {/* Load more */}
              {hasMore && (
                <div className="flex items-start justify-center w-full">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((c) => c + BLOG_LOAD_MORE)}
                    className="flex items-center justify-center gap-2 overflow-hidden"
                    style={{
                      backgroundColor: '#FF3300',
                      border: '1px solid #FF3300',
                      borderRadius: '8px',
                      padding: '12px 20px',
                      boxShadow: '0px 8px 18px 0px rgba(255,51,0,0.22)',
                      cursor: 'pointer',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 5v14M6 13l6 6 6-6" stroke="#FFFBE9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span
                      className="text-[#FFFBE9]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '24px',
                      }}
                    >
                      Load more
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ — studying in Australia, migration & student resources */}
        <section
          className="flex flex-col items-center self-stretch w-full bg-white py-[64px] px-6 md:px-[60px] lg:px-[100px] gap-[24px]"
          aria-labelledby="blogs-faq-heading"
        >
          <h2
            id="blogs-faq-heading"
            className="font-poppins font-bold text-center text-[#00352B] max-w-[900px]"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions About Studying in Australia, Migration &amp; Student Resources
          </h2>

          <div className="w-full max-w-[1064px] flex flex-col">
            {DISPLAY_BLOGS_FAQ_ITEMS.map((item, index) => {
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
                    aria-controls={`blogs-faq-answer-${index}`}
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
                          id={`blogs-faq-answer-${index}`}
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
                Get Free Guidance
              </span>
            </button>
          </div>
        </section>

        <EsanteBanner />
      </main>
      <Footer />
    </div>
  );
}

export default NewsBlogsPage;
