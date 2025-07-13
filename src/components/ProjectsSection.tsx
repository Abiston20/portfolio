
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder, Brain, Hand, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI-Based Career Counselor",
      description: "An intelligent web platform that recommends careers based on user input, interests, and skills using AI-driven logic.",
      techStack: ["React", "Spring Boot", "AI APIs", "MySQL"],
      features: ["Dynamic recommendations", "Clean UI", "Responsive design"],
      status: "Ongoing",
      icon: Brain,
      color: "text-portfolio-primary",
      bgColor: "bg-portfolio-primary/10",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      title: "Gesture-Controlled Laptop Interface",
      description: "Built a system using hand gestures to control laptop functions—useful in touchless computing environments.",
      techStack: ["OpenCV", "Python", "Computer Vision"],
      features: ["Touchless control", "Real-time processing", "Multiple gestures"],
      status: "Completed",
      icon: Hand,
      color: "text-portfolio-secondary",
      bgColor: "bg-portfolio-secondary/10",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      title: "Personal Portfolio Website",
      description: "Responsive website to showcase my work, skills, and background. Designed with animations and modern UI principles.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      features: ["Responsive design", "Smooth animations", "Dark mode"],
      status: "Live",
      icon: Globe,
      color: "text-portfolio-accent",
      bgColor: "bg-portfolio-accent/10",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-portfolio-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Folder className="w-8 h-8 text-portfolio-primary mr-2" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my latest work in web development and AI
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full shadow-soft hover:shadow-soft-lg transition-all duration-300 border-none overflow-hidden dark:bg-portfolio-darker">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className={`absolute top-4 right-4 w-12 h-12 ${project.bgColor} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === 'Ongoing' ? 'bg-yellow-500/20 text-yellow-600' :
                        project.status === 'Completed' ? 'bg-green-500/20 text-green-600' :
                        'bg-blue-500/20 text-blue-600'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-portfolio-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-xs text-gray-600 dark:text-gray-300 flex items-center">
                            <div className={`w-1.5 h-1.5 ${project.color.replace('text-', 'bg-')} rounded-full mr-2`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 group-hover:border-portfolio-primary group-hover:text-portfolio-primary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
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

export default ProjectsSection;
