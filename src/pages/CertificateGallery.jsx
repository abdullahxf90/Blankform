import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TemplateCard } from '../components/TemplateCard';
import { AdSlot } from '../components/AdSlot';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { SEO } from '../components/SEO';
import { CERTIFICATE_TEMPLATES } from '../templates';

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

export function CertificateGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesToRender = selectedCategory === 'All'
    ? CATEGORIES.filter(c => c !== 'All')
    : [selectedCategory];

  return (
    <div>
      <SEO 
        title="Free Certificate Maker — No Sign Up Required | Blankform"
        description="Choose from 100 free certificate templates. Fill in recipient details, customized titles, and signatures, then download as high-res PDF or PNG instantly — no account, no watermark."
        canonicalUrl="https://blankform.vercel.app/certificate"
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
              Create a professional certificate in minutes using one of our free templates. Whether you need a certificate of completion for a course, an achievement award for a student, a recognition certificate for an employee, or a sports championship diploma, Blankform lets you fill in the details and download instantly. There’s no account required, no watermark, and nothing you create is stored — everything happens directly inside your browser.
            </p>

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

          {/* Category Sections Separated by Elongated Horizontal Ad Banners */}
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
        </main>
      </AdPageWrapper>

      <Footer />
    </div>
  );
}
