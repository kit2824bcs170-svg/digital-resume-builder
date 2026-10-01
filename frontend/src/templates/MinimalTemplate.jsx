import React from 'react';

const MinimalTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    competitiveProgramming = [],
    achievements = [],
    languages = [],
    themeColor = '#0f172a',
  } = data;

  return (
    <div
      className="minimal-template"
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        color: '#111827',
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        fontSize: '10pt',
        lineHeight: 1.45,
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: '1.25rem', textAlign: 'left' }}>
        <h1
          style={{
            fontSize: '22pt',
            fontWeight: 800,
            color: '#111827',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '0.2rem',
          }}
        >
          {personalInfo.fullName || 'Your Full Name'}
        </h1>
        {personalInfo.professionalTitle && (
          <p style={{ fontSize: '11pt', color: '#4b5563', fontWeight: 500, marginBottom: '0.4rem' }}>
            {personalInfo.professionalTitle}
          </p>
        )}

        {/* Clean ATS Contact Line */}
        <div style={{ fontSize: '9pt', color: '#4b5563', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
          {personalInfo.linkedin && (
            <span>• {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
          )}
          {personalInfo.github && (
            <span>• {personalInfo.github.replace(/^https?:\/\/(www\.)?/, '')}</span>
          )}
          {personalInfo.portfolio && (
            <span>• {personalInfo.portfolio.replace(/^https?:\/\/(www\.)?/, '')}</span>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={{
            fontSize: '10pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: themeColor,
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '0.15rem',
            marginBottom: '0.35rem',
          }}>
            Summary
          </h2>
          <p style={{ fontSize: '9.25pt', color: '#374151' }}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={{
            fontSize: '10pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: themeColor,
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '0.15rem',
            marginBottom: '0.5rem',
          }}>
            Experience
          </h2>
          {experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '9.75pt' }}>
                <span>{exp.jobTitle}, <span style={{ fontWeight: 500, color: '#374151' }}>{exp.company}</span></span>
                <span style={{ fontWeight: 400, color: '#6b7280', fontSize: '8.75pt' }}>
                  {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              {exp.location && (
                <div style={{ fontSize: '8.5pt', color: '#6b7280', fontStyle: 'italic', marginBottom: '0.2rem' }}>
                  {exp.location}
                </div>
              )}
              {exp.description && (
                <p style={{ fontSize: '9pt', color: '#374151', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={{
            fontSize: '10pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: themeColor,
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '0.15rem',
            marginBottom: '0.5rem',
          }}>
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '9.5pt' }}>
                <span>{edu.degree} {edu.fieldOfStudy && `— ${edu.fieldOfStudy}`}</span>
                <span style={{ fontWeight: 400, color: '#6b7280', fontSize: '8.75pt' }}>
                  {edu.startYear} – {edu.endYear}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.75pt', color: '#4b5563' }}>
                <span>{edu.institution}</span>
                {(edu.score || edu.cgpa) && <span style={{ fontWeight: 600 }}>{edu.score || edu.cgpa}</span>}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={{
            fontSize: '10pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: themeColor,
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '0.15rem',
            marginBottom: '0.5rem',
          }}>
            Projects
          </h2>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ marginBottom: '0.65rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '9.5pt' }}>
                <span>{proj.name || proj.title}</span>
                <div style={{ fontSize: '8pt', color: '#6b7280' }}>
                  {proj.technologies && <span>Stack: {proj.technologies}</span>}
                </div>
              </div>
              {proj.description && (
                <p style={{ fontSize: '8.75pt', color: '#374151', marginTop: '0.15rem' }}>
                  {proj.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={{
            fontSize: '10pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: themeColor,
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '0.15rem',
            marginBottom: '0.4rem',
          }}>
            Skills
          </h2>
          <p style={{ fontSize: '9pt', color: '#374151', lineHeight: 1.5 }}>
            {skills.map((s, idx) => (
              <span key={idx}>
                {s.name}{idx < skills.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </p>
        </section>
      )}

      {/* Competitive Programming */}
      {competitiveProgramming.length > 0 && (
        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={{
            fontSize: '10pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: themeColor,
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '0.15rem',
            marginBottom: '0.4rem',
          }}>
            Competitive Programming
          </h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '8.75pt', color: '#374151' }}>
            {competitiveProgramming.map((cp, idx) => (
              <li key={`cp-${idx}`} style={{ marginBottom: '0.2rem' }}>
                <strong>{cp.platform}</strong>: {cp.details}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications & Achievements */}
      {(certifications.length > 0 || achievements.length > 0) && (
        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={{
            fontSize: '10pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: themeColor,
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '0.15rem',
            marginBottom: '0.4rem',
          }}>
            Certifications & Honors
          </h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '8.75pt', color: '#374151' }}>
            {certifications.map((c, idx) => (
              <li key={`c-${idx}`}>
                <strong>{c.name}</strong> – {c.organization} {(c.issueDate || c.date) && `(${c.issueDate || c.date})`}
              </li>
            ))}
            {achievements.map((a, idx) => (
              <li key={`a-${idx}`}>
                <strong>{a.title}</strong>: {a.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section>
          <h2 style={{
            fontSize: '10pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: themeColor,
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '0.15rem',
            marginBottom: '0.35rem',
          }}>
            Languages
          </h2>
          <p style={{ fontSize: '8.75pt', color: '#374151' }}>
            {languages.map((l, idx) => (
              <span key={idx}>
                {l.language || l.name} ({l.proficiency}){idx < languages.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
