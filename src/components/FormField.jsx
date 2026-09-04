import React from 'react';

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  rows = 3
}) {
  return (
    <div className="form-group">
      {label && <label className="form-label" htmlFor={name}>{label}</label>}
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className="form-textarea"
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export function HeaderColorPicker({ label = 'Header & Top Accent Color', value, onChange }) {
  const PRESET_COLORS = [
    { name: 'Signal Green', hex: '#1E4A3D' },
    { name: 'Royal Navy', hex: '#0F2C59' },
    { name: 'Deep Charcoal', hex: '#1C1D1F' },
    { name: 'Wine Burgundy', hex: '#6B1D2F' },
    { name: 'Warm Amber', hex: '#B45309' },
    { name: 'Emerald', hex: '#064E3B' },
    { name: 'Deep Ochre', hex: '#9A3412' },
    { name: 'Indigo', hex: '#1E1B4B' },
    { name: 'Crimson', hex: '#881337' },
    { name: 'Teal', hex: '#0F766E' }
  ];

  return (
    <div className="form-group" style={{ marginBottom: '20px', padding: '12px', backgroundColor: 'var(--paper-alt)', borderRadius: 'var(--border-radius)', border: '1px solid var(--line)' }}>
      <label className="form-label" style={{ fontWeight: 600, color: 'var(--ink)' }}>{label}</label>
      <p style={{ fontSize: '12px', color: 'var(--graphite)', marginBottom: '10px' }}>
        Select a custom top color for this template:
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
        {PRESET_COLORS.map(c => (
          <button
            key={c.hex}
            type="button"
            title={c.name}
            onClick={() => onChange(c.hex)}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: c.hex,
              border: (value || '#1E4A3D').toLowerCase() === c.hex.toLowerCase() ? '2px solid var(--ink)' : '1px solid rgba(0,0,0,0.15)',
              cursor: 'pointer',
              boxShadow: (value || '#1E4A3D').toLowerCase() === c.hex.toLowerCase() ? '0 0 0 2px #FFFFFF' : 'none'
            }}
          />
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="color"
          value={value || '#1E4A3D'}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: '36px', height: '36px', border: 'none', background: 'none', cursor: 'pointer' }}
        />
        <input
          type="text"
          className="form-input"
          placeholder="#1E4A3D"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: '120px', fontSize: '13px' }}
        />
      </div>
    </div>
  );
}

export function ImageUploadField({ label, value, onChange }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        onChange(uploadEvent.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const sampleAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  ];

  return (
    <div className="form-group" style={{ marginBottom: '20px' }}>
      <label className="form-label">{label || 'Profile Picture / Photo'}</label>
      
      {value && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
          <img
            src={value}
            alt="Profile preview"
            style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--line)' }}
          />
          <button
            type="button"
            className="btn btn-secondary btn-small"
            onClick={() => onChange('')}
          >
            Remove Photo
          </button>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ fontSize: '13px', color: 'var(--graphite)' }}
        />
        <span style={{ fontSize: '11px', color: 'var(--graphite)' }}>Or enter Image URL:</span>
        <input
          type="text"
          className="form-input"
          placeholder="https://example.com/photo.jpg"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '11px', color: 'var(--graphite)', display: 'block', marginBottom: '6px' }}>Or choose sample photo:</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {sampleAvatars.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Preset ${i}`}
              onClick={() => onChange(url)}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
                border: value === url ? '2px solid var(--signal)' : '1px solid var(--line)'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
