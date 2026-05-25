import React, { useRef } from 'react';

const STORY_VIDEOS = [
  {
    src: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/testimonial-1.mp4',
    // fitFullVideo: true,
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/testimonial-2.mp4',
    // fitFullVideo: true,
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/testimonial-3.mp4',
    // fitFullVideo: true,
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/testimonial-4.mp4',
    // fitFullVideo: true,
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
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
            {STORY_VIDEOS.map(({ src, fitFullVideo, fillVideo, videoScale, videoPosition }, index) => (
              <div key={src} className="real-story-card">
                <div className={`real-story-card-image${fitFullVideo ? ' real-story-card-image--fit' : ''}`}>
                  <video
                    ref={(element) => setVideoRef(element, index)}
                    className={`real-story-video${fitFullVideo ? ' real-story-video--fit' : ''}`}
                    src={src}
                    style={{
                      ...(videoScale ? { '--story-video-scale': videoScale } : {}),
                      ...(videoPosition ? { '--story-video-position': videoPosition } : {}),
                    }}
                    controls
                    muted
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
