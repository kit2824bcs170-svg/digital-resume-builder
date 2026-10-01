/**
 * templatesRegistry.js
 * Central registry for all professional resume templates.
 * Inspired by modern platforms like Kickresume and Resume.io.
 */

export const TEMPLATE_CATEGORIES = [
  'All',
  'Professional',
  'Modern',
  'ATS Friendly',
  'Student',
  'Developer',
  'Creative',
  'Academic',
];

export const TEMPLATES = [
  {
    id: 'classic-pro',
    name: 'Classic Professional',
    category: 'Professional',
    description: 'Traditional corporate layout with elegant serif typography, clean divider rules, and an ATS-optimized single-column flow.',
    badge: 'Popular',
    atsFriendly: true,
    defaultColor: '#1e293b',
    tags: ['Traditional', 'Corporate', 'ATS-Friendly', 'Single Column'],
  },
  {
    id: 'modern-sidebar',
    name: 'Modern Sidebar',
    category: 'Modern',
    description: 'Asymmetric two-column layout with a stylish left sidebar for contact details, technical skills, and language proficiencies.',
    badge: 'Trending',
    atsFriendly: false,
    defaultColor: '#2563eb',
    tags: ['Sidebar', 'Two Column', 'Modern', 'Visual'],
  },
  {
    id: 'executive',
    name: 'Executive Professional',
    category: 'Professional',
    description: 'Prestigious corporate design featuring a distinguished header band, highlighted metrics, and leadership-focused hierarchy.',
    badge: 'Leadership',
    atsFriendly: true,
    defaultColor: '#0f172a',
    tags: ['Executive', 'Leadership', 'Senior Level', 'Corporate'],
  },
  {
    id: 'minimal-ats',
    name: 'Minimal ATS',
    category: 'ATS Friendly',
    description: 'Zero-distraction single-column layout engineered for 100% Applicant Tracking System compatibility and ultra-clean readability.',
    badge: '100% ATS Pass',
    atsFriendly: true,
    defaultColor: '#000000',
    tags: ['ATS-Friendly', 'Simple', 'High Contrast', 'Single Column'],
  },
  {
    id: 'modern-blue',
    name: 'Modern Blue',
    category: 'Modern',
    description: 'Clean white canvas complemented by crisp royal blue vertical timeline accents and distinct modern typography.',
    badge: 'Recommended',
    atsFriendly: true,
    defaultColor: '#1d4ed8',
    tags: ['Clean', 'Timeline', 'Corporate', 'Blue Accent'],
  },
  {
    id: 'creative',
    name: 'Creative Professional',
    category: 'Creative',
    description: 'Contemporary visual hierarchy with subtle accent borders, dynamic skill pills, and modern project showcases.',
    badge: 'Creative',
    atsFriendly: false,
    defaultColor: '#7c3aed',
    tags: ['Creative', 'Design', 'Modern', 'Pill Badges'],
  },
  {
    id: 'student-fresher',
    name: 'Student / Fresher',
    category: 'Student',
    description: 'Designed specifically for recent graduates. Elevates Education, academic projects, and certifications to the top.',
    badge: 'Entry-Level',
    atsFriendly: true,
    defaultColor: '#0284c7',
    tags: ['Fresher', 'Graduate', 'Education First', 'Projects'],
  },
  {
    id: 'developer',
    name: 'Software Developer',
    category: 'Developer',
    description: 'Engineered for coders: highlights technical stacks, GitHub/portfolio links, programming languages, and coding achievements.',
    badge: 'Tech Spec',
    atsFriendly: true,
    defaultColor: '#0f766e',
    tags: ['Tech', 'Coding', 'GitHub', 'Engineering'],
  },
  {
    id: 'two-column',
    name: 'Two Column Professional',
    category: 'Professional',
    description: 'Balanced split layout allocating key competencies and credentials on the left, with extensive experience and history on the right.',
    badge: 'Balanced',
    atsFriendly: false,
    defaultColor: '#334155',
    tags: ['Two Column', 'Structured', 'Clean', 'Professional'],
  },
  {
    id: 'elegant-minimal',
    name: 'Elegant Minimal',
    category: 'Modern',
    description: 'Refined minimalism with abundant whitespace, delicate hairline separators, and understated luxury typography.',
    badge: 'Editorial',
    atsFriendly: true,
    defaultColor: '#475569',
    tags: ['Minimalist', 'Editorial', 'Whitespace', 'Elegant'],
  },
  {
    id: 'compact',
    name: 'Compact Professional',
    category: 'ATS Friendly',
    description: 'High-density layout designed to present comprehensive career achievements and skills strictly within a crisp single page.',
    badge: '1-Page Fit',
    atsFriendly: true,
    defaultColor: '#1e293b',
    tags: ['1-Page', 'Dense', 'Space Efficient', 'ATS-Friendly'],
  },
  {
    id: 'modern-green',
    name: 'Modern Green',
    category: 'Modern',
    description: 'Refined forest and emerald green theme with structured timeline markers for work history and project milestones.',
    badge: 'Fresh',
    atsFriendly: true,
    defaultColor: '#059669',
    tags: ['Green Accent', 'Timeline', 'Fresh', 'Modern'],
  },
  {
    id: 'dark-header',
    name: 'Dark Header',
    category: 'Professional',
    description: 'Bold contrast with an executive dark navy header block and white contact typography, leading into a crisp white body.',
    badge: 'High Impact',
    atsFriendly: false,
    defaultColor: '#0f172a',
    tags: ['Dark Header', 'Contrast', 'Executive', 'Corporate'],
  },
  {
    id: 'academic',
    name: 'Academic CV',
    category: 'Academic',
    description: 'Formal scholarly format prioritizing Degrees, Research Projects, Institutional Honors, and Published Certifications.',
    badge: 'Scholarly',
    atsFriendly: true,
    defaultColor: '#3b82f6',
    tags: ['Academic', 'Research', 'Curriculum Vitae', 'Scholarly'],
  },
  {
    id: 'international',
    name: 'International Professional',
    category: 'Professional',
    description: 'Clean European & International CV format with clear personal metadata, structured experience, and language proficiencies.',
    badge: 'Global CV',
    atsFriendly: true,
    defaultColor: '#2563eb',
    tags: ['International', 'European CV', 'Global', 'Standard'],
  },
  {
    id: 'placement',
    name: 'Campus Placement',
    category: 'Student',
    description: 'Comprehensive placement format featuring competitive programming ratings, side-by-side skills & certifications, and academic coursework.',
    badge: 'Campus Ready',
    atsFriendly: true,
    defaultColor: '#2563eb',
    tags: ['Placement', 'Competitive Programming', 'Coursework'],
  },
  // Backward compatibility aliases
  {
    id: 'modern',
    name: 'Modern Accent',
    category: 'Modern',
    description: 'Classic modern two-column format with an organized sidebar for skills & contact, and prominent work timeline.',
    badge: 'Classic',
    atsFriendly: false,
    defaultColor: '#2563eb',
    tags: ['Modern', 'Sidebar'],
  },
  {
    id: 'classic',
    name: 'Classic Corporate',
    category: 'Professional',
    description: 'Timeless single-column layout with elegant serif headers, clean divider rules, and academic balance.',
    badge: 'Classic',
    atsFriendly: true,
    defaultColor: '#1e293b',
    tags: ['Classic', 'Single Column'],
  },
  {
    id: 'minimal',
    name: 'Minimalist ATS',
    category: 'ATS Friendly',
    description: 'Clean single-column typography designed for maximum legibility and Applicant Tracking System pass rate.',
    badge: 'ATS-Friendly',
    atsFriendly: true,
    defaultColor: '#000000',
    tags: ['Minimal', 'ATS-Friendly'],
  },
];

