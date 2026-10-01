import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

const DarkHeaderTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
    themeColor = '#0f172a',
  } = data;

  const darkBg = themeColor === '#000000' || themeColor === '#0f172a' ? '#0f172a' : themeColor;
  const accent = themeColor === '#0f172a' ? '#38bdf8' : '#ffffff';

  return (
    <div
      className="dark-header-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#1e293b',
        fontFamily: "'Inter', sans-serif",
        fontSize: '9.5pt',
        lineHeight: 1.5,
        minHeight: '1123px',
      }}
    >
      {/* DARK HEADER BANNER */}
      <header
        style={{
          backgroundColor: darkBg,
          color: '#ffffff',
          padding: '2.5rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1
              style={{
                fontSize: '26pt',
                fontWeight: 900,
                color: '#ffffff',
                margin: '0 0 0.3rem 0',
                letterSpacing: '-0.02em',
              }}
            >
              {personalInfo.fullName || 'Candidate Name'}
            </h1>
            {personalInfo.title && (
              <div style={{ fontSize: '13pt', fontWeight: 600, color: accent }}>
                {personalInfo.title}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '9pt', color: '#cbd5e1' }}>
            {personalInfo.email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Mail size={13} color={accent} />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Phone size={13} color={accent} />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <MapPin size={13} color={accent} />
                <span>{personalInfo.location}</span>
              </div>
            )}
            <div style={{ display: 'flex', gap: '0.85rem', marginTop: '0.2rem' }}>
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: accent, textDecoration: 'none', fontWeight: 600 }}>
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: accent, textDecoration: 'none', fontWeight: 600 }}>
                  GitHub
                </a>
              )}
              {personalInfo.website && (
                <a href={personalInfo.website} target="_blank" rel="noreferrer" style={{ color: accent, textDecoration: 'none', fontWeight: 600 }}>
                  Portfolio
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* WHITE BODY */}
      <div style={{ padding: '2rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <h2
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: darkBg,
                letterSpacing: '0.06em',
                borderBottom: `2px solid ${darkBg}`,
                paddingBottom: '0.25rem',
                marginBottom: '0.5rem',
              }}
            >
              Executive Summary
            </h2>
            <p style={{ margin: 0, color: '#334155', fontSize: '9.5pt', lineHeight: 1.6 }}>
              {personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: darkBg,
                letterSpacing: '0.06em',
                borderBottom: `2px solid ${darkBg}`,
                paddingBottom: '0.25rem',
                marginBottom: '0.85rem',
              }}
            >
              Work History & Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '10.5pt', fontWeight: 800, color: '#0f172a' }}>{exp.position || exp.role}</span>
                    <span style={{ fontSize: '8.5pt', color: '#64748b', fontWeight: 500 }}>
                      {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div style={{ fontSize: '9.5pt', fontWeight: 600, color: '#475569', marginBottom: '0.35rem' }}>
                    {exp.company}{exp.location ? ` • ${exp.location}` : ''}
                  </div>
                  {exp.description && (
                    <p style={{ margin: 0, color: '#334155', fontSize: '9pt', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
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
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: darkBg,
                letterSpacing: '0.06em',
                borderBottom: `2px solid ${darkBg}`,
                paddingBottom: '0.25rem',
                marginBottom: '0.85rem',
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
                      <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '8pt', color: darkBg, textDecoration: 'none', fontWeight: 600 }}>
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
                    <p style={{ margin: 0, color: '#334155', fontSize: '9pt', lineHeight: 1.5 }}>
                      {proj.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Two Column Grid: Education & Skills */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {education.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '11pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: darkBg,
                  letterSpacing: '0.06em',
                  borderBottom: `2px solid ${darkBg}`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.65rem',
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
                    {edu.grade && <div style={{ fontSize: '8pt', color: '#475569' }}>Grade: {edu.grade}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '11pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: darkBg,
                  letterSpacing: '0.06em',
                  borderBottom: `2px solid ${darkBg}`,
                  paddingBottom: '0.25rem',
                  marginBottom: '0.65rem',
                }}
              >
                Core Competencies
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {skills.map((s, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: '#f1f5f9',
                      border: '1px solid #e2e8f0',
                      borderRadius: '4px',
                      padding: '0.2rem 0.55rem',
                      fontSize: '8.5pt',
                      fontWeight: 600,
                      color: '#0f172a',
                    }}
                  >
                    {typeof s === 'string' ? s : s.name}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default DarkHeaderTemplate;
