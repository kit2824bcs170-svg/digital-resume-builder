import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Database,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Download,
  Eye,
  FileText,
  Star,
  ExternalLink,
  Code2,
  ChevronRight,
} from 'lucide-react';
import { TEMPLATES } from '../templates/templatesRegistry';
import TemplateThumbnail from '../components/templates/TemplateThumbnail';

const LandingPage = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('all');

  // Featured templates for the showcase
  const featuredTemplates = TEMPLATES.slice(0, 6);

  return (
    <div style={{ minHeight: 'calc(100vh - 4.25rem)', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 0 5rem',
          background: 'radial-gradient(ellipse at top, #eff6ff 0%, #f8fafc 60%, #ffffff 100%)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
          overflow: 'hidden',
        }}
      >
        {/* Background glow orbs */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-10%',
            right: '5%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '-5%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Value Prop */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                  color: '#2563eb',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                }}
              >
                <Sparkles size={16} />
                <span>Next-Generation Resume Platform</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.6rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: '1.25rem',
                  color: '#0f172a',
                  letterSpacing: '-0.03em',
                }}
              >
                Build High-Impact Resumes in{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Real Time
                </span>
              </h1>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: '#475569',
                  lineHeight: 1.65,
                  marginBottom: '2rem',
                  maxWidth: '560px',
                }}
              >
                Create recruiter-ready, ATS-optimized resumes in minutes. Choose from 15+ handcrafted modern templates,
                see changes live on split-screen, and export pixel-perfect A4 PDFs with 1 click.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {isAuthenticated ? (
                  <Link
                    to="/dashboard"
                    className="btn btn-primary btn-glow"
                    style={{
                      padding: '0.85rem 2rem',
                      fontSize: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span>Open My Dashboard</span>
                    <ArrowRight size={18} />
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="btn btn-primary btn-glow"
                      style={{
                        padding: '0.85rem 2rem',
                        fontSize: '1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span>Create Free Resume</span>
                      <ArrowRight size={18} />
                    </Link>
                    <Link
                      to="/login"
                      className="btn btn-outline"
                      style={{
                        padding: '0.85rem 1.75rem',
                        fontSize: '1rem',
                        backgroundColor: '#ffffff',
                      }}
                    >
                      <span>Sign In</span>
                    </Link>
                  </>
                )}

                <Link
                  to="/templates"
                  className="btn btn-secondary"
                  style={{
                    padding: '0.85rem 1.5rem',
                    fontSize: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <Eye size={18} />
                  <span>Browse 15+ Templates</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  fontSize: '0.875rem',
                  color: '#64748b',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={16} color="#10b981" />
                  <span>100% ATS Compliant</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={16} color="#10b981" />
                  <span>Instant Vector PDF</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={16} color="#10b981" />
                  <span>Private & Isolated</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating 3D Interactive Resume Card Preview */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                perspective: '1200px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '430px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(226, 232, 240, 0.9)',
                  overflow: 'hidden',
                  transform: 'rotateY(-4deg) rotateX(3deg)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  animation: 'floatAnimation 4s ease-in-out infinite',
                }}
              >
                {/* Mock Window Top Bar */}
                <div
                  style={{
                    backgroundColor: '#0f172a',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
                    Live ATS Preview • Modern Sidebar
                  </div>
                </div>

                {/* Resume Header Simulation */}
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.15rem' }}>
                        Alex Morgan
                      </h3>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2563eb' }}>
                        Senior Full-Stack Engineer
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        backgroundColor: '#ecfdf5',
                        color: '#059669',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      ATS 98%
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b', flexWrap: 'wrap' }}>
                    <span>San Francisco, CA</span>
                    <span>•</span>
                    <span>alex@example.com</span>
                    <span>•</span>
                    <span>github.com/alexmorgan</span>
                  </div>
                </div>

                {/* Resume Body Simulation */}
                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', backgroundColor: '#fafbfc' }}>
                  {/* Left Column */}
                  <div style={{ width: '65%', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #2563eb', paddingBottom: '0.2rem', marginBottom: '0.4rem' }}>
                        Experience
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>
                        Lead Software Architect
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '0.25rem' }}>
                        TechCorp • 2022 - Present
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#475569', lineHeight: 1.4 }}>
                        Built high-throughput distributed microservices serving 2.5M+ requests daily with 99.99% uptime.
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #2563eb', paddingBottom: '0.2rem', marginBottom: '0.4rem' }}>
                        Projects
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>
                        Distributed Cache Engine
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#475569', lineHeight: 1.4 }}>
                        Designed low-latency in-memory data store in Rust, cutting DB query load by 43%.
                      </div>
                    </div>
                  </div>

                  {/* Right Column / Sidebar */}
                  <div style={{ width: '35%', display: 'flex', flexDirection: 'column', gap: '0.85rem', borderLeft: '1px solid #e2e8f0', paddingLeft: '0.85rem' }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                        Skills
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                        {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((s) => (
                          <span
                            key={s}
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 600,
                              backgroundColor: '#ffffff',
                              border: '1px solid #cbd5e1',
                              padding: '0.15rem 0.35rem',
                              borderRadius: '4px',
                              color: '#334155',
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                        Profiles
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#2563eb', fontWeight: 600 }}>
                        LeetCode: Top 2% (2150+)
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
                        Codeforces: Expert
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '0.75rem 1.25rem',
                    borderTop: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
                    <CheckCircle size={14} />
                    <span>Real-time Sync Active</span>
                  </div>
                  <Link
                    to="/templates"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#2563eb',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <span>View Template</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '2rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#2563eb' }}>15+</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>Curated Templates</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#10b981' }}>100%</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>ATS Compatibility</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#7c3aed' }}>0s</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>Instant Live Preview</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>Vector</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>High-Res PDF Export</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates Showcase */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#2563eb',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}
              >
                Curated Designs
              </div>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em' }}>
                Templates Crafted for Every Career Stage
              </h2>
            </div>

            <Link
              to="/templates"
              className="btn btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#ffffff',
              }}
            >
              <span>View All 15+ Templates</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Template Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {featuredTemplates.map((template) => (
              <div
                key={template.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* Thumbnail Container */}
                <div
                  style={{
                    height: '240px',
                    backgroundColor: '#f1f5f9',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.75rem',
                  }}
                >
                  <TemplateThumbnail
                    templateId={template.id}
                    accentColor={template.defaultColor}
                    width={200}
                    height={220}
                  />

                  {template.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        backgroundColor: '#0f172a',
                        color: '#ffffff',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.6rem',
                        borderRadius: '9999px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      }}
                    >
                      {template.badge}
                    </div>
                  )}
                </div>

                {/* Template Info */}
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>{template.name}</h4>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: template.atsFriendly ? '#059669' : '#64748b',
                        backgroundColor: template.atsFriendly ? '#ecfdf5' : '#f1f5f9',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {template.atsFriendly ? 'ATS Ready' : 'Visual'}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.825rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1rem', flex: 1 }}>
                    {template.description}
                  </p>

                  <Link
                    to={isAuthenticated ? `/dashboard` : `/register`}
                    className="btn btn-outline btn-sm"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>Use This Template</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core System Concepts (Preserved & Modernized) */}
      <section style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#2563eb',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
              }}
            >
              Engineering Excellence
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
              Core System Concepts
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>
              Architected for high performance, deterministic privacy isolation, and full-stack engineering integrity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.75rem' }}>
            {/* Concept 1 */}
            <div
              style={{
                padding: '2rem',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 20px -3px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
              }}
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
                  marginBottom: '1.25rem',
                }}
              >
                <Cpu size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                1. Multi-Concept Analysis
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                Demonstrates modular React component architecture, reactive state synchronizers, form validation pipelines, and vector A4 PDF generation.
              </p>
            </div>

            {/* Concept 2 */}
            <div
              style={{
                padding: '2rem',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 20px -3px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
              }}
            >
              <div
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '12px',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Layers size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                2. System Architecture
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                Decoupled multi-tier stack: Modern Client SPA → Authenticated Axios API Layer → Express Service Layer → Isolated MongoDB Document Store.
              </p>
            </div>

            {/* Concept 3 */}
            <div
              style={{
                padding: '2rem',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 20px -3px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
              }}
            >
              <div
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '12px',
                  backgroundColor: '#fef3c7',
                  color: '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Database size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                3. API & Database Integration
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                Full RESTful endpoints, cryptographic JWT auth middleware, schema validations, user-scoped queries, and live dashboard metrics.
              </p>
            </div>

            {/* Concept 4 */}
            <div
              style={{
                padding: '2rem',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 20px -3px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
              }}
            >
              <div
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '12px',
                  backgroundColor: '#f3e8ff',
                  color: '#7c3aed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                4. Problem Diagnosis & Privacy
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                Enforces strict authenticated user data isolation. Prevents layout drift, manual formatting bugs, and ensures 100% resume privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid rgba(226, 232, 240, 0.8)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              How Digital Resume Builder Works
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              From initial input to recruiter-ready PDF in 3 straightforward steps.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '2.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#2563eb',
                  marginBottom: '1rem',
                  letterSpacing: '-0.03em',
                }}
              >
                01
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                Enter Your Credentials
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Fill in structured form sections for Education, Skills, Projects, Experience, Certifications, and Competitive Programming handles.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '2.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#2563eb',
                  marginBottom: '1rem',
                  letterSpacing: '-0.03em',
                }}
              >
                02
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                Select Template & Preview
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Switch effortlessly between 15+ modern templates. Watch updates render instantaneously on the side-by-side preview canvas.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '2.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#2563eb',
                  marginBottom: '1rem',
                  letterSpacing: '-0.03em',
                }}
              >
                03
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                Download Crisp PDF
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Export your finalized resume as a pixel-perfect standard A4 PDF ready for job applications and campus placement portals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section
        style={{
          position: 'relative',
          padding: '5rem 0',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: '#ffffff',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '720px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              marginBottom: '1rem',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Ready to Build Your Professional Resume?
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            Join job seekers and students crafting ATS-compliant, recruiter-ready resumes in minutes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/register"
              className="btn btn-primary btn-glow"
              style={{
                padding: '0.9rem 2.25rem',
                fontSize: '1.05rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Get Started Free</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/templates"
              className="btn btn-secondary"
              style={{
                padding: '0.9rem 1.75rem',
                fontSize: '1.05rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span>Explore Templates</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
