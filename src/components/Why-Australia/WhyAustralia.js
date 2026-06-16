import React, { useEffect, useRef, useState } from "react";

const HERO_IMAGE = "/images/why-australia/Hero_Background.png";
const BUILD_FUTURE_IMAGE = "/images/why-australia/Build_your_Future.png";
const STUDY_WORK_IMAGE = "/images/why-australia/Study_Work.png";
const EARN_GROW_IMAGE = "/images/why-australia/Earn_Grow.png";

const opportunitiesSectionRows = [
  {
    id: "study-work",
    image: STUDY_WORK_IMAGE,
    imageAlt: "Student studying in an international campus environment",
    imagePosition: "left",
    imageWidth: "max-w-[340px]",
    desktopImageColumn: "lg:grid-cols-[340px_minmax(0,1fr)]",
    desktopTextMinHeight: "lg:min-h-[340px]",
    titleWidth: "max-w-[603px]",
    bodyWidth: "max-w-[658px]",
    titleClassName:
      "font-poppins text-[30px] font-normal leading-[1.2] tracking-[-0.15px] text-primary sm:text-[36px] lg:text-[45px]",
    titleLines: [
      { text: "Global Opportunities", accent: false },
      { text: "Across ", accent: false, inlineAccent: "Study & Work" },
    ],
    description:
      "Australia faces a growing demand for skilled talent across industries such as healthcare, engineering, IT, trades, and hospitality. This creates real opportunities for individuals looking to study, work, and eventually settle through structured migration pathways.",
    bullets: [
      "✅ High-demand jobs aligned with Skilled Occupation Lists",
      "✅ Strong post-study work and employment opportunities",
      "✅ Clear pathways to Permanent Residency (PR)",
    ],
  },
  {
    id: "earn-grow",
    image: EARN_GROW_IMAGE,
    imageAlt: "Professional working in a global warehouse environment",
    imagePosition: "right",
    imageWidth: "max-w-[290px]",
    desktopImageColumn: "lg:grid-cols-[minmax(0,1fr)_290px]",
    desktopTextMinHeight: "lg:min-h-[290px]",
    titleWidth: "max-w-[642px]",
    bodyWidth: "max-w-[658px]",
    titleClassName:
      "font-poppins text-[26px] font-medium leading-[1.15] tracking-[-0.03em] text-primary sm:text-[34px] md:text-[42px] lg:text-[52px]",
    titleLines: [
      { text: "Earn, Learn & Grow", accent: true },
      { text: "in a Global Environment", accent: false },
    ],
    description:
      "International students in Australia benefit from a practical, career-focused education system while also gaining real-world experience.",
    bullets: [
      "✅ Work part-time while studying",
      "✅ Competitive wages and global exposure",
      "✅ Industry-relevant courses and career pathways",
    ],
  },
];

function CheckBullet({ text }) {
  return (
    <li className="block">
      <span>{text}</span>
    </li>
  );
}

