import React, { forwardRef } from 'react';
import {
  HERO_DESKTOP_VIDEO_URL,
  HERO_MOBILE_VIDEO_QUERY,
  HERO_MOBILE_VIDEO_URL,
} from './heroVideoAssets';

const ResponsiveHeroVideo = forwardRef(function ResponsiveHeroVideo(
  { className, ...videoProps },
  ref
) {
  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      {...videoProps}
    >
      <source
        src={HERO_MOBILE_VIDEO_URL}
        type="video/mp4"
        media={HERO_MOBILE_VIDEO_QUERY}
      />
      <source src={HERO_DESKTOP_VIDEO_URL} type="video/mp4" />
    </video>
  );
});

export default ResponsiveHeroVideo;
