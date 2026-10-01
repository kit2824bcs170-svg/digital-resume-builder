import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, ExternalLink } from 'lucide-react';

const ExecutiveTemplate = ({ data = {} }) => {
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
    themeColor = '#1e293b',
  } = data;

  const cleanUrl = (url = '') => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <div
      className="executive-template"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#1e293b',
        backgroundColor: '#ffffff',
        padding: '2.5rem 2.75rem',
        fontSize: '9.25pt',
        lineHeight: 1.45,
        boxSizing: 'border-box',
      }}
    >
      {/* Top Banner Header */}
      <header
        style={{
          borderBottom: `2.5px solid ${themeColor}`,
          paddingBottom: '1.25rem',
          marginBottom: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '22pt',
              fontWeight: 800,
              color: themeColor,
              margin: '0 0 0.25rem 0',
              letterSpacing: '-0.02em',
            }}
          >
            {personalInfo.fullName || 'Your Full Name'}
          </h1>
          <p
            style={{
              fontSize: '11pt',
              fontWeight: 600,
              color: '#475569',
              margin: 0,
            }}
          >
            {personalInfo.professionalTitle || 'Software Engineer & Technologist'}
          </p>
        </div>

        {/* Contact Info Pills */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '0.25rem',
            fontSize: '8.5pt',
            color: '#475569',
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {personalInfo.email && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Mail size={12} color={themeColor} />
                <a href={`mailto:${personalInfo.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {personalInfo.email}
                </a>
              </span>
            )}
            {personalInfo.phone && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Phone size={12} color={themeColor} />
                <span>{personalInfo.phone}</span>
              </span>
            )}
            {personalInfo.location && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <MapPin size={12} color={themeColor} />
                <span>{personalInfo.location}</span>
              </span>
            )}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {personalInfo.linkedin && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Linkedin size={12} color={themeColor} />
                <a
                  href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {cleanUrl(personalInfo.linkedin)}
                </a>
              </span>
            )}
            {personalInfo.github && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Github size={12} color={themeColor} />
                <a
                  href={personalInfo.github.startsWith('http') ? personalInfo.github : `https://${personalInfo.github}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {cleanUrl(personalInfo.github)}
                </a>
              </span>
            )}
            {personalInfo.portfolio && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <Globe size={12} color={themeColor} />
                <a
                  href={personalInfo.portfolio.startsWith('http') ? personalInfo.portfolio : `https://${personalInfo.portfolio}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {cleanUrl(personalInfo.portfolio)}
                </a>
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '1.1rem' }}>
          <p style={{ margin: 0, color: '#334155', fontSize: '9pt', lineHeight: 1.5 }}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '1.15rem' }}>
          <h2
            style={{
              fontSize: '10.5pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: themeColor,
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '0.25rem',
              margin: '0 0 0.6rem 0',
            }}
          >
            Professional Experience
          </h2>
          {experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '0.65rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <strong style={{ fontSize: '9.75pt', color: '#0f172a' }}>{exp.jobTitle}</strong>
                  <span style={{ color: '#64748b' }}> • {exp.company}</span>
                  {exp.location && <span style={{ color: '#94a3b8', fontSize: '8.5pt' }}> ({exp.location})</span>}
                </div>
                <span style={{ fontSize: '8.5pt', fontWeight: 600, color: '#64748b' }}>
                  {exp.startDate} {exp.startDate && (exp.endDate || exp.current) ? '–' : ''} {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              {exp.description && (
                <div style={{ marginTop: '0.25rem', paddingLeft: '0.9rem', fontSize: '8.75pt', color: '#334155' }}>
                  {exp.description.split('\n').map((line, lIdx) => {
                    const trimmed = line.trim().replace(/^•\s*/, '');
                    if (!trimmed) return null;
                    return (
                      <div key={lIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.15rem' }}>
                        <span style={{ color: themeColor }}>•</span>
                        <span style={{ flex: 1 }}>{trimmed}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '1.15rem' }}>
          <h2
            style={{
              fontSize: '10.5pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: themeColor,
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '0.25rem',
              margin: '0 0 0.6rem 0',
            }}
          >
            Key Projects & Systems
          </h2>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ marginBottom: '0.55rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <strong style={{ fontSize: '9.5pt', color: '#0f172a' }}>{proj.name || proj.title}</strong>
                  {proj.technologies && (
                    <span style={{ fontSize: '8.5pt', color: '#64748b', fontStyle: 'italic', marginLeft: '0.4rem' }}>
                      [{proj.technologies}]
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '8.5pt', whiteSpace: 'nowrap' }}>
                  {(proj.projectLink || proj.liveLink || proj.githubLink) && (
                    <a
                      href={proj.projectLink || proj.liveLink || proj.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: themeColor, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                    >
                      <span>Demo</span>
                      <ExternalLink size={10} />
                    </a>
                  )}
                  {proj.date && <span style={{ color: '#94a3b8', marginLeft: '0.4rem' }}>• {proj.date}</span>}
                </div>
              </div>
              {proj.description && (
                <div style={{ marginTop: '0.2rem', paddingLeft: '0.9rem', fontSize: '8.75pt', color: '#334155' }}>
                  {proj.description.split('\n').map((line, lIdx) => {
                    const trimmed = line.trim().replace(/^•\s*/, '');
                    if (!trimmed) return null;
                    return (
                      <div key={lIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.15rem' }}>
                        <span style={{ color: themeColor }}>•</span>
                        <span style={{ flex: 1 }}>{trimmed}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* 2-Column Row: Skills & Education */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.1rem' }}>
        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: '10.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: themeColor,
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '0.25rem',
                margin: '0 0 0.5rem 0',
              }}
            >
              Core Competencies
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {skills.map((skill, idx) => {
                const name = typeof skill === 'string' ? skill : skill.name;
                return (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: '#f1f5f9',
                      color: '#334155',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      fontSize: '8.5pt',
                      fontWeight: 600,
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: '10.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: themeColor,
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '0.25rem',
                margin: '0 0 0.5rem 0',
              }}
            >
              Education & Academics
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '0.45rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <strong style={{ fontSize: '9.25pt', color: '#0f172a' }}>{edu.institution}</strong>
                  <span style={{ fontSize: '8.5pt', color: '#64748b' }}>
                    {edu.startYear} – {edu.endYear}
                  </span>
                </div>
                <div style={{ fontSize: '8.75pt', color: '#475569' }}>
                  {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                </div>
                {(edu.score || edu.cgpa) && (
                  <div style={{ fontSize: '8.25pt', color: themeColor, fontWeight: 700 }}>
                    CGPA / Score: {edu.score || edu.cgpa}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Competitive Programming */}
      {competitiveProgramming.length > 0 && (
        <section style={{ marginBottom: '1rem' }}>
          <h2
            style={{
              fontSize: '10pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: themeColor,
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '0.25rem',
              margin: '0 0 0.4rem 0',
            }}
          >
            Competitive Programming
          </h2>
          <div style={{ fontSize: '8.75pt', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {competitiveProgramming.map((cp, idx) => (
              <div key={idx} style={{ color: '#334155' }}>
                <strong style={{ color: '#0f172a' }}>{cp.platform}:</strong> {cp.details}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Achievements */}
      {(certifications.length > 0 || achievements.length > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {certifications.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '10pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: themeColor,
                  borderBottom: '1px solid #e2e8f0',
                  paddingBottom: '0.25rem',
                  margin: '0 0 0.4rem 0',
                }}
              >
                Certifications
              </h2>
              <div style={{ fontSize: '8.75pt', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {certifications.map((cert, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#334155' }}>
                      {cert.organization ? `${cert.organization} – ` : ''}
                      <strong>{cert.name}</strong>
                    </span>
                    <span style={{ color: '#64748b', fontSize: '8pt', whiteSpace: 'nowrap' }}>
                      {cert.issueDate || cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {achievements.length > 0 && (
            <section>
              <h2
                style={{
                  fontSize: '10pt',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: themeColor,
                  borderBottom: '1px solid #e2e8f0',
                  paddingBottom: '0.25rem',
                  margin: '0 0 0.4rem 0',
                }}
              >
                Key Honors & Awards
              </h2>
              <div style={{ fontSize: '8.75pt', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {achievements.map((ach, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.35rem' }}>
                    <span style={{ color: themeColor }}>•</span>
                    <span style={{ color: '#334155', flex: 1 }}>
                      <strong>{ach.title}</strong>{ach.description ? `: ${ach.description}` : ''}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default ExecutiveTemplate;
