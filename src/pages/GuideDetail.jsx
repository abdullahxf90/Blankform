import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { AdSlot } from '../components/AdSlot';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { getGuideBySlug } from '../data/guidesData';
import { NotFound } from './NotFound';

export function GuideDetail({ slug }) {
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return <NotFound />;
  }

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': guide.title,
    'description': guide.metaDescription,
    'author': {
      '@type': 'Organization',
      'name': 'Blankform'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Blankform',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://blankform.abdullah-xf90.workers.dev/favicon.svg'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://blankform.abdullah-xf90.workers.dev/guides/${guide.slug}`
    }
  };

  // Basic renderer for guide sections
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
      } else if (trimmed.startsWith('> ')) {
        elements.push(
          <blockquote key={currentKey++} style={{ borderLeft: '4px solid var(--signal)', paddingLeft: '16px', margin: '20px 0', color: 'var(--graphite)', fontStyle: 'italic', fontSize: '15px' }}>
            {trimmed.replace('> ', '')}
          </blockquote>
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
        title={guide.metaTitle}
        description={guide.metaDescription}
        canonicalUrl={`https://blankform.abdullah-xf90.workers.dev/guides/${guide.slug}`}
        type="article"
        schemaData={articleSchema}
      />
      <Header />

      <AdPageWrapper>
        <main className="layout-page" style={{ paddingTop: '32px', paddingBottom: '64px', maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <a href="/guides" style={{ fontSize: '13px', color: 'var(--graphite)', textDecoration: 'none' }}>
              ← Back to Guides
            </a>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ backgroundColor: '#EFF6FF', color: '#2563EB', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
                {guide.category}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--graphite)' }}>{guide.date} • {guide.readTime}</span>
            </div>

            <h1 style={{ fontSize: '36px', fontWeight: 700, lineHeight: 1.25, color: 'var(--ink)', marginBottom: '16px' }}>
              {guide.title}
            </h1>

            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--graphite)', fontStyle: 'italic' }}>
              {guide.intro}
            </p>
          </div>

          <AdSlot format="category-divider" adIndex={0} label="Sponsored Article Banner" />

          {/* Article Body */}
          <article style={{ marginTop: '32px' }}>
            {renderContent(guide.content)}
          </article>

          {/* Bottom Callout Box */}
          <div style={{ marginTop: '48px', padding: '32px', backgroundColor: 'var(--paper-alt)', border: '1px solid var(--line)', borderRadius: 'var(--border-radius)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
              Create Your Document for Free
            </h3>
            <p style={{ color: 'var(--graphite)', marginBottom: '20px', fontSize: '15px' }}>
              Blankform is 100% free with no signup, no watermark, and no data uploaded to servers. Choose from 200+ templates and export instant PDF/PNGs.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/certificate" className="btn btn-primary btn-small">Browse Certificates →</a>
              <a href="/cv" className="btn btn-secondary btn-small">Browse CV Templates →</a>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <AdSlot format="category-divider" adIndex={2} label="Sponsored Partner" />
          </div>
        </main>
      </AdPageWrapper>

      <Footer />
    </div>
  );
}
