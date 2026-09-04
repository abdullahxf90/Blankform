import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { AdSlot } from '../components/AdSlot';
import { COMPARISONS_DATA } from '../data/comparisonsData';

export function ComparisonsHub() {
  return (
    <div>
      <SEO 
        title="Blankform Alternatives & Competitor Comparisons"
        description="See how Blankform compares to Canva, Zety, Novoresume, and Resume.io. 100% free document generator, no sign up, no watermark."
        canonicalUrl="https://blankform.abdullah-xf90.workers.dev/compare"
      />
      <Header />

      <AdPageWrapper>
        <main className="layout-page" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
          <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px', color: 'var(--ink)' }}>
              Blankform vs Other Generator Tools
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--graphite)', lineHeight: 1.6 }}>
              Compare Blankform against popular resume builders and certificate creators. We offer a transparent 100% free model with zero sign-up requirements, zero watermarks, and 100% client-side privacy.
            </p>
          </div>

          <AdSlot format="category-divider" adIndex={0} label="Sponsored Comparison Banner" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px', marginTop: '32px' }}>
            {COMPARISONS_DATA.map(comp => (
              <a 
                key={comp.slug} 
                href={`/compare/${comp.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '24px',
                  backgroundColor: 'var(--paper-alt)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--border-radius)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.15s ease, border-color 0.15s ease'
                }}
              >
                <div style={{ fontSize: '12px', color: 'var(--graphite)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                  {comp.category} • {comp.readTime}
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>
                  {comp.title}
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--graphite)', lineHeight: 1.5, marginBottom: '16px', flexGrow: 1 }}>
                  {comp.intro}
                </p>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
                  Read Comparison →
                </span>
              </a>
            ))}
          </div>
        </main>
      </AdPageWrapper>

      <Footer />
    </div>
  );
}
