const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const buildDir = path.join(process.cwd(), 'build');
const indexHtmlPath = path.join(buildDir, 'index.html');
const caseStudiesSourcePath = path.join(process.cwd(), 'src', 'data', 'caseStudies.js');
const newsBlogsSourcePath = path.join(process.cwd(), 'public', 'data', 'news-blogs.txt');

const staticRoutes = [
  '/about-us',
  '/why-australia',
  '/news-blogs',
  '/case-studies',
  '/eligibility-calculator',
  '/cost-of-living-calculator',
  '/visa-pathways',
  '/migration-advisors',
  '/search-courses',
  '/search-universities',
  '/expense-planning-scholarships',
  '/sop-documents',
  '/accommodation',
  '/post-study-work-visa',
  '/part-time-job-support',
  '/ielts-pte-coaching',
  '/airport-services',
  '/post-arrival-support',
  '/job-seekers',
  '/recruitment',
  '/employers',
  '/book-consultation',
  '/ancillary-services',
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseCaseStudySlugs(sourceText) {
  return [...sourceText.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
}

function parseNewsBlogSlugs(rawText) {
  return rawText
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split(/\n(?=BLOG\s+\d+:)/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const titleLine = chunk.split('\n').find(Boolean) || '';
      const title = titleLine.replace(/^BLOG\s+\d+:\s*/i, '').trim();
      return slugify(title);
    })
    .filter(Boolean);
}

function getRouteKeys() {
  const caseStudiesSource = fs.readFileSync(caseStudiesSourcePath, 'utf8');
  const newsBlogsSource = fs.readFileSync(newsBlogsSourcePath, 'utf8');

  const dynamicRoutes = [
    ...parseCaseStudySlugs(caseStudiesSource).map((slug) => `/case-studies/${slug}`),
    ...parseNewsBlogSlugs(newsBlogsSource).map((slug) => `/news-blogs/${slug}`),
  ];

  return [...new Set([...staticRoutes, ...dynamicRoutes])];
}

function uploadEntryPoint(bucket, route) {
  const key = route.replace(/^\/+/, '');
  const s3Uri = `s3://${bucket}/${key}`;
  const result = spawnSync(
    'aws',
    [
      's3',
      'cp',
      indexHtmlPath,
      s3Uri,
      '--cache-control',
      'public,max-age=0,must-revalidate',
      '--content-type',
      'text/html; charset=utf-8',
      '--only-show-errors',
    ],
    { stdio: 'inherit', shell: false }
  );

  if (result.status !== 0) {
    throw new Error(`Failed to upload ${route} to ${s3Uri}`);
  }
}

function main() {
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error(`Missing build output: ${indexHtmlPath}`);
  }

  const bucket = process.env.AWS_S3_BUCKET;
  if (!bucket) {
    throw new Error('AWS_S3_BUCKET is required to publish route entrypoints.');
  }

  const routes = getRouteKeys();
  routes.forEach((route) => uploadEntryPoint(bucket, route));

  console.log(`Uploaded ${routes.length} route entrypoint(s) to s3://${bucket}.`);
}

main();
