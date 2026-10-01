import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

const ClassicTemplate = ({ data = {} }) => {
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
    themeColor = '#1e3a8a',
  } = data;

  return (
    <div
      className="classic-template"
      style={{
        fontFamily: "'Merriweather', Georgia, serif",
        color: '#1f2937',
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        fontSize: '11pt',
        lineHeight: 1.5,
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', borderBottom: `2px solid ${themeColor}`, paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
        <h1 style={{
          fontSize: '24pt',
          fontWeight: 700,
          color: themeColor,
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: '-0.02em',
          marginBottom: '0.25rem',
        }}>
          {personalInfo.fullName || 'Your Full Name'}
        </h1>
        {personalInfo.professionalTitle && (
          <p style={{
            fontSize: '12pt',
            fontStyle: 'italic',
            color: '#4b5563',
            marginBottom: '0.75rem',
          }}>
            {personalInfo.professionalTitle}
          </p>
        )}

        {/* Contact Strip */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.85rem',
          fontSize: '9pt',
          color: '#4b5563',
          fontFamily: "'Inter', sans-serif",
        }}>
          {personalInfo.email && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <Mail size={12} /> {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <Phone size={12} /> {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={12} /> {personalInfo.location}
            </span>
          )}
          {personalInfo.linkedin && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <Linkedin size={12} /> {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
            </span>
          )}
          {personalInfo.github && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <Github size={12} /> {personalInfo.github.replace(/^https?:\/\/(www\.)?/, '')}
            </span>
          )}
          {personalInfo.portfolio && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <Globe size={12} /> {personalInfo.portfolio.replace(/^https?:\/\/(www\.)?/, '')}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2 style={{
            fontSize: '12pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: themeColor,
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.25rem',
            marginBottom: '0.5rem',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Professional Summary
          </h2>
          <p style={{ fontSize: '10pt', color: '#374151', textAlign: 'justify' }}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2 style={{
            fontSize: '12pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: themeColor,
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.25rem',
            marginBottom: '0.65rem',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Experience
          </h2>
          {experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 700, fontSize: '10.5pt', color: '#111827' }}>
                  {exp.jobTitle || 'Role'} <span style={{ fontWeight: 400, color: '#4b5563' }}>at {exp.company || 'Company'}</span>
                </span>
                <span style={{ fontSize: '9pt', color: '#6b7280', fontStyle: 'italic', fontFamily: "'Inter', sans-serif" }}>
                  {exp.startDate} – {exp.current ? 'Present' : exp.endDate} {exp.location && `| ${exp.location}`}
                </span>
              </div>
              {exp.description && (
                <p style={{ fontSize: '9.5pt', color: '#374151', marginTop: '0.25rem', whiteSpace: 'pre-line' }}>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2 style={{
            fontSize: '12pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: themeColor,
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.25rem',
            marginBottom: '0.65rem',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: '0.6rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 700, fontSize: '10.5pt', color: '#111827' }}>
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </span>
                <span style={{ fontSize: '9pt', color: '#6b7280', fontStyle: 'italic', fontFamily: "'Inter', sans-serif" }}>
                  {edu.startYear} – {edu.endYear}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5pt', color: '#4b5563' }}>
                <span>{edu.institution}</span>
                {(edu.score || edu.cgpa) && <span style={{ fontWeight: 600 }}>Score: {edu.score || edu.cgpa}</span>}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2 style={{
            fontSize: '12pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: themeColor,
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.25rem',
            marginBottom: '0.65rem',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Key Projects
          </h2>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 700, fontSize: '10.5pt', color: '#111827' }}>
                  {proj.name || proj.title}
                </span>
                <div style={{ fontSize: '8.5pt', color: '#4b5563', fontFamily: "'Inter', sans-serif", display: 'flex', gap: '0.5rem' }}>
                  {proj.githubLink && <span>[GitHub]</span>}
                  {(proj.projectLink || proj.liveLink) && <span>[Demo]</span>}
                </div>
              </div>
              {proj.technologies && (
                <p style={{ fontSize: '9pt', fontStyle: 'italic', color: '#6b7280', margin: '0.1rem 0' }}>
                  Technologies: {proj.technologies}
                </p>
              )}
              {proj.description && (
                <p style={{ fontSize: '9.5pt', color: '#374151', marginTop: '0.15rem' }}>
                  {proj.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2 style={{
            fontSize: '12pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: themeColor,
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.25rem',
            marginBottom: '0.5rem',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Skills & Competencies
          </h2>
          <p style={{ fontSize: '9.5pt', color: '#374151', lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
            {skills.map((skill, idx) => (
              <span key={idx}>
                <strong>{skill.name}</strong>
                {skill.level && ` (${skill.level})`}
                {idx < skills.length - 1 ? '  •  ' : ''}
              </span>
            ))}
          </p>
        </section>
      )}

      {/* Competitive Programming */}
      {competitiveProgramming.length > 0 && (
        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={{
            fontSize: '11pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: themeColor,
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.25rem',
            marginBottom: '0.5rem',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Competitive Programming
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '9pt' }}>
            {competitiveProgramming.map((cp, idx) => (
              <div key={idx} style={{ color: '#1f2937' }}>
                <strong style={{ color: '#111827' }}>{cp.platform}:</strong> {cp.details}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Achievements in two columns */}
      {(certifications.length > 0 || achievements.length > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: certifications.length > 0 && achievements.length > 0 ? '1fr 1fr' : '1fr', gap: '1.5rem', marginBottom: '1.4rem' }}>
          {certifications.length > 0 && (
            <div>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: themeColor,
                borderBottom: '1px solid #e5e7eb',
                paddingBottom: '0.25rem',
                marginBottom: '0.5rem',
                fontFamily: "'Outfit', sans-serif",
              }}>
                Certifications
              </h2>
              {certifications.map((cert, idx) => (
                <div key={idx} style={{ marginBottom: '0.4rem', fontSize: '9pt' }}>
                  <div style={{ fontWeight: 700, color: '#111827' }}>{cert.name}</div>
                  <div style={{ color: '#6b7280' }}>
                    {cert.organization} {(cert.issueDate || cert.date) && `(${cert.issueDate || cert.date})`}
                  </div>
                </div>
              ))}
            </div>
          )}

          {achievements.length > 0 && (
            <div>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: themeColor,
                borderBottom: '1px solid #e5e7eb',
                paddingBottom: '0.25rem',
                marginBottom: '0.5rem',
                fontFamily: "'Outfit', sans-serif",
              }}>
                Achievements
              </h2>
              {achievements.map((ach, idx) => (
                <div key={idx} style={{ marginBottom: '0.4rem', fontSize: '9pt' }}>
                  <div style={{ fontWeight: 700, color: '#111827' }}>{ach.title}</div>
                  <div style={{ color: '#4b5563' }}>{ach.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section>
          <h2 style={{
            fontSize: '11pt',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: themeColor,
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '0.25rem',
            marginBottom: '0.4rem',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Languages
          </h2>
          <p style={{ fontSize: '9pt', color: '#374151', fontFamily: "'Inter', sans-serif" }}>
            {languages.map((l, idx) => (
              <span key={idx}>
                {l.language || l.name} ({l.proficiency})
                {idx < languages.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
