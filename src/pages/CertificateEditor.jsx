import React, { useState, useRef } from 'react';
import { Header } from '../components/Header';
import { FormField } from '../components/FormField';
import { LivePreview } from '../components/LivePreview';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import { getTemplateById } from '../templates';
import { exportToPDF } from '../engine/exportPDF';
import { exportToPNG } from '../engine/exportPNG';

export function CertificateEditor({ templateId }) {
  const template = getTemplateById(templateId) || getTemplateById('classic-excellence');
  const [fields, setFields] = useState(template.defaultFields);
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef(null);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    setIsExporting(true);
    await exportToPDF(previewRef.current, `${fields.recipientName || 'certificate'}.pdf`, true);
    setIsExporting(false);
  };

  const handleDownloadPNG = async () => {
    if (!previewRef.current) return;
    setIsExporting(true);
    await exportToPNG(previewRef.current, `${fields.recipientName || 'certificate'}.png`);
    setIsExporting(false);
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': template.title,
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Any (Web-based)',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    }
  };

  return (
    <div className="editor-wrapper">
      <SEO
        title={template.metaTitle || `${template.title} — Free & Printable | Blankform`}
        description={template.metaDescription || template.description}
        canonicalUrl={`https://blankform.com/certificate/${template.slug || template.id}`}
        schemaData={schemaData}
      />
      <Header />

      <div className="editor-panes">
        {/* Left Pane - Form Controls */}
        <div className="editor-left-pane">
          <div style={{ marginBottom: '24px' }}>
            <a href="/certificate" style={{ fontSize: '13px', color: 'var(--graphite)', display: 'inline-block', marginBottom: '12px' }}>
              ← Back to Certificate Templates
            </a>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
              {template.title}
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--graphite)', lineHeight: 1.6, marginBottom: '16px' }}>
              {template.seoIntro || template.description}
            </p>
          </div>

          {/* Top Sidebar Ad Unit */}
          <AdSlot format="sidebar" label="Sponsored Partner" />

          <form onSubmit={(e) => e.preventDefault()}>
            <FormField
              label="Issuing Organization / Academy (Center Aligned)"
              name="issuerName"
              value={fields.issuerName}
              onChange={handleFieldChange}
            />

            <FormField
              label="Certificate Header / Award Title"
              name="certificateTitle"
              value={fields.certificateTitle}
              onChange={handleFieldChange}
            />

            <FormField
              label="Subhead / Introductory Line"
              name="subhead"
              value={fields.subhead}
              onChange={handleFieldChange}
            />

            <FormField
              label="Recipient Name"
              name="recipientName"
              value={fields.recipientName}
              onChange={handleFieldChange}
            />

            <FormField
              label="Award Description / Body Text"
              name="description"
              type="textarea"
              rows={3}
              value={fields.description}
              onChange={handleFieldChange}
            />

            <FormField
              label="Date of Issue"
              name="date"
              value={fields.date}
              onChange={handleFieldChange}
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <FormField
                label="Signatory 1 Name"
                name="signatory1Name"
                value={fields.signatory1Name}
                onChange={handleFieldChange}
              />
              <FormField
                label="Signatory 1 Title"
                name="signatory1Title"
                value={fields.signatory1Title}
                onChange={handleFieldChange}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <FormField
                label="Signatory 2 Name"
                name="signatory2Name"
                value={fields.signatory2Name}
                onChange={handleFieldChange}
              />
              <FormField
                label="Signatory 2 Title"
                name="signatory2Title"
                value={fields.signatory2Title}
                onChange={handleFieldChange}
              />
            </div>

            <FormField
              label="Certificate ID / Reference (Optional)"
              name="certificateId"
              value={fields.certificateId}
              onChange={handleFieldChange}
            />
          </form>

          {/* Action Export Buttons */}
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDownloadPDF}
                disabled={isExporting}
                style={{ flex: 1 }}
              >
                {isExporting ? 'Generating PDF...' : 'Download PDF'}
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleDownloadPNG}
                disabled={isExporting}
                style={{ flex: 1 }}
              >
                Download PNG
              </button>
            </div>

            <p className="text-small text-subtle" style={{ marginBottom: '16px' }}>
              Nothing you type here is sent to a server or saved.
            </p>

            {/* Bottom Form Ad Placement */}
            <AdSlot format="native" label="Advertisement" />
          </div>
        </div>

        {/* Right Pane - Live Preview */}
        <div className="editor-right-pane">
          <LivePreview template={template} fields={fields} previewRef={previewRef} />
          
          {/* Ad Space Below Preview */}
          <div style={{ width: '100%', maxWidth: '728px', marginTop: '24px' }}>
            <AdSlot format="leaderboard" label="Sponsored Content" />
          </div>
        </div>
      </div>
    </div>
  );
}
