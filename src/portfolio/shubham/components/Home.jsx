import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    initialInView: false,

  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        ref={ref}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-fuchsia-500 opacity-10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="container mx-auto px-6 z-10"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I'm <span className="text-fuchsia-500">Shubham Bhakare</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Project Manager
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-400 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transforming ideas into successful digital products through strategic planning and agile execution.
              </motion.p>
              
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 border border-fuchsia-600 text-fuchsia-400 hover:bg-fuchsia-900/30 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  View Projects
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Avatar/Illustration */}
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center overflow-hidden">
                  {/* Replace with your image or illustration */}
                  <div className="text-6xl">👨‍💼</div>
                  
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div 
                    className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-fuchsia-400/20 backdrop-blur-sm"
                    animate={{
                      y: [0, 15, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div 
            className="fixed left-6 bottom-6 hidden md:flex flex-col space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: <FiGithub size={24} />, url: "#" },
              { icon: <FiLinkedin size={24} />, url: "#" },
              { icon: <FiTwitter size={24} />, url: "#" },
              { icon: <FiMail size={24} />, url: "#contact" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="text-gray-400 hover:text-fuchsia-500 transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-6 h-10 border-2 border-fuchsia-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-fuchsia-400 rounded-full mt-2"
                animate={{
                  y: [0, 5],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;