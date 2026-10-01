import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  CheckCircle2,
  Code,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const ProjectDocsPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: 'calc(100vh - 4.25rem)', padding: '3rem 0 5rem' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Page Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-primary-light)',
            color: 'var(--color-primary)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
          }}>
            <BookOpen size={14} /> System Documentation & Engineering Report
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            Digital Resume Builder: System Architecture & Report
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto' }}>
            System Architecture & Engineering Documentation covering Multi-Concept Analysis,
            Database Design, API Integration, and Problem Diagnosis.
          </p>
        </div>

        {/* SECTION 1: ARCHITECTURE DIAGRAM */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
          padding: '2rem',
          marginBottom: '2.5rem',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={22} color="var(--color-primary)" />
            1. System Architecture & Infrastructure Flow
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            The application follows an enterprise 3-tier client-server architecture with reactive data binding and client-side rendering.
          </p>

          {/* ASCII Architecture Diagram Box */}
          <div style={{
            backgroundColor: '#0f172a',
            color: '#38bdf8',
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'monospace',
            fontSize: '0.825rem',
            lineHeight: 1.45,
            overflowX: 'auto',
          }}>
            <pre style={{ margin: 0 }}>
{`                         ┌──────────────────────┐
                         │        USER          │
                         │ Laptop / Mobile      │
                         └──────────┬───────────┘
                                    │
                                    ▼
                    ┌───────────────────────────┐
                    │      FRONTEND LAYER       │
                    │                           │
                    │ React.js + Vite           │
                    │ HTML + CSS + JavaScript   │
                    │ Responsive UI             │
                    └─────────────┬─────────────┘
                                  │
                           REST API / Axios
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │       BACKEND LAYER       │
                    │                           │
                    │ Node.js + Express.js      │
                    │ Authentication            │
                    │ API Controllers           │
                    │ Business Logic            │
                    └─────────────┬─────────────┘
                                  │
                              Mongoose
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │       DATABASE LAYER      │
                    │                           │
                    │        MongoDB            │
                    │                           │
                    │ User Data                 │
                    │ Resume Data               │
                    │ Education                 │
                    │ Skills                    │
                    │ Projects                  │
                    │ Experience                │
                    └───────────────────────────┘
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │      OUTPUT SERVICES      │
                    │                           │
                    │ Resume Templates          │
                    │ Live Preview              │
                    │ PDF Generator             │
                    │ Download Resume           │
                    └───────────────────────────┘`}
            </pre>
          </div>
        </div>

        {/* SECTION 2: MULTI-CONCEPT ANALYSIS */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
          padding: '2rem',
          marginBottom: '2.5rem',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={22} color="var(--color-primary)" />
            2. Multi-Concept Analysis
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)' }}>
              <h4 style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.25rem' }}>1. Component Modularity</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                Reusable React components for forms, preview panels, headers, and templates allowing isolated state maintenance and clean testing.
              </p>
            </div>

            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)' }}>
              <h4 style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.25rem' }}>2. Global & Local State Management</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                React Context API (`AuthContext`) manages user session while internal component state manages real-time debounced auto-saving.
              </p>
            </div>

            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)' }}>
              <h4 style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.25rem' }}>3. Form Validation</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                Client-side regex verification for emails, phone formatting, password complexity, and required fields before transmission.
              </p>
            </div>

            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)' }}>
              <h4 style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.25rem' }}>4. CSS Flexbox & CSS Grid</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                Two-column modern sidebar and responsive multi-panel desktop/mobile layouts engineered with CSS Grid and Flexbox.
              </p>
            </div>

            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)' }}>
              <h4 style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.25rem' }}>5. RESTful API Architecture</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                Decoupled Express REST endpoints adhering to HTTP standards (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`).
              </p>
            </div>

            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-main)' }}>
              <h4 style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.25rem' }}>6. Vector A4 PDF Generation</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                High-definition canvas scaling (scale: 2) and precise 210mm x 297mm standard dimensions without breaking styling or text sharpness.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: API AND DATABASE INTEGRATION */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
          padding: '2rem',
          marginBottom: '2.5rem',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Database size={22} color="var(--color-primary)" />
            3. API & Database Integration Specifications
          </h2>

          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem' }}>REST API Endpoints</h3>
          <div style={{ overflowX: 'auto', marginBottom: '1.75rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-main)', textAlign: 'left' }}>
                  <th style={{ padding: '0.75rem', border: '1px solid var(--border-subtle)' }}>Method</th>
                  <th style={{ padding: '0.75rem', border: '1px solid var(--border-subtle)' }}>Endpoint</th>
                  <th style={{ padding: '0.75rem', border: '1px solid var(--border-subtle)' }}>Access</th>
                  <th style={{ padding: '0.75rem', border: '1px solid var(--border-subtle)' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#059669' }}>POST</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>/api/auth/register</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Public</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Registers user & generates JWT token</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#059669' }}>POST</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>/api/auth/login</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Public</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Authenticates credentials & signs JWT</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#2563eb' }}>GET</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>/api/resumes</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Protected</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Lists user resumes and computes stats</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#059669' }}>POST</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>/api/resumes</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Protected</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Creates new blank or sample resume</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#2563eb' }}>GET</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>/api/resumes/:id</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Protected</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Fetches single resume with user ownership check</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#d97706' }}>PUT</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>/api/resumes/:id</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Protected</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Updates sections and contents of resume</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#ef4444' }}>DELETE</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>/api/resumes/:id</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Protected</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Deletes resume from MongoDB</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#7c3aed' }}>PATCH</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>/api/resumes/:id/template</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Protected</td>
                  <td style={{ padding: '0.65rem', border: '1px solid var(--border-subtle)' }}>Updates selected template & theme accent color</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4: PROBLEM DIAGNOSIS AND SOLUTION */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
          padding: '2rem',
          marginBottom: '2.5rem',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={22} color="var(--color-primary)" />
            4. Problem Diagnosis & Engineering Solution
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #fee2e2', backgroundColor: '#fffdfd' }}>
              <strong style={{ color: '#b91c1c' }}>Problem 1: Complex, Fragile Word Processing Templates</strong>
              <p style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>
                Students frequently struggle with MS Word or LaTeX formatting breaking whenever a new bullet or line is added.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#059669', marginTop: '0.25rem' }}>
                <strong>Solution:</strong> Standardized, automated component layouts that dynamically adjust typography and margins without user intervention.
              </p>
            </div>

            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #fee2e2', backgroundColor: '#fffdfd' }}>
              <strong style={{ color: '#b91c1c' }}>Problem 2: Lack of Instant Feedback & Multi-Device Preview</strong>
              <p style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>
                Users only discover page overflows or awkward line wrapping after compiling or downloading.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#059669', marginTop: '0.25rem' }}>
                <strong>Solution:</strong> A split-screen workspace with real-time reactive binding that displays live A4 rendering as the user types.
              </p>
            </div>

            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #fee2e2', backgroundColor: '#fffdfd' }}>
              <strong style={{ color: '#b91c1c' }}>Problem 3: Inability to Manage Multiple Targeted Resumes</strong>
              <p style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>
                Applying for diverse job roles (e.g. Frontend vs Backend) leads to losing previous versions when editing offline documents.
              </p>
              <p style={{ fontSize: '0.85rem', color: '#059669', marginTop: '0.25rem' }}>
                <strong>Solution:</strong> Persistent MongoDB storage allowing unlimited custom resumes per account with one-click cloning and editing.
              </p>
            </div>
          </div>
        </div>

        {/* Back to App CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/dashboard" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
            <span>Go to Resume Builder</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDocsPage;
