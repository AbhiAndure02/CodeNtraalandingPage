import { motion } from 'framer-motion';
import LAImage from '../assets/AU.png';
import AEImage from '../assets/CN.jpg';
import UMImage from '../assets/port.png';
import MRImage from '../assets/MR.jpeg';
import DMImage from '../assets/DR.png'; 
import ECImage from '../assets/EC.png'; 

export default function Projects() {
  const projects = [
    {
      title: 'Live Auction Platform',
      description:
        'A real-time bidding platform with WebSocket integration for instant updates, secure payment processing, and responsive UI design.',
      tags: ['Java', 'WebSockets', 'React', 'MongoDB'],
      image: LAImage,
      alt: 'Live Auction Platform screenshot'
    },
    {
      title: 'CodeNtraa Platform',
      description:
        'An interactive coding platform with real-time collaboration features, code execution, and learning management system integration.',
      tags: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
      image: AEImage,
      alt: 'CodeNtraa Platform screenshot'
    },
    {
      title: 'Modern Portfolio',
      description:
        'A responsive portfolio built with React + Vite, featuring 3D animations, dark/light mode, and optimized performance.',
      tags: ['React', 'Vite', 'Three.js', 'Tailwind CSS'],
      image: UMImage,
      alt: 'Portfolio screenshot'
    },
    {
      title: 'Marketing Research Tool',
      description:
        'Comprehensive analytics dashboard with real-time data visualization, role-based access control, and automated reporting features.',
      tags: ['React', 'Vite', 'Spring Boot', 'Microservices', 'JWT', 'Tailwind CSS'],
      image: MRImage,
      alt: 'Marketing Research Tool screenshot'
    },
    {
      title: 'Diabetic Macula Edema Grading',
      description:
        'AI-powered medical imaging analysis system that automatically grades severity of diabetic macula edema from retinal scans.',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'CNN', 'RNN', 'Medical Imaging'],
      image: DMImage,
      alt: 'Diabetic Macula Edema Grading screenshot'
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured online shopping platform with secure payment integration, inventory management, and personalized recommendations.',
      tags: ['React', 'Vite', 'Spring Boot', 'Microservices', 'Payment Gateway', 'JWT'],
      image: ECImage,
      alt: 'E-Commerce Platform screenshot'
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white/40 backdrop-blur-sm mx-[8%] mt-5"
    >
      <div className="mx-[8%]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d3557]">
            Featured Projects
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-[#ff758f]" />
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Each project represents a unique challenge and solution, showcasing my full-stack development capabilities across various domains.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl bg-black"
            >
              {/* Image with Hover Overlay */}
              <div className="h-48 relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-center p-4">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-white text-gray-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-white text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
