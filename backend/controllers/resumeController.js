const Resume = require('../models/Resume');

// Generic anonymous placeholder data for template previews ONLY (never real personal data)
const getSampleResumeData = (fullName = 'Alex Morgan') => ({
  title: 'Full Stack Software Engineer',
  personalInfo: {
    fullName,
    professionalTitle: 'Full Stack Software Developer',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 012-3456',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/alexmorgan-demo',
    github: 'https://github.com/alexmorgan-demo',
    portfolio: 'https://alexmorgan-demo.dev',
    summary:
      'Passionate and results-driven Software Engineer with hands-on experience designing and building scalable web applications and cloud-native solutions. Proven ability to deliver clean, maintainable code and collaborate effectively in agile environments.',
  },
  education: [
    {
      institution: 'State Technical University',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science & Engineering',
      startYear: '2020',
      endYear: '2024',
      score: '3.85 GPA',
    },
  ],
  skills: [
    { name: 'JavaScript / TypeScript', category: 'Frontend', level: 'Expert' },
    { name: 'React.js & Node.js', category: 'Full Stack', level: 'Expert' },
    { name: 'Express.js & REST APIs', category: 'Backend', level: 'Expert' },
    { name: 'MongoDB & SQL', category: 'Database', level: 'Intermediate' },
    { name: 'Git & GitHub CI/CD', category: 'Tools', level: 'Expert' },
    { name: 'Docker & Cloud Basics', category: 'DevOps', level: 'Intermediate' },
  ],
  projects: [
    {
      name: 'Cloud Collaboration Platform',
      description:
        'Engineered a real-time team collaboration platform with document editing, task boards, and notifications.',
      technologies: 'React, Node.js, Express, MongoDB',
      githubLink: 'https://github.com/alexmorgan-demo/cloud-collab',
      projectLink: 'https://cloud-collab-demo.example.com',
    },
    {
      name: 'Smart Document Workspace',
      description:
        'Built an intuitive markdown formatter and document workspace with offline storage and export capabilities.',
      technologies: 'React, Vite, Tailwind CSS',
      githubLink: 'https://github.com/alexmorgan-demo/doc-workspace',
      projectLink: 'https://doc-workspace-demo.example.com',
    },
  ],
  experience: [
    {
      jobTitle: 'Software Development Intern',
      company: 'Innovate Labs Inc.',
      location: 'San Francisco, CA',
      startDate: 'Jun 2023',
      endDate: 'Aug 2023',
      current: false,
      description:
        'Collaborated with engineering teams to build modular UI components and optimize API query response times.',
    },
  ],
  certifications: [
    {
      name: 'Cloud Practitioner Certification',
      organization: 'Cloud Provider Academy',
      issueDate: '2024',
      credentialUrl: 'https://example.com/credentials/demo',
    },
  ],
  competitiveProgramming: [
    {
      platform: 'LeetCode',
      details: 'Rating: 1850+ | Solved: 450+ Problems | Knight Badge',
    },
    {
      platform: 'CodeChef',
      details: 'Rating: 1720 (3 Star) | Solved: 300+ Problems',
    },
  ],
  achievements: [
    {
      title: 'Top Finalist - Collegiate Hackathon 2023',
      description: 'Built an accessibility assistance tool selected among top collegiate entries.',
      date: 'Oct 2023',
    },
  ],
  languages: [
    { language: 'English', proficiency: 'Native / Fluent' },
    { language: 'Spanish', proficiency: 'Conversational' },
  ],
  selectedTemplate: 'modern',
  themeColor: '#2563eb',
});

