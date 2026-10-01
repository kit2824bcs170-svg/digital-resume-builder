import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink, Sparkles } from 'lucide-react';

const CreativeTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
    themeColor = '#7c3aed',
  } = data;

  return (
    <div
      className="creative-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#1e293b',
        fontFamily: "'Inter', sans-serif",
        fontSize: '9.5pt',
        lineHeight: 1.5,
        minHeight: '1123px',
      }}
    >
      {/* Top Gradient Banner */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${themeColor}, #ec4899, #3b82f6)` }} />

      <div style={{ padding: '2.5rem' }}>
        {/* Header */}
        <header
          style={{
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '1.5rem',
            marginBottom: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '26pt',
                fontWeight: 900,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                margin: '0 0 0.25rem 0',
              }}
            >
              {personalInfo.fullName || 'Candidate Name'}
            </h1>
            {personalInfo.title && (
              <div
                style={{
                  fontSize: '12pt',
                  fontWeight: 700,
                  color: themeColor,
                  display: 'inline-block',
                  backgroundColor: `${themeColor}15`,
                  padding: '0.15rem 0.6rem',
                  borderRadius: '999px',
                }}
              >
                {personalInfo.title}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '8.5pt', color: '#475569' }}>
            {personalInfo.email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={12} color={themeColor} />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={12} color={themeColor} />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={12} color={themeColor} />
                <span>{personalInfo.location}</span>
              </div>
            )}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.2rem' }}>
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: themeColor, textDecoration: 'none', fontWeight: 600 }}>
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: themeColor, textDecoration: 'none', fontWeight: 600 }}>
                  GitHub
                </a>
              )}
              {personalInfo.website && (
                <a href={personalInfo.website} target="_blank" rel="noreferrer" style={{ color: themeColor, textDecoration: 'none', fontWeight: 600 }}>
                  Portfolio
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Summary */}
        {personalInfo.summary && (
          <section style={{ marginBottom: '1.5rem' }}>
            <p style={{ margin: 0, color: '#334155', fontSize: '9.5pt', lineHeight: 1.6, fontStyle: 'italic', borderLeft: `3px solid ${themeColor}`, paddingLeft: '1rem' }}>
              "{personalInfo.summary}"
            </p>
          </section>
        )}

        {/* Skills Pills */}
        {skills.length > 0 && (
          <section style={{ marginBottom: '1.75rem' }}>
            <h2
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#0f172a',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Sparkles size={16} color={themeColor} /> Key Skills & Competencies
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {skills.map((s, idx) => (
                <span
                  key={idx}
                  style={{
                    background: `linear-gradient(135deg, ${themeColor}12, ${themeColor}25)`,
                    border: `1px solid ${themeColor}33`,
                    color: themeColor,
                    borderRadius: '999px',
                    padding: '0.25rem 0.75rem',
                    fontSize: '8.5pt',
                    fontWeight: 700,
                  }}
                >
                  {typeof s === 'string' ? s : s.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section style={{ marginBottom: '1.75rem' }}>
            <h2
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#0f172a',
                letterSpacing: '0.05em',
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '0.25rem',
                marginBottom: '1rem',
              }}
            >
              Experience History
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '10.5pt', fontWeight: 800, color: '#0f172a' }}>{exp.position || exp.role}</span>
                    <span style={{ fontSize: '8.5pt', color: '#64748b', fontWeight: 500 }}>
                      {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div style={{ fontSize: '9pt', fontWeight: 600, color: themeColor, marginBottom: '0.35rem' }}>
                    {exp.company}{exp.location ? ` • ${exp.location}` : ''}
                  </div>
                  {exp.description && (
                    <p style={{ margin: 0, color: '#475569', fontSize: '9pt', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Grid */}
        {projects.length > 0 && (
          <section style={{ marginBottom: '1.75rem' }}>
            <h2
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#0f172a',
                letterSpacing: '0.05em',
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '0.25rem',
                marginBottom: '1rem',
              }}
            >
              Creative & Technical Projects
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: '0.85rem 1rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '9.5pt', fontWeight: 700, color: '#0f172a' }}>
                      {proj.title || proj.name}
                    </span>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '8pt', color: themeColor, textDecoration: 'none', fontWeight: 600 }}>
                        Link
                      </a>
                    )}
                  </div>
                  {proj.technologies && (
                    <div style={{ fontSize: '8pt', color: themeColor, fontWeight: 600, marginBottom: '0.35rem' }}>
                      {proj.technologies}
                    </div>
                  )}
                  {proj.description && (
                    <p style={{ margin: 0, color: '#475569', fontSize: '8.5pt', lineHeight: 1.45 }}>
                      {proj.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education & Certifications */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {education.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '11pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#0f172a',
                  letterSpacing: '0.05em',
                  borderBottom: `2px solid ${themeColor}`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.75rem',
                }}
              >
                Education
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <div style={{ fontWeight: 700, fontSize: '9.5pt', color: '#0f172a' }}>
                      {edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
                    </div>
                    <div style={{ fontSize: '8.5pt', color: '#64748b' }}>
                      {edu.institution} {edu.endDate ? `• ${edu.endDate}` : ''}
                    </div>
                    {edu.grade && <div style={{ fontSize: '8pt', color: themeColor }}>GPA: {edu.grade}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '11pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#0f172a',
                  letterSpacing: '0.05em',
                  borderBottom: `2px solid ${themeColor}`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.75rem',
                }}
              >
                Certifications
              </h2>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '8.5pt', color: '#475569' }}>
                {certifications.map((c, idx) => (
                  <li key={idx} style={{ marginBottom: '0.3rem' }}>
                    <strong>{c.name || c.title}</strong> — {c.issuer}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
