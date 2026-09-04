import React from 'react';

export function Header({ activeTool = null, showCrossLink = false }) {
  return (
    <header className="header">
      <div className="container header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="/" className="wordmark" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none', color: 'var(--ink)' }}>
            Blankform
          </a>
          <nav style={{ display: 'flex', gap: '16px', fontSize: '14px', fontWeight: 500 }}>
            <a href="/certificate" style={{ textDecoration: 'none', color: 'var(--ink)' }}>Certificates</a>
            <a href="/cv" style={{ textDecoration: 'none', color: 'var(--ink)' }}>CVs &amp; Resumes</a>
            <a href="/guides" style={{ textDecoration: 'none', color: 'var(--graphite)' }}>Guides</a>
          </nav>
        </div>

        {showCrossLink && activeTool === 'certificate' && (
          <a href="/cv" className="btn btn-secondary btn-small">
            Need a CV instead? →
          </a>
        )}

        {showCrossLink && activeTool === 'cv' && (
          <a href="/certificate" className="btn btn-secondary btn-small">
            Need a certificate instead? →
          </a>
        )}
      </div>
    </header>
  );
}
