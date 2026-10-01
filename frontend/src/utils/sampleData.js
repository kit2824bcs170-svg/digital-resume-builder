// Generic anonymous template preview data ONLY (contains no real user personal details)
export const SAMPLE_RESUME_DATA = {
  title: 'Full Stack Software Engineer',
  selectedTemplate: 'modern',
  themeColor: '#2563eb',
  personalInfo: {
    fullName: 'Alex Morgan',
    professionalTitle: 'Full Stack Software Developer',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 012-3456',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/alexmorgan-demo',
    github: 'https://github.com/alexmorgan-demo',
    portfolio: 'https://alexmorgan-demo.dev',
    summary:
      'Passionate and detail-oriented Software Engineer with hands-on expertise in developing scalable web applications, RESTful APIs, and cloud-native architectures. Strong background in data structures, modular frontend design, and automated testing.',
  },
  education: [
    {
      institution: 'State Technical University',
      degree: 'B.S. in Computer Science & Engineering',
      fieldOfStudy: 'Computer Science',
      startYear: '2020',
      endYear: '2024',
      score: '3.85 GPA',
    },
  ],
  skills: [
    { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Expert' },
    { name: 'React.js & Redux', category: 'Frontend', level: 'Expert' },
    { name: 'Node.js & Express', category: 'Backend', level: 'Expert' },
    { name: 'MongoDB & SQL', category: 'Database', level: 'Intermediate' },
    { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Expert' },
    { name: 'RESTful APIs', category: 'Backend', level: 'Expert' },
    { name: 'Git & GitHub CI/CD', category: 'Tools', level: 'Intermediate' },
    { name: 'Docker & Cloud Basics', category: 'DevOps', level: 'Intermediate' },
  ],
  projects: [
    {
      name: 'Digital Resume Builder Platform',
      description:
        'Architected a full-stack web application featuring real-time split-screen preview, multiple ATS-friendly templates, dynamic section scoring, and client-side vector A4 PDF generation.',
      technologies: 'React, Vite, Node.js, Express, MongoDB',
      githubLink: 'https://github.com/alexmorgan-demo/resume-builder',
      projectLink: 'https://demo-resume-builder.example.com',
    },
    {
      name: 'Campus Collaborative Portal',
      description:
        'Built a role-based collaboration system for university students and professors to share study materials, collaborate on coursework, and manage announcements.',
      technologies: 'React, Node.js, Express, MongoDB',
      githubLink: 'https://github.com/alexmorgan-demo/campus-portal',
      projectLink: 'https://campus-portal.example.com',
    },
  ],
  experience: [
    {
      jobTitle: 'Software Development Intern',
      company: 'TechVision Global Labs',
      location: 'San Francisco, CA',
      startDate: 'Jun 2023',
      endDate: 'Aug 2023',
      current: false,
      description:
        'Contributed to customer onboarding microservices. Wrote automated unit and integration tests, increasing coverage from 68% to 89%. Refactored UI components to functional React hooks.',
    },
  ],
  certifications: [
    {
      name: 'Cloud Practitioner Certification',
      organization: 'Cloud Provider Academy',
      issueDate: '2024',
      credentialUrl: 'https://example.com/verify/cert-demo',
    },
  ],
  competitiveProgramming: [
    {
      platform: 'LeetCode',
      details: 'Max Rating: 1850+ | Solved: 450+ Problems | Knight Badge',
    },
    {
      platform: 'CodeChef',
      details: 'Max Rating: 1720 (3 Star) | Solved: 300+ Problems',
    },
  ],
  achievements: [
    {
      title: 'Top Finalist - Collegiate Hackathon 2023',
      description: 'Pitched and created an automated workflow portal selected as top project among participating collegiate teams.',
      date: 'Oct 2023',
    },
  ],
  languages: [
    { language: 'English', proficiency: 'Professional / Fluent' },
    { language: 'Spanish', proficiency: 'Intermediate' },
  ],
};

// Generic anonymous placement template preview data
export const PLACEMENT_SAMPLE_DATA = {
  title: 'Campus Placement Resume',
  selectedTemplate: 'placement',
  themeColor: '#000000',
  personalInfo: {
    fullName: 'Alex Morgan',
    professionalTitle: 'B.S. Computer Science and Engineering Student',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 019-2834',
    location: 'Austin, TX',
    linkedin: 'alex-morgan-demo',
    github: 'alexmorgan-demo',
    portfolio: '',
    summary:
      'Proactive Computer Science student with strong programming foundation in Java, Python, C++, MERN stack, and algorithms. Proven competitive programming achievements across LeetCode and CodeChef, with active hackathon and campus leadership experience.',
  },
  education: [
    {
      institution: 'State Institute of Technology',
      degree: 'B.S. Computer Science and Engineering',
      fieldOfStudy: 'Computer Science and Engineering',
      startYear: '2021',
      endYear: '2025',
      score: '8.8 / 10.0 CGPA',
      cgpa: '8.8 / 10.0 CGPA',
      coursework: 'Data Structures, Operating Systems, DBMS, Object-Oriented Design, Cloud Computing',
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
};

// Backwards-compatible alias for existing references
export const MADHU_MITHRA_DATA = PLACEMENT_SAMPLE_DATA;
