import React from 'react';

const CTA_BG = '/images/book-free-call-banner-bg.png';

const EsanteBanner = () => {
  return (
    <div className="w-full">
      <div className="relative w-full max-w-[1259px] mx-auto h-[367px] mb-[84px]">

        {/* Background image — 1047×367, offset 106px from left, rounded corners */}
        <div className="absolute top-0 left-[106px] w-[1047px] max-w-[calc(100%-212px)] h-[367px] rounded-[37px] overflow-hidden bg-[#E65100]">
          <img
            src={CTA_BG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Heading — "Think of / Esante as your Australia-study partner / not just an agent." */}
        <div className="absolute top-[59px] left-0 w-full flex flex-col items-center text-center px-4">
          <p className="font-poppins text-[42px] font-normal leading-[1.15] text-white tracking-[-0.96px]">
            Think of
          </p>
          <p className="font-poppins text-[48px] font-semibold italic leading-[1.15] text-white tracking-[-0.96px]">
            Esante as your Australia-study partner
          </p>
          <p className="font-poppins text-[42px] font-normal leading-[1.15] text-white tracking-[-0.96px]">
            not just an agent.
          </p>
        </div>

        {/* Subtext */}
        <p
          className="absolute w-[708px] font-poppins text-[23px] font-normal leading-normal text-[rgba(255,255,255,0.9)] text-center capitalize tracking-[-0.15px]"
          style={{ top: 214, left: '50%', transform: 'translateX(-50%)' }}
        >
          Let Our Experts in Brisbane Guide You Every Step Of The Way.
        </p>

        {/* CTA button (opens lead form) */}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('openConsultationPopup'))}
          className="absolute flex items-center justify-center bg-white rounded-[16px] h-[36px] w-[181px] overflow-hidden"
          style={{ top: 283, left: '50%', transform: 'translateX(-50%)' }}
        >
          <span className="font-['Inter',sans-serif] text-[19px] font-normal leading-normal text-primary tracking-[-0.15px]">
            Book Free Call
          </span>
        </button>

      </div>
    </div>
  );
};

export default EsanteBanner;
