import React from 'react';
import { DocumentRenderer } from '../engine/renderTemplate';

export function TemplateCard({ template, linkPrefix = '' }) {
  const isLandscape = template.orientation === 'landscape' || template.type === 'certificate';
  const prefix = linkPrefix || (template.type === 'certificate' ? '/certificate' : '/cv');
  const targetUrl = `${prefix}/${template.slug || template.id}`;

  return (
    <a href={targetUrl} className="template-card" title={`Edit ${template.title}`}>
      <div 
        className="template-card-preview"
        style={{
          height: isLandscape ? '180px' : '280px',
          overflow: 'hidden'
        }}
      >
        <div style={{
          transform: isLandscape ? 'scale(0.24)' : 'scale(0.23)',
          transformOrigin: 'center center',
          pointerEvents: 'none',
          userSelect: 'none'
        }}>
          <DocumentRenderer template={template} fields={template.defaultFields} />
        </div>
      </div>
      <div className="template-card-body">
        <div className="template-card-title">{template.title}</div>
        <div className="template-card-desc">{template.description}</div>
      </div>
    </a>
  );
}
