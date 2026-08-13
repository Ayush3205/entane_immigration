import React, { useRef } from 'react';

const STORY_VIDEOS = [
  {
    src: 'https://pub-c5844193f5f9438ea801d65df772364c.r2.dev/testimonial-1.mp4',
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: 'https://pub-c5844193f5f9438ea801d65df772364c.r2.dev/testimonial-2.mp4',
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: 'https://pub-c5844193f5f9438ea801d65df772364c.r2.dev/testimonial-3.mp4',
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: 'https://pub-c5844193f5f9438ea801d65df772364c.r2.dev/testimonial-4.mp4',
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
];

const VIDEO_THUMBNAIL_TIME = 0.1;
const getThumbnailVideoSrc = (src) => `${src}#t=${VIDEO_THUMBNAIL_TIME}`;

function LazyVideo({ src, videoRef, index, onPlay, fitFullVideo, videoScale, videoPosition }) {
  return (
    <div className={`real-story-card-image${fitFullVideo ? ' real-story-card-image--fit' : ''}`}>
      <video
        ref={videoRef}
        className={`real-story-video${fitFullVideo ? ' real-story-video--fit' : ''}`}
        src={getThumbnailVideoSrc(src)}
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
