import html2canvas from 'html2canvas';

/**
 * Export document node to PNG Image file
 */
export async function exportToPNG(element, filename = 'document.png') {
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 3, // High resolution crisp output
      useCORS: true,
      backgroundColor: '#FFFFFF',
      logging: false,
    });

    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('Failed to export PNG:', error);
    alert('Export failed. Please try again.');
  }
}
