import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';

const DeveloperTemplate = ({ data = {} }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
    competitiveProgramming = [],
    achievements = [],
    themeColor = '#0f766e',
  } = data;

  return (
    <div
      className="developer-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#1e293b',
        fontFamily: "'Inter', monospace, sans-serif",
        fontSize: '9.5pt',
        lineHeight: 1.5,
        padding: '2.5rem',
        minHeight: '1123px',
      }}
    >
      {/* Dev Header */}
      <header
        style={{
          borderBottom: `2px solid ${themeColor}`,
          paddingBottom: '1.25rem',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <span style={{ color: themeColor, fontFamily: 'monospace', fontWeight: 700 }}>&gt;_</span>
            <h1
              style={{
                fontSize: '22pt',
                fontWeight: 900,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              {personalInfo.fullName || 'Developer Name'}
            </h1>
          </div>
          <div style={{ fontSize: '11.5pt', fontWeight: 600, color: themeColor, fontFamily: 'monospace' }}>
            {personalInfo.title || 'Software Engineer'}
          </div>
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
          <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.2rem' }}>
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px', backgroundColor: '#f1f5f9', padding: '0.15rem 0.4rem', borderRadius: '3px' }}>
                <Github size={11} /> GitHub
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px', backgroundColor: '#f1f5f9', padding: '0.15rem 0.4rem', borderRadius: '3px' }}>
                <Linkedin size={11} /> LinkedIn
              </a>
            )}
            {personalInfo.website && (
              <a href={personalInfo.website} target="_blank" rel="noreferrer" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px', backgroundColor: '#f1f5f9', padding: '0.15rem 0.4rem', borderRadius: '3px' }}>
                <Globe size={11} /> Web
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '1.25rem' }}>
          <p style={{ margin: 0, color: '#334155', fontSize: '9pt', lineHeight: 1.55 }}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Technical Skills Categorized */}
      {skills.length > 0 && (
        <section style={{ marginBottom: '1.35rem', backgroundColor: '#f8fafc', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '9.5pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, letterSpacing: '0.06em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Terminal size={14} /> Technical Arsenal & Skills
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {skills.map((s, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: `1px solid ${themeColor}44`,
                  color: '#0f172a',
                  borderRadius: '3px',
                  padding: '0.15rem 0.5rem',
                  fontSize: '8.5pt',
                  fontWeight: 600,
                  fontFamily: 'monospace',
                }}
              >
                {typeof s === 'string' ? s : s.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2
            style={{
              fontSize: '10.5pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#0f172a',
              letterSpacing: '0.05em',
              borderBottom: `1.5px solid ${themeColor}`,
              paddingBottom: '0.25rem',
              marginBottom: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Code2 size={16} color={themeColor} /> Featured Technical Projects
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((proj, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '10pt', fontWeight: 700, color: '#0f172a' }}>
                    {proj.title || proj.name}
                  </span>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" style={{ fontSize: '8pt', color: themeColor, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 600 }}>
                      Code/Demo <ExternalLink size={10} />
                    </a>
                  )}
                </div>
                {proj.technologies && (
                  <div style={{ fontSize: '8.5pt', color: themeColor, fontFamily: 'monospace', fontWeight: 600, margin: '0.15rem 0 0.3rem' }}>
                    [Stack: {proj.technologies}]
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

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2
            style={{
              fontSize: '10.5pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#0f172a',
              letterSpacing: '0.05em',
              borderBottom: `1.5px solid ${themeColor}`,
              paddingBottom: '0.25rem',
              marginBottom: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Cpu size={16} color={themeColor} /> Work & Engineering Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '10pt', fontWeight: 700, color: '#0f172a' }}>{exp.position || exp.role}</span>
                  <span style={{ fontSize: '8.5pt', color: '#64748b' }}>
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div style={{ fontSize: '9pt', color: themeColor, fontWeight: 600, marginBottom: '0.25rem' }}>
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

      {/* Bottom Grid: Education & Certifications/Competitive Programming */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: '10pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#0f172a',
                borderBottom: `1.5px solid ${themeColor}`,
                paddingBottom: '0.2rem',
                marginBottom: '0.6rem',
              }}
            >
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {education.map((edu, idx) => (
                <div key={idx}>
                  <div style={{ fontWeight: 700, fontSize: '9.5pt', color: '#0f172a' }}>
                    {edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}
                  </div>
                  <div style={{ fontSize: '8.5pt', color: '#64748b' }}>
                    {edu.institution} {edu.endDate ? `(${edu.endDate})` : ''}
                  </div>
                  {edu.grade && <div style={{ fontSize: '8pt', color: themeColor }}>GPA: {edu.grade}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications or Competitive Programming */}
        <div>
          {competitiveProgramming.length > 0 && (
            <section style={{ marginBottom: '0.75rem' }}>
              <h2
                style={{
                  fontSize: '10pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#0f172a',
                  borderBottom: `1.5px solid ${themeColor}`,
                  paddingBottom: '0.2rem',
                  marginBottom: '0.5rem',
                }}
              >
                Coding Profiles
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '8.5pt' }}>
                {competitiveProgramming.map((cp, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600 }}>{cp.platform}:</span>
                    <span style={{ color: themeColor, fontFamily: 'monospace' }}>{cp.rating || cp.solvedCount ? `${cp.rating || ''} (${cp.solvedCount || ''} solved)` : cp.handle}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '10pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#0f172a',
                  borderBottom: `1.5px solid ${themeColor}`,
                  paddingBottom: '0.2rem',
                  marginBottom: '0.5rem',
                }}
              >
                Certifications
              </h2>
              <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '8.5pt', color: '#475569' }}>
                {certifications.map((c, idx) => (
                  <li key={idx} style={{ marginBottom: '0.25rem' }}>
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

export default DeveloperTemplate;
