import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AdSlot } from '../components/AdSlot';
import { CERTIFICATE_TEMPLATES, CV_TEMPLATES } from '../templates';
import { DocumentRenderer } from '../engine/renderTemplate';

export function Home() {
  const sampleCert = CERTIFICATE_TEMPLATES[0];
  const sampleCv = CV_TEMPLATES[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Hero Section */}
        <section style={{ maxWidth: '680px', marginBottom: '64px' }}>
          <h1 style={{ marginBottom: '16px', fontSize: '38px', letterSpacing: '-0.02em' }}>
            Blankform — Create certificates and CVs in minutes.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--graphite)', marginBottom: '32px' }}>
            100% free document generator. No signup. No watermark. Client-side privacy.
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

        {/* Two Tool Content Blocks Side by Side */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          {/* Certificate Block */}
          <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--border-radius)', padding: '32px', backgroundColor: 'var(--paper-alt)' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Certificate Generator</h2>
            <p style={{ color: 'var(--graphite)', marginBottom: '24px', fontSize: '15px' }}>
              Choose from 100 distinct award, diploma, and completion certificate templates with instant PDF &amp; PNG exports.
            </p>
            <div style={{ height: '200px', backgroundColor: '#FFFFFF', border: '1px solid var(--line)', borderRadius: 'var(--border-radius)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{ transform: 'scale(0.25)', transformOrigin: 'center center', pointerEvents: 'none' }}>
                <DocumentRenderer template={sampleCert} fields={sampleCert.defaultFields} />
              </div>
            </div>
            <a href="/certificate" className="btn btn-secondary" style={{ width: '100%' }}>
              Browse 100 Certificate Templates →
            </a>
          </div>

          {/* CV Block */}
          <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--border-radius)', padding: '32px', backgroundColor: 'var(--paper-alt)' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>CV &amp; Resume Generator</h2>
            <p style={{ color: 'var(--graphite)', marginBottom: '24px', fontSize: '15px' }}>
              Build 100 single-page or multi-column ATS-ready resumes with customizable top colors and photo uploads.
            </p>
            <div style={{ height: '200px', backgroundColor: '#FFFFFF', border: '1px solid var(--line)', borderRadius: 'var(--border-radius)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{ transform: 'scale(0.2)', transformOrigin: 'center center', pointerEvents: 'none' }}>
                <DocumentRenderer template={sampleCv} fields={sampleCv.defaultFields} />
              </div>
            </div>
            <a href="/cv" className="btn btn-secondary" style={{ width: '100%' }}>
              Browse 100 CV Templates →
            </a>
          </div>
        </section>

        {/* Ad Slot */}
        <AdSlot format="category-divider" adIndex={0} label="Sponsored Partner" />
      </main>

      <Footer />
    </div>
  );
}
