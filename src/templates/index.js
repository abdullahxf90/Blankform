import { generate100Certificates, generate100Cvs } from './generator';

export const CERTIFICATE_TEMPLATES = generate100Certificates();
export const CV_TEMPLATES = generate100Cvs();

export const ALL_TEMPLATES = [...CERTIFICATE_TEMPLATES, ...CV_TEMPLATES];

export function getTemplateById(id) {
  let found = ALL_TEMPLATES.find(t => t.id === id);
  if (found) return found;

  if (id && id.includes('cert')) {
    return CERTIFICATE_TEMPLATES[0];
  }
  if (id && id.includes('cv')) {
    return CV_TEMPLATES[0];
  }

  return ALL_TEMPLATES[0];
}