export default function WhyAustralia() {
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const [isSecondSectionVisible, setIsSecondSectionVisible] = useState(false);
  const [isThirdSectionVisible, setIsThirdSectionVisible] = useState(false);
  const [isFourthSectionVisible, setIsFourthSectionVisible] = useState(false);

  useEffect(() => {
    const sectionElement = secondSectionRef.current;
    if (!sectionElement) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSecondSectionVisible(true);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionElement = thirdSectionRef.current;
    if (!sectionElement) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsThirdSectionVisible(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionElement = fourthSectionRef.current;
    if (!sectionElement) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFourthSectionVisible(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="why-australia-page w-full bg-white">
      <section
        className="relative w-full overflow-hidden bg-[#cc6040]"
        aria-label="Why Australia hero"
      >
        <div className="relative w-full">
          <img
            src={HERO_IMAGE}
            alt="Australia hero section"
            className="block h-auto w-full object-cover"
            style={{ aspectRatio: "1440 / 810" }}
          />

          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute left-[10%] top-[18%] md:top-[21%] font-poppins font-semibold uppercase text-[#f6b0a0]"
              style={{
                fontSize: "clamp(16px, 5.625vw, 81px)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
              }}
            >
              Why
            </div>

            <div
              className="absolute left-[49.8%] top-[57%] max-w-[45%] font-poppins font-semibold text-white"
              style={{
                fontSize: "clamp(8px, 1.8vw, 26px)",
                lineHeight: "1.2",
              }}
            >
              Invest in Yourself in a Country that Invests in You
            </div>
          </div>
        </div>
      </section>

      <section
        ref={secondSectionRef}
        className="relative w-full overflow-hidden bg-white px-5 py-[72px] md:px-10 md:py-[92px] lg:px-[56px] lg:py-[108px]"
        aria-labelledby="why-australia-build-future-heading"
      >
        <div className="mx-auto grid w-full max-w-[1340px] grid-cols-1 items-start gap-y-12 lg:grid-cols-[minmax(0,1fr)_456px] lg:gap-x-[96px]">
          <div className="flex max-w-[608px] flex-col lg:min-h-[630px] lg:justify-between">
            <h2
              id="why-australia-build-future-heading"
              className={`font-poppins text-[40px] font-semibold leading-[0.98] tracking-[-0.03em] text-accent transition-all duration-[700ms] ease-out sm:text-[48px] md:text-[58px] lg:text-[64px] ${
                isSecondSectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[24px] opacity-0"
              }`}
            >
              <span className="block whitespace-nowrap">
                Build a Future in One
              </span>
              <span className="block whitespace-nowrap">
                of the{" "}
                <span className="font-medium italic text-primary">
                  World&apos;s Most
                </span>
              </span>
              <span className="block font-medium italic text-primary whitespace-nowrap">
                Opportunity-Driven
              </span>
              <span className="block font-medium italic text-primary whitespace-nowrap">
                Countries
              </span>
            </h2>

            <div
              className={`mt-8 max-w-[560px] font-poppins text-[18px] leading-[1.55] tracking-[-0.015em] text-black transition-all duration-[700ms] ease-out delay-[120ms] md:mt-10 md:text-[23px] md:leading-[1.57] lg:mt-0 ${
                isSecondSectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[20px] opacity-0"
              }`}
            >
              <p className="m-0">
                <span className="font-semibold">Australia</span>
                <span> continues to be a </span>
                <span className="font-semibold">top destination</span>
                <span>
                  {" "}
                  for international students and skilled professionals,
                  offering a strong combination of career growth, world-class
                  education, and long-term migration opportunities.
                </span>
              </p>

              <p className="mb-0 mt-7 md:mt-10">
                With a stable economy, high-quality infrastructure, and a
                globally respected education system, Australia provides the
                ideal environment to build a successful future.
              </p>
            </div>
          </div>

          <div
            className={`mx-auto w-full max-w-[456px] transition-all duration-[850ms] ease-out delay-[80ms] ${
              isSecondSectionVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-[48px] opacity-0 scale-[0.95]"
            }`}
          >
            <div className="relative aspect-[456/630] overflow-hidden rounded-[34px] bg-[#f4efe4] shadow-[0_32px_90px_rgba(0,53,43,0.12)]">
              <img
                src={BUILD_FUTURE_IMAGE}
                alt="Australia opportunity collage featuring university, travel, lifestyle, and visa-approved visuals"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={thirdSectionRef}
        className="w-full bg-cream px-5 py-[72px] md:px-10 md:py-[92px] lg:px-[56px] lg:py-[96px]"
        aria-labelledby="why-australia-opportunities-heading"
      >
        <div className="mx-auto flex w-full max-w-[1292px] flex-col gap-[72px] lg:items-center lg:gap-[104px]">
          { opportunitiesSectionRows.map((row, index) => {
            const isImageLeft = row.imagePosition === "left";
            return (
              <div
                key={row.id}
                className={`grid grid-cols-1 items-center gap-8 transition-all duration-[750ms] ease-out lg:w-fit lg:gap-x-[72px] ${
                  row.desktopImageColumn
                } ${
                  isThirdSectionVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[28px] opacity-0"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {isImageLeft && (
                  <div className={`mx-auto w-full ${row.imageWidth} lg:mx-0 lg:justify-self-center`}>
                    <div className="overflow-hidden rounded-[22px] shadow-[0_18px_60px_rgba(0,53,43,0.08)]">
                      <img
                        src={row.image}
                        alt={row.imageAlt}
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <div
                  className={`flex flex-col ${
                    isImageLeft ? "max-w-[682px]" : "max-w-[642px]"
                  } ${row.desktopTextMinHeight} lg:justify-between lg:justify-self-center`}
                >
                  <div>
                    <h2
                      id={
                        index === 0
                          ? "why-australia-opportunities-heading"
                          : undefined
                      }
                      className={`${row.titleClassName} ${row.titleWidth}`}
                    >
                      {row.titleLines.map((line) => (
                        <span
                          key={line.text}
                          className={`block whitespace-nowrap ${
                            line.accent ? "italic font-semibold text-accent" : ""
                          }`}
                        >
                          {line.text}
                        {line.inlineAccent ? (
                          <span className="italic font-semibold text-accent">
                            {line.inlineAccent}
                          </span>
                        ) : null}
                      </span>
                    ))}
                  </h2>

                    <p
                      className={`mt-4 font-poppins text-[18px] font-normal text-black ${row.bodyWidth}`}
                      style={{ lineHeight: "28px" }}
                    >
                      {row.description}
                    </p>
                  </div>

                  <ul className="mt-5 flex list-none flex-col gap-[10px] p-0 font-poppins text-[18px] leading-[1.32] tracking-[-0.015em] text-black md:text-[22px] lg:mt-3 lg:text-[18px]">
                    {row.bullets.map((bullet) => (
                      <CheckBullet key={bullet} text={bullet} />
                    ))}
                  </ul>
                </div>

                {!isImageLeft && (
                  <div className={`mx-auto w-full ${row.imageWidth} lg:mx-0 lg:justify-self-center`}>
                    <div className="overflow-hidden rounded-[22px] shadow-[0_18px_60px_rgba(0,53,43,0.08)]">
                      <img
                        src={row.image}
                        alt={row.imageAlt}
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section
        ref={fourthSectionRef}
        className="why-australia-lifestyle-section w-full bg-white px-5 pt-[88px] pb-[56px] md:px-10 md:pt-[104px] md:pb-[72px] lg:px-[56px] lg:pt-[120px] lg:pb-[84px]"
      >
        <div
          className={`mx-auto flex w-full max-w-[1032px] flex-col items-center text-center transition-all duration-[800ms] ease-out ${
            isFourthSectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[28px] opacity-0"
          }`}
        >
          <h2
            className="why-australia-lifestyle-title m-0 font-poppins text-[32px] font-medium italic tracking-[-0.15px] text-accent sm:text-[42px] lg:text-[56px]"
            style={{ lineHeight: "150.37%" }}
          >
            <span className="whitespace-nowrap">
              A Lifestyle That Matches Your Ambition
            </span>
          </h2>

          <p
            className="mt-3 mb-0 max-w-[1032px] font-poppins text-center text-[18px] font-normal text-black md:text-[20px] lg:text-[23px]"
            style={{ lineHeight: "38px" }}
          >
            <span className="block">
              Beyond career and education, Australia offers an exceptional quality of life — safe cities,
            </span>
            <span className="block">
              multicultural communities, and a balanced lifestyle that supports both personal and
            </span>
            <span className="block">professional growth.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
