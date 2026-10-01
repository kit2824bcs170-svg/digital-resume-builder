import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink, Calendar, Award } from 'lucide-react';

const ModernTemplate = ({ data = {} }) => {
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
    themeColor = '#2563eb',
  } = data;

  return (
    <div
      className="modern-template"
      style={{
        fontFamily: "'Inter', sans-serif",
        color: '#1e293b',
        backgroundColor: '#ffffff',
        display: 'grid',
        gridTemplateColumns: '220px 1fr',
        minHeight: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* LEFT SIDEBAR */}
      <aside
        style={{
          backgroundColor: '#f8fafc',
          borderRight: `2px solid #e2e8f0`,
          padding: '2rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {/* Contact Info */}
        <section>
          <h3
            style={{
              fontSize: '9.5pt',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: themeColor,
              marginBottom: '0.75rem',
              borderBottom: `2px solid ${themeColor}`,
              paddingBottom: '0.2rem',
            }}
          >
            Contact
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '8.5pt', color: '#475569' }}>
            {personalInfo.email && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', wordBreak: 'break-all' }}>
                <Mail size={12} color={themeColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={12} color={themeColor} style={{ flexShrink: 0 }} />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={12} color={themeColor} style={{ flexShrink: 0 }} />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', wordBreak: 'break-all' }}>
                <Linkedin size={12} color={themeColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
              </div>
            )}
            {personalInfo.github && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', wordBreak: 'break-all' }}>
                <Github size={12} color={themeColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{personalInfo.github.replace(/^https?:\/\/(www\.)?/, '')}</span>
              </div>
            )}
            {personalInfo.portfolio && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', wordBreak: 'break-all' }}>
                <Globe size={12} color={themeColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{personalInfo.portfolio.replace(/^https?:\/\/(www\.)?/, '')}</span>
              </div>
            )}
          </div>
        </section>

        {/* Education in Sidebar */}
        {education.length > 0 && (
          <section>
            <h3
              style={{
                fontSize: '9.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: themeColor,
                marginBottom: '0.75rem',
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '0.2rem',
              }}
            >
              Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {education.map((edu, idx) => (
                <div key={idx} style={{ fontSize: '8.5pt' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{edu.degree}</div>
                  {edu.fieldOfStudy && <div style={{ color: '#475569' }}>{edu.fieldOfStudy}</div>}
                  <div style={{ color: '#64748b' }}>{edu.institution}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '8pt', marginTop: '2px' }}>
                    <span>{edu.startYear} – {edu.endYear}</span>
                    {(edu.score || edu.cgpa) && <span style={{ fontWeight: 600, color: themeColor }}>{edu.score || edu.cgpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h3
              style={{
                fontSize: '9.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: themeColor,
                marginBottom: '0.75rem',
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '0.2rem',
              }}
            >
              Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '8pt',
                    fontWeight: 600,
                    backgroundColor: '#ffffff',
                    color: '#1e293b',
                    padding: '0.2rem 0.45rem',
                    borderRadius: '4px',
                    border: '1px solid #cbd5e1',
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <section>
            <h3
              style={{
                fontSize: '9.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: themeColor,
                marginBottom: '0.6rem',
                borderBottom: `2px solid ${themeColor}`,
                paddingBottom: '0.2rem',
              }}
            >
              Languages
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '8.5pt' }}>
              {languages.map((l, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', color: '#334155' }}>
                  <span style={{ fontWeight: 600 }}>{l.language || l.name}</span>
                  <span style={{ color: '#64748b', fontSize: '8pt' }}>{l.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </aside>

      {/* RIGHT MAIN CONTENT */}
      <main style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
        {/* Main Header */}
        <header>
          <h1
            style={{
              fontSize: '22pt',
              fontWeight: 800,
              fontFamily: "'Outfit', sans-serif",
              color: '#0f172a',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            {personalInfo.fullName || 'Your Full Name'}
          </h1>
          {personalInfo.professionalTitle && (
            <p
              style={{
                fontSize: '11pt',
                fontWeight: 600,
                color: themeColor,
                marginTop: '0.2rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {personalInfo.professionalTitle}
            </p>
          )}
        </header>

        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <h3
              style={{
                fontSize: '10.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0f172a',
                borderBottom: '1.5px solid #e2e8f0',
                paddingBottom: '0.25rem',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span style={{ width: '4px', height: '14px', backgroundColor: themeColor, borderRadius: '2px' }} />
              Profile Summary
            </h3>
            <p style={{ fontSize: '9.25pt', color: '#334155', lineHeight: 1.55 }}>
              {personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h3
              style={{
                fontSize: '10.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0f172a',
                borderBottom: '1.5px solid #e2e8f0',
                paddingBottom: '0.25rem',
                marginBottom: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span style={{ width: '4px', height: '14px', backgroundColor: themeColor, borderRadius: '2px' }} />
              Work Experience
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: 700, fontSize: '10pt', color: '#0f172a' }}>
                      {exp.jobTitle}
                    </span>
                    <span style={{ fontSize: '8.5pt', color: '#64748b' }}>
                      {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div style={{ fontSize: '8.75pt', color: themeColor, fontWeight: 600, marginBottom: '0.2rem' }}>
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </div>
                  {exp.description && (
                    <p style={{ fontSize: '9pt', color: '#475569', lineHeight: 1.45, whiteSpace: 'pre-line' }}>
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
            <h3
              style={{
                fontSize: '10.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#0f172a',
                borderBottom: '1.5px solid #e2e8f0',
                paddingBottom: '0.25rem',
                marginBottom: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span style={{ width: '4px', height: '14px', backgroundColor: themeColor, borderRadius: '2px' }} />
              Featured Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {projects.map((proj, idx) => (
                <div key={idx} style={{ backgroundColor: '#f8fafc', padding: '0.65rem 0.85rem', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: 700, fontSize: '9.5pt', color: '#0f172a' }}>
                      {proj.name || proj.title}
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem', fontSize: '8pt' }}>
                      {proj.githubLink && (
                        <a href={proj.githubLink} target="_blank" rel="noreferrer" style={{ color: themeColor, fontWeight: 600 }}>
                          Code ↗
                        </a>
                      )}
                      {(proj.projectLink || proj.liveLink) && (
                        <a href={proj.projectLink || proj.liveLink} target="_blank" rel="noreferrer" style={{ color: '#059669', fontWeight: 600 }}>
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                  {proj.technologies && (
                    <div style={{ fontSize: '8pt', color: '#64748b', margin: '0.15rem 0' }}>
                      Stack: <span style={{ color: '#334155', fontWeight: 500 }}>{proj.technologies}</span>
                    </div>
                  )}
                  {proj.description && (
                    <p style={{ fontSize: '8.75pt', color: '#475569', lineHeight: 1.4, marginTop: '0.2rem' }}>
                      {proj.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Competitive Programming */}
        {competitiveProgramming.length > 0 && (
          <section>
            <h3
              style={{
                fontSize: '9.5pt',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#0f172a',
                marginBottom: '0.4rem',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '0.2rem',
              }}
            >
              Competitive Programming
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '8.5pt' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: certifications.length > 0 && achievements.length > 0 ? '1fr 1fr' : '1fr', gap: '1rem' }}>
            {certifications.length > 0 && (
              <section>
                <h3 style={{ fontSize: '9.5pt', fontWeight: 800, textTransform: 'uppercase', color: '#0f172a', marginBottom: '0.4rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.2rem' }}>
                  Certifications
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '8.5pt' }}>
                  {certifications.map((c, idx) => (
                    <div key={idx}>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{c.name}</div>
                      <div style={{ color: '#64748b', fontSize: '8pt' }}>
                        {c.organization} {(c.issueDate || c.date) && `(${c.issueDate || c.date})`}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {achievements.length > 0 && (
              <section>
                <h3 style={{ fontSize: '9.5pt', fontWeight: 800, textTransform: 'uppercase', color: '#0f172a', marginBottom: '0.4rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.2rem' }}>
                  Achievements
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '8.5pt' }}>
                  {achievements.map((a, idx) => (
                    <div key={idx}>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{a.title}</div>
                      <div style={{ color: '#64748b', fontSize: '8pt' }}>{a.description}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ModernTemplate;
