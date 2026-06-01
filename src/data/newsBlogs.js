const BLOG_CATEGORIES = [
  'Study in Australia',
  'PR Pathways',
  'Student Visa',
  'Post-Arrival Support',
  'Study & Work',
  'Scholarships',
  'Migration Guidance',
  'Skilled Migration',
  'Student Life',
];

export const NEWS_BLOGS_TEXT_URL = `${process.env.PUBLIC_URL || ''}/data/news-blogs.txt`;

export const normalizeBlogText = (value = '') =>
  value
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/â€™/g, "'")
    .replace(/â€œ|â€/g, '"')
    .replace(/â€”|â€“/g, '-')
    .replace(/â†’/g, '->')
    .replace(/â—/g, '-')
    .replace(/âœ“/g, '-')
    .replace(/Â£/g, 'GBP ')
    .replace(/\u00a0/g, ' ');

export const slugifyBlogTitle = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const getExcerpt = (lines) => {
  const firstParagraph = lines.find((line) => (
    line.length > 80 &&
    !line.startsWith('-') &&
    !/^_+$/.test(line) &&
    !/^keywords and seo/i.test(line)
  ));
  if (!firstParagraph) return '';
  return firstParagraph.length > 170
    ? `${firstParagraph.slice(0, 167).trim()}...`
    : firstParagraph;
};

export const parseNewsBlogs = (rawText) => {
  const text = normalizeBlogText(rawText);

  return text
    .split(/\n(?=BLOG\s+\d+:)/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk, index) => {
      const lines = chunk
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !/^_+$/.test(line));
      const title = (lines.shift() || '')
        .replace(/^BLOG\s+\d+:\s*/i, '')
        .trim();
      const content = lines.filter(Boolean);

      return {
        id: index + 1,
        slug: slugifyBlogTitle(title),
        title,
        description: getExcerpt(content),
        content,
        category: BLOG_CATEGORIES[index] || 'Australia Guide',
        author: 'Esante Team',
        date: '2026 Guide',
      };
    });
};
