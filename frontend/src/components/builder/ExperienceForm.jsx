import React from 'react';
import { Briefcase, Plus, Trash2, Calendar, MapPin, Building2 } from 'lucide-react';

const ExperienceForm = ({ experience = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...experience,
      {
        jobTitle: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    onChange(experience.filter((_, idx) => idx !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...experience];
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
            <Briefcase size={18} color="var(--color-primary)" />
            Work Experience & Internships
          </h3>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            Include internships, part-time jobs, freelance, or full-time roles.
          </p>
        </div>
        <button onClick={handleAdd} className="btn btn-secondary btn-sm" type="button">
          <Plus size={15} />
          <span>Add Position</span>
        </button>
      </div>

      {experience.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          backgroundColor: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-hover)',
        }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            No work experience added yet. Freshers can leave this blank or add internships/freelance work.
          </p>
          <button onClick={handleAdd} className="btn btn-primary btn-sm" type="button">
            <Plus size={14} /> Add Role
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {experience.map((exp, idx) => (
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
                  Position #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(idx)}
                  className="btn btn-ghost btn-sm"
                  style={{ color: '#ef4444', padding: '0.3rem' }}
                  title="Remove experience"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginBottom: '0.85rem' }}>
                <div>
                  <label style={labelStyle}>Job Title / Role *</label>
                  <input
                    type="text"
                    value={exp.jobTitle || ''}
                    onChange={(e) => handleChange(idx, 'jobTitle', e.target.value)}
                    placeholder="e.g. Software Engineer Intern"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Company / Organization *</label>
                  <input
                    type="text"
                    value={exp.company || ''}
                    onChange={(e) => handleChange(idx, 'company', e.target.value)}
                    placeholder="e.g. Tech Innovations Corp."
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Location</label>
                  <input
                    type="text"
                    value={exp.location || ''}
                    onChange={(e) => handleChange(idx, 'location', e.target.value)}
                    placeholder="e.g. Remote or San Francisco, CA"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Start Date</label>
                  <input
                    type="text"
                    value={exp.startDate || ''}
                    onChange={(e) => handleChange(idx, 'startDate', e.target.value)}
                    placeholder="e.g. Jan 2023"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <label style={{ ...labelStyle, marginBottom: 0 }}>End Date</label>
                    <label style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={exp.current || false}
                        onChange={(e) => handleChange(idx, 'current', e.target.checked)}
                      />
                      <span>Currently working here</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    disabled={exp.current}
                    value={exp.current ? 'Present' : exp.endDate || ''}
                    onChange={(e) => handleChange(idx, 'endDate', e.target.value)}
                    placeholder="e.g. Dec 2023"
                    style={{
                      ...inputStyle,
                      backgroundColor: exp.current ? '#f1f5f9' : '#ffffff',
                      color: exp.current ? '#64748b' : 'inherit',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Key Responsibilities & Achievements</label>
                <textarea
                  rows={3}
                  value={exp.description || ''}
                  onChange={(e) => handleChange(idx, 'description', e.target.value)}
                  placeholder="• Developed RESTful microservices that processed 10,000+ daily orders&#10;• Reduced latency by 20% using Redis caching and query indexing"
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

export default ExperienceForm;
