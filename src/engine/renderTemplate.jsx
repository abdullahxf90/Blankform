import React from 'react';

/**
 * Shared Template Renderer Component
 * Renders both Certificates and CVs dynamically with exact document styling
 */
export function DocumentRenderer({ template, fields, previewRef }) {
  if (!template) return null;

  const isCertificate = template.type === 'certificate';

  const width = isCertificate ? 960 : 794;
  const height = isCertificate ? 678 : 1123;

  const styling = template.styling || {};
  const primaryColor = styling.primaryColor || '#1C1D1F';
  const fontBody = styling.fontBody || "'IBM Plex Sans', sans-serif";

  return (
    <div
      ref={previewRef}
      className="preview-paper"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        fontFamily: fontBody,
        color: primaryColor,
        boxSizing: 'border-box',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      {isCertificate ? (
        <CertificateBody template={template} fields={fields} styling={styling} width={width} height={height} />
      ) : (
        <CvBody template={template} fields={fields} styling={styling} width={width} height={height} />
      )}
    </div>
  );
}

function CertificateBody({ template, fields, styling }) {
  const {
    issuerName = 'GLOBAL ACADEMY',
    certificateTitle = 'CERTIFICATE OF EXCELLENCE',
    subhead = 'PROUDLY PRESENTED TO',
    recipientName = 'Recipient Name',
    description = 'For outstanding achievements and mastery.',
    date = 'September 4, 2026',
    signatory1Name = 'Program Director',
    signatory1Title = 'Director of Studies',
    signatory2Name = 'Lead Instructor',
    signatory2Title = 'Head of Faculty',
    certificateId = ''
  } = fields;

  const primaryColor = styling.primaryColor || '#1C1D1F';
  const accentColor = styling.accentColor || '#1E4A3D';
  const fontHeading = styling.fontHeading || "'Playfair Display', serif";
  const fontName = styling.fontName || fontHeading;
  const fontBody = styling.fontBody || "'IBM Plex Sans', sans-serif";
  const borderStyle = styling.borderStyle || 'clean-signal';

  // Render borders
  let borderJsx = null;
  if (borderStyle === 'ornamental-gold') {
    borderJsx = (
      <div style={{ position: 'absolute', inset: '16px', border: `2px solid ${accentColor}`, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: '6px', border: `1px solid ${accentColor}` }}></div>
        <div style={{ position: 'absolute', top: '12px', left: '12px', width: '20px', height: '20px', borderTop: `3px solid ${accentColor}`, borderLeft: `3px solid ${accentColor}` }} />
        <div style={{ position: 'absolute', top: '12px', right: '12px', width: '20px', height: '20px', borderTop: `3px solid ${accentColor}`, borderRight: `3px solid ${accentColor}` }} />
        <div style={{ position: 'absolute', bottom: '12px', left: '12px', width: '20px', height: '20px', borderBottom: `3px solid ${accentColor}`, borderLeft: `3px solid ${accentColor}` }} />
        <div style={{ position: 'absolute', bottom: '12px', right: '12px', width: '20px', height: '20px', borderBottom: `3px solid ${accentColor}`, borderRight: `3px solid ${accentColor}` }} />
      </div>
    );
  } else if (borderStyle === 'clean-signal') {
    borderJsx = (
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ height: '14px', backgroundColor: accentColor }} />
        <div style={{ position: 'absolute', inset: '24px', border: '1px solid #DEDCD6' }} />
      </div>
    );
  } else if (borderStyle === 'double-academic') {
    borderJsx = (
      <div style={{ position: 'absolute', inset: '20px', border: `3px double ${primaryColor}`, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: '8px', border: `1px solid ${primaryColor}` }} />
      </div>
    );
  } else if (borderStyle === 'corner-frame') {
    borderJsx = (
      <div style={{ position: 'absolute', inset: '32px', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: `2px solid ${primaryColor}`, borderLeft: `2px solid ${primaryColor}` }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderTop: `2px solid ${primaryColor}`, borderRight: `2px solid ${primaryColor}` }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '40px', borderBottom: `2px solid ${primaryColor}`, borderLeft: `2px solid ${primaryColor}` }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: `2px solid ${primaryColor}`, borderRight: `2px solid ${primaryColor}` }} />
      </div>
    );
  } else if (borderStyle === 'royal-crest') {
    borderJsx = (
      <div style={{ position: 'absolute', inset: '18px', border: `4px solid ${accentColor}`, padding: '4px', pointerEvents: 'none' }}>
        <div style={{ border: `1px dashed ${accentColor}`, height: '100%' }} />
      </div>
    );
  } else if (borderStyle === 'bold-top-bar') {
    borderJsx = (
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ height: '24px', backgroundColor: primaryColor }} />
        <div style={{ height: '4px', backgroundColor: accentColor }} />
        <div style={{ position: 'absolute', inset: '32px', border: '1px solid #DEDCD6' }} />
      </div>
    );
  } else if (borderStyle === 'geometric-art-deco') {
    borderJsx = (
      <div style={{ position: 'absolute', inset: '20px', border: `1px solid ${primaryColor}`, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', bottom: '10px', border: `1px solid ${accentColor}` }} />
      </div>
    );
  } else {
    borderJsx = (
      <div style={{ position: 'absolute', inset: '24px', border: `1px solid ${accentColor}`, pointerEvents: 'none' }} />
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', padding: '54px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      {borderJsx}

      {/* Header */}
      <div style={{ textAlign: 'center', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ fontFamily: fontBody, fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5B5D63', marginBottom: '8px', textAlign: 'center', width: '100%', display: 'block', margin: '0 auto 8px auto' }}>
          {issuerName}
        </p>
        <h1 style={{ fontFamily: fontHeading, fontSize: '32px', fontWeight: 600, color: primaryColor, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px', textAlign: 'center', width: '100%', display: 'block', margin: '0 auto 16px auto' }}>
          {certificateTitle}
        </h1>
        <div style={{ width: '70px', height: '2px', backgroundColor: accentColor, margin: '0 auto 16px auto' }} />
        <p style={{ fontFamily: fontBody, fontSize: '13px', fontStyle: 'italic', color: '#5B5D63', textAlign: 'center', width: '100%', display: 'block', margin: '0 auto' }}>
          {subhead}
        </p>
      </div>

      {/* Recipient Body */}
      <div style={{ textAlign: 'center', zIndex: 1, margin: '16px 0' }}>
        <h2 style={{ fontFamily: fontName, fontSize: fontName.includes('Cursive') || fontName.includes('Alex') ? '54px' : '38px', fontWeight: 500, color: primaryColor, margin: '12px 0 20px 0', borderBottom: `1px solid ${accentColor}`, display: 'inline-block', paddingBottom: '8px', paddingLeft: '24px', paddingRight: '24px' }}>
          {recipientName}
        </h2>
        <p style={{ fontFamily: fontBody, fontSize: '15px', lineHeight: 1.65, color: '#1C1D1F', maxWidth: '640px', margin: '0 auto' }}>
          {description}
        </p>
      </div>

      {/* Footer / Signatures */}
      <div style={{ zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px' }}>
          {/* Signatory 1 */}
          <div style={{ textAlign: 'center', width: '200px' }}>
            <div style={{ borderBottom: '1px solid #1C1D1F', paddingBottom: '4px', marginBottom: '6px' }}>
              <span style={{ fontFamily: "'Alex Brush', cursive", fontSize: '24px', color: primaryColor }}>{signatory1Name}</span>
            </div>
            <p style={{ fontSize: '13px', fontWeight: 500, color: '#1C1D1F', margin: 0 }}>{signatory1Name}</p>
            <p style={{ fontSize: '11px', color: '#5B5D63', margin: 0 }}>{signatory1Title}</p>
          </div>

          {/* Date & ID */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#5B5D63', margin: '0 0 4px 0' }}>Date of Issue</p>
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#1C1D1F', margin: 0 }}>{date}</p>
            {certificateId && (
              <p style={{ fontSize: '10px', color: '#5B5D63', marginTop: '8px', letterSpacing: '0.05em' }}>ID: {certificateId}</p>
            )}
          </div>

          {/* Signatory 2 */}
          <div style={{ textAlign: 'center', width: '200px' }}>
            <div style={{ borderBottom: '1px solid #1C1D1F', paddingBottom: '4px', marginBottom: '6px' }}>
              <span style={{ fontFamily: "'Alex Brush', cursive", fontSize: '24px', color: primaryColor }}>{signatory2Name}</span>
            </div>
            <p style={{ fontSize: '13px', fontWeight: 500, color: '#1C1D1F', margin: 0 }}>{signatory2Name}</p>
            <p style={{ fontSize: '11px', color: '#5B5D63', margin: 0 }}>{signatory2Title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CvBody({ template, fields, styling }) {
  const layout = styling.layout || 'single-column';
  const primaryColor = styling.primaryColor || '#1C1D1F';

  // Dynamic user-selected header color (falls back to template accent color)
  const headerColor = fields.headerColor || styling.accentColor || '#1E4A3D';

  const fontHeading = styling.fontHeading || "'Source Serif 4', serif";
  const fontBody = styling.fontBody || "'IBM Plex Sans', sans-serif";

  const {
    fullName = 'John Doe',
    jobTitle = 'Professional Title',
    email = '',
    phone = '',
    location = '',
    website = '',
    linkedin = '',
    photoUrl = '',
    summary = '',
    experience = [],
    education = [],
    skills = '',
    publications = ''
  } = fields;

  const renderPhoto = (size = 84, shape = 'circle') => {
    if (!photoUrl) return null;
    return (
      <img
        src={photoUrl}
        alt={fullName}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: shape === 'circle' ? '50%' : '4px',
          objectFit: 'cover',
          border: `2px solid #FFFFFF`,
          boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
        }}
      />
    );
  };

  if (layout === 'two-column') {
    return (
      <div style={{ display: 'flex', width: '100%', height: '1123px', boxSizing: 'border-box' }}>
        {/* Left Sidebar - Stretches full 100% height of 1123px page */}
        <div style={{ width: '34%', height: '1123px', backgroundColor: styling.sidebarBg || '#F0EFEA', borderTop: `8px solid ${headerColor}`, padding: '36px 24px', borderRight: '1px solid #DEDCD6', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            {photoUrl && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                {renderPhoto(96, 'circle')}
              </div>
            )}

            <h1 style={{ fontFamily: fontHeading, fontSize: '22px', fontWeight: 600, color: primaryColor, margin: '0 0 4px 0', lineHeight: 1.2 }}>
              {fullName}
            </h1>
            <p style={{ fontSize: '13px', color: headerColor, fontWeight: 600, margin: '0 0 24px 0' }}>
              {jobTitle}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#5B5D63', borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '12px' }}>Contact</h4>
              <div style={{ fontSize: '12px', lineHeight: 1.6, color: '#1C1D1F' }}>
                {email && <div>{email}</div>}
                {phone && <div>{phone}</div>}
                {location && <div>{location}</div>}
                {website && <div>{website}</div>}
                {linkedin && <div>{linkedin}</div>}
              </div>
            </div>

            {skills && (
              <div>
                <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#5B5D63', borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '12px' }}>Skills &amp; Expertise</h4>
                <p style={{ fontSize: '12px', lineHeight: 1.6, color: '#1C1D1F', whiteSpace: 'pre-line' }}>
                  {skills}
                </p>
              </div>
            )}
          </div>

          <div style={{ fontSize: '10px', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>
            {fullName} — CV
          </div>
        </div>

        {/* Right Main Content */}
        <div style={{ width: '66%', height: '1123px', padding: '40px 36px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            {summary && (
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: `2px solid ${headerColor}`, paddingBottom: '4px', marginBottom: '8px' }}>Profile</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#1C1D1F' }}>{summary}</p>
              </div>
            )}

            {experience && experience.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: `2px solid ${headerColor}`, paddingBottom: '4px', marginBottom: '12px' }}>Experience</h3>
                {experience.map((exp, idx) => (
                  <div key={idx} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <strong style={{ fontSize: '14px', color: '#1C1D1F' }}>{exp.role}</strong>
                      <span style={{ fontSize: '12px', color: '#5B5D63' }}>{exp.period}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: headerColor, fontStyle: 'italic', marginBottom: '4px' }}>{exp.company}</div>
                    <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#1C1D1F' }}>{exp.details}</p>
                  </div>
                ))}
              </div>
            )}

            {education && education.length > 0 && (
              <div>
                <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: `2px solid ${headerColor}`, paddingBottom: '4px', marginBottom: '12px' }}>Education</h3>
                {education.map((edu, idx) => (
                  <div key={idx} style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <strong style={{ fontSize: '14px', color: '#1C1D1F' }}>{edu.degree}</strong>
                      <span style={{ fontSize: '12px', color: '#5B5D63' }}>{edu.period}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#5B5D63' }}>{edu.institution}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'photo-header-band') {
    return (
      <div style={{ width: '100%', height: '1123px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        {/* Full-width Dynamic Colored Top Header Band */}
        <div style={{ backgroundColor: headerColor, color: '#FFFFFF', padding: '36px 48px', display: 'flex', alignItems: 'center', gap: '24px', transition: 'background-color 0.2s ease' }}>
          {renderPhoto(90, 'circle')}
          <div>
            <h1 style={{ fontFamily: fontHeading, fontSize: '28px', fontWeight: 600, color: '#FFFFFF', margin: '0 0 4px 0' }}>
              {fullName}
            </h1>
            <p style={{ fontSize: '15px', opacity: 0.92, fontWeight: 500, margin: '0 0 12px 0' }}>
              {jobTitle}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '12px', opacity: 0.88 }}>
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {website && <span>• {website}</span>}
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div style={{ flex: 1, padding: '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
          <div>
            {summary && (
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '8px' }}>
                  Summary
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#1C1D1F' }}>{summary}</p>
              </div>
            )}

            {experience && experience.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '12px' }}>
                  Experience
                </h3>
                {experience.map((exp, idx) => (
                  <div key={idx} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <strong style={{ fontSize: '14px', color: '#1C1D1F' }}>{exp.role}</strong>
                      <span style={{ fontSize: '12px', color: '#5B5D63' }}>{exp.period}</span>
                    </div>
                    <div style={{ fontSize: '13px', color: headerColor, fontWeight: 500, marginBottom: '4px' }}>{exp.company}</div>
                    <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#1C1D1F' }}>{exp.details}</p>
                  </div>
                ))}
              </div>
            )}

            {education && education.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '12px' }}>
                  Education
                </h3>
                {education.map((edu, idx) => (
                  <div key={idx} style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <strong style={{ fontSize: '14px', color: '#1C1D1F' }}>{edu.degree}</strong>
                      <span style={{ fontSize: '12px', color: '#5B5D63' }}>{edu.period}</span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#5B5D63' }}>{edu.institution}</div>
                  </div>
                ))}
              </div>
            )}

            {skills && (
              <div>
                <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '8px' }}>
                  Skills
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#1C1D1F' }}>{skills}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Single Column layout
  return (
    <div style={{ padding: '50px 60px', width: '100%', height: '1123px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `2px solid ${headerColor}`, paddingBottom: '16px', marginBottom: '24px' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontFamily: fontHeading, fontSize: '30px', fontWeight: 600, color: primaryColor, margin: '0 0 4px 0' }}>
              {fullName}
            </h1>
            <p style={{ fontSize: '15px', color: headerColor, fontWeight: 500, margin: '0 0 12px 0' }}>
              {jobTitle}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '12px', color: '#5B5D63' }}>
              {email && <span>{email}</span>}
              {phone && <span>• {phone}</span>}
              {location && <span>• {location}</span>}
              {website && <span>• {website}</span>}
              {linkedin && <span>• {linkedin}</span>}
            </div>
          </div>

          {photoUrl && (
            <div style={{ marginLeft: '24px' }}>
              {renderPhoto(84, 'square-rounded')}
            </div>
          )}
        </div>

        {/* Summary */}
        {summary && (
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '8px' }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#1C1D1F' }}>{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '12px' }}>
              Experience
            </h3>
            {experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <strong style={{ fontSize: '14px', color: '#1C1D1F' }}>{exp.role}</strong>
                  <span style={{ fontSize: '12px', color: '#5B5D63' }}>{exp.period}</span>
                </div>
                <div style={{ fontSize: '13px', color: headerColor, fontWeight: 500, marginBottom: '4px' }}>{exp.company}</div>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#1C1D1F' }}>{exp.details}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '12px' }}>
              Education
            </h3>
            {education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <strong style={{ fontSize: '14px', color: '#1C1D1F' }}>{edu.degree}</strong>
                  <span style={{ fontSize: '12px', color: '#5B5D63' }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '13px', color: '#5B5D63' }}>{edu.institution}</div>
              </div>
            ))}
          </div>
        )}

        {publications && (
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '8px' }}>
              Publications
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#1C1D1F' }}>{publications}</p>
          </div>
        )}

        {skills && (
          <div>
            <h3 style={{ fontFamily: fontHeading, fontSize: '16px', fontWeight: 600, color: primaryColor, borderBottom: '1px solid #DEDCD6', paddingBottom: '4px', marginBottom: '8px' }}>
              Skills &amp; Competencies
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#1C1D1F' }}>{skills}</p>
          </div>
        )}
      </div>
    </div>
  );
}
