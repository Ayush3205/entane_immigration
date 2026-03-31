import React, { useState } from "react";

// ========== Config / Data ==========

const STEP_CARDS = [
  {
    number: "01",
    title: "Browse and Choose",
    description:
      "Explore universities and courses that match your academic goals, budget, and preferences.",
    image: "/images/home-page/students.png",
  },
  {
    number: "02",
    title: "Apply with Ease",
    description:
      "Complete applications online, upload documents once, and apply to multiple universities.",
    image: "/images/home-page/professionals.png",
  },
  {
    number: "03",
    title: "Get Expert Support",
    description:
      "Receive guidance from counselors who understand regional requirements and visa processes.",
    image: "/images/home-page/migration.png",
  },
];

const TESTIMONIALS = [
  { name: "John Deo",  university: "ABCD University", image: "/images/ielts-testi-1.png" },
  { name: "Sarah K.",  university: "Melbourne Uni",   image: "/images/ielts-testi-2.png" },
  { name: "Alex M.",   university: "Sydney Uni",      image: "/images/ielts-testi-3.png" },
  { name: "Priya R.",  university: "RMIT University", image: "/images/ielts-testi-4.png" },
  { name: "James L.",  university: "Monash Uni",      image: "/images/ielts-josh-photo.png" },
  { name: "Nina T.",   university: "ANU",             image: "/images/ielts/testimonial.png" },
  { name: "Omar B.",   university: "UTS Sydney",      image: "/images/ielts/testimonial (3).png" },
];

const LIFESTYLE_BOXES = [
  { left: -23, top: 10, width: 129, height: 154 },
  { left: 356, top: 36, width: 95, height: 77 },
  { left: 356, top: 10, width: 108, height: 103 },
  { left: 756, top: -77, width: 129, height: 154 },
  { left: 174, top: 351, width: 129, height: 154 },
  { left: 1130, top: 313, width: 129, height: 154 },
  { left: 756, top: 351, width: 129, height: 154 },
  { left: 1111, top: -41, width: 129, height: 154 },
];

const CAREER_CATEGORIES = [
  "Counsellors",
  "Working Professionals",
  "College Students",
  "Class 11-12",
  "Class 10",
  "Class 8-9",
  "Study Abroad",
];

const CAREER_SERVICES_BY_CATEGORY = {
  "Working Professionals": [
    {
      image: "/images/home-page/professionals.png",
      title: "Masterclass For Working Professionals",
      features: [
        "13 Short Course Bundle",
        "Gain Insights from Industry Experts",
      ],
      price: "6,500/-",
    },
    {
      image: "/images/home-page/image 52.png",
      title: "Career And Job Switch Guidance",
      features: [
        "Psychometric Test+1-4 Video Sessions",
        "6 Months Support",
      ],
      price: "5,000-10,000/-",
    },
    {
      image: "/images/home-page/image 53.png",
      title: "LinkedIn, Resume Creation & Review",
      features: [
        "Updated LinkedIn & Resume",
        "Unlimited Edits For 4 Weeks",
      ],
      price: "10,000/-",
    },
  ],
  Counsellors: [
    {
      image: "/images/home-page/students.png",
      title: "Counsellor Training Program",
      features: ["Certification Course", "Expert-Led Sessions"],
      price: "8,000/-",
    },
    {
      image: "/images/home-page/image 54.png",
      title: "Career Counselling Workshop",
      features: ["2-Day Intensive", "Hands-On Tools"],
      price: "4,500/-",
    },
    {
      image: "/images/home-page/skill-1.png",
      title: "Student Assessment Toolkit",
      features: ["Psychometric & Aptitude", "1 Month Access"],
      price: "3,000/-",
    },
  ],
  "College Students": [
    {
      image: "/images/home-page/students.png",
      title: "Campus to Career Program",
      features: ["12 Module Course", "Placement Support"],
      price: "7,500/-",
    },
    {
      image: "/images/home-page/course-management-1.jpg",
      title: "Internship Readiness",
      features: ["Resume & Interview Prep", "3 Months Mentorship"],
      price: "5,500/-",
    },
    {
      image: "/images/home-page/skill-2.png",
      title: "Skill Building Bootcamp",
      features: ["Industry-Ready Skills", "Certificate Included"],
      price: "6,000/-",
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can upgrade, downgrade, or switch plans at any time from your account settings. Changes are applied at the start of your next billing cycle so you're never double-charged.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Your account will remain active until the end of the current billing period, and you won't be billed again unless you choose to reactivate.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes. You can add your company name, GST/VAT details, billing address, or purchase order numbers to your invoice from the billing section before the next payment is processed.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill you automatically at the beginning of each billing cycle using the payment method saved on your account. You can download detailed invoices and payment history at any time from your dashboard.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Go to your profile settings, update the email field, and confirm the change via the verification link we send to your new email address. Once verified, all notifications and login will use the new email.",
  },
];

// ========== Component ==========

function TestimonialCard({ img, name, university, height, dimmed }) {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] bg-[#E5E7EB] w-full"
      style={{ height: height || 270, flexShrink: 0 }}
    >
      {/* Photo */}
      <img
        src={img}
        alt={name || "testimonial"}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dimmed overlay for outer columns */}
      {dimmed && (
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.35)" }} />
      )}

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 48, height: 48,
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          }}
        >
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path d="M15 7.268a2 2 0 010 3.464L3 17.856a2 2 0 01-3-1.732V1.876A2 2 0 013 .144l12 6.124z" fill="#1a1a1a" />
          </svg>
        </div>
      </div>

      {/* Name bar */}
      <div
        className="absolute bottom-[10px] left-[10px] right-[10px] flex items-center justify-center"
        style={{
          background: "rgba(30,30,30,0.62)",
          backdropFilter: "blur(6px)",
          borderRadius: 999,
          padding: "6px 14px",
        }}
      >
        <span className="font-poppins text-white text-[12px] whitespace-nowrap truncate" style={{ fontWeight: 400 }}>
          {name} | {university}
        </span>
      </div>
    </div>
  );
}

