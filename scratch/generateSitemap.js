import fs from 'fs';
import path from 'path';
import { CERTIFICATE_TEMPLATES, CV_TEMPLATES } from '../src/templates/index.js';
import { GUIDES_DATA } from '../src/data/guidesData.js';
import { COMPARISONS_DATA } from '../src/data/comparisonsData.js';
import { OCCUPATIONS_DATA } from '../src/data/occupationsData.js';

// Read domain from command line argument if provided
const rawBaseUrl = process.argv[2] || 'https://blankform.vercel.app';
const baseUrl = rawBaseUrl.replace(/\/$/, '');
const lastMod = new Date().toISOString().split('T')[0];

let urls = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/certificate', priority: '0.9', changefreq: 'daily' },
  { url: '/cv', priority: '0.9', changefreq: 'daily' },
  { url: '/guides', priority: '0.8', changefreq: 'weekly' },
  { url: '/compare', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.5', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'monthly' },
];

// Add Guides
GUIDES_DATA.forEach(g => {
  urls.push({ url: `/guides/${g.slug}`, priority: '0.8', changefreq: 'weekly' });
});

// Add Competitor Comparisons (Tier 5)
COMPARISONS_DATA.forEach(c => {
  urls.push({ url: `/compare/${c.slug}`, priority: '0.8', changefreq: 'weekly' });
});

// Add Occupation / Audience Variants (Tier 6)
OCCUPATIONS_DATA.forEach(o => {
  const prefix = o.type === 'cv' ? '/resume-for' : '/certificate-for';
  urls.push({ url: `${prefix}/${o.slug}`, priority: '0.8', changefreq: 'weekly' });
});

// Add 100 Certificates
CERTIFICATE_TEMPLATES.forEach(t => {
  urls.push({ url: `/certificate/${t.slug || t.id}`, priority: '0.7', changefreq: 'weekly' });
});

// Add 100 CVs
CV_TEMPLATES.forEach(t => {
  urls.push({ url: `/cv/${t.slug || t.id}`, priority: '0.7', changefreq: 'weekly' });
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

urls.forEach(item => {
  xml += `  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), xml, 'utf8');
console.log(`Successfully generated sitemap.xml for domain [${baseUrl}] with ${urls.length} URLs!`);
