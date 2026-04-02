import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { end: 140000, suffix: ' +', format: 'int', delay: 'delay-200' },
  { end: 1.9, suffix: 'm +', format: 'decimal', delay: 'delay-[320ms]' },
  { end: 13000, suffix: ' +', format: 'int', delay: 'delay-[440ms]' },
];

const DURATION_MS = 2000;
const easeOutQuart = (t) => 1 - (1 - t) ** 4;

function useCountUp(isInView, config) {
  const [display, setDisplay] = useState(config.format === 'int' ? '0' : '0.0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();
    const { end, format } = config;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutQuart(progress);
      const current = eased * end;

      if (format === 'int') {
        setDisplay(Math.round(current).toLocaleString());
      } else {
        setDisplay(current.toFixed(1));
      }

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, config]);

  return display;
}

const AustraliaSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stat1 = useCountUp(isInView, STATS[0]);
  const stat2 = useCountUp(isInView, STATS[1]);
  const stat3 = useCountUp(isInView, STATS[2]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white overflow-hidden -my-[4px] relative z-10"
    >
      <div className="w-full min-h-[740px] grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Left Column */}
        <div className="bg-cream px-5 py-[36px] md:px-[50px] md:py-[40px] lg:pl-[max(100px,calc((100vw-1436px)/2))] lg:pr-[60px] lg:py-[48px] flex flex-col justify-center min-h-full">
          
          <h2 
            className={`font-poppins text-[24px] md:text-[36px] lg:text-[45px] font-medium leading-[1.2] text-primary mb-6 transition-all duration-[650ms] ease-out ${
              isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[20px] scale-[0.98]'
            }`}
          >
            Why <span className="text-accent italic tracking-[-0.15px]">Australia</span> is the Global Destination of Choice
          </h2>
          
          <p 
            className={`font-poppins text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[1.62] text-text-dark mb-[32px] lg:mb-[40px] max-w-[575px] transition-all duration-[650ms] ease-out delay-[120ms] ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[18px]'
            }`}
          >
            With 42 top universities, studying in Australia offers high-quality
            education, career opportunities, and cultural experience. It is known
            for its globally recognized degrees, research facilities, and strong
            industry connections, making it one of the top destinations for
            international students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[24px] md:gap-y-[32px] gap-x-[40px]">
            {/* Stat Box 1 */}
            <div 
              className={`group text-left py-4 rounded-xl transition-all duration-[450ms] ease-out hover:bg-primary/5 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[16px]'
              } ${STATS[0].delay}`}
            >
              <h3 className="text-[32px] md:text-[40px] font-bold text-accent mb-2 font-poppins leading-[1.2] tracking-[-0.15px] inline-block origin-left transition-colors transition-transform duration-[350ms] ease-out group-hover:text-primary group-hover:scale-[1.02]">
                {stat1}{STATS[0].suffix}
              </h3>
              <p className="w-auto md:w-[280px] text-[14px] md:text-[18px] font-normal text-text-dark font-poppins leading-[1.2] tracking-[-0.15px] m-0 transition-colors duration-[250ms] group-hover:text-[rgba(0,0,0,0.85)]">
                skilled and family visas granted
              </p>
            </div>

            {/* Stat Box 2 */}
            <div 
              className={`group text-left py-4 rounded-xl transition-all duration-[450ms] ease-out hover:bg-primary/5 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[16px]'
              } ${STATS[1].delay}`}
            >
              <h3 className="text-[32px] md:text-[40px] font-bold text-accent mb-2 font-poppins leading-[1.2] tracking-[-0.15px] inline-block origin-left transition-colors transition-transform duration-[350ms] ease-out group-hover:text-primary group-hover:scale-[1.02]">
                {stat2}{STATS[1].suffix}
              </h3>
              <p className="w-auto md:w-[280px] text-[14px] md:text-[18px] font-normal text-text-dark font-poppins leading-[1.2] tracking-[-0.15px] m-0 transition-colors duration-[250ms] group-hover:text-[rgba(0,0,0,0.85)]">
                temporary visas granted
              </p>
            </div>

            {/* Stat Box 3 */}
            <div 
              className={`group col-span-1 text-left py-4 rounded-xl transition-all duration-[450ms] ease-out hover:bg-primary/5 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[16px]'
              } ${STATS[2].delay}`}
            >
              <h3 className="text-[32px] md:text-[40px] font-bold text-accent mb-2 font-poppins leading-[1.2] tracking-[-0.15px] inline-block origin-left transition-colors transition-transform duration-[350ms] ease-out group-hover:text-primary group-hover:scale-[1.02]">
                {stat3}{STATS[2].suffix}
              </h3>
              <p className="w-auto md:w-[280px] text-[14px] md:text-[18px] font-normal text-text-dark font-poppins leading-[1.2] tracking-[-0.15px] m-0 transition-colors duration-[250ms] group-hover:text-[rgba(0,0,0,0.85)]">
                humanitarian visas granted
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div 
          className={`relative min-h-[180px] md:min-h-[220px] lg:min-h-full overflow-hidden transition-all duration-[850ms] ease-out delay-[80ms] ${
            isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[56px] scale-[0.94]'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[900ms] "
            style={{ backgroundImage: 'url(/images/home-page/australia.png)' }}
          />
          
          {/* Overlay Image Envelope */}
          <div className="absolute top-[8%] left-0 w-full h-[88%] flex items-center justify-center p-4 md:p-6">
            <img 
              src="/images/home-page/overlay-image.png" 
              alt="Australia Illustration" 
              className={`max-w-[220px] max-h-[170px] md:max-w-[280px] md:max-h-[220px] lg:max-w-full lg:max-h-[85%] w-auto h-auto object-contain block rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-[1000ms] delay-[300ms] ${
                isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[40px] scale-[0.5]'
              }`} 
              style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AustraliaSection;
