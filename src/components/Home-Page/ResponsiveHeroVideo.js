import React, { forwardRef, useEffect, useLayoutEffect, useImperativeHandle, useRef } from 'react';

/**
 * ResponsiveHeroVideo — iOS Safari / Android force-play edition
 *
 * Root causes fixed in this version:
 *
 * A) React's `muted` prop bug
 *    React does NOT set the HTML `muted` attribute on the DOM element — it only
 *    sets the JS property. iOS Safari checks the HTML attribute for autoplay
 *    eligibility. We bypass this by calling setAttribute('muted','') in a
 *    useLayoutEffect (runs synchronously before paint) AND before every play().
 *
 * B) video.load() + preload="none" race condition
 *    The previous version called video.pause() → video.load() which:
 *      1. Cancelled any browser-initiated autoplay.
 *      2. With preload="none", iOS never buffers anything after load(), so
 *         canplay/loadedmetadata never fire → play() never gets called.
 *    Fix: removed the explicit load()/pause() reset. Use preload="metadata"
 *    instead (browser loads just duration/dimensions, enough to start playing).
 *
 * C) Single-shot event listeners
 *    canplay/loadedmetadata were { once: true }, so if the first play()
 *    attempt failed and the event fired again, we'd never retry.
 *    Fix: multiple redundant triggers + timer-based retries.
 *
 * D) webkit-playsinline
 *    Set as both JSX prop AND DOM attribute for maximum iOS WebKit compat.
 */
const ResponsiveHeroVideo = forwardRef(function ResponsiveHeroVideo(
  { className, src, poster, ...videoProps },
  ref
) {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => videoRef.current);

  /**
   * useLayoutEffect: runs synchronously before the browser paints.
   * This is the ONLY reliable way to set the `muted` HTML attribute in React
   * before iOS Safari evaluates autoplay eligibility.
   */
  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Force the HTML attribute — React's muted prop only sets the JS property
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return undefined;

    let cancelled = false;
    const retryTimers = [];

    const forcePlay = () => {
      if (cancelled || !video.paused) return;

      // Re-assert muted every time — some browsers reset it
      video.setAttribute('muted', '');
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;

      const promise = video.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch((err) => {
          if (cancelled) return;
          console.warn('[HeroVideo] play() attempt failed:', err?.message || err);
          // Do not give up — the timer retries below will keep trying.
        });
      }
    };

    // Attempt play immediately (works on Android and some iOS states)
    forcePlay();

    // Retry on all relevant media-ready events (normal order: loadedmetadata → canplay → loadeddata)
    const mediaEvents = ['loadedmetadata', 'canplay', 'loadeddata', 'playing'];
    const onMediaEvent = () => forcePlay();
    mediaEvents.forEach((evt) => video.addEventListener(evt, onMediaEvent));

    // Timer-based retries: catches cases where events never fire (iOS background tabs,
    // slow network, or Low Power Mode throttling). Space them out to avoid hammering.
    [200, 500, 1000, 2000, 4000].forEach((delay) => {
      const t = setTimeout(() => {
        if (!cancelled && video.paused) forcePlay();
      }, delay);
      retryTimers.push(t);
    });

    return () => {
      cancelled = true;
      retryTimers.forEach(clearTimeout);
      mediaEvents.forEach((evt) => video.removeEventListener(evt, onMediaEvent));
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      /**
       * autoPlay  — standard HTML attribute (tells browser to start immediately)
       * muted     — React prop (sets JS property; HTML attr set via useLayoutEffect above)
       * playsInline — required on iOS to prevent fullscreen takeover
       * preload="metadata" — load duration/dimensions only; lighter than "auto"
       *                      but ensures 'loadedmetadata' fires without user gesture
       * controls={false} — never show native controls
       */
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
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
