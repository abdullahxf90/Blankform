import React, { useState, useEffect } from 'react';
import { DocumentRenderer } from '../engine/renderTemplate';

export function LivePreview({ template, fields, previewRef }) {
  const [debouncedFields, setDebouncedFields] = useState(fields);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFields(fields);
    }, 150);

    return () => clearTimeout(handler);
  }, [fields]);

  const isLandscape = template?.orientation === 'landscape' || template?.type === 'certificate';

  return (
    <div className="preview-container">
      <div 
        style={{
          transform: isLandscape ? 'scale(0.72)' : 'scale(0.72)',
          transformOrigin: 'top center',
          transition: 'transform 0.2s ease',
          marginBottom: isLandscape ? '-160px' : '-280px'
        }}
      >
        <DocumentRenderer template={template} fields={debouncedFields} previewRef={previewRef} />
      </div>
    </div>
  );
}