// Generic placeholder for placement template
const getPlacementPlaceholderData = () => ({
  title: 'Campus Placement Resume',
  selectedTemplate: 'placement',
  themeColor: '#000000',
  personalInfo: {
    fullName: 'Alex Morgan',
    professionalTitle: 'Computer Science and Engineering Student',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 019-2834',
    location: 'Austin, TX',
    linkedin: 'alex-morgan-demo',
    github: 'alexmorgan-demo',
    portfolio: '',
    summary:
      'Proactive Computer Science student with strong programming foundation in Java, Python, C++, full stack web development, and algorithms. Proven competitive programming achievements with active hackathon and campus project experience.',
  },
  education: [
    {
      institution: 'State Institute of Technology',
      degree: 'B.S. in Computer Science and Engineering',
      fieldOfStudy: 'Computer Science and Engineering',
      startYear: '2021',
      endYear: '2025',
      score: '8.8 / 10.0 CGPA',
      cgpa: '8.8 / 10.0 CGPA',
      coursework: 'Data Structures, Algorithms, Operating Systems, DBMS, Object-Oriented Design',
    },
  ],
  skills: [
    { name: 'Java', category: 'Technical' },
    { name: 'Python', category: 'Technical' },
    { name: 'C++', category: 'Technical' },
    { name: 'JavaScript', category: 'Technical' },
    { name: 'React.js', category: 'Technical' },
    { name: 'Node.js', category: 'Technical' },
    { name: 'Express.js', category: 'Technical' },
    { name: 'MongoDB', category: 'Technical' },
    { name: 'SQL', category: 'Technical' },
    { name: 'Git', category: 'Technical' },
    { name: 'GitHub', category: 'Technical' },
    { name: 'HTML5', category: 'Technical' },
    { name: 'CSS3', category: 'Technical' },
    { name: 'Bootstrap', category: 'Technical' },
    { name: 'DSA', category: 'Technical' },
  ],
  projects: [
    {
      name: 'Excess Food Management Portal',
      technologies: 'TypeScript, HTML5, CSS3, SQLite',
      date: 'Nov 2024',
      projectLink: 'https://github.com/alexmorgan-demo',
      githubLink: 'https://github.com/alexmorgan-demo',
      description:
        'Enabled donor registration and location-based food item management to reduce food waste. Implemented automatic removal upon expiration.',
    },
    {
      name: 'Interactive Study Workspace',
      technologies: 'React, Node.js, Express, MongoDB',
      date: 'May 2024',
      projectLink: 'https://github.com/alexmorgan-demo',
      githubLink: 'https://github.com/alexmorgan-demo',
      description:
        'Centralized workspace allowing students to manage documents, take structured notes, and generate quick revision summaries.',
    },
  ],
  experience: [
    {
      jobTitle: 'Full Stack Web Intern',
      company: 'NextGen Solutions',
      location: 'Remote',
      startDate: 'Jun 2024',
      endDate: 'Aug 2024',
      current: false,
      description: 'Developed responsive dashboard components and integrated RESTful APIs.',
    },
  ],
  certifications: [
    {
      name: 'Cloud Computing Foundations',
      organization: 'Cloud Academy',
      issueDate: '2024',
      credentialUrl: 'https://example.com/verify/cert1',
    },
    {
      name: 'Full Stack Development Specialization',
      organization: 'Online Learning Platform',
      issueDate: '2024',
      credentialUrl: 'https://example.com/verify/cert2',
    },
  ],
  competitiveProgramming: [
    {
      platform: 'LeetCode',
      details: 'Max rating – 1800 | Solved problems: 450+ | Top 15% globally',
    },
    {
      platform: 'CodeChef',
      details: 'Max rating – 1600 | 3 Star | Solved problems: 600+',
    },
    {
      platform: 'Codeforces',
      details: 'Max rating – 1350 | Pupil rank',
    },
  ],
  achievements: [
    {
      title: 'Diamond Streak Badge',
      description: 'Earned consistency badges for maintaining 100+ day streaks on competitive coding platforms.',
      date: '2024',
    },
    {
      title: 'Department Coding Challenge Winner',
      description: 'Won 1st prize in collegiate code debugging and algorithmic challenge.',
      date: '2024',
    },
  ],
  languages: [
    {
      language: 'English',
      proficiency: 'Fluent',
      description:
        'Completed coursework in technical communication.\n• Mentored junior peers on basic data structures.\n• Actively participated in departmental and campus technical symposiums.',
    },
  ],
});

