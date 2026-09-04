import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { AdSlot } from '../components/AdSlot';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { GUIDES_DATA } from '../data/guidesData';

export function GuidesHub() {
  return (
    <div>
      <SEO 
        title="Guides & Career Resources — Blankform"
        description="Free guides on resume formatting, ATS optimization, certificate wording examples, and career advice. Learn how to craft winning documents with Blankform."
        canonicalUrl="https://blankform.vercel.app/guides"
      />
      <Header />

      <AdPageWrapper>
        <main className="layout-page" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
          <div style={{ marginBottom: '40px', maxWidth: '720px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Guides &amp; Resources
            </h1>
            <p className="text-subtle" style={{ fontSize: '17px', lineHeight: 1.6 }}>
              Expert advice on resume writing, ATS optimization, certificate wording examples, and document design. Everything you need to create standout professional documents.
            </p>
          </div>

          <AdSlot format="category-divider" adIndex={0} label="Sponsored Header Banner" />

          {/* Guides Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px', marginTop: '32px' }}>
            {GUIDES_DATA.map((guide, idx) => (
              <article 
                key={guide.slug}
                style={{
                  backgroundColor: 'var(--paper-alt)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--border-radius)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--signal)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {guide.category}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--graphite)' }}>
                      {guide.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
                    <a href={`/guides/${guide.slug}`} style={{ textDecoration: 'none', color: 'var(--ink)' }}>
                      {guide.title}
                    </a>
                  </h2>

                  <p style={{ fontSize: '14px', color: 'var(--graphite)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {guide.intro}
                  </p>
                </div>

                <div>
                  <a 
                    href={`/guides/${guide.slug}`} 
                    className="btn btn-secondary btn-small"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                  >
                    Read Guide →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '56px' }}>
            <AdSlot format="category-divider" adIndex={1} label="Sponsored Partner" />
          </div>
        </main>
      </AdPageWrapper>

      <Footer />
    </div>
  );
}