export const THEME_COLOR_PRESETS = [
  { name: 'Royal Blue', hex: '#2563eb' },
  { name: 'Navy Slate', hex: '#0f172a' },
  { name: 'Emerald Green', hex: '#059669' },
  { name: 'Teal Forest', hex: '#0d9488' },
  { name: 'Deep Purple', hex: '#7c3aed' },
  { name: 'Crimson Ruby', hex: '#dc2626' },
  { name: 'Warm Amber', hex: '#d97706' },
  { name: 'Charcoal Black', hex: '#18181b' },
];

export const FONT_OPTIONS = [
  { id: 'Inter', name: 'Inter (Modern Sans)', family: "'Inter', sans-serif" },
  { id: 'Roboto', name: 'Roboto (Clean Sans)', family: "'Roboto', sans-serif" },
  { id: 'Merriweather', name: 'Merriweather (Classic Serif)', family: "'Merriweather', serif" },
  { id: 'Playfair', name: 'Playfair Display (Executive Serif)', family: "'Playfair Display', serif" },
  { id: 'FiraCode', name: 'Fira Code (Developer Mono)', family: "'Fira Code', monospace" },
];

export const FONT_SIZES = [
  { id: 'small', name: 'Compact', scale: '0.92' },
  { id: 'medium', name: 'Standard', scale: '1.0' },
  { id: 'large', name: 'Comfortable', scale: '1.08' },
];

export const SPACING_OPTIONS = [
  { id: 'compact', name: 'Compact (1-Page)', gap: '0.75rem', padding: '1.25rem' },
  { id: 'normal', name: 'Balanced', gap: '1.25rem', padding: '2rem' },
  { id: 'relaxed', name: 'Spacious', gap: '1.75rem', padding: '2.5rem' },
];

export const getTemplateById = (id) => {
  if (!id) return TEMPLATES[0];
  const normalized = id.toLowerCase().trim();
  if (normalized === 'madhumithra') return TEMPLATES.find((t) => t.id === 'placement');
  return TEMPLATES.find((t) => t.id === normalized) || TEMPLATES[0];
};
