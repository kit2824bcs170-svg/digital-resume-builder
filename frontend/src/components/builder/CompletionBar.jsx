import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Circle } from 'lucide-react';

export const calculateCompletion = (resume) => {
  if (!resume) return { percentage: 0, sections: {}, completed: [], missing: [] };

  const p = resume.personalInfo || {};
  const hasBasicInfo = !!(p.fullName && p.email);
  const hasContact = !!(p.phone || p.location || p.linkedin || p.github);
  const hasSummary = !!(p.summary && p.summary.trim().length > 20);
  const hasEducation = !!(
    resume.education &&
    resume.education.length > 0 &&
    resume.education[0].institution
  );
  const hasSkills = !!(resume.skills && resume.skills.length >= 3);
  const hasProjects = !!(
    resume.projects &&
    resume.projects.length > 0 &&
    (resume.projects[0].name || resume.projects[0].title)
  );
  const hasExperience = !!(
    resume.experience &&
    resume.experience.length > 0 &&
    resume.experience[0].jobTitle
  );
  const hasCertifications = !!(
    resume.certifications &&
    resume.certifications.length > 0 &&
    resume.certifications[0].name
  );
  const hasCompetitive = !!(
    resume.competitiveProgramming &&
    resume.competitiveProgramming.length > 0 &&
    resume.competitiveProgramming[0].platform
  );

  let score = 0;
  if (hasBasicInfo) score += 15;
  if (hasContact) score += 10;
  if (hasSummary) score += 15;
  if (hasEducation) score += 15;
  if (hasSkills) score += 15;
  if (hasProjects) score += 15;
  if (hasExperience) score += 10;
  if (hasCertifications) score += 5;
  if (hasCompetitive) score += 5;

  const sections = {
    'Personal Information': hasBasicInfo && hasContact,
    'Professional Summary': hasSummary,
    'Education': hasEducation,
    'Skills': hasSkills,
    'Competitive Programming': hasCompetitive,
    'Projects': hasProjects,
    'Experience': hasExperience,
    'Certifications': hasCertifications,
  };

  const completed = Object.entries(sections)
    .filter(([_, done]) => done)
    .map(([name]) => name);

  const missing = Object.entries(sections)
    .filter(([_, done]) => !done)
    .map(([name]) => name);

  return {
    percentage: Math.min(100, score),
    sections,
    completed,
    missing,
  };
};

const CompletionBar = ({ resumeData, onScoreChange }) => {
  const { percentage, completed, missing } = calculateCompletion(resumeData);
  const prevPercentageRef = useRef(percentage);

  useEffect(() => {
    if (percentage === 100 && prevPercentageRef.current < 100) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
    prevPercentageRef.current = percentage;

    if (onScoreChange && resumeData?.completionPercentage !== percentage) {
      onScoreChange(percentage);
    }
  }, [percentage]);

  const getColor = (pct) => {
    if (pct < 40) return '#ef4444';
    if (pct < 75) return '#f59e0b';
    return '#10b981';
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        border: '1px solid var(--border-subtle)',
        marginBottom: '1.25rem',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
        <div>
          <span style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-main)' }}>
            Resume Completion:
          </span>
          <span style={{ fontSize: '0.95rem', fontWeight: 900, color: getColor(percentage), marginLeft: '0.5rem' }}>
            {percentage}%
          </span>
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {percentage >= 80 ? '✓ Ready for applications' : 'Add missing details to reach 100%'}
        </span>
      </div>

      {/* Progress Track */}
      <div
        style={{
          height: '8px',
          backgroundColor: '#f1f5f9',
          borderRadius: '999px',
          overflow: 'hidden',
          marginBottom: '0.85rem',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: getColor(percentage),
            transition: 'width 0.4s ease, background-color 0.4s ease',
            borderRadius: '999px',
          }}
        />
      </div>

      {/* Two columns: Completed vs Missing */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.775rem' }}>
        {/* Completed list */}
        <div>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.35rem' }}>
            Completed ({completed.length}):
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {completed.length === 0 ? (
              <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>None yet</span>
            ) : (
              completed.map((name) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#059669', fontWeight: 600 }}>
                  <CheckCircle2 size={13} color="#059669" />
                  <span>{name}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Missing list */}
        {missing.length > 0 && (
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.35rem' }}>
              Missing ({missing.length}):
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {missing.map((name) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b' }}>
                  <Circle size={13} color="#cbd5e1" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompletionBar;
