import React, { useState, useEffect } from 'react';

export function AdPopups() {
  const [showTopAd, setShowTopAd] = useState(false);
  const [showBottomAd, setShowBottomAd] = useState(false);
  const [showModalAd, setShowModalAd] = useState(false);

  const contactLink = "mailto:contact@blankform.com?subject=Advertising%20Inquiry%20on%20Blankform";

  // Staggered timing sequence:
  // 15 sec -> Top Banner
  // 30 sec -> Bottom Banner
  // 45 sec -> Center 50% Modal Popup
  useEffect(() => {
    // 1. Show Top Banner after 15 seconds
    const topTimer = setTimeout(() => {
      setShowTopAd(true);
    }, 15000);

    // 2. Show Bottom Banner after 30 seconds
    const bottomTimer = setTimeout(() => {
      setShowBottomAd(true);
    }, 30000);

    // 3. Show Center Modal Popup after 45 seconds
    const modalTimer = setTimeout(() => {
      setShowModalAd(true);
    }, 45000);

    return () => {
      clearTimeout(topTimer);
      clearTimeout(bottomTimer);
      clearTimeout(modalTimer);
    };
  }, []);

  return (
    <>
      {/* 1. TOP STICKY POPUP AD BANNER (AVAILABLE SPONSOR SPOT) */}
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
            fontSize: '13px',
            animation: 'fadeIn 0.3s ease-in'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, overflow: 'hidden' }}>
            <span style={{ backgroundColor: '#2563EB', color: '#FFFFFF', padding: '2px 8px', borderRadius: '3px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>
              Ad Space Available
            </span>
            <span style={{ fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              📢 Top Sticky Banner Spot (100% Width) — Contact us to promote your service here.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <a
              href={contactLink}
              style={{
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                padding: '4px 14px',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '12px',
                textDecoration: 'none'
              }}
            >
              Sponsor This Space ✉️
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
              title="Close placeholder"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 2. BOTTOM STICKY POPUP AD BANNER (AVAILABLE SPONSOR SPOT) */}
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
            borderTop: '1px solid #334155',
            animation: 'fadeIn 0.3s ease-in'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ backgroundColor: '#16A34A', color: '#FFFFFF', padding: '6px 12px', borderRadius: '4px', fontWeight: 700, fontSize: '12px' }}>
              Available Space
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Bottom Sticky Banner Spot — Reserved for Advertisers</div>
              <div style={{ fontSize: '12px', color: '#94A3B8' }}>High-visibility placement seen by thousands of daily users.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={contactLink}
              style={{
                backgroundColor: '#16A34A',
                color: '#FFFFFF',
                border: 'none',
                padding: '6px 16px',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '13px',
                textDecoration: 'none'
              }}
            >
              Advertise Here ✉️
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
              title="Close placeholder"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 3. CENTER 50% SCREEN MODAL POPUP AD (CENTER ALIGNED) */}
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
            padding: '20px',
            animation: 'fadeIn 0.3s ease-in'
          }}
        >
          <div
            style={{
              width: '50vw',
              minWidth: '320px',
              maxWidth: '560px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '32px 28px',
              boxSizing: 'border-box',
              border: '2px dashed #2563EB',
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
                justify: 'center'
              }}
              title="Close Popup"
            >
              ✕
            </button>

            {/* Centered Modal Content */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#EFF6FF', color: '#2563EB', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
                SPONSORSHIP OPPORTUNITY
              </div>

              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginBottom: '12px', lineHeight: 1.2 }}>
                Advertise Your Brand Here
              </h2>

              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', marginBottom: '20px', maxWidth: '440px' }}>
                Blankform serves thousands of active job seekers, students, and professionals creating documents daily. Reserve this prime center modal ad spot.
              </p>

              <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#2563EB', fontWeight: 700, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
                <span>✓ Prime Placement</span>
                <span>✓ High CTR Opportunity</span>
                <span>✓ Direct Link</span>
              </div>
            </div>

            {/* Centered Modal Action Controls */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', width: '100%', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
              <button
                type="button"
                onClick={() => setShowModalAd(false)}
                className="btn btn-secondary"
                style={{ padding: '8px 18px', fontSize: '13px' }}
              >
                Close &amp; Continue
              </button>
              <a
                href={contactLink}
                className="btn btn-primary"
                style={{ padding: '8px 22px', fontSize: '13px', backgroundColor: '#2563EB', borderColor: '#2563EB', textDecoration: 'none', color: '#FFFFFF', fontWeight: 700 }}
              >
                Contact to Advertise ✉️
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
