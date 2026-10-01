import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, ExternalLink } from 'lucide-react';

const PlacementTemplate = ({ data = {} }) => {
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
    themeColor = '#000000',
  } = data;

  const cleanUrl = (url = '') => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  const getCleanUsername = (url = '', prefix = '') => {
    if (!url) return '';
    const cleaned = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
    if (prefix && cleaned.includes(prefix)) {
      return cleaned.split(prefix)[1] || cleaned;
    }
    return cleaned;
  };

  const formatScore = (val) => {
    if (!val) return '';
    const str = String(val).trim();
    if (/cgpa/i.test(str) || /gpa/i.test(str)) {
      return /current/i.test(str) ? str : `Current ${str}`;
    }
    if (/%/.test(str)) return `Percentage: ${str}`;
    return `Current CGPA: ${str}`;
  };

  const getSkillName = (s) => (typeof s === 'string' ? s : s?.name || '');

  // Check if data is completely empty to prevent blank rendering
  const isEmpty =
    (!personalInfo.fullName || personalInfo.fullName.includes('Untitled')) &&
    education.length === 0 &&
    skills.length === 0 &&
    projects.length === 0 &&
    experience.length === 0;

  return (
    <div
      className="placement-template"
      style={{
        fontFamily: "'Cambria', 'Georgia', 'Times New Roman', serif",
        color: '#000000',
        backgroundColor: '#ffffff',
        padding: '2rem 2.25rem',
        fontSize: '9.5pt',
        lineHeight: 1.35,
        boxSizing: 'border-box',
        minHeight: '1123px',
      }}
    >
      {/* HEADER: Centered Candidate Name & Contact Separated by | */}
      <header style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
        <h1
          style={{
            fontSize: '21pt',
            fontWeight: 700,
            letterSpacing: '0.01em',
            margin: '0 0 0.35rem 0',
            fontFamily: "'Cambria', 'Georgia', serif",
            color: '#000000',
          }}
        >
          {personalInfo.fullName || 'Candidate Name'}
        </h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '9pt',
            color: '#111827',
          }}
        >
          {personalInfo.location && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
              <MapPin size={11} />
              <span>{personalInfo.location}</span>
            </span>
          )}

          {personalInfo.email && (
            <>
              {personalInfo.location && <span>|</span>}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                <Mail size={11} />
                <a href={`mailto:${personalInfo.email}`} style={{ color: '#0951b5', textDecoration: 'underline' }}>
                  {personalInfo.email}
                </a>
              </span>
            </>
          )}

          {personalInfo.phone && (
            <>
              <span>|</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                <Phone size={11} />
                <span>{personalInfo.phone}</span>
              </span>
            </>
          )}

          {personalInfo.linkedin && (
            <>
              <span>|</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                <Linkedin size={11} />
                <a
                  href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#0951b5', textDecoration: 'underline' }}
                >
                  {getCleanUsername(personalInfo.linkedin, 'linkedin.com/in/')}
                </a>
              </span>
            </>
          )}

          {personalInfo.github && (
            <>
              <span>|</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                <Github size={11} />
                <a
                  href={personalInfo.github.startsWith('http') ? personalInfo.github : `https://github.com/${personalInfo.github}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#0951b5', textDecoration: 'underline' }}
                >
                  {getCleanUsername(personalInfo.github, 'github.com/')}
                </a>
              </span>
            </>
          )}

          {personalInfo.portfolio && (
            <>
              <span>|</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                <Globe size={11} />
                <a
                  href={personalInfo.portfolio.startsWith('http') ? personalInfo.portfolio : `https://${personalInfo.portfolio}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#0951b5', textDecoration: 'underline' }}
                >
                  {cleanUrl(personalInfo.portfolio)}
                </a>
              </span>
            </>
          )}
        </div>
      </header>

      {/* Helpful banner if resume is blank */}
      {isEmpty && (
        <div
          className="no-print"
          style={{
            backgroundColor: '#eff6ff',
            border: '1px dashed #3b82f6',
            borderRadius: '6px',
            padding: '0.75rem 1rem',
            margin: '0.75rem 0 1rem',
            textAlign: 'center',
            fontSize: '8.5pt',
            color: '#1e40af',
          }}
        >
          💡 <strong>Campus Placement Template:</strong> Start filling out your details in the left editor to preview your resume in this clean, professional A4 format.
        </div>
      )}

      {/* 1. EDUCATION */}
      {education.length > 0 && (
        <section style={{ marginBottom: '0.75rem' }}>
          <h2
            style={{
              fontSize: '10.5pt',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              borderBottom: '1px solid #000000',
              paddingBottom: '1px',
              margin: '0 0 0.35rem 0',
            }}
          >
            Education
          </h2>

          {education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: '0.35rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '10pt', color: '#000000' }}>
                  {edu.institution}
                </strong>
                <span style={{ fontSize: '9pt', fontWeight: 600 }}>
                  {edu.startYear} {edu.startYear && edu.endYear ? '–' : ''} {edu.endYear}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '9.25pt' }}>
                <span>
                  {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                </span>
                {(edu.score || edu.cgpa) && (
                  <span style={{ fontWeight: 700 }}>
                    {formatScore(edu.score || edu.cgpa)}
                  </span>
                )}
              </div>

              {edu.coursework && (
                <div style={{ fontSize: '9pt', marginTop: '0.1rem', color: '#1f2937' }}>
                  <strong>Coursework:</strong> {edu.coursework}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* 2. EXPERIENCE */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '0.75rem' }}>
          <h2
            style={{
              fontSize: '10.5pt',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              borderBottom: '1px solid #000000',
              paddingBottom: '1px',
              margin: '0 0 0.35rem 0',
            }}
          >
            Experience
          </h2>

          {experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '0.45rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: '9.75pt' }}>
                  <strong>{exp.jobTitle}</strong>, {exp.company} {exp.location ? `(${exp.location})` : ''}
                </div>
                <span style={{ fontSize: '9pt', fontWeight: 600 }}>
                  {exp.startDate} {exp.startDate && (exp.endDate || exp.current) ? '–' : ''} {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>

              {exp.description && (
                <div style={{ marginTop: '0.15rem', paddingLeft: '1rem', fontSize: '9.25pt' }}>
                  {exp.description.split('\n').map((line, lIdx) => {
                    const trimmed = line.trim().replace(/^•\s*/, '');
                    if (!trimmed) return null;
                    return (
                      <div key={lIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.15rem' }}>
                        <span style={{ fontSize: '10pt', lineHeight: '1.2' }}>•</span>
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

      {/* 3. PROJECTS */}
      {projects.length > 0 && (
        <section style={{ marginBottom: '0.75rem' }}>
          <h2
            style={{
              fontSize: '10.5pt',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              borderBottom: '1px solid #000000',
              paddingBottom: '1px',
              margin: '0 0 0.35rem 0',
            }}
          >
            Projects
          </h2>

          {projects.map((proj, idx) => (
            <div key={idx} style={{ marginBottom: '0.45rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'nowrap' }}>
                <div style={{ fontSize: '9.75pt', flex: 1, paddingRight: '0.5rem' }}>
                  <strong>{proj.name || proj.title}</strong>
                  {proj.technologies && (
                    <span style={{ fontStyle: 'italic', color: '#1f2937' }}>
                      {' '}| {proj.technologies}
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '8.75pt', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  {(proj.projectLink || proj.liveLink || proj.githubLink) && (
                    <a
                      href={proj.projectLink || proj.liveLink || proj.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#0951b5', textDecoration: 'underline', fontWeight: 600 }}
                    >
                      Link
                    </a>
                  )}
                  {proj.date && (
                    <span>
                      {(proj.projectLink || proj.liveLink || proj.githubLink) ? ' |' : ''} {proj.date}
                    </span>
                  )}
                </div>
              </div>

              {proj.description && (
                <div style={{ marginTop: '0.15rem', paddingLeft: '1rem', fontSize: '9.25pt' }}>
                  {proj.description.split('\n').map((line, lIdx) => {
                    const trimmed = line.trim().replace(/^•\s*/, '');
                    if (!trimmed) return null;
                    return (
                      <div key={lIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.15rem' }}>
                        <span style={{ fontSize: '10pt', lineHeight: '1.2' }}>•</span>
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

      {/* 4. SPLIT ROW: TECHNICAL SKILLS & COMPETITIVE PROGRAMMING (Left) + CERTIFICATIONS & COURSES (Right) */}
      {(skills.length > 0 || competitiveProgramming.length > 0 || certifications.length > 0) && (
        <section style={{ marginBottom: '0.75rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                (skills.length > 0 || competitiveProgramming.length > 0) && certifications.length > 0
                  ? '48% 52%'
                  : '1fr',
              gap: '1.25rem',
            }}
          >
            {/* LEFT COLUMN: TECHNICAL SKILLS + COMPETITIVE PROGRAMMING */}
            {(skills.length > 0 || competitiveProgramming.length > 0) && (
              <div>
                {/* TECHNICAL SKILLS */}
                {skills.length > 0 && (
                  <div>
                    <h2
                      style={{
                        fontSize: '10.5pt',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        borderBottom: '1px solid #000000',
                        paddingBottom: '1px',
                        margin: '0 0 0.35rem 0',
                      }}
                    >
                      Technical Skills
                    </h2>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '0.2rem 0.4rem',
                        fontSize: '9pt',
                        marginTop: '0.25rem',
                      }}
                    >
                      {skills.map((skill, idx) => (
                        <div key={idx} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {getSkillName(skill)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* COMPETITIVE PROGRAMMING */}
                {competitiveProgramming.length > 0 && (
                  <div style={{ marginTop: skills.length > 0 ? '0.65rem' : '0' }}>
                    <h2
                      style={{
                        fontSize: '10.5pt',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        borderBottom: '1px solid #000000',
                        paddingBottom: '1px',
                        margin: '0 0 0.35rem 0',
                      }}
                    >
                      Competitive Programming
                    </h2>

                    <div style={{ fontSize: '9pt', marginTop: '0.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {competitiveProgramming.map((cp, idx) => (
                        <div key={idx} style={{ color: '#111827', lineHeight: 1.35 }}>
                          <strong>{cp.platform}</strong> : {cp.details}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* RIGHT COLUMN: CERTIFICATIONS & COURSES */}
            {certifications.length > 0 && (
              <div>
                <h2
                  style={{
                    fontSize: '10.5pt',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    borderBottom: '1px solid #000000',
                    paddingBottom: '1px',
                    margin: '0 0 0.35rem 0',
                  }}
                >
                  Certifications & Courses
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontSize: '9pt', marginTop: '0.25rem' }}>
                  {certifications.map((cert, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ flex: 1, paddingRight: '0.4rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {cert.organization ? `${cert.organization} – ` : ''}{cert.name}
                      </span>
                      <div style={{ whiteSpace: 'nowrap', fontSize: '8.5pt' }}>
                        {(cert.credentialUrl || cert.credentialLink) ? (
                          <a
                            href={cert.credentialUrl || cert.credentialLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: '#0951b5', textDecoration: 'underline' }}
                          >
                            Link
                          </a>
                        ) : null}
                        {(cert.issueDate || cert.date) && (
                          <span style={{ marginLeft: '0.35rem' }}>
                            {(cert.credentialUrl || cert.credentialLink) ? ' | ' : ''}{cert.issueDate || cert.date}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. ACHIEVEMENTS */}
      {achievements.length > 0 && (
        <section style={{ marginBottom: '0.75rem' }}>
          <h2
            style={{
              fontSize: '10.5pt',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              borderBottom: '1px solid #000000',
              paddingBottom: '1px',
              margin: '0 0 0.35rem 0',
            }}
          >
            Achievements
          </h2>

          <div style={{ paddingLeft: '1rem', fontSize: '9.25pt', marginTop: '0.2rem' }}>
            {achievements.map((ach, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '10pt', lineHeight: '1.2' }}>•</span>
                <span style={{ flex: 1 }}>
                  {ach.description ? ach.description : (
                    <>
                      <strong>{ach.title}</strong> {ach.date ? `(${ach.date})` : ''}
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. VOLUNTEERING / ACTIVITIES / LANGUAGES */}
      {languages.length > 0 && (
        <section style={{ marginBottom: '0.5rem' }}>
          <h2
            style={{
              fontSize: '10.5pt',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              borderBottom: '1px solid #000000',
              paddingBottom: '1px',
              margin: '0 0 0.35rem 0',
            }}
          >
            Volunteering
          </h2>

          <div style={{ paddingLeft: '1rem', fontSize: '9.25pt', marginTop: '0.2rem' }}>
            {languages.map((l, idx) => {
              if (l.description) {
                return (
                  <div key={idx} style={{ marginBottom: '0.2rem' }}>
                    {l.description.split('\n').map((line, lIdx) => {
                      const trimmed = line.trim().replace(/^•\s*/, '');
                      if (!trimmed) return null;
                      return (
                        <div key={lIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.15rem' }}>
                          <span style={{ fontSize: '10pt', lineHeight: '1.2' }}>•</span>
                          <span style={{ flex: 1 }}>{trimmed}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              }
              return (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.15rem' }}>
                  <span style={{ fontSize: '10pt', lineHeight: '1.2' }}>•</span>
                  <span style={{ flex: 1 }}>
                    <strong>{l.language || l.name}</strong> {l.proficiency ? `– ${l.proficiency}` : ''}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default PlacementTemplate;
