import React, { useState, useRef } from 'react';
import { Header } from '../components/Header';
import { FormField, ImageUploadField, HeaderColorPicker } from '../components/FormField';
import { LivePreview } from '../components/LivePreview';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import { getTemplateById } from '../templates';
import { exportToPDF } from '../engine/exportPDF';
import { exportToPNG } from '../engine/exportPNG';

export function CvEditor({ templateId }) {
  const template = getTemplateById(templateId) || getTemplateById('standard');
  const [fields, setFields] = useState(template.defaultFields);
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef(null);

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

  // Accordion open section states
  const [openSections, setOpenSections] = useState({
    contact: true,
    summary: true,
    experience: true,
    education: true,
    skills: true,
    publications: true,
    projects: true
  });

  const toggleSection = (sec) => {
    setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (index, key, val) => {
    setFields(prev => {
      const nextExp = [...(prev.experience || [])];
      nextExp[index] = { ...nextExp[index], [key]: val };
      return { ...prev, experience: nextExp };
    });
  };

  const addExperienceItem = () => {
    setFields(prev => ({
      ...prev,
      experience: [
        ...(prev.experience || []),
        { role: 'Job Title / Role', company: 'Company Name', period: '2024 — Present', details: 'Key responsibilities and achievements.' }
      ]
    }));
  };

  const removeExperienceItem = (index) => {
    setFields(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const handleEducationChange = (index, key, val) => {
    setFields(prev => {
      const nextEdu = [...(prev.education || [])];
      nextEdu[index] = { ...nextEdu[index], [key]: val };
      return { ...prev, education: nextEdu };
    });
  };

  const addEducationItem = () => {
    setFields(prev => ({
      ...prev,
      education: [
        ...(prev.education || []),
        { degree: 'Degree or Certification', institution: 'University or Organization', period: '2020 — 2024' }
      ]
    }));
  };

  const removeEducationItem = (index) => {
    setFields(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    setIsExporting(true);
    await exportToPDF(previewRef.current, `${fields.fullName || 'cv'}.pdf`, false);
    setIsExporting(false);
  };

  const handleDownloadPNG = async () => {
    if (!previewRef.current) return;
    setIsExporting(true);
    await exportToPNG(previewRef.current, `${fields.fullName || 'cv'}.png`);
    setIsExporting(false);
  };

  return (
    <div className="editor-wrapper">
      <SEO
        title={template.metaTitle || `${template.title} — Free Download | Blankform`}
        description={template.metaDescription || template.description}
        canonicalUrl={`https://blankform.com/cv/${template.slug || template.id}`}
        schemaData={schemaData}
      />
      <Header />

      <div className="editor-panes">
        {/* Left Pane - Collapsible Form Sections */}
        <div className="editor-left-pane">
          <div style={{ marginBottom: '24px' }}>
            <a href="/cv" style={{ fontSize: '13px', color: 'var(--graphite)', display: 'inline-block', marginBottom: '12px' }}>
              ← Back to CV Templates
            </a>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
              {template.title}
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--graphite)', lineHeight: 1.6, marginBottom: '16px' }}>
              {template.seoIntro || template.description}
            </p>
          </div>

          {/* Top Form Ad Unit */}
          <AdSlot format="sidebar" label="Sponsored Partner" />

          {/* Section 1: Contact & Photo & Color Picker */}
          <div className="section-accordion">
            <button className="section-accordion-header" onClick={() => toggleSection('contact')}>
              <span>1. Contact, Photo &amp; Header Color</span>
              <span>{openSections.contact ? '−' : '+'}</span>
            </button>
            {openSections.contact && (
              <div className="section-accordion-body">
                {template.styling?.hasColoredHeader && (
                  <HeaderColorPicker
                    label="Top Header / Banner Color"
                    value={fields.headerColor || template.styling.accentColor}
                    onChange={(color) => setFields(prev => ({ ...prev, headerColor: color }))}
                  />
                )}

                <ImageUploadField
                  label="Profile Picture / Photo (Optional)"
                  value={fields.photoUrl}
                  onChange={(url) => setFields(prev => ({ ...prev, photoUrl: url }))}
                />
                <FormField label="Full Name" name="fullName" value={fields.fullName} onChange={handleFieldChange} />
                <FormField label="Job Title / Professional Headline" name="jobTitle" value={fields.jobTitle} onChange={handleFieldChange} />
                <FormField label="Email Address" name="email" value={fields.email} onChange={handleFieldChange} />
                <FormField label="Phone Number" name="phone" value={fields.phone} onChange={handleFieldChange} />
                <FormField label="Location (City, Country/State)" name="location" value={fields.location} onChange={handleFieldChange} />
                <FormField label="Personal Website / Portfolio" name="website" value={fields.website} onChange={handleFieldChange} />
                <FormField label="LinkedIn / GitHub URL" name="linkedin" value={fields.linkedin} onChange={handleFieldChange} />
              </div>
            )}
          </div>

          {/* Section 2: Summary */}
          <div className="section-accordion">
            <button className="section-accordion-header" onClick={() => toggleSection('summary')}>
              <span>2. Professional Summary</span>
              <span>{openSections.summary ? '−' : '+'}</span>
            </button>
            {openSections.summary && (
              <div className="section-accordion-body">
                <FormField
                  label="Executive Summary"
                  name="summary"
                  type="textarea"
                  rows={4}
                  value={fields.summary}
                  onChange={handleFieldChange}
                />
              </div>
            )}
          </div>

          {/* Section 3: Work Experience */}
          <div className="section-accordion">
            <button className="section-accordion-header" onClick={() => toggleSection('experience')}>
              <span>3. Work Experience</span>
              <span>{openSections.experience ? '−' : '+'}</span>
            </button>
            {openSections.experience && (
              <div className="section-accordion-body">
                {fields.experience && fields.experience.map((exp, idx) => (
                  <div key={idx} style={{ borderBottom: idx < fields.experience.length - 1 ? '1px solid var(--line)' : 'none', paddingBottom: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <strong style={{ fontSize: '13px' }}>Position #{idx + 1}</strong>
                      <button type="button" onClick={() => removeExperienceItem(idx)} className="btn btn-secondary btn-small" style={{ color: 'var(--error)' }}>
                        Remove
                      </button>
                    </div>
                    <FormField label="Role / Title" value={exp.role} onChange={(e) => handleExperienceChange(idx, 'role', e.target.value)} />
                    <FormField label="Company" value={exp.company} onChange={(e) => handleExperienceChange(idx, 'company', e.target.value)} />
                    <FormField label="Period (e.g. 2022 — Present)" value={exp.period} onChange={(e) => handleExperienceChange(idx, 'period', e.target.value)} />
                    <FormField label="Responsibilities & Key Impact" type="textarea" rows={3} value={exp.details} onChange={(e) => handleExperienceChange(idx, 'details', e.target.value)} />
                  </div>
                ))}
                <button type="button" className="btn btn-secondary btn-small" onClick={addExperienceItem} style={{ width: '100%', marginTop: '8px' }}>
                  + Add Experience Position
                </button>
              </div>
            )}
          </div>

          {/* Section 4: Education */}
          <div className="section-accordion">
            <button className="section-accordion-header" onClick={() => toggleSection('education')}>
              <span>4. Education</span>
              <span>{openSections.education ? '−' : '+'}</span>
            </button>
            {openSections.education && (
              <div className="section-accordion-body">
                {fields.education && fields.education.map((edu, idx) => (
                  <div key={idx} style={{ borderBottom: idx < fields.education.length - 1 ? '1px solid var(--line)' : 'none', paddingBottom: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <strong style={{ fontSize: '13px' }}>Education #{idx + 1}</strong>
                      <button type="button" onClick={() => removeEducationItem(idx)} className="btn btn-secondary btn-small" style={{ color: 'var(--error)' }}>
                        Remove
                      </button>
                    </div>
                    <FormField label="Degree / Diploma" value={edu.degree} onChange={(e) => handleEducationChange(idx, 'degree', e.target.value)} />
                    <FormField label="University / Institution" value={edu.institution} onChange={(e) => handleEducationChange(idx, 'institution', e.target.value)} />
                    <FormField label="Period" value={edu.period} onChange={(e) => handleEducationChange(idx, 'period', e.target.value)} />
                  </div>
                ))}
                <button type="button" className="btn btn-secondary btn-small" onClick={addEducationItem} style={{ width: '100%', marginTop: '8px' }}>
                  + Add Education
                </button>
              </div>
            )}
          </div>

          {/* Section 5: Skills */}
          <div className="section-accordion">
            <button className="section-accordion-header" onClick={() => toggleSection('skills')}>
              <span>5. Skills &amp; Competencies</span>
              <span>{openSections.skills ? '−' : '+'}</span>
            </button>
            {openSections.skills && (
              <div className="section-accordion-body">
                <FormField
                  label="Comma-separated or bulleted skills"
                  name="skills"
                  type="textarea"
                  rows={3}
                  value={fields.skills}
                  onChange={handleFieldChange}
                />
              </div>
            )}
          </div>

          {/* Export Actions */}
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

          {/* Ad Placement below live preview */}
          <div style={{ width: '100%', maxWidth: '728px', marginTop: '24px' }}>
            <AdSlot format="leaderboard" label="Sponsored Content" />
          </div>
        </div>
      </div>
    </div>
  );
}
