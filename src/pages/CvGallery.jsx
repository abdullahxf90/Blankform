import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TemplateCard } from '../components/TemplateCard';
import { AdSlot } from '../components/AdSlot';
import { AdPageWrapper } from '../components/AdPageWrapper';
import { SEO } from '../components/SEO';
import { CV_TEMPLATES } from '../templates';

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

export function CvGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesToRender = selectedCategory === 'All'
    ? CATEGORIES.filter(c => c !== 'All')
    : [selectedCategory];

  return (
    <div>
      <SEO 
        title="Free CV & Resume Maker — No Sign Up Required | Blankform"
        description="Choose from 100 ATS-friendly and executive CV templates. Customize career summaries, work experience, and top colors in your browser, then export to PDF/PNG instantly without registration."
        canonicalUrl="https://blankform.vercel.app/cv"
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
              Build a professional CV or resume in minutes using our free templates. Whether you need a single-column ATS-friendly resume for corporate job applications, an executive two-column layout for senior roles, an academic Curriculum Vitae for research, or an entry-level resume for students, Blankform provides 100 machine-readable designs. Customize text, photos, and colors live in your browser, then export to crisp PDF or PNG format with zero watermarks.
            </p>

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

          {/* Category Sections Separated by Elongated Horizontal Ad Banners */}
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
        </main>
      </AdPageWrapper>

      <Footer />
    </div>
  );
}
