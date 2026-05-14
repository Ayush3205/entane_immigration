import React, { useRef } from 'react';

const STORY_VIDEOS = [
  '/images/home-page/testimonial-1.mp4',
  '/images/home-page/testimonial-2.mp4',
  '/images/home-page/testimonial-3.mp4',
  '/images/home-page/testimonial-4.mp4',
];

const RealStories = () => {
  const scrollRef = useRef(null);
  const videoRefs = useRef([]);

  const setVideoRef = (element, index) => {
    videoRefs.current[index] = element;
  };

  const handleVideoPlay = (activeIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (!video || index === activeIndex) return;
      video.pause();
    });
  };

  return (
    <section className="real-stories-section">
      <div className="container">
        <div className="real-stories-header">
          <h2 className="real-stories-title">Why Choose Esante?</h2>
          <p className="real-stories-subtitle">
            Real guidance. Real support. Real results.
          </p>
        </div>

        <div className="real-stories-carousel-wrap">
          <div className="real-stories-scroll" ref={scrollRef}>
            {STORY_VIDEOS.map((src, index) => (
              <div key={src} className="real-story-card">
                <div className="real-story-card-image">
                  <video
                    ref={(element) => setVideoRef(element, index)}
                    className="real-story-video"
                    src={src}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => handleVideoPlay(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealStories;
