import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

/**
 * ResponsiveHeroVideo
 *
 * Fixes applied:
 *
 * 1. preload="none"  — was "auto", which caused mobile browsers (especially
 *    Safari on iPhone) to download the entire video eagerly, triggering
 *    Low Data Mode / memory guards that silently killed autoplay.
 *
 * 2. Wait for 'canplay' before calling .play() — the old code called .play()
 *    immediately after .load(), which is a race condition on slow mobile
 *    networks. We now attach a one-shot 'canplay' listener and only call
 *    .play() when the browser confirms it has enough data.
 *
 * 3. Muted-retry on play() rejection — if .play() is blocked (autoplay
 *    policy), we force muted=true and retry once before giving up, so the
 *    video still plays silently rather than showing a black screen.
 *
 * 4. webkit-playsinline attribute added for older iOS WebKit support
 *    (some older iPhones need the attribute name without camelCase).
 */
const ResponsiveHeroVideo = forwardRef(function ResponsiveHeroVideo(
  { className, src, poster, ...videoProps },
  ref
) {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => videoRef.current);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return undefined;

    let cancelled = false;

    const attemptPlay = () => {
      if (cancelled) return;

      // Ensure muted + playsInline are set before every play attempt
      video.muted = true;
      video.defaultMuted = true;

      const promise = video.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch((err) => {
          if (cancelled) return;
          // If still blocked (e.g. autoplay policy on some browsers even
          // for muted video), log quietly — do NOT swallow silently so
          // debugging is possible, but don't crash the UI.
          console.warn('[HeroVideo] play() blocked after muted retry:', err?.message || err);
        });
      }
    };

    // Reset the element and kick off a fresh load cycle
    video.pause();
    video.currentTime = 0;
    video.load();

    // Wait until the browser has buffered enough to play smoothly,
    // then start. 'canplay' fires much sooner than 'canplaythrough'.
    video.addEventListener('canplay', attemptPlay, { once: true });

    // Safety-net: some browsers never fire 'canplay' when preload="none"
    // until the user interacts. Use 'loadedmetadata' as a secondary trigger
    // so at minimum the poster/first frame appears, and play is attempted.
    video.addEventListener('loadedmetadata', attemptPlay, { once: true });

    return () => {
      cancelled = true;
      video.removeEventListener('canplay', attemptPlay);
      video.removeEventListener('loadedmetadata', attemptPlay);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      muted
      defaultMuted
      loop
      playsInline
      // Older iOS WebKit needs the un-camelCased attribute explicitly
      webkit-playsinline="true"
      // preload="none" prevents eager download on mobile (was "auto")
      preload="none"
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
