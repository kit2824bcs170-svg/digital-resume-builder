const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    title: {
      type: String,
      default: 'My Professional Resume',
      trim: true,
    },
    personalInfo: {
      fullName: { type: String, default: '' },
      professionalTitle: { type: String, default: '' },
      email: { type: String, default: '' },
      phone: { type: String, default: '' },
      location: { type: String, default: '' },
      linkedin: { type: String, default: '' },
      github: { type: String, default: '' },
      portfolio: { type: String, default: '' },
      summary: { type: String, default: '' },
    },
    education: [
      {
        institution: { type: String, default: '' },
        degree: { type: String, default: '' },
        fieldOfStudy: { type: String, default: '' },
        startYear: { type: String, default: '' },
        endYear: { type: String, default: '' },
        score: { type: String, default: '' }, // CGPA or %
        cgpa: { type: String, default: '' },  // Alias for compatibility
        coursework: { type: String, default: '' }, // e.g. "Software Development, DBMS..."
      },
    ],
    skills: [
      {
        name: { type: String, default: '' },
        category: { type: String, default: 'Technical' }, // e.g. Technical, Soft, Tools
        level: { type: String, default: 'Intermediate' }, // Beginner, Intermediate, Expert
      },
    ],
    projects: [
      {
        name: { type: String, default: '' },
        title: { type: String, default: '' }, // Alias for compatibility
        description: { type: String, default: '' },
        technologies: { type: String, default: '' }, // e.g. "React, Node.js, MongoDB"
        githubLink: { type: String, default: '' },
        projectLink: { type: String, default: '' },
        liveLink: { type: String, default: '' }, // Alias for compatibility
        date: { type: String, default: '' },     // e.g. "Nov 2025"
      },
    ],
    experience: [
      {
        jobTitle: { type: String, default: '' },
        company: { type: String, default: '' },
        location: { type: String, default: '' },
        startDate: { type: String, default: '' },
        endDate: { type: String, default: '' },
        current: { type: Boolean, default: false },
        description: { type: String, default: '' },
      },
    ],
    certifications: [
      {
        name: { type: String, default: '' },
        organization: { type: String, default: '' },
        issueDate: { type: String, default: '' },
        date: { type: String, default: '' }, // Alias for compatibility
        credentialUrl: { type: String, default: '' },
        credentialLink: { type: String, default: '' }, // Alias for compatibility
      },
    ],
    competitiveProgramming: [
      {
        platform: { type: String, default: '' },
        details: { type: String, default: '' },
      },
    ],
    achievements: [
      {
        title: { type: String, default: '' },
        description: { type: String, default: '' },
        date: { type: String, default: '' },
      },
    ],
    languages: [
      {
        language: { type: String, default: '' },
        name: { type: String, default: '' }, // Alias for compatibility
        proficiency: { type: String, default: 'Fluent' }, // Native, Fluent, Intermediate, Basic
      },
    ],
    selectedTemplate: {
      type: String,
      default: 'modern',
      trim: true,
    },
    themeColor: {
      type: String,
      default: '#2563eb', // Default modern blue/indigo
    },
    fontFamily: {
      type: String,
      default: 'Inter',
    },
    fontSize: {
      type: String,
      default: 'medium', // small, medium, large
    },
    sectionSpacing: {
      type: String,
      default: 'normal', // compact, normal, relaxed
    },
    completionPercentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

// Synchronize field aliases before saving to ensure both naming conventions stay populated
resumeSchema.pre('save', function (next) {
  // Sync education score & cgpa
  if (this.education && Array.isArray(this.education)) {
    this.education.forEach((edu) => {
      if (edu.cgpa && !edu.score) edu.score = edu.cgpa;
      if (edu.score && !edu.cgpa) edu.cgpa = edu.score;
    });
  }

  // Sync projects name & title, liveLink & projectLink
  if (this.projects && Array.isArray(this.projects)) {
    this.projects.forEach((proj) => {
      if (proj.title && !proj.name) proj.name = proj.title;
      if (proj.name && !proj.title) proj.title = proj.name;
      if (proj.liveLink && !proj.projectLink) proj.projectLink = proj.liveLink;
      if (proj.projectLink && !proj.liveLink) proj.liveLink = proj.projectLink;
    });
  }

  // Sync certifications date & issueDate, credentialUrl & credentialLink
  if (this.certifications && Array.isArray(this.certifications)) {
    this.certifications.forEach((cert) => {
      if (cert.date && !cert.issueDate) cert.issueDate = cert.date;
      if (cert.issueDate && !cert.date) cert.date = cert.issueDate;
      if (cert.credentialLink && !cert.credentialUrl) cert.credentialUrl = cert.credentialLink;
      if (cert.credentialUrl && !cert.credentialLink) cert.credentialLink = cert.credentialUrl;
    });
  }

  // Sync languages name & language
  if (this.languages && Array.isArray(this.languages)) {
    this.languages.forEach((lang) => {
      if (lang.name && !lang.language) lang.language = lang.name;
      if (lang.language && !lang.name) lang.name = lang.language;
    });
  }

  next();
});

module.exports = mongoose.model('Resume', resumeSchema);
