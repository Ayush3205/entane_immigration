const DEFAULT_MEDIA_BASE_URL = 'https://pub-c5844193f5f9438ea801d65df772364c.r2.dev';

const normalizeBaseUrl = (value) => {
  if (!value) return DEFAULT_MEDIA_BASE_URL;
  return String(value).trim().replace(/\/+$/, '');
};

export const MEDIA_BASE_URL = normalizeBaseUrl(process.env.REACT_APP_MEDIA_BASE_URL);

export const getMediaUrl = (fileName) => {
  if (/^https?:\/\//i.test(fileName)) return fileName;
  return `${MEDIA_BASE_URL}/${String(fileName).replace(/^\/+/, '')}`;
};
