import html2pdf from 'html2pdf.js';

export const exportResumeToPdf = async (elementOrId, resumeTitle = 'My_Resume') => {
  const element =
    typeof elementOrId === 'string'
      ? document.getElementById(elementOrId)
      : elementOrId;

  if (!element) {
    throw new Error('Resume element not found for PDF export.');
  }

  const safeFilename = `${resumeTitle.trim().replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;

  const opt = {
    margin: [0, 0, 0, 0], // Zero margins because padding is handled internally in templates
    filename: safeFilename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2, // 2x high resolution for super crisp text rendering
      useCORS: true,
      letterRendering: true,
      logging: false,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };

  try {
    await html2pdf().set(opt).from(element).save();
    return true;
  } catch (error) {
    console.error('html2pdf generation error, falling back to print:', error);
    // Graceful fallback to browser print if needed
    window.print();
    return false;
  }
};
