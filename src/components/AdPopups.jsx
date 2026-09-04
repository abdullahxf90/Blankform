import React, { useState, useEffect } from 'react';

export function AdPopups() {
  const [showTopAd, setShowTopAd] = useState(true);
  const [showBottomAd, setShowBottomAd] = useState(true);
  const [showModalAd, setShowModalAd] = useState(false);

  // Show center 50% modal ad after 2 seconds automatically
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModalAd(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. TOP STICKY POPUP AD BANNER (NORDVPN) WITH CLOSE BUTTON */}
      {showTopAd && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            zIndex: 9999,
            padding: '8px 16px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            fontSize: '13px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, overflow: 'hidden' }}>
            <span style={{ backgroundColor: '#16A34A', color: '#FFFFFF', padding: '2px 8px', borderRadius: '3px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>
              NordVPN • Ad
            </span>
            <span style={{ fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              🔒 Protect Your Privacy &amp; Encrypt Up to 10 Devices — 68% Off Limited Special Offer
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <a
              href="https://nordvpn.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#16A34A',
                color: '#FFFFFF',
                border: 'none',
                padding: '4px 14px',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '12px',
                textDecoration: 'none'
              }}
            >
              Get NordVPN Deal ↗
            </a>
            <button
              type="button"
              onClick={() => setShowTopAd(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#94A3B8',
                fontSize: '18px',
                lineHeight: 1,
                cursor: 'pointer',
                padding: '2px 6px'
              }}
              title="Close advertisement"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 2. BOTTOM STICKY POPUP AD BANNER (BLUEHOST) WITH CLOSE BUTTON */}
      {showBottomAd && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#1E293B',
            color: '#FFFFFF',
            zIndex: 9999,
            padding: '10px 20px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            boxShadow: '0 -2px 12px rgba(0,0,0,0.25)',
            borderTop: '1px solid #334155'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ backgroundColor: '#2563EB', color: '#FFFFFF', padding: '6px 12px', borderRadius: '4px', fontWeight: 700, fontSize: '12px' }}>
              Bluehost
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Launch Your Business Website for $2.95/mo</div>
              <div style={{ fontSize: '12px', color: '#94A3B8' }}>Includes Free Domain Name, Free SSL Certificate, &amp; 24/7 Expert Support.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://bluehost.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                padding: '6px 16px',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '13px',
                textDecoration: 'none'
              }}
            >
              Claim 70% Off ↗
            </a>
            <button
              type="button"
              onClick={() => setShowBottomAd(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#94A3B8',
                fontSize: '20px',
                lineHeight: 1,
                cursor: 'pointer',
                padding: '2px 8px'
              }}
              title="Close advertisement"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 3. CENTER 50% SCREEN MODAL POPUP AD (COURSERA) WITH CLOSE BUTTON */}
      {showModalAd && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            padding: '20px'
          }}
        >
          <div
            style={{
              width: '50vw',
              minWidth: '320px',
              maxWidth: '620px',
              height: '50vh',
              minHeight: '340px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              padding: '28px',
              boxSizing: 'border-box',
              border: '2px solid #E2E8F0',
              overflow: 'hidden'
            }}
          >
            {/* Close Button Top Right */}
            <button
              type="button"
              onClick={() => setShowModalAd(false)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '16px',
                backgroundColor: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#475569',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                transition: 'background-color 0.15s ease'
              }}
              title="Close Popup"
            >
              ✕
            </button>

            {/* Modal Body */}
            <div>
              <div style={{ display: 'inline-block', backgroundColor: '#FAF5FF', color: '#9333EA', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                SPONSORED BY COURSERA GLOBAL DEGREES
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0F172A', marginBottom: '12px', lineHeight: 1.2 }}>
                Earn an Accredited Master Degree 100% Online
              </h2>

              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', marginBottom: '16px' }}>
                Advance your career with world-class degrees in Data Science, Computer Science, and Business Administration from top global universities.
              </p>

              <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#16A34A', fontWeight: 600 }}>
                <span>✓ Top 10 Universities</span>
                <span>✓ Flexible Schedules</span>
                <span>✓ Financial Aid Available</span>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
              <button
                type="button"
                onClick={() => setShowModalAd(false)}
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                Close &amp; Continue
              </button>
              <a
                href="https://coursera.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '8px 20px', fontSize: '13px', backgroundColor: '#9333EA', borderColor: '#9333EA', textDecoration: 'none', color: '#FFFFFF', fontWeight: 600 }}
              >
                Explore Degrees ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
