import fs from 'fs';
import path from 'path';
import { GUIDES_DATA } from '../src/data/guidesData.js';
import { COMPARISONS_DATA } from '../src/data/comparisonsData.js';
import { OCCUPATIONS_DATA } from '../src/data/occupationsData.js';
import { CERTIFICATE_TEMPLATES, CV_TEMPLATES } from '../src/templates/index.js';

const distDir = path.resolve('./dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexHtmlPath, 'utf8');

const routes = [
  'certificate',
  'cv',
  'guides',
  'compare',
  'about',
  'privacy'
];

// Add Guides
GUIDES_DATA.forEach(g => routes.push(`guides/${g.slug}`));

// Add Comparisons
COMPARISONS_DATA.forEach(c => routes.push(`compare/${c.slug}`));

// Add Occupations
OCCUPATIONS_DATA.forEach(o => {
  const prefix = o.type === 'cv' ? 'resume-for' : 'certificate-for';
  routes.push(`${prefix}/${o.slug}`);
});

// Add Certificates
CERTIFICATE_TEMPLATES.forEach(t => routes.push(`certificate/${t.slug || t.id}`));

// Add CVs
CV_TEMPLATES.forEach(t => routes.push(`cv/${t.slug || t.id}`));

console.log(`Prerendering static route HTML files for ${routes.length} paths...`);

routes.forEach(route => {
  const targetDir = path.join(distDir, route);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), indexContent, 'utf8');
});

// Also create 404.html for Cloudflare Pages SPA fallback
fs.writeFileSync(path.join(distDir, '404.html'), indexContent, 'utf8');

console.log('Successfully created static HTML index files for all routes + 404.html!');
