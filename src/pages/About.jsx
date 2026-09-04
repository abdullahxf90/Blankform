import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px', maxWidth: '680px' }}>
        <h2 style={{ marginBottom: '24px' }}>About Blankform</h2>
        <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ink)' }}>
          Blankform generates professional certificates and CVs directly inside your web browser. There is no user account because there's nothing saved to a database — your personal information stays entirely on your device and is never transmitted to a server. Blankform is funded by discreet ad placements, allowing all 200+ templates to remain 100% free with no watermarks.
        </p>
      </main>

      <Footer />
    </div>
  );
}
