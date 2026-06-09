import React from 'react';

const CTA_BG = '/images/book-free-call-banner-bg.png';

const DEFAULT_CONTENT = {
  line1: 'Think of',
  line2: 'Esante as your Australia-study partner',
  line3: 'not just an agent.',
  line4: '',
  subtext: 'Let Our Experts in Brisbane Guide You Every Step Of The Way.',
  buttonText: 'Book Free Call',
};

const splitLines = (text = '') => text.split('\n');

const renderMultilineText = (text = '') =>
  splitLines(text).map((line, index, lines) => (
    <React.Fragment key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </React.Fragment>
  ));

const joinClasses = (...classes) => classes.filter(Boolean).join(' ');

const MOBILE_HEADLINE_CLASSES =
  'max-[767px]:text-[28px] max-[767px]:leading-[1.18] max-[767px]:tracking-[0] max-[767px]:pb-0 max-[380px]:text-[24px]';

const MOBILE_ACCENT_HEADLINE_CLASSES =
  'max-[767px]:text-[30px] max-[767px]:leading-[1.16] max-[767px]:tracking-[0] max-[767px]:pb-0 max-[380px]:text-[25px]';

const MOBILE_SUBTEXT_CLASSES =
  'max-[767px]:mt-5 max-[767px]:pb-0 max-[767px]:text-[16px] max-[767px]:leading-[1.45] max-[767px]:tracking-[0]';

const EsanteBanner = ({
  line1 = DEFAULT_CONTENT.line1,
  line2 = DEFAULT_CONTENT.line2,
  line3 = DEFAULT_CONTENT.line3,
  line4 = DEFAULT_CONTENT.line4,
  subtext = DEFAULT_CONTENT.subtext,
  buttonText = DEFAULT_CONTENT.buttonText,
  line1ClassName = "font-poppins text-[30px] font-normal leading-[1.18] text-white tracking-[0] sm:text-[36px] md:text-[42px] md:leading-[1.15]",
  line2ClassName = "font-poppins text-[32px] font-semibold italic leading-[1.16] text-white tracking-[0] sm:text-[40px] md:text-[48px] md:leading-[1.15]",
  regularLineClassName = "font-poppins text-[30px] font-normal leading-[1.18] text-white tracking-[0] sm:text-[36px] md:text-[42px] md:leading-[1.15]",
  subtextClassName = "mt-5 w-full max-w-[708px] font-poppins text-[16px] font-normal leading-[1.45] text-[rgba(255,255,255,0.9)] text-center tracking-[0] sm:mt-6 sm:text-[19px] md:mt-8 md:text-[23px] md:leading-normal",
}) => {
  const regularLines = [line3, line4].filter(Boolean);

  return (
    <div className="esante-banner w-full">
      <div className="relative mx-auto mb-8 w-full max-w-[1259px] px-4 sm:px-6 lg:px-0">
        <div className="relative mx-auto min-h-[332px] w-full max-w-[1047px] overflow-hidden rounded-[24px] bg-[#E65100] px-5 py-10 sm:min-h-[350px] sm:rounded-[30px] sm:px-8 md:min-h-[367px] md:rounded-[37px] md:px-10">
          <img
            src={CTA_BG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex min-h-[252px] flex-col items-center justify-center text-center sm:min-h-[270px] md:min-h-[287px]">
            <div className="flex flex-col items-center">
              {line1 ? (
                <p className={joinClasses(line1ClassName, MOBILE_HEADLINE_CLASSES)}>
                  {renderMultilineText(line1)}
                </p>
              ) : null}

              {line2 ? (
                <p className={joinClasses(line2ClassName, MOBILE_ACCENT_HEADLINE_CLASSES)}>
                  {renderMultilineText(line2)}
                </p>
              ) : null}

              {regularLines.map((line, index) => (
                <p
                  key={`${line}-${index}`}
                  className={joinClasses(regularLineClassName, MOBILE_HEADLINE_CLASSES)}
                >
                  {renderMultilineText(line)}
                </p>
              ))}
            </div>

            {subtext ? (
              <p className={joinClasses(subtextClassName, MOBILE_SUBTEXT_CLASSES)}>
                {renderMultilineText(subtext)}
              </p>
            ) : null}

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent('openConsultationPopup'))
              }
              className="mt-6 flex min-h-[44px] min-w-[172px] items-center justify-center overflow-hidden rounded-[14px] bg-white px-6 transition-colors hover:bg-[#FFFBE9] focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-[#E65100] md:mt-8 md:h-[36px] md:min-h-0 md:w-[181px] md:px-0 md:rounded-[16px]"
            >
              <span className="font-['Inter',sans-serif] text-[16px] font-normal leading-normal text-primary tracking-[0] md:text-[19px]">
                {buttonText}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsanteBanner;
