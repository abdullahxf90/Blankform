const BASE_URL = 'https://blankform.abdullah-xf90.workers.dev';

/**
 * Generate BreadcrumbList Schema
 * @param {Array<{ name: string, item: string }>} items
 */
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': `${BASE_URL}/`
      },
      ...items.map((it, idx) => ({
        '@type': 'ListItem',
        'position': idx + 2,
        'name': it.name,
        'item': it.item.startsWith('http') ? it.item : `${BASE_URL}${it.item}`
      }))
    ]
  };
}

/**
 * Generate FAQPage Schema
 * @param {Array<{ question: string, answer: string }>} faqs
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(f => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer
      }
    }))
  };
}

/**
 * Generate HowTo Schema
 * @param {string} name
 * @param {string} description
 * @param {Array<{ name: string, text: string }>} steps
 */
export function generateHowToSchema(name, description, steps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': name,
    'description': description,
    'step': steps.map((s, idx) => ({
      '@type': 'HowToStep',
      'position': idx + 1,
      'name': s.name,
      'text': s.text
    }))
  };
}
