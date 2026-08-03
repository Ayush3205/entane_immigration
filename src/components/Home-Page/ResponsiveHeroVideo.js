import React, { forwardRef } from 'react';

const ResponsiveHeroVideo = forwardRef(function ResponsiveHeroVideo(
  { className, src, poster, ...videoProps },
  ref
) {
  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline="true"
      preload="none"
      poster={poster || '/images/home-page/hero-poster.jpg'}
      aria-hidden="true"
      {...videoProps}
    />
  );
});

export default ResponsiveHeroVideo;
