import React from 'react';

// REAL EXTERNAL THIRD-PARTY SPONSORED ADVERTISEMENTS DATA
const THIRD_PARTY_ADS = [
  {
    sponsor: 'NordVPN Cyber Security',
    badge: 'NordVPN • 68% Off Deal',
    title: 'Secure Your Internet & Block Tracking Ads',
    desc: 'Protect up to 10 devices simultaneously with military-grade encryption & high-speed VPN servers worldwide.',
    cta: 'Claim 68% Off Deal',
    url: 'https://nordvpn.com',
    bg: '#F0FDF4',
    accent: '#16A34A'
  },
  {
    sponsor: 'Bluehost Web Hosting',
    badge: 'Bluehost • Special Offer',
    title: 'Launch Your Business Website for $2.95/month',
    desc: 'Includes Free SSL Certificate, Free Domain Name Registration, 24/7 Expert Support & 1-Click WordPress Setup.',
    cta: 'Get 70% Off Hosting',
    url: 'https://bluehost.com',
    bg: '#EFF6FF',
    accent: '#2563EB'
  },
  {
    sponsor: 'Coursera Global Degrees',
    badge: 'Coursera • Sponsored',
    title: 'Earn an Accredited Master Degree 100% Online',
    desc: 'Programs from Imperial College London, University of Illinois, & IBM. Flexible schedules & financial aid available.',
    cta: 'Explore Degrees',
    url: 'https://coursera.org',
    bg: '#FAF5FF',
    accent: '#9333EA'
  },
  {
    sponsor: 'Shopify E-Commerce',
    badge: 'Shopify • $1/Month Trial',
    title: 'Start & Grow Your Online E-Commerce Store',
    desc: 'Everything you need to sell products online, manage store inventory, and accept credit cards globally.',
    cta: 'Start Free Trial',
    url: 'https://shopify.com',
    bg: '#ECFDF5',
    accent: '#059669'
  },
  {
    sponsor: 'Grammarly AI Assistant',
    badge: 'Grammarly • Free Tool',
    title: 'Write Flawless Emails & Proposals Automatically',
    desc: 'Real-time tone detection, grammar correction, and instant AI sentence rephrasing for Chrome & Word.',
    cta: 'Install Free Extension',
    url: 'https://grammarly.com',
    bg: '#FFF7ED',
    accent: '#EA580C'
  },
  {
    sponsor: 'Google Cloud Platform',
    badge: 'Google Cloud • $300 Credits',
    title: 'Get $300 Free Cloud Credits for Developers & Startups',
    desc: 'Deploy scalable virtual machines, AI/ML models, and managed databases on Google global infrastructure.',
    cta: 'Claim $300 Credits',
    url: 'https://cloud.google.com',
    bg: '#F0F9FF',
    accent: '#0284C7'
  }
];

export function AdSlot({ format = 'category-divider', label = 'Advertisement', adIndex = 0 }) {
  const ad = THIRD_PARTY_ADS[adIndex % THIRD_PARTY_ADS.length];

  // 1. Skyscraper 160x600 Left & Right Sticky Side Ad
  if (format === 'skyscraper') {
    return (
      <div className="ad-slot-container" style={{ margin: 0, position: 'sticky', top: '80px' }}>
        <span className="ad-label" style={{ fontSize: '10px' }}>{label}</span>
        <div 
          className="ad-box" 
          style={{ 
            width: '160px', 
            height: '600px', 
            backgroundColor: ad.bg, 
            border: `1.5px solid ${ad.accent}`, 
            borderRadius: '8px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justify: 'space-between', 
            color: '#0F172A', 
            fontSize: '12px', 
            textAlign: 'center',
            padding: '16px 12px',
            boxSizing: 'border-box'
          }}
        >
          <span style={{ fontSize: '10px', fontWeight: 700, color: ad.accent, textTransform: 'uppercase' }}>
            {ad.badge}
          </span>

          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: ad.accent, marginBottom: '4px' }}>
              {ad.sponsor}
            </div>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#0F172A', marginBottom: '8px', lineHeight: 1.3 }}>
              {ad.title}
            </div>
            <div style={{ fontSize: '11px', color: '#475569', lineHeight: 1.4 }}>
              {ad.desc}
            </div>
          </div>

          <a 
            href={ad.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: ad.accent, 
              color: '#FFFFFF', 
              padding: '8px 12px', 
              borderRadius: '4px', 
              fontSize: '11px', 
              fontWeight: 600,
              textDecoration: 'none',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {ad.cta} ↗
          </a>
        </div>
      </div>
    );
  }

  // 2. Sidebar Form 300x250 Ad
  if (format === 'sidebar') {
    return (
      <div className="ad-slot-container" style={{ margin: '16px 0' }}>
        <span className="ad-label">{label}</span>
        <div className="ad-box" style={{ width: '100%', padding: '18px', backgroundColor: ad.bg, border: `1.5px solid ${ad.accent}`, borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '180px', boxSizing: 'border-box' }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: ad.accent, textTransform: 'uppercase', marginBottom: '4px' }}>{ad.badge}</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>{ad.title}</div>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4 }}>{ad.desc}</div>
          </div>
          <a href={ad.url} target="_blank" rel="noopener noreferrer" className="btn btn-small" style={{ backgroundColor: ad.accent, color: '#FFFFFF', marginTop: '12px', textAlign: 'center', textDecoration: 'none', fontWeight: 600 }}>
            {ad.cta} ↗
          </a>
        </div>
      </div>
    );
  }

  // 3. Elongated Horizontal Rectangular Category-Divider Banner (Spans 100% Width)
  return (
    <div className="ad-slot-container" style={{ margin: '36px 0', width: '100%' }}>
      <span className="ad-label" style={{ fontSize: '11px', color: '#64748B', fontWeight: 600, marginBottom: '6px', display: 'block' }}>{label}</span>
      <div 
        className="ad-box" 
        style={{ 
          width: '100%', 
          backgroundColor: ad.bg, 
          border: `1.5px solid ${ad.accent}`, 
          borderRadius: '8px', 
          padding: '16px 24px', 
          display: 'flex', 
          alignItems: 'center', 
          justify: 'space-between', 
          gap: '20px', 
          boxSizing: 'border-box',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '280px' }}>
          <span style={{ backgroundColor: ad.accent, color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', shrink: 0, whiteSpace: 'nowrap' }}>
            {ad.badge}
          </span>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>{ad.title}</div>
            <div style={{ fontSize: '13px', color: '#475569', marginTop: '2px' }}>{ad.desc}</div>
          </div>
        </div>

        <a 
          href={ad.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary" 
          style={{ backgroundColor: ad.accent, borderColor: ad.accent, shrink: 0, whiteSpace: 'nowrap', textDecoration: 'none', color: '#FFFFFF', fontWeight: 600, padding: '10px 20px' }}
        >
          {ad.cta} ↗
        </a>
      </div>
    </div>
  );
}
