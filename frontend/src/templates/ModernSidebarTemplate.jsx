import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink, Calendar } from 'lucide-react';

const ModernSidebarTemplate = ({ data = {} }) => {
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
      className="modern-sidebar-template"
      style={{
        display: 'flex',
        minHeight: '1123px',
        backgroundColor: '#ffffff',
        color: '#1e293b',
        fontFamily: "'Inter', sans-serif",
        fontSize: '9.5pt',
        lineHeight: 1.5,
      }}
    >
      {/* LEFT SIDEBAR (34%) */}
      <aside
        style={{
          width: '34%',
          backgroundColor: '#f8fafc',
          borderRight: '1px solid #e2e8f0',
          padding: '2.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
        }}
      >
        {/* Contact Information */}
        <div>
          <h3
            style={{
              fontSize: '10pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: themeColor,
              borderBottom: `2px solid ${themeColor}`,
              paddingBottom: '0.35rem',
              marginBottom: '0.85rem',
            }}
          >
            Contact
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '9pt' }}>
            {personalInfo.email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', wordBreak: 'break-all' }}>
                <Mail size={13} color={themeColor} style={{ flexShrink: 0 }} />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={13} color={themeColor} style={{ flexShrink: 0 }} />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={13} color={themeColor} style={{ flexShrink: 0 }} />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Linkedin size={13} color={themeColor} style={{ flexShrink: 0 }} />
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: '#334155', textDecoration: 'none' }}>
                  LinkedIn
                </a>
              </div>
            )}
            {personalInfo.github && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Github size={13} color={themeColor} style={{ flexShrink: 0 }} />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: '#334155', textDecoration: 'none' }}>
                  GitHub
                </a>
              </div>
            )}
            {personalInfo.website && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={13} color={themeColor} style={{ flexShrink: 0 }} />
                <a href={personalInfo.website} target="_blank" rel="noreferrer" style={{ color: '#334155', textDecoration: 'none' }}>
                  Portfolio
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h3
              style={{
                fontSize: '10pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: themeColor,
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '0.35rem',
                marginBottom: '0.85rem',
              }}
            >
              Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {skills.map((skill, idx) => {
                const name = typeof skill === 'string' ? skill : skill.name;
                return (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      padding: '0.2rem 0.55rem',
                      fontSize: '8.5pt',
                      fontWeight: 600,
                      color: '#334155',
                    }}
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
            <h3
              style={{
                fontSize: '10pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: themeColor,
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '0.35rem',
                marginBottom: '0.85rem',
              }}
            >
              Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {certifications.map((cert, idx) => (
                <div key={idx}>
                  <div style={{ fontWeight: 700, fontSize: '9pt', color: '#0f172a' }}>{cert.name || cert.title}</div>
                  <div style={{ fontSize: '8pt', color: '#64748b' }}>
                    {cert.issuer} {cert.year ? `• ${cert.year}` : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h3
              style={{
                fontSize: '10pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: themeColor,
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '0.35rem',
                marginBottom: '0.85rem',
              }}
            >
              Languages
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {languages.map((lang, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5pt' }}>
                  <span style={{ fontWeight: 600, color: '#334155' }}>{lang.name || lang.language}</span>
                  <span style={{ color: '#64748b' }}>{lang.proficiency || 'Fluent'}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div>
            <h3
              style={{
                fontSize: '10pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: themeColor,
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '0.35rem',
                marginBottom: '0.85rem',
              }}
            >
              Honors & Awards
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '8.5pt', color: '#475569' }}>
              {achievements.map((ach, idx) => (
                <li key={idx} style={{ marginBottom: '0.35rem' }}>
                  {typeof ach === 'string' ? ach : ach.title || ach.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* RIGHT MAIN CONTENT (66%) */}
      <main
        style={{
          width: '66%',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
        }}
      >
        {/* Name and Professional Title */}
        <header style={{ borderBottom: `2px solid ${themeColor}`, paddingBottom: '1.25rem' }}>
          <h1
            style={{
              fontSize: '24pt',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              margin: '0 0 0.4rem 0',
            }}
          >
            {personalInfo.fullName || 'Candidate Name'}
          </h1>
          {personalInfo.title && (
            <p
              style={{
                fontSize: '12pt',
                fontWeight: 600,
                color: themeColor,
                margin: 0,
              }}
            >
              {personalInfo.title}
            </p>
          )}
        </header>

        {/* Professional Summary */}
        {personalInfo.summary && (
          <section>
            <h2
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '0.3rem',
                marginBottom: '0.65rem',
              }}
            >
              Professional Profile
            </h2>
            <p style={{ margin: 0, color: '#475569', fontSize: '9.5pt', lineHeight: 1.6 }}>
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
                letterSpacing: '0.06em',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '0.3rem',
                marginBottom: '0.85rem',
              }}
            >
              Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '10pt', fontWeight: 700, color: '#0f172a' }}>{exp.position || exp.role}</span>
                    <span style={{ fontSize: '8.5pt', color: '#64748b', fontWeight: 500 }}>
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div style={{ fontSize: '9pt', fontWeight: 600, color: themeColor, marginBottom: '0.4rem' }}>
                    {exp.company} {exp.location ? `• ${exp.location}` : ''}
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
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '0.3rem',
                marginBottom: '0.85rem',
              }}
            >
              Key Projects
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '10pt', fontWeight: 700, color: '#0f172a' }}>
                      {proj.title || proj.name}
                    </span>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '8pt', color: themeColor, display: 'flex', alignItems: 'center', gap: '3px', textDecoration: 'none' }}>
                        View <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                  {proj.technologies && (
                    <div style={{ fontSize: '8.5pt', color: '#64748b', fontStyle: 'italic', marginBottom: '0.3rem' }}>
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
          <section>
            <h2
              style={{
                fontSize: '11pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0f172a',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '0.3rem',
                marginBottom: '0.85rem',
              }}
            >
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {education.map((edu, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '9.5pt', fontWeight: 700, color: '#0f172a' }}>
                      {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                    </span>
                    <span style={{ fontSize: '8.5pt', color: '#64748b' }}>
                      {edu.startDate ? `${edu.startDate} — ` : ''}{edu.endDate || edu.year}
                    </span>
                  </div>
                  <div style={{ fontSize: '9pt', color: '#475569' }}>
                    {edu.institution || edu.school} {edu.grade ? `• Grade/GPA: ${edu.grade}` : ''}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ModernSidebarTemplate;
