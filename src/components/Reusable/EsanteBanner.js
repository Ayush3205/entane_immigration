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

const EsanteBanner = ({
  line1 = DEFAULT_CONTENT.line1,
  line2 = DEFAULT_CONTENT.line2,
  line3 = DEFAULT_CONTENT.line3,
  line4 = DEFAULT_CONTENT.line4,
  subtext = DEFAULT_CONTENT.subtext,
  buttonText = DEFAULT_CONTENT.buttonText,
}) => {
  const regularLines = [line1, line3, line4].filter(Boolean);

  return (
    <div className="w-full">
      <div className="relative w-full max-w-[1259px] mx-auto h-[367px] mb-[84px]">
        <div className="absolute top-0 left-[106px] w-[1047px] max-w-[calc(100%-212px)] h-[367px] rounded-[37px] overflow-hidden bg-[#E65100]">
          <img
            src={CTA_BG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-[59px]">
          <div className="flex flex-col items-center">
            {line1 ? (
              <p className="font-poppins text-[42px] font-normal leading-[1.15] text-white tracking-[-0.96px]">
                {renderMultilineText(line1)}
              </p>
            ) : null}

            {line2 ? (
              <p className="font-poppins text-[48px] font-semibold italic leading-[1.15] text-white tracking-[-0.96px]">
                {renderMultilineText(line2)}
              </p>
            ) : null}

            {regularLines.map((line, index) => (
              <p
                key={`${line}-${index}`}
                className="font-poppins text-[42px] font-normal leading-[1.15] text-white tracking-[-0.96px]"
              >
                {renderMultilineText(line)}
              </p>
            ))}
          </div>

          {subtext ? (
            <p className="mt-8 w-full max-w-[708px] font-poppins text-[23px] font-normal leading-normal text-[rgba(255,255,255,0.9)] text-center tracking-[-0.15px]">
              {renderMultilineText(subtext)}
            </p>
          ) : null}

          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent('openConsultationPopup'))
            }
            className="mt-8 flex items-center justify-center bg-white rounded-[16px] h-[36px] w-[181px] overflow-hidden"
          >
            <span className="font-['Inter',sans-serif] text-[19px] font-normal leading-normal text-primary tracking-[-0.15px]">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EsanteBanner;
