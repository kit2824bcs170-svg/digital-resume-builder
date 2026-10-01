import React from 'react';
import ResumePreview from '../preview/ResumePreview';
import { SAMPLE_RESUME_DATA, MADHU_MITHRA_DATA } from '../../utils/sampleData';

/**
 * TemplateThumbnail
 * Renders a high-fidelity miniature scaled preview of the ACTUAL template
 * with realistic content, matching the visual standard of Kickresume & Resume.io.
 */
const TemplateThumbnail = ({ templateId = 'modern-sidebar', accentColor, width, height }) => {
  // Use placement-specific sample data if placement template, otherwise standard professional sample data
  const baseData =
    templateId === 'placement' || templateId === 'madhumithra'
      ? MADHU_MITHRA_DATA
      : SAMPLE_RESUME_DATA;

  const mockData = {
    ...baseData,
    selectedTemplate: templateId,
    themeColor: accentColor || baseData.themeColor,
  };

  // Determine scale factor based on dimensions
  // 794px is the native width, 1123px is the native height of standard A4 sheet
  let scale = 0.30;
  if (width && height) {
    scale = Math.min(width / 794, height / 1123);
  } else if (width) {
    scale = width / 794;
  } else if (height) {
    scale = height / 1123;
  }

  return (
    <div
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: '794px',
          height: '1123px',
          flexShrink: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.08)',
          borderRadius: '4px',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
        }}
      >
        <ResumePreview resumeData={mockData} isThumbnail={true} />
      </div>
    </div>
  );
};

export default TemplateThumbnail;
