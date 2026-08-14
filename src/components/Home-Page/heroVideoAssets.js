import { getMediaUrl } from './mediaAssets';

export const HERO_DESKTOP_VIDEO_URL = getMediaUrl('hero.mp4');
export const HERO_MOBILE_VIDEO_URL  = getMediaUrl('Hero-Mobile.mp4');
export const HERO_MOBILE_VIDEO_QUERY = '(max-width: 767px)';

/**
 * Returns the CSS viewport width in logical pixels.
 *
 * Fix: We no longer include window.screen.width in the candidate list.
 * On many Android devices (e.g. iQOO) screen.width reports PHYSICAL pixels
 * (e.g. 1080) instead of CSS/logical pixels, which caused Math.min() to
 * always pick the wrong (huge) value and serve the desktop video to mobile.
 *
 * Priority order:
 *   1. visualViewport.width  — most accurate on mobile (handles pinch-zoom,
 *                              soft keyboard, address-bar collapse correctly)
 *   2. document.documentElement.clientWidth — reliable CSS px, ignores scrollbar
 *   3. window.innerWidth     — fallback, may include scrollbar on desktop
 */
const getViewportWidth = () => {
  if (typeof window === 'undefined') return null;

  // Prefer visualViewport (most accurate on mobile); fall back in order.
  const vvw = window.visualViewport?.width;
  if (Number.isFinite(vvw) && vvw > 0) return vvw;

  const dcw = document.documentElement?.clientWidth;
  if (Number.isFinite(dcw) && dcw > 0) return dcw;

  const iw = window.innerWidth;
  if (Number.isFinite(iw) && iw > 0) return iw;

  return null;
};

export const getHeroVideoUrl = () => {
  const viewportWidth = getViewportWidth();
  if (viewportWidth !== null && viewportWidth <= 767) {
    return HERO_MOBILE_VIDEO_URL;
  }
  return HERO_DESKTOP_VIDEO_URL;
};
