import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Export document node to high-res PDF
 */
export async function exportToPDF(element, filename = 'document.pdf', isLandscape = false) {
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 3, // High DPI for crisp vector-like PDF printing
      useCORS: true,
      backgroundColor: '#FFFFFF',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdfOrientation = isLandscape ? 'landscape' : 'portrait';

    // Standard A4 dimensions in mm: 297x210 for landscape, 210x297 for portrait
    const pdf = new jsPDF({
      orientation: pdfOrientation,
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    alert('Export failed. Please try again.');
  }
}
