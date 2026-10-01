import React from 'react';

const MinimalATSTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    achievements = [],
    languages = [],
  } = data;

  return (
    <div
      className="minimal-ats-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: '10pt',
        lineHeight: 1.45,
        padding: '2.5rem',
        minHeight: '1123px',
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '1.25rem', borderBottom: '1.5px solid #000000', paddingBottom: '0.75rem' }}>
        <h1
          style={{
            fontSize: '20pt',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            margin: '0 0 0.3rem 0',
          }}
        >
          {personalInfo.fullName || 'Candidate Name'}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '11pt', fontWeight: 'bold', marginBottom: '0.4rem' }}>
            {personalInfo.title}
          </div>
        )}
        <div style={{ fontSize: '9pt', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          {personalInfo.email && <span>Email: {personalInfo.email}</span>}
          {personalInfo.phone && <span>Phone: {personalInfo.phone}</span>}
          {personalInfo.location && <span>Location: {personalInfo.location}</span>}
          {personalInfo.linkedin && <span>LinkedIn: {personalInfo.linkedin}</span>}
          {personalInfo.github && <span>GitHub: {personalInfo.github}</span>}
          {personalInfo.website && <span>Portfolio: {personalInfo.website}</span>}
        </div>
      </header>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '1.15rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              borderBottom: '1px solid #000000',
              paddingBottom: '0.2rem',
              margin: '0 0 0.4rem 0',
            }}
          >
            Professional Summary
          </h2>
          <p style={{ margin: 0, fontSize: '9.5pt' }}>{personalInfo.summary}</p>
        </section>
      )}

      {/* Work Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '1.15rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              borderBottom: '1px solid #000000',
              paddingBottom: '0.2rem',
              margin: '0 0 0.5rem 0',
            }}
          >
            Work Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                  <span>{exp.position || exp.role}</span>
                  <span>{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <div style={{ fontStyle: 'italic', marginBottom: '0.25rem' }}>
                  {exp.company}{exp.location ? `, ${exp.location}` : ''}
                </div>
                {exp.description && (
                  <p style={{ margin: 0, fontSize: '9.5pt', whiteSpace: 'pre-line' }}>{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '1.15rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              borderBottom: '1px solid #000000',
              paddingBottom: '0.2rem',
              margin: '0 0 0.5rem 0',
            }}
          >
            Key Projects
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                  <span>{proj.title || proj.name}</span>
                  {proj.link && <span style={{ fontSize: '9pt' }}>{proj.link}</span>}
                </div>
                {proj.technologies && (
                  <div style={{ fontStyle: 'italic', fontSize: '9pt', marginBottom: '0.2rem' }}>
                    Technologies: {proj.technologies}
                  </div>
                )}
                {proj.description && (
                  <p style={{ margin: 0, fontSize: '9.5pt' }}>{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: '1.15rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              borderBottom: '1px solid #000000',
              paddingBottom: '0.2rem',
              margin: '0 0 0.5rem 0',
            }}
          >
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {education.map((edu, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                  <span>{edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}</span>
                  <span>{edu.startDate ? `${edu.startDate} – ` : ''}{edu.endDate || edu.year}</span>
                </div>
                <div>
                  {edu.institution || edu.school}{edu.grade ? ` | GPA/Score: ${edu.grade}` : ''}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: '1.15rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              borderBottom: '1px solid #000000',
              paddingBottom: '0.2rem',
              margin: '0 0 0.4rem 0',
            }}
          >
            Technical & Professional Skills
          </h2>
          <p style={{ margin: 0, fontSize: '9.5pt' }}>
            {skills.map((s) => (typeof s === 'string' ? s : s.name)).join(' • ')}
          </p>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section style={{ marginBottom: '1.15rem' }}>
          <h2
            style={{
              fontSize: '11pt',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              borderBottom: '1px solid #000000',
              paddingBottom: '0.2rem',
              margin: '0 0 0.4rem 0',
            }}
          >
            Certifications
          </h2>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '9.5pt' }}>
            {certifications.map((c, idx) => (
              <li key={idx}>
                <strong>{c.name || c.title}</strong> — {c.issuer} {c.year ? `(${c.year})` : ''}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages & Achievements */}
      {(languages.length > 0 || achievements.length > 0) && (
        <section>
          {languages.length > 0 && (
            <div style={{ marginBottom: '0.75rem' }}>
              <h2
                style={{
                  fontSize: '11pt',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #000000',
                  paddingBottom: '0.2rem',
                  margin: '0 0 0.4rem 0',
                }}
              >
                Languages
              </h2>
              <p style={{ margin: 0, fontSize: '9.5pt' }}>
                {languages.map((l) => `${l.name || l.language} (${l.proficiency || 'Fluent'})`).join(', ')}
              </p>
            </div>
          )}

          {achievements.length > 0 && (
            <div>
              <h2
                style={{
                  fontSize: '11pt',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #000000',
                  paddingBottom: '0.2rem',
                  margin: '0 0 0.4rem 0',
                }}
              >
                Key Honors & Achievements
              </h2>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '9.5pt' }}>
                {achievements.map((a, idx) => (
                  <li key={idx}>{typeof a === 'string' ? a : a.title || a.description}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default MinimalATSTemplate;
