import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

const ModernGreenTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
    themeColor = '#059669',
  } = data;

  return (
    <div
      className="modern-green-template"
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
      {/* Header with emerald accent band */}
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
              color: '#064e3b',
              margin: '0 0 0.25rem 0',
              letterSpacing: '-0.02em',
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
          </div>
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '1.5rem', backgroundColor: '#f0fdf4', padding: '0.85rem 1.15rem', borderRadius: '6px', borderLeft: `3px solid ${themeColor}` }}>
          <p style={{ margin: 0, color: '#166534', fontSize: '9pt', lineHeight: 1.55 }}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#064e3b',
              letterSpacing: '0.05em',
              borderBottom: `1.5px solid ${themeColor}44`,
              paddingBottom: '0.25rem',
              marginBottom: '0.75rem',
            }}
          >
            Professional Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx}>
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
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#064e3b',
              letterSpacing: '0.05em',
              borderBottom: `1.5px solid ${themeColor}44`,
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
                      View Project
                    </a>
                  )}
                </div>
                {proj.technologies && (
                  <div style={{ fontSize: '8.5pt', color: themeColor, fontWeight: 500, margin: '0.15rem 0 0.25rem' }}>
                    Technologies: {proj.technologies}
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

      {/* Two Column Grid: Education & Skills */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#064e3b',
                letterSpacing: '0.05em',
                borderBottom: `1.5px solid ${themeColor}44`,
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
            <h2
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#064e3b',
                letterSpacing: '0.05em',
                borderBottom: `1.5px solid ${themeColor}44`,
                paddingBottom: '0.25rem',
                marginBottom: '0.65rem',
              }}
            >
              Skills & Expertise
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {skills.map((s, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: '#ecfdf5',
                    border: `1px solid ${themeColor}44`,
                    color: '#065f46',
                    borderRadius: '4px',
                    padding: '0.2rem 0.55rem',
                    fontSize: '8.5pt',
                    fontWeight: 600,
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
  );
};

export default ModernGreenTemplate;
