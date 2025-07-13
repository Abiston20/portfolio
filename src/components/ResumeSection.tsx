import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Calendar, MapPin, Trophy, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "B.Tech Information Technology",
      organization: "Loyola Institute of Technology",
      period: "2022 - 2026",
      location: "Chennai",
      description: "Final year student pursuing Bachelor of Technology in Information Technology with focus on software development and emerging technologies.",
      highlights: ["Software Development", "Web Technologies", "Database Management"],
      type: "education"
    },
    {
      title: "AI-Based Career Counselor Project",
      organization: "Final Year Project", 
      period: "2025 - Present",
      location: "Self-Directed",
      description: "Leading the development of an intelligent web platform for career guidance using AI recommendations.",
      highlights: ["AI Integration", "Full-Stack Development", "User Research"],
      type: "project"
    },
    {
      title: "Gesture-Controlled Interface",
      organization: "Personal Project",
      period: "2023",
      location: "Self-Directed", 
      description: "Developed a computer vision system for touchless laptop control using hand gestures.",
      highlights: ["Computer Vision", "OpenCV", "Python Programming"],
      type: "project"
    }
  ];

  const achievements = [
    {
      title: "NEXATHON'25 Participant",
      organization: "KCG College of Technology",
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      title: "Top 10 Finalists",
      organization: "Mini Project Expo - Gesture System",
      icon: Trophy,
      color: "text-portfolio-primary"
    },
    {
      title: "AI & Data Analytics Certified",
      organization: "Multiple Certifications",
      icon: FileText,
      color: "text-portfolio-secondary"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-portfolio-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-portfolio-primary mr-2" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Resume & Experience
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            My journey in technology and software development
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Calendar className="w-6 h-6 text-portfolio-primary mr-2" />
              Education & Experience Timeline
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className={`w-4 h-4 ${exp.type === 'education' ? 'bg-portfolio-secondary' : 'bg-portfolio-primary'} rounded-full`}>
                        {exp.type === 'education' && (
                          <GraduationCap className="w-3 h-3 text-white absolute -ml-0.5 -mt-0.5" />
                        )}
                      </div>
                      {index !== experiences.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
                      )}
                    </div>
                    
                    <Card className="flex-1 shadow-soft dark:bg-portfolio-dark border-none">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {exp.title}
                          </h4>
                          <span className="text-sm text-portfolio-primary font-medium">
                            {exp.period}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-3">
                          <span className="font-medium">{exp.organization}</span>
                          <span className="mx-2">•</span>
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className={`px-3 py-1 text-xs rounded-full ${
                                exp.type === 'education' 
                                  ? 'bg-portfolio-secondary/10 text-portfolio-secondary'
                                  : 'bg-portfolio-primary/10 text-portfolio-primary'
                              }`}
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Trophy className="w-6 h-6 text-portfolio-primary mr-2" />
              Achievements
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Card className="shadow-soft hover:shadow-soft-lg transition-all duration-300 dark:bg-portfolio-dark border-none">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className={`w-10 h-10 ${achievement.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                            <IconComponent className={`w-5 h-5 ${achievement.color}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                              {achievement.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                              {achievement.organization}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
