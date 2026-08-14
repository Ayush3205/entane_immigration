import React, { useRef } from 'react';
import ResponsiveHeroVideo from './ResponsiveHeroVideo';

// Row 1 (index 0-3): near/above fold — NO lazy load (first 4 images)
// Rows 2-4 (index 4+): below fold — use WebP + loading="lazy"
const GALLERY_IMAGES = [
  // Row 1 — above fold, eager
  '/images/home-page/gallery-1.png',
  '/images/home-page/gallery-2.webp',
  '/images/home-page/gallery-3.webp',
  '/images/home-page/gallery-4.png',
  // Row 2 — below fold, lazy
  '/images/home-page/gallery-5.webp',
  '/images/home-page/gallery-6.webp',
  '/images/home-page/gallery-7.png',   // tiny 13 KB — keep as-is
  '/images/home-page/gallery-8.webp',
  '/images/home-page/gallery-9.webp',
  // Row 3 — below fold, lazy
  '/images/home-page/students.webp',
  '/images/home-page/professionals.webp',
  '/images/home-page/migration.png',       // tiny 9 KB
  '/images/home-page/australia-map.png',   // 55 KB — acceptable as-is
  '/images/home-page/placeholder-1.png',
  '/images/home-page/placeholder-2.png',
  '/images/home-page/placeholder-3.png',
  '/images/home-page/placeholder-4.png',
  '/images/home-page/placeholder-5.png',
];

// First 4 images (Row 1) are at/above fold — eager. Everything else is lazy.
const ABOVE_FOLD_COUNT = 4;

const DreamSection = ({ morphTargetRef, heroVideoUrl = null }) => {
  const dreamCardVideoRef = useRef(null);

  return (
    <section className="dream-section dream-section--in-view dream-section--morph-active">
      <div className="dream-container">
        {/* Row 1: gallery-1 through gallery-4 — above fold, eager */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(0, 4).map((src, i) => (
            <div
              key={`r1-${i}`}
              className={`dream-image-wrap${i === 0 ? ' dream-image-wrap--kangaroo' : ''}`}
            >
              <img src={src} alt="" className="dream-image" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Row 2: gallery-5 through gallery-9, centre slot is morph target */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(4, 9).map((src, i) => {
            const isMorphTarget = i === 2;
            const globalIndex   = 4 + i;
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
                    key={heroVideoUrl}
                    ref={dreamCardVideoRef}
                    className="dream-image dream-card-video"
                    src={heroVideoUrl}
                  />
                ) : (
                  <img
                    src={src}
                    alt=""
                    className="dream-image"
                    loading={globalIndex >= ABOVE_FOLD_COUNT ? 'lazy' : undefined}
                  />
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

        {/* Row 3 — below fold, all lazy */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(9, 14).map((src, i) => (
            <div key={`r3-${i}`} className="dream-image-wrap">
              <img src={src} alt="" className="dream-image" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Row 4 — below fold, all lazy */}
        <div className="dream-row">
          {GALLERY_IMAGES.slice(14, 18).map((src, i) => (
            <div key={`r4-${i}`} className="dream-image-wrap">
              <img src={src} alt="" className="dream-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
