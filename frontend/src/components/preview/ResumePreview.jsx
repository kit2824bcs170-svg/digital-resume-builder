import React, { forwardRef } from 'react';
import ClassicTemplate from '../../templates/ClassicTemplate';
import ModernTemplate from '../../templates/ModernTemplate';
import MinimalTemplate from '../../templates/MinimalTemplate';
import PlacementTemplate from '../../templates/PlacementTemplate';
import ExecutiveTemplate from '../../templates/ExecutiveTemplate';
import ModernSidebarTemplate from '../../templates/ModernSidebarTemplate';
import MinimalATSTemplate from '../../templates/MinimalATSTemplate';
import ModernBlueTemplate from '../../templates/ModernBlueTemplate';
import DeveloperTemplate from '../../templates/DeveloperTemplate';
import StudentTemplate from '../../templates/StudentTemplate';
import TwoColumnTemplate from '../../templates/TwoColumnTemplate';
import DarkHeaderTemplate from '../../templates/DarkHeaderTemplate';
import CompactTemplate from '../../templates/CompactTemplate';
import ModernGreenTemplate from '../../templates/ModernGreenTemplate';
import CreativeTemplate from '../../templates/CreativeTemplate';
import ElegantTemplate from '../../templates/ElegantTemplate';
import AcademicTemplate from '../../templates/AcademicTemplate';
import InternationalTemplate from '../../templates/InternationalTemplate';

const ResumePreview = forwardRef(({ resumeData, isThumbnail = false }, ref) => {
  const template = resumeData?.selectedTemplate || 'modern-sidebar';

  const renderTemplate = () => {
    switch (template) {
      case 'classic-pro':
      case 'classic':
        return <ClassicTemplate data={resumeData} />;
      case 'modern-sidebar':
        return <ModernSidebarTemplate data={resumeData} />;
      case 'executive':
        return <ExecutiveTemplate data={resumeData} />;
      case 'minimal-ats':
      case 'minimal':
        return <MinimalATSTemplate data={resumeData} />;
      case 'modern-blue':
        return <ModernBlueTemplate data={resumeData} />;
      case 'developer':
        return <DeveloperTemplate data={resumeData} />;
      case 'student-fresher':
        return <StudentTemplate data={resumeData} />;
      case 'two-column':
        return <TwoColumnTemplate data={resumeData} />;
      case 'dark-header':
        return <DarkHeaderTemplate data={resumeData} />;
      case 'compact':
        return <CompactTemplate data={resumeData} />;
      case 'modern-green':
        return <ModernGreenTemplate data={resumeData} />;
      case 'creative':
        return <CreativeTemplate data={resumeData} />;
      case 'elegant-minimal':
        return <ElegantTemplate data={resumeData} />;
      case 'academic':
        return <AcademicTemplate data={resumeData} />;
      case 'international':
        return <InternationalTemplate data={resumeData} />;
      case 'placement':
      case 'madhumithra':
        return <PlacementTemplate data={resumeData} />;
      case 'modern':
      default:
        return <ModernSidebarTemplate data={resumeData} />;
    }
  };

  const sheet = (
    <div
      id={isThumbnail ? undefined : "resume-pdf-container"}
      ref={ref}
      className="resume-a4-sheet"
      style={{
        width: '794px', // 210mm at 96 DPI
        minHeight: '1123px', // 297mm at 96 DPI
        backgroundColor: '#ffffff',
        boxShadow: isThumbnail
          ? '0 4px 12px rgba(0, 0, 0, 0.08)'
          : '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        borderRadius: '2px',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.2s ease',
      }}
    >
      {renderTemplate()}
    </div>
  );

  if (isThumbnail) {
    return sheet;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: '#64748b15',
        overflowX: 'auto',
      }}
    >
      {sheet}
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
