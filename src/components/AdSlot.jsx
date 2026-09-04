import React from 'react';

export function AdSlot({ format = 'category-divider', label = 'ADVERTISEMENT SPACE', adIndex = 0 }) {
  const contactLink = "mailto:contact@blankform.com?subject=Advertising%20Inquiry%20on%20Blankform";

  // 1. Skyscraper 160x600 Left & Right Sticky Side Ad Space
  if (format === 'skyscraper') {
    return (
      <div className="ad-slot-container" style={{ margin: 0, position: 'sticky', top: '80px' }}>
        <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 700, marginBottom: '4px', textAlign: 'center' }}>
          {label} (160 × 600)
        </div>
        <div 
          className="ad-box" 
          style={{ 
            width: '160px', 
            height: '480px', 
            backgroundColor: '#F8FAFC', 
            border: '2px dashed #94A3B8', 
            borderRadius: '6px', 
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
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', backgroundColor: '#EFF6FF', padding: '2px 8px', borderRadius: '4px' }}>
            Available Space
          </span>

          <div>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#0F172A', marginBottom: '6px' }}>
              160 × 600 Skyscraper
            </div>
            <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.4 }}>
              Promote your product or brand to thousands of daily users.
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
              fontWeight: 600,
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
      <div className="ad-slot-container" style={{ margin: '14px 0' }}>
        <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 700, marginBottom: '4px' }}>
          {label} (300 × 250)
        </div>
        <div 
          className="ad-box" 
          style={{ 
            width: '100%', 
            padding: '14px 16px', 
            backgroundColor: '#F8FAFC', 
            border: '2px dashed #94A3B8', 
            borderRadius: '6px', 
            display: 'flex', 
            flexDirection: 'column', 
            justify: 'space-between', 
            boxSizing: 'border-box' 
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', marginBottom: '4px' }}>
              Reserve This Spot
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>
              300 × 250 Sidebar Banner Space
            </div>
            <div style={{ fontSize: '11px', color: '#64748B' }}>
              Target active document creators with high-visibility placement.
            </div>
          </div>
          <a 
            href={contactLink} 
            style={{ 
              backgroundColor: '#2563EB', 
              color: '#FFFFFF', 
              padding: '6px 14px', 
              borderRadius: '4px', 
              textAlign: 'center', 
              textDecoration: 'none', 
              fontWeight: 600, 
              fontSize: '11px', 
              display: 'inline-block' 
            }}
          >
            Advertise Here ✉️
          </a>
        </div>
      </div>
    );
  }

  // 3. Compact Horizontal Category-Divider Banner Space (728x90 / 970x90 Equivalent)
  return (
    <div className="ad-slot-container" style={{ margin: '20px 0', width: '100%' }}>
      <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 700, marginBottom: '4px' }}>
        {label} (728 × 90 LEADERBOARD SPACE)
      </div>
      <div 
        className="ad-box" 
        style={{ 
          width: '100%', 
          backgroundColor: '#F8FAFC', 
          border: '2px dashed #94A3B8', 
          borderRadius: '6px', 
          padding: '12px 18px', 
          display: 'flex', 
          alignItems: 'center', 
          justify: 'space-between', 
          gap: '16px', 
          boxSizing: 'border-box',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '240px' }}>
          <span style={{ backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '4px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Available Ad Space
          </span>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>
              728 × 90 Horizontal Banner Location
            </div>
            <div style={{ fontSize: '11px', color: '#64748B' }}>
              Reach thousands of students, teachers, and professionals creating documents daily.
            </div>
          </div>
        </div>

        <a 
          href={contactLink} 
          style={{ 
            backgroundColor: '#2563EB', 
            color: '#FFFFFF', 
            whiteSpace: 'nowrap', 
            textDecoration: 'none', 
            fontWeight: 600, 
            padding: '7px 16px', 
            borderRadius: '4px', 
            fontSize: '11px' 
          }}
        >
          Sponsor This Banner ✉️
        </a>
      </div>
    </div>
  );
}
