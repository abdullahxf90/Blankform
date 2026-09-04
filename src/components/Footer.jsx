import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <a href="/certificate">Certificate Templates</a>
          <a href="/cv">CV &amp; Resume Templates</a>
          <a href="/guides">Career &amp; Certificate Guides</a>
          <a href="/compare">Competitor Comparisons</a>
          <a href="/about">About Blankform</a>
          <a href="/privacy">Privacy Note</a>
        </div>

        <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--graphite)', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>Popular Roles:</span>
          <a href="/resume-for/nurses" style={{ color: 'var(--graphite)' }}>Nurses</a>
          <a href="/resume-for/teachers" style={{ color: 'var(--graphite)' }}>Teachers</a>
          <a href="/resume-for/software-engineers" style={{ color: 'var(--graphite)' }}>Software Engineers</a>
          <a href="/resume-for/students" style={{ color: 'var(--graphite)' }}>Students</a>
          <a href="/certificate-for/teachers-cert" style={{ color: 'var(--graphite)' }}>Classroom Awards</a>
          <a href="/certificate-for/coaches" style={{ color: 'var(--graphite)' }}>Sports Awards</a>
        </div>

        <p className="text-small" style={{ marginTop: '20px' }}>
          Nothing you create on Blankform is stored on our servers. All document processing and export happen 100% locally inside your browser.
        </p>
        <p className="text-small text-subtle">
          &copy; {new Date().getFullYear()} Blankform. 100% Free Client-Side Document Generator.
        </p>
      </div>
    </footer>
  );
}
