import React, { useRef } from 'react';

const GALLERY_IMAGES = [
  '/images/home-page/gallery-1.png',
  '/images/home-page/gallery-2.png',
  '/images/home-page/gallery-3.png',
  '/images/home-page/gallery-4.png',
  '/images/home-page/gallery-5.png',
  '/images/home-page/gallery-6.png',
  '/images/home-page/gallery-7.png',
  '/images/home-page/gallery-8.png',
  '/images/home-page/gallery-9.png',
  '/images/home-page/students.png',
  '/images/home-page/professionals.png',
  '/images/home-page/migration.png',
  '/images/home-page/australia-map.png',
  '/images/home-page/placeholder-1.png',
  '/images/home-page/placeholder-2.png',
  '/images/home-page/placeholder-3.png',
  '/images/home-page/placeholder-4.png',
  '/images/home-page/placeholder-5.png',
];

const DreamSection = ({ morphTargetRef, heroVideoUrl = null }) => {
  const dreamCardVideoRef = useRef(null);

  return (
    <section className="dream-section dream-section--in-view dream-section--morph-active">
      <div className="dream-container">
        {/* Row 1: 3 images — kangaroo silhouette + 2 photos */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(0, 3).map((src, i) => (
            <div
              key={`r1-${i}`}
              className={`dream-image-wrap${i === 0 ? ' dream-image-wrap--kangaroo' : ''}`}
            >
              <img src={src} alt="" className="dream-image" />
            </div>
          ))}
        </div>
        {/* Row 2: 5 images — center card is the morph target (larger) */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(3, 8).map((src, i) => {
            const isMorphTarget = i === 2;
            return (
              <div
                key={`r2-${i}`}
                ref={isMorphTarget ? (el) => {
                  if (morphTargetRef) morphTargetRef.current = el;
                } : undefined}
                className={`dream-image-wrap${isMorphTarget ? ' dream-image-wrap--large' : ''}`}
                style={isMorphTarget ? { opacity: 0 } : undefined}
              >
                {isMorphTarget && heroVideoUrl ? (
                  <video
                    ref={dreamCardVideoRef}
                    src={heroVideoUrl}
                    className="dream-image dream-card-video"
                    autoPlay muted loop playsInline aria-hidden="true"
                  />
                ) : (
                  <img src={src} alt="" className="dream-image" />
                )}
              </div>
            );
          })}
        </div>
        <div className="dream-row dream-row-text">
          <div className="dream-text-block">
            <p className="dream-text">
              <span className="dream-text-line1">From dreaming in your room to</span>
              <span className="dream-text-line2">living in another country.</span>
            </p>
          </div>
        </div>
        {/* Row 3: 5 images */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(8, 13).map((src, i) => (
            <div key={`r3-${i}`} className="dream-image-wrap">
              <img src={src} alt="" className="dream-image" />
            </div>
          ))}
        </div>
        {/* Row 4: 4 images */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(13, 17).map((src, i) => (
            <div key={`r4-${i}`} className="dream-image-wrap">
              <img src={src} alt="" className="dream-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
