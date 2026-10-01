import React from 'react';
import { Heart, Code2, Database, Layers } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="no-print" style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid var(--border-subtle)',
      padding: '2.5rem 0 1.5rem',
      marginTop: 'auto',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              Digital Resume Builder
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              A full-stack MERN Web Application for creating ATS-friendly professional resumes.
            </p>
          </div>

          {/* Tech stack badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge badge-primary">
              <Code2 size={12} /> React.js + Vite
            </span>
            <span className="badge badge-primary">
              <Layers size={12} /> Node.js & Express
            </span>
            <span className="badge badge-primary">
              <Database size={12} /> MongoDB & Mongoose
            </span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.25rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <div>
            <p>© {new Date().getFullYear()} Digital Resume Builder. Built by Subash R using modern web engineering practices.</p>
            <p style={{ marginTop: '0.25rem' }}>
              Contact:{' '}
              <a
                href="mailto:subashpro2006@gmail.com"
                style={{
                  color: 'var(--color-primary)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '2px',
                  fontWeight: 600,
                }}
              >
                subashpro2006@gmail.com
              </a>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>• Multi-Concept Analysis</span>
            <span>• System Architecture</span>
            <span>• API & Database Integration</span>
            <span>• Problem Diagnosis</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
