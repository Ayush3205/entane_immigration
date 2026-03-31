import React, { useRef } from 'react';

const STORY_IMAGES = [
  '/images/home-page/testimonial.png',
  '/images/home-page/testimonial-1.png',
  '/images/home-page/testimonial-2.png',
  '/images/home-page/testimonial-3.png',
  '/images/home-page/testimonial-1.png',
  '/images/home-page/testimonial-2.png'
];

const RealStories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('.real-story-card')?.offsetWidth ?? 320;
    const gap = -50;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth'
    });
  };

  return (
    <section className="real-stories-section">
      <div className="container">
        <div className="real-stories-header">
          <h2 className="real-stories-title">Real Stories, Real Futures.</h2>
          <p className="real-stories-subtitle">
            Join thousands who have successfully made the move.
          </p>
        </div>

        <div className="real-stories-carousel-wrap">
          <div className="real-stories-scroll" ref={scrollRef}>
            {STORY_IMAGES.map((src, index) => (
              <div key={index} className="real-story-card"><div className="real-story-card-image"><img src={src} alt="" /></div></div>
            ))}
          </div>

          <div className="real-stories-nav">
            <button
              type="button"
              className="real-stories-arrow real-stories-arrow-left"
              onClick={() => scroll('left')}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              type="button"
              className="real-stories-arrow real-stories-arrow-right"
              onClick={() => scroll('right')}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealStories;
