import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import auction from '../assets/aution.jpg'
import codeNtraa from '../assets/cn.jpg'
import Retinopathy from '../assets/DR_eye.jpg'
import Face from '../assets/face.png'
import HRMS from '../assets/HRMS.jpg'
import Portfolio from '../assets/port.jpg'

const Projects = () => {
  const projects = [
    {
      title: "Live Auction Project",
      description: "A real-time Live Auction Platform built with React, Material UI, Java, Spring Boot, and MySQL. It offers seamless bidding, secure transactions, real-time updates, fair winner selection, and high-performance scalability.",
      tags: ["React", "Material UI", "Java", "Spring Boot", "MySQL"],
      github: "#",
      live: "#",
      image: auction 
    },
    {
      title: "CodeNtraa Website Development",
      description: "Responsive, dynamic and animated web application development using latest technologies to enhance user experience.",
      tags: ["React", "Motion-Frame", "Tailwind CSS", "NodeJs", "Express", "MongoDB", "AWS-EC2"],
      github: "#",
      live: "#",
      image: codeNtraa
    },
    {
      title: "Automatic Diabetic Macular Edema Grading",
      description: "An automated system for grading Diabetic Macular Edema using deep learning techniques on retinal images to assist early diagnosis and treatment planning.",
      tags: ["Python", "TensorFlow", "CNN", "RNN", "Open-CV"],
      github: "#",
      live: "#",
      image: Retinopathy
    },
    {
      title: "Face Recognition System",
      description: "Real-time face recognition system using AI/computer vision. Processes live video/images for security, attendance tracking, and user authentication.",
      tags: ["Python", "Open-CV", "Flask", "Haar Cascade", "Face Recognition Library"],
      github: "#",
      live: "#",
      image: Face
    },
    {
      title: "My Portfolio",
      description: "A creative and interactive portfolio showcasing my skills in web development, UI/UX design, and modern front-end technologies.",
      tags: ["React", "Tailwind-CSS", "Motion-Frame", "React-Scroll"],
      github: "#",
      live: "#",
      image: Portfolio
    },
    {
      title: "HR Management System",
      description: "Comprehensive HR solution with employee management, attendance tracking, and analytics.",
      tags: ["UI/UX", "React", "Material UI", "Java", "Spring-Boot", "MySQL"],
      github: "#",
      live: "#",
      image: HRMS
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#000]">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <div className="w-20 h-1 mx-auto bg-[#00BFFF] rounded-full"></div>
      </motion.div>

      <motion.p
        className="text-center max-w-2xl mx-auto mb-12 text-white/80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Here are some of my notable projects. Each one was built to solve specific problems and deliver value.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              type: 'spring',
              stiffness: 100
            }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -10 }}
            className="rounded-xl overflow-hidden bg-[#1d1d1d]/60 backdrop-blur-sm border border-[#a8dadc]/20 transition-all duration-300 shadow-lg"
          >
            {/* Image */}
            <motion.div 
              className="h-48 overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="p-6">
              <motion.h3 
                className="text-xl font-bold mb-2 text-white"
                whileHover={{ color: '#00BFFF' }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>

              <p className="mb-4 text-white/70">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs rounded-full bg-[#00BFFF]/10 text-[#00BFFF]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 text-white/60 hover:text-[#00BFFF] transition-colors"
                >
                  <FiGithub className="text-lg" />
                  <span>Code</span>
                </motion.a>

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 text-white/60 hover:text-[#00BFFF] transition-colors"
                >
                  <FiExternalLink className="text-lg" />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
