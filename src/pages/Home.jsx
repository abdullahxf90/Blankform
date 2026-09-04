import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AdSlot } from '../components/AdSlot';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { SEO } from '../components/SEO';
import { CERTIFICATE_TEMPLATES, CV_TEMPLATES } from '../templates';
import { DocumentRenderer } from '../engine/renderTemplate';

export function Home() {
  const sampleCert = CERTIFICATE_TEMPLATES[0];
  const sampleCv = CV_TEMPLATES[0];

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Blankform',
    'url': 'https://blankform.abdullah-xf90.workers.dev',
    'description': 'Free certificate and CV maker, no sign up required.'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <SEO 
        title="Blankform — Free Certificate & CV Maker, No Sign Up"
        description="Create certificates and CVs for free. No sign up, no watermark, and nothing you type is saved or sent to a server. Pick a template and download instantly."
        canonicalUrl="https://blankform.abdullah-xf90.workers.dev/"
        schemaData={websiteSchema}
      />
      <Header />

      <AdPageWrapper>
        <main style={{ paddingTop: '32px', paddingBottom: '64px' }}>
          {/* 1. Hero Section */}
          <section style={{ maxWidth: '720px', marginBottom: '32px' }}>
            <h1 style={{ marginBottom: '16px', fontSize: '38px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>
              Make a certificate or CV in a few minutes.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--graphite)', marginBottom: '28px', lineHeight: 1.5 }}>
              No sign up required. No watermarks. 100% private &amp; processed inside your browser.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="/certificate" className="btn btn-primary">
                Start a Certificate →
              </a>
              <a href="/cv" className="btn btn-secondary">
                Start a CV →
              </a>
            </div>
          </section>

          {/* 2. Top Hero Horizontal Ad Space Banner */}
          <AdSlot format="category-divider" adIndex={0} label="HOME HERO AD BANNER (728 × 90)" />

          {/* 3. Two Tool Content Blocks Side by Side */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', margin: '40px 0' }}>
            {/* Certificate Block */}
            <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--border-radius)', padding: '28px', backgroundColor: 'var(--paper-alt)' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Certificate Generator</h2>
              <p style={{ color: 'var(--graphite)', marginBottom: '20px', fontSize: '15px' }}>
                Choose from 100 distinct award, diploma, and completion certificate templates with instant PDF &amp; PNG exports.
              </p>
              <div style={{ height: '190px', backgroundColor: '#FFFFFF', border: '1px solid var(--line)', borderRadius: 'var(--border-radius)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{ transform: 'scale(0.25)', transformOrigin: 'center center', pointerEvents: 'none' }}>
                  <DocumentRenderer template={sampleCert} fields={sampleCert.defaultFields} />
                </div>
              </div>
              <a href="/certificate" className="btn btn-secondary" style={{ width: '100%' }}>
                Browse 100 Certificate Templates →
              </a>
            </div>

            {/* CV Block */}
            <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--border-radius)', padding: '28px', backgroundColor: 'var(--paper-alt)' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>CV &amp; Resume Generator</h2>
              <p style={{ color: 'var(--graphite)', marginBottom: '20px', fontSize: '15px' }}>
                Build 100 single-page or multi-column ATS-ready resumes with customizable top colors and photo uploads.
              </p>
              <div style={{ height: '190px', backgroundColor: '#FFFFFF', border: '1px solid var(--line)', borderRadius: 'var(--border-radius)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{ transform: 'scale(0.2)', transformOrigin: 'center center', pointerEvents: 'none' }}>
                  <DocumentRenderer template={sampleCv} fields={sampleCv.defaultFields} />
                </div>
              </div>
              <a href="/cv" className="btn btn-secondary" style={{ width: '100%' }}>
                Browse 100 CV Templates →
              </a>
            </div>
          </section>

          {/* 4. Mid-Page In-Feed Ad Space Banner */}
          <AdSlot format="sidebar" label="MID-PAGE SPONSOR BANNER (300 × 250)" />

          {/* 5. Bottom Horizontal Leaderboard Ad Space */}
          <AdSlot format="category-divider" adIndex={1} label="HOME BOTTOM LEADERBOARD BANNER (728 × 90)" />
        </main>
      </AdPageWrapper>

      <Footer />
    </div>
  );
}
