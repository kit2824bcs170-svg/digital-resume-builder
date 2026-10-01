import React from 'react';
import { FolderGit2, Plus, Trash2, Github, ExternalLink, Code } from 'lucide-react';

const ProjectsForm = ({ projects = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...projects,
      {
        name: '',
        description: '',
        technologies: '',
        githubLink: '',
        projectLink: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    onChange(projects.filter((_, idx) => idx !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...projects];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    onChange(updated);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.6rem 0.75rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-subtle)',
    fontSize: '0.875rem',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.775rem',
    fontWeight: 600,
    color: 'var(--text-main)',
    marginBottom: '0.3rem',
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FolderGit2 size={18} color="var(--color-primary)" />
            Projects
          </h3>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            Showcase your best personal, professional, or open-source projects.
          </p>
        </div>
        <button onClick={handleAdd} className="btn btn-secondary btn-sm" type="button">
          <Plus size={15} />
          <span>Add Project</span>
        </button>
      </div>

      {projects.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          backgroundColor: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-hover)',
        }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            No projects added yet.
          </p>
          <button onClick={handleAdd} className="btn btn-primary btn-sm" type="button">
            <Plus size={14} /> Add First Project
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {projects.map((proj, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.25rem',
                backgroundColor: 'var(--bg-main)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  Project #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(idx)}
                  className="btn btn-ghost btn-sm"
                  style={{ color: '#ef4444', padding: '0.3rem' }}
                  title="Remove project"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '0.85rem' }}>
                <div>
                  <label style={labelStyle}>Project Name *</label>
                  <input
                    type="text"
                    value={proj.name || ''}
                    onChange={(e) => handleChange(idx, 'name', e.target.value)}
                    placeholder="e.g. Digital Resume Builder"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Tech Stack / Tools</label>
                  <input
                    type="text"
                    value={proj.technologies || ''}
                    onChange={(e) => handleChange(idx, 'technologies', e.target.value)}
                    placeholder="e.g. React, Node.js, Express, MongoDB"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>GitHub Repository Link</label>
                  <input
                    type="url"
                    value={proj.githubLink || ''}
                    onChange={(e) => handleChange(idx, 'githubLink', e.target.value)}
                    placeholder="https://github.com/..."
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Live Demo / Website Link</label>
                  <input
                    type="url"
                    value={proj.projectLink || ''}
                    onChange={(e) => handleChange(idx, 'projectLink', e.target.value)}
                    placeholder="https://..."
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Project Description & Impact</label>
                <textarea
                  rows={3}
                  value={proj.description || ''}
                  onChange={(e) => handleChange(idx, 'description', e.target.value)}
                  placeholder="Describe the problem solved, core features, architecture, and metrics..."
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.875rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;
