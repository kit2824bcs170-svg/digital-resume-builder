import React from 'react';

const ElegantTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
    themeColor = '#475569',
  } = data;

  return (
    <div
      className="elegant-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#27272a',
        fontFamily: "'Inter', sans-serif",
        fontSize: '9.5pt',
        lineHeight: 1.6,
        padding: '3rem 3.25rem',
        minHeight: '1123px',
      }}
    >
      {/* Refined Header */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '26pt',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: '#18181b',
            margin: '0 0 0.5rem 0',
          }}
        >
          {personalInfo.fullName || 'Candidate Name'}
        </h1>
        {personalInfo.title && (
          <div
            style={{
              fontSize: '11pt',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: themeColor,
              fontWeight: 500,
              marginBottom: '0.75rem',
            }}
          >
            {personalInfo.title}
          </div>
        )}
        <div style={{ width: '40px', height: '1px', backgroundColor: themeColor, margin: '0 auto 0.75rem' }} />
        <div style={{ fontSize: '8.5pt', color: '#71717a', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', letterSpacing: '0.02em' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
          {personalInfo.linkedin && <span>• LinkedIn</span>}
          {personalInfo.website && <span>• Portfolio</span>}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '2rem', textAlign: 'center', maxWidth: '650px', margin: '0 auto 2rem' }}>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#52525b', fontSize: '9.5pt', lineHeight: 1.65 }}>
            "{personalInfo.summary}"
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '2rem' }}>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '11.5pt',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#18181b',
              borderBottom: '1px solid #e4e4e7',
              paddingBottom: '0.35rem',
              marginBottom: '1.25rem',
            }}
          >
            Experience
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 700, fontSize: '10pt', color: '#18181b' }}>{exp.position || exp.role}</span>
                  <span style={{ fontSize: '8.5pt', color: '#a1a1aa' }}>
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div style={{ fontSize: '9pt', color: themeColor, fontStyle: 'italic', marginBottom: '0.35rem' }}>
                  {exp.company}{exp.location ? `, ${exp.location}` : ''}
                </div>
                {exp.description && (
                  <p style={{ margin: 0, color: '#52525b', fontSize: '9pt', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
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
        <section style={{ marginBottom: '2rem' }}>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '11.5pt',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#18181b',
              borderBottom: '1px solid #e4e4e7',
              paddingBottom: '0.35rem',
              marginBottom: '1.25rem',
            }}
          >
            Projects
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontWeight: 700, fontSize: '10pt', color: '#18181b' }}>
                    {proj.title || proj.name}
                  </span>
                  {proj.link && <span style={{ fontSize: '8pt', color: themeColor }}>{proj.link}</span>}
                </div>
                {proj.technologies && (
                  <div style={{ fontSize: '8.5pt', color: '#71717a', fontStyle: 'italic', marginBottom: '0.25rem' }}>
                    {proj.technologies}
                  </div>
                )}
                {proj.description && (
                  <p style={{ margin: 0, color: '#52525b', fontSize: '9pt', lineHeight: 1.55 }}>
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
        <section style={{ marginBottom: '2rem' }}>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '11.5pt',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#18181b',
              borderBottom: '1px solid #e4e4e7',
              paddingBottom: '0.35rem',
              marginBottom: '1rem',
            }}
          >
            Education
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '9.5pt', color: '#18181b' }}>
                    {edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
                  </div>
                  <div style={{ fontSize: '9pt', color: '#71717a' }}>{edu.institution}</div>
                </div>
                <div style={{ fontSize: '8.5pt', color: '#a1a1aa' }}>
                  {edu.startDate ? `${edu.startDate} – ` : ''}{edu.endDate || edu.year}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: '1.5rem' }}>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '11.5pt',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#18181b',
              borderBottom: '1px solid #e4e4e7',
              paddingBottom: '0.35rem',
              marginBottom: '0.75rem',
            }}
          >
            Expertise
          </div>
          <p style={{ margin: 0, color: '#52525b', fontSize: '9pt', letterSpacing: '0.02em', lineHeight: 1.7 }}>
            {skills.map((s) => (typeof s === 'string' ? s : s.name)).join('  •  ')}
          </p>
        </section>
      )}
    </div>
  );
};

export default ElegantTemplate;
