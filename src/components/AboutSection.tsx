
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-portfolio-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <User className="w-8 h-8 text-portfolio-primary mr-2" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 shadow-soft dark:bg-portfolio-darker border-none">
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    🧑‍💻 Who I Am
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    I'm a passionate and results-driven final year engineering student with expertise spanning 
                    <span className="text-portfolio-primary font-semibold"> Software Development</span>, 
                    <span className="text-portfolio-secondary font-semibold"> Web Development</span>, and 
                    <span className="text-portfolio-accent font-semibold"> AI/ML Technologies</span>.
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    My technical arsenal includes <span className="text-portfolio-primary font-semibold">Python</span> and 
                    <span className="text-portfolio-secondary font-semibold"> Java programming</span>, modern web technologies, 
                    and cutting-edge <span className="text-portfolio-accent font-semibold">AI prompt engineering</span>. 
                    I excel at transforming complex requirements into elegant, scalable solutions.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-portfolio-secondary font-medium text-lg">
                    I'm always eager to tackle new challenges and turn creative ideas into reality.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-portfolio-darker p-6 rounded-xl shadow-soft border border-portfolio-primary/20"
            >
              <div className="flex items-center mb-3">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Passion</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Building innovative solutions that make a real impact on people's lives through technology.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-portfolio-darker p-6 rounded-xl shadow-soft border border-portfolio-secondary/20"
            >
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-portfolio-secondary mr-3" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Goals</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                To become a full-stack developer who bridges the gap between AI and web development.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-portfolio-darker p-6 rounded-xl shadow-soft border border-portfolio-accent/20"
            >
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-full mr-3"></div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Philosophy</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Clean code is not just about making it work, but making it beautiful and maintainable."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
