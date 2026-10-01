import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Linkedin, Github, Globe, FileText } from 'lucide-react';

const PersonalInfoForm = ({ personalInfo = {}, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...personalInfo,
      [name]: value,
    });
  };

  const inputStyle = {
    width: '100%',
    padding: '0.65rem 0.85rem 0.65rem 2.25rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-subtle)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.15s ease',
    backgroundColor: '#ffffff',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--text-main)',
    marginBottom: '0.35rem',
  };

  const groupStyle = {
    position: 'relative',
    marginBottom: '1rem',
  };

  const iconStyle = {
    position: 'absolute',
    left: '0.75rem',
    top: '2.1rem',
    color: 'var(--text-muted)',
    pointerEvents: 'none',
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <User size={18} color="var(--color-primary)" />
        Personal Information
      </h3>
      <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
        Recruiters will use these details to contact and verify your identity.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
        {/* Full Name */}
        <div style={groupStyle}>
          <label style={labelStyle}>Full Name *</label>
          <User size={15} style={iconStyle} />
          <input
            type="text"
            name="fullName"
            value={personalInfo.fullName || ''}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            style={inputStyle}
            required
          />
        </div>

        {/* Professional Title */}
        <div style={groupStyle}>
          <label style={labelStyle}>Professional Title</label>
          <Briefcase size={15} style={iconStyle} />
          <input
            type="text"
            name="professionalTitle"
            value={personalInfo.professionalTitle || ''}
            onChange={handleChange}
            placeholder="e.g. Full Stack Developer"
            style={inputStyle}
          />
        </div>

        {/* Email */}
        <div style={groupStyle}>
          <label style={labelStyle}>Email Address *</label>
          <Mail size={15} style={iconStyle} />
          <input
            type="email"
            name="email"
            value={personalInfo.email || ''}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            style={inputStyle}
            required
          />
        </div>

        {/* Phone */}
        <div style={groupStyle}>
          <label style={labelStyle}>Phone Number</label>
          <Phone size={15} style={iconStyle} />
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone || ''}
            onChange={handleChange}
            placeholder="e.g. +1 (555) 000-1122"
            style={inputStyle}
          />
        </div>

        {/* Location */}
        <div style={groupStyle}>
          <label style={labelStyle}>Location / City</label>
          <MapPin size={15} style={iconStyle} />
          <input
            type="text"
            name="location"
            value={personalInfo.location || ''}
            onChange={handleChange}
            placeholder="e.g. New York, NY"
            style={inputStyle}
          />
        </div>

        {/* LinkedIn */}
        <div style={groupStyle}>
          <label style={labelStyle}>LinkedIn URL</label>
          <Linkedin size={15} style={iconStyle} />
          <input
            type="url"
            name="linkedin"
            value={personalInfo.linkedin || ''}
            onChange={handleChange}
            placeholder="linkedin.com/in/username"
            style={inputStyle}
          />
        </div>

        {/* GitHub */}
        <div style={groupStyle}>
          <label style={labelStyle}>GitHub URL</label>
          <Github size={15} style={iconStyle} />
          <input
            type="url"
            name="github"
            value={personalInfo.github || ''}
            onChange={handleChange}
            placeholder="github.com/username"
            style={inputStyle}
          />
        </div>

        {/* Portfolio */}
        <div style={groupStyle}>
          <label style={labelStyle}>Portfolio / Website</label>
          <Globe size={15} style={iconStyle} />
          <input
            type="url"
            name="portfolio"
            value={personalInfo.portfolio || ''}
            onChange={handleChange}
            placeholder="yourportfolio.dev"
            style={inputStyle}
          />
        </div>
      </div>

      {/* Profile Summary */}
      <div style={{ marginTop: '0.5rem' }}>
        <label style={labelStyle}>
          Professional Summary / Objective
          <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
            (2-4 sentences summarizing your career and ambitions)
          </span>
        </label>
        <textarea
          name="summary"
          rows={4}
          value={personalInfo.summary || ''}
          onChange={handleChange}
          placeholder="Briefly state your primary skill sets, notable achievements, and what value you bring to prospective teams..."
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.9rem',
            outline: 'none',
            resize: 'vertical',
          }}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
