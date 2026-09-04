import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <a href="/certificate">Certificate Templates</a>
          <a href="/cv">CV &amp; Resume Templates</a>
          <a href="/guides">Career &amp; Certificate Guides</a>
          <a href="/about">About Blankform</a>
          <a href="/privacy">Privacy Note</a>
        </div>
        <p className="text-small">
          Nothing you create on Blankform is stored on our servers. All document processing and export happen 100% locally inside your browser.
        </p>
        <p className="text-small text-subtle">
          &copy; {new Date().getFullYear()} Blankform. 100% Free Client-Side Document Generator.
        </p>
      </div>
    </footer>
  );
}
