import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { AdSlot } from '../components/AdSlot';
import { getComparisonBySlug } from '../data/comparisonsData';

export function ComparisonDetail({ slug }) {
  const comp = getComparisonBySlug(slug) || getComparisonBySlug('blankform-vs-canva');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': comp.title,
    'description': comp.metaDescription,
    'author': {
      '@type': 'Organization',
      'name': 'Blankform'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Blankform',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://blankform.vercel.app/favicon.svg'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://blankform.vercel.app/compare/${comp.slug}`
    }
  };

  const renderContent = (rawText) => {
    const lines = rawText.trim().split('\n');
    const elements = [];
    let currentKey = 0;

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      if (trimmed.startsWith('## ')) {
        elements.push(
          <h2 key={currentKey++} style={{ fontSize: '24px', fontWeight: 700, marginTop: '32px', marginBottom: '16px', color: 'var(--ink)' }}>
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={currentKey++} style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px', color: 'var(--ink)' }}>
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('---')) {
        elements.push(<hr key={currentKey++} style={{ margin: '32px 0', border: 'none', borderTop: '1px solid var(--line)' }} />);
      } else if (trimmed.startsWith('- ')) {
        elements.push(
          <li key={currentKey++} style={{ fontSize: '16px', lineHeight: 1.7, marginBottom: '8px', color: 'var(--ink)' }}>
            {trimmed.replace('- ', '')}
          </li>
        );
      } else {
        elements.push(
          <p key={currentKey++} style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '16px', color: 'var(--ink)' }}>
            {trimmed}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div>
      <SEO 
        title={comp.metaTitle}
        description={comp.metaDescription}
        canonicalUrl={`https://blankform.vercel.app/compare/${comp.slug}`}
        type="article"
        schemaData={articleSchema}
      />
      <Header />

      <AdPageWrapper>
        <main className="layout-page" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
          <article style={{ maxWidth: '800px', margin: '0 auto' }}>
            <a href="/compare" style={{ fontSize: '14px', color: 'var(--graphite)', display: 'inline-block', marginBottom: '16px' }}>
              ← Back to comparisons
            </a>
            
            <h1 style={{ fontSize: '34px', fontWeight: 700, lineHeight: 1.3, color: 'var(--ink)', marginBottom: '16px' }}>
              {comp.title}
            </h1>

            <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: 'var(--graphite)', marginBottom: '32px', borderBottom: '1px solid var(--line)', paddingBottom: '16px' }}>
              <span>{comp.category}</span>
              <span>•</span>
              <span>{comp.readTime}</span>
            </div>

            <AdSlot format="category-divider" adIndex={0} label="Sponsored Article Banner" />

            <div className="article-body" style={{ marginTop: '32px' }}>
              {renderContent(comp.content)}
            </div>

            {/* Bottom Call to Action Box */}
            <div style={{ marginTop: '48px', padding: '32px', backgroundColor: 'var(--paper-alt)', border: '1px solid var(--line)', borderRadius: 'var(--border-radius)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                Ready to create your document without paywalls?
              </h2>
              <p style={{ color: 'var(--graphite)', marginBottom: '24px', fontSize: '15px' }}>
                Choose from 200 free certificate and CV templates. No sign-up, no watermark, 100% browser-based.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/certificate" className="btn btn-primary">
                  Browse Certificate Templates →
                </a>
                <a href="/cv" className="btn btn-secondary">
                  Browse CV Templates →
                </a>
              </div>
            </div>
          </article>
        </main>
      </AdPageWrapper>

      <Footer />
    </div>
  );
}
