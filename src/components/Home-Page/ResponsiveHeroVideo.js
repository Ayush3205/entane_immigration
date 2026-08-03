import React, { forwardRef } from 'react';

const ResponsiveHeroVideo = forwardRef(function ResponsiveHeroVideo(
  { className, src, ...videoProps },
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
      preload="auto"
      aria-hidden="true"
      {...videoProps}
    />
  );
});

export default ResponsiveHeroVideo;
