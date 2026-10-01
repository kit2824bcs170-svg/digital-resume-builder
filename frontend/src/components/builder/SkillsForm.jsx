import React, { useState } from 'react';
import { Wrench, Plus, X, Tag } from 'lucide-react';

const POPULAR_SUGGESTIONS = [
  'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB',
  'Python', 'Java', 'C++', 'SQL', 'Git & GitHub', 'REST APIs',
  'HTML5 & CSS3', 'Tailwind CSS', 'Docker', 'AWS', 'Data Structures'
];

const SkillsForm = ({ skills = [], onChange }) => {
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState('Technical');
  const [newSkillLevel, setNewSkillLevel] = useState('Intermediate');

  const handleAddSkill = (e) => {
    if (e) e.preventDefault();
    const trimmed = newSkillName.trim();
    if (!trimmed) return;

    if (skills.some((s) => s.name.toLowerCase() === trimmed.toLowerCase())) {
      setNewSkillName('');
      return;
    }

    onChange([
      ...skills,
      {
        name: trimmed,
        category: newSkillCategory,
        level: newSkillLevel,
      },
    ]);
    setNewSkillName('');
  };

  const handleRemoveSkill = (index) => {
    onChange(skills.filter((_, idx) => idx !== index));
  };

  const handleQuickAdd = (skillName) => {
    if (skills.some((s) => s.name.toLowerCase() === skillName.toLowerCase())) return;
    onChange([
      ...skills,
      {
        name: skillName,
        category: 'Technical',
        level: 'Intermediate',
      },
    ]);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Wrench size={18} color="var(--color-primary)" />
        Skills & Technologies
      </h3>
      <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
        Highlight technical, programming, and domain skill sets.
      </p>

      {/* Input row */}
      <form onSubmit={handleAddSkill} style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        <div style={{ flex: '1 1 200px' }}>
          <input
            type="text"
            value={newSkillName}
            onChange={(e) => setNewSkillName(e.target.value)}
            placeholder="Type skill name (e.g. React, Python, SQL)..."
            style={{
              width: '100%',
              padding: '0.6rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
        </div>

        <select
          value={newSkillLevel}
          onChange={(e) => setNewSkillLevel(e.target.value)}
          style={{
            padding: '0.6rem 0.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.85rem',
            backgroundColor: '#fff',
            outline: 'none',
          }}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>

        <button type="submit" className="btn btn-primary btn-sm" style={{ padding: '0.6rem 1rem' }}>
          <Plus size={15} /> Add Skill
        </button>
      </form>

      {/* Popular suggestions */}
      <div style={{ marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
          QUICK ADD POPULAR SKILLS:
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {POPULAR_SUGGESTIONS.map((s) => {
            const alreadyAdded = skills.some((item) => item.name.toLowerCase() === s.toLowerCase());
            if (alreadyAdded) return null;
            return (
              <button
                key={s}
                type="button"
                onClick={() => handleQuickAdd(s)}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.55rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-main)',
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                <Plus size={11} /> {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Skills List */}
      <div>
        <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
          Added Skills ({skills.length}):
        </label>
        {skills.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            No skills added yet. Use the input above or click a suggestion.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                }}
              >
                <span>{skill.name}</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 400 }}>({skill.level})</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(idx)}
                  style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}
                  title="Remove skill"
                >
                  <X size={13} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsForm;
