import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

const TwoColumnTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
    themeColor = '#334155',
  } = data;

  return (
    <div
      className="two-column-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#1e293b',
        fontFamily: "'Inter', sans-serif",
        fontSize: '9.5pt',
        lineHeight: 1.5,
        padding: '2.5rem',
        minHeight: '1123px',
      }}
    >
      {/* Top Header */}
      <header
        style={{
          borderBottom: `2.5px solid ${themeColor}`,
          paddingBottom: '1.25rem',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '24pt',
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 0.25rem 0',
              letterSpacing: '-0.02em',
            }}
          >
            {personalInfo.fullName || 'Candidate Name'}
          </h1>
          {personalInfo.title && (
            <div style={{ fontSize: '12pt', fontWeight: 600, color: themeColor }}>
              {personalInfo.title}
            </div>
          )}
        </div>
        <div style={{ textAlign: 'right', fontSize: '8.5pt', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </header>

      {/* Two Column Layout Split */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* LEFT COLUMN (38%) */}
        <div style={{ width: '38%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '10.5pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: themeColor,
                  letterSpacing: '0.06em',
                  borderBottom: `1.5px solid ${themeColor}33`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.65rem',
                }}
              >
                Key Competencies
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {skills.map((s, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '4px',
                      padding: '0.2rem 0.55rem',
                      fontSize: '8.5pt',
                      fontWeight: 600,
                      color: '#334155',
                    }}
                  >
                    {typeof s === 'string' ? s : s.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '10.5pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: themeColor,
                  letterSpacing: '0.06em',
                  borderBottom: `1.5px solid ${themeColor}33`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.65rem',
                }}
              >
                Education
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <div style={{ fontWeight: 700, fontSize: '9.5pt', color: '#0f172a' }}>
                      {edu.degree}
                    </div>
                    {edu.fieldOfStudy && (
                      <div style={{ fontSize: '8.5pt', color: themeColor, fontWeight: 600 }}>
                        {edu.fieldOfStudy}
                      </div>
                    )}
                    <div style={{ fontSize: '8.5pt', color: '#64748b' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: '8pt', color: '#94a3b8' }}>
                      {edu.startDate ? `${edu.startDate} – ` : ''}{edu.endDate || edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '10.5pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: themeColor,
                  letterSpacing: '0.06em',
                  borderBottom: `1.5px solid ${themeColor}33`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.65rem',
                }}
              >
                Certifications
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '8.5pt' }}>
                {certifications.map((c, idx) => (
                  <div key={idx}>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>{c.name || c.title}</div>
                    <div style={{ color: '#64748b' }}>{c.issuer} {c.year ? `(${c.year})` : ''}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '10.5pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: themeColor,
                  letterSpacing: '0.06em',
                  borderBottom: `1.5px solid ${themeColor}33`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.65rem',
                }}
              >
                Languages
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '8.5pt' }}>
                {languages.map((l, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600 }}>{l.name || l.language}</span>
                    <span style={{ color: '#64748b' }}>{l.proficiency || 'Fluent'}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT COLUMN (62%) */}
        <div style={{ width: '62%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Summary */}
          {personalInfo.summary && (
            <section>
              <h2
                style={{
                  fontSize: '10.5pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: themeColor,
                  letterSpacing: '0.06em',
                  borderBottom: `1.5px solid ${themeColor}33`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.5rem',
                }}
              >
                Professional Summary
              </h2>
              <p style={{ margin: 0, color: '#334155', fontSize: '9pt', lineHeight: 1.55 }}>
                {personalInfo.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '10.5pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: themeColor,
                  letterSpacing: '0.06em',
                  borderBottom: `1.5px solid ${themeColor}33`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.75rem',
                }}
              >
                Work Experience
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {experience.map((exp, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '10pt', fontWeight: 800, color: '#0f172a' }}>{exp.position || exp.role}</span>
                      <span style={{ fontSize: '8.5pt', color: '#64748b', fontWeight: 500 }}>
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div style={{ fontSize: '9pt', fontWeight: 600, color: themeColor, marginBottom: '0.35rem' }}>
                      {exp.company}{exp.location ? ` • ${exp.location}` : ''}
                    </div>
                    {exp.description && (
                      <p style={{ margin: 0, color: '#475569', fontSize: '9pt', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
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
            <section>
              <h2
                style={{
                  fontSize: '10.5pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: themeColor,
                  letterSpacing: '0.06em',
                  borderBottom: `1.5px solid ${themeColor}33`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.75rem',
                }}
              >
                Key Projects
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {projects.map((proj, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '10pt', fontWeight: 700, color: '#0f172a' }}>
                        {proj.title || proj.name}
                      </span>
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '8pt', color: themeColor, textDecoration: 'none', fontWeight: 600 }}>
                          Link
                        </a>
                      )}
                    </div>
                    {proj.technologies && (
                      <div style={{ fontSize: '8.5pt', color: '#64748b', fontStyle: 'italic', marginBottom: '0.2rem' }}>
                        Tech: {proj.technologies}
                      </div>
                    )}
                    {proj.description && (
                      <p style={{ margin: 0, color: '#475569', fontSize: '9pt', lineHeight: 1.5 }}>
                        {proj.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnTemplate;
