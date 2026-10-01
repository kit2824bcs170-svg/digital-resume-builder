import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import resumeService from '../services/resumeService';
import ResumePreview from '../components/preview/ResumePreview';
import { calculateCompletion } from '../components/builder/CompletionBar';
import { getTemplateById } from '../templates/templatesRegistry';
import TemplateThumbnail from '../components/templates/TemplateThumbnail';
import AnimatedCounter from '../components/common/AnimatedCounter';
import { SkeletonStatCard, SkeletonResumeCard } from '../components/common/SkeletonLoader';
import Toast from '../components/common/Toast';
import {
  Plus,
  FileText,
  Clock,
  Briefcase,
  Wrench,
  Trash2,
  Edit3,
  Download,
  Eye,
  AlertCircle,
  Sparkles,
  Layout,
  CheckCircle,
  Layers,
  GraduationCap,
  ArrowRight,
  TrendingUp,
  X,
} from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);
  const [stats, setStats] = useState({
    totalResumes: 0,
    totalSkills: 0,
    totalProjects: 0,
    lastUpdated: null,
    latestTemplate: 'None',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [creating, setCreating] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);
  const [previewResume, setPreviewResume] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const fetchResumes = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await resumeService.getResumes();
      setResumes(data.resumes || []);
      setStats(
        data.stats || {
          totalResumes: 0,
          totalSkills: 0,
          totalProjects: 0,
          lastUpdated: null,
          latestTemplate: 'None',
        }
      );
    } catch (err) {
      setError(err.message || 'Failed to load your resumes.');
      showToast('Failed to load resumes: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const handleCreateResume = async (mode = false) => {
    try {
      setCreating(true);
      let payload = {
        selectedTemplate: 'modern-sidebar',
      };

      if (mode === 'placement' || mode === 'madhumithra') {
        payload.title = newTitle.trim() || `${user?.name || 'My'} Placement Resume`;
        payload.useSampleData = 'placement';
        payload.selectedTemplate = 'placement';
        payload.themeColor = '#000000';
      } else if (mode === true || mode === 'sample') {
        payload.title = newTitle.trim() || `${user?.name || 'My'} Professional Resume`;
        payload.useSampleData = true;
        payload.selectedTemplate = 'modern-sidebar';
      } else {
        payload.title = newTitle.trim() || `${user?.name || 'My'} Resume`;
        payload.useSampleData = false;
        payload.selectedTemplate = 'modern-sidebar';
      }

      const resume = await resumeService.createResume(payload);

      setCreateModalOpen(false);
      setNewTitle('');
      showToast('Resume created successfully!');
      navigate(`/builder/${resume._id}`);
    } catch (err) {
      setError('Error creating resume: ' + err.message);
      showToast('Error creating resume: ' + err.message, 'error');
    } finally {
      setCreating(false);
    }
  };

  const handleDeleteResume = async (id) => {
    try {
      await resumeService.deleteResume(id);
      setDeleteConfirmId(null);
      showToast('Resume deleted successfully.');
      fetchResumes();
    } catch (err) {
      setError('Error deleting resume: ' + err.message);
      showToast('Error deleting resume: ' + err.message, 'error');
    }
  };

  const handleQuickDownload = async (resume) => {
    try {
      setDownloadingId(resume._id);
      navigate(`/builder/${resume._id}?autoDownload=true`);
    } catch (err) {
      showToast('Could not download PDF: ' + err.message, 'error');
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 4.25rem)', backgroundColor: '#f8fafc', padding: '2.5rem 0 4rem' }}>
      <div className="container">
        {/* Welcome Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
            borderRadius: '20px',
            padding: '2.25rem 2.5rem',
            color: '#ffffff',
            marginBottom: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 20px 25px -5px rgba(15, 23, 42, 0.15), 0 8px 10px -6px rgba(15, 23, 42, 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Glow in Banner */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-30%',
              right: '10%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(8px)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                marginBottom: '0.75rem',
                color: '#93c5fd',
              }}
            >
              <Sparkles size={13} />
              <span>Personal Workspace • MongoDB Synchronized</span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                marginBottom: '0.5rem',
                color: '#ffffff',
              }}
            >
              Welcome back, {user?.name?.split(' ')[0] || 'Engineer'} 👋
            </h1>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              Track resume completion scores, preview your ATS designs, or generate a tailored copy for your next job application.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <button
              onClick={() => handleCreateResume(true)}
              className="btn btn-secondary"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(8px)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              <Sparkles size={16} />
              <span>Sample Data</span>
            </button>

            <button
              onClick={() => setCreateModalOpen(true)}
              className="btn btn-primary btn-glow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontWeight: 700,
              }}
            >
              <Plus size={18} />
              <span>Create New Resume</span>
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              backgroundColor: '#fee2e2',
              color: '#b91c1c',
              fontSize: '0.9rem',
              marginBottom: '2rem',
              border: '1px solid #fecaca',
            }}
          >
            <AlertCircle size={20} />
            <span style={{ fontWeight: 600 }}>{error}</span>
          </div>
        )}

        {/* Dynamic Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {loading ? (
            <>
              <SkeletonStatCard />
              <SkeletonStatCard />
              <SkeletonStatCard />
              <SkeletonStatCard />
            </>
          ) : (
            <>
              {/* Stat 1: Total Resumes */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FileText size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Total Resumes
                  </span>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.2 }}>
                    <AnimatedCounter value={stats.totalResumes} />
                  </div>
                </div>
              </div>

              {/* Stat 2: Total Projects */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Briefcase size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Projects Logged
                  </span>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.2 }}>
                    <AnimatedCounter value={stats.totalProjects} />
                  </div>
                </div>
              </div>

              {/* Stat 3: Total Skills */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    color: '#f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Wrench size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Skills Tagged
                  </span>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.2 }}>
                    <AnimatedCounter value={stats.totalSkills} />
                  </div>
                </div>
              </div>

              {/* Stat 4: Last Activity */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                    color: '#7c3aed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Clock size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Last Synchronized
                  </span>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginTop: '0.2rem' }}>
                    {stats.lastUpdated
                      ? new Date(stats.lastUpdated).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      : 'Just now'}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Existing Resumes Section */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
                My Resumes ({resumes.length})
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.15rem' }}>
                All resumes are strictly isolated to your account.
              </p>
            </div>

            <Link
              to="/templates"
              className="btn btn-secondary btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: 700,
                backgroundColor: '#ffffff',
              }}
            >
              <Sparkles size={15} color="#2563eb" />
              <span>Explore All 15+ Templates</span>
            </Link>
          </div>

          {loading ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.75rem',
              }}
            >
              <SkeletonResumeCard />
              <SkeletonResumeCard />
              <SkeletonResumeCard />
            </div>
          ) : resumes.length === 0 ? (
            /* Modern Empty State */
            <div
              style={{
                textAlign: 'center',
                padding: '4.5rem 2rem',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '2px dashed #cbd5e1',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
              }}
            >
              <div
                style={{
                  width: '4.5rem',
                  height: '4.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  color: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}
              >
                <FileText size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>
                You haven't created a resume yet
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.5 }}>
                Get started by creating a blank resume or generating one pre-filled with sample engineering data.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setCreateModalOpen(true)}
                  className="btn btn-primary btn-glow"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.75rem 1.75rem' }}
                >
                  <Plus size={18} />
                  <span>Create Your First Resume</span>
                </button>
                <button
                  onClick={() => handleCreateResume('placement')}
                  className="btn btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#0951b5',
                    borderColor: '#93c5fd',
                    backgroundColor: '#eff6ff',
                    fontWeight: 700,
                    padding: '0.75rem 1.5rem',
                  }}
                >
                  <GraduationCap size={18} />
                  <span>Placement Resume</span>
                </button>
              </div>
            </div>
          ) : (
            /* Resumes Cards Grid */
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.75rem',
              }}
            >
              {resumes.map((resume) => {
                const completion = calculateCompletion(resume);
                const template = getTemplateById(resume.selectedTemplate) || { name: 'Modern Sidebar', defaultColor: '#2563eb' };

                return (
                  <div
                    key={resume._id}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '18px',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                    }}
                  >
                    {/* Top Wireframe Banner Preview */}
                    <div
                      style={{
                        height: '140px',
                        backgroundColor: '#f8fafc',
                        borderBottom: '1px solid #f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ transform: 'scale(0.85)', transformOrigin: 'center' }}>
                        <TemplateThumbnail
                          templateId={resume.selectedTemplate || 'modern-sidebar'}
                          accentColor={resume.themeColor || template.defaultColor}
                          width={140}
                          height={120}
                        />
                      </div>

                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(4px)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          border: '1px solid #e2e8f0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <Layout size={12} color="#2563eb" />
                        <span>{template.name}</span>
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ marginBottom: '0.75rem' }}>
                        <h3
                          style={{
                            fontSize: '1.15rem',
                            fontWeight: 800,
                            color: '#0f172a',
                            marginBottom: '0.2rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {resume.title || 'Untitled Resume'}
                        </h3>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                          Updated {new Date(resume.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>

                      {/* Snippet details */}
                      <div style={{ fontSize: '0.825rem', color: '#475569', marginBottom: '1.25rem' }}>
                        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <strong>Target:</strong> {resume.personalInfo?.professionalTitle || 'Software Engineer'}
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.35rem', fontSize: '0.75rem', color: '#64748b' }}>
                          <span>• {resume.skills?.length || 0} skills</span>
                          <span>• {resume.projects?.length || 0} projects</span>
                          <span>• {resume.experience?.length || 0} roles</span>
                        </div>
                      </div>

                      {/* Completion Progress Bar */}
                      <div style={{ marginTop: 'auto', marginBottom: '1.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                          <span style={{ color: '#64748b' }}>Profile Strength</span>
                          <span style={{ color: completion.percentage >= 70 ? '#10b981' : '#f59e0b' }}>
                            {completion.percentage}%
                          </span>
                        </div>
                        <div style={{ height: '7px', backgroundColor: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden' }}>
                          <div
                            style={{
                              height: '100%',
                              width: `${completion.percentage}%`,
                              backgroundColor: completion.percentage >= 70 ? '#10b981' : '#f59e0b',
                              borderRadius: '9999px',
                              transition: 'width 0.5s ease',
                            }}
                          />
                        </div>
                      </div>

                      {/* Action Buttons Row */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '1rem',
                          borderTop: '1px solid #f1f5f9',
                          gap: '0.5rem',
                        }}
                      >
                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                          <Link
                            to={`/builder/${resume._id}`}
                            className="btn btn-primary btn-sm"
                            title="Edit Resume"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                          >
                            <Edit3 size={14} />
                            <span>Edit</span>
                          </Link>

                          <button
                            type="button"
                            onClick={() => setPreviewResume(resume)}
                            className="btn btn-secondary btn-sm"
                            title="Quick Preview"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: '#ffffff' }}
                          >
                            <Eye size={14} />
                            <span>Preview</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleQuickDownload(resume)}
                            className="btn btn-ghost btn-sm"
                            title="Download A4 PDF"
                            disabled={downloadingId === resume._id}
                            style={{ padding: '0.4rem 0.6rem' }}
                          >
                            <Download size={15} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => setDeleteConfirmId(resume._id)}
                          className="btn btn-ghost btn-sm"
                          style={{ color: '#ef4444', padding: '0.4rem 0.6rem' }}
                          title="Delete Resume"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* CREATE RESUME MODAL */}
      {createModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '480px',
              padding: '2rem',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
              position: 'relative',
              animation: 'slideUpFade 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <button
              onClick={() => setCreateModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#64748b',
                padding: '4px',
              }}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.4rem' }}>
              Create New Resume
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Choose a title to organize your applications (e.g. "Full Stack Developer 2026").
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <label className="saas-label">Resume Title</label>
              <input
                type="text"
                className="saas-input"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Frontend Engineer - Product Team"
                autoFocus
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => handleCreateResume(false)}
                disabled={creating}
                className="btn btn-primary btn-glow"
                style={{ justifyContent: 'center', padding: '0.85rem' }}
              >
                <Plus size={16} />
                <span>{creating ? 'Creating...' : 'Create Blank Resume'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleCreateResume('placement')}
                disabled={creating}
                className="btn btn-secondary"
                style={{
                  color: '#0951b5',
                  borderColor: '#93c5fd',
                  backgroundColor: '#eff6ff',
                  fontWeight: 700,
                  justifyContent: 'center',
                  padding: '0.85rem',
                }}
              >
                <GraduationCap size={18} color="#0951b5" />
                <span>Use Campus Placement Format</span>
              </button>

              <button
                type="button"
                onClick={() => handleCreateResume(true)}
                disabled={creating}
                className="btn btn-secondary"
                style={{
                  color: '#2563eb',
                  borderColor: '#bfdbfe',
                  backgroundColor: '#ffffff',
                  fontWeight: 700,
                  justifyContent: 'center',
                  padding: '0.85rem',
                }}
              >
                <Sparkles size={16} />
                <span>Populate with Sample Data</span>
              </button>

              <button
                type="button"
                onClick={() => setCreateModalOpen(false)}
                className="btn btn-ghost btn-sm"
                style={{ justifyContent: 'center', marginTop: '0.25rem' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QUICK PREVIEW MODAL */}
      {previewResume && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '880px',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1rem 1.75rem',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#ffffff',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>{previewResume.title}</h3>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    display: 'inline-block',
                    marginTop: '0.25rem',
                  }}
                >
                  {getTemplateById(previewResume.selectedTemplate)?.name || 'Modern Sidebar'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => {
                    const toDownload = previewResume;
                    setPreviewResume(null);
                    handleQuickDownload(toDownload);
                  }}
                  className="btn btn-secondary btn-sm"
                  style={{ color: '#059669', borderColor: '#a7f3d0', backgroundColor: '#ecfdf5', fontWeight: 600 }}
                >
                  <Download size={14} /> <span>Download PDF</span>
                </button>
                <Link to={`/builder/${previewResume._id}`} className="btn btn-primary btn-sm">
                  <Edit3 size={14} /> <span>Edit</span>
                </Link>
                <button
                  onClick={() => setPreviewResume(null)}
                  className="btn btn-ghost btn-sm"
                  style={{ padding: '0.4rem' }}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Preview Body */}
            <div style={{ overflowY: 'auto', flex: 1, padding: '1.5rem', backgroundColor: '#f1f5f9' }}>
              <ResumePreview resumeData={previewResume} />
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deleteConfirmId && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '420px',
              padding: '2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center',
              animation: 'slideUpFade 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div
              style={{
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                backgroundColor: '#fee2e2',
                color: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}
            >
              <Trash2 size={26} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>
              Delete Resume?
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              Are you sure you want to permanently delete this resume from MongoDB? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setDeleteConfirmId(null)}
                className="btn btn-secondary btn-sm"
                style={{ padding: '0.65rem 1.25rem', backgroundColor: '#ffffff' }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDeleteResume(deleteConfirmId)}
                className="btn btn-danger btn-sm"
                style={{ padding: '0.65rem 1.25rem' }}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default DashboardPage;
