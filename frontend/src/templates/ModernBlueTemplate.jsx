import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink, Calendar, Award } from 'lucide-react';

const ModernBlueTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
    themeColor = '#1d4ed8',
  } = data;

  return (
    <div
      className="modern-blue-template"
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
      {/* Top Header Card */}
      <header
        style={{
          borderBottom: `2.5px solid ${themeColor}`,
          paddingBottom: '1.25rem',
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
              fontSize: '24pt',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.025em',
              margin: '0 0 0.25rem 0',
            }}
          >
            {personalInfo.fullName || 'Candidate Name'}
          </h1>
          {personalInfo.title && (
            <div style={{ fontSize: '12pt', fontWeight: 700, color: themeColor }}>
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
          <div style={{ display: 'flex', gap: '0.75rem' }}>
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
          <div
            style={{
              fontSize: '11pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: themeColor,
              letterSpacing: '0.05em',
              marginBottom: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ width: '8px', height: '8px', backgroundColor: themeColor, borderRadius: '50%' }} />
            About Me
          </div>
          <p style={{ margin: 0, color: '#334155', fontSize: '9.5pt', lineHeight: 1.6, paddingLeft: '1rem' }}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience Timeline */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '1.5rem' }}>
          <div
            style={{
              fontSize: '11pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: themeColor,
              letterSpacing: '0.05em',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ width: '8px', height: '8px', backgroundColor: themeColor, borderRadius: '50%' }} />
            Professional Experience
          </div>
          <div style={{ borderLeft: `2px solid ${themeColor}33`, marginLeft: '4px', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                <span
                  style={{
                    position: 'absolute',
                    left: '-1.35rem',
                    top: '4px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: themeColor,
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '10pt', fontWeight: 800, color: '#0f172a' }}>{exp.position || exp.role}</span>
                  <span style={{ fontSize: '8.5pt', color: '#64748b' }}>
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
        <section style={{ marginBottom: '1.5rem' }}>
          <div
            style={{
              fontSize: '11pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: themeColor,
              letterSpacing: '0.05em',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ width: '8px', height: '8px', backgroundColor: themeColor, borderRadius: '50%' }} />
            Key Projects
          </div>
          <div style={{ borderLeft: `2px solid ${themeColor}33`, marginLeft: '4px', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((proj, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                <span
                  style={{
                    position: 'absolute',
                    left: '-1.35rem',
                    top: '4px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    backgroundColor: themeColor,
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '10pt', fontWeight: 700, color: '#0f172a' }}>{proj.title || proj.name}</span>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '8pt', color: themeColor, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}>
                      Link <ExternalLink size={10} />
                    </a>
                  )}
                </div>
                {proj.technologies && (
                  <div style={{ fontSize: '8.5pt', color: '#64748b', fontStyle: 'italic', marginBottom: '0.25rem' }}>
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

      {/* Two Column Bottom Grid: Education & Skills */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.25rem' }}>
        {/* Education */}
        {education.length > 0 && (
          <section>
            <div
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: themeColor,
                letterSpacing: '0.05em',
                marginBottom: '0.6rem',
                borderBottom: `1.5px solid ${themeColor}44`,
                paddingBottom: '0.25rem',
              }}
            >
              Education
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {education.map((edu, idx) => (
                <div key={idx}>
                  <div style={{ fontWeight: 700, fontSize: '9.5pt', color: '#0f172a' }}>
                    {edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
                  </div>
                  <div style={{ fontSize: '8.5pt', color: '#64748b' }}>
                    {edu.institution} • {edu.endDate || edu.year}
                  </div>
                  {edu.grade && <div style={{ fontSize: '8pt', color: themeColor }}>GPA: {edu.grade}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <div
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: themeColor,
                letterSpacing: '0.05em',
                marginBottom: '0.6rem',
                borderBottom: `1.5px solid ${themeColor}44`,
                paddingBottom: '0.25rem',
              }}
            >
              Technical Skills
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: `${themeColor}12`,
                    border: `1px solid ${themeColor}33`,
                    color: themeColor,
                    borderRadius: '4px',
                    padding: '0.2rem 0.5rem',
                    fontSize: '8.5pt',
                    fontWeight: 600,
                  }}
                >
                  {typeof skill === 'string' ? skill : skill.name}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Certifications & Languages */}
      {(certifications.length > 0 || languages.length > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {certifications.length > 0 && (
            <section>
              <div
                style={{
                  fontSize: '10pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: themeColor,
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}
              >
                Certifications
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '8.5pt', color: '#475569' }}>
                {certifications.map((c, idx) => (
                  <li key={idx} style={{ marginBottom: '0.25rem' }}>
                    <strong>{c.name || c.title}</strong> ({c.issuer})
                  </li>
                ))}
              </ul>
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <div
                style={{
                  fontSize: '10pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: themeColor,
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}
              >
                Languages
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '8.5pt' }}>
                {languages.map((l, idx) => (
                  <span key={idx} style={{ color: '#334155' }}>
                    <strong>{l.name || l.language}:</strong> {l.proficiency || 'Fluent'}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default ModernBlueTemplate;
