/**
 * Unified template data mapper.
 * Normalizes differences in property naming and structure across 18+ resume templates
 * ensuring all available user-entered resume data renders consistently in any template.
 */
export const mapResumeDataForTemplate = (raw = {}) => {
  if (!raw) return {};

  const pInfo = raw.personalInfo || {};

  // Normalize personalInfo
  const fullName = pInfo.fullName || pInfo.name || '';
  const professionalTitle = pInfo.professionalTitle || pInfo.title || pInfo.role || '';
  const email = pInfo.email || '';
  const phone = pInfo.phone || pInfo.phoneNumber || '';
  const location = pInfo.location || pInfo.city || pInfo.address || '';
  const linkedin = pInfo.linkedin || pInfo.linkedIn || '';
  const github = pInfo.github || pInfo.gitHub || '';
  const portfolio = pInfo.portfolio || pInfo.website || '';
  const summary = pInfo.summary || pInfo.about || pInfo.bio || '';

  const personalInfo = {
    ...pInfo,
    fullName,
    name: fullName,
    professionalTitle,
    title: professionalTitle,
    role: professionalTitle,
    email,
    phone,
    phoneNumber: phone,
    location,
    city: location,
    address: location,
    linkedin,
    linkedIn: linkedin,
    github,
    gitHub: github,
    portfolio,
    website: portfolio,
    summary,
    about: summary,
    bio: summary,
  };

  // Normalize education
  const education = (raw.education || []).map((edu) => {
    if (!edu) return {};
    const institution = edu.institution || edu.school || edu.college || edu.university || '';
    const degree = edu.degree || '';
    const fieldOfStudy = edu.fieldOfStudy || edu.major || edu.department || '';
    const startYear = edu.startYear || edu.startDate || '';
    const endYear = edu.endYear || edu.endDate || edu.year || '';
    const startDate = edu.startDate || edu.startYear || '';
    const endDate = edu.endDate || edu.endYear || '';
    const year =
      edu.year ||
      (startYear && endYear ? `${startYear} – ${endYear}` : endYear || startYear || '');
    const score = edu.score || edu.cgpa || edu.grade || edu.gpa || '';
    const cgpa = edu.cgpa || edu.score || edu.grade || edu.gpa || '';
    const grade = edu.grade || edu.score || edu.cgpa || edu.gpa || '';
    const coursework = edu.coursework || edu.courses || '';

    return {
      ...edu,
      institution,
      school: institution,
      college: institution,
      university: institution,
      degree,
      fieldOfStudy,
      major: fieldOfStudy,
      startYear,
      startDate,
      endYear,
      endDate,
      year,
      score,
      cgpa,
      grade,
      gpa: score,
      coursework,
    };
  });

  // Normalize experience
  const experience = (raw.experience || []).map((exp) => {
    if (!exp) return {};
    const jobTitle = exp.jobTitle || exp.position || exp.role || exp.title || '';
    const position = exp.position || exp.jobTitle || exp.role || exp.title || '';
    const role = exp.role || exp.jobTitle || exp.position || exp.title || '';
    const company = exp.company || exp.organization || exp.employer || '';
    const expLocation = exp.location || exp.city || '';
    const startDate = exp.startDate || exp.startYear || '';
    const endDate = exp.endDate || exp.endYear || (exp.current ? 'Present' : '');
    const description = exp.description || exp.responsibilities || exp.summary || '';

    return {
      ...exp,
      jobTitle,
      position,
      role,
      title: jobTitle,
      company,
      organization: company,
      location: expLocation,
      startDate,
      endDate,
      current: Boolean(exp.current),
      description,
    };
  });

  // Normalize projects
  const projects = (raw.projects || []).map((proj) => {
    if (!proj) return {};
    const name = proj.name || proj.title || '';
    const title = proj.title || proj.name || '';
    const technologies =
      proj.technologies ||
      proj.tech ||
      proj.tools ||
      (Array.isArray(proj.techStack) ? proj.techStack.join(', ') : '');
    const description = proj.description || proj.summary || '';
    const githubLink = proj.githubLink || proj.github || '';
    const projectLink = proj.projectLink || proj.liveLink || proj.link || '';
    const liveLink = proj.liveLink || proj.projectLink || proj.link || '';
    const link = proj.link || projectLink || liveLink || githubLink || '';

    return {
      ...proj,
      name,
      title,
      technologies,
      description,
      githubLink,
      projectLink,
      liveLink,
      link,
      date: proj.date || proj.year || '',
    };
  });

  // Normalize skills (support string or object format)
  const skills = (raw.skills || []).map((s) => {
    if (typeof s === 'string') {
      return { name: s, skill: s, category: 'Technical', level: 'Intermediate' };
    }
    const name = s?.name || s?.skill || '';
    return {
      ...s,
      name,
      skill: name,
      category: s?.category || 'Technical',
      level: s?.level || 'Intermediate',
    };
  });

  // Normalize certifications
  const certifications = (raw.certifications || []).map((cert) => {
    if (!cert) return {};
    const name = cert.name || cert.title || '';
    const organization = cert.organization || cert.issuer || cert.institution || '';
    const issueDate = cert.issueDate || cert.date || cert.year || '';
    const credentialUrl = cert.credentialUrl || cert.credentialLink || cert.link || cert.url || '';

    return {
      ...cert,
      name,
      title: name,
      organization,
      issuer: organization,
      issueDate,
      date: issueDate,
      year: issueDate,
      credentialUrl,
      credentialLink: credentialUrl,
    };
  });

  // Normalize competitive programming
  const competitiveProgramming = (raw.competitiveProgramming || []).map((cp) => {
    if (!cp) return {};
    const platform = cp.platform || '';
    const details = cp.details || '';
    // Extract rating or solved if available
    const ratingMatch = details.match(/(?:rating|Rating)[^0-9]*([0-9]+)/);
    const solvedMatch = details.match(/([0-9]+)\+?\s*(?:Problems|problems|solved|Solved)/);
    const rating = cp.rating || (ratingMatch ? ratingMatch[1] : '');
    const solvedCount = cp.solvedCount || (solvedMatch ? solvedMatch[1] : '');

    return {
      ...cp,
      platform,
      details,
      rating,
      solvedCount,
      handle: cp.handle || '',
    };
  });

  // Normalize achievements
  const achievements = (raw.achievements || []).map((ach) => {
    if (!ach) return {};
    const title = ach.title || ach.name || '';
    return {
      ...ach,
      title,
      name: title,
      description: ach.description || ach.details || '',
      date: ach.date || ach.year || '',
    };
  });

  // Normalize languages
  const languages = (raw.languages || []).map((lang) => {
    if (typeof lang === 'string') {
      return { language: lang, name: lang, proficiency: 'Fluent' };
    }
    const language = lang?.language || lang?.name || '';
    return {
      ...lang,
      language,
      name: language,
      proficiency: lang?.proficiency || lang?.level || 'Fluent',
      description: lang?.description || '',
    };
  });

  return {
    ...raw,
    personalInfo,
    education,
    experience,
    projects,
    skills,
    certifications,
    competitiveProgramming,
    achievements,
    languages,
  };
};

export default mapResumeDataForTemplate;
