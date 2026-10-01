import React from 'react';
import { Terminal, Plus, Trash2, Award, Zap } from 'lucide-react';

const POPULAR_PLATFORMS = [
  'LeetCode',
  'CodeChef',
  'Codeforces',
  'HackerRank',
  'GeeksforGeeks',
  'AtCoder',
];

const CompetitiveProgrammingForm = ({ competitiveProgramming = [], onChange }) => {
  const handleAdd = (platformName = '') => {
    onChange([
      ...competitiveProgramming,
      {
        platform: platformName || '',
        details: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    onChange(competitiveProgramming.filter((_, idx) => idx !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...competitiveProgramming];
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
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Terminal size={18} color="var(--color-primary)" />
            Competitive Programming
          </h3>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            Showcase your contest ratings, solved problems count, badges, and rankings across coding platforms.
          </p>
        </div>
        <button onClick={() => handleAdd('')} className="btn btn-secondary btn-sm" type="button">
          <Plus size={15} />
          <span>Add Platform</span>
        </button>
      </div>

      {/* Quick Add Platform Chips */}
      <div style={{ marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
          Quick Add Platform:
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {POPULAR_PLATFORMS.map((plat) => {
            const alreadyAdded = competitiveProgramming.some(
              (cp) => cp.platform && cp.platform.toLowerCase() === plat.toLowerCase()
            );
            return (
              <button
                key={plat}
                type="button"
                onClick={() => handleAdd(plat)}
                disabled={alreadyAdded}
                className="btn btn-ghost btn-sm"
                style={{
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: alreadyAdded ? '#f1f5f9' : '#eff6ff',
                  color: alreadyAdded ? '#94a3b8' : '#2563eb',
                  border: `1px solid ${alreadyAdded ? '#e2e8f0' : '#bfdbfe'}`,
                  cursor: alreadyAdded ? 'not-allowed' : 'pointer',
                }}
              >
                + {plat}
              </button>
            );
          })}
        </div>
      </div>

      {competitiveProgramming.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '2rem 1rem',
            backgroundColor: 'var(--bg-main)',
            borderRadius: 'var(--radius-md)',
            border: '1px dashed var(--border-hover)',
          }}
        >
          <Award size={32} color="var(--text-muted)" style={{ margin: '0 auto 0.5rem', opacity: 0.5 }} />
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
            No competitive programming entries yet
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem', maxWidth: '360px', margin: '0 auto 1rem' }}>
            Highlight your LeetCode, CodeChef, Codeforces or HackerRank achievements to stand out in technical placements.
          </p>
          <button onClick={() => handleAdd('LeetCode')} className="btn btn-secondary btn-sm" type="button">
            <Zap size={13} /> Add LeetCode Profile
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {competitiveProgramming.map((cp, idx) => (
            <div
              key={idx}
              style={{
                padding: '1rem',
                backgroundColor: 'var(--bg-main)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                }}
              >
                <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  Platform #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(idx)}
                  className="btn btn-ghost btn-sm"
                  style={{ color: '#ef4444', padding: '0.2rem' }}
                  title="Remove platform"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                <div>
                  <label style={labelStyle}>Platform Name *</label>
                  <input
                    type="text"
                    value={cp.platform || ''}
                    onChange={(e) => handleChange(idx, 'platform', e.target.value)}
                    placeholder="e.g. LeetCode, CodeChef, Codeforces, HackerRank"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Ratings & Accomplishment Details *</label>
                  <textarea
                    rows={2}
                    value={cp.details || ''}
                    onChange={(e) => handleChange(idx, 'details', e.target.value)}
                    placeholder="e.g. Max rating – 1799 | Solved problems: 500+ | Top 20.1% globally | Badges: 7 | Highest Rank: 1720"
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem', display: 'block' }}>
                    Tip: Separate metrics with pipes (|) to match the clean placement standard format.
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompetitiveProgrammingForm;
