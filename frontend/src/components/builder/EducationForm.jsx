import React from 'react';
import { GraduationCap, Plus, Trash2, Calendar, Building, Award } from 'lucide-react';

const EducationForm = ({ education = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...education,
      {
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startYear: '',
        endYear: '',
        score: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    const updated = education.filter((_, idx) => idx !== index);
    onChange(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...education];
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
            <GraduationCap size={18} color="var(--color-primary)" />
            Education
          </h3>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            List your degree, university, educational background, and grades.
          </p>
        </div>
        <button onClick={handleAdd} className="btn btn-secondary btn-sm" type="button">
          <Plus size={15} />
          <span>Add Education</span>
        </button>
      </div>

      {education.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          backgroundColor: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-hover)',
        }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            No education entries added yet.
          </p>
          <button onClick={handleAdd} className="btn btn-primary btn-sm" type="button">
            <Plus size={14} /> Add First Degree
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {education.map((edu, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.25rem',
                backgroundColor: 'var(--bg-main)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  Entry #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(idx)}
                  className="btn btn-ghost btn-sm"
                  style={{ color: '#ef4444', padding: '0.3rem' }}
                  title="Remove this education"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                <div>
                  <label style={labelStyle}>Degree / Certificate *</label>
                  <input
                    type="text"
                    value={edu.degree || ''}
                    onChange={(e) => handleChange(idx, 'degree', e.target.value)}
                    placeholder="e.g. B.Tech Computer Science"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Institution / University *</label>
                  <input
                    type="text"
                    value={edu.institution || ''}
                    onChange={(e) => handleChange(idx, 'institution', e.target.value)}
                    placeholder="e.g. State Institute of Technology"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Field of Study / Branch</label>
                  <input
                    type="text"
                    value={edu.fieldOfStudy || ''}
                    onChange={(e) => handleChange(idx, 'fieldOfStudy', e.target.value)}
                    placeholder="e.g. Computer Science & Engg."
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>CGPA / Percentage</label>
                  <input
                    type="text"
                    value={edu.score || ''}
                    onChange={(e) => handleChange(idx, 'score', e.target.value)}
                    placeholder="e.g. 8.9 CGPA or 85%"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Start Year</label>
                  <input
                    type="text"
                    value={edu.startYear || ''}
                    onChange={(e) => handleChange(idx, 'startYear', e.target.value)}
                    placeholder="e.g. 2021"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>End Year / Expected</label>
                  <input
                    type="text"
                    value={edu.endYear || ''}
                    onChange={(e) => handleChange(idx, 'endYear', e.target.value)}
                    placeholder="e.g. 2025"
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
