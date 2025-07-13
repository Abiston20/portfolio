
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const resumeImages = [
    '/lovable-uploads/569edaec-7c4b-49ea-9b82-e5e05d7033a3.png',
    '/lovable-uploads/4fbbafd5-55fb-4e95-9138-b0576b27adc1.png'
  ];

  const handleDownload = () => {
    // Create a link to download both images as a PDF or trigger individual downloads
    resumeImages.forEach((image, index) => {
      const link = document.createElement('a');
      link.href = image;
      link.download = `resume-page-${index + 1}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-portfolio-darker dark:to-portfolio-dark">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-10 bg-white/80 dark:bg-portfolio-darker/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-portfolio-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Resume
            </h1>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resume Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex space-x-2">
            {resumeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-portfolio-primary text-white shadow-lg'
                    : 'bg-white dark:bg-portfolio-darker text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-portfolio-dark'
                }`}
              >
                Page {index + 1}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resume Image Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="bg-white dark:bg-portfolio-darker rounded-2xl shadow-2xl p-6 max-w-4xl w-full">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-lg"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            >
              <img
                src={resumeImages[currentPage]}
                alt={`Resume page ${currentPage + 1}`}
                className="w-full h-auto shadow-lg rounded-lg"
                style={{ maxHeight: '80vh', objectFit: 'contain' }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        {resumeImages.length > 1 && (
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <span className="text-gray-600 dark:text-gray-300">
              {currentPage + 1} of {resumeImages.length}
            </span>
            
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(resumeImages.length - 1, prev + 1))}
              disabled={currentPage === resumeImages.length - 1}
              className="flex items-center"
            >
              Next
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
