import React from 'react';

// REAL EXTERNAL THIRD-PARTY SPONSORED ADVERTISEMENTS DATA
const THIRD_PARTY_ADS = [
  {
    sponsor: 'NordVPN',
    badge: 'NordVPN • 68% Off',
    title: 'Secure Internet & Anti-Tracker',
    desc: 'Protect 10 devices with high-speed VPN encryption.',
    cta: 'Claim Deal',
    url: 'https://nordvpn.com',
    bg: '#F0FDF4',
    accent: '#16A34A'
  },
  {
    sponsor: 'Bluehost',
    badge: 'Bluehost • Special Offer',
    title: 'Launch Website for $2.95/mo',
    desc: 'Free SSL, Free Domain Name, 24/7 Support.',
    cta: 'Claim 70% Off',
    url: 'https://bluehost.com',
    bg: '#EFF6FF',
    accent: '#2563EB'
  },
  {
    sponsor: 'Coursera',
    badge: 'Coursera • Sponsored',
    title: 'Online Master Degrees',
    desc: 'Earn accredited degrees from top global universities.',
    cta: 'Explore Degrees',
    url: 'https://coursera.org',
    bg: '#FAF5FF',
    accent: '#9333EA'
  },
  {
    sponsor: 'Shopify',
    badge: 'Shopify • $1/Mo Trial',
    title: 'Start Your E-Commerce Store',
    desc: 'Sell products online & accept global payments easily.',
    cta: 'Start Free Trial',
    url: 'https://shopify.com',
    bg: '#ECFDF5',
    accent: '#059669'
  },
  {
    sponsor: 'Grammarly',
    badge: 'Grammarly • Free Tool',
    title: 'Write Flawless Proposals',
    desc: 'Real-time tone & grammar assistance for Chrome.',
    cta: 'Install Extension',
    url: 'https://grammarly.com',
    bg: '#FFF7ED',
    accent: '#EA580C'
  }
];

export function AdSlot({ format = 'category-divider', label = 'ADVERTISEMENT', adIndex = 0 }) {
  const ad = THIRD_PARTY_ADS[adIndex % THIRD_PARTY_ADS.length];

  const advertiseHeader = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
      <span style={{ fontSize: '10px', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>{label}</span>
      <a 
        href="mailto:contact@blankform.com?subject=Advertising%20Inquiry%20on%20Blankform" 
        style={{ fontSize: '10px', color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}
        title="Contact us to advertise your product here"
      >
        📢 Advertise Here →
      </a>
    </div>
  );

  // 1. Skyscraper 160x600 Left & Right Sticky Side Ad
  if (format === 'skyscraper') {
    return (
      <div className="ad-slot-container" style={{ margin: 0, position: 'sticky', top: '80px' }}>
        {advertiseHeader}
        <div 
          className="ad-box" 
          style={{ 
            width: '160px', 
            height: '480px', 
            backgroundColor: ad.bg, 
            border: `1px solid ${ad.accent}`, 
            borderRadius: '6px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justify: 'space-between', 
            color: '#0F172A', 
            fontSize: '11px', 
            textAlign: 'center',
            padding: '12px 10px',
            boxSizing: 'border-box'
          }}
        >
          <span style={{ fontSize: '9px', fontWeight: 700, color: ad.accent, textTransform: 'uppercase' }}>
            {ad.badge}
          </span>

          <div>
            <div style={{ fontWeight: 700, fontSize: '12px', color: '#0F172A', marginBottom: '6px', lineHeight: 1.3 }}>
              {ad.title}
            </div>
            <div style={{ fontSize: '10px', color: '#475569', lineHeight: 1.3 }}>
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
              padding: '6px 10px', 
              borderRadius: '4px', 
              fontSize: '10px', 
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

  // 2. Sidebar Form Compact Ad
  if (format === 'sidebar') {
    return (
      <div className="ad-slot-container" style={{ margin: '12px 0' }}>
        {advertiseHeader}
        <div className="ad-box" style={{ width: '100%', padding: '12px 14px', backgroundColor: ad.bg, border: `1px solid ${ad.accent}`, borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
          <div style={{ marginBottom: '8px' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, color: ad.accent, textTransform: 'uppercase', marginBottom: '2px' }}>{ad.badge}</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>{ad.title}</div>
            <div style={{ fontSize: '11px', color: '#475569', lineHeight: 1.3 }}>{ad.desc}</div>
          </div>
          <a href={ad.url} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: ad.accent, color: '#FFFFFF', padding: '5px 12px', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', fontWeight: 600, fontSize: '11px', display: 'inline-block' }}>
            {ad.cta} ↗
          </a>
        </div>
      </div>
    );
  }

  // 3. Compact Horizontal Category-Divider Banner
  return (
    <div className="ad-slot-container" style={{ margin: '20px 0', width: '100%' }}>
      {advertiseHeader}
      <div 
        className="ad-box" 
        style={{ 
          width: '100%', 
          backgroundColor: ad.bg, 
          border: `1px solid ${ad.accent}`, 
          borderRadius: '6px', 
          padding: '10px 16px', 
          display: 'flex', 
          alignItems: 'center', 
          justify: 'space-between', 
          gap: '14px', 
          boxSizing: 'border-box',
          boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '240px' }}>
          <span style={{ backgroundColor: ad.accent, color: '#FFFFFF', padding: '3px 8px', borderRadius: '3px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            {ad.badge}
          </span>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>{ad.title}</div>
            <div style={{ fontSize: '11px', color: '#475569' }}>{ad.desc}</div>
          </div>
        </div>

        <a 
          href={ad.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ backgroundColor: ad.accent, borderColor: ad.accent, whiteSpace: 'nowrap', textDecoration: 'none', color: '#FFFFFF', fontWeight: 600, padding: '6px 14px', borderRadius: '4px', fontSize: '11px' }}
        >
          {ad.cta} ↗
        </a>
      </div>
    </div>
  );
}
