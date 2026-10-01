import React from 'react';
import { Award, Plus, Trash2, Calendar, Building, Link as LinkIcon } from 'lucide-react';

const CertificationsForm = ({ certifications = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...certifications,
      {
        name: '',
        organization: '',
        issueDate: '',
        credentialUrl: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    onChange(certifications.filter((_, idx) => idx !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...certifications];
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
            <Award size={18} color="var(--color-primary)" />
            Certifications
          </h3>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            Add technical credentials, vendor certifications (AWS, Meta, Google, etc.).
          </p>
        </div>
        <button onClick={handleAdd} className="btn btn-secondary btn-sm" type="button">
          <Plus size={15} />
          <span>Add Certificate</span>
        </button>
      </div>

      {certifications.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '1.5rem 1rem',
          backgroundColor: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-hover)',
        }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            No certificates added yet.
          </p>
          <button onClick={handleAdd} className="btn btn-secondary btn-sm" type="button">
            <Plus size={13} /> Add Certificate
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              style={{
                padding: '1rem',
                backgroundColor: 'var(--bg-main)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  Certificate #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(idx)}
                  className="btn btn-ghost btn-sm"
                  style={{ color: '#ef4444', padding: '0.2rem' }}
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                <div>
                  <label style={labelStyle}>Certificate Name *</label>
                  <input
                    type="text"
                    value={cert.name || ''}
                    onChange={(e) => handleChange(idx, 'name', e.target.value)}
                    placeholder="e.g. AWS Certified Developer"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Issuing Organization</label>
                  <input
                    type="text"
                    value={cert.organization || ''}
                    onChange={(e) => handleChange(idx, 'organization', e.target.value)}
                    placeholder="e.g. Amazon Web Services"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Issue Date</label>
                  <input
                    type="text"
                    value={cert.issueDate || ''}
                    onChange={(e) => handleChange(idx, 'issueDate', e.target.value)}
                    placeholder="e.g. 2024"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Verification / Credential URL</label>
                  <input
                    type="url"
                    value={cert.credentialUrl || ''}
                    onChange={(e) => handleChange(idx, 'credentialUrl', e.target.value)}
                    placeholder="https://..."
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

export default CertificationsForm;
