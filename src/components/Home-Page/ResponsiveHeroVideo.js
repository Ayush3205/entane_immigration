import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const ResponsiveHeroVideo = forwardRef(function ResponsiveHeroVideo(
  { className, src, poster, ...videoProps },
  ref
) {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => videoRef.current);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.load();
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }

    return undefined;
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      defaultMuted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      x-webkit-airplay="allow"
      aria-hidden="true"
      {...videoProps}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
});

export default ResponsiveHeroVideo;
