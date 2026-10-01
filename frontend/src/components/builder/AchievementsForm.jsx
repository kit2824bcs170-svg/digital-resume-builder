import React from 'react';
import { Trophy, Plus, Trash2 } from 'lucide-react';

const AchievementsForm = ({ achievements = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...achievements,
      {
        title: '',
        description: '',
        date: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    onChange(achievements.filter((_, idx) => idx !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...achievements];
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
            <Trophy size={18} color="var(--color-primary)" />
            Key Achievements & Honors
          </h3>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            Hackathon wins, coding contest ranks, academic awards, or leadership honors.
          </p>
        </div>
        <button onClick={handleAdd} className="btn btn-secondary btn-sm" type="button">
          <Plus size={15} />
          <span>Add Achievement</span>
        </button>
      </div>

      {achievements.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '1.5rem 1rem',
          backgroundColor: 'var(--bg-main)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-hover)',
        }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            No achievements added yet.
          </p>
          <button onClick={handleAdd} className="btn btn-secondary btn-sm" type="button">
            <Plus size={13} /> Add Achievement
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {achievements.map((ach, idx) => (
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
                  Achievement #{idx + 1}
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

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div>
                  <label style={labelStyle}>Achievement / Award Title *</label>
                  <input
                    type="text"
                    value={ach.title || ''}
                    onChange={(e) => handleChange(idx, 'title', e.target.value)}
                    placeholder="e.g. 1st Place - Smart India Hackathon"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Date / Year</label>
                  <input
                    type="text"
                    value={ach.date || ''}
                    onChange={(e) => handleChange(idx, 'date', e.target.value)}
                    placeholder="e.g. Oct 2023"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Details / Context</label>
                <input
                  type="text"
                  value={ach.description || ''}
                  onChange={(e) => handleChange(idx, 'description', e.target.value)}
                  placeholder="e.g. Selected top solution out of 100+ competing engineering teams..."
                  style={inputStyle}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AchievementsForm;
