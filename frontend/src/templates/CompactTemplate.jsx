import React from 'react';

const CompactTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
    themeColor = '#1e293b',
  } = data;

  return (
    <div
      className="compact-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#1e293b',
        fontFamily: "'Inter', sans-serif",
        fontSize: '8.5pt',
        lineHeight: 1.35,
        padding: '1.75rem 2rem',
        minHeight: '1123px',
      }}
    >
      {/* Compact Header */}
      <header
        style={{
          borderBottom: `2px solid ${themeColor}`,
          paddingBottom: '0.5rem',
          marginBottom: '0.85rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <span style={{ fontSize: '18pt', fontWeight: 900, color: '#0f172a', marginRight: '0.75rem' }}>
            {personalInfo.fullName || 'Candidate Name'}
          </span>
          {personalInfo.title && (
            <span style={{ fontSize: '10.5pt', fontWeight: 600, color: themeColor }}>
              | {personalInfo.title}
            </span>
          )}
        </div>
        <div style={{ fontSize: '8pt', color: '#64748b', display: 'flex', gap: '0.6rem' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
          {personalInfo.linkedin && <span>• LinkedIn</span>}
          {personalInfo.github && <span>• GitHub</span>}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: '0.75rem', fontSize: '8.5pt', color: '#334155' }}>
          {personalInfo.summary}
        </div>
      )}

      {/* Technical Skills - Compact Bar */}
      {skills.length > 0 && (
        <section style={{ marginBottom: '0.85rem' }}>
          <div style={{ fontSize: '9pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', marginBottom: '4px' }}>
            Skills & Competencies
          </div>
          <div style={{ fontSize: '8.5pt', color: '#1e293b' }}>
            {skills.map((s) => (typeof s === 'string' ? s : s.name)).join(' • ')}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '0.85rem' }}>
          <div style={{ fontSize: '9pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', marginBottom: '6px' }}>
            Professional Experience
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 800, fontSize: '9pt', color: '#0f172a' }}>
                    {exp.position || exp.role} <span style={{ fontWeight: 500, color: '#475569' }}>— {exp.company}{exp.location ? `, ${exp.location}` : ''}</span>
                  </span>
                  <span style={{ fontSize: '8pt', color: '#64748b' }}>
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                {exp.description && (
                  <p style={{ margin: '2px 0 0', color: '#475569', fontSize: '8.5pt', lineHeight: 1.35, whiteSpace: 'pre-line' }}>
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '0.85rem' }}>
          <div style={{ fontSize: '9pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', marginBottom: '6px' }}>
            Selected Projects
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 700, fontSize: '9pt', color: '#0f172a' }}>
                    {proj.title || proj.name}
                    {proj.technologies && <span style={{ fontWeight: 500, color: '#64748b', fontSize: '8pt' }}> [{proj.technologies}]</span>}
                  </span>
                  {proj.link && <span style={{ fontSize: '8pt', color: themeColor }}>{proj.link}</span>}
                </div>
                {proj.description && (
                  <p style={{ margin: '2px 0 0', color: '#475569', fontSize: '8.5pt', lineHeight: 1.35 }}>
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: '0.85rem' }}>
          <div style={{ fontSize: '9pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', marginBottom: '6px' }}>
            Education
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <strong>{edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}</strong> — {edu.institution}
                  {edu.grade && <span style={{ color: themeColor }}> (GPA: {edu.grade})</span>}
                </span>
                <span style={{ color: '#64748b', fontSize: '8pt' }}>
                  {edu.startDate ? `${edu.startDate} – ` : ''}{edu.endDate || edu.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Languages Grid */}
      {(certifications.length > 0 || languages.length > 0 || achievements.length > 0) && (
        <section>
          <div style={{ fontSize: '9pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '2px', marginBottom: '6px' }}>
            Certifications & Additional Information
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '8pt', color: '#334155' }}>
            {certifications.map((c, idx) => (
              <span key={idx}><strong>Cert:</strong> {c.name || c.title} ({c.issuer})</span>
            ))}
            {languages.map((l, idx) => (
              <span key={idx}><strong>Lang:</strong> {l.name || l.language}</span>
            ))}
            {achievements.map((a, idx) => (
              <span key={idx}><strong>Award:</strong> {typeof a === 'string' ? a : a.title || a.description}</span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CompactTemplate;
