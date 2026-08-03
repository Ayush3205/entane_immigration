import React, { useRef } from 'react';
import ResponsiveHeroVideo from './ResponsiveHeroVideo';

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
        {/* Row 1: gallery-1 through gallery-4 */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(0, 4).map((src, i) => (
            <div
              key={`r1-${i}`}
              className={`dream-image-wrap${i === 0 ? ' dream-image-wrap--kangaroo' : ''}`}
            >
              <img src={src} alt="" className="dream-image" />
            </div>
          ))}
        </div>
        {/* Row 2: gallery-5, gallery-6, center morph target, gallery-8, gallery-9 */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(4, 9).map((src, i) => {
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
                  <ResponsiveHeroVideo
                    ref={dreamCardVideoRef}
                    className="dream-image dream-card-video"
                    src={heroVideoUrl}
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
        {/* Row 3: students, professionals, migration, australia-map, placeholder-1 */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(9, 14).map((src, i) => (
            <div key={`r3-${i}`} className="dream-image-wrap">
              <img src={src} alt="" className="dream-image" />
            </div>
          ))}
        </div>
        {/* Row 4: placeholder-2 through placeholder-5 */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(14, 18).map((src, i) => (
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
