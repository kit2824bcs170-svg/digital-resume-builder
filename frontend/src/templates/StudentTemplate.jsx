import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, GraduationCap, Award, BookOpen } from 'lucide-react';

const StudentTemplate = ({ data = {} }) => {
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
    themeColor = '#0284c7',
  } = data;

  return (
    <div
      className="student-template"
      style={{
        backgroundColor: '#ffffff',
        color: '#1e293b',
        fontFamily: "'Inter', sans-serif",
        fontSize: '9.5pt',
        lineHeight: 1.5,
        padding: '2.5rem',
        minHeight: '1123px',
      }}
    >
      {/* Student Clean Centered Header */}
      <header
        style={{
          textAlign: 'center',
          borderBottom: `2.5px solid ${themeColor}`,
          paddingBottom: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <h1
          style={{
            fontSize: '24pt',
            fontWeight: 900,
            color: '#0f172a',
            margin: '0 0 0.25rem 0',
            letterSpacing: '-0.02em',
          }}
        >
          {personalInfo.fullName || 'Graduate Name'}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '11.5pt', fontWeight: 600, color: themeColor, marginBottom: '0.5rem' }}>
            {personalInfo.title}
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.85rem', fontSize: '8.5pt', color: '#475569' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: themeColor, textDecoration: 'none', fontWeight: 600 }}>
              • LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: themeColor, textDecoration: 'none', fontWeight: 600 }}>
              • GitHub
            </a>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '10.5pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, letterSpacing: '0.05em', borderBottom: `1.5px solid ${themeColor}33`, paddingBottom: '0.2rem', marginBottom: '0.4rem' }}>
            Career Objective
          </h2>
          <p style={{ margin: 0, color: '#475569', fontSize: '9pt', lineHeight: 1.55 }}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Education First (Crucial for students!) */}
      {education.length > 0 && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2 style={{ fontSize: '10.5pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, letterSpacing: '0.05em', borderBottom: `1.5px solid ${themeColor}33`, paddingBottom: '0.2rem', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <GraduationCap size={16} /> Education & Academic Background
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '10pt', color: '#0f172a' }}>
                    {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                  </div>
                  <div style={{ fontSize: '9pt', color: '#475569' }}>
                    {edu.institution || edu.school}
                  </div>
                  {edu.grade && (
                    <div style={{ fontSize: '8.5pt', color: themeColor, fontWeight: 700, marginTop: '2px' }}>
                      CGPA / Score: {edu.grade}
                    </div>
                  )}
                </div>
                <div style={{ fontSize: '8.5pt', color: '#64748b', fontWeight: 600 }}>
                  {edu.startDate ? `${edu.startDate} – ` : ''}{edu.endDate || edu.year}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical & Core Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2 style={{ fontSize: '10.5pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, letterSpacing: '0.05em', borderBottom: `1.5px solid ${themeColor}33`, paddingBottom: '0.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Technical & Soft Skills
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {skills.map((s, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  color: '#1e293b',
                  borderRadius: '999px',
                  padding: '0.2rem 0.6rem',
                  fontSize: '8.5pt',
                  fontWeight: 600,
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
          <h2 style={{ fontSize: '10.5pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, letterSpacing: '0.05em', borderBottom: `1.5px solid ${themeColor}33`, paddingBottom: '0.2rem', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Academic & Personal Projects
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
                      Project Link
                    </a>
                  )}
                </div>
                {proj.technologies && (
                  <div style={{ fontSize: '8.5pt', color: '#64748b', fontStyle: 'italic', marginBottom: '0.2rem' }}>
                    Tech Stack: {proj.technologies}
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

      {/* Internships & Experience (if any) */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '1.4rem' }}>
          <h2 style={{ fontSize: '10.5pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, letterSpacing: '0.05em', borderBottom: `1.5px solid ${themeColor}33`, paddingBottom: '0.2rem', marginBottom: '0.65rem' }}>
            Internships & Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '9.5pt' }}>
                  <span>{exp.position || exp.role} — {exp.company}</span>
                  <span style={{ fontSize: '8.5pt', color: '#64748b', fontWeight: 500 }}>
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                {exp.description && (
                  <p style={{ margin: '0.25rem 0 0', color: '#475569', fontSize: '9pt', lineHeight: 1.5 }}>
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications & Honors */}
      {(certifications.length > 0 || achievements.length > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {certifications.length > 0 && (
            <section>
              <h2 style={{ fontSize: '10pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, borderBottom: `1px solid ${themeColor}33`, paddingBottom: '0.2rem', marginBottom: '0.4rem' }}>
                Certifications
              </h2>
              <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '8.5pt', color: '#475569' }}>
                {certifications.map((c, idx) => (
                  <li key={idx} style={{ marginBottom: '0.2rem' }}>
                    <strong>{c.name || c.title}</strong> ({c.issuer})
                  </li>
                ))}
              </ul>
            </section>
          )}

          {achievements.length > 0 && (
            <section>
              <h2 style={{ fontSize: '10pt', fontWeight: 800, textTransform: 'uppercase', color: themeColor, borderBottom: `1px solid ${themeColor}33`, paddingBottom: '0.2rem', marginBottom: '0.4rem' }}>
                Extracurricular Honors
              </h2>
              <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '8.5pt', color: '#475569' }}>
                {achievements.map((a, idx) => (
                  <li key={idx} style={{ marginBottom: '0.2rem' }}>
                    {typeof a === 'string' ? a : a.title || a.description}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentTemplate;
