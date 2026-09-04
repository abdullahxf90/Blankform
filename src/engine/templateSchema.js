/**
 * Template Schema Definition & Validation Helper
 */

export const ORIENTATIONS = {
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait'
};

export const TYPES = {
  CERTIFICATE: 'certificate',
  CV: 'cv'
};

export function validateTemplateSchema(template) {
  if (!template.id || !template.title || !template.type) {
    throw new Error('Template schema missing required fields (id, title, type)');
  }
  return true;
}
