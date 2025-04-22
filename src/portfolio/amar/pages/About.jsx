import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi'

// Skills Array
const skills = [
  { name: 'Frontend', icon: <FiCode size={24} />, items: ['React', 'HTML/CSS', 'Tailwind', 'JavaScript'] },
  { name: 'Backend', icon: <FiDatabase size={24} />, items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs'] },
  { name: 'UI/UX', icon: <FiLayers size={24} />, items: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'] },
  { name: 'DevOps', icon: <FiCpu size={24} />, items: ['Git', 'CI/CD', 'AWS', 'Docker'] },
]

export default function About() {
  return (
    <section id="about" className="py-0 bg-transparent">
      {/* Container with background and side margins */}
      <div className="bg-black/60 mx-[8%] px-6 py-12 shadow-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-[#ff758f]" />
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            "As the visionary leader behind CodeNtraa,
            I bring a dynamic fusion of technical expertise and strategic innovation.
            With a strong foundation in full-stack development, UI/UX design, and DevOps,
            I specialize in crafting scalable and high-performance software solutions.
            My proficiency in React, Java, Spring Boot, and cloud technologies enables me to drive digital transformation while ensuring seamless user experiences.
            Passionate about real-time systems, deep learning, and deployment management, I lead with a problem-solving mindset, fostering innovation and excellence within my team."
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Who I Am
            </h3>
            <p className="mb-4 text-gray-200 text-justify">

              I am dedicated to driving technological innovation and business growth.
              With years of experience in <strong>software development, system architecture, and cloud computing</strong>,
              I have led multiple teams to successfully deliver robust and scalable solutions.
              My expertise spans across <strong>frontend and backend technologies, UI/UX design, and DevOps</strong>,
              allowing me to bridge the gap between design, development, and deployment.
              At CodeNtraa, I focus on fostering a culture of excellence,
              ensuring that our solutions are not only efficient but also future-ready.
              My passion for <strong>real-time systems, deep learning, and automation</strong> keeps me at the forefront of emerging technologies, constantly pushing the boundaries of what’s possible."
            </p>

            <p className="mb-6 text-gray-200 text-justify">
              With a strong interest in real-time systems, deep learning, and
              cloud technologies, I constantly seek innovative ways to solve
              complex problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-black/60 text-white">
                <span className="font-medium">Location:</span> Pune, India
              </div>
              <div className="px-4 py-2 rounded-lg bg-black/60 text-white">
                <span className="font-medium">Email:</span> amarambure99@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Right Block - My Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              My Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-white text-gray-800 shadow-lg"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full mr-3 bg-[#e63946] text-white">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold">{skill.name}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 rounded-full mr-2 bg-[#e63946]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
