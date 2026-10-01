import React, { useState, useMemo } from 'react';
import { X, Check, Search, Sparkles, Sliders, Palette, Eye, ArrowRight } from 'lucide-react';
import {
  TEMPLATES,
  TEMPLATE_CATEGORIES,
  THEME_COLOR_PRESETS,
  FONT_SIZES,
  SPACING_OPTIONS,
} from '../../templates/templatesRegistry';
import TemplateThumbnail from '../templates/TemplateThumbnail';

const TemplateSelectorModal = ({
  isOpen,
  onClose,
  selectedTemplate,
  onSelectTemplate,
  themeColor,
  onSelectColor,
  fontSize,
  onSelectFontSize,
  sectionSpacing,
  onSelectSpacing,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('templates'); // 'templates' | 'customize'

  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((tmpl) => {
      // Exclude backward compatibility duplicate aliases from card display
      if (tmpl.id === 'modern' || tmpl.id === 'classic' || tmpl.id === 'minimal') {
        return false;
      }
      const matchesCategory =
        activeCategory === 'All' || tmpl.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch =
        tmpl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tmpl.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tmpl.tags && tmpl.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
    >
      <div
        className="animate-fade-in"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-xl, 16px)',
          width: '100%',
          maxWidth: '1080px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '92vh',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                Professional Template Gallery
              </h2>
              <span className="badge badge-primary" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                15+ Layouts
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>
              ATS-tested, modern layouts inspired by world-class career platforms. Your resume data adapts instantly.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* View Switcher: Templates vs Customization */}
            <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '0.2rem', borderRadius: '8px' }}>
              <button
                type="button"
                onClick={() => setActiveTab('templates')}
                style={{
                  border: 'none',
                  background: activeTab === 'templates' ? '#ffffff' : 'transparent',
                  color: activeTab === 'templates' ? 'var(--color-primary)' : '#64748b',
                  boxShadow: activeTab === 'templates' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '6px',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Sparkles size={14} /> Templates
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('customize')}
                style={{
                  border: 'none',
                  background: activeTab === 'customize' ? '#ffffff' : 'transparent',
                  color: activeTab === 'customize' ? 'var(--color-primary)' : '#64748b',
                  boxShadow: activeTab === 'customize' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '6px',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Palette size={14} /> Style & Color
              </button>
            </div>

            <button
              onClick={onClose}
              className="btn btn-ghost btn-sm"
              style={{ padding: '0.4rem', borderRadius: '50%' }}
              title="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {activeTab === 'templates' ? (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
            {/* Filter & Search Bar */}
            <div
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#f8fafc',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              {/* Category Pills */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {TEMPLATE_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        padding: '0.35rem 0.85rem',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        border: '1px solid',
                        borderColor: isActive ? 'var(--color-primary)' : '#cbd5e1',
                        backgroundColor: isActive ? 'var(--color-primary)' : '#ffffff',
                        color: isActive ? '#ffffff' : '#475569',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div style={{ position: 'relative', minWidth: '220px' }}>
                <Search
                  size={15}
                  color="#94a3b8"
                  style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }}
                />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.45rem 0.75rem 0.45rem 2.25rem',
                    fontSize: '0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                  }}
                />
              </div>
            </div>

            {/* Template Cards Grid */}
            <div
              style={{
                padding: '1.75rem 2rem',
                overflowY: 'auto',
                flex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filteredTemplates.map((tmpl) => {
                const isSelected =
                  selectedTemplate === tmpl.id ||
                  (tmpl.id === 'modern-sidebar' && selectedTemplate === 'modern') ||
                  (tmpl.id === 'classic-pro' && selectedTemplate === 'classic') ||
                  (tmpl.id === 'minimal-ats' && selectedTemplate === 'minimal') ||
                  (tmpl.id === 'placement' && selectedTemplate === 'madhumithra');

                return (
                  <div
                    key={tmpl.id}
                    style={{
                      borderRadius: '12px',
                      border: `2px solid ${isSelected ? 'var(--color-primary)' : '#e2e8f0'}`,
                      backgroundColor: '#ffffff',
                      boxShadow: isSelected
                        ? '0 10px 20px -5px rgba(37, 99, 235, 0.25)'
                        : '0 2px 6px rgba(0, 0, 0, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                  >
                    {/* Visual Card Preview Wireframe */}
                    <div
                      style={{
                        height: '240px',
                        backgroundColor: '#f8fafc',
                        padding: '12px',
                        position: 'relative',
                        cursor: 'pointer',
                        overflow: 'hidden',
                      }}
                      onClick={() => onSelectTemplate(tmpl.id)}
                    >
                      <TemplateThumbnail templateId={tmpl.id} accentColor={themeColor || tmpl.defaultColor} />

                      {/* Top Badges */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '18px',
                          left: '18px',
                          display: 'flex',
                          gap: '4px',
                        }}
                      >
                        {tmpl.badge && (
                          <span
                            style={{
                              backgroundColor: '#0f172a',
                              color: '#ffffff',
                              fontSize: '0.65rem',
                              fontWeight: 800,
                              textTransform: 'uppercase',
                              padding: '0.2rem 0.45rem',
                              borderRadius: '4px',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {tmpl.badge}
                          </span>
                        )}
                      </div>

                      {/* Selected Indicator Checkmark */}
                      {isSelected && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '18px',
                            right: '18px',
                            backgroundColor: 'var(--color-primary)',
                            color: '#ffffff',
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 8px rgba(37, 99, 235, 0.4)',
                          }}
                        >
                          <Check size={16} strokeWidth={3} />
                        </div>
                      )}
                    </div>

                    {/* Card Content & Actions */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                          {tmpl.name}
                        </h4>
                      </div>
                      <p
                        style={{
                          fontSize: '0.775rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.4,
                          margin: '0 0 1rem 0',
                          flex: 1,
                        }}
                      >
                        {tmpl.description}
                      </p>

                      <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                        <button
                          type="button"
                          onClick={() => {
                            onSelectTemplate(tmpl.id);
                            onClose();
                          }}
                          className={isSelected ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                          style={{ flex: 1, fontSize: '0.8rem', fontWeight: 700 }}
                        >
                          {isSelected ? 'Active Template' : 'Use Template'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Style & Customization Tab */
          <div style={{ padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Color Accent */}
            <div>
              <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                Primary Theme Accent Color
              </label>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Applied to headings, timeline accents, skill tags, and divider lines across all templates.
              </p>
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                {THEME_COLOR_PRESETS.map((c) => {
                  const isSelected = themeColor === c.hex;
                  return (
                    <button
                      key={c.hex}
                      type="button"
                      onClick={() => onSelectColor && onSelectColor(c.hex)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.6rem 1rem',
                        borderRadius: '10px',
                        border: `2px solid ${isSelected ? c.hex : '#e2e8f0'}`,
                        backgroundColor: isSelected ? '#ffffff' : '#f8fafc',
                        cursor: 'pointer',
                        boxShadow: isSelected ? `0 4px 12px ${c.hex}30` : 'none',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: c.hex,
                          display: 'inline-block',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                        }}
                      />
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Typography Scale */}
            {onSelectFontSize && (
              <div>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Typography Size & Scale
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {FONT_SIZES.map((fs) => {
                    const isSelected = fontSize === fs.id;
                    return (
                      <button
                        key={fs.id}
                        type="button"
                        onClick={() => onSelectFontSize(fs.id)}
                        style={{
                          padding: '0.6rem 1.25rem',
                          borderRadius: '8px',
                          border: `1.5px solid ${isSelected ? 'var(--color-primary)' : '#e2e8f0'}`,
                          backgroundColor: isSelected ? 'var(--color-primary-light)' : '#ffffff',
                          color: isSelected ? 'var(--color-primary)' : '#334155',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                        }}
                      >
                        {fs.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Section Spacing */}
            {onSelectSpacing && (
              <div>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Vertical Section Spacing
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {SPACING_OPTIONS.map((sp) => {
                    const isSelected = sectionSpacing === sp.id;
                    return (
                      <button
                        key={sp.id}
                        type="button"
                        onClick={() => onSelectSpacing(sp.id)}
                        style={{
                          padding: '0.6rem 1.25rem',
                          borderRadius: '8px',
                          border: `1.5px solid ${isSelected ? 'var(--color-primary)' : '#e2e8f0'}`,
                          backgroundColor: isSelected ? 'var(--color-primary-light)' : '#ffffff',
                          color: isSelected ? 'var(--color-primary)' : '#334155',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                        }}
                      >
                        {sp.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            padding: '1rem 2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Selected: <strong style={{ color: '#0f172a' }}>{TEMPLATES.find((t) => t.id === selectedTemplate)?.name || 'Modern Sidebar'}</strong>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.75rem', fontSize: '0.9rem', fontWeight: 700 }}
          >
            Apply & Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelectorModal;
