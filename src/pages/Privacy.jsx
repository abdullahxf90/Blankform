import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Privacy() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px', maxWidth: '680px' }}>
        <h2 style={{ marginBottom: '24px' }}>Privacy Note</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '16px', lineHeight: 1.6 }}>
          <section>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>What data Blankform collects</h3>
            <p>
              None from generator forms. Everything you type — recipient names, dates, contact details, work experience — is processed purely in your browser's local memory and is never uploaded to any server.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Ad network disclosures</h3>
            <p>
              We display third-party advertisement units to keep Blankform 100% free. Ad partners may use standard cookies or anonymous telemetry to serve contextual advertising.
            </p>
          </section>

          <section>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Contact</h3>
            <p>
              Questions or feedback? Email us at <a href="mailto:privacy@blankform.app" className="inline-link">privacy@blankform.app</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
