import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      title: "Full Stack Web Development",
      organization: "Tech Academy", 
      date: "2024",
      description: "Comprehensive course covering modern web development technologies, from frontend frameworks to backend APIs.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      skills: ["React", "Node.js", "MongoDB", "REST APIs"]
    },
    {
      title: "Data Analytics using Power BI",
      organization: "IEI, SRM Institute",
      date: "2023", 
      description: "Hands-on workshop focusing on data visualization, business intelligence, and dashboard creation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      skills: ["Power BI", "Data Visualization", "Business Intelligence"]
    },
    {
      title: "Gesture-Controlled Interface Project",
      organization: "University Project",
      date: "2023",
      description: "Successfully completed and demonstrated gesture-based laptop control system using computer vision.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      skills: ["Computer Vision", "OpenCV", "Python", "HCI"]
    }
  ];

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-portfolio-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-portfolio-primary mr-2" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Certificates & Achievements
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </motion.div>

        {/* Certificate Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <Card className="shadow-soft-lg border-none dark:bg-portfolio-darker overflow-hidden">
            <div className="relative">
              {/* Certificate Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={certificates[currentIndex].image}
                  alt={certificates[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevCertificate}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextCertificate}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Certificate Content */}
              <CardContent className="p-8">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {certificates[currentIndex].title}
                      </h3>
                      <p className="text-portfolio-primary font-semibold">
                        {certificates[currentIndex].organization}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium mt-2 sm:mt-0">
                      {certificates[currentIndex].date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {certificates[currentIndex].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Skills Acquired:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {certificates[currentIndex].skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                          className="px-3 py-1 text-sm bg-portfolio-primary/10 text-portfolio-primary rounded-full"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white group">
                    <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View Certificate
                  </Button>
                </motion.div>
              </CardContent>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-portfolio-primary scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-portfolio-primary/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Certificates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            All Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setCurrentIndex(index)}
                className="cursor-pointer"
              >
                <Card className={`shadow-soft hover:shadow-soft-lg transition-all duration-300 border-2 ${
                  index === currentIndex ? 'border-portfolio-primary' : 'border-transparent'
                } dark:bg-portfolio-darker`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {cert.organization} • {cert.date}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
