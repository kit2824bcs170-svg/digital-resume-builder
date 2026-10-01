import React, { useState } from 'react';
import { Lightbulb, ChevronRight, CheckCircle, AlertTriangle, Info, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const analyzeResume = (resume) => {
  const suggestions = [];
  const strengths = [];

  if (!resume) return { suggestions, strengths, completionScore: 0 };

  const p = resume.personalInfo || {};
  const edu = resume.education || [];
  const skills = resume.skills || [];
  const projects = resume.projects || [];
  const exp = resume.experience || [];
  const certs = resume.certifications || [];
  const cp = resume.competitiveProgramming || [];

  // 1. Personal Summary analysis
  if (!p.summary || p.summary.trim().length === 0) {
    suggestions.push({
      id: 'summary-missing',
      section: 'personal',
      type: 'warning',
      title: 'Add a professional summary',
      message: 'Add a 2–3 line professional summary highlighting your career goals, core strengths, and what value you bring to prospective teams.',
    });
  } else if (p.summary.trim().length < 60) {
    suggestions.push({
      id: 'summary-short',
      section: 'personal',
      type: 'info',
      title: 'Expand your professional summary',
      message: 'Your summary is quite brief. Aim for 2–3 sentences describing your focus area, key accomplishments, and ambitions.',
    });
  } else {
    strengths.push('Engaging professional summary provided');
  }

  // 2. Contact details & profiles
  if (!p.fullName) {
    suggestions.push({
      id: 'name-missing',
      section: 'personal',
      type: 'warning',
      title: 'Provide your full name',
      message: 'Recruiters need your official name at the very top of your resume.',
    });
  }
  if (!p.email) {
    suggestions.push({
      id: 'email-missing',
      section: 'personal',
      type: 'warning',
      title: 'Add your contact email',
      message: 'A valid email address is required so employers can reach you.',
    });
  }
  if (!p.github) {
    suggestions.push({
      id: 'github-missing',
      section: 'personal',
      type: 'info',
      title: 'Consider adding your GitHub profile',
      message: 'Adding your GitHub profile link helps recruiters and technical interviewers review your code repositories and commit history.',
    });
  }
  if (!p.linkedin) {
    suggestions.push({
      id: 'linkedin-missing',
      section: 'personal',
      type: 'info',
      title: 'Add your LinkedIn profile',
      message: 'Recruiters frequently cross-reference resumes with LinkedIn to check recommendations and mutual connections.',
    });
  }

  // 3. Skills analysis
  if (skills.length === 0) {
    suggestions.push({
      id: 'skills-missing',
      section: 'skills',
      type: 'warning',
      title: 'Add technical and relevant professional skills',
      message: 'Highlight programming languages, frameworks, libraries, and tools you have worked with to pass automated resume screeners.',
    });
  } else if (skills.length < 5) {
    suggestions.push({
      id: 'skills-few',
      section: 'skills',
      type: 'info',
      title: 'Add more relevant skills',
      message: `You currently have ${skills.length} skills listed. Aim for 6–10 skills balancing core languages, web frameworks, and developer tools.`,
    });
  } else {
    strengths.push(`${skills.length} technical skills listed`);
  }

  // 4. Projects analysis
  if (projects.length === 0) {
    suggestions.push({
      id: 'projects-missing',
      section: 'projects',
      type: 'warning',
      title: 'Add at least 2 projects',
      message: 'Projects provide verifiable proof of your problem-solving abilities and full-stack engineering skills.',
    });
  } else {
    // Check project descriptions
    const shortProjects = projects.filter(
      (proj) => !proj.description || proj.description.trim().length < 40
    );
    if (shortProjects.length > 0) {
      suggestions.push({
        id: 'projects-short-desc',
        section: 'projects',
        type: 'info',
        title: 'Detail project impact & technologies',
        message: 'Add your role, technologies used, and measurable outcome (e.g. reduced load time, number of users, features built).',
      });
    }

    const missingLinks = projects.filter(
      (proj) => !(proj.githubLink || proj.projectLink || proj.liveLink)
    );
    if (missingLinks.length > 0) {
      suggestions.push({
        id: 'projects-missing-link',
        section: 'projects',
        type: 'info',
        title: 'Add repository or demo links',
        message: 'Include GitHub links or live deployment URLs for your projects so interviewers can test your applications.',
      });
    }

    if (projects.length >= 2 && shortProjects.length === 0) {
      strengths.push(`${projects.length} well-documented projects added`);
    }
  }

  // 5. Work Experience analysis
  if (exp.length === 0) {
    suggestions.push({
      id: 'exp-empty',
      section: 'experience',
      type: 'info',
      title: 'Include internships or relevant experience',
      message: 'If you are a student, you can include internships, academic projects, club leadership, or freelance client work.',
    });
  } else {
    strengths.push('Professional experience documented');
  }

  // 6. Education analysis
  if (edu.length === 0 || !edu[0].institution) {
    suggestions.push({
      id: 'edu-missing',
      section: 'education',
      type: 'warning',
      title: 'Add your educational background',
      message: 'List your current university degree, graduation year, and score or CGPA.',
    });
  } else {
    strengths.push('Academic qualifications included');
  }

  // 7. Certifications analysis
  if (certs.length === 0) {
    suggestions.push({
      id: 'certs-empty',
      section: 'certifications',
      type: 'info',
      title: 'Add certifications if available',
      message: 'Include any completed cloud certifications (AWS, GCP), online specializations (Coursera, Udemy), or technical certificates.',
    });
  } else {
    strengths.push(`${certs.length} certifications listed`);
  }

  // 8. Competitive programming analysis
  if (cp.length > 0 && cp[0].platform) {
    strengths.push(`${cp.length} competitive programming profile(s) listed`);
  } else {
    suggestions.push({
      id: 'cp-empty',
      section: 'competitive',
      type: 'info',
      title: 'Highlight competitive coding profiles',
      message: 'Adding LeetCode, CodeChef, or Codeforces ratings and solved problem counts strongly boosts engineering and campus placement resumes.',
    });
  }

  return { suggestions, strengths };
};

const ResumeSuggestions = ({ resumeData, onNavigateSection }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { suggestions, strengths } = analyzeResume(resumeData);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)',
        padding: '1.25rem',
        marginBottom: '1.25rem',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '1.85rem',
              height: '1.85rem',
              borderRadius: '50%',
              backgroundColor: suggestions.length > 0 ? '#fef3c7' : '#ecfdf5',
              color: suggestions.length > 0 ? '#d97706' : '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Lightbulb size={16} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Resume Suggestions & Feedback
            </h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {suggestions.length === 0
                ? 'All key recommendations addressed!'
                : `${suggestions.length} actionable suggestions to improve your resume`}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-ghost btn-sm"
          style={{ padding: '0.25rem' }}
          aria-label={collapsed ? 'Expand suggestions' : 'Collapse suggestions'}
        >
          {collapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
        </button>
      </div>

      {!collapsed && (
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {/* Actionable Suggestions */}
          {suggestions.map((item) => {
            const isWarning = item.type === 'warning';
            return (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isWarning ? '#fffbeb' : '#f8fafc',
                  border: `1px solid ${isWarning ? '#fde68a' : '#e2e8f0'}`,
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem', flex: 1 }}>
                  {isWarning ? (
                    <AlertTriangle size={15} color="#d97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                  ) : (
                    <Info size={15} color="#2563eb" style={{ marginTop: '2px', flexShrink: 0 }} />
                  )}
                  <div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: isWarning ? '#92400e' : '#1e293b' }}>
                      {item.title}
                    </div>
                    <p style={{ fontSize: '0.775rem', color: isWarning ? '#78350f' : '#64748b', marginTop: '0.15rem', lineHeight: 1.4 }}>
                      {item.message}
                    </p>
                  </div>
                </div>

                {onNavigateSection && (
                  <button
                    type="button"
                    onClick={() => onNavigateSection(item.section)}
                    className="btn btn-ghost btn-sm"
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.5rem',
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    <span>Fix</span>
                    <ChevronRight size={13} />
                  </button>
                )}
              </div>
            );
          })}

          {/* Highlights / Strengths */}
          {strengths.length > 0 && (
            <div style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle size={13} />
                <span>What's working well:</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {strengths.map((str, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.725rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      border: '1px solid #a7f3d0',
                    }}
                  >
                    ✓ {str}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeSuggestions;