export default function WhyAustralia() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeCareerCategoryIndex, setActiveCareerCategoryIndex] =
    useState(1);

  const activeCategoryName = CAREER_CATEGORIES[activeCareerCategoryIndex];
  const currentServices =
    CAREER_SERVICES_BY_CATEGORY[activeCategoryName] ||
    CAREER_SERVICES_BY_CATEGORY["Working Professionals"];

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col self-stretch bg-white">
        {/* ===== Hero Section ===== */}
        <section className="w-full bg-white overflow-hidden lg:h-[865px]">
          <div className="flex flex-col lg:flex-row w-full h-full lg:h-[865px]">

            {/* ── LEFT: text — Figma structure: extrabold heading, muted desc, 2 pill CTAs, avatars ── */}
            <div className="w-full lg:w-[58%] flex flex-col justify-center px-[24px] md:px-[60px] lg:px-[80px] py-[60px] lg:py-[100px]">

              <h1
                className="font-poppins text-black mb-[20px]"
                style={{ fontSize: "clamp(36px, 4.8vw, 68px)", fontWeight: 800, lineHeight: 1.07, letterSpacing: "-1.5px" }}
              >
                Turn Your Ideas<br />
                into Stunning<br />
                Visuals with AI
              </h1>

              <p
                className="text-black font-poppins mb-[36px]"
                style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.5, maxWidth: 440 }}
              >
                Describe anything you imagine, and let our AI bring it to life
                in breathtaking, high-quality images.
              </p>

              {/* CTA Buttons — Figma: dark pill + outlined pill */}
              <div className="flex items-center gap-[12px] flex-wrap mb-[52px]">
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('openConsultationPopup'))}
                  className="px-[28px] py-[14px] bg-black text-white rounded-full text-[15px] font-semibold font-poppins transition-opacity hover:opacity-80"
                >
                  Start Creating
                </button>
                <button
                  type="button"
                  className="px-[28px] py-[14px] bg-white text-black rounded-full text-[15px] font-semibold font-poppins transition-colors hover:bg-gray-50"
                  style={{ border: "1.5px solid #D1D5DB" }}
                >
                  Explore Gallery
                </button>
              </div>

              {/* Avatar social proof — Figma: overlapping circles + bold count */}
              <div className="flex items-center gap-[10px]">
                <div className="flex -space-x-[8px]">
                  {[
                    "/images/ielts-testi-1.png",
                    "/images/ielts-testi-3.png",
                    "/images/home-page/gallery-2.png",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-[34px] h-[34px] rounded-full overflow-hidden bg-gray-200 shrink-0"
                      style={{ border: "2px solid #fff" }}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="font-poppins" style={{ fontSize: 13, color: "rgba(0,0,0,0.45)", lineHeight: 1.5 }}>
                  Join with{" "}
                  <span style={{ fontWeight: 700, color: "rgba(0,0,0,0.75)" }}>2100+ Users</span>{" "}
                  and start generating images now
                </p>
              </div>
            </div>

            {/* ── RIGHT: 2 columns × 2 images, full-width to right edge ── */}
            <div className="hidden lg:flex lg:w-[42%] h-full pl-[20px] py-[30px] gap-[16px]">

              {/* Column 1 — starts 50px lower, short top + tall bottom */}
              <div className="flex-1 flex flex-col gap-[16px]" style={{ marginTop: 50 }}>
                <div className="rounded-[20px] overflow-hidden shrink-0" style={{ height: 220 }}>
                  <img
                    src="/images/home-page/gallery-6.png"
                    alt="Melbourne"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-[20px] overflow-hidden min-h-0">
                  <img
                    src="/images/home-page/australia.png"
                    alt="Sydney Opera House"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Column 2 — starts at top, tall top + short bottom, no right padding = flush to edge */}
              <div className="flex-1 flex flex-col gap-[16px]">
                <div className="flex-1 rounded-[20px] overflow-hidden min-h-0">
                  <img
                    src="/images/home-page/gallery-3.png"
                    alt="Graduation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[20px] overflow-hidden shrink-0" style={{ height: 180 }}>
                  <img
                    src="/images/home-page/gallery-5.png"
                    alt="Campus life"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ===== Steps Section ===== */}
        <section className="self-stretch bg-white py-[56px] md:py-[64px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <p className="text-center text-[#111827] text-[16px] md:text-[18px] font-medium mb-[40px] font-poppins leading-[1.6]">
              Three simple steps to start your international education journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {STEP_CARDS.map((step) => (
                <article
                  key={step.number}
                  className="flex flex-col bg-[#E6F7EC] rounded-[20px] overflow-hidden"
                >
                  <div className="p-[12px] pb-0">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[180px] md:h-[200px] object-cover rounded-[16px]"
                    />
                  </div>
                  <div className="flex-1 p-[20px] pt-[16px]">
                    <p className="text-[#047857] text-[14px] font-semibold mb-[4px] font-poppins">
                      {step.number}
                    </p>
                    <h3 className="text-[#111827] text-[20px] font-bold mb-[8px] leading-[1.3] font-poppins">
                      {step.title}
                    </h3>
                    <p className="text-[#4B5563] text-[14px] leading-[1.6] font-poppins">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}

              {/* Connect With Us Card */}
              <article className="flex flex-col bg-gradient-to-b from-[#22C55E] to-[#047857] text-white rounded-[20px] p-[24px] md:p-[28px] justify-between">
                <div>
                  <h3 className="text-[22px] font-semibold mb-[12px] font-poppins leading-[1.3]">
                    Connect With Us
                  </h3>
                  <p className="text-[14px] md:text-[15px] leading-[1.6] mb-[24px] opacity-90 font-poppins">
                    Have questions or need personalised advice? Our team is here
                    to help you every step of the way.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-[24px] py-[10px] rounded-full bg-white text-[#047857] text-[14px] font-medium hover:bg-gray-100 transition-colors self-start font-poppins"
                >
                  Get Started Now →
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* ===== Lifestyle & Culture Section ===== */}
        <section className="w-full overflow-hidden hidden lg:block" style={{ height: 627 }}>
          <div
            className="relative mx-auto"
            style={{ width: 1240, height: 467, marginTop: 80 }}
          >
            {LIFESTYLE_BOXES.map((box, i) => (
              <div
                key={i}
                className="absolute bg-[#00352B] rounded-[11px]"
                style={{
                  left: box.left,
                  top: box.top,
                  width: box.width,
                  height: box.height,
                }}
              />
            ))}
            <h2
              className="absolute font-poppins font-semibold text-[58px] leading-[1.5] text-black text-center"
              style={{ left: 355.5, top: 190, width: 529 }}
            >
              Lifestyle & Culture
            </h2>
          </div>
        </section>
        {/* Mobile fallback for Lifestyle & Culture */}
        <section className="block lg:hidden py-[48px] px-6">
          <h2 className="text-center font-poppins font-semibold text-[36px] leading-[1.5] text-black">
            Lifestyle & Culture
          </h2>
        </section>

        {/* ===== Career Services Section ===== */}
        <section className="self-stretch py-[64px] md:py-[80px] bg-[#FFFBE9]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            {/* Heading */}
            <h2 className="text-black font-bold text-center mb-[16px] font-poppins leading-[1.15]"
              style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
            >
              Career Services Tailored For You
              <span
                className="inline-block w-[10px] h-[10px] rounded-full bg-[#FF3300] align-middle ml-[4px] mb-[8px]"
                aria-hidden
              />
            </h2>
            <p className="text-black/60 text-[16px] md:text-[18px] text-center max-w-[560px] mx-auto mb-[40px] font-poppins leading-[1.6]">
              Our services are meticulously designed to unveil your potential,
              interests, learning styles, and skills, scientifically.
            </p>

            {/* Category Tabs — active tab connects directly to container with curves */}
            <div className="flex flex-wrap justify-center gap-[6px] mb-0 relative z-10">
              {CAREER_CATEGORIES.map((name, i) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveCareerCategoryIndex(i)}
                  className={
                    i === activeCareerCategoryIndex
                      ? "career-tab-active font-poppins"
                      : "px-[22px] py-[9px] rounded-full text-[15px] font-medium font-poppins text-black/70 bg-transparent hover:bg-black/5 transition-colors"
                  }
                >
                  {name}
                </button>
              ))}
            </div>

            {/* ── Large green outer container ── */}
            <div
              className="rounded-[24px] px-[14px] pb-[14px] pt-[24px]"
              style={{ backgroundColor: "#3D9E56", marginTop: -1 }}
            >

              {/* Service Cards grid — inside the green container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
                {currentServices.map((service) => (
                  <article
                    key={service.title}
                    className="flex flex-col rounded-[16px] overflow-hidden"
                    style={{ backgroundColor: "#4CAF50" }}
                  >
                    {/* Card image — fills card top edge */}
                    <img
                      src={service.image}
                      alt=""
                      className="w-full object-cover"
                      style={{ height: 220, borderRadius: "16px 16px 0 0" }}
                    />

                    {/* Card body */}
                    <div className="flex-1 p-[18px] pt-[16px] text-white flex flex-col">
                      <h3 className="font-bold text-[17px] leading-[1.3] mb-[14px] font-poppins">
                        {service.title}
                      </h3>

                      {/* Features */}
                      <ul className="space-y-[9px] text-[13px] mb-[12px]">
                        {service.features.map((text, fi) => (
                          <li key={text} className="flex items-start gap-[9px] font-poppins">
                            {fi === 0 ? (
                              <svg className="shrink-0 mt-[2px]" width="17" height="17" viewBox="0 0 18 18" fill="none">
                                <rect width="18" height="18" rx="4" fill="rgba(255,255,255,0.25)" />
                                <rect x="4" y="5" width="6" height="1.5" rx="0.75" fill="white" />
                                <rect x="4" y="8" width="10" height="1.5" rx="0.75" fill="white" />
                                <rect x="4" y="11" width="8" height="1.5" rx="0.75" fill="white" />
                              </svg>
                            ) : (
                              <svg className="shrink-0 mt-[2px]" width="17" height="17" viewBox="0 0 18 18" fill="none">
                                <rect width="18" height="18" rx="4" fill="rgba(255,255,255,0.25)" />
                                <path d="M5 9.5L7.5 12L13 7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price */}
                      <p className="flex items-center gap-[7px] text-[13px] font-medium mb-[16px] font-poppins">
                        <span className="inline-flex items-center justify-center w-[19px] h-[19px] rounded-full bg-white/25 text-[10px] font-bold shrink-0">
                          ₹
                        </span>
                        <span>{service.price}</span>
                      </p>

                      {/* View Program — solid white button */}
                      <button
                        type="button"
                        className="mt-auto self-start px-[22px] py-[8px] bg-white text-[#00352B] rounded-full text-[13px] font-semibold hover:bg-white/90 transition-colors font-poppins"
                      >
                        View Program
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Carousel Pagination — inside the green container */}
              <div className="flex items-center justify-center gap-[10px] mt-[20px] pb-[4px]">
                <button
                  type="button"
                  className="w-[28px] h-[28px] flex items-center justify-center text-white text-[18px] font-bold hover:opacity-70 transition-opacity"
                  aria-label="Previous"
                >
                  &lt;
                </button>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all ${
                      i === 0
                        ? "w-[10px] h-[10px] bg-white"
                        : "w-[9px] h-[9px] border-[2px] border-white/60 bg-transparent"
                    }`}
                  />
                ))}
                <button
                  type="button"
                  className="w-[28px] h-[28px] flex items-center justify-center text-white text-[18px] font-bold hover:opacity-70 transition-opacity"
                  aria-label="Next"
                >
                  &gt;
                </button>
              </div>

            </div>{/* end green outer container */}
          </div>
        </section>

        {/* ===== Testimonials Section — exact Figma layout (node 259:2077) ===== */}
        <section className="w-full overflow-hidden bg-white py-[64px]">

          {/* Header */}
          <div className="text-center mb-[52px] px-6">
            <span className="inline-flex items-center gap-[6px] px-[20px] py-[9px] text-[14px] bg-[#3D9E56] text-white rounded-full mb-[20px] font-medium font-poppins">
              ✦ Testimonials
            </span>
            <h2 className="text-[42px] md:text-[56px] font-bold font-poppins leading-[1.2] text-black">
              What Our Students Say
            </h2>
            <p className="text-[#6B7280] mt-[16px] text-[16px] font-poppins leading-[1.6] max-w-[620px] mx-auto">
              Hear from students who have successfully started their
              international education journey
            </p>
          </div>

          {/* ── Desktop: 5-col staggered grid — exact Figma proportions ── */}
          <div
            className="hidden lg:flex items-start gap-[18px]"
            style={{ marginLeft: -20, marginRight: -20 }}
          >
            {/* Col 1 — outer left, staggered 32px lower, dimmed */}
            <div className="flex-1" style={{ marginTop: 32 }}>
              <TestimonialCard
                img={TESTIMONIALS[0].image}
                name={TESTIMONIALS[0].name}
                university={TESTIMONIALS[0].university}
                height={270}
                dimmed
              />
            </div>

            {/* Col 2 — 2 stacked equal height */}
            <div className="flex-1 flex flex-col gap-[14px]">
              <TestimonialCard
                img={TESTIMONIALS[1].image}
                name={TESTIMONIALS[1].name}
                university={TESTIMONIALS[1].university}
                height={175}
              />
              <TestimonialCard
                img={TESTIMONIALS[5].image}
                name={TESTIMONIALS[5].name}
                university={TESTIMONIALS[5].university}
                height={175}
              />
            </div>

            {/* Col 3 — center, tallest */}
            <div className="flex-1">
              <TestimonialCard
                img={TESTIMONIALS[2].image}
                name={TESTIMONIALS[2].name}
                university={TESTIMONIALS[2].university}
                height={330}
              />
            </div>

            {/* Col 4 — 2 stacked equal height */}
            <div className="flex-1 flex flex-col gap-[14px]">
              <TestimonialCard
                img={TESTIMONIALS[3].image}
                name={TESTIMONIALS[3].name}
                university={TESTIMONIALS[3].university}
                height={175}
              />
              <TestimonialCard
                img={TESTIMONIALS[6].image}
                name={TESTIMONIALS[6].name}
                university={TESTIMONIALS[6].university}
                height={175}
              />
            </div>

            {/* Col 5 — outer right, staggered 32px lower, dimmed */}
            <div className="flex-1" style={{ marginTop: 32 }}>
              <TestimonialCard
                img={TESTIMONIALS[4].image}
                name={TESTIMONIALS[4].name}
                university={TESTIMONIALS[4].university}
                height={270}
                dimmed
              />
            </div>
          </div>

          {/* Mobile: 2-col grid */}
          <div className="grid grid-cols-2 gap-[14px] lg:hidden px-6">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <TestimonialCard
                key={i}
                img={t.image}
                name={t.name}
                university={t.university}
                height={200}
              />
            ))}
          </div>

        </section>

        {/* ===== FAQ Section (Exact Figma Specs) ===== */}
        <section className="flex flex-col items-center self-stretch bg-white py-[80px] px-[100px] max-md:px-[24px] max-md:py-[48px] gap-[20px]">
          <h2 className="font-poppins font-bold text-[74px] max-lg:text-[48px] max-md:text-[32px] leading-[1.5] text-[#00352B]">
            Frequently Asked Questions
          </h2>
          <div className="w-full max-w-[1064px] flex flex-col">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="flex flex-col items-center">
                  {index > 0 && (
                    <div className="w-full h-[1px] bg-[#00352B]/10" />
                  )}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start gap-[24px] py-[24px] text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
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
                          id={`faq-answer-${index}`}
                          className="text-[16px] font-normal text-[#00352B] leading-[1.5]"
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
      </div>
    </div>
  );
}

