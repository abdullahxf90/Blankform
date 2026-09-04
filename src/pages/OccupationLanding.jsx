import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TemplateCard } from '../components/TemplateCard';
import { AdSlot } from '../components/AdSlot';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { SEO } from '../components/SEO';
import { getOccupationBySlug } from '../data/occupationsData';
import { CERTIFICATE_TEMPLATES, CV_TEMPLATES } from '../templates';

export function OccupationLanding({ slug }) {
  const occ = getOccupationBySlug(slug) || getOccupationBySlug('nurses');
  const isCv = occ.type === 'cv';
  const templates = isCv ? CV_TEMPLATES : CERTIFICATE_TEMPLATES;
  const filteredTemplates = templates.filter(t => t.category === occ.targetCategory).slice(0, 12);

  return (
    <div>
      <SEO 
        title={occ.metaTitle}
        description={occ.metaDescription}
        canonicalUrl={`https://blankform.vercel.app/${isCv ? 'resume-for' : 'certificate-for'}/${occ.slug}`}
      />
      <Header />

      <AdPageWrapper>
        <main className="layout-page" style={{ paddingTop: '24px' }}>
          {/* Header & SEO Intro */}
          <div style={{ marginBottom: '32px' }}>
            <a href={isCv ? '/cv' : '/certificate'} style={{ fontSize: '13px', color: 'var(--graphite)', display: 'inline-block', marginBottom: '12px' }}>
              ← Back to {isCv ? 'CV Templates' : 'Certificate Templates'}
            </a>
            <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px', color: 'var(--ink)' }}>
              {occ.h1}
            </h1>
            <p className="text-subtle" style={{ maxWidth: '780px', marginBottom: '20px', lineHeight: 1.65, fontSize: '15px' }}>
              {occ.intro}
            </p>
          </div>

          <AdSlot format="category-divider" adIndex={0} label="Sponsored Header Banner" />

          {/* Template Grid */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
              Recommended {isCv ? 'Resume' : 'Certificate'} Designs ({filteredTemplates.length})
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: isCv ? 'repeat(auto-fill, minmax(240px, 1fr))' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {filteredTemplates.map(template => (
                <TemplateCard key={template.id} template={template} linkPrefix={isCv ? '/cv' : '/certificate'} />
              ))}
            </div>
          </section>
        </main>
      </AdPageWrapper>

      <Footer />
    </div>
  );
}
