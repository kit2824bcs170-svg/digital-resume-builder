import React from 'react';
import { Languages, Plus, Trash2 } from 'lucide-react';

const PROFICIENCY_OPTIONS = [
  'Native / Bilingual',
  'Professional / Fluent',
  'Intermediate',
  'Elementary / Basic',
];

const LanguagesForm = ({ languages = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...languages,
      {
        language: '',
        proficiency: 'Professional / Fluent',
      },
    ]);
  };

  const handleRemove = (index) => {
    onChange(languages.filter((_, idx) => idx !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...languages];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    onChange(updated);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Languages size={18} color="var(--color-primary)" />
            Languages
          </h3>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            List languages you speak or write along with your fluency level.
          </p>
        </div>
        <button onClick={handleAdd} className="btn btn-secondary btn-sm" type="button">
          <Plus size={15} />
          <span>Add Language</span>
        </button>
      </div>

      {languages.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '1.5rem 1rem',
          backgroundColor: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-hover)',
        }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            No languages added yet.
          </p>
          <button onClick={handleAdd} className="btn btn-secondary btn-sm" type="button">
            <Plus size={13} /> Add Language
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem' }}>
          {languages.map((l, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.65rem 0.85rem',
                backgroundColor: 'var(--bg-main)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <input
                type="text"
                value={l.language || ''}
                onChange={(e) => handleChange(idx, 'language', e.target.value)}
                placeholder="e.g. English, French"
                style={{
                  flex: '1 1 auto',
                  padding: '0.45rem 0.65rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />

              <select
                value={l.proficiency || 'Professional / Fluent'}
                onChange={(e) => handleChange(idx, 'proficiency', e.target.value)}
                style={{
                  padding: '0.45rem 0.6rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.825rem',
                  backgroundColor: '#ffffff',
                  outline: 'none',
                }}
              >
                {PROFICIENCY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => handleRemove(idx)}
                className="btn btn-ghost btn-sm"
                style={{ color: '#ef4444', padding: '0.3rem' }}
                title="Remove language"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagesForm;
