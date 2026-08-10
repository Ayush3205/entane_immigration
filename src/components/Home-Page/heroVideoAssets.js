export const HERO_DESKTOP_VIDEO_URL = 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/hero.mp4';
export const HERO_MOBILE_VIDEO_URL = 'https://pub-ee607a9ed6da491e9bcc865796d562de.r2.dev/Hero-Mobile.mp4';
export const HERO_MOBILE_VIDEO_QUERY = '(max-width: 767px)';

const getViewportWidth = () => {
  if (typeof window === 'undefined') return null;

  const candidates = [
    window.visualViewport?.width,
    window.innerWidth,
    document.documentElement?.clientWidth,
    window.screen?.width,
  ].filter((value) => Number.isFinite(value) && value > 0);

  return candidates.length ? Math.min(...candidates) : null;
};

export const getHeroVideoUrl = () => {
  const viewportWidth = getViewportWidth();
  if (viewportWidth !== null && viewportWidth <= 767) {
    return HERO_MOBILE_VIDEO_URL;
  }

  return HERO_DESKTOP_VIDEO_URL;
};
