import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import neha from '../assets/NehaProfile.png'

const Hero = () => {
  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute bottom-0 left-0 right-0 text-blue-100" 
          viewBox="0 0 1440 320"
        >
          <path 
            fill="currentColor" 
            fillOpacity="0.4" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg 
          className="absolute bottom-0 left-0 right-0 text-blue-300" 
          viewBox="0 0 1440 320"
        >
          <path 
            fill="currentColor" 
            fillOpacity="0.6" 
            d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,250.7C960,267,1056,277,1152,272C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-left"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-4 text-blue-600"
            >
              NEHA JADHAV
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            >
              Director of <span className="text-blue-600">CodeNtraa</span>
            </motion.h2>
            
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-8 text-gray-600"
            >
              Full-Stack Developer | Cloud Architect
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl mb-10 leading-relaxed text-gray-700"
            >
              Leading software innovation with expertise in Java, React, and AWS cloud solutions. 
              Specializing in building scalable enterprise applications with exceptional user experiences.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30"
            >
              Contact Me <FiArrowRight />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://codentraa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-semibold border-2 flex items-center gap-2 transition-all border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg shadow-blue-500/10"
            >
              Visit Our Company
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column - Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-200/30"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Profile Image with 3D Effect */}
            <motion.div
              className="w-full h-full"
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.05
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <img 
                src={neha}
                alt="Neha Jadhav" 
                className="w-full h-full object-cover"
                style={{
                  filter: 'contrast(1.05) brightness(1.05)'
                }}
              />
            </motion.div>
            
            {/* Floating Animation */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero