
import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-portfolio-darker dark:via-portfolio-dark dark:to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/20 via-portfolio-secondary/15 to-portfolio-accent/20 animate-gradient-shift bg-[length:400%_400%]"></div>
        
        {/* Additional gradient layers for more depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-portfolio-primary/5 to-portfolio-secondary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-100/30 via-transparent to-blue-100/30 dark:from-purple-900/20 dark:to-blue-900/20"></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${12 + i * 2} h-${12 + i * 2} bg-gradient-to-r from-portfolio-primary/30 to-portfolio-secondary/25 rounded-full blur-xl`}
            animate={{
              x: [0, 120 + i * 20, 0],
              y: [0, -120 - i * 15, 0],
              scale: [1, 1.3 + i * 0.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${5 + i * 12}%`,
              top: `${15 + i * 8}%`,
            }}
          />
        ))}
        
        {/* Additional smaller floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute w-6 h-6 bg-gradient-to-r from-portfolio-accent/40 to-portfolio-primary/30 rounded-full blur-sm"
            animate={{
              x: [0, -80 - i * 10, 0],
              y: [0, 100 + i * 20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              right: `${10 + i * 15}%`,
              top: `${25 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-portfolio-primary dark:text-portfolio-accent font-medium mb-4"
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-accent bg-clip-text text-transparent"
          >
            Abiston
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-light"
          >
            Software & Web Developer | Python Programmer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            I build modern web applications and AI-powered solutions. Let's create something impactful together!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#resume')}
              className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 group"
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View My Resume
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#projects')}
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              See My Projects
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary hover:text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <ChevronDown className="w-8 h-8 text-portfolio-primary dark:text-portfolio-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
