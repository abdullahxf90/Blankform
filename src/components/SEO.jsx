import React, { useEffect } from 'react';

export function SEO({
  title = 'Blankform — Free Certificate & CV Maker, No Sign Up',
  description = 'Create certificates and CVs for free. No sign up, no watermark, and nothing you type is saved or sent to a server. Pick a template and download instantly.',
  canonicalUrl = 'https://blankform.abdullah-xf90.workers.dev/',
  type = 'website',
  schemaData = null
}) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update meta property/name
    const setMetaTag = (attribute, value, content) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta Description
    setMetaTag('name', 'description', description);

    // OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:site_name', 'Blankform');

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // Canonical Link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    // JSON-LD Structured Data
    let schemaScript = document.querySelector('script[id="json-ld-schema"]');
    if (schemaData) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('id', 'json-ld-schema');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, canonicalUrl, type, schemaData]);

  return null;
}
