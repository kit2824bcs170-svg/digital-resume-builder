import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import resumeService from '../services/resumeService';
import {
  TEMPLATES,
  TEMPLATE_CATEGORIES,
} from '../templates/templatesRegistry';
import TemplateThumbnail from '../components/templates/TemplateThumbnail';
import ResumePreview from '../components/preview/ResumePreview';
import { PLACEMENT_SAMPLE_DATA } from '../utils/sampleData';
import { Sparkles, Search, Check, ArrowRight, ShieldCheck, X, Eye } from 'lucide-react';

const TemplatesPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [creating, setCreating] = useState(false);

  const displayTemplates = useMemo(() => {
    return TEMPLATES.filter((tmpl) => {
      // Exclude duplicate aliases
      if (tmpl.id === 'modern' || tmpl.id === 'classic' || tmpl.id === 'minimal') {
        return false;
      }
      const matchesCategory =
        activeCategory === 'All' || tmpl.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch =
        tmpl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tmpl.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tmpl.tags && tmpl.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleUseTemplate = async (templateId) => {
    if (!isAuthenticated) {
      navigate(`/login?redirect=/templates`);
      return;
    }

    try {
      setCreating(true);

      const searchParams = new URLSearchParams(location.search);
      const currentResumeId = searchParams.get('resumeId');

      if (currentResumeId) {
        // Applying template to the specific active resume
        await resumeService.updateTemplate(currentResumeId, { selectedTemplate: templateId });
        navigate(`/builder/${currentResumeId}`);
        return;
      }

      // Check if user has an existing saved resume to carry over their actual data
      let existingResumeData = null;
      try {
        const userResumes = await resumeService.getResumes();
        const candidateList = Array.isArray(userResumes)
          ? userResumes
          : userResumes?.resumes || [];
        const found =
          candidateList.find(
            (r) =>
              (r.education && r.education.length > 0) ||
              (r.skills && r.skills.length > 0) ||
              (r.projects && r.projects.length > 0) ||
              (r.experience && r.experience.length > 0) ||
              (r.personalInfo?.summary && r.personalInfo.summary.trim().length > 0)
          ) || candidateList[0];

        if (found) {
          existingResumeData = found;
        }
      } catch (fetchErr) {
        console.warn('Could not fetch existing resumes to inherit:', fetchErr);
      }

      const templateObj = TEMPLATES.find((t) => t.id === templateId);

      const payload = {
        title: `My ${templateObj?.name || 'Professional'} Resume`,
        selectedTemplate: templateId,
        themeColor: templateObj?.defaultColor || '#2563eb',
        useSampleData: false,
      };

      if (existingResumeData) {
        payload.personalInfo = existingResumeData.personalInfo || {};
        payload.education = existingResumeData.education || [];
        payload.skills = existingResumeData.skills || [];
        payload.projects = existingResumeData.projects || [];
        payload.experience = existingResumeData.experience || [];
        payload.certifications = existingResumeData.certifications || [];
        payload.competitiveProgramming = existingResumeData.competitiveProgramming || [];
        payload.achievements = existingResumeData.achievements || [];
        payload.languages = existingResumeData.languages || [];
      }

      const res = await resumeService.createResume(payload);
      const resumeId = res?._id || res?.resume?._id;
      if (resumeId) {
        navigate(`/builder/${resumeId}`);
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Failed to create resume with template:', err);
      navigate('/dashboard');
    } finally {
      setCreating(false);
    }
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 4.25rem)', backgroundColor: '#f8fafc', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section
        style={{
          padding: '4rem 1.5rem 3rem',
          textAlign: 'center',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              backgroundColor: 'var(--color-primary-light)',
              color: 'var(--color-primary)',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            <Sparkles size={15} /> 15+ Recruiter-Approved Resume Layouts
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              margin: '0 0 1rem',
            }}
          >
            Explore Professional Resume Templates
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 2rem',
            }}
          >
            Every template is optimized for Applicant Tracking Systems (ATS), designed to high aesthetic standards, and adapts seamlessly to your data.
          </p>

          {/* Search bar */}
          <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
            <Search
              size={18}
              color="#94a3b8"
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search by role, style, or feature (e.g. Developer, ATS, Modern)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                fontSize: '0.95rem',
                borderRadius: '12px',
                border: '1px solid #cbd5e1',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div
        style={{
          position: 'sticky',
          top: '4.25rem',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '0.85rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '2px' }}>
          {TEMPLATE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--color-primary)' : '#e2e8f0',
                  backgroundColor: isActive ? 'var(--color-primary)' : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 2px 8px rgba(37, 99, 235, 0.25)' : 'none',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Templates Grid Container */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {displayTemplates.map((tmpl) => (
            <div
              key={tmpl.id}
              className="template-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              {/* Preview Canvas */}
              <div
                style={{
                  height: '350px',
                  backgroundColor: '#f1f5f9',
                  padding: '12px 10px',
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => setPreviewTemplate(tmpl)}
              >
                <TemplateThumbnail templateId={tmpl.id} accentColor={tmpl.defaultColor} height={326} />

                {/* Badge tags */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '6px', zIndex: 10 }}>
                  {tmpl.badge && (
                    <span
                      style={{
                        backgroundColor: '#0f172a',
                        color: '#ffffff',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        letterSpacing: '0.04em',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      }}
                    >
                      {tmpl.badge}
                    </span>
                  )}
                  {tmpl.atsFriendly && (
                    <span
                      style={{
                        backgroundColor: '#059669',
                        color: '#ffffff',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                      }}
                    >
                      <ShieldCheck size={11} /> ATS Ready
                    </span>
                  )}
                </div>
              </div>

              {/* Card Meta & Actions */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {tmpl.name}
                  </h3>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {tmpl.category}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '0 0 1.25rem', flex: 1 }}>
                  {tmpl.description}
                </p>

                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <button
                    type="button"
                    onClick={() => setPreviewTemplate(tmpl)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', fontWeight: 700 }}
                  >
                    <Eye size={15} /> Preview
                  </button>
                  <button
                    type="button"
                    disabled={creating}
                    onClick={() => handleUseTemplate(tmpl.id)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', fontWeight: 700 }}
                  >
                    Use Template <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Live Preview Modal */}
      {previewTemplate && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 150,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Modal Header */}
          <div
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                {previewTemplate.name}
              </h3>
              <p style={{ margin: '0.15rem 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
                {previewTemplate.description}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => handleUseTemplate(previewTemplate.id)}
                className="btn btn-primary btn-sm"
                style={{ fontWeight: 800, padding: '0.5rem 1.25rem' }}
              >
                Use This Template
              </button>
              <button
                type="button"
                onClick={() => setPreviewTemplate(null)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                  padding: '0.4rem',
                }}
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Modal Preview Body */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', justifyContent: 'center', padding: '2rem' }}>
            <ResumePreview
              resumeData={{
                ...PLACEMENT_SAMPLE_DATA,
                selectedTemplate: previewTemplate.id,
                themeColor: previewTemplate.defaultColor,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplatesPage;
