import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

const InternationalTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
    themeColor = '#2563eb',
  } = data;

  return (
    <div
      className="international-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#1e293b',
        fontFamily: "'Inter', Arial, sans-serif",
        fontSize: '9.5pt',
        lineHeight: 1.5,
        padding: '2.5rem',
        minHeight: '1123px',
      }}
    >
      {/* International Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: `2.5px solid ${themeColor}`,
          paddingBottom: '1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '24pt',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              margin: '0 0 0.35rem 0',
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

        <div style={{ textAlign: 'right', fontSize: '8.5pt', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {personalInfo.location && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
              <span>{personalInfo.location}</span>
              <MapPin size={12} color={themeColor} />
            </div>
          )}
          {personalInfo.phone && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
              <span>{personalInfo.phone}</span>
              <Phone size={12} color={themeColor} />
            </div>
          )}
          {personalInfo.email && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
              <span>{personalInfo.email}</span>
              <Mail size={12} color={themeColor} />
            </div>
          )}
          {personalInfo.linkedin && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: themeColor, textDecoration: 'none', fontWeight: 600 }}>
                LinkedIn Profile
              </a>
              <Linkedin size={12} color={themeColor} />
            </div>
          )}
        </div>
      </header>

      {/* Profile */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: themeColor,
              letterSpacing: '0.06em',
              borderBottom: '1px solid #e2e8f0',
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
        <section style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: themeColor,
              letterSpacing: '0.06em',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '0.25rem',
              marginBottom: '0.85rem',
            }}
          >
            Professional Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '10pt', fontWeight: 800, color: '#0f172a' }}>{exp.position || exp.role}</span>
                  <span style={{ fontSize: '8.5pt', color: '#64748b', fontWeight: 600 }}>
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div style={{ fontSize: '9pt', color: themeColor, fontWeight: 600, marginBottom: '0.35rem' }}>
                  {exp.company}{exp.location ? `, ${exp.location}` : ''}
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

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: themeColor,
              letterSpacing: '0.06em',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '0.25rem',
              marginBottom: '0.85rem',
            }}
          >
            Selected Projects & Achievements
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
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

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: themeColor,
              letterSpacing: '0.06em',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '0.25rem',
              marginBottom: '0.75rem',
            }}
          >
            Education & Qualifications
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <span style={{ fontWeight: 700, color: '#0f172a' }}>
                    {edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
                  </span>
                  <span style={{ color: '#475569' }}> — {edu.institution}</span>
                  {edu.grade && <span style={{ color: '#64748b' }}> (Grade: {edu.grade})</span>}
                </div>
                <span style={{ fontSize: '8.5pt', color: '#64748b' }}>
                  {edu.startDate ? `${edu.startDate} – ` : ''}{edu.endDate || edu.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills & Languages (European/International standard) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {skills.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: '10.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: themeColor,
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '0.2rem',
                marginBottom: '0.6rem',
              }}
            >
              Professional Skills
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {skills.map((s, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: '#f1f5f9',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    padding: '0.2rem 0.5rem',
                    fontSize: '8.5pt',
                    color: '#334155',
                    fontWeight: 600,
                  }}
                >
                  {typeof s === 'string' ? s : s.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {languages.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: '10.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: themeColor,
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '0.2rem',
                marginBottom: '0.6rem',
              }}
            >
              Language Competencies
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '9pt' }}>
              {languages.map((l, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{l.name || l.language}</span>
                  <span style={{ color: '#64748b' }}>{l.proficiency || 'Fluent'}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default InternationalTemplate;
