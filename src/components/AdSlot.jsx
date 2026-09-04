import React from 'react';

export function AdSlot({ format = 'category-divider', label = 'ADVERTISEMENT SPACE', adIndex = 0 }) {
  const contactLink = "mailto:contact@blankform.com?subject=Advertising%20Inquiry%20on%20Blankform";

  // 1. Skyscraper 160x600 Left & Right Sticky Side Ad Space
  if (format === 'skyscraper') {
    return (
      <div className="ad-slot-container" style={{ margin: 0, position: 'sticky', top: '80px', width: '160px' }}>
        <div style={{ fontSize: '10px', color: '#1E293B', fontWeight: 700, marginBottom: '6px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {label} (160 × 600)
        </div>
        <div 
          className="ad-box" 
          style={{ 
            width: '160px', 
            height: '480px', 
            backgroundColor: '#EFF6FF', 
            border: '2px dashed #2563EB', 
            borderRadius: '8px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justify: 'space-between', 
            color: '#0F172A', 
            fontSize: '11px', 
            textAlign: 'center',
            padding: '16px 12px',
            boxSizing: 'border-box'
          }}
        >
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#FFFFFF', backgroundColor: '#2563EB', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
            AVAILABLE AD SPACE
          </span>

          <div>
            <div style={{ fontWeight: 800, fontSize: '14px', color: '#1E293B', marginBottom: '6px' }}>
              160 × 600 Skyscraper
            </div>
            <div style={{ fontSize: '11px', color: '#475569', lineHeight: 1.4 }}>
              Promote your product or brand to active daily users.
            </div>
          </div>

          <a 
            href={contactLink}
            style={{ 
              backgroundColor: '#2563EB', 
              color: '#FFFFFF', 
              padding: '8px 10px', 
              borderRadius: '4px', 
              fontSize: '11px', 
              fontWeight: 700,
              textDecoration: 'none',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            Sponsor Space ✉️
          </a>
        </div>
      </div>
    );
  }

  // 2. Sidebar Form Compact 300x250 Ad Space
  if (format === 'sidebar') {
    return (
      <div className="ad-slot-container" style={{ margin: '20px 0', width: '100%' }}>
        <div style={{ fontSize: '10px', color: '#1E293B', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {label} (300 × 250)
        </div>
        <div 
          className="ad-box" 
          style={{ 
            width: '100%', 
            padding: '16px 20px', 
            backgroundColor: '#EFF6FF', 
            border: '2px dashed #2563EB', 
            borderRadius: '8px', 
            display: 'flex', 
            flexDirection: 'column', 
            justify: 'space-between', 
            boxSizing: 'border-box' 
          }}
        >
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#FFFFFF', backgroundColor: '#2563EB', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '6px' }}>
              Reserve This Spot
            </span>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#1E293B', marginBottom: '4px' }}>
              300 × 250 Sidebar Banner Space
            </div>
            <div style={{ fontSize: '12px', color: '#475569' }}>
              Target active document creators with high-visibility placement.
            </div>
          </div>
          <a 
            href={contactLink} 
            style={{ 
              backgroundColor: '#2563EB', 
              color: '#FFFFFF', 
              padding: '8px 16px', 
              borderRadius: '4px', 
              textAlign: 'center', 
              textDecoration: 'none', 
              fontWeight: 700, 
              fontSize: '12px', 
              display: 'inline-block' 
            }}
          >
            Advertise Here ✉️
          </a>
        </div>
      </div>
    );
  }

  // 3. Ultra-Visible Horizontal Category-Divider Banner Space (728x90 LEADERBOARD SPACE)
  return (
    <div className="ad-slot-container" style={{ margin: '36px 0', width: '100%', clear: 'both' }}>
      <div style={{ fontSize: '11px', color: '#1E293B', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        📢 {label} (728 × 90 LEADERBOARD AD SPACE)
      </div>
      <div 
        className="ad-box" 
        style={{ 
          width: '100%', 
          backgroundColor: '#FEF3C7', 
          border: '2px dashed #D97706', 
          borderRadius: '8px', 
          padding: '16px 24px', 
          display: 'flex', 
          alignItems: 'center', 
          justify: 'space-between', 
          gap: '20px', 
          boxSizing: 'border-box',
          flexWrap: 'wrap',
          boxShadow: '0 2px 10px rgba(217, 119, 6, 0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: '260px' }}>
          <span style={{ backgroundColor: '#D97706', color: '#FFFFFF', padding: '5px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            AVAILABLE AD SPACE
          </span>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#78350F' }}>
              728 × 90 Horizontal Banner Location
            </div>
            <div style={{ fontSize: '12px', color: '#92400E', marginTop: '2px' }}>
              High-visibility placement between catalogue categories. Reserve this spot for your brand.
            </div>
          </div>
        </div>

        <a 
          href={contactLink} 
          style={{ 
            backgroundColor: '#D97706', 
            color: '#FFFFFF', 
            whiteSpace: 'nowrap', 
            textDecoration: 'none', 
            fontWeight: 800, 
            padding: '10px 20px', 
            borderRadius: '6px', 
            fontSize: '13px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          Sponsor This Banner ✉️
        </a>
      </div>
    </div>
  );
}