// @desc    Create a new resume
// @route   POST /api/resumes
// @access  Private (Strict User Isolation)
exports.createResume = async (req, res, next) => {
  try {
    // SECURITY: Never accept userId from client
    delete req.body.userId;
    delete req.body._id;

    const { useSampleData, sampleType, title, selectedTemplate, themeColor } = req.body;

    // Strict user ownership
    let resumeData = {
      userId: req.user._id,
      title: title?.trim() || `${req.user.name}'s Resume`,
      selectedTemplate: selectedTemplate || 'modern',
      themeColor: themeColor || '#2563eb',
      personalInfo: {
        fullName: req.user.name || '',
        email: req.user.email || '',
        professionalTitle: '',
        phone: '',
        location: '',
        linkedin: '',
        github: '',
        portfolio: '',
        summary: '',
      },
      education: [],
      skills: [],
      projects: [],
      experience: [],
      certifications: [],
      competitiveProgramming: [],
      achievements: [],
      languages: [],
    };

    // If the user explicitly asks for sample template data, fill with anonymous placeholder data
    if (useSampleData === 'placement' || sampleType === 'placement') {
      const sample = getPlacementPlaceholderData();
      resumeData = {
        ...sample,
        userId: req.user._id,
        title: title?.trim() || `${req.user.name}'s Placement Resume`,
        personalInfo: {
          ...sample.personalInfo,
          fullName: req.user.name || sample.personalInfo.fullName,
          email: req.user.email || sample.personalInfo.email,
        },
      };
    } else if (useSampleData) {
      const sample = getSampleResumeData(req.user.name);
      resumeData = {
        ...sample,
        userId: req.user._id,
        title: title?.trim() || `${req.user.name}'s Resume`,
        personalInfo: {
          ...sample.personalInfo,
          fullName: req.user.name || sample.personalInfo.fullName,
          email: req.user.email || sample.personalInfo.email,
        },
      };
    }

    const resume = await Resume.create(resumeData);

    res.status(201).json({
      success: true,
      message: 'Resume created successfully',
      resume,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all resumes for current user ONLY + user-specific stats
// @route   GET /api/resumes
// @access  Private (Strict User Isolation)
exports.getResumes = async (req, res, next) => {
  try {
    // SECURITY: Always filter strictly by authenticated user's ID
    const resumes = await Resume.find({ userId: req.user._id }).sort({
      updatedAt: -1,
    });

    // Compute user-specific dashboard statistics strictly for authenticated user
    const totalResumes = resumes.length;
    let totalSkills = 0;
    let totalProjects = 0;
    let lastUpdated = resumes.length > 0 ? resumes[0].updatedAt : null;
    let latestTemplate = resumes.length > 0 ? resumes[0].selectedTemplate : 'None';

    resumes.forEach((r) => {
      totalSkills += r.skills ? r.skills.length : 0;
      totalProjects += r.projects ? r.projects.length : 0;
    });

    res.status(200).json({
      success: true,
      count: totalResumes,
      stats: {
        totalResumes,
        totalSkills,
        totalProjects,
        lastUpdated,
        latestTemplate,
      },
      resumes,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single resume by ID (strictly verifies ownership)
// @route   GET /api/resumes/:id
// @access  Private (IDOR Protected)
exports.getResumeById = async (req, res, next) => {
  try {
    // SECURITY: Directly query by BOTH resume ID AND authenticated user's ID
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found or you are not authorized to view it',
      });
    }

    res.status(200).json({
      success: true,
      resume,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update resume (strictly verifies ownership)
// @route   PUT /api/resumes/:id
// @access  Private (IDOR Protected)
exports.updateResume = async (req, res, next) => {
  try {
    // SECURITY: Never allow changing userId or _id
    delete req.body.userId;
    delete req.body._id;

    // Direct atomic update ensuring document belongs to authenticated user
    const resume = await Resume.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user._id,
      },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found or you are not authorized to edit it',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Resume updated successfully',
      resume,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete resume (strictly verifies ownership)
// @route   DELETE /api/resumes/:id
// @access  Private (IDOR Protected)
exports.deleteResume = async (req, res, next) => {
  try {
    // Direct atomic deletion ensuring document belongs to authenticated user
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found or you are not authorized to delete it',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Resume deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update selected template and color
// @route   PATCH /api/resumes/:id/template
// @access  Private (IDOR Protected)
exports.updateTemplate = async (req, res, next) => {
  try {
    const { selectedTemplate, themeColor, fontFamily, fontSize, sectionSpacing } = req.body;
    const updateFields = {};
    if (selectedTemplate) updateFields.selectedTemplate = selectedTemplate;
    if (themeColor) updateFields.themeColor = themeColor;
    if (fontFamily) updateFields.fontFamily = fontFamily;
    if (fontSize) updateFields.fontSize = fontSize;
    if (sectionSpacing) updateFields.sectionSpacing = sectionSpacing;

    const resume = await Resume.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user._id,
      },
      { $set: updateFields },
      { new: true }
    );

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found or you are not authorized to update it',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Template updated successfully',
      resume,
    });
  } catch (error) {
    next(error);
  }
};
