
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Web Development",
      icon: Code,
      color: "text-portfolio-primary",
      bgColor: "bg-portfolio-primary/10",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design", "UI/UX"]
    },
    {
      title: "Programming & Tools",
      icon: Database,
      color: "text-portfolio-secondary",
      bgColor: "bg-portfolio-secondary/10",
      skills: ["Java", "Spring Boot", "Git & GitHub", "MySQL", "REST APIs", "Version Control"]
    },
    {
      title: "AI & Data",
      icon: Brain,
      color: "text-portfolio-accent",
      bgColor: "bg-portfolio-accent/10",
      skills: ["AI Tools", "Power BI", "Data Analytics", "Computer Vision", "OpenCV", "Python"]
    },
    {
      title: "Soft Skills",
      icon: Wrench,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: ["Problem-solving", "Teamwork", "Fast Learner", "Communication", "Leadership", "Adaptability"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-portfolio-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Wrench className="w-8 h-8 text-portfolio-primary mr-2" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for modern web development and AI integration
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full shadow-soft hover:shadow-soft-lg transition-all duration-300 border-none dark:bg-portfolio-dark">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${category.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                      {category.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.1 * skillIndex + 0.3 * index, duration: 0.4 }}
                          className="flex items-center"
                        >
                          <div className={`w-2 h-2 ${category.color.replace('text-', 'bg-')} rounded-full mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
