
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Eye, FileText, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const Resume = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Resume items - you can add PDF URL here when available
  const resumeItems = [
    {
      type: 'image',
      url: '/lovable-uploads/569edaec-7c4b-49ea-9b82-e5e05d7033a3.png',
      title: 'Resume Page 1',
      description: 'Professional summary and education'
    },
    {
      type: 'image', 
      url: '/lovable-uploads/4fbbafd5-55fb-4e95-9138-b0576b27adc1.png',
      title: 'Resume Page 2',
      description: 'Skills and experience details'
    }
  ];

  // You can uncomment this when you have a PDF version
  // const pdfUrl = '/resume/Abiston_Resume.pdf';

  const handleDownload = () => {
    // For now, we'll download the current image
    // When PDF is available, you can use: window.open(pdfUrl, '_blank');
    const link = document.createElement('a');
    link.href = resumeItems[currentIndex].url;
    link.download = `Abiston_Resume_Page_${currentIndex + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const toggleFullscreen = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-portfolio-darker dark:via-portfolio-dark dark:to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-portfolio-darker/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
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
            
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-portfolio-primary" />
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Resume
              </h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              
              <span className="text-sm text-gray-600 dark:text-gray-300 min-w-[60px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
              >
                <Maximize2 className="w-4 h-4" />
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
        {resumeItems.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="flex space-x-2 bg-white dark:bg-portfolio-dark rounded-lg p-1 shadow-soft">
              {resumeItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-portfolio-primary text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Page {index + 1}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Resume Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`${isZoomed ? 'fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4' : ''}`}
        >
          {isZoomed && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
          )}
          
          <Card className={`${isZoomed ? 'max-w-none max-h-none' : 'max-w-4xl mx-auto'} shadow-2xl border-none overflow-hidden`}>
            <CardContent className="p-0">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-auto"
                style={{ 
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.3s ease'
                }}
              >
                <img
                  src={resumeItems[currentIndex].url}
                  alt={resumeItems[currentIndex].title}
                  className="w-full h-auto max-w-full"
                  style={{ 
                    maxHeight: isZoomed ? '90vh' : '80vh',
                    objectFit: 'contain'
                  }}
                />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Resume Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {resumeItems[currentIndex].title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {resumeItems[currentIndex].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleDownload}
              className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/#contact')}
              className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary hover:text-white px-8 py-3 rounded-full transition-all duration-300 group"
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
