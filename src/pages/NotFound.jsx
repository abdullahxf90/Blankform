import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main className="container" style={{ paddingTop: '80px', paddingBottom: '80px', textAlign: 'left' }}>
        <h1 style={{ marginBottom: '16px' }}>That page doesn't exist.</h1>
        <p style={{ fontSize: '18px', color: 'var(--graphite)', marginBottom: '32px' }}>
          Here's what does:
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/certificate" className="btn btn-primary">
            Certificate Templates
          </a>
          <a href="/cv" className="btn btn-secondary">
            CV Templates
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
