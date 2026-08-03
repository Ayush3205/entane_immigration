import React, { useRef, useEffect, useState } from 'react';

const STORY_VIDEOS = [
  {
    src: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/testimonial-1.mp4',
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/testimonial-2.mp4',
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/testimonial-3.mp4',
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/testimonial-4.mp4',
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
];

// Lazily assigns video src only when the card scrolls into view
function LazyVideo({ src, videoRef, index, onPlay, fitFullVideo, videoScale, videoPosition }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      // Fallback for old browsers: load immediately
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before entering viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`real-story-card-image${fitFullVideo ? ' real-story-card-image--fit' : ''}`}>
      <video
        ref={videoRef}
        className={`real-story-video${fitFullVideo ? ' real-story-video--fit' : ''}`}
        src={isVisible ? src : undefined}
        style={{
          ...(videoScale ? { '--story-video-scale': videoScale } : {}),
          ...(videoPosition ? { '--story-video-position': videoPosition } : {}),
        }}
        controls
        muted
        playsInline
        preload="metadata"
        onPlay={() => onPlay(index)}
      />
    </div>
  );
}

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
            {STORY_VIDEOS.map(({ src, fitFullVideo, videoScale, videoPosition }, index) => (
              <div key={src} className="real-story-card">
                <LazyVideo
                  src={src}
                  videoRef={(el) => setVideoRef(el, index)}
                  index={index}
                  onPlay={handleVideoPlay}
                  fitFullVideo={fitFullVideo}
                  videoScale={videoScale}
                  videoPosition={videoPosition}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealStories;
