import { generate100Certificates, generate100Cvs } from './generator.js';

export const CERTIFICATE_TEMPLATES = generate100Certificates();
export const CV_TEMPLATES = generate100Cvs();

export const ALL_TEMPLATES = [...CERTIFICATE_TEMPLATES, ...CV_TEMPLATES];

export function getTemplateById(identifier) {
  if (!identifier) return ALL_TEMPLATES[0];

  const cleanId = String(identifier).toLowerCase().trim();

  let found = ALL_TEMPLATES.find(t => 
    t.id === cleanId || 
    t.slug === cleanId || 
    t.id.endsWith(cleanId)
  );

  if (found) return found;

  if (cleanId.includes('cert')) {
    return CERTIFICATE_TEMPLATES[0];
  }
  if (cleanId.includes('cv')) {
    return CV_TEMPLATES[0];
  }

  return ALL_TEMPLATES[0];
}
