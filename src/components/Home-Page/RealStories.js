import React, { useRef, useState, useEffect } from 'react';
import { getMediaUrl } from './mediaAssets';

const STORY_VIDEOS = [
  {
    src: getMediaUrl('testimonial-1.mp4'),
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: getMediaUrl('testimonial-2.mp4'),
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: getMediaUrl('testimonial-3.mp4'),
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
  {
    src: getMediaUrl('testimonial-4.mp4'),
    fillVideo: true,
    videoScale: 1,
    videoPosition: 'center 18%',
  },
];

const VIDEO_THUMBNAIL_TIME = 0.1;
const getThumbnailVideoSrc = (src) => `${src}#t=${VIDEO_THUMBNAIL_TIME}`;

/**
 * LazyVideo — defers video DOM insertion until within 400 px of the viewport.
 *
 * Previously all 4 R2 testimonial videos were added to the DOM on every page
 * load, firing 4 immediate network requests to Cloudflare R2. With
 * IntersectionObserver the <video> element is only created when the user is
 * near the section — well before they can see it, so there is no blank flash.
 */
function LazyVideo({ src, videoRef, index, onPlay, fitFullVideo, videoScale, videoPosition }) {
  const placeholderRef  = useRef(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const el = placeholderRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px 400px 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass  = `real-story-card-image${fitFullVideo ? ' real-story-card-image--fit' : ''}`;
  const videoClass = `real-story-video${fitFullVideo ? ' real-story-video--fit' : ''}`;

  return (
    <div ref={placeholderRef} className={baseClass}>
      {isNear ? (
        <video
          ref={videoRef}
          className={videoClass}
          src={getThumbnailVideoSrc(src)}
          style={{
            ...(videoScale    ? { '--story-video-scale':    videoScale    } : {}),
            ...(videoPosition ? { '--story-video-position': videoPosition } : {}),
          }}
          controls
          muted
          playsInline
          preload="metadata"
          onPlay={() => onPlay(index)}
        />
      ) : (
        /* Placeholder — same size as video so no layout shift when it appears */
        <div
          className={videoClass}
          aria-hidden="true"
          style={{ background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.15)" />
            <polygon points="19,14 37,24 19,34" fill="white" />
          </svg>
        </div>
      )}
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
            {STORY_VIDEOS.map(({ src, fillVideo, videoScale, videoPosition }, index) => (
              <div key={src} className="real-story-card">
                <LazyVideo
                  src={src}
                  videoRef={(el) => setVideoRef(el, index)}
                  index={index}
                  onPlay={handleVideoPlay}
                  fitFullVideo={fillVideo}
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
