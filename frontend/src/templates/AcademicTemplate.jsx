import React from 'react';

const AcademicTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
    themeColor = '#3b82f6',
  } = data;

  return (
    <div
      className="academic-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#111827',
        fontFamily: "'Times New Roman', Times, serif",
        fontSize: '10.5pt',
        lineHeight: 1.5,
        padding: '3rem',
        minHeight: '1123px',
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1
          style={{
            fontSize: '22pt',
            fontWeight: 'normal',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            margin: '0 0 0.35rem 0',
          }}
        >
          {personalInfo.fullName || 'Candidate Name, M.S.'}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '12pt', fontStyle: 'italic', marginBottom: '0.5rem' }}>
            {personalInfo.title}
          </div>
        )}
        <div style={{ fontSize: '9.5pt', color: '#374151', display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.email && <span>• Email: {personalInfo.email}</span>}
          {personalInfo.phone && <span>• Tel: {personalInfo.phone}</span>}
          {personalInfo.website && <span>• Web: {personalInfo.website}</span>}
        </div>
      </header>

      {/* Education First */}
      {education.length > 0 && (
        <section style={{ marginBottom: '1.75rem' }}>
          <h2
            style={{
              fontSize: '11.5pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: '1px solid #111827',
              paddingBottom: '0.2rem',
              marginBottom: '0.75rem',
            }}
          >
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>
                    {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                  </div>
                  <div>{edu.institution}</div>
                  {edu.grade && <div style={{ fontSize: '9.5pt', fontStyle: 'italic' }}>Cumulative GPA: {edu.grade}</div>}
                </div>
                <div style={{ fontStyle: 'italic', fontSize: '9.5pt' }}>
                  {edu.startDate ? `${edu.startDate} – ` : ''}{edu.endDate || edu.year}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Research & Academic Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '1.75rem' }}>
          <h2
            style={{
              fontSize: '11.5pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: '1px solid #111827',
              paddingBottom: '0.2rem',
              marginBottom: '0.75rem',
            }}
          >
            Research & Project Investigations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 'bold' }}>{proj.title || proj.name}</span>
                  {proj.link && <span style={{ fontSize: '9pt', fontStyle: 'italic' }}>[{proj.link}]</span>}
                </div>
                {proj.technologies && (
                  <div style={{ fontStyle: 'italic', fontSize: '9.5pt', margin: '0.1rem 0 0.25rem' }}>
                    Methodologies: {proj.technologies}
                  </div>
                )}
                {proj.description && (
                  <p style={{ margin: 0, fontSize: '10pt', textAlign: 'justify' }}>
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Academic / Professional Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '1.75rem' }}>
          <h2
            style={{
              fontSize: '11.5pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: '1px solid #111827',
              paddingBottom: '0.2rem',
              marginBottom: '0.75rem',
            }}
          >
            Professional Appointments
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 'bold' }}>{exp.position || exp.role}</span>
                  <span style={{ fontStyle: 'italic', fontSize: '9.5pt' }}>
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div style={{ fontStyle: 'italic', marginBottom: '0.3rem' }}>
                  {exp.company}{exp.location ? `, ${exp.location}` : ''}
                </div>
                {exp.description && (
                  <p style={{ margin: 0, fontSize: '10pt', textAlign: 'justify' }}>
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Honors, Awards & Publications */}
      {achievements.length > 0 && (
        <section style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontSize: '11.5pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: '1px solid #111827',
              paddingBottom: '0.2rem',
              marginBottom: '0.65rem',
            }}
          >
            Honors, Fellowships & Awards
          </h2>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '10pt' }}>
            {achievements.map((a, idx) => (
              <li key={idx} style={{ marginBottom: '0.3rem' }}>
                {typeof a === 'string' ? a : a.title || a.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications & Skills */}
      {(certifications.length > 0 || skills.length > 0) && (
        <section>
          <h2
            style={{
              fontSize: '11.5pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderBottom: '1px solid #111827',
              paddingBottom: '0.2rem',
              marginBottom: '0.65rem',
            }}
          >
            Certifications & Competencies
          </h2>
          {skills.length > 0 && (
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '10pt' }}>
              <strong>Core Competencies:</strong> {skills.map((s) => (typeof s === 'string' ? s : s.name)).join(', ')}
            </p>
          )}
          {certifications.length > 0 && (
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '10pt' }}>
              {certifications.map((c, idx) => (
                <li key={idx}>
                  {c.name || c.title} ({c.issuer}{c.year ? `, ${c.year}` : ''})
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
};

export default AcademicTemplate;
