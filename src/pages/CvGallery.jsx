import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TemplateCard } from '../components/TemplateCard';
import { AdSlot } from '../components/AdSlot';
import { AdPageWrapper } from '../components/AdPageWrapper';
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
      <Header />

      <AdPageWrapper>
        <main className="layout-page" style={{ paddingTop: '24px' }}>
          {/* Page Title & Search Bar */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>
              Free CV &amp; Resume Templates (100 Designs)
            </h1>
            <p className="text-subtle" style={{ maxWidth: '640px', marginBottom: '20px' }}>
              Browse 100 ATS-friendly and executive CV templates. Customize text, photos, and top colors in your browser, then export to PDF/PNG instantly.
            </p>

            {/* Live Search Input */}
            <div style={{ maxWidth: '400px', marginBottom: '20px' }}>
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
