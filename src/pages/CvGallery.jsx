import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TemplateCard } from '../components/TemplateCard';
import { AdSlot } from '../components/AdSlot';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { SEO } from '../components/SEO';
import { CV_TEMPLATES } from '../templates';
import { generateFAQSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';

const CATEGORIES = [
  'All',
  'Classic / ATS-Safe',
  'Two-Column / Modern',
  'Minimal / Whitespace',
  'Creative',
  'Executive / Senior',
  'Technical / Engineering',
  'Academic / Research',
  'Entry-Level / Student',
  'Industry-Specific',
  'International / Localized'
];

const CV_FAQS = [
  {
    question: "Are Blankform's CV templates ATS-friendly?",
    answer: "Yes. Our single-column and classic templates use standard headings, selectable text, and clean hierarchy designed for Applicant Tracking Systems (ATS) screening."
  },
  {
    question: "Is there any watermark or paywall on download?",
    answer: "No. You can customize any CV template and export high-resolution PDF or PNG files completely free with zero watermarks and no credit card required."
  },
  {
    question: "Is my personal resume data stored on any server?",
    answer: "No. Blankform processes everything 100% locally in your browser. None of your contact info, work history, or personal details are uploaded or stored anywhere."
  },
  {
    question: "Can I add a profile photo or custom colors?",
    answer: "Yes! You can customize header accent colors, upload a profile photo, adjust section titles, and tailor your work experience live."
  }
];

export function CvGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesToRender = selectedCategory === 'All'
    ? CATEGORIES.filter(c => c !== 'All')
    : [selectedCategory];

  const faqSchema = generateFAQSchema(CV_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'CV & Resume Templates', item: '/cv' }]);
  const combinedSchema = [faqSchema, breadcrumbSchema];

  return (
    <div>
      <SEO 
        title="Free CV & Resume Maker — No Sign Up Required | Blankform"
        description="Choose from 100 ATS-friendly and executive CV templates. Customize career summaries, work experience, and top colors in your browser, then export to PDF/PNG instantly without registration."
        canonicalUrl="https://blankform.abdullah-xf90.workers.dev/cv"
        schemaData={combinedSchema}
      />
      <Header />

      <AdPageWrapper>
        <main className="layout-page" style={{ paddingTop: '24px' }}>
          {/* Page Title & SEO Intro Copy */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px', color: 'var(--ink)' }}>
              Free CV &amp; Resume Templates
            </h1>
            <p className="text-subtle" style={{ maxWidth: '780px', marginBottom: '20px', lineHeight: 1.65, fontSize: '15px' }}>
              Build a professional CV or resume in minutes using our free templates. Whether you need a single-column ATS-friendly resume for corporate job applications, an executive layout, or an entry-level resume, Blankform provides 100 machine-readable designs.
            </p>

            {/* E-E-A-T Technical Trust Explainer */}
            <div style={{ padding: '14px 18px', backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '6px', marginBottom: '24px', fontSize: '13px', color: '#166534', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '16px' }}>🔒</span>
              <div>
                <strong>Local Browser Processing:</strong> Your resume details, contact info, and work experience never leave your device. Rendered 100% client-side with zero server storage.
              </div>
            </div>

            {/* Live Search Input */}
            <div style={{ maxWidth: '440px', marginBottom: '20px' }}>
              <input
                type="text"
                className="form-input"
                placeholder="🔍 Search 100 CV & resume templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: '10px 14px', fontSize: '14px' }}
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Top Leaderboard Ad Banner */}
          <AdSlot format="category-divider" adIndex={1} label="Sponsored Header Banner" />

          {/* Category Sections */}
          {categoriesToRender.map((catName, catIdx) => {
            const templatesInCat = CV_TEMPLATES.filter(t => {
              const matchesCat = t.category === catName;
              const matchesQuery = searchQuery === '' || 
                t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                t.description.toLowerCase().includes(searchQuery.toLowerCase());
              return matchesCat && matchesQuery;
            });

            if (templatesInCat.length === 0) return null;

            return (
              <section key={catName} style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)' }}>
                    {catName}
                  </h2>
                  <span style={{ fontSize: '12px', color: 'var(--graphite)', fontWeight: 500 }}>
                    {templatesInCat.length} Designs
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
                  {templatesInCat.map(template => (
                    <TemplateCard key={template.id} template={template} linkPrefix="/cv" />
                  ))}
                </div>

                {/* ELONGATED RECTANGULAR HORIZONTAL AD BANNER SEPARATING CATEGORIES */}
                <AdSlot 
                  format="category-divider" 
                  adIndex={catIdx + 2} 
                  label={`Sponsored Advertisement • ${catName}`} 
                />
              </section>
            );
          })}

          {/* FAQ Section with FAQPage Schema */}
          <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: 'var(--ink)' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {CV_FAQS.map((faq, i) => (
                <div key={i} style={{ padding: '20px', backgroundColor: 'var(--paper-alt)', borderRadius: '6px', border: '1px solid var(--line)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--graphite)', lineHeight: 1.5 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </AdPageWrapper>

      <Footer />
    </div>
  );
}
