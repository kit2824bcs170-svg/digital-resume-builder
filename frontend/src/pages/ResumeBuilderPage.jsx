import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import resumeService from '../services/resumeService';
import { exportResumeToPdf } from '../components/preview/pdfExport';
import { SAMPLE_RESUME_DATA, MADHU_MITHRA_DATA } from '../utils/sampleData';

import PersonalInfoForm from '../components/builder/PersonalInfoForm';
import EducationForm from '../components/builder/EducationForm';
import SkillsForm from '../components/builder/SkillsForm';
import CompetitiveProgrammingForm from '../components/builder/CompetitiveProgrammingForm';
import ProjectsForm from '../components/builder/ProjectsForm';
import ExperienceForm from '../components/builder/ExperienceForm';
import CertificationsForm from '../components/builder/CertificationsForm';
import AchievementsForm from '../components/builder/AchievementsForm';
import LanguagesForm from '../components/builder/LanguagesForm';
import CompletionBar from '../components/builder/CompletionBar';
import ResumeSuggestions from '../components/builder/ResumeSuggestions';
import TemplateSelectorModal from '../components/builder/TemplateSelectorModal';
import ResumePreview from '../components/preview/ResumePreview';
import { getTemplateById } from '../templates/templatesRegistry';
import Toast from '../components/common/Toast';

import {
  ArrowLeft,
  Download,
  Save,
  Palette,
  Sparkles,
  Eye,
  Edit3,
  CheckCircle,
  AlertCircle,
  FileText,
  User,
  GraduationCap,
  Wrench,
  FolderGit2,
  Briefcase,
  Award,
  Trophy,
  Languages,
  Terminal,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';

const SECTIONS = [
  { id: 'personal', name: 'Personal Details', icon: User },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'skills', name: 'Skills & Tech', icon: Wrench },
  { id: 'competitive', name: 'Competitive Coding', icon: Terminal },
  { id: 'projects', name: 'Key Projects', icon: FolderGit2 },
  { id: 'experience', name: 'Work Experience', icon: Briefcase },
  { id: 'certifications', name: 'Certifications', icon: Award },
  { id: 'achievements', name: 'Achievements', icon: Trophy },
  { id: 'languages', name: 'Languages', icon: Languages },
];

const ResumeBuilderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [resumeData, setResumeData] = useState(null);
  const [activeSection, setActiveSection] = useState('personal');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('Saved');
  const [downloading, setDownloading] = useState(false);
  const [templateModalOpen, setTemplateModalOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState('editor'); // 'editor' | 'preview'
  const [zoomScale, setZoomScale] = useState(100);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [error, setError] = useState('');

  const previewRef = useRef(null);
  const autoSaveTimerRef = useRef(null);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  // Fetch resume data
  useEffect(() => {
    const loadResume = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await resumeService.getResumeById(id);
        setResumeData(data);
      } catch (err) {
        setError(err.message || 'Failed to load resume.');
        showToast('Failed to load resume: ' + err.message, 'error');
      } finally {
        setLoading(false);
      }
    };

    loadResume();
  }, [id]);

  // Handle auto-download query param if requested from dashboard
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('autoDownload') === 'true' && resumeData && !loading) {
      setTimeout(() => {
        handleDownloadPdf();
      }, 500);
    }
  }, [resumeData, loading]);

  // Trigger auto-save debounce on changes
  const queueAutoSave = (updatedData) => {
    setSaveStatus('Unsaved changes...');
    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current);
    }

    autoSaveTimerRef.current = setTimeout(async () => {
      try {
        setSaving(true);
        setSaveStatus('Saving...');
        await resumeService.updateResume(id, updatedData);
        setSaveStatus('Saved');
      } catch (err) {
        setSaveStatus('Save failed');
        console.error('Auto save error:', err);
      } finally {
        setSaving(false);
      }
    }, 1200);
  };

  // Immediate manual save to MongoDB
  const handleManualSave = async () => {
    if (!resumeData) return;
    try {
      setSaving(true);
      setSaveStatus('Saving...');
      setError('');
      const updated = await resumeService.updateResume(id, resumeData);
      if (updated) setResumeData(updated);
      setSaveStatus('Saved');
      showToast('Resume saved to cloud successfully!');
    } catch (err) {
      setSaveStatus('Save failed');
      setError('Unable to save your resume. Please check your connection and try again.');
      showToast('Unable to save resume: ' + err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  // Update specific top-level resume properties
  const updateResumeField = (field, value) => {
    const updated = {
      ...resumeData,
      [field]: value,
    };
    setResumeData(updated);
    queueAutoSave(updated);
  };

  // Load realistic sample data
  const handleLoadSample = () => {
    if (window.confirm('Load sample developer data? This will overwrite empty fields with realistic professional content.')) {
      const merged = {
        ...resumeData,
        personalInfo: { ...SAMPLE_RESUME_DATA.personalInfo },
        education: [...SAMPLE_RESUME_DATA.education],
        skills: [...SAMPLE_RESUME_DATA.skills],
        projects: [...SAMPLE_RESUME_DATA.projects],
        experience: [...SAMPLE_RESUME_DATA.experience],
        certifications: [...SAMPLE_RESUME_DATA.certifications],
        competitiveProgramming: [...(SAMPLE_RESUME_DATA.competitiveProgramming || [])],
        achievements: [...SAMPLE_RESUME_DATA.achievements],
        languages: [...SAMPLE_RESUME_DATA.languages],
      };
      setResumeData(merged);
      queueAutoSave(merged);
      showToast('Sample developer data loaded!');
    }
  };

  // Load placement sample data with generic placeholders while keeping user's identity
  const handleLoadPlacementSample = () => {
    if (
      window.confirm(
        'Load placement sample template? This will populate the editor with sample coursework, skills, and competitive coding data.'
      )
    ) {
      const merged = {
        ...resumeData,
        title: `${resumeData.personalInfo?.fullName || 'Placement'} Resume`,
        selectedTemplate: 'placement',
        personalInfo: {
          ...MADHU_MITHRA_DATA.personalInfo,
          fullName: resumeData.personalInfo?.fullName || MADHU_MITHRA_DATA.personalInfo.fullName,
          email: resumeData.personalInfo?.email || MADHU_MITHRA_DATA.personalInfo.email,
        },
        education: [...MADHU_MITHRA_DATA.education],
        skills: [...MADHU_MITHRA_DATA.skills],
        projects: [...MADHU_MITHRA_DATA.projects],
        experience: [...MADHU_MITHRA_DATA.experience],
        certifications: [...MADHU_MITHRA_DATA.certifications],
        competitiveProgramming: [...(MADHU_MITHRA_DATA.competitiveProgramming || [])],
        achievements: [...MADHU_MITHRA_DATA.achievements],
        languages: [...MADHU_MITHRA_DATA.languages],
      };
      setResumeData(merged);
      queueAutoSave(merged);
      showToast('Campus placement template data loaded!');
    }
  };

  // Download PDF with zoom reset safeguard
  const handleDownloadPdf = async () => {
    const originalZoom = zoomScale;
    try {
      setDownloading(true);
      // Temporarily normalize zoom to 100% so canvas renders at full native resolution
      if (zoomScale !== 100) {
        setZoomScale(100);
        await new Promise((res) => setTimeout(res, 100));
      }
      const title =
        resumeData?.personalInfo?.fullName ||
        resumeData?.title ||
        'Professional_Resume';
      await exportResumeToPdf('resume-pdf-container', title);
      showToast('PDF downloaded successfully!');
    } catch (err) {
      showToast('Could not export PDF. Please check your browser print settings.', 'error');
    } finally {
      setDownloading(false);
      setZoomScale(originalZoom);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          gap: '1rem',
        }}
      >
        <div
          style={{
            width: '2.5rem',
            height: '2.5rem',
            border: '3px solid #e2e8f0',
            borderTopColor: '#2563eb',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }}
        />
        <p style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: 600 }}>Loading Resume Studio...</p>
      </div>
    );
  }

  if (error || !resumeData) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div
          style={{
            maxWidth: '480px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            padding: '2.5rem',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
          }}
        >
          <AlertCircle size={40} color="#ef4444" style={{ margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.5rem', color: '#0f172a' }}>
            Resume Not Found
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.75rem', lineHeight: 1.5 }}>
            {error || 'This resume could not be retrieved or you do not have permission to view it.'}
          </p>
          <Link to="/dashboard" className="btn btn-primary">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const currentTemplate = getTemplateById(resumeData.selectedTemplate) || { name: 'Modern Sidebar' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 4.25rem)', overflow: 'hidden' }}>
      {/* STICKY BUILDER HEADER ACTION BAR */}
      <header
        className="no-print"
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
          padding: '0.65rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          zIndex: 40,
        }}
      >
        {/* Left: Back & Title Edit */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link
            to="/dashboard"
            className="btn btn-ghost btn-sm"
            title="Back to Dashboard"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#64748b' }}
          >
            <ArrowLeft size={16} />
            <span className="hide-mobile">Dashboard</span>
          </Link>

          <div style={{ height: '1.5rem', width: '1px', backgroundColor: '#e2e8f0' }} />

          <input
            type="text"
            value={resumeData.title || ''}
            onChange={(e) => updateResumeField('title', e.target.value)}
            placeholder="Resume Title"
            style={{
              fontSize: '1rem',
              fontWeight: 800,
              color: '#0f172a',
              border: '1px solid transparent',
              borderRadius: '8px',
              padding: '0.25rem 0.5rem',
              outline: 'none',
              maxWidth: '240px',
              backgroundColor: 'transparent',
              transition: 'all 0.15s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#2563eb';
              e.target.style.backgroundColor = '#ffffff';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'transparent';
              e.target.style.backgroundColor = 'transparent';
            }}
          />
        </div>

        {/* Center: Save status indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: saving ? '#d97706' : '#059669',
            backgroundColor: saving ? '#fffbeb' : '#ecfdf5',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            border: `1px solid ${saving ? '#fde68a' : '#a7f3d0'}`,
          }}
        >
          {saving ? (
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#d97706',
                animation: 'pulseGlow 1s infinite',
              }}
            />
          ) : (
            <CheckCircle size={14} color="#059669" />
          )}
          <span>{saving ? 'Syncing...' : 'Saved to Cloud'}</span>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={handleLoadSample}
            className="btn btn-ghost btn-sm"
            title="Populate with realistic sample profile"
          >
            <Sparkles size={14} color="#2563eb" />
            <span className="hide-mobile">Load Sample</span>
          </button>

          <button
            type="button"
            onClick={handleLoadPlacementSample}
            className="btn btn-ghost btn-sm"
            style={{ color: '#0951b5', fontWeight: 600, border: '1px solid #bfdbfe', backgroundColor: '#eff6ff' }}
            title="Populate with campus placement template sample data"
          >
            <GraduationCap size={15} color="#0951b5" />
            <span className="hide-mobile">Placement</span>
          </button>

          <button
            type="button"
            onClick={() => setTemplateModalOpen(true)}
            className="btn btn-secondary btn-sm"
            title="Switch template or accent color"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#ffffff' }}
          >
            <Palette size={14} color="#2563eb" />
            <span>Templates</span>
          </button>

          <button
            type="button"
            onClick={handleManualSave}
            disabled={saving}
            className="btn btn-primary btn-sm"
            style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            title="Save resume to MongoDB"
          >
            <Save size={14} />
            <span>{saving ? 'Saving...' : 'Save'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="btn btn-secondary btn-sm"
            style={{
              color: '#059669',
              borderColor: '#a7f3d0',
              backgroundColor: '#ecfdf5',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Download size={14} />
            <span>{downloading ? 'Exporting PDF...' : 'Download PDF'}</span>
          </button>
        </div>
      </header>

      {/* MOBILE TAB SWITCHER */}
      <div
        className="no-print mobile-tab-bar"
        style={{
          display: 'none',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '0.4rem 1rem',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <button
          onClick={() => setMobileTab('editor')}
          className={`btn btn-sm ${mobileTab === 'editor' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ flex: 1 }}
        >
          <Edit3 size={14} /> Edit Form
        </button>
        <button
          onClick={() => setMobileTab('preview')}
          className={`btn btn-sm ${mobileTab === 'preview' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ flex: 1 }}
        >
          <Eye size={14} /> Live Preview
        </button>
      </div>

      {/* MAIN TWO-PANEL WORKSPACE */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* LEFT PANEL: RESUME EDITING FORM */}
        <div
          className={`builder-form-panel ${mobileTab === 'preview' ? 'mobile-hidden' : ''}`}
          style={{
            flex: '1 1 50%',
            maxWidth: '650px',
            backgroundColor: '#ffffff',
            borderRight: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          <div style={{ padding: '1.25rem 1.5rem' }}>
            {/* Resume Quality Bar */}
            <CompletionBar
              resumeData={resumeData}
              onScoreChange={(score) => {
                if (resumeData.completionPercentage !== score) {
                  updateResumeField('completionPercentage', score);
                }
              }}
            />

            {/* Resume Suggestions & Guidance */}
            <ResumeSuggestions
              resumeData={resumeData}
              onNavigateSection={(sec) => setActiveSection(sec)}
            />

            {/* Section Navigation Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                overflowX: 'auto',
                paddingBottom: '0.75rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              {SECTIONS.map((sec) => {
                const IconComponent = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: isActive ? 700 : 500,
                      whiteSpace: 'nowrap',
                      backgroundColor: isActive ? 'rgba(37, 99, 235, 0.1)' : '#f8fafc',
                      color: isActive ? '#2563eb' : '#64748b',
                      border: `1px solid ${isActive ? 'rgba(37, 99, 235, 0.3)' : '#e2e8f0'}`,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <IconComponent size={14} />
                    <span>{sec.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Form Component */}
            <div className="animate-fade-in" style={{ paddingBottom: '3rem' }}>
              {activeSection === 'personal' && (
                <PersonalInfoForm
                  personalInfo={resumeData.personalInfo}
                  onChange={(val) => updateResumeField('personalInfo', val)}
                />
              )}

              {activeSection === 'education' && (
                <EducationForm
                  education={resumeData.education}
                  onChange={(val) => updateResumeField('education', val)}
                />
              )}

              {activeSection === 'skills' && (
                <SkillsForm
                  skills={resumeData.skills}
                  onChange={(val) => updateResumeField('skills', val)}
                />
              )}

              {activeSection === 'competitive' && (
                <CompetitiveProgrammingForm
                  competitiveProgramming={resumeData.competitiveProgramming || []}
                  onChange={(val) => updateResumeField('competitiveProgramming', val)}
                />
              )}

              {activeSection === 'projects' && (
                <ProjectsForm
                  projects={resumeData.projects}
                  onChange={(val) => updateResumeField('projects', val)}
                />
              )}

              {activeSection === 'experience' && (
                <ExperienceForm
                  experience={resumeData.experience}
                  onChange={(val) => updateResumeField('experience', val)}
                />
              )}

              {activeSection === 'certifications' && (
                <CertificationsForm
                  certifications={resumeData.certifications}
                  onChange={(val) => updateResumeField('certifications', val)}
                />
              )}

              {activeSection === 'achievements' && (
                <AchievementsForm
                  achievements={resumeData.achievements}
                  onChange={(val) => updateResumeField('achievements', val)}
                />
              )}

              {activeSection === 'languages' && (
                <LanguagesForm
                  languages={resumeData.languages}
                  onChange={(val) => updateResumeField('languages', val)}
                />
              )}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: REAL-TIME A4 LIVE PREVIEW CANVAS */}
        <div
          className={`builder-preview-panel ${mobileTab === 'editor' ? 'mobile-hidden' : ''}`}
          style={{
            flex: '1 1 50%',
            backgroundColor: '#eef2f6',
            overflowY: 'auto',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Top Preview Controls Bar */}
          <div
            className="no-print"
            style={{
              width: '100%',
              maxWidth: '820px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              fontSize: '0.825rem',
              color: '#64748b',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: '#ffffff',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  color: '#0f172a',
                }}
              >
                A4 Standard (210 × 297mm)
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#2563eb',
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                }}
              >
                {currentTemplate.name}
              </span>
            </div>

            {/* Zoom Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '0.15rem 0.35rem',
              }}
            >
              <button
                type="button"
                onClick={() => setZoomScale(Math.max(50, zoomScale - 10))}
                title="Zoom Out"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem 0.35rem', color: '#475569' }}
              >
                <ZoomOut size={15} />
              </button>

              <span style={{ fontSize: '0.75rem', fontWeight: 700, minWidth: '40px', textAlign: 'center', color: '#1e293b' }}>
                {zoomScale}%
              </span>

              <button
                type="button"
                onClick={() => setZoomScale(Math.min(130, zoomScale + 10))}
                title="Zoom In"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem 0.35rem', color: '#475569' }}
              >
                <ZoomIn size={15} />
              </button>

              <button
                type="button"
                onClick={() => setZoomScale(100)}
                title="Reset Zoom"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem 0.35rem', color: '#64748b' }}
              >
                <RotateCcw size={13} />
              </button>
            </div>
          </div>

          {/* Scaled Preview Sheet */}
          <div
            style={{
              transform: `scale(${zoomScale / 100})`,
              transformOrigin: 'top center',
              transition: 'transform 0.15s ease',
              marginBottom: zoomScale > 100 ? `${(zoomScale - 100) * 10}px` : '2rem',
            }}
          >
            <ResumePreview ref={previewRef} resumeData={resumeData} />
          </div>
        </div>
      </div>

      {/* TEMPLATE & COLOR SELECTION MODAL */}
      <TemplateSelectorModal
        isOpen={templateModalOpen}
        onClose={() => setTemplateModalOpen(false)}
        selectedTemplate={resumeData.selectedTemplate}
        onSelectTemplate={(tmpl) => updateResumeField('selectedTemplate', tmpl)}
        themeColor={resumeData.themeColor}
        onSelectColor={(color) => updateResumeField('themeColor', color)}
        fontSize={resumeData.fontSize}
        onSelectFontSize={(fs) => updateResumeField('fontSize', fs)}
        sectionSpacing={resumeData.sectionSpacing}
        onSelectSpacing={(sp) => updateResumeField('sectionSpacing', sp)}
      />

      {/* Floating Toast Notification */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />

      {/* Mobile media query styling */}
      <style>{`
        @media (max-width: 900px) {
          .mobile-tab-bar {
            display: flex !important;
          }
          .hide-mobile {
            display: none !important;
          }
          .mobile-hidden {
            display: none !important;
          }
          .builder-form-panel, .builder-preview-panel {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeBuilderPage;
