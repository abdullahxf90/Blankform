import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TemplateCard } from '../components/TemplateCard';
import { AdSlot } from '../components/AdSlot';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { SEO } from '../components/SEO';
import { CERTIFICATE_TEMPLATES } from '../templates';
import { generateFAQSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';

const CATEGORIES = [
  'All',
  'Classic / Formal',
  'Modern / Minimal',
  'Corporate / Training',
  'Academic',
  'Kids / Schools',
  'Sports / Fitness',
  'Professional Development',
  'Event / Participation',
  'Decorative / Themed',
  'Regional / Multilingual'
];

const CERTIFICATE_FAQS = [
  {
    question: "Is Blankform's certificate maker 100% free with no watermark?",
    answer: "Yes, 100% free. You can customize any template and export high-resolution PDF or PNG files instantly with zero watermarks and no hidden fees."
  },
  {
    question: "Do I need to create an account or sign up later?",
    answer: "No account or email registration is required. Everything runs directly inside your web browser."
  },
  {
    question: "How does Blankform protect my data privacy?",
    answer: "Blankform processes all document generation 100% client-side inside your browser using JavaScript and HTML5 Canvas. Nothing you type is ever uploaded, saved, or transmitted to external servers."
  },
  {
    question: "What format can I download my certificate in?",
    answer: "You can export high-resolution vector PDF files ideal for professional printing or high-quality PNG images for digital distribution."
  }
];

export function CertificateGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesToRender = selectedCategory === 'All'
    ? CATEGORIES.filter(c => c !== 'All')
    : [selectedCategory];

  const faqSchema = generateFAQSchema(CERTIFICATE_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Certificate Templates', item: '/certificate' }]);
  const combinedSchema = [faqSchema, breadcrumbSchema];

  return (
    <div>
      <SEO 
        title="Free Certificate Maker — No Sign Up Required | Blankform"
        description="Choose from 100 free certificate templates. Fill in recipient details, customized titles, and signatures, then download as high-res PDF or PNG instantly — no account, no watermark."
        canonicalUrl="https://blankform.abdullah-xf90.workers.dev/certificate"
        schemaData={combinedSchema}
      />
      <Header />

      <AdPageWrapper>
        <main className="layout-page" style={{ paddingTop: '24px' }}>
          {/* Page Title & SEO Intro Copy */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px', color: 'var(--ink)' }}>
              Free Certificate Templates
            </h1>
            <p className="text-subtle" style={{ maxWidth: '780px', marginBottom: '20px', lineHeight: 1.65, fontSize: '15px' }}>
              Create a professional certificate in minutes using one of our free templates. Whether you need a certificate of completion for a course, an achievement award for a student, a recognition certificate for an employee, or a sports championship diploma, Blankform lets you fill in the details and download instantly.
            </p>

            {/* E-E-A-T Technical Trust Explainer */}
            <div style={{ padding: '14px 18px', backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '6px', marginBottom: '24px', fontSize: '13px', color: '#166534', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '16px' }}>🔒</span>
              <div>
                <strong>Client-Side Engine:</strong> This tool runs 100% in your browser using HTML5 Canvas. Your text and recipient names are never stored or uploaded to any server.
              </div>
            </div>

            {/* Live Search Input */}
            <div style={{ maxWidth: '440px', marginBottom: '20px' }}>
              <input
                type="text"
                className="form-input"
                placeholder="🔍 Search 100 certificate designs..."
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
          <AdSlot format="category-divider" adIndex={0} label="Sponsored Header Banner" />

          {/* Category Sections */}
          {categoriesToRender.map((catName, catIdx) => {
            const templatesInCat = CERTIFICATE_TEMPLATES.filter(t => {
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
                  {templatesInCat.map(template => (
                    <TemplateCard key={template.id} template={template} linkPrefix="/certificate" />
                  ))}
                </div>

                {/* ELONGATED RECTANGULAR HORIZONTAL AD BANNER SEPARATING CATEGORIES */}
                <AdSlot 
                  format="category-divider" 
                  adIndex={catIdx + 1} 
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
              {CERTIFICATE_FAQS.map((faq, i) => (
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
