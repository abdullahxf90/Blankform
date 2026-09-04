import React from 'react';
import { AdSlot } from './AdSlot';

export function AdPageWrapper({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '24px', padding: '0 16px', boxSizing: 'border-box' }}>
      {/* Left Skyscraper Ad Column */}
      <aside className="skyscraper-ad-left" style={{ width: '160px', flexShrink: 0 }}>
        <AdSlot format="skyscraper" label="Left Sponsor" />
      </aside>

      {/* Main Page Content */}
      <div style={{ flex: 1, maxWidth: '1120px', minWidth: 0 }}>
        {children}
      </div>

      {/* Right Skyscraper Ad Column */}
      <aside className="skyscraper-ad-right" style={{ width: '160px', flexShrink: 0 }}>
        <AdSlot format="skyscraper" label="Right Sponsor" />
      </aside>
    </div>
  );
}
