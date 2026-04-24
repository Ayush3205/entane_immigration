import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';
import ConsultationPopup from '../components/Reusable/ConsultationPopup';

// Figma images (node IDs: 333:1903, 333:1906, 333:1900, 331:1851)
const IMG_HERO_BG = '/images/sop-hero-bg.png';
const IMG_78 = '/images/sop-img-78.png'; // Row 1 right: 535×340, borderRadius 37px
const IMG_79 = '/images/sop-img-79.png'; // Row 2 left:  503×322, borderRadius 27px
const IMG_77 = '/images/sop-img-77.png'; // Documents left: 443×433, borderRadius 43px

/** Red cross icon — “Why SOP Matters” right column (Figma asset) */
const IMG_SOP_CROSS = '/images/sop-cross-icon.png';

export default function SopDocumentsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const openConsultation = () => setConsultationOpen(true);

  return (
    <div className="flex flex-col w-full bg-white">
      <Header />

      <div className="flex flex-col w-full overflow-x-hidden">
        <div className="flex flex-col items-center w-full bg-white pb-[67px] pt-[82px] px-6 sm:px-10 lg:px-[100px]">

          {/* ── Hero Text Section — Figma: centered 1192 max ── */}
          <section
            className="flex flex-col items-center justify-center mb-[41px] gap-[20px] w-full max-w-[1192px] mx-auto"
          >
            <h1
              className="font-poppins text-center font-medium text-[28px] underline decoration-[#00352B] underline-offset-[6px]"
              style={{ color: '#00352B', lineHeight: '1.1em', letterSpacing: '-0.56px' }}
            >
              SOP & Other Documents
            </h1>

            <div className="flex flex-col items-center gap-[4px] text-center">
              <p
                className="font-poppins font-semibold italic text-[#FF3300]"
                style={{
                  fontSize: 56,
                  fontWeight: 600,
                  lineHeight: '60px',
                  letterSpacing: '-0.02em',
                }}
              >
                We don't change your story
              </p>
              <p
                className="font-poppins font-normal text-[#1A1A1A]"
                style={{
                  fontSize: 44,
                  fontWeight: 400,
                  lineHeight: '50px',
                  letterSpacing: '-0.02em',
                }}
              >
                we help you tell it better
              </p>
            </div>

            <button
              type="button"
              className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer mt-[4px]"
              style={{ background: '#FF3300' }}
              onClick={openConsultation}
            >
              <span
                className="font-poppins text-center font-medium"
                style={{ color: '#FFFBE9', fontSize: 22, fontWeight: 500, lineHeight: '0.909em' }}
              >
                Get Free SOP with Esante
              </span>
            </button>
          </section>

          {/* ── Hero Background Image – layout_B2E8YL: 1440×747 ── */}
          <section
            className="flex flex-col items-center h-[747px] mb-[100px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${IMG_HERO_BG}')`,
              width: '100vw',
              marginLeft: 'calc(-50vw + 58%)',
            }}
          >
            <div className="flex flex-col items-center justify-end w-full h-full pb-[50px]">
              {/* layout_WUCKEB: 730×123 / borderRadius 48px / fill_TY0IEG rgba(0,53,43,0.94) */}
              <button
                type="button"
                className="flex flex-col items-center justify-center w-[730px] h-[123px] rounded-[48px] border-0 cursor-pointer"
                style={{ background: 'rgba(0, 53, 43, 0.94)' }}
                onClick={openConsultation}
              >
                {/* style_I84XD6: Poppins 600/45px CENTER – layout_0BINCF: 919×44 */}
                <span className="font-poppins flex flex-col items-center w-full">
                  <span
                    className="font-poppins text-center block"
                    style={{
                      color: '#FFFFFF',
                      fontSize: 31,
                      fontWeight: 400,
                      lineHeight: 1.35,
                    }}
                  >
                    GTE-Compliant. Scholarship-Focused.
                  </span>
                  <span
                    className="font-poppins italic text-center block"
                    style={{ color: '#FF3300', fontSize: 45, fontWeight: 600, lineHeight: 1.15 }}
                  >
                    100% Free with Esante.
                  </span>
                </span>
              </button>
            </div>
          </section>

          {/* ── Two-row alternating text / image layout (Figma zig-zag)
              Fixed widths (658+535+gap) exceeded max-w-[1192px] and overflowed — use flex-1 + min-w-0. ── */}
          <section className="flex flex-col w-full max-w-[1192px] mx-auto mb-[166px] box-border gap-[56px] lg:gap-[48px] px-0 min-w-0">

            {/* Row 1: Left text, Right image */}
            <div className="flex flex-col lg:flex-row lg:items-start items-stretch gap-10 lg:gap-8 xl:gap-10 w-full min-w-0">
              <div className="w-full min-w-0 lg:flex-1 lg:basis-0">
                <p
                  className="font-poppins text-[#000000]"
                  style={{ fontSize: 22, fontWeight: 400, lineHeight: '36px', letterSpacing: '-0.15px', whiteSpace: 'nowrap' }}
                >
                  Every university in Australia evaluates more than just<br />
                  your grades — they evaluate your purpose, your clarity,<br />
                  your readiness, and your authenticity. That's why a<br />
                  strong <strong>Statement of Purpose (SOP)</strong> becomes one of the<br />
                  <strong>most important documents</strong> in your entire application.
                  <br /><br />
                  It is not just an academic essay — it is a deciding factor<br />
                  for your <strong>offer letter, visa approval, and scholarship<br />
                  eligibility</strong>.
                </p>
              </div>
              <div className="w-full min-w-0 lg:flex-1 lg:basis-0 flex justify-center lg:justify-end">
                <img
                  src={IMG_78}
                  alt="University application with accepted stamp"
                  className="w-full max-w-[min(535px,100%)] h-auto aspect-[535/340] object-cover rounded-[37px]"
                />
              </div>
            </div>

            {/* Row 2: Left image, Right text */}
            <div className="flex flex-col-reverse lg:flex-row lg:items-center items-stretch gap-10 lg:gap-8 xl:gap-10 w-full min-w-0">
              <div className="w-full min-w-0 lg:flex-1 lg:basis-0 flex justify-center lg:justify-start">
                <img
                  src={IMG_79}
                  alt="Graduates celebrating"
                  className="w-full max-w-[min(503px,100%)] h-auto aspect-[503/322] object-cover rounded-[27px]"
                />
              </div>
              <div className="w-full lg:flex-1 lg:basis-0 flex items-center justify-end">
                <p
                  className="font-poppins font-normal text-[23px] text-black"
                  style={{ lineHeight: '1.5em', letterSpacing: '-0.15px', textAlign: 'right', whiteSpace: 'nowrap' }}
                >
                  At <strong>Esante</strong>, we don't treat SOPs as templates or<br />
                  formalities. We treat them as <strong>strategic documents</strong><br />
                  that clearly explain who you are, why Australia, why<br />
                  this course, and how it fits your future — exactly what<br />
                  Australian universities and visa officers expect.
                </p>
              </div>
            </div>
          </section>

          {/* ── Value proposition — Figma: italic comparison + 100% FREE headline ── */}
          <section className="flex flex-col items-center w-full max-w-[1065px] mx-auto mb-[106px] box-border px-2">
            <div className="flex flex-col items-center w-full gap-[28px]">
              <div
                className="font-poppins text-center text-[#000000] text-[23px] font-normal"
                style={{ maxWidth: 1065, width: '100%', lineHeight: '1.5em', letterSpacing: '-0.15px' }}
              >
                <p className="italic mb-0">
                  While other agencies charge{' '}
                  <span className="font-semibold not-italic">$2,000 - $5,000</span>
                  {' '}
                  for &quot;copy-paste&quot; services,
                </p>
                <p className="mt-2 mb-0">Esante invests in your future.</p>
                <p className="mt-8 mb-0">
                  <span className="font-semibold italic text-[#00352B] text-[30px] leading-[111%] tracking-[-0.15px]">
                    We provide a
                  </span>
                </p>
                <span className="font-semibold italic text-[#FF3300] text-[clamp(48px,8vw,69px)] leading-[111%] tracking-[-0.15px] block my-1">
                  100% FREE
                </span>
                <span className="font-semibold italic text-[#00352B] text-[30px] leading-[150%] tracking-[-0.15px]">
                  custom-written SOP service that aligns your career goals with the Department of Home Affairs&apos; strict &quot;Genuine Student&quot; requirements.
                </span>
                <p className="font-semibold italic text-[#00352B] text-[30px] leading-[150%] tracking-[-0.15px] mt-4 mb-0">
                  We don&apos;t just write to get you admitted; we write to get you funding.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
                style={{ background: '#FF3300' }}
                onClick={openConsultation}
              >
                <span
                  className="font-poppins text-center font-medium"
                  style={{ color: '#FFFBE9', fontSize: 22, fontWeight: 500, lineHeight: '0.909em' }}
                >
                  Get Free SOP with Esante
                </span>
              </button>
            </div>
          </section>

          {/* ── "Why SOP Matters" — Figma: grey panel, orange border, two columns ── */}
          <section className="flex flex-col items-center w-full max-w-[1158px] mx-auto mb-[118px] px-4 sm:px-0">
            <div className="flex flex-col w-full bg-[#F7F7F7] rounded-[39px] border border-solid border-[#FF3300] py-[30px] px-[clamp(20px,4vw,40px)] box-border">
              <h2
                className="font-poppins font-normal text-[clamp(28px,4vw,45px)] text-left text-[#00352B] mb-[24px]"
                style={{ lineHeight: '1.2em', letterSpacing: '-0.33px' }}
              >
                Why{' '}
                <em className="text-[#FF3300] font-semibold italic">SOP Matters</em>
                {' '}
                More Than You Think
              </h2>

              <div className="flex flex-col lg:flex-row items-start w-full gap-[32px] lg:gap-[50px] mb-[26px]">
                <div className="w-full lg:w-[566px] lg:shrink-0 flex flex-col items-start gap-[12px]">
                  <p
                    className="font-poppins font-normal text-[25px] text-black"
                    style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                  >
                    A strong SOP helps you:
                  </p>
                  <ul className="flex flex-col gap-[12px] list-none p-0 m-0 w-full">
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="shrink-0 text-[22px] leading-none mt-[1px]" role="img" aria-label="Yes">
                        ✅
                      </span>
                      <span
                        className="font-poppins font-normal text-[20px] text-black"
                        style={{ lineHeight: '1.35em', letterSpacing: '-0.15px' }}
                      >
                        Meet Genuine Student (GS) requirements
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="shrink-0 text-[22px] leading-none mt-[1px]" role="img" aria-label="Yes">
                        ✅
                      </span>
                      <span
                        className="font-poppins font-normal text-[20px] text-black"
                        style={{ lineHeight: '1.35em', letterSpacing: '-0.15px' }}
                      >
                        Increase chances of merit-based scholarships
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="shrink-0 text-[22px] leading-none mt-[1px]" role="img" aria-label="Yes">
                        ✅
                      </span>
                      <span
                        className="font-poppins font-normal text-[20px] text-black"
                        style={{ lineHeight: '1.35em', letterSpacing: '-0.15px' }}
                      >
                        Avoid visa delays or refusals due to unclear intent
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex-1 min-w-0 flex flex-col items-start gap-[12px] w-full">
                  <p
                    className="font-poppins font-normal text-[22px] text-black"
                    style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                  >
                    A weak or generic SOP can:
                  </p>
                  <ul className="flex flex-col gap-[12px] list-none p-0 m-0 w-full">
                    <li className="flex flex-row items-start gap-[10px]">
                      <img
                        src={IMG_SOP_CROSS}
                        alt=""
                        className="w-[28px] h-[28px] object-contain shrink-0 mt-[1px]"
                        width={28}
                        height={28}
                      />
                      <span
                        className="font-poppins font-normal text-[20px] text-black"
                        style={{ lineHeight: '1.35em', letterSpacing: '-0.15px' }}
                      >
                        Reduce scholarship chances
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <img
                        src={IMG_SOP_CROSS}
                        alt=""
                        className="w-[28px] h-[28px] object-contain shrink-0 mt-[1px]"
                        width={28}
                        height={28}
                      />
                      <span
                        className="font-poppins font-normal text-[20px] text-black"
                        style={{ lineHeight: '1.35em', letterSpacing: '-0.15px' }}
                      >
                        Raise red flags during visa assessment
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <img
                        src={IMG_SOP_CROSS}
                        alt=""
                        className="w-[28px] h-[28px] object-contain shrink-0 mt-[1px]"
                        width={28}
                        height={28}
                      />
                      <span
                        className="font-poppins font-normal text-[20px] text-black"
                        style={{ lineHeight: '1.35em', letterSpacing: '-0.15px' }}
                      >
                        Lead to unnecessary rejection
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center w-full pt-[4px]">
                <button
                  type="button"
                  className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
                  style={{ background: '#FF3300' }}
                  onClick={openConsultation}
                >
                  <span
                    className="font-poppins text-center font-medium"
                    style={{ color: '#FFFBE9', fontSize: 22, fontWeight: 500, lineHeight: '0.909em' }}
                  >
                    Get Free SOP with Esante
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* ── "Documents We Help You With" — Figma: image left, heading + list right ── */}
          <section className="flex flex-col lg:flex-row items-stretch justify-between w-full max-w-[1158px] mx-auto mb-[118px] gap-10 lg:gap-[35px] box-border px-4 sm:px-6 lg:px-0">
            <img
              src={IMG_77}
              alt="Passport and travel documents for Australia"
              className="w-full max-w-[443px] aspect-[443/433] object-cover shrink-0 rounded-[43px] mx-auto lg:mx-0"
            />
            <div className="flex flex-col items-start gap-[26px] pt-[11px] w-full lg:flex-1">
              <h2
                className="font-poppins font-medium text-[clamp(28px,4vw,45px)] text-left leading-[1.2em] tracking-[-0.15px]"
              >
                <span className="text-[#00352B]">Documents</span><br />
                <span className="text-[#FF3300] italic">We Help You </span>
                <span className="text-[#00352B]">With</span>
              </h2>
              <ul
                className="font-poppins font-semibold text-[20px] text-left list-disc pl-6 space-y-2 marker:text-[#00352B]"
                style={{ width: '100%', lineHeight: '1.79em', letterSpacing: '-0.15px', color: 'rgba(0, 0, 0, 0.75)' }}
              >
                <li>Statement of Purpose (SOP / GS Statement)</li>
                <li>Scholarship SOP (where required)</li>
                <li>Letter of Recommendation (LOR) guidance</li>
                <li>Academic &amp; career justification</li>
                <li>Gap explanation (if applicable)</li>
                <li>Resume (Australian format)</li>
                <li>Cover letter (Australian format)</li>
                <li>University-specific SOP customisation</li>
              </ul>
            </div>
          </section>

        </div>
      </div>

      <EsanteBanner />
      <Footer />

      <ConsultationPopup
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
