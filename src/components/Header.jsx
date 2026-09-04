import React from 'react';

export function Header({ activeTool = null, showCrossLink = false }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="wordmark" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none', color: 'var(--ink)' }}>
          Blankform
        </a>

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
